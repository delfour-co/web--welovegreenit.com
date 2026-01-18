import Parser from 'rss-parser';
import { readFileSync, writeFileSync, existsSync, readdirSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Fonction pour créer un parser avec différentes configurations
function createParser(options = {}) {
  const defaultOptions = {
    timeout: 30000,
    maxRedirects: 5,
    customFields: {
      feed: [
        ['language', 'language'],
        ['dc:language', 'dcLanguage']
      ],
      item: [
        ['media:content', 'mediaContent', { keepArray: true }],
        ['media:thumbnail', 'mediaThumbnail', { keepArray: true }],
        ['media:description', 'mediaDescription'],
        ['content:encoded', 'contentEncoded'],
        ['description', 'description'],
        ['dc:creator', 'dcCreator'],
        ['dc:date', 'dcDate'],
        ['dc:subject', 'dcSubject', { keepArray: true }],
        ['dc:language', 'dcLanguage'],
        ['author', 'author'],
        ['enclosure', 'enclosure'],
        ['itunes:author', 'itunesAuthor'],
        ['itunes:subtitle', 'itunesSubtitle'],
        ['itunes:summary', 'itunesSummary'],
        ['itunes:image', 'itunesImage'],
        ['atom:link', 'atomLink']
      ]
    },
    requestOptions: {
      headers: {
        'User-Agent': options.userAgent || 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': options.accept || 'application/rss+xml, application/xml, text/xml, */*',
        'Accept-Language': 'fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7'
      }
    }
  };

  return new Parser({ ...defaultOptions, ...options });
}

// Parser par défaut
const parser = createParser();
const feedsPath = join(__dirname, '../data/feeds.json');
const articlesDir = join(__dirname, '../content/articles');

// Fonction pour générer un slug à partir d'un titre ou guid
function generateSlug(title, guid) {
  const base = guid || title || 'article';
  return base
    .toLowerCase()
    .replace(/https?:\/\//g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .substring(0, 100);
}

// Fonction pour nettoyer le HTML et décoder les entités
function cleanHtml(html) {
  if (!html) return '';

  let text = String(html);

  // Supprimer les balises script et style avec leur contenu
  text = text.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
  text = text.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');

  // Remplacer les balises de bloc par des sauts de ligne
  text = text.replace(/<\/(p|div|br|h[1-6]|li|tr)>/gi, '\n');
  text = text.replace(/<(br|hr)\s*\/?>/gi, '\n');

  // Supprimer toutes les autres balises HTML
  text = text.replace(/<[^>]+>/g, '');

  // Décoder les entités HTML courantes
  const entities = {
    '&nbsp;': ' ',
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'",
    '&apos;': "'",
    '&euro;': '€',
    '&copy;': '©',
    '&reg;': '®',
    '&hellip;': '…',
    '&mdash;': '—',
    '&ndash;': '–',
    '&laquo;': '«',
    '&raquo;': '»',
    '&bull;': '•',
    '&middot;': '·',
    '&#8217;': "'",
    '&#8216;': "'",
    '&#8220;': '"',
    '&#8221;': '"',
    '&#8230;': '…',
    '&#160;': ' '
  };

  for (const [entity, char] of Object.entries(entities)) {
    text = text.replace(new RegExp(entity, 'gi'), char);
  }

  // Décoder les entités numériques
  text = text.replace(/&#(\d+);/g, (match, num) => String.fromCharCode(parseInt(num, 10)));
  text = text.replace(/&#x([a-fA-F0-9]+);/g, (match, hex) => String.fromCharCode(parseInt(hex, 16)));

  // Nettoyer les espaces multiples et les sauts de ligne excessifs
  text = text.replace(/[ \t]+/g, ' ');
  text = text.replace(/\n\s*\n/g, '\n\n');
  text = text.trim();

  return text;
}

// Fonction pour extraire la meilleure description disponible
function extractDescription(item) {
  // Priorité : contenu complet > description > résumé > snippet
  const candidates = [
    item.contentEncoded,
    item.content,
    item.description,
    item.itunesSummary,
    item.summary,
    item.contentSnippet
  ];

  for (const candidate of candidates) {
    if (candidate && candidate.trim().length > 50) {
      return cleanHtml(candidate);
    }
  }

  // Fallback: prendre le premier non vide
  for (const candidate of candidates) {
    if (candidate && candidate.trim().length > 0) {
      return cleanHtml(candidate);
    }
  }

  return '';
}

// Fonction pour extraire les images depuis différents champs RSS
function extractImage(item) {
  // 1. iTunes image (podcasts)
  if (item.itunesImage) {
    const img = item.itunesImage;
    if (typeof img === 'string') return img;
    if (img.$ && img.$.href) return img.$.href;
    if (img.href) return img.href;
  }

  // 2. Enclosure (podcast/images)
  if (item.enclosure && item.enclosure.url) {
    const url = item.enclosure.url;
    if (url.match(/\.(jpg|jpeg|png|gif|webp|svg)$/i) || item.enclosure.type?.startsWith('image/')) {
      return url;
    }
  }

  // 3. Media content (Media RSS)
  if (item.mediaContent) {
    const mediaArray = Array.isArray(item.mediaContent) ? item.mediaContent : [item.mediaContent];
    for (const media of mediaArray) {
      if (media && media.$ && media.$.url) {
        const url = media.$.url;
        if (media.$.medium === 'image' || url.match(/\.(jpg|jpeg|png|gif|webp|svg)/i)) {
          return url;
        }
      }
      if (media && typeof media === 'string') {
        return media;
      }
    }
  }

  // 4. Media thumbnail
  if (item.mediaThumbnail) {
    const thumbArray = Array.isArray(item.mediaThumbnail) ? item.mediaThumbnail : [item.mediaThumbnail];
    for (const thumb of thumbArray) {
      if (thumb && thumb.$ && thumb.$.url) {
        return thumb.$.url;
      }
    }
  }

  // 5. Extraire depuis le contenu HTML
  const content = item.contentEncoded || item.content || item.description || '';
  if (content) {
    // Chercher les balises <img>
    const imgMatch = content.match(/<img[^>]+src=["']([^"']+)["']/i);
    if (imgMatch && imgMatch[1]) {
      let imgUrl = imgMatch[1];
      // Nettoyer l'URL
      if (imgUrl.startsWith('//')) {
        imgUrl = 'https:' + imgUrl;
      } else if (imgUrl.startsWith('/') && item.link) {
        try {
          const baseUrl = new URL(item.link).origin;
          imgUrl = baseUrl + imgUrl;
        } catch (e) {}
      }
      if (imgUrl.match(/\.(jpg|jpeg|png|gif|webp|svg)/i) || imgUrl.includes('image') || imgUrl.includes('photo') || imgUrl.includes('media')) {
        return imgUrl;
      }
    }

    // Chercher data-src (lazy loading)
    const dataSrcMatch = content.match(/<img[^>]+data-src=["']([^"']+)["']/i);
    if (dataSrcMatch && dataSrcMatch[1]) {
      let imgUrl = dataSrcMatch[1];
      if (imgUrl.startsWith('//')) imgUrl = 'https:' + imgUrl;
      return imgUrl;
    }
  }

  return '';
}

// Fonction pour extraire l'auteur
function extractAuthor(item) {
  const candidates = [
    item.creator,
    item.dcCreator,
    item.author,
    item.itunesAuthor
  ];

  for (const candidate of candidates) {
    if (candidate && typeof candidate === 'string' && candidate.trim().length > 0) {
      // Nettoyer l'auteur (enlever emails, etc.)
      let author = candidate.trim();
      author = author.replace(/<[^>]+>/g, ''); // Remove HTML
      author = author.replace(/\([^)]*@[^)]*\)/g, ''); // Remove (email@domain.com)
      author = author.replace(/\s*<[^>]*@[^>]*>/g, ''); // Remove <email@domain.com>
      return author.trim();
    }
    if (candidate && typeof candidate === 'object' && candidate.name) {
      return candidate.name;
    }
  }

  return '';
}

// Fonction pour extraire les catégories de l'article
function extractCategories(item, feedCategories) {
  const categories = new Set();

  // Catégories de l'item RSS
  if (item.categories) {
    const itemCats = Array.isArray(item.categories) ? item.categories : [item.categories];
    for (const cat of itemCats) {
      if (typeof cat === 'string') {
        // Filtrer les métadonnées brutes comme POLICY_AREA=...
        if (!cat.includes('=') && !cat.startsWith('POLICY_')) {
          categories.add(cat.trim());
        }
      } else if (cat && cat._) {
        if (!cat._.includes('=') && !cat._.startsWith('POLICY_')) {
          categories.add(cat._.trim());
        }
      }
    }
  }

  // DC Subject
  if (item.dcSubject) {
    const subjects = Array.isArray(item.dcSubject) ? item.dcSubject : [item.dcSubject];
    for (const subject of subjects) {
      if (typeof subject === 'string' && !subject.includes('=')) {
        categories.add(subject.trim());
      }
    }
  }

  // Ajouter les catégories du feed si aucune catégorie trouvée
  if (categories.size === 0 && feedCategories && feedCategories.length > 0) {
    for (const cat of feedCategories.slice(0, 3)) {
      categories.add(cat);
    }
  }

  return Array.from(categories).slice(0, 5); // Limiter à 5 catégories
}

// Fonction pour extraire la date de publication
function extractDate(item) {
  const candidates = [
    item.isoDate,
    item.pubDate,
    item.dcDate,
    item.date
  ];

  for (const candidate of candidates) {
    if (candidate) {
      try {
        const date = new Date(candidate);
        if (!isNaN(date.getTime())) {
          return date.toISOString();
        }
      } catch (e) {}
    }
  }

  return new Date().toISOString();
}

// Fonction pour normaliser les catégories (insensible à la casse)
function normalizeCategory(category) {
  if (typeof category === 'string') {
    return category.trim();
  }
  return '';
}

// Mots-clés Green IT pour le filtrage (français et anglais)
// Note: Ces mots-clés doivent être suffisamment spécifiques pour éviter les faux positifs
const GREEN_IT_KEYWORDS = [
  // Termes principaux Green IT (très spécifiques)
  'green it', 'green-it', 'greenit', 'it vert', 'informatique verte',
  'numérique responsable', 'numerique responsable', 'responsible digital',
  'sobriété numérique', 'sobriete numerique', 'digital sobriety',
  'écoconception', 'ecoconception', 'eco-conception', 'eco-design', 'ecodesign',
  'sustainable software', 'logiciel durable', 'logiciel responsable',
  'green software', 'sustainable computing', 'sustainable it',
  'green computing', 'sustainable digital',
  'numérique durable', 'numerique durable',

  // Impact environnemental du numérique
  'empreinte numérique', 'empreinte numerique', 'digital footprint',
  'empreinte carbone numérique', 'carbon footprint digital',
  'impact environnemental numérique', 'environmental impact digital',
  'pollution numérique', 'pollution numerique', 'digital pollution',
  'impact carbone numérique', 'digital carbon impact',
  'impact environnemental data center', 'environmental impact data center',

  // Infrastructure et data centers
  'data center vert', 'green data center', 'datacenter durable',
  'datacenter vert', 'centres de données numériques',
  'efficacité énergétique data center', 'data center energy efficiency',
  'power usage effectiveness', 'efficacité énergétique serveur',
  'refroidissement datacenter', 'datacenter cooling',
  'consommation data center', 'data center consumption',

  // Équipements et cycle de vie
  'obsolescence programmée', 'planned obsolescence', 'obsolescence logicielle',
  'durée de vie équipement', 'equipment lifespan',
  'reconditionnement informatique', 'refurbished electronics', 'reconditionné',
  'déchets électroniques', 'electronic waste', 'e-waste',
  'recyclage électronique', 'electronic recycling',
  'réparabilité', 'reparability', 'indice de réparabilité',
  'économie circulaire numérique', 'circular economy digital',

  // Énergie et consommation IT
  'consommation énergétique numérique', 'digital energy consumption',
  'efficacité énergétique logiciel', 'software energy efficiency',
  'consommation électrique serveur', 'server electricity consumption',

  // Cloud et services
  'cloud durable', 'sustainable cloud', 'cloud responsable',
  'finops', 'greenops',

  // Développement et pratiques
  'développement durable logiciel', 'sustainable software development',
  'optimisation code', 'code optimization',
  'accessibilité numérique', 'digital accessibility',

  // Mesure et outils Green IT
  'bilan carbone numérique', 'digital carbon assessment',
  'mesure impact numérique', 'digital impact measurement',
  'analyse cycle de vie numérique', 'digital life cycle assessment',

  // Labels et certifications
  'label numérique responsable', 'responsible digital label',
  'institut numérique responsable',

  // Réglementations Green IT
  'loi reen', 'rgesn', 'référentiel écoconception',
  'référentiel général d\'écoconception',

  // Organisations Green IT
  'green software foundation',
  'shift project', 'the shift project',
  'boavizta', 'negaoctet', 'ecoindex',
  'greenit.fr', 'institutnr',

  // Concepts associés
  'low tech', 'lowtech', 'low-tech',
  'frugalité numérique', 'digital frugality',
  'minimalisme numérique', 'digital minimalism',
  'techno-discernement',
  'impact environnemental serveur', 'server environmental impact',
  'hébergement vert', 'green hosting', 'hébergeur vert',
  'streaming video impact', 'impact vidéo streaming',

  // Termes techniques spécifiques
  'carbon aware computing', 'carbon-aware computing',
  'software carbon intensity',
  'green web', 'web durable', 'sustainable web',
  'ia responsable', 'responsible ai', 'sustainable ai',
  'intelligence artificielle responsable',
  'impact ia', 'ai environmental impact',
  'consommation ia', 'ai consumption', 'ai energy'
];

// Sources considérées comme 100% Green IT (tous leurs articles sont pertinents)
const GREEN_IT_SOURCES = [
  // Sources françaises spécialisées Green IT
  'GreenIT.fr',
  'GreenerSoft',
  'Institut du Numérique Responsable',
  'The Shift Project',
  'Shift Project',
  'Techologie',
  'Standblog',
  'Tristan Nitot',
  'HOP',
  'Halte à l\'Obsolescence',

  // Sources anglaises spécialisées Green IT
  'The Green Web Foundation',
  'Green Web Foundation',
  'Wholegrain Digital',
  'Mightybytes',
  'Branch Magazine',
  'Low-Tech Magazine',
  'ClimateAction.tech',
  'Fershad Irani'
];

// Fonction pour vérifier si un article est lié au Green IT
// Note: itemCategories sont les catégories extraites de l'article RSS lui-même
function isGreenITRelated(article, itemCategories = []) {
  // Si la source est une source 100% Green IT, accepter directement
  if (GREEN_IT_SOURCES.some(source =>
    article.source && article.source.toLowerCase().includes(source.toLowerCase())
  )) {
    return { relevant: true, reason: 'source Green IT' };
  }

  // Créer le texte à analyser (titre + description + catégories de l'item uniquement)
  // On n'utilise PAS article.categories car elles peuvent inclure les catégories du feed
  const textToAnalyze = [
    article.title || '',
    article.description || '',
    itemCategories.join(' ')
  ].join(' ').toLowerCase();

  // Chercher les mots-clés Green IT
  for (const keyword of GREEN_IT_KEYWORDS) {
    if (textToAnalyze.includes(keyword.toLowerCase())) {
      return { relevant: true, reason: `mot-clé "${keyword}"` };
    }
  }

  return { relevant: false, reason: 'aucun mot-clé Green IT trouvé' };
}

// Fonction pour échapper les caractères spéciaux YAML
function escapeYaml(str) {
  if (!str) return '';
  return String(str)
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
    .replace(/\n/g, ' ')
    .replace(/\r/g, '')
    .replace(/\t/g, ' ');
}

// Fonction pour formater le front matter YAML
function formatFrontMatter(article) {
  const lines = ['---'];

  // Title
  if (article.title) {
    lines.push(`title: "${escapeYaml(article.title)}"`);
  }

  // Date
  if (article.pubDate) {
    lines.push(`date: ${article.pubDate}`);
  }

  // Source
  if (article.source) {
    lines.push(`source: "${escapeYaml(article.source)}"`);
  }

  // Language
  if (article.language) {
    lines.push(`language: "${article.language}"`);
  }

  // Link
  if (article.link) {
    lines.push(`link: "${escapeYaml(article.link)}"`);
  }

  // Description (première partie pour le résumé)
  if (article.description) {
    const summary = article.description.substring(0, 300).replace(/\n/g, ' ').trim();
    lines.push(`description: "${escapeYaml(summary)}${article.description.length > 300 ? '...' : ''}"`);
  }

  // Author
  if (article.author) {
    lines.push(`author: "${escapeYaml(article.author)}"`);
  }

  // Image
  if (article.image) {
    lines.push(`image: "${escapeYaml(article.image)}"`);
  }

  // GUID
  if (article.guid) {
    lines.push(`guid: "${escapeYaml(article.guid)}"`);
  }

  // Categories
  if (article.categories && article.categories.length > 0) {
    lines.push('categories:');
    article.categories.forEach(cat => {
      const normalized = normalizeCategory(cat);
      if (normalized) {
        lines.push(`  - "${escapeYaml(normalized)}"`);
      }
    });
  }

  // Draft
  lines.push('draft: false');

  lines.push('---');
  return lines.join('\n');
}

// Fonction pour obtenir les articles existants (pour déduplication)
function getExistingArticles() {
  const existing = new Set();

  if (!existsSync(articlesDir)) {
    return existing;
  }

  const files = readdirSync(articlesDir);
  for (const file of files) {
    if (file.endsWith('.md')) {
      try {
        const articlePath = join(articlesDir, file);
        const content = readFileSync(articlePath, 'utf-8');
        // Extraire le guid du front matter
        const guidMatch = content.match(/^guid:\s*["']?([^"'\n]+)["']?/m);
        if (guidMatch) {
          existing.add(guidMatch[1]);
        } else {
          // Fallback: utiliser le titre + source
          const titleMatch = content.match(/^title:\s*["'](.+)["']/m);
          const sourceMatch = content.match(/^source:\s*["'](.+)["']/m);
          if (titleMatch && sourceMatch) {
            existing.add(`${titleMatch[1]}|${sourceMatch[1]}`);
          }
        }
      } catch (e) {
        console.warn(`Erreur lors de la lecture de ${file}:`, e.message);
      }
    }
  }

  return existing;
}

// Fonction pour parser un flux avec plusieurs stratégies de retry
async function parseFeedWithRetry(url, name, prefix = '') {
  const strategies = [
    // Stratégie 1: Parser par défaut
    () => parser.parseURL(url),

    // Stratégie 2: User-Agent simple
    () => createParser({
      requestOptions: {
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; RSS Reader)',
          'Accept': '*/*'
        }
      }
    }).parseURL(url),

    // Stratégie 3: User-Agent Chrome récent
    () => createParser({
      requestOptions: {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
          'Accept': 'application/rss+xml, application/xml, text/xml, */*',
          'Referer': url
        }
      },
      timeout: 60000
    }).parseURL(url),

    // Stratégie 4: Accept plus large
    () => createParser({
      requestOptions: {
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; FeedReader)',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
        }
      },
      timeout: 60000
    }).parseURL(url)
  ];

  let lastError = null;

  for (let i = 0; i < strategies.length; i++) {
    try {
      const feed = await strategies[i]();
      if (i > 0) {
        console.warn(`${prefix} ⚠ Réussi avec la stratégie ${i + 1}`);
      }
      return feed;
    } catch (error) {
      lastError = error;

      // Ne pas retry pour les erreurs 404
      if (error.message.includes('Status code 404')) {
        throw error;
      }

      // Pour les autres erreurs, continuer avec la stratégie suivante
      if (i < strategies.length - 1) {
        if (error.message.includes('Status code 403')) {
          console.warn(`${prefix} ⚠ Erreur 403, tentative avec stratégie ${i + 2}...`);
        } else if (error.message.includes('Status code 406')) {
          console.warn(`${prefix} ⚠ Erreur 406, tentative avec stratégie ${i + 2}...`);
        } else if (error.message.includes('Invalid character') || error.message.includes('XML')) {
          console.warn(`${prefix} ⚠ Erreur XML, tentative avec stratégie ${i + 2}...`);
        } else if (error.message.includes('timeout')) {
          console.warn(`${prefix} ⚠ Timeout, tentative avec stratégie ${i + 2}...`);
        }
      }
    }
  }

  throw lastError;
}

