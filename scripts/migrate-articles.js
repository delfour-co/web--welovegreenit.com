import { readFileSync, writeFileSync, existsSync, readdirSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const backupArticlesDir = join(__dirname, '../_backup/src/data/articles');
const contentArticlesDir = join(__dirname, '../content/articles');

// Fonction pour normaliser les catégories
function normalizeCategories(cats) {
  if (!cats || !Array.isArray(cats)) return [];
  return cats
    .map(cat => {
      if (typeof cat === 'string') {
        return cat.trim();
      }
      if (typeof cat === 'object' && cat !== null) {
        if (cat._) {
          return cat._.trim();
        }
        const values = Object.values(cat);
        const stringValue = values.find(v => typeof v === 'string');
        return stringValue ? stringValue.trim() : '';
      }
      return '';
    })
    .filter(cat => cat && cat !== '');
}

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

// Fonction pour convertir un article JSON en Markdown Hugo
function convertToMarkdown(article) {
  const categories = normalizeCategories(article.categories || []);
  const date = new Date(article.pubDate || Date.now());
  const slug = generateSlug(article.title, article.guid || article.link);
  
  // Front matter YAML
  const frontMatter = {
    title: article.title || 'Sans titre',
    date: date.toISOString(),
    source: article.source || 'Inconnu',
    link: article.link || '',
    description: article.description || '',
    author: article.author || '',
    image: article.image || '',
    guid: article.guid || article.link || '',
    categories: categories,
    draft: false,
  };

  // Générer le contenu Markdown
  let markdown = '---\n';
  for (const [key, value] of Object.entries(frontMatter)) {
    if (value === null || value === undefined || value === '') {
      continue;
    }
    if (key === 'date') {
      // Date doit être au format ISO simple, pas multiline
      markdown += `${key}: ${value}\n`;
    } else if (Array.isArray(value)) {
      if (value.length > 0) {
        markdown += `${key}:\n`;
        value.forEach(item => {
          markdown += `  - "${String(item).replace(/"/g, '\\"')}"\n`;
        });
      }
    } else if (typeof value === 'string' && (value.includes('\n') || (value.includes(':') && !value.startsWith('http')))) {
      // Multiline pour description et autres champs longs
      markdown += `${key}: |\n`;
      const lines = value.split('\n');
      lines.forEach(line => {
        markdown += `  ${line}\n`;
      });
    } else {
      markdown += `${key}: "${String(value).replace(/"/g, '\\"')}"\n`;
    }
  }
  markdown += '---\n\n';

  // Ajouter la description comme contenu si elle existe
  if (article.description) {
    markdown += article.description;
  }

  return { markdown, slug };
}

// Fonction principale
function main() {
  console.log('🚀 Démarrage de la migration des articles...\n');

  // Vérifier que le dossier source existe
  if (!existsSync(backupArticlesDir)) {
    console.error(`❌ Le dossier source n'existe pas: ${backupArticlesDir}`);
    process.exit(1);
  }

  // Créer le dossier de destination s'il n'existe pas
  if (!existsSync(contentArticlesDir)) {
    mkdirSync(contentArticlesDir, { recursive: true });
  }

  // Lire tous les fichiers JSON
  const files = readdirSync(backupArticlesDir);
  const jsonFiles = files.filter(file => file.endsWith('.json'));

  console.log(`${jsonFiles.length} fichier(s) JSON trouvé(s)\n`);

  let successCount = 0;
  let errorCount = 0;

  for (const file of jsonFiles) {
    try {
      const filePath = join(backupArticlesDir, file);
      const article = JSON.parse(readFileSync(filePath, 'utf-8'));
      
      const { markdown, slug } = convertToMarkdown(article);
      const outputPath = join(contentArticlesDir, `${slug}.md`);

      // Vérifier si le fichier existe déjà (éviter les doublons)
      if (existsSync(outputPath)) {
        console.log(`⚠  Fichier déjà existant, ignoré: ${slug}.md`);
        continue;
      }

      writeFileSync(outputPath, markdown, 'utf-8');
      successCount++;
      console.log(`✓ Converti: ${file} → ${slug}.md`);
    } catch (error) {
      errorCount++;
      console.error(`✗ Erreur lors de la conversion de ${file}:`, error.message);
    }
  }

  console.log(`\n✅ Migration terminée:`);
  console.log(`   - ${successCount} article(s) converti(s)`);
  console.log(`   - ${errorCount} erreur(s)`);
}

main();
