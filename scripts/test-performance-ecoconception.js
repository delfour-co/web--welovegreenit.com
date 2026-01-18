#!/usr/bin/env node

/**
 * Script orchestrateur pour les tests de performance et d'éco-conception
 * 
 * Ce script lance les tests en parallèle pour toutes les URLs configurées
 * et génère un rapport consolidé.
 * 
 * Usage: node scripts/test-performance-ecoconception.js [BASE_URL]
 */

import { spawn } from 'child_process';
import { readFileSync, existsSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

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

const DEFAULT_CONFIG = {
  urls: ['/', '/metiers/', '/about/'],
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
 * Exécute un test pour une URL
 */
function testSinglePage(url, baseURL) {
  return new Promise((resolve, reject) => {
    const scriptPath = join(__dirname, 'test-single-page.js');
    const child = spawn('node', [scriptPath, url, baseURL], {
      stdio: ['ignore', 'pipe', 'pipe'],
      env: { ...process.env, BASE_URL: baseURL }
    });
    
    let stdout = '';
    let stderr = '';
    
    child.stdout.on('data', (data) => {
      stdout += data.toString();
    });
    
    child.stderr.on('data', (data) => {
      stderr += data.toString();
    });
    
    child.on('close', (code) => {
      try {
        const result = JSON.parse(stdout);
        resolve({ result, code, stderr });
      } catch (error) {
        reject(new Error(`Erreur lors du parsing du résultat pour ${url}: ${error.message}\nSTDOUT: ${stdout}\nSTDERR: ${stderr}`));
      }
    });
    
    child.on('error', (error) => {
      reject(new Error(`Erreur lors de l'exécution du test pour ${url}: ${error.message}`));
    });
  });
}

/**
 * Génère un rapport JSON
 */
function generateJSONReport(pageResults) {
  const timestamp = new Date().toISOString();
  const totalErrors = pageResults.reduce((sum, r) => sum + (r.checks?.filter(c => c.type === 'error').length || 0), 0);
  const totalWarnings = pageResults.reduce((sum, r) => sum + (r.checks?.filter(c => c.type === 'warning').length || 0), 0);
  const totalSuccess = pageResults.reduce((sum, r) => sum + (r.checks?.filter(c => c.type === 'success').length || 0), 0);
  
  const report = {
    timestamp,
    summary: {
      totalPages: pageResults.length,
      totalSuccess,
      totalWarnings,
      totalErrors,
      passed: totalErrors === 0
    },
    config,
    pages: pageResults
  };
  
  const filename = `performance-ecoconception-report-${Date.now()}.json`;
  const filepath = join(projectRoot, filename);
  writeFileSync(filepath, JSON.stringify(report, null, 2), 'utf-8');
  console.log(`\n📄 Rapport JSON généré: ${filename}`);
  return filepath;
}

/**
 * Génère un rapport HTML
 */
function generateHTMLReport(pageResults) {
  const timestamp = new Date().toISOString();
  const totalErrors = pageResults.reduce((sum, r) => sum + (r.checks?.filter(c => c.type === 'error').length || 0), 0);
  const totalWarnings = pageResults.reduce((sum, r) => sum + (r.checks?.filter(c => c.type === 'warning').length || 0), 0);
  const totalSuccess = pageResults.reduce((sum, r) => sum + (r.checks?.filter(c => c.type === 'success').length || 0), 0);
  const passed = totalErrors === 0;
  
  let html = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Rapport de performance et éco-conception - We Love Green IT</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      line-height: 1.6;
      color: #333;
      background: #f5f5f5;
      padding: 20px;
    }
    .container { max-width: 1200px; margin: 0 auto; background: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
    h1 { color: #2c3e50; margin-bottom: 10px; }
    .timestamp { color: #7f8c8d; margin-bottom: 30px; }
    .summary {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
      margin-bottom: 30px;
    }
    .summary-card {
      padding: 20px;
      border-radius: 8px;
      text-align: center;
    }
    .summary-card.success { background: #d4edda; border: 2px solid #28a745; }
    .summary-card.warning { background: #fff3cd; border: 2px solid #ffc107; }
    .summary-card.error { background: #f8d7da; border: 2px solid #dc3545; }
    .summary-card h3 { font-size: 2em; margin-bottom: 5px; }
    .summary-card p { color: #666; }
    .page-section {
      margin-bottom: 40px;
      padding: 20px;
      border: 1px solid #ddd;
      border-radius: 8px;
    }
    .page-section h2 { color: #34495e; margin-bottom: 15px; }
    .check-item {
      padding: 10px;
      margin: 5px 0;
      border-radius: 4px;
      border-left: 4px solid;
    }
    .check-item.success { background: #d4edda; border-color: #28a745; }
    .check-item.error { background: #f8d7da; border-color: #dc3545; }
    .check-item.warning { background: #fff3cd; border-color: #ffc107; }
    .metrics {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 15px;
      margin-top: 15px;
    }
    .metric-item {
      padding: 15px;
      background: #f8f9fa;
      border-radius: 4px;
    }
    .metric-item strong { display: block; margin-bottom: 5px; color: #2c3e50; }
  </style>
</head>
<body>
  <div class="container">
    <h1>🌱 Rapport de performance et éco-conception</h1>
    <p class="timestamp">Généré le ${new Date(timestamp).toLocaleString('fr-FR')}</p>
    
    <div class="summary">
      <div class="summary-card ${passed ? 'success' : 'error'}">
        <h3>${passed ? '✅' : '❌'}</h3>
        <p><strong>Statut global</strong></p>
        <p>${passed ? 'Tous les tests sont passés' : 'Certains tests ont échoué'}</p>
      </div>
      <div class="summary-card success">
        <h3>${totalSuccess}</h3>
        <p><strong>Tests réussis</strong></p>
      </div>
      <div class="summary-card warning">
        <h3>${totalWarnings}</h3>
        <p><strong>Avertissements</strong></p>
      </div>
      <div class="summary-card error">
        <h3>${totalErrors}</h3>
        <p><strong>Erreurs</strong></p>
      </div>
    </div>
`;
  
  pageResults.forEach((result, index) => {
    html += `
    <div class="page-section">
      <h2>📄 Page ${index + 1}: ${result.url}</h2>
`;
    
    if (result.error) {
      html += `<div class="check-item error">❌ Erreur: ${result.error}</div>`;
    } else if (result.checks) {
      result.checks.forEach(check => {
        const className = check.type === 'success' ? 'success' : check.type === 'error' ? 'error' : 'warning';
        html += `<div class="check-item ${className}">${check.message}</div>`;
      });
      
      if (result.lighthouse) {
        html += `
      <div class="metrics">
        <div class="metric-item">
          <strong>Performance</strong>
          ${result.lighthouse.performance}/100
        </div>
        <div class="metric-item">
          <strong>Accessibilité</strong>
          ${result.lighthouse.accessibility}/100
        </div>
        <div class="metric-item">
          <strong>Bonnes pratiques</strong>
          ${result.lighthouse.bestPractices}/100
        </div>
        <div class="metric-item">
          <strong>SEO</strong>
          ${result.lighthouse.seo}/100
        </div>
      </div>`;
      }
      
      if (result.network) {
        html += `
      <div class="metrics">
        <div class="metric-item">
          <strong>Taille totale</strong>
          ${result.network.totalSizeKB} KB
        </div>
        <div class="metric-item">
          <strong>Requêtes HTTP</strong>
          ${result.network.requestsCount}
        </div>
        <div class="metric-item">
          <strong>Images</strong>
          ${result.network.imagesCount}
        </div>
        <div class="metric-item">
          <strong>Scripts</strong>
          ${result.network.scriptsCount}
        </div>
      </div>`;
      }
    }
    
    html += `</div>`;
  });
  
  html += `
  </div>
</body>
</html>`;
  
  const filename = `performance-ecoconception-report-${Date.now()}.html`;
  const filepath = join(projectRoot, filename);
  writeFileSync(filepath, html, 'utf-8');
  console.log(`📄 Rapport HTML généré: ${filename}`);
  return filepath;
}

/**
 * Génère un résumé GitHub Actions
 */
function generateGitHubSummary(pageResults) {
  const totalErrors = pageResults.reduce((sum, r) => sum + (r.checks?.filter(c => c.type === 'error').length || 0), 0);
  const totalWarnings = pageResults.reduce((sum, r) => sum + (r.checks?.filter(c => c.type === 'warning').length || 0), 0);
  const totalSuccess = pageResults.reduce((sum, r) => sum + (r.checks?.filter(c => c.type === 'success').length || 0), 0);
  const passed = totalErrors === 0;
  
  let summary = `# 🌱 Rapport de performance et éco-conception\n\n`;
  summary += `## 📊 Résumé global\n\n`;
  summary += `| Métrique | Valeur |\n`;
  summary += `|----------|--------|\n`;
  summary += `| **Statut** | ${passed ? '✅ **Tous les tests sont passés**' : '❌ **Certains tests ont échoué**'} |\n`;
  summary += `| ✅ Tests réussis | ${totalSuccess} |\n`;
  summary += `| ⚠️ Avertissements | ${totalWarnings} |\n`;
  summary += `| ❌ Erreurs | ${totalErrors} |\n`;
  summary += `| 📄 Pages testées | ${pageResults.length} |\n\n`;
  
  pageResults.forEach((result, index) => {
    const pageErrors = result.checks?.filter(c => c.type === 'error').length || 0;
    const pageWarnings = result.checks?.filter(c => c.type === 'warning').length || 0;
    const pageSuccess = result.checks?.filter(c => c.type === 'success').length || 0;
    
    summary += `## 📄 Page ${index + 1}: ${result.url}\n\n`;
    
    if (result.error) {
      summary += `❌ **Erreur**: ${result.error}\n\n`;
    } else {
      summary += `| Métrique | Valeur |\n`;
      summary += `|----------|--------|\n`;
      summary += `| ✅ Réussis | ${pageSuccess} |\n`;
      summary += `| ⚠️ Avertissements | ${pageWarnings} |\n`;
      summary += `| ❌ Erreurs | ${pageErrors} |\n\n`;
      
      if (result.lighthouse) {
        summary += `### 📈 Métriques Lighthouse\n\n`;
        summary += `| Métrique | Score |\n`;
        summary += `|----------|-------|\n`;
        summary += `| Performance | ${result.lighthouse.performance}/100 |\n`;
        summary += `| Accessibilité | ${result.lighthouse.accessibility}/100 |\n`;
        summary += `| Bonnes pratiques | ${result.lighthouse.bestPractices}/100 |\n`;
        summary += `| SEO | ${result.lighthouse.seo}/100 |\n\n`;
      }
      
      if (result.network) {
        summary += `### 🌐 Ressources réseau\n\n`;
        summary += `| Type | Nombre | Taille totale |\n`;
        summary += `|------|--------|---------------|\n`;
        summary += `| Images | ${result.network.imagesCount} | - |\n`;
        summary += `| Scripts | ${result.network.scriptsCount} | - |\n`;
        summary += `| Feuilles de style | ${result.network.stylesheetsCount} | - |\n`;
        summary += `| Polices | ${result.network.fontsCount} | - |\n`;
        summary += `| **Total** | ${result.network.requestsCount} | **${result.network.totalSizeKB} KB** |\n\n`;
      }
      
      const errors = result.checks?.filter(c => c.type === 'error') || [];
      const warnings = result.checks?.filter(c => c.type === 'warning') || [];
      
      if (errors.length > 0) {
        summary += `### ❌ Erreurs détectées\n\n`;
        errors.forEach(check => {
          summary += `- ${check.message}\n`;
        });
        summary += `\n`;
      }
      
      if (warnings.length > 0) {
        summary += `### ⚠️ Avertissements\n\n`;
        warnings.forEach(check => {
          summary += `- ${check.message}\n`;
        });
        summary += `\n`;
      }
    }
  });
  
  const summaryPath = process.env.GITHUB_STEP_SUMMARY;
  if (summaryPath) {
    try {
      writeFileSync(summaryPath, summary, 'utf-8');
      console.log('\n📝 Résumé GitHub Actions généré');
    } catch (error) {
      console.warn('⚠️  Impossible d\'écrire le résumé GitHub Actions:', error.message);
    }
  }
  
  return summary;
}

/**
 * Affiche un rapport détaillé
 */
function printReport(pageResults) {
  console.log('\n' + '='.repeat(80));
  console.log('📊 RAPPORT DE PERFORMANCE ET ÉCO-CONCEPTION');
  console.log('='.repeat(80));
  
  pageResults.forEach((result, index) => {
    console.log(`\n📄 Page ${index + 1}: ${result.url}`);
    console.log('-'.repeat(80));
    
    if (result.error) {
      console.log(`  ❌ ${result.error}`);
    } else if (result.checks) {
      result.checks.forEach(check => {
        if (check.type === 'success') {
          console.log(`  ${check.message}`);
        } else if (check.type === 'error') {
          console.log(`  ❌ ${check.message}`);
        } else if (check.type === 'warning') {
          console.log(`  ${check.message}`);
        }
      });
      
      if (result.lighthouse) {
        console.log('\n  📈 Métriques Lighthouse:');
        console.log(`     - Performance: ${result.lighthouse.performance}/100`);
        console.log(`     - Accessibilité: ${result.lighthouse.accessibility}/100`);
        console.log(`     - Bonnes pratiques: ${result.lighthouse.bestPractices}/100`);
        console.log(`     - SEO: ${result.lighthouse.seo}/100`);
      }
      
      if (result.network) {
        console.log('\n  🌐 Ressources réseau:');
        console.log(`     - Taille totale: ${result.network.totalSizeKB} KB`);
        console.log(`     - Requêtes HTTP: ${result.network.requestsCount}`);
        console.log(`     - Images: ${result.network.imagesCount}`);
        console.log(`     - Scripts: ${result.network.scriptsCount}`);
      }
    }
  });
  
  const totalErrors = pageResults.reduce((sum, r) => sum + (r.checks?.filter(c => c.type === 'error').length || 0), 0);
  const totalWarnings = pageResults.reduce((sum, r) => sum + (r.checks?.filter(c => c.type === 'warning').length || 0), 0);
  const totalSuccess = pageResults.reduce((sum, r) => sum + (r.checks?.filter(c => c.type === 'success').length || 0), 0);
  
  console.log('\n' + '='.repeat(80));
  console.log('📋 RÉSUMÉ');
  console.log('='.repeat(80));
  console.log(`  ✅ Tests réussis: ${totalSuccess}`);
  console.log(`  ⚠️  Avertissements: ${totalWarnings}`);
  console.log(`  ❌ Erreurs: ${totalErrors}`);
  
  if (totalErrors === 0) {
    console.log('\n  🎉 Tous les tests sont passés ! Votre site est performant et éco-responsable.');
    return 0;
  } else {
    console.log('\n  ⚠️  Certains tests ont échoué. Veuillez corriger les problèmes identifiés.');
    return 1;
  }
}

/**
 * Fonction principale
 */
async function main() {
  console.log('🌱 Tests de performance et d\'éco-conception pour We Love Green IT\n');
  console.log(`  - URLs à tester: ${config.urls.length}`);
  
  const baseURL = process.argv[2] || process.env.BASE_URL || `http://localhost:${config.port}`;
  console.log(`\n🌐 URL de base: ${baseURL}`);
  console.log('⚠️  Assurez-vous que le serveur Hugo est démarré (npm run dev)\n');
  
  console.log('🚀 Lancement des tests en parallèle...\n');
  
  // Lancer tous les tests en parallèle
  const testPromises = config.urls.map(url => testSinglePage(url, baseURL));
  const testResults = await Promise.allSettled(testPromises);
  
  const pageResults = testResults.map((result, index) => {
    if (result.status === 'fulfilled') {
      return result.value.result;
    } else {
      return {
        url: config.urls[index],
        error: result.reason.message,
        checks: [{
          type: 'error',
          message: `Erreur lors de l'exécution: ${result.reason.message}`
        }]
      };
    }
  });
  
  // Afficher le rapport
  const exitCode = printReport(pageResults);
  
  // Générer le résumé GitHub Actions
  try {
    generateGitHubSummary(pageResults);
  } catch (error) {
    console.error('⚠️  Erreur lors de la génération du résumé GitHub Actions:', error.message);
  }
  
  // Générer les rapports JSON et HTML
  try {
    generateJSONReport(pageResults);
    generateHTMLReport(pageResults);
  } catch (error) {
    console.error('⚠️  Erreur lors de la génération des rapports:', error.message);
  }
  
  process.exit(exitCode);
}

main().catch(error => {
  console.error('❌ Erreur fatale:', error);
  process.exit(1);
});