// Fonction pour traiter un flux RSS
async function processFeed(feedConfig, existingArticles) {
  const { url, name, categories: feedCategories, language: feedLanguage } = feedConfig;
  const prefix = `[${name}]`;
  console.log(`${prefix} Démarrage du traitement (${url})`);

  try {
    // Essayer de parser le flux avec plusieurs stratégies
    const feed = await parseFeedWithRetry(url, name, prefix);

    if (!feed || !feed.items || feed.items.length === 0) {
      console.log(`${prefix} ⚠ Aucun article trouvé dans le flux`);
      return 0;
    }

    console.log(`${prefix} ✓ ${feed.items.length} articles trouvés`);

    // Déterminer la langue du feed
    const language = feedLanguage || feed.language || feed.dcLanguage || 'en';

    let newArticlesCount = 0;
    let filteredCount = 0;

    for (const item of feed.items) {
      // Générer un identifiant unique pour la déduplication
      const dedupeKey = item.guid || item.id || item.link || `${item.title}|${name}`;

      // Vérifier si l'article existe déjà
      if (existingArticles.has(dedupeKey)) {
        continue; // Article déjà présent
      }

      // Générer le slug pour le nom de fichier
      const slug = generateSlug(item.title || item.guid || 'article', item.guid || item.link);
      const articlePath = join(articlesDir, `${slug}.md`);

      // Extraire toutes les informations
      const description = extractDescription(item);
      const imageUrl = extractImage(item);
      const author = extractAuthor(item);
      // Extraire les catégories de l'item uniquement (sans les catégories du feed)
      const itemOnlyCategories = extractCategories(item, []);
      // Catégories finales pour l'article (avec fallback sur les catégories du feed)
      const categories = extractCategories(item, feedCategories);
      const pubDate = extractDate(item);

      // Préparer l'objet article
      const article = {
        title: cleanHtml(item.title) || 'Sans titre',
        link: item.link || item.id || '',
        description: description,
        pubDate: pubDate,
        source: name,
        language: language,
        categories: categories,
        guid: item.guid || item.id || dedupeKey,
        author: author,
        image: imageUrl
      };

      // Vérifier si l'article est lié au Green IT
      // On passe itemOnlyCategories pour ne pas matcher sur les catégories du feed
      const relevanceCheck = isGreenITRelated(article, itemOnlyCategories);
      if (!relevanceCheck.relevant) {
        filteredCount++;
        continue; // Ignorer les articles non liés au Green IT
      }

      // Générer le contenu Markdown
      const frontMatter = formatFrontMatter(article);
      const bodyContent = description || article.title;
      const markdown = `${frontMatter}\n\n${bodyContent}`;

      // Sauvegarder l'article
      writeFileSync(articlePath, markdown, 'utf-8');
      existingArticles.add(dedupeKey);
      newArticlesCount++;
      console.log(`${prefix} ✓ [${relevanceCheck.reason}] ${article.title.substring(0, 50)}...`);
    }

    if (filteredCount > 0) {
      console.log(`${prefix} → ${newArticlesCount} nouveaux articles ajoutés (${filteredCount} filtrés car hors sujet Green IT)`);
    } else {
      console.log(`${prefix} → ${newArticlesCount} nouveaux articles ajoutés`);
    }
    return newArticlesCount;
  } catch (error) {
    console.error(`${prefix} ✗ Erreur:`, error.message);
    return 0;
  }
}

