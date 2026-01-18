# Politique de sécurité

## Versions supportées

Ce projet étant un site statique déployé en continu, seule la dernière version
(branche `main`) est supportée.

| Version | Supportée |
|---------|-----------|
| main (dernière) | :white_check_mark: |
| Anciennes versions | :x: |

## Signaler une vulnérabilité

Si vous découvrez une vulnérabilité de sécurité, merci de nous la signaler de
manière responsable.

### Processus de signalement

1. **Ne pas** créer d'issue publique pour les vulnérabilités de sécurité
2. Envoyez un rapport via [GitHub Security Advisories](https://github.com/delfour-co/web--welovegreenit.com/security/advisories/new)
3. Ou créez une issue privée avec le label `security` si les advisories ne sont pas disponibles

### Informations à inclure

- Description de la vulnérabilité
- Étapes pour reproduire
- Impact potentiel
- Suggestion de correction (si vous en avez une)

### Délai de réponse

- **Accusé de réception** : Sous 48 heures
- **Évaluation initiale** : Sous 1 semaine
- **Correction** : Selon la gravité (critique : immédiat, haute : 1 semaine, moyenne : 1 mois)

### Ce que nous nous engageons à faire

- Accuser réception de votre rapport
- Vous tenir informé de l'avancement
- Créditer votre découverte (sauf si vous préférez rester anonyme)
- Ne pas engager de poursuites si vous avez agi de bonne foi

## Périmètre

### Dans le périmètre

- Site web welovegreenit.com
- Scripts d'agrégation RSS
- Workflows GitHub Actions
- Dépendances directes

### Hors périmètre

- Sites tiers référencés (sources RSS)
- Infrastructure GitHub (Pages, Actions)
- Navigateurs et leurs extensions

## Bonnes pratiques de sécurité du projet

Ce projet applique les bonnes pratiques suivantes :

### Site statique

- Pas de base de données
- Pas de backend applicatif
- Pas de formulaires avec traitement serveur
- Pas de données utilisateur stockées

### Dépendances

- Mises à jour régulières via Dependabot
- Audit des dépendances : `npm audit`
- Versions fixées dans package-lock.json

### GitHub Actions

- Permissions minimales
- Secrets gérés via GitHub Secrets
- Pas d'exécution de code non vérifié

### Contenu

- Pas de scripts inline
- Content Security Policy recommandée
- Liens externes avec `rel="noopener noreferrer"`

## Historique des vulnérabilités

Aucune vulnérabilité signalée à ce jour.

| Date | Gravité | Description | Statut |
|------|---------|-------------|--------|
| - | - | - | - |

---

Merci de contribuer à la sécurité de ce projet !
