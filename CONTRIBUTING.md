# Contribuer à We Love Green IT

Merci de votre intérêt pour contribuer à We Love Green IT ! Ce guide vous aidera
à démarrer.

## Table des matières

- [Code de conduite](#code-de-conduite)
- [Comment contribuer](#comment-contribuer)
- [Signaler un bug](#signaler-un-bug)
- [Proposer une amélioration](#proposer-une-amélioration)
- [Proposer une source RSS](#proposer-une-source-rss)
- [Contribuer au contenu](#contribuer-au-contenu)
- [Contribuer au code](#contribuer-au-code)
- [Conventions de commit](#conventions-de-commit)
- [Processus de review](#processus-de-review)

## Code de conduite

Ce projet adhère au [Contributor Covenant](CODE_OF_CONDUCT.md). En participant,
vous vous engagez à respecter ce code. Veuillez signaler tout comportement
inacceptable via les issues GitHub.

## Comment contribuer

Il existe plusieurs façons de contribuer :

| Type de contribution | Description |
|---------------------|-------------|
| Signaler des bugs | Problèmes techniques ou liens cassés |
| Améliorer le contenu | Corriger des erreurs, enrichir les guides |
| Proposer des sources | Suggérer de nouveaux flux RSS |
| Contribuer au code | Améliorer le site ou les scripts |
| Partager | Diffuser le projet autour de vous |

## Signaler un bug

Avant de créer une issue :

1. Vérifiez que le bug n'a pas déjà été signalé
2. Assurez-vous d'utiliser la dernière version

Pour créer une issue de bug :

1. Allez dans l'onglet [Issues](https://github.com/delfour-co/web--welovegreenit.com/issues)
2. Cliquez sur "New Issue"
3. Utilisez le template "Bug Report" si disponible
4. Incluez :
   - Description claire du problème
   - Étapes pour reproduire
   - Comportement attendu vs observé
   - Captures d'écran si applicable
   - Navigateur et version

## Proposer une amélioration

Pour suggérer une nouvelle fonctionnalité ou amélioration :

1. Ouvrez une issue avec le label `enhancement`
2. Décrivez :
   - Le problème que cela résout
   - La solution proposée
   - Les alternatives considérées

## Proposer une source RSS

Vous connaissez un blog ou site sur le Green IT qui mérite d'être agrégé ?

1. Ouvrez une issue avec le titre `[Source] Nom du site`
2. Incluez :
   - URL du site
   - URL du flux RSS (si connu)
   - Description du contenu
   - Langue (FR/EN)

**Critères d'acceptation :**
- Contenu en lien avec le numérique responsable
- Mises à jour régulières (au moins mensuel)
- Contenu de qualité et sourcé
- Pas de contenu purement promotionnel

## Contribuer au contenu

### Guides et ressources

Le contenu se trouve dans le dossier `content/` :

```
content/
├── guides/        # Guides pratiques
├── ressources/    # Outils, formations, certifications
├── glossaire/     # Définitions
└── metiers/       # Fiches métiers
```

Pour modifier du contenu :

1. Forkez le repository
2. Créez une branche : `git checkout -b content/description`
3. Modifiez les fichiers Markdown
4. Testez localement avec `npm run dev`
5. Committez avec un message clair
6. Ouvrez une Pull Request

### Style et ton

- Ton professionnel mais accessible
- Évitez le jargon non expliqué
- Citez vos sources
- Utilisez des exemples concrets
- Privilégiez les listes et tableaux pour la lisibilité

## Contribuer au code

### Prérequis

- [Git](https://git-scm.com/)
- [Hugo Extended](https://gohugo.io/) (v0.110+)
- [Node.js](https://nodejs.org/) (v20+)
- npm

### Installation

```bash
# Cloner votre fork
git clone https://github.com/VOTRE-USERNAME/welovegreenit.com.git
cd welovegreenit.com

# Ajouter le remote upstream
git remote add upstream https://github.com/delfour-co/web--welovegreenit.com.git

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

### Structure du projet

```
welovegreenit.com/
├── assets/css/          # Styles Tailwind
├── content/             # Contenu Markdown
├── data/                # Données (feeds.json)
├── layouts/             # Templates Hugo
├── scripts/             # Scripts Node.js
├── static/              # Assets statiques
└── .github/workflows/   # GitHub Actions
```

### Workflow de développement

1. Synchronisez avec upstream :
   ```bash
   git fetch upstream
   git checkout main
   git merge upstream/main
   ```

2. Créez une branche :
   ```bash
   git checkout -b feature/ma-feature
   # ou
   git checkout -b fix/mon-fix
   ```

3. Développez et testez :
   ```bash
   npm run dev      # Serveur de dev
   npm run build    # Vérifier le build
   ```

4. Committez (voir conventions ci-dessous)

5. Poussez et créez une PR :
   ```bash
   git push origin feature/ma-feature
   ```

## Conventions de commit

Ce projet utilise [Conventional Commits](https://www.conventionalcommits.org/).

### Format

```
type(scope): description

[corps optionnel]

[pied de page optionnel]
```

### Types

| Type | Description |
|------|-------------|
| `feat` | Nouvelle fonctionnalité |
| `fix` | Correction de bug |
| `docs` | Documentation |
| `style` | Formatage (pas de changement de code) |
| `refactor` | Refactorisation |
| `perf` | Amélioration de performance |
| `test` | Tests |
| `build` | Système de build |
| `ci` | Configuration CI |
| `chore` | Maintenance |

### Exemples

```bash
feat: ajouter le guide sur la sobriété numérique
fix(rss): corriger le parsing des dates
docs: mettre à jour le README
style(css): reformater les styles du footer
```

### Validation

Un hook Git valide automatiquement vos commits. Si le format n'est pas respecté,
le commit sera rejeté.

## Processus de review

1. **Vérifications automatiques** : Le CI vérifie le build et le linting
2. **Review humaine** : Un mainteneur examine la PR
3. **Modifications** : Vous pouvez être invité à faire des ajustements
4. **Merge** : Une fois approuvée, la PR est mergée

### Délais

- Issues : Réponse sous 1 semaine
- PR : Review sous 2 semaines
- Soyez patient, nous sommes bénévoles !

## Licences

En contribuant, vous acceptez que :

- **Code** : Sous licence [MIT](LICENSE)
- **Contenu** : Sous licence [CC BY 4.0](LICENSE-CONTENT)

## Questions ?

- [GitHub Discussions](https://github.com/delfour-co/web--welovegreenit.com/discussions)
- [GitHub Issues](https://github.com/delfour-co/web--welovegreenit.com/issues)

---

Merci de contribuer à rendre le numérique plus responsable ! 🌱
