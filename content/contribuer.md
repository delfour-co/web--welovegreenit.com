---
title: "Contribuer au projet"
date: 2025-01-27
draft: false
layout: "legal"
---

We Love Green IT est un projet **open source** et **communautaire**. Toutes les contributions sont les bienvenues, que vous soyez développeur, rédacteur, expert Green IT ou simplement passionné par le sujet.

---

## Façons de contribuer

### Signaler un problème

Vous avez trouvé une erreur, un lien cassé ou une information obsolète ?

1. Rendez-vous sur notre [dépôt GitHub](https://github.com/delfour-co/web--welovegreenit.com)
2. Cliquez sur l'onglet **Issues**
3. Cliquez sur **New Issue**
4. Décrivez le problème avec le plus de détails possible

**Labels utiles** :
- `bug` : Problème technique
- `contenu` : Erreur ou amélioration de contenu
- `typo` : Faute de frappe ou d'orthographe

---

### Proposer une source d'actualités

Vous connaissez un blog, un site ou une newsletter sur le Green IT qui n'est pas dans notre agrégateur ?

**Par GitHub Issue** :
1. Ouvrez une [nouvelle issue](https://github.com/delfour-co/web--welovegreenit.com/issues/new)
2. Utilisez le titre : `[Source] Nom du site`
3. Incluez :
   - URL du site
   - URL du flux RSS (si disponible)
   - Brève description du contenu
   - Langue (FR/EN)

**Critères de sélection** :
- Contenu en lien avec le numérique responsable / Green IT
- Mises à jour régulières
- Contenu de qualité et sourcé
- Pas de contenu purement promotionnel

---

### Améliorer le contenu

#### Guides et ressources

Nos guides sont en amélioration continue. Vous pouvez :

- **Corriger** des erreurs factuelles ou des imprécisions
- **Mettre à jour** des informations obsolètes
- **Enrichir** avec des exemples, cas pratiques ou données récentes
- **Traduire** du contenu (FR ↔ EN)

**Comment faire** :
1. Forkez le [dépôt GitHub](https://github.com/delfour-co/web--welovegreenit.com)
2. Modifiez les fichiers Markdown dans le dossier `content/`
3. Soumettez une Pull Request avec une description claire des changements

#### Glossaire

Le glossaire peut toujours s'enrichir de nouveaux termes. Pour proposer un terme :

1. Ouvrez une issue avec le label `glossaire`
2. Ou soumettez directement une PR modifiant `content/glossaire/_index.md`

**Format d'une entrée** :
```markdown
### Terme
Définition concise et accessible. Source si nécessaire.
```

---

### Contribuer au code

#### Prérequis

- [Git](https://git-scm.com/)
- [Hugo](https://gohugo.io/) (extended version)
- [Node.js](https://nodejs.org/) (pour Tailwind CSS)

#### Installation locale

```bash
# Cloner le dépôt
git clone https://github.com/delfour-co/web--welovegreenit.com.git
cd welovegreenit.com

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur `http://localhost:1313`

#### Structure du projet

```
welovegreenit.com/
├── content/           # Contenu Markdown
│   ├── articles/      # Articles agrégés (auto-généré)
│   ├── guides/        # Guides pratiques
│   ├── ressources/    # Outils, formations, etc.
│   ├── glossaire/     # Définitions
│   └── metiers/       # Fiches métiers
├── layouts/           # Templates Hugo
├── assets/            # CSS, JS
├── static/            # Fichiers statiques
└── .github/workflows/ # GitHub Actions
```

#### Bonnes pratiques

- **Commits** : Messages clairs en français ou anglais
- **Branches** : `feature/nom-feature` ou `fix/description`
- **Tests** : Vérifiez que `npm run build` fonctionne avant de soumettre
- **Style** : Respectez le style existant du code

#### Pull Requests

1. Créez une branche depuis `main`
2. Faites vos modifications
3. Testez localement (`npm run build`)
4. Poussez votre branche
5. Ouvrez une Pull Request avec :
   - Description des changements
   - Captures d'écran si modifications visuelles
   - Référence à l'issue liée (si applicable)

---

### Partager le projet

Même sans contribution technique, vous pouvez aider :

- **Partager** le site sur les réseaux sociaux ou dans votre entreprise
- **Recommander** les ressources à vos collègues
- **Citer** We Love Green IT dans vos présentations ou articles
- **Donner une étoile** sur [GitHub](https://github.com/delfour-co/web--welovegreenit.com)

---

## Licence des contributions

En contribuant à ce projet, vous acceptez que :

- Le **contenu** (textes, guides) soit sous licence [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.fr)
- Le **code** soit sous licence [MIT](https://opensource.org/licenses/MIT)

Cela signifie que vos contributions peuvent être réutilisées, modifiées et redistribuées librement, avec attribution.

---

## Code de conduite

Ce projet suit un code de conduite simple :

- **Bienveillance** : Soyez respectueux dans vos échanges
- **Constructivité** : Privilégiez les critiques constructives
- **Inclusivité** : Accueillez les contributeurs de tous niveaux
- **Collaboration** : Travaillez ensemble vers un objectif commun

Les comportements irrespectueux, discriminatoires ou harcelants ne seront pas tolérés.

---

## Questions ?

- **Discussions générales** : [GitHub Discussions](https://github.com/delfour-co/web--welovegreenit.com/discussions)
- **Problèmes techniques** : [GitHub Issues](https://github.com/delfour-co/web--welovegreenit.com/issues)

Merci de contribuer à rendre le numérique plus responsable !

---

*Dernière mise à jour : Janvier 2025*
