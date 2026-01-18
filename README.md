# We Love Green IT

[![License: MIT](https://img.shields.io/badge/Code-MIT-green.svg)](LICENSE)
[![License: CC BY 4.0](https://img.shields.io/badge/Content-CC%20BY%204.0-lightgrey.svg)](LICENSE-CONTENT)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](CODE_OF_CONDUCT.md)

> Le portail francophone du numérique responsable

Agrégateur d'articles Green IT et ressources complètes sur l'éco-conception, la sobriété numérique et le développement durable dans l'informatique.

🌐 **Site** : [welovegreenit.com](https://welovegreenit.com)

---

## Fonctionnalités

- **Agrégateur d'actualités** : Articles Green IT de sources francophones et internationales
- **Guides pratiques** : Éco-conception web, Cloud responsable, Achats IT, Sobriété des données...
- **Ressources** : Outils, formations, certifications, référentiels
- **Glossaire** : Définitions du numérique responsable
- **Guide des métiers** : Professions liées au Green IT

## Éco-conception

Ce site est lui-même conçu selon les principes du Green IT :

- **Statique** : Généré avec Hugo, sans base de données
- **Léger** : Optimisé pour minimiser les transferts
- **Sobre** : Pas de trackers, pas de publicité
- **Accessible** : Paramètres d'accessibilité intégrés
- **Automatisé** : Agrégation RSS via GitHub Actions

---

## Démarrage rapide

### Prérequis

- [Hugo Extended](https://gohugo.io/installation/) (v0.110+)
- [Node.js](https://nodejs.org/) (v20+)
- npm

### Installation

```bash
# Cloner le repository
git clone https://github.com/delfour-co/web--welovegreenit.com.git
cd welovegreenit.com

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur `http://localhost:1313`

### Build

```bash
npm run build
```

Le site sera généré dans `public/`.

---

## Structure du projet

```
welovegreenit.com/
├── content/              # Contenu Markdown
│   ├── articles/         # Articles agrégés (auto-généré)
│   ├── guides/           # Guides pratiques
│   ├── ressources/       # Outils, formations, etc.
│   ├── glossaire/        # Définitions
│   └── metiers/          # Fiches métiers
├── layouts/              # Templates Hugo
├── assets/css/           # Styles Tailwind
├── scripts/              # Scripts Node.js
├── data/                 # Configuration (feeds.json)
└── .github/workflows/    # GitHub Actions
```

---

## Agrégation RSS

Les articles sont automatiquement récupérés depuis les flux RSS configurés.

### Exécution manuelle

```bash
npm run aggregate
```

### Configuration

Éditer `data/feeds.json` pour ajouter/modifier les sources :

```json
{
  "url": "https://example.com/feed",
  "name": "Nom du flux",
  "categories": ["green-it", "éco-conception"]
}
```

### Automatisation

Un workflow GitHub Actions s'exécute quotidiennement pour :
1. Récupérer les nouveaux articles
2. Les convertir en Markdown
3. Déclencher le déploiement

---

## Contribuer

Nous accueillons toutes les contributions ! Consultez notre [Guide de contribution](CONTRIBUTING.md).

### Façons de contribuer

- 🐛 [Signaler un bug](https://github.com/delfour-co/web--welovegreenit.com/issues/new?labels=bug)
- 💡 [Proposer une amélioration](https://github.com/delfour-co/web--welovegreenit.com/issues/new?labels=enhancement)
- 📰 [Suggérer une source RSS](https://github.com/delfour-co/web--welovegreenit.com/issues/new?labels=source)
- 📝 Améliorer le contenu (guides, glossaire)
- 💻 Contribuer au code

### Conventions de commit

Ce projet utilise [Conventional Commits](https://www.conventionalcommits.org/) :

```bash
feat: ajouter une nouvelle fonctionnalité
fix: corriger un bug
docs: mettre à jour la documentation
```

---

## Licences

Ce projet utilise une double licence :

| Élément | Licence | Fichier |
|---------|---------|---------|
| **Code source** | MIT | [LICENSE](LICENSE) |
| **Contenu** (guides, ressources, glossaire) | CC BY 4.0 | [LICENSE-CONTENT](LICENSE-CONTENT) |

Les articles agrégés restent la propriété de leurs auteurs respectifs.

---

## Code de conduite

Ce projet adhère au [Contributor Covenant](CODE_OF_CONDUCT.md). En participant, vous vous engagez à respecter ce code.

---

## Sécurité

Pour signaler une vulnérabilité, consultez notre [Politique de sécurité](SECURITY.md).

---

## Liens utiles

- 🌐 [Site web](https://welovegreenit.com)
- 📖 [Guide de contribution](CONTRIBUTING.md)
- 📜 [Code de conduite](CODE_OF_CONDUCT.md)
- 🔒 [Politique de sécurité](SECURITY.md)
- 💬 [Discussions](https://github.com/delfour-co/web--welovegreenit.com/discussions)

---

## Remerciements

Merci à tous les contributeurs et aux sources d'information qui alimentent cet agrégateur.

---

<p align="center">
  <strong>Made with 🌱 for a greener web</strong>
</p>
