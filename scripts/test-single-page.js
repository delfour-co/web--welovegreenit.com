#!/usr/bin/env node

/**
 * Script pour tester une seule page (performance et éco-conception)
 * 
 * Ce script peut être exécuté en parallèle pour tester plusieurs pages simultanément.
 * Usage: node scripts/test-single-page.js <URL> [BASE_URL]
 * 
 * Exemple: node scripts/test-single-page.js / http://localhost:1313
 */

import { chromium } from 'playwright';
import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';
import { readFileSync, existsSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

// Charger la configuration
let config = {};
const configPath = join(projectRoot, 'greenit.config.json');
if (existsSync(configPath)) {
  try {
    config = JSON.parse(readFileSync(configPath, 'utf-8'));
  } catch (error) {
    console.error('❌ Erreur lors du chargement de greenit.config.json');
    process.exit(1);
  }
}

// Valeurs par défaut
const DEFAULT_CONFIG = {
  performance: 80,
  accessibility: 90,
  bestPractices: 80,
  seo: 90,
  maxPageSize: 500,
  maxTotalRequests: 50,
  maxImageSize: 200,
  maxCarbonFootprint: 1.0,
  port: 1313
};

config = { ...DEFAULT_CONFIG, ...config };

/**
 * Convertit les bytes en KB
 */
function bytesToKB(bytes) {
  return (bytes / 1024).toFixed(2);
}

/**
 * Calcule l'empreinte carbone approximative d'une page
 */
function calculateCarbonFootprint(transferSize, requests) {
  const transferSizeGB = transferSize / (1024 * 1024 * 1024);
  const carbonPerGB = 0.5; // kg CO2
  const carbonFootprint = transferSizeGB * carbonPerGB * 1000; // en grammes
  return carbonFootprint;
}

/**
 * Analyse une page avec Lighthouse
 */
async function analyzeWithLighthouse(url, baseURL) {
  const fullURL = `${baseURL}${url}`;
  
  let chromePath;
  try {
    chromePath = resolve(chromium.executablePath());
  } catch (error) {
    chromePath = null;
  }
  
  if (chromePath && !existsSync(chromePath)) {
    chromePath = null;
  }
  
  let chrome;
  const chromeFlags = [
    '--headless',
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--disable-dev-shm-usage',
    '--disable-gpu',
    '--disable-software-rasterizer'
  ];
  
  try {
    if (chromePath) {
      chrome = await chromeLauncher.launch({
        chromePath: chromePath,
        chromeFlags: chromeFlags
      });
    } else {
      chrome = await chromeLauncher.launch({
        chromeFlags: chromeFlags
      });
    }
  } catch (error) {
    throw new Error(
      `Impossible de lancer Chrome.\n` +
      `Erreur: ${error.message}\n` +
      `Veuillez installer Chrome ou les navigateurs Playwright avec: npx playwright install chromium`
    );
  }
  
  const options = {
    logLevel: 'error',
    output: 'json',
    onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
    port: chrome.port,
  };
  
  try {
    const runnerResult = await lighthouse(fullURL, options);
    const lhr = runnerResult.lhr;
    
    if (!lhr || !lhr.categories) {
      await chrome.kill();
      throw new Error('Lighthouse n\'a pas retourné de résultats valides');
    }
    
    const categories = lhr.categories;
    await chrome.kill();
    
    const getScore = (category) => {
      if (!category || category.score === null || category.score === undefined) {
        return 0;
      }
      return Math.round(category.score * 100);
    };
    
    const performance = categories.performance || categories['performance'];
    const accessibility = categories.accessibility || categories['accessibility'];
    const bestPractices = categories['best-practices'] || categories.bestPractices;
    const seo = categories.seo || categories['seo'];
    
    return {
      performance: getScore(performance),
      accessibility: getScore(accessibility),
      bestPractices: getScore(bestPractices),
      seo: getScore(seo),
      metrics: {
        firstContentfulPaint: lhr.audits?.['first-contentful-paint']?.numericValue || 0,
        largestContentfulPaint: lhr.audits?.['largest-contentful-paint']?.numericValue || 0,
        totalBlockingTime: lhr.audits?.['total-blocking-time']?.numericValue || 0,
        cumulativeLayoutShift: lhr.audits?.['cumulative-layout-shift']?.numericValue || 0,
      }
    };
  } catch (error) {
    await chrome.kill();
    throw error;
  }
}

/**
 * Analyse une page avec Playwright pour obtenir des métriques réseau
 */
async function analyzeNetworkMetrics(url, baseURL) {
  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  
  const networkData = {
    requests: [],
    totalSize: 0,
    images: [],
    scripts: [],
    stylesheets: [],
    fonts: [],
    other: []
  };
  
  page.on('response', async (response) => {
    const request = response.request();
    const url = response.url();
    const headers = response.headers();
    
    let size = 0;
    try {
      const buffer = await response.body().catch(() => null);
      if (buffer) {
        size = buffer.length;
      } else {
        size = parseInt(headers['content-length'] || '0', 10);
      }
    } catch (error) {
      size = parseInt(headers['content-length'] || '0', 10);
    }
    
    const resource = {
      url,
      method: request.method(),
      status: response.status(),
      size: size,
      type: request.resourceType()
    };
    
    networkData.requests.push(resource);
    networkData.totalSize += size;
    
    if (resource.type === 'image') {
      networkData.images.push(resource);
    } else if (resource.type === 'script') {
      networkData.scripts.push(resource);
    } else if (resource.type === 'stylesheet') {
      networkData.stylesheets.push(resource);
    } else if (resource.type === 'font') {
      networkData.fonts.push(resource);
    } else if (resource.type !== 'document') {
      networkData.other.push(resource);
    }
  });
  
  try {
    await page.goto(`${baseURL}${url}`, { 
      waitUntil: 'networkidle',
      timeout: 30000
    });
    await page.waitForTimeout(2000);
  } catch (error) {
    console.warn(`⚠️  Erreur lors du chargement de ${url}:`, error.message);
  } finally {
    await browser.close();
  }
  
  return networkData;
}

/**
 * Vérifie les seuils de performance
 */
function checkPerformanceThresholds(lighthouseResults, networkData, url, baseURL) {
  const checks = [];
  
  if (lighthouseResults.performance < config.performance) {
    checks.push({
      type: 'error',
      message: `Performance Lighthouse: ${lighthouseResults.performance}/100 (seuil: ${config.performance})`
    });
  } else {
    checks.push({
      type: 'success',
      message: `✅ Performance Lighthouse: ${lighthouseResults.performance}/100`
    });
  }
  
  if (lighthouseResults.accessibility < config.accessibility) {
    checks.push({
      type: 'error',
      message: `Accessibilité Lighthouse: ${lighthouseResults.accessibility}/100 (seuil: ${config.accessibility})`
    });
  } else {
    checks.push({
      type: 'success',
      message: `✅ Accessibilité Lighthouse: ${lighthouseResults.accessibility}/100`
    });
  }
  
  if (lighthouseResults.bestPractices < config.bestPractices) {
    checks.push({
      type: 'error',
      message: `Bonnes pratiques Lighthouse: ${lighthouseResults.bestPractices}/100 (seuil: ${config.bestPractices})`
    });
  } else {
    checks.push({
      type: 'success',
      message: `✅ Bonnes pratiques Lighthouse: ${lighthouseResults.bestPractices}/100`
    });
  }
  
  const pageSizeKB = bytesToKB(networkData.totalSize);
  if (networkData.totalSize > config.maxPageSize * 1024) {
    checks.push({
      type: 'error',
      message: `Taille totale de la page: ${pageSizeKB} KB (seuil: ${config.maxPageSize} KB)`
    });
  } else {
    checks.push({
      type: 'success',
      message: `✅ Taille totale de la page: ${pageSizeKB} KB`
    });
  }
  
  if (networkData.requests.length > config.maxTotalRequests) {
    checks.push({
      type: 'error',
      message: `Nombre de requêtes HTTP: ${networkData.requests.length} (seuil: ${config.maxTotalRequests})`
    });
  } else {
    checks.push({
      type: 'success',
      message: `✅ Nombre de requêtes HTTP: ${networkData.requests.length}`
    });
  }
  
  const largeImages = networkData.images.filter(img => img.size > config.maxImageSize * 1024);
  if (largeImages.length > 0) {
    checks.push({
      type: 'warning',
      message: `⚠️  ${largeImages.length} image(s) dépassent ${config.maxImageSize} KB:`
    });
    largeImages.forEach(img => {
      checks.push({
        type: 'warning',
        message: `   - ${img.url.split('/').pop()}: ${bytesToKB(img.size)} KB`
      });
    });
  }
  
  const carbonFootprint = calculateCarbonFootprint(networkData.totalSize, networkData.requests.length);
  if (carbonFootprint > config.maxCarbonFootprint) {
    checks.push({
      type: 'error',
      message: `Empreinte carbone: ${carbonFootprint.toFixed(3)} g CO2 (seuil: ${config.maxCarbonFootprint} g)`
    });
  } else {
    checks.push({
      type: 'success',
      message: `✅ Empreinte carbone: ${carbonFootprint.toFixed(3)} g CO2`
    });
  }
  
  const baseURLHostname = new URL(baseURL).hostname;
  const externalResources = networkData.requests.filter(req => {
    try {
      const reqUrl = new URL(req.url);
      return reqUrl.hostname !== baseURLHostname;
    } catch {
      return false;
    }
  });
  
  if (externalResources.length > 0) {
    checks.push({
      type: 'warning',
      message: `⚠️  ${externalResources.length} ressource(s) externe(s) détectée(s) (peut impacter la vie privée et la performance)`
    });
  }
  
  return checks;
}

/**
 * Fonction principale
 */
async function main() {
  const url = process.argv[2];
  const baseURL = process.argv[3] || process.env.BASE_URL || `http://localhost:${config.port}`;
  
  if (!url) {
    console.error('❌ Usage: node scripts/test-single-page.js <URL> [BASE_URL]');
    process.exit(1);
  }
  
  let lighthouseResults = null;
  let networkData = null;
  const errors = [];
  
  try {
    lighthouseResults = await analyzeWithLighthouse(url, baseURL);
  } catch (error) {
    errors.push(`Lighthouse: ${error.message}`);
  }
  
  try {
    networkData = await analyzeNetworkMetrics(url, baseURL);
  } catch (error) {
    errors.push(`Réseau: ${error.message}`);
  }
  
  if (!lighthouseResults && !networkData) {
    const result = {
      url,
      error: `Toutes les analyses ont échoué: ${errors.join('; ')}`,
      checks: [{
        type: 'error',
        message: `Erreur critique: ${errors.join('; ')}`
      }]
    };
    console.log(JSON.stringify(result));
    process.exit(1);
  }
  
  let checks = [];
  if (lighthouseResults && networkData) {
    checks = checkPerformanceThresholds(lighthouseResults, networkData, url, baseURL);
  } else {
    if (lighthouseResults) {
      checks.push({
        type: 'warning',
        message: '⚠️  Analyse réseau indisponible, seules les métriques Lighthouse sont disponibles'
      });
    }
    if (networkData) {
      checks.push({
        type: 'warning',
        message: '⚠️  Analyse Lighthouse indisponible, seules les métriques réseau sont disponibles'
      });
    }
  }
  
  const result = {
    url,
    lighthouse: lighthouseResults,
    network: networkData ? {
      totalSize: networkData.totalSize,
      totalSizeKB: bytesToKB(networkData.totalSize),
      requestsCount: networkData.requests.length,
      imagesCount: networkData.images.length,
      scriptsCount: networkData.scripts.length,
      stylesheetsCount: networkData.stylesheets.length,
      fontsCount: networkData.fonts.length
    } : null,
    checks,
    partialError: errors.length > 0 ? errors.join('; ') : null
  };
  
  // Sortie JSON pour être parsée par l'orchestrateur
  console.log(JSON.stringify(result));
  
  // Exit code basé sur les erreurs
  const hasErrors = checks.some(c => c.type === 'error');
  process.exit(hasErrors ? 1 : 0);
}

main().catch(error => {
  const errorResult = {
    url: process.argv[2] || 'unknown',
    error: error.message,
    checks: [{
      type: 'error',
      message: `Erreur fatale: ${error.message}`
    }]
  };
  console.log(JSON.stringify(errorResult));
  process.exit(1);
});
