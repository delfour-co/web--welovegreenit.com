import { readdirSync, unlinkSync, existsSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const articlesDir = join(__dirname, '../content/articles');

function purgeArticles() {
  console.log('🗑️  Purge des articles...\n');

  if (!existsSync(articlesDir)) {
    console.log('❌ Le dossier articles n\'existe pas');
    process.exit(1);
  }

  const files = readdirSync(articlesDir);
  const mdFiles = files.filter(file => file.endsWith('.md'));

  if (mdFiles.length === 0) {
    console.log('ℹ️  Aucun article à supprimer');
    process.exit(0);
  }

  console.log(`${mdFiles.length} article(s) trouvé(s)`);
  console.log('Suppression en cours...\n');

  let deleted = 0;
  let errors = 0;

  for (const file of mdFiles) {
    try {
      const filePath = join(articlesDir, file);
      unlinkSync(filePath);
      deleted++;
      console.log(`✓ Supprimé: ${file}`);
    } catch (error) {
      errors++;
      console.error(`✗ Erreur lors de la suppression de ${file}:`, error.message);
    }
  }

  console.log(`\n✅ Purge terminée:`);
  console.log(`   - ${deleted} article(s) supprimé(s)`);
  if (errors > 0) {
    console.log(`   - ${errors} erreur(s)`);
  }
}

purgeArticles();
