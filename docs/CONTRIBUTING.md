# Guide de contribution

## Messages de commit

Ce projet suit les conventions [Conventional Commits](https://www.conventionalcommits.org/).

### Format

```
type(scope): description

[corps optionnel]

[pied de page optionnel]
```

### Types autorisés

- **feat**: Nouvelle fonctionnalité
- **fix**: Correction de bug
- **docs**: Documentation uniquement
- **style**: Changements qui n'affectent pas le sens du code (formatage, point-virgules, etc.)
- **refactor**: Refactorisation du code de production
- **perf**: Amélioration des performances
- **test**: Ajout ou modification de tests
- **build**: Changements du système de build ou dépendances externes
- **ci**: Changements de configuration CI
- **chore**: Autres changements qui ne modifient pas le code source ou les tests
- **revert**: Annulation d'un commit précédent

### Portée (optionnelle)

La portée indique la partie du code affectée. Exemples :
- `feat(ci):` - fonctionnalité liée à la CI
- `fix(ui):` - correction dans l'interface utilisateur
- `docs(readme):` - documentation dans le README

### Description

- En minuscules
- Pas de point final
- Commence par un verbe à l'impératif (ajouter, corriger, mettre à jour, etc.)
- Maximum 72 caractères

### Exemples

✅ **Bons exemples :**
```
feat: ajouter la page de contact
fix(ci): corriger le workflow GitHub Actions
docs: mettre à jour le README
feat(ui): ajouter le mode sombre
fix: corriger le bug de chargement des images
chore: mettre à jour les dépendances
```

❌ **Mauvais exemples :**
```
Ajout de la page de contact                    # Pas de type
feat: Ajout de la page de contact.             # Majuscule et point final
feat Ajout de la page de contact               # Pas de deux-points
feat: ajouter la page de contact qui permet aux utilisateurs de nous contacter facilement  # Trop long
```

### Installation des hooks

Les hooks Git sont installés automatiquement lors de l'exécution de `npm install` grâce au script `prepare`.

Pour installer manuellement les hooks :
```bash
npm run prepare
```

### Validation

Le hook `commit-msg` valide automatiquement vos messages de commit. Si le format n'est pas respecté, le commit sera rejeté avec un message d'erreur explicatif.

Pour tester votre message sans faire de commit :
```bash
echo "feat: test" | npx commitlint
```
