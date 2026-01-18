# Script de préparation pour l'open source

Ce script automatise la préparation d'un dépôt GitHub pour l'ouverture à l'open source.

## Fonctionnalités

1. **Audit de configuration** : Analyse complète du dépôt pour détecter :
   - Fichiers sensibles (.env, clés, secrets)
   - Secrets hardcodés dans le code
   - Problèmes dans les workflows GitHub Actions
   - Secrets et variables GitHub configurés
   - Vulnérabilités dans les dépendances
   - Configurations GitHub du dépôt
   - Fichiers volumineux
   - Permissions de fichiers
2. **Suppression des runs d'actions GitHub** : Nettoie tout l'historique des workflows
3. **Squash des commits** : Fusionne tous les commits en un seul commit "chore: Initial commit" avec la date du dimanche précédant le dernier commit
4. **Protection des branches** : Configure automatiquement la protection de la branche principale
5. **Vérifications** : Vérifie la présence des fichiers essentiels (LICENSE, README, CONTRIBUTING, etc.)
6. **Recommandations** : Affiche des commandes supplémentaires utiles

## Prérequis

- GitHub CLI (`gh`) installé et authentifié
- Dépôt Git initialisé
- Accès en écriture au dépôt GitHub

## Usage

### Mode simulation (recommandé pour commencer)

```bash
./scripts/prepare-for-opensource.sh --dry-run
```

### Exécution complète

```bash
./scripts/prepare-for-opensource.sh
```

### Options disponibles

```bash
./scripts/prepare-for-opensource.sh [OPTIONS]

Options:
  --dry-run          Mode simulation (ne fait rien, affiche seulement)
  --skip-runs        Ne pas supprimer les runs d'actions
  --skip-squash      Ne pas squasher les commits
  --skip-protection  Ne pas configurer la protection des branches
  --skip-audit       Ne pas effectuer l'audit de configuration
  --branch BRANCH    Branche à traiter (défaut: main ou master)
  --help             Afficher l'aide
```

## Exemples

### Vérifier ce qui sera fait sans rien modifier

```bash
./scripts/prepare-for-opensource.sh --dry-run
```

### Préparer uniquement les commits (sans supprimer les runs)

```bash
./scripts/prepare-for-opensource.sh --skip-runs
```

### Effectuer uniquement l'audit (sans modifications)

```bash
./scripts/prepare-for-opensource.sh --skip-runs --skip-squash --skip-protection
```

### Traiter une branche spécifique

```bash
./scripts/prepare-for-opensource.sh --branch develop
```

## Étapes détaillées

### 1. Audit de configuration

Le script effectue un audit complet du dépôt qui vérifie :

- **Fichiers sensibles** : Recherche de `.env`, clés privées, certificats, etc.
- **Secrets hardcodés** : Détection de mots de passe, clés API, tokens dans le code
- **Workflows GitHub Actions** : Vérification des secrets hardcodés et bonne utilisation des secrets GitHub
- **Secrets GitHub** : Liste des secrets et variables d'environnement configurés
- **Fichiers de configuration** : Audit de package.json, docker-compose.yml, etc.
- **.gitignore** : Vérification que les fichiers sensibles sont bien ignorés
- **Permissions** : Vérification des permissions sur les fichiers sensibles
- **Dépendances** : Détection de vulnérabilités (npm, composer)
- **Configurations GitHub** : Vérification des paramètres du dépôt
- **Fichiers volumineux** : Détection des fichiers >10MB

Le rapport d'audit est affiché avec :
- ❌ Problèmes critiques (à corriger avant l'ouverture)
- ⚠️ Avertissements (recommandations)
- ✅ Vérifications réussies

Un rapport détaillé peut être généré automatiquement si des problèmes critiques sont détectés.

### 2. Suppression des runs d'actions

Le script supprime tous les runs d'actions GitHub pour nettoyer l'historique. Cette opération peut prendre du temps selon le nombre de runs.

### 3. Squash des commits

- Crée une branche de sauvegarde avant modification
- Réinitialise la branche à la racine (premier commit)
- Crée un nouveau commit unique "chore: Initial commit"
- Utilise la date du dimanche précédant le dernier commit

**Important** : Après le squash, vous devrez pousser avec `--force-with-lease` :

```bash
git push --force-with-lease origin main
```

### 4. Protection des branches

Configure automatiquement :
- Require pull request reviews (1 approbation minimum)
- Require status checks to pass
- Require conversation resolution
- Require linear history
- Block force pushes
- Block deletions
- Include administrators

### 5. Vérifications

Le script vérifie la présence de :
- LICENSE
- README
- CONTRIBUTING (recommandé)
- CODE_OF_CONDUCT (recommandé)
- .gitignore

## Sécurité

⚠️ **Attention** : Le script modifie l'historique Git avec `--force`. Assurez-vous de :
- Avoir une sauvegarde complète du dépôt
- Travailler sur une copie si nécessaire
- Tester d'abord avec `--dry-run`
- Vérifier qu'aucun collaborateur n'a de travail en cours

## Utilisation sur plusieurs dépôts

Pour utiliser ce script sur plusieurs dépôts :

```bash
# Dans chaque dépôt
cd /chemin/vers/depot1
./scripts/prepare-for-opensource.sh --dry-run  # Vérifier d'abord
./scripts/prepare-for-opensource.sh            # Exécuter

cd /chemin/vers/depot2
./scripts/prepare-for-opensource.sh --dry-run
./scripts/prepare-for-opensource.sh
```

Ou créer un script wrapper :

```bash
#!/bin/bash
for repo in /chemin/depot1 /chemin/depot2 /chemin/depot3; do
    echo "Traitement de $repo..."
    cd "$repo"
    ./scripts/prepare-for-opensource.sh
done
```

## Dépannage

### Erreur : "GitHub CLI (gh) n'est pas installé"

Installez GitHub CLI :
- macOS : `brew install gh`
- Linux : Voir https://github.com/cli/cli/blob/trunk/docs/install_linux.md
- Windows : `winget install GitHub.cli`

### Erreur : "Vous n'êtes pas authentifié"

```bash
gh auth login
```

### Erreur : "Impossible de détecter le dépôt GitHub"

Assurez-vous que le dépôt est bien lié à GitHub et que vous avez les droits d'accès.

### Le squash ne fonctionne pas

Vérifiez que vous êtes sur la bonne branche et qu'il n'y a pas de modifications non commitées :

```bash
git status
git stash  # Si nécessaire
```

## Commandes supplémentaires recommandées

Après l'exécution du script, le script affiche des commandes supplémentaires utiles :

- Rendre le dépôt public
- Configurer les topics
- Activer les discussions
- Configurer les templates d'issues/PR
- Activer Dependabot
- Et plus encore...

## Support

Pour toute question ou problème, ouvrez une issue sur le dépôt.