// Fonction principale
async function main() {
  console.log('🚀 Démarrage de l\'agrégation RSS...\n');

  try {
    // Lire la configuration des flux
    const feedsConfig = JSON.parse(readFileSync(feedsPath, 'utf-8'));
    console.log(`${feedsConfig.length} flux(s) à traiter`);

    // S'assurer que le dossier articles existe
    if (!existsSync(articlesDir)) {
      mkdirSync(articlesDir, { recursive: true });
    }

    // Charger les articles existants une seule fois au début
    const existingArticles = getExistingArticles();
    console.log(`${existingArticles.size} article(s) existant(s) détecté(s)\n`);

    // Traiter tous les flux en parallèle (avec limite de concurrence)
    console.log('Traitement des flux...\n');

    // Traiter par lots de 5 pour éviter trop de requêtes simultanées
    const batchSize = 5;
    let totalNewArticles = 0;

    for (let i = 0; i < feedsConfig.length; i += batchSize) {
      const batch = feedsConfig.slice(i, i + batchSize);
      const results = await Promise.all(
        batch.map(feedConfig => processFeed(feedConfig, existingArticles))
      );
      totalNewArticles += results.reduce((sum, count) => sum + count, 0);
    }

    console.log(`\n✅ Agrégation terminée: ${totalNewArticles} nouveau(x) article(s) ajouté(s)`);

    // Exit avec code 0 pour succès
    process.exit(0);
  } catch (error) {
    console.error('❌ Erreur fatale:', error);
    process.exit(1);
  }
}

// Exécuter le script
main();
