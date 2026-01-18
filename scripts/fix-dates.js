import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

const articlesDir = join(process.cwd(), 'content/articles');

const files = readdirSync(articlesDir);
const mdFiles = files.filter(file => file.endsWith('.md'));

let fixed = 0;

for (const file of mdFiles) {
  const filePath = join(articlesDir, file);
  let content = readFileSync(filePath, 'utf-8');
  
  // Corriger les dates au format multiline
  content = content.replace(/^date:\s*\|\s*\n\s*([0-9TZ.:-]+)\s*$/gm, 'date: $1');
  
  // Corriger les liens au format multiline
  content = content.replace(/^link:\s*\|\s*\n\s*(https?:\/\/[^\s]+)\s*$/gm, 'link: "$1"');
  
  // Corriger les guid au format multiline
  content = content.replace(/^guid:\s*\|\s*\n\s*(https?:\/\/[^\s]+)\s*$/gm, 'guid: "$1"');
  
  // Corriger draft: "false" en draft: false
  content = content.replace(/^draft:\s*"false"$/gm, 'draft: false');
  
  writeFileSync(filePath, content, 'utf-8');
  fixed++;
}

console.log(`✅ ${fixed} fichier(s) corrigé(s)`);
