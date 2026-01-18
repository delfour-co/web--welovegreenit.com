#!/usr/bin/env node

/**
 * Script pour installer les hooks Git
 * S'exécute automatiquement après npm install grâce au script "prepare"
 */

import { existsSync, chmodSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join, resolve } from 'path';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');
const hooksDir = join(projectRoot, '.git', 'hooks');
const commitMsgHook = join(hooksDir, 'commit-msg');

// Vérifier que nous sommes dans un dépôt Git
if (!existsSync(join(projectRoot, '.git'))) {
  console.log('⚠️  Ce n\'est pas un dépôt Git, les hooks ne seront pas installés.');
  process.exit(0);
}

// Vérifier que le dossier hooks existe
if (!existsSync(hooksDir)) {
  console.error('❌ Le dossier .git/hooks n\'existe pas.');
  process.exit(1);
}

// Contenu du hook commit-msg
const hookContent = `#!/bin/sh
# Hook Git pour valider les messages de commit avec commitlint

# Obtenir le chemin absolu du projet
PROJECT_ROOT="$(git rev-parse --show-toplevel)"
cd "$PROJECT_ROOT"

# Vérifier si les dépendances sont installées
if [ ! -d "node_modules/@commitlint/cli" ]; then
  echo "⚠️  Les dépendances commitlint ne sont pas installées."
  echo "⚠️  Exécutez 'npm install' pour activer la validation des messages de commit."
  echo "⚠️  Le commit sera accepté pour cette fois, mais la validation sera activée après 'npm install'."
  exit 0
fi

# Exécuter commitlint sur le message de commit avec les dépendances locales
if [ -f "node_modules/.bin/commitlint" ]; then
  node_modules/.bin/commitlint --edit "$1"
else
  # Fallback: utiliser npx si le binaire local n'existe pas
  npx --yes @commitlint/cli --edit "$1"
fi
`;

try {
  // Écrire le hook
  writeFileSync(commitMsgHook, hookContent, 'utf-8');
  
  // Rendre le hook exécutable
  chmodSync(commitMsgHook, 0o755);
  
  console.log('✅ Hook commit-msg installé avec succès !');
  console.log('📝 Les messages de commit seront maintenant validés selon les conventions Conventional Commits.');
  console.log('\nFormat attendu:');
  console.log('  type(scope): description');
  console.log('\nTypes autorisés:');
  console.log('  feat, fix, docs, style, refactor, perf, test, build, ci, chore, revert');
  console.log('\nExemples:');
  console.log('  feat: ajouter la page de contact');
  console.log('  fix(ci): corriger le workflow GitHub Actions');
  console.log('  docs: mettre à jour le README');
} catch (error) {
  console.error('❌ Erreur lors de l\'installation du hook:', error.message);
  process.exit(1);
}
