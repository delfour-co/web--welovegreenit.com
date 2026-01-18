---
title: "Guide Complet de l'Éco-conception Web"
description: "Le guide de référence francophone pour concevoir des sites et applications web sobres, performants et respectueux de l'environnement. De la théorie à la pratique, tous les outils et méthodes pour réduire l'empreinte numérique de vos projets web."
date: 2025-01-27
draft: false
weight: 1
---

# Guide Complet de l'Éco-conception Web

**Temps de lecture estimé : 45 minutes**

Ce guide exhaustif vous accompagne dans la conception de services web respectueux de l'environnement. Que vous soyez développeur, designer, chef de projet ou décideur, vous y trouverez les connaissances théoriques et les outils pratiques pour réduire l'empreinte numérique de vos projets.

---

## 1. Fondamentaux de l'éco-conception web

### 1.1 Qu'est-ce que l'éco-conception web ?

L'éco-conception web est une démarche qui vise à **réduire l'impact environnemental des services numériques dès leur conception**, tout au long de leur cycle de vie. Elle s'inscrit dans une approche plus large de numérique responsable qui prend en compte les dimensions environnementales, sociales et économiques.

#### Définition formelle

Selon l'ADEME, l'éco-conception consiste à *"intégrer l'environnement dès la conception d'un produit ou service, et lors de toutes les étapes de son cycle de vie"*. Appliquée au web, cette définition implique de :

- **Questionner le besoin** : Chaque fonctionnalité est-elle vraiment nécessaire ?
- **Optimiser les ressources** : Minimiser les transferts de données, le temps de calcul, le stockage
- **Prolonger la durée de vie** : Concevoir des services accessibles sur des équipements anciens
- **Faciliter la fin de vie** : Permettre la portabilité des données, éviter le vendor lock-in

#### Les trois piliers de l'éco-conception web

| Pilier | Description | Exemples |
|--------|-------------|----------|
| **Sobriété fonctionnelle** | Moins de fonctionnalités, mais plus utiles | Supprimer les features non utilisées, simplifier les parcours |
| **Efficience technique** | Code optimisé, ressources minimisées | Compression, cache, lazy loading |
| **Durabilité des usages** | Compatible avec équipements anciens, évolutif | Support de navigateurs anciens, responsive |

### 1.2 Impact environnemental du web : état des lieux

#### Les chiffres clés du numérique mondial

Le numérique représente aujourd'hui une part significative et croissante de l'empreinte environnementale mondiale :

| Indicateur | Valeur | Source |
|------------|--------|--------|
| Part du numérique dans les émissions mondiales de GES | 3-4% | The Shift Project, 2024 |
| Croissance annuelle du trafic internet | +25% par an | Cisco, 2023 |
| Poids moyen d'une page web | 2,4 Mo | HTTP Archive, 2024 |
| Évolution du poids des pages depuis 2010 | ×6 | HTTP Archive |
| Part de la vidéo dans le trafic internet | 82% | Sandvine, 2024 |
| Nombre d'équipements numériques dans le monde | 34 milliards | GreenIT.fr, 2024 |

#### Répartition de l'impact par composant

L'impact environnemental d'un service web se répartit entre trois tiers :

**1. Fabrication des équipements (70-80% de l'impact total)**

C'est le poste le plus important, souvent méconnu :
- Extraction des matières premières (plus de 70 matériaux différents dans un smartphone)
- Métaux rares et terres rares (lithium, cobalt, tantale...)
- Processus industriels très énergivores (fonderies de semi-conducteurs)
- Transport mondial des composants (plusieurs tours du monde pour un appareil)

**2. Utilisation des équipements et services (15-25%)**

- Consommation électrique des terminaux utilisateurs
- Consommation des data centers (serveurs, refroidissement, réseau)
- Consommation des équipements réseau (routeurs, antennes, câbles)

**3. Fin de vie (5-10%)**

- Collecte et tri des déchets électroniques (DEEE)
- Recyclage, souvent partiel (moins de 20% des métaux récupérés)
- Enfouissement ou incinération des déchets non recyclables
- Exportation illégale vers des pays en développement

#### Pourquoi l'éco-conception web est essentielle

Bien que l'impact direct du code soit modeste (il agit principalement sur la phase d'utilisation), l'éco-conception web a un **effet multiplicateur** considérable :

**L'effet domino de la sobriété :**

1. Un site léger → Compatible avec des équipements anciens
2. Compatible avec des équipements anciens → Prolonge leur durée de vie
3. Durée de vie prolongée → Moins de fabrication de nouveaux appareils
4. Moins de fabrication → Réduction massive de l'impact (70-80% de l'empreinte)

**Calcul d'impact type :**

Une page web de 3 Mo visitée 100 000 fois par mois :
- Transfert annuel : 3 Mo × 100 000 × 12 = 3,6 To
- Équivalent CO2 : environ 1,8 tonne par an (0,5g CO2/Mo en moyenne)

En optimisant à 500 Ko :
- Transfert annuel : 0,5 Mo × 100 000 × 12 = 600 Go
- Équivalent CO2 : environ 300 kg par an
- **Économie : 1,5 tonne de CO2 par an** (83% de réduction)

### 1.3 Cycle de vie d'une requête web

Pour comprendre où agir, il est essentiel de comprendre ce qui se passe lorsqu'un utilisateur charge une page web.

#### Anatomie d'une requête HTTP

Lorsqu'un utilisateur tape une URL ou clique sur un lien, voici ce qui se passe :

1. **Résolution DNS** : Le navigateur demande l'adresse IP du domaine
2. **Connexion TCP** : Établissement de la connexion avec le serveur
3. **Handshake TLS** : Négociation du chiffrement (HTTPS)
4. **Requête HTTP** : Le navigateur envoie la requête
5. **Traitement serveur** : Logique métier, base de données, génération HTML
6. **Réponse HTTP** : Le serveur renvoie le contenu
7. **Téléchargement** : Le navigateur reçoit les données
8. **Parsing HTML** : Analyse du document, découverte des ressources
9. **Requêtes secondaires** : CSS, JS, images, fonts...
10. **Rendering** : Construction de l'arbre de rendu
11. **Exécution JS** : Interactivité
12. **Affichage** : Premier contenu visible, puis page complète

#### Points d'impact environnemental

| Étape | Consommation | Optimisation possible |
|-------|--------------|----------------------|
| Résolution DNS | Faible | Cache DNS, réduire domaines tiers |
| Connexion réseau | Moyenne | HTTP/2, HTTP/3, keep-alive |
| Transfert données | **Élevée** | Compression, cache, réduction poids |
| Traitement serveur | Variable | Code optimisé, cache applicatif |
| Traitement client | **Élevée** | JS sobre, CSS optimisé, DOM léger |
| Affichage | Moyenne | Éviter repaints, animations GPU |

### 1.4 Le principe fondamental : la sobriété

> *"Le code le plus écologique est celui qui n'existe pas."*

Ce principe fondamental guide toute démarche d'éco-conception. Avant d'optimiser, il faut d'abord **questionner la nécessité**.

#### Hiérarchie des actions (par ordre de priorité)

1. **ÉVITER** : Ne pas créer de besoin inutile, supprimer les fonctionnalités non utilisées
2. **RÉDUIRE** : Simplifier les fonctionnalités restantes, minimiser les données collectées
3. **OPTIMISER** : Améliorer l'efficience technique, compresser, mettre en cache
4. **COMPENSER** : En dernier recours uniquement, ne résout pas le problème à la source

#### Questions à se poser systématiquement

**Au niveau stratégique :**
- Ce service numérique est-il vraiment nécessaire ?
- Existe-t-il une alternative non numérique ?
- Peut-on mutualiser avec un service existant ?
- Quelle est la durée de vie prévue ?

**Au niveau fonctionnel :**
- Cette fonctionnalité répond-elle à un besoin réel et fréquent ?
- Les utilisateurs l'utilisent-ils vraiment ? (vérifier avec les analytics)
- Peut-on la simplifier ?
- Quel est son coût (développement + maintenance + impact) vs sa valeur ?

**Au niveau technique :**
- Cette bibliothèque est-elle indispensable ?
- Cette image est-elle nécessaire ?
- Cette animation apporte-t-elle de la valeur ?
- Ce tracking est-il vraiment utilisé ?

### 1.5 Bénéfices de l'éco-conception web

L'éco-conception n'est pas qu'une contrainte environnementale. Elle génère de nombreux **co-bénéfices** qui justifient l'investissement.

#### Performance et expérience utilisateur

| Métrique | Impact de l'éco-conception |
|----------|---------------------------|
| Temps de chargement | Réduit de 40-70% |
| Time to Interactive | Amélioré significativement |
| Core Web Vitals | Scores optimisés |
| Taux de rebond | Réduit (corrélation prouvée) |
| Taux de conversion | Augmenté (+7% par seconde gagnée selon Google) |

**Études de cas :**
- Pinterest : -40% temps de chargement → +15% inscriptions
- BBC : +1 seconde de chargement → -10% utilisateurs perdus
- Amazon : +100ms de latence → -1% de ventes

#### Accessibilité

Un site éco-conçu est naturellement plus accessible :
- Fonctionne sur des connexions lentes (zones rurales, pays en développement)
- Compatible avec des équipements anciens ou peu puissants
- Interface simplifiée, plus facile à naviguer
- Moins de JavaScript = meilleure compatibilité avec les technologies d'assistance

#### Économies financières

| Poste | Économie potentielle |
|-------|---------------------|
| Hébergement | -30 à -60% (moins de bande passante) |
| Infrastructure | Serveurs moins sollicités, scaling réduit |
| Maintenance | Code plus simple = moins de bugs |
| SEO | Meilleur référencement (Core Web Vitals) |

#### Conformité réglementaire

- **Loi REEN** (France) : Obligations d'éco-conception pour les services publics
- **RGAA** : Accessibilité obligatoire pour le service public
- **RGPD** : Minimisation des données collectées
- **CSRD** : Reporting extra-financier incluant le numérique (2024-2025)

---

## 2. Audit et mesure de l'impact

### 2.1 Pourquoi mesurer ?

> *"On ne peut améliorer que ce que l'on mesure."* — Peter Drucker

La mesure est le point de départ de toute démarche d'éco-conception. Elle permet de :

1. **Établir un état des lieux** : Connaître la situation actuelle objectivement
2. **Identifier les priorités** : Cibler les optimisations à fort impact
3. **Suivre les progrès** : Mesurer l'efficacité des actions entreprises
4. **Communiquer** : Objectiver les résultats auprès des parties prenantes
5. **Comparer** : Se positionner par rapport aux bonnes pratiques et concurrents

### 2.2 Les indicateurs clés

#### Indicateurs techniques de base

| Indicateur | Description | Cible éco-conception | Mesure |
|------------|-------------|---------------------|--------|
| **Poids de page** | Taille totale transférée | < 500 Ko (idéal), < 1 Mo (acceptable) | DevTools, WebPageTest |
| **Nombre de requêtes** | Requêtes HTTP pour charger la page | < 25 (idéal), < 50 (acceptable) | DevTools |
| **Éléments DOM** | Nombre de nœuds dans le DOM | < 800 (idéal), < 1500 (acceptable) | DevTools, Lighthouse |
| **Temps de chargement** | DOMContentLoaded | < 1,5s | DevTools |
| **Time to Interactive** | Délai avant interactivité complète | < 3s | Lighthouse |

#### EcoIndex : l'indicateur de référence

L'EcoIndex est un score de 0 à 100 (A à G) qui évalue l'empreinte environnementale d'une page web. Développé par le collectif GreenIT.fr, il est devenu la référence en France.

**Formule de calcul :**
```
EcoIndex = f(DOM, Requêtes, Poids)
```

Le score est calculé à partir de trois métriques pondérées :
- **DOM** : Nombre d'éléments dans le DOM (complexité de la page)
- **Requêtes** : Nombre de requêtes HTTP (sollicitation réseau)
- **Poids** : Taille totale transférée en Ko (volume de données)

**Grille d'évaluation EcoIndex :**

| Note | Score | Interprétation | Objectif |
|------|-------|----------------|----------|
| A | 80-100 | Excellent | Sites vitrines, blogs |
| B | 65-79 | Très bien | **Cible recommandée** |
| C | 50-64 | Bien | Acceptable pour sites riches |
| D | 35-49 | Moyen | À améliorer |
| E | 20-34 | Insuffisant | Problèmes majeurs |
| F | 5-19 | Mauvais | Urgence à agir |
| G | 0-4 | Très mauvais | Site potentiellement inutilisable |

**Équivalences environnementales :**

L'EcoIndex fournit également une estimation de :
- **Émissions de GES** : en grammes de CO2 équivalent (gCO2e) par page vue
- **Consommation d'eau** : en centilitres par page vue

Exemple : Une page avec un EcoIndex de 50 (C) génère environ 2g de CO2 et consomme 3cl d'eau par visite.

### 2.3 Méthodologie d'audit complète

#### Phase 1 : Préparation (1-2 jours)

**1. Définir le périmètre**

Questions à se poser :
- Quelles pages auditer ? (toutes, les plus visitées, un parcours type)
- Quel est le trafic de chaque page ? (prioriser par impact)
- Quel environnement ? (production, préproduction)
- Quelles conditions de test ? (réseau, appareil simulé)

**Recommandation** : Commencer par les 10-20 pages les plus visitées (souvent 80% du trafic).

**2. Préparer l'environnement de test**

Pour des mesures reproductibles :
```
- Navigateur : Chrome en navigation privée (pas d'extensions)
- Extensions : Toutes désactivées sauf outils de mesure
- Cache : Vidé entre chaque test
- Réseau : Connexion stable ou throttling défini (3G, 4G)
- Répétitions : Minimum 3 mesures, prendre la médiane
```

**3. Documenter le contexte**

Créer un document de référence avec :
- Version du site testée (commit, date de déploiement)
- Date et heure de l'audit
- Outils et versions utilisés
- Conditions de test (réseau, appareil)
- Évaluateur

#### Phase 2 : Mesure (1-3 jours selon le périmètre)

**Outils à utiliser :**

| Outil | Ce qu'il mesure | Gratuit | URL |
|-------|-----------------|---------|-----|
| EcoIndex.fr | Score environnemental | Oui | ecoindex.fr |
| GreenIT Analysis | EcoIndex + bonnes pratiques | Oui | Extension Chrome/Firefox |
| Lighthouse | Performance, accessibilité, SEO | Oui | Intégré Chrome |
| WebPageTest | Performance détaillée, waterfall | Oui | webpagetest.org |
| GTmetrix | Performance, recommandations | Freemium | gtmetrix.com |
| Website Carbon | Estimation CO2 | Oui | websitecarbon.com |
| WAVE | Accessibilité | Oui | wave.webaim.org |

**Processus de mesure pour chaque page :**

```
1. Ouvrir la page en navigation privée (Ctrl+Shift+N)
2. Vider le cache (Ctrl+Shift+Suppr → Vider les données)
3. Ouvrir les DevTools (F12)
4. Onglet Network : Cocher "Disable cache"
5. Recharger la page (Ctrl+Shift+R)
6. Lancer GreenIT Analysis
7. Lancer Lighthouse (Performance + Accessibilité + SEO)
8. Noter les résultats dans le tableau
9. Répéter 2 fois de plus, garder la médiane
10. Passer à la page suivante
```

**Tableau de collecte des données :**

| Page | URL | Poids | Requêtes | DOM | EcoIndex | LH Perf | LH A11y |
|------|-----|-------|----------|-----|----------|---------|---------|
| Accueil | / | | | | | | |
| Produits | /produits | | | | | | |
| Détail | /produit/1 | | | | | | |
| Contact | /contact | | | | | | |

#### Phase 3 : Analyse (2-3 jours)

**1. Calculer les scores globaux**

```
Score EcoIndex moyen = Σ (EcoIndex × Trafic) / Σ Trafic
```

Pondérer par le trafic pour refléter l'impact réel.

**2. Identifier les problèmes principaux**

Pour chaque page problématique :
- Analyser le waterfall (quelles ressources sont les plus lourdes ?)
- Lister les requêtes les plus lentes
- Identifier les erreurs JavaScript
- Repérer les ressources non utilisées
- Vérifier la configuration du cache
- Noter les problèmes d'accessibilité

**3. Catégoriser les problèmes**

| Catégorie | Exemples | Impact typique |
|-----------|----------|----------------|
| Images | Non compressées, mauvais format, pas de lazy loading | 40-60% du poids |
| JavaScript | Librairies inutilisées, code non minifié | 20-30% du poids |
| CSS | Code mort, pas de critical CSS | 5-10% du poids |
| Fonts | Trop de variantes, pas de subset | 5-15% du poids |
| Tiers | Analytics multiples, widgets, pixels | Variable |

#### Phase 4 : Priorisation et recommandations

**Matrice impact/effort :**

```
        IMPACT ÉLEVÉ
              │
    ┌─────────┼─────────┐
    │ QUICK   │ PROJETS │
    │ WINS    │ MAJEURS │
    │ Faire   │ Planifier│
    │ en 1er  │          │
────┼─────────┼─────────┼──── EFFORT
    │ À       │ À       │
    │ ÉVITER  │ DISCUTER│
    │         │          │
    └─────────┼─────────┘
              │
        IMPACT FAIBLE
```

**Quick wins typiques (fort impact, faible effort) :**
- Compression des images (WebP, optimisation)
- Activation du cache navigateur
- Activation de la compression Gzip/Brotli
- Lazy loading des images
- Suppression des scripts de tracking inutilisés

**Projets majeurs (fort impact, effort important) :**
- Migration vers un générateur de site statique
- Refonte de l'architecture frontend
- Changement d'hébergeur
- Réécriture du système de gestion des médias

### 2.4 Outils de mesure détaillés

#### GreenIT Analysis (Extension navigateur)

**Installation :**
- Chrome : Chrome Web Store → Rechercher "GreenIT Analysis"
- Firefox : Addons Mozilla → Rechercher "GreenIT Analysis"

**Utilisation :**
1. Naviguer vers la page à analyser
2. Ouvrir les DevTools (F12)
3. Onglet "GreenIT Analysis"
4. Cliquer sur "Lancer l'analyse"
5. Attendre quelques secondes

**Lecture des résultats :**

```
┌─────────────────────────────────────────────────────┐
│ EcoIndex: 67/100 (B)                                │
├─────────────────────────────────────────────────────┤
│ Empreinte environnementale :                        │
│ • 1.42 gCO2e par visite                             │
│ • 2.13 cl d'eau par visite                          │
├─────────────────────────────────────────────────────┤
│ Métriques :                                         │
│ • Taille de la page : 892 Ko                        │
│ • Nombre de requêtes : 34                           │
│ • Éléments DOM : 1247                               │
├─────────────────────────────────────────────────────┤
│ Bonnes pratiques : 67% (15/22)                      │
│ ✓ Compression activée                               │
│ ✓ Cache navigateur configuré                        │
│ ✗ Images non optimisées (3 images > 100Ko)         │
│ ✗ JavaScript externe trop lourd                     │
└─────────────────────────────────────────────────────┘
```

#### Lighthouse (Chrome DevTools)

**Accès :**
- DevTools (F12) → Onglet "Lighthouse"
- Ou en ligne de commande : `npx lighthouse https://example.com`

**Configuration recommandée :**
```
Categories :
☑ Performance
☑ Accessibility
☑ Best Practices
☑ SEO

Device : Mobile (plus contraignant et représentatif)
Throttling : Simulated throttling (recommended)
Clear storage : ☑ (pour simuler un premier accès)
```

**Métriques clés à surveiller :**

| Métrique | Description | Cible | Poids dans le score |
|----------|-------------|-------|---------------------|
| FCP | Premier contenu visible | < 1.8s | 10% |
| LCP | Plus grand élément visible | < 2.5s | 25% |
| TBT | Temps de blocage total | < 200ms | 30% |
| CLS | Décalage de mise en page | < 0.1 | 25% |
| SI | Vitesse de remplissage | < 3.4s | 10% |

#### WebPageTest

**URL :** https://www.webpagetest.org

**Configuration recommandée :**
```
Test Location : Paris, France (ou proche de vos utilisateurs)
Browser : Chrome
Connection : 4G (pour simuler mobile réaliste)
Number of Tests : 3 (pour obtenir une médiane fiable)
☑ First View and Repeat View
☑ Capture Video
```

**Éléments à analyser :**

1. **Waterfall chart** : Visualise le chargement de chaque ressource
   - Identifier les ressources bloquantes
   - Repérer les longues chaînes de dépendances
   - Voir l'impact du cache (Repeat View)

2. **Content Breakdown** : Répartition par type
   - Quel pourcentage représentent les images ?
   - Le JavaScript est-il disproportionné ?

3. **Domains** : Requêtes par domaine
   - Combien de domaines tiers ?
   - Lesquels sont les plus lents ?

### 2.5 Automatiser la mesure

#### Intégration CI/CD avec GitHub Actions

```yaml
# .github/workflows/eco-check.yml
name: Eco-conception Check

on:
  pull_request:
    branches: [main]
  push:
    branches: [main]

jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install dependencies
        run: npm ci

      - name: Build site
        run: npm run build

      - name: Start server
        run: npm run preview &

      - name: Wait for server
        run: npx wait-on http://localhost:4173

      - name: Run Lighthouse CI
        uses: treosh/lighthouse-ci-action@v10
        with:
          urls: |
            http://localhost:4173/
            http://localhost:4173/contact/
          configPath: ./lighthouserc.json
          uploadArtifacts: true

  ecoindex:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Python
        uses: actions/setup-python@v5
        with:
          python-version: '3.11'

      - name: Install EcoIndex CLI
        run: pip install ecoindex-cli

      - name: Build and serve
        run: |
          npm ci
          npm run build
          npm run preview &
          sleep 10

      - name: Run EcoIndex
        run: |
          ecoindex analyze \
            --url http://localhost:4173/ \
            --url http://localhost:4173/contact/ \
            --export json \
            --output ecoindex-results.json

      - name: Check EcoIndex threshold
        run: |
          MIN_SCORE=50

          for score in $(cat ecoindex-results.json | jq '.[].score'); do
            if (( $(echo "$score < $MIN_SCORE" | bc -l) )); then
              echo "::error::EcoIndex score too low: $score (min: $MIN_SCORE)"
              exit 1
            fi
          done

          echo "All pages pass EcoIndex threshold"

      - name: Upload results
        uses: actions/upload-artifact@v4
        with:
          name: ecoindex-results
          path: ecoindex-results.json
```

#### Configuration Lighthouse CI

```json
// lighthouserc.json
{
  "ci": {
    "collect": {
      "numberOfRuns": 3
    },
    "assert": {
      "assertions": {
        "categories:performance": ["error", {"minScore": 0.7}],
        "categories:accessibility": ["error", {"minScore": 0.9}],
        "resource-summary:document:size": ["error", {"maxNumericValue": 100000}],
        "resource-summary:total:size": ["error", {"maxNumericValue": 500000}],
        "resource-summary:third-party:count": ["warn", {"maxNumericValue": 5}]
      }
    }
  }
}
```

---

## 3. Conception UX/UI responsable

### 3.1 Sobriété fonctionnelle

La sobriété fonctionnelle est le **premier levier** de l'éco-conception. Elle consiste à questionner chaque fonctionnalité pour ne garder que l'essentiel.

#### Le syndrome du "feature creep"

Le feature creep (ou scope creep) est la tendance naturelle des projets à accumuler des fonctionnalités au fil du temps :

```
Version 1.0 : 3 features → Simple, rapide, maintenable
Version 2.0 : 8 features → Complexe, ralentit
Version 3.0 : 16 features → Ingérable, très lent
```

**Constat :** La plupart des applications souffrent de surcharge fonctionnelle. Des études montrent que **50 à 70% des fonctionnalités d'un logiciel sont rarement ou jamais utilisées**.

**Les coûts cachés de chaque fonctionnalité :**
- Développement initial
- Tests et QA
- Documentation
- Formation utilisateurs
- Maintenance continue
- Dette technique
- Impact environnemental

#### Méthode MoSCoW pour prioriser

| Catégorie | Description | Action |
|-----------|-------------|--------|
| **Must have** | Indispensable, le service ne fonctionne pas sans | Conserver |
| **Should have** | Important mais pas critique | Évaluer l'usage réel |
| **Could have** | Bonus, améliore l'expérience | Souvent à supprimer |
| **Won't have** | Hors périmètre pour cette version | Ne pas développer |

#### Analyser l'usage réel

Avant de concevoir ou de conserver une fonctionnalité, vérifiez son usage :

```sql
-- Exemple de requête pour analyser l'usage des fonctionnalités
SELECT
  feature_name,
  COUNT(DISTINCT user_id) as unique_users,
  COUNT(*) as total_uses,
  COUNT(*) / 30 as daily_average
FROM feature_usage
WHERE created_at > NOW() - INTERVAL '30 days'
GROUP BY feature_name
ORDER BY unique_users DESC;
```

**Questions à poser aux données :**
- Quel % des utilisateurs utilise cette fonctionnalité ?
- À quelle fréquence ?
- Sur quel parcours critique se trouve-t-elle ?
- Peut-on la simplifier ou la supprimer ?

**La règle des 80/20 :**
> 80% des utilisateurs n'utilisent que 20% des fonctionnalités. Concentrez vos efforts sur ces 20%.

### 3.2 Design minimaliste

#### Principes du design sobre

**1. Moins d'éléments visuels**

| Design classique | Design sobre |
|------------------|--------------|
| Hero image plein écran (1-2 Mo) | Titre clair sur fond uni |
| Slider avec 5 images en autoplay | Une seule image pertinente |
| Animations partout | Animations ciblées et utiles |
| Pop-up newsletter, chatbot, cookies... | Interventions minimales |
| 2,5 Mo, 87 requêtes | 200 Ko, 15 requêtes |

**2. Hiérarchie visuelle claire**

- Un seul élément principal par écran
- Espaces blancs généreux (pas besoin d'images de fond)
- Typographie expressive plutôt que décorations graphiques
- Couleurs utilisées avec parcimonie et intention

**3. Navigation intuitive**

- Menus simples et peu profonds (max 2-3 niveaux)
- Chemins de navigation évidents
- Recherche efficace plutôt que navigation exhaustive
- Fil d'Ariane quand nécessaire

#### Système de design sobre

Créer un système de design avec des contraintes volontaires :

```css
:root {
  /* Palette restreinte : 3 couleurs fonctionnelles + neutres */
  --color-primary: #2563eb;    /* Action principale */
  --color-secondary: #64748b;  /* Éléments secondaires */
  --color-accent: #10b981;     /* Validation, succès */
  --color-text: #1e293b;       /* Texte principal */
  --color-text-light: #64748b; /* Texte secondaire */
  --color-background: #ffffff;
  --color-surface: #f8fafc;

  /* Échelle typographique limitée (5 tailles max) */
  --text-xs: 0.75rem;    /* 12px - Mentions légales */
  --text-sm: 0.875rem;   /* 14px - Texte secondaire */
  --text-base: 1rem;     /* 16px - Texte courant */
  --text-lg: 1.25rem;    /* 20px - Sous-titres */
  --text-xl: 1.5rem;     /* 24px - Titres de section */
  --text-2xl: 2rem;      /* 32px - Titre principal */

  /* Espacements cohérents (système de 4px) */
  --space-1: 0.25rem;  /* 4px */
  --space-2: 0.5rem;   /* 8px */
  --space-3: 1rem;     /* 16px */
  --space-4: 1.5rem;   /* 24px */
  --space-5: 2rem;     /* 32px */
  --space-6: 3rem;     /* 48px */

  /* Une seule font family */
  --font-family: system-ui, -apple-system, sans-serif;
}
```

### 3.3 Parcours utilisateur optimisés

#### Réduire le nombre d'étapes

Chaque page supplémentaire = requêtes supplémentaires = impact supplémentaire.

**Exemple : Formulaire de contact**

```
AVANT : 3 pages                 APRÈS : 1 page
─────────────────              ─────────────────
Page 1: Choix sujet            Formulaire complet
        ↓                      avec validation inline
Page 2: Formulaire             et confirmation
        ↓                      sans rechargement
Page 3: Confirmation

3 chargements                  1 chargement
~1,5 Mo transférés             ~200 Ko transférés
```

#### Principes d'optimisation des parcours

**1. Tunnel de conversion e-commerce**

| Étape classique | Optimisation sobre |
|-----------------|-------------------|
| Panier sur page dédiée | Mini-panier en overlay |
| 4-5 étapes de checkout | Checkout one-page |
| Création compte obligatoire | Achat en guest |
| Récapitulatif sur nouvelle page | Récapitulatif inline |

**2. Formulaires efficaces**

- **Mono-colonne** : Plus rapides à remplir
- **Validation temps réel** : Évite les rechargements
- **Auto-complétion** : Réduit les erreurs
- **Champs conditionnels** : Ne montrer que ce qui est pertinent
- **Auto-save** : Évite la perte de données

### 3.4 Accessibilité et éco-conception

L'accessibilité et l'éco-conception sont naturellement complémentaires. Un site accessible est souvent plus sobre.

#### Synergies accessibilité / éco-conception

| Pratique accessible | Bénéfice éco-conception |
|--------------------|------------------------|
| Texte plutôt qu'images de texte | Réduction du poids |
| Structure HTML sémantique | DOM plus léger, meilleur parsing |
| Contrastes suffisants | Pas besoin d'effets graphiques complexes |
| Navigation clavier possible | Moins de JavaScript |
| Alternatives textuelles aux médias | Option de ne pas charger les médias |
| Pas de contenu en autoplay | Économie de bande passante |

#### Checklist accessibilité-sobriété

```
Structure
☐ HTML sémantique (header, nav, main, article, footer)
☐ Hiérarchie des titres respectée (h1 → h2 → h3, sans saut)
☐ Landmarks ARIA si nécessaire

Médias
☐ Images avec attribut alt pertinent (ou alt="" si décoratif)
☐ Vidéos avec sous-titres ou transcription
☐ Pas de lecture automatique

Contraste et lisibilité
☐ Contraste texte/fond ≥ 4.5:1 (AA) ou 7:1 (AAA)
☐ Taille de police ≥ 16px
☐ Interligne ≥ 1.5

Interaction
☐ Zone de clic ≥ 44×44px sur mobile
☐ Focus visible au clavier
☐ Pas de piège au clavier

Formulaires
☐ Labels explicites associés aux champs
☐ Messages d'erreur clairs et contextuels
☐ Indication des champs obligatoires
```

---

## 4. Optimisation des images et médias

Les images représentent en moyenne **50% du poids d'une page web**. C'est le premier levier d'optimisation et souvent le plus rapide à mettre en œuvre.

### 4.1 Diagnostic initial

Avant d'optimiser, analysez la situation actuelle :

```
DevTools (F12) → Network → Filter: Images → Sort by Size
```

**Pour chaque image, relevez :**
- Format actuel (JPEG, PNG, GIF, WebP, AVIF)
- Dimensions réelles (largeur × hauteur en pixels)
- Poids du fichier
- Dimensions d'affichage réelles
- Usage (décoration, contenu, logo)

**Exemple de diagnostic :**

| Image | Format | Dimensions fichier | Affiché à | Poids | Économie potentielle |
|-------|--------|-------------------|-----------|-------|---------------------|
| hero.jpg | JPEG | 2400×1600 | 1200×800 | 1,2 Mo | 80% (resize + WebP) |
| logo.png | PNG | 800×200 | 200×50 | 185 Ko | 95% (SVG) |
| photo-1.jpg | JPEG | 1920×1080 | 400×300 | 380 Ko | 70% (resize + WebP) |
| icon-1.png | PNG | 64×64 | 24×24 | 12 Ko | 90% (SVG sprite) |

### 4.2 Choisir le bon format

#### Comparatif des formats

| Format | Compression | Transparence | Animation | Support | Cas d'usage |
|--------|-------------|--------------|-----------|---------|-------------|
| **JPEG** | Avec perte | Non | Non | 100% | Photos (fallback) |
| **PNG** | Sans perte | Oui | Non | 100% | Graphiques avec transparence |
| **GIF** | Limité | Oui (1 bit) | Oui | 100% | À éviter (utiliser vidéo) |
| **WebP** | Les deux | Oui | Oui | 97% | **Recommandé pour tout** |
| **AVIF** | Avec perte | Oui | Oui | 92% | Meilleur mais support limité |
| **SVG** | Vectoriel | Oui | Oui | 100% | Icônes, logos, illustrations |

#### Arbre de décision

```
L'image est-elle un logo, une icône ou une illustration simple ?
├── OUI → Utiliser SVG
└── NON → L'image nécessite-t-elle de la transparence ?
    ├── OUI → Utiliser WebP (fallback PNG)
    └── NON → L'image est-elle une photo ?
        ├── OUI → Utiliser WebP (fallback JPEG)
        └── NON → L'image est-elle une animation ?
            ├── OUI → Utiliser une vidéo MP4/WebM
            └── NON → Utiliser WebP
```

### 4.3 Compression des images

#### Niveaux de qualité recommandés

| Type d'image | Qualité WebP | Qualité JPEG | Justification |
|--------------|--------------|--------------|---------------|
| Hero/Banner | 75-80 | 80-85 | Grande taille, détails visibles |
| Photos produit | 75-80 | 80-85 | Détails importants pour conversion |
| Vignettes | 60-70 | 70-75 | Petite taille affichée |
| Arrière-plans | 50-60 | 60-70 | Souvent flouté ou sous du texte |
| Avatars | 65-75 | 75-80 | Petite taille, visages reconnaissables |

#### Outils de compression

**En ligne (sans installation) :**
- **Squoosh** (squoosh.app) : Le meilleur, comparaison visuelle avant/après
- **TinyPNG** (tinypng.com) : Simple et efficace pour PNG/JPEG/WebP
- **SVGOMG** (jakearchibald.github.io/svgomg/) : Optimisation SVG

**Ligne de commande :**

```bash
# Convertir en WebP avec cwebp
cwebp -q 75 image.jpg -o image.webp

# Convertir en AVIF avec avifenc
avifenc --min 20 --max 40 image.jpg image.avif

# Optimiser JPEG avec jpegoptim
jpegoptim --max=80 --strip-all image.jpg

# Optimiser PNG avec pngquant
pngquant --quality=60-80 --output image-opt.png image.png

# Optimiser SVG avec svgo
svgo input.svg -o output.svg
```

**Script Node.js avec Sharp :**

```javascript
// scripts/optimize-images.js
const sharp = require('sharp');
const glob = require('glob');
const path = require('path');
const fs = require('fs');

const CONFIG = {
  quality: { webp: 75, avif: 50, jpeg: 80 },
  sizes: [400, 800, 1200, 1600]
};

async function optimizeImages() {
  const files = glob.sync('src/images/**/*.{jpg,jpeg,png}');

  for (const file of files) {
    const filename = path.basename(file, path.extname(file));
    const outputDir = path.dirname(file).replace('src/', 'dist/');

    // Créer le dossier de sortie
    fs.mkdirSync(outputDir, { recursive: true });

    for (const width of CONFIG.sizes) {
      // WebP
      await sharp(file)
        .resize(width)
        .webp({ quality: CONFIG.quality.webp })
        .toFile(`${outputDir}/${filename}-${width}.webp`);

      // AVIF
      await sharp(file)
        .resize(width)
        .avif({ quality: CONFIG.quality.avif })
        .toFile(`${outputDir}/${filename}-${width}.avif`);

      // JPEG fallback
      await sharp(file)
        .resize(width)
        .jpeg({ quality: CONFIG.quality.jpeg, mozjpeg: true })
        .toFile(`${outputDir}/${filename}-${width}.jpg`);
    }

    console.log(`✓ ${filename} optimized`);
  }
}

optimizeImages();
```

### 4.4 Images responsives

Servir la bonne taille d'image selon l'appareil évite de transférer des pixels inutiles.

#### Attribut srcset

```html
<img
  src="image-800.jpg"
  srcset="
    image-400.jpg 400w,
    image-800.jpg 800w,
    image-1200.jpg 1200w,
    image-1600.jpg 1600w
  "
  sizes="
    (max-width: 640px) 100vw,
    (max-width: 1024px) 50vw,
    800px
  "
  alt="Description de l'image"
  width="800"
  height="600"
  loading="lazy"
  decoding="async"
>
```

**Explication :**
- `srcset` : Liste les images disponibles avec leur largeur intrinsèque
- `sizes` : Indique la taille d'affichage selon la viewport
- Le navigateur calcule automatiquement quelle image télécharger
- `width` et `height` : Évitent le CLS (Cumulative Layout Shift)

#### Élément picture (formats multiples)

```html
<picture>
  <!-- AVIF : meilleure compression, support croissant -->
  <source
    type="image/avif"
    srcset="
      image-400.avif 400w,
      image-800.avif 800w,
      image-1200.avif 1200w
    "
    sizes="(max-width: 640px) 100vw, 50vw"
  >

  <!-- WebP : excellent support -->
  <source
    type="image/webp"
    srcset="
      image-400.webp 400w,
      image-800.webp 800w,
      image-1200.webp 1200w
    "
    sizes="(max-width: 640px) 100vw, 50vw"
  >

  <!-- JPEG : fallback universel -->
  <img
    src="image-800.jpg"
    srcset="
      image-400.jpg 400w,
      image-800.jpg 800w,
      image-1200.jpg 1200w
    "
    sizes="(max-width: 640px) 100vw, 50vw"
    alt="Description de l'image"
    width="800"
    height="600"
    loading="lazy"
    decoding="async"
  >
</picture>
```

### 4.5 Lazy loading

Le lazy loading diffère le chargement des images jusqu'à ce qu'elles soient proches de la zone visible.

#### Lazy loading natif (recommandé)

```html
<!-- Images below the fold : lazy -->
<img
  src="photo.jpg"
  alt="Description"
  width="800"
  height="600"
  loading="lazy"
  decoding="async"
>

<!-- Images above the fold : eager (ou omettre loading) -->
<img
  src="hero.jpg"
  alt="Hero"
  width="1200"
  height="600"
  loading="eager"
  fetchpriority="high"
>
```

**Règles importantes :**
- `loading="lazy"` sur toutes les images below the fold
- Ne PAS mettre lazy sur les images visibles immédiatement (LCP)
- Toujours spécifier `width` et `height` pour éviter le layout shift
- `decoding="async"` permet un décodage non-bloquant

### 4.6 Optimisation des vidéos

Les vidéos sont le contenu le plus lourd. Chaque décision compte.

#### Règle d'or : éviter si possible

Avant d'ajouter une vidéo, demandez-vous :
- Cette vidéo est-elle vraiment nécessaire ?
- Une image ou un GIF court suffirait-il ?
- Une animation CSS peut-elle remplacer ?
- Le texte peut-il suffire ?

#### Si la vidéo est nécessaire

**1. Pas d'autoplay (sauf cas spécifiques)**

```html
<!-- MAUVAIS : autoplay avec téléchargement automatique -->
<video autoplay src="video.mp4"></video>

<!-- ACCEPTABLE : autoplay muet pour background très court -->
<video autoplay muted loop playsinline poster="poster.jpg">
  <source src="bg.webm" type="video/webm">
  <source src="bg.mp4" type="video/mp4">
</video>

<!-- RECOMMANDÉ : lecture manuelle -->
<video controls preload="none" poster="thumbnail.jpg">
  <source src="video.webm" type="video/webm">
  <source src="video.mp4" type="video/mp4">
</video>
```

**2. Preload minimal**

```html
<!-- Ne pas précharger -->
<video preload="none" poster="poster.jpg" controls>
  <source src="video.mp4" type="video/mp4">
</video>

<!-- Précharger seulement les métadonnées -->
<video preload="metadata" poster="poster.jpg" controls>
  <source src="video.mp4" type="video/mp4">
</video>
```

**3. Compression vidéo**

```bash
# H.264 optimisé (compatible partout)
ffmpeg -i input.mp4 \
  -c:v libx264 -crf 28 -preset slow \
  -c:a aac -b:a 128k \
  -movflags +faststart \
  output.mp4

# VP9/WebM (meilleure compression)
ffmpeg -i input.mp4 \
  -c:v libvpx-vp9 -crf 35 -b:v 0 \
  -c:a libopus -b:a 96k \
  output.webm
```

#### Remplacer les GIF par des vidéos

Les GIF animés sont très inefficaces. Une vidéo peut être 80-95% plus légère.

```bash
# Convertir GIF en MP4
ffmpeg -i animation.gif \
  -movflags +faststart \
  -pix_fmt yuv420p \
  -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" \
  animation.mp4

# Convertir GIF en WebM
ffmpeg -i animation.gif \
  -c:v libvpx-vp9 -crf 40 -b:v 0 \
  animation.webm
```

```html
<!-- Remplacer un GIF par une vidéo -->
<video autoplay loop muted playsinline>
  <source src="animation.webm" type="video/webm">
  <source src="animation.mp4" type="video/mp4">
  <!-- Fallback pour navigateurs très anciens -->
  <img src="animation.gif" alt="Animation">
</video>
```

### 4.7 SVG et système d'icônes

#### Quand utiliser SVG

- Logos (scalables, nets à toute taille)
- Icônes (légers, stylables en CSS)
- Illustrations simples (graphiques, diagrammes)
- Tout ce qui peut être dessiné avec des formes géométriques

#### Optimisation SVG

```bash
# Avec SVGO
svgo input.svg -o output.svg --config svgo.config.js
```

```javascript
// svgo.config.js
module.exports = {
  plugins: [
    'removeDoctype',
    'removeXMLProcInst',
    'removeComments',
    'removeMetadata',
    'removeTitle',
    'removeDesc',
    'removeUselessDefs',
    'removeEditorsNSData',
    'removeEmptyAttrs',
    'removeHiddenElems',
    'removeEmptyContainers',
    'cleanupEnableBackground',
    'convertStyleToAttrs',
    'convertColors',
    'convertPathData',
    'convertTransform',
    'removeUnknownsAndDefaults',
    'removeNonInheritableGroupAttrs',
    'removeUselessStrokeAndFill',
    'removeUnusedNS',
    'cleanupNumericValues',
    'moveGroupAttrsToElems',
    'collapseGroups',
    'mergePaths',
  ]
};
```

#### Système d'icônes optimal

**Option 1 : SVG inline (pour 1-5 icônes)**

```html
<svg width="24" height="24" viewBox="0 0 24 24"
     fill="none" stroke="currentColor" stroke-width="2">
  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
  <polyline points="9 22 9 12 15 12 15 22"/>
</svg>
```

**Option 2 : Sprite SVG (pour beaucoup d'icônes)**

```html
<!-- icons.svg (chargé une fois, mis en cache) -->
<svg xmlns="http://www.w3.org/2000/svg" style="display:none">
  <symbol id="icon-home" viewBox="0 0 24 24">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </symbol>
  <symbol id="icon-user" viewBox="0 0 24 24">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </symbol>
  <!-- ... autres icônes -->
</svg>

<!-- Utilisation -->
<svg class="icon" aria-hidden="true">
  <use href="/icons.svg#icon-home"/>
</svg>
```

```css
.icon {
  width: 1.5rem;
  height: 1.5rem;
  stroke: currentColor;
  fill: none;
}
```

**À éviter : Icon fonts**

Les polices d'icônes (Font Awesome, etc.) chargent souvent des centaines d'icônes inutilisées. Préférez toujours les SVG.

---

## 5. Optimisation du code frontend

### 5.1 HTML sémantique et léger

#### Structure HTML optimale

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Titre de la page | Site</title>
  <meta name="description" content="Description concise de la page">

  <!-- Preconnect aux domaines critiques -->
  <link rel="preconnect" href="https://fonts.googleapis.com">

  <!-- CSS critique inline -->
  <style>
    /* Critical CSS : ce qui est nécessaire pour l'above the fold */
  </style>

  <!-- CSS non critique en différé -->
  <link rel="preload" href="/css/main.css" as="style"
        onload="this.onload=null;this.rel='stylesheet'">
  <noscript><link rel="stylesheet" href="/css/main.css"></noscript>
</head>
<body>
  <a href="#main-content" class="skip-link">Aller au contenu</a>

  <header>
    <nav aria-label="Navigation principale">
      <!-- Menu de navigation -->
    </nav>
  </header>

  <main id="main-content">
    <article>
      <h1>Titre principal (un seul h1 par page)</h1>
      <!-- Contenu principal -->
    </article>
  </main>

  <footer>
    <!-- Pied de page -->
  </footer>

  <!-- JavaScript en fin de body avec defer -->
  <script src="/js/main.js" defer></script>
</body>
</html>
```

#### Réduire la taille du DOM

Chaque élément DOM consomme de la mémoire et ralentit les manipulations JavaScript.

**Objectifs :**
- < 800 éléments DOM (idéal)
- < 1500 éléments DOM (acceptable)
- Profondeur maximale : 15 niveaux

**Techniques de réduction :**

```html
<!-- AVANT : "div-itis" (abus de divs) -->
<div class="container">
  <div class="wrapper">
    <div class="inner">
      <div class="content">
        <div class="text-wrapper">
          <span class="text">Texte</span>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- APRÈS : structure minimale -->
<div class="container">
  <p>Texte</p>
</div>
```

```html
<!-- AVANT : wrappers inutiles -->
<ul class="products-wrapper">
  <li class="product-item-wrapper">
    <div class="product-card-container">
      <div class="product-image-wrapper">
        <img src="..." alt="...">
      </div>
      <div class="product-info-wrapper">
        <h3 class="product-title-wrapper">
          <span class="product-title">Produit</span>
        </h3>
      </div>
    </div>
  </li>
</ul>

<!-- APRÈS : structure plate -->
<ul class="products">
  <li class="product">
    <img src="..." alt="...">
    <h3>Produit</h3>
  </li>
</ul>
```

### 5.2 CSS performant

#### Principes de CSS sobre

**1. Utiliser les propriétés modernes**

```css
/* AVANT : 4 propriétés */
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

/* APRÈS : 2 propriétés */
.center {
  display: grid;
  place-items: center;
}
```

**2. Éviter les sélecteurs complexes**

```css
/* MAUVAIS : sélecteur très spécifique (lent à évaluer) */
body div.container ul.navigation li.item a.link:hover span.text { }

/* BON : classe directe (rapide) */
.nav-link:hover .text { }
```

**3. Propriétés raccourcies**

```css
/* AVANT : 4 déclarations */
.element {
  margin-top: 1rem;
  margin-right: 2rem;
  margin-bottom: 1rem;
  margin-left: 2rem;
}

/* APRÈS : 1 déclaration */
.element {
  margin: 1rem 2rem;
}
```

#### Critical CSS

Le CSS critique est le CSS nécessaire pour afficher le contenu visible immédiatement (above the fold).

```html
<head>
  <!-- CSS critique inline (< 14 Ko idéalement) -->
  <style>
    /* Reset minimal */
    *, *::before, *::after { box-sizing: border-box; }
    body { margin: 0; font-family: system-ui, sans-serif; line-height: 1.5; }

    /* Header */
    .header { display: flex; justify-content: space-between; padding: 1rem; }

    /* Hero (si above the fold) */
    .hero { padding: 3rem 1rem; text-align: center; }
    .hero h1 { font-size: 2.5rem; margin: 0 0 1rem; }
  </style>

  <!-- CSS complet chargé de façon non-bloquante -->
  <link rel="preload" href="/css/main.css" as="style"
        onload="this.onload=null;this.rel='stylesheet'">
  <noscript><link rel="stylesheet" href="/css/main.css"></noscript>
</head>
```

#### Purger le CSS inutilisé

Les frameworks CSS incluent des milliers de classes. PurgeCSS supprime celles non utilisées.

**Configuration PurgeCSS avec PostCSS :**

```javascript
// postcss.config.js
module.exports = {
  plugins: [
    require('@fullhuman/postcss-purgecss')({
      content: [
        './src/**/*.html',
        './src/**/*.js',
        './src/**/*.vue',
        './src/**/*.jsx',
      ],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
      safelist: {
        standard: [/^is-/, /^has-/, /^js-/],
        deep: [/^modal/, /^tooltip/],
      }
    }),
    require('cssnano')({
      preset: ['default', {
        discardComments: { removeAll: true },
      }]
    })
  ]
};
```

**Résultats typiques :**

| Framework | Taille originale | Après purge | Réduction |
|-----------|-----------------|-------------|-----------|
| Tailwind CSS | 3,5 Mo | 10-30 Ko | 99% |
| Bootstrap 5 | 230 Ko | 20-50 Ko | 75-90% |
| Bulma | 200 Ko | 15-40 Ko | 80-92% |

### 5.3 JavaScript sobre

#### Le coût du JavaScript

Le JavaScript a un coût triple :
1. **Téléchargement** : Transfert réseau
2. **Parsing** : Analyse du code par le navigateur
3. **Exécution** : Utilisation du CPU

Sur un appareil mobile milieu de gamme, 1 Mo de JavaScript peut prendre 3-4 secondes à traiter.

#### Techniques de réduction

**1. Tree shaking (imports sélectifs)**

```javascript
// MAUVAIS : importe tout lodash (~70 Ko)
import _ from 'lodash';
const result = _.get(obj, 'path.to.value');

// BON : importe seulement get (~2 Ko)
import get from 'lodash/get';
const result = get(obj, 'path.to.value');

// ENCORE MIEUX : vanilla JS (0 Ko)
const result = obj?.path?.to?.value;
```

**2. Code splitting (chargement à la demande)**

```javascript
// Chargement immédiat (dans le bundle principal)
import HeavyComponent from './HeavyComponent';

// Chargement dynamique (bundle séparé, chargé quand nécessaire)
const HeavyComponent = () => import('./HeavyComponent');

// Avec React.lazy
const HeavyComponent = React.lazy(() => import('./HeavyComponent'));

// Utilisation avec Suspense
<Suspense fallback={<Loading />}>
  <HeavyComponent />
</Suspense>
```

**3. Remplacer les librairies lourdes**

| Librairie lourde | Alternative légère | Économie |
|------------------|-------------------|----------|
| Moment.js (290 Ko) | date-fns (13 Ko sélectif) | 95%+ |
| Moment.js | Temporal API (natif, futur) | 100% |
| Lodash (70 Ko) | Vanilla JS ES6+ | 100% |
| jQuery (90 Ko) | Vanilla JS | 100% |
| Axios (13 Ko) | fetch natif | 100% |
| Chart.js (200 Ko) | uPlot (35 Ko) | 82% |

**4. Vanilla JS moderne**

```javascript
// jQuery (90 Ko de dépendance)
$('.btn').on('click', function() {
  $(this).addClass('active');
  $.ajax({ url: '/api/data', success: handleData });
});

// Vanilla JS (0 Ko de dépendance)
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.add('active');
    fetch('/api/data')
      .then(res => res.json())
      .then(handleData);
  });
});
```

#### Optimisation du chargement

```html
<!-- Script critique : defer (exécuté après le parsing HTML) -->
<script src="/js/main.js" defer></script>

<!-- Script non critique : async (téléchargé en parallèle, exécuté dès que prêt) -->
<script src="/js/analytics.js" async></script>

<!-- Précharger le JS critique -->
<link rel="preload" href="/js/main.js" as="script">

<!-- Module type (defer par défaut) -->
<script type="module" src="/js/app.js"></script>
```

### 5.4 Frameworks et alternatives légères

#### Coût des frameworks

| Framework | Taille (gzip) | Temps de parsing (mobile) |
|-----------|---------------|---------------------------|
| React 18 + ReactDOM | ~45 Ko | ~150ms |
| Vue 3 | ~34 Ko | ~100ms |
| Angular 17 | ~90 Ko | ~300ms |
| Svelte | ~2 Ko (runtime) | ~10ms |
| Preact | ~4 Ko | ~15ms |
| Alpine.js | ~15 Ko | ~50ms |
| Vanilla JS | 0 Ko | 0ms |

#### Quand utiliser un framework ?

```
Complexité de l'application
       │
       │  Site statique/        Application         Application
       │  Blog/Vitrine          interactive         complexe
       │                        (e-commerce)        (SaaS)
       ▼
  ─────┼───────────────────┼───────────────────┼───────────────
       │                   │                   │
       │  Hugo, 11ty       │  Astro, Preact    │  React, Vue
       │  ou HTML statique │  Alpine.js        │  avec prudence
       │                   │                   │
       │  0 JS client      │  JS minimal       │  Bundle optimisé
```

#### Alternatives recommandées

**Pour sites avec peu d'interactivité :**
- **Générateurs statiques** : Hugo, 11ty, Astro
- **Zéro JavaScript** quand possible
- **Vanilla JS** pour les interactions simples

**Pour applications interactives :**
- **Preact** : Compatible React, 4 Ko
- **Alpine.js** : Interactivité déclarative, 15 Ko
- **Svelte** : Compile vers vanilla JS, runtime minimal

---

## 6. Optimisation backend et serveur

### 6.1 Architecture sobre

#### Principes fondamentaux

**1. Calculer moins**
- Mettre en cache les résultats coûteux
- Éviter les calculs redondants
- Optimiser les algorithmes critiques

**2. Stocker moins**
- Ne conserver que les données nécessaires
- Compresser les données archivées
- Purger régulièrement

**3. Transférer moins**
- Paginer les résultats
- Permettre le filtrage côté serveur
- Compresser les réponses

#### Static Site Generation (SSG)

Pour la plupart des sites, le SSG est l'architecture la plus sobre :

```
BUILD TIME                         RUNTIME
┌──────────────┐                  ┌──────────────┐
│   Sources    │                  │     CDN      │
│  (Markdown,  │    Build         │  (HTML, CSS, │
│   Data)      │ ─────────────►   │   JS, Images)│
└──────────────┘                  └──────────────┘
                                         │
       Pas de serveur                    │
       d'application !                   ▼
                                  ┌──────────────┐
                                  │ Utilisateurs │
                                  └──────────────┘
```

**Avantages du SSG :**
- Pas de serveur d'application → économie d'énergie
- CDN proche de l'utilisateur → moins de latence
- HTML pré-généré → pas de calcul par requête
- Sécurité renforcée → pas de base de données exposée

**Outils recommandés :**
- Hugo (Go, très rapide)
- 11ty (JavaScript, flexible)
- Astro (JavaScript, composants partiellement hydratés)

### 6.2 Stratégies de cache

Le cache est le levier le plus puissant pour réduire la charge serveur.

#### Cache navigateur (HTTP Cache)

```
Configuration par type de ressource :

┌────────────────────┬───────────────────────┬─────────────────────┐
│ Type de ressource  │ Cache-Control         │ Raison              │
├────────────────────┼───────────────────────┼─────────────────────┤
│ HTML               │ no-cache              │ Vérifier à chaque   │
│                    │                       │ fois (rapide si     │
│                    │                       │ 304 Not Modified)   │
├────────────────────┼───────────────────────┼─────────────────────┤
│ CSS/JS (hashés)    │ max-age=31536000,     │ Hash change si      │
│ ex: main.a1b2c3.js │ immutable             │ contenu modifié     │
├────────────────────┼───────────────────────┼─────────────────────┤
│ Images             │ max-age=31536000      │ Rarement modifiées  │
├────────────────────┼───────────────────────┼─────────────────────┤
│ Fonts              │ max-age=31536000,     │ Ne changent jamais  │
│                    │ immutable             │                     │
├────────────────────┼───────────────────────┼─────────────────────┤
│ API dynamique      │ no-store              │ Temps réel          │
├────────────────────┼───────────────────────┼─────────────────────┤
│ API semi-statique  │ max-age=300,          │ Données changeant   │
│                    │ stale-while-revalidate│ peu fréquemment     │
│                    │ =3600                 │                     │
└────────────────────┴───────────────────────┴─────────────────────┘
```

**Configuration Nginx :**

```nginx
# Cache assets statiques
location ~* \.(css|js)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
    add_header Vary "Accept-Encoding";
}

location ~* \.(jpg|jpeg|png|gif|webp|avif|svg|ico)$ {
    expires 1y;
    add_header Cache-Control "public";
}

location ~* \.(woff|woff2|ttf|eot)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}

# HTML : toujours vérifier
location ~* \.html$ {
    add_header Cache-Control "no-cache";
}
```

#### Cache applicatif

```python
# Python avec cache mémoire LRU
from functools import lru_cache
from typing import Optional

@lru_cache(maxsize=1000)
def get_product_details(product_id: int) -> Optional[dict]:
    """Récupère les détails d'un produit (mis en cache)."""
    return db.query("SELECT * FROM products WHERE id = %s", product_id)

# Invalidation si nécessaire
def update_product(product_id: int, data: dict):
    db.update("UPDATE products SET ... WHERE id = %s", product_id)
    get_product_details.cache_clear()  # Invalide tout le cache
    # Ou plus finement avec un cache externe (Redis)
```

```javascript
// Node.js avec Redis
const Redis = require('ioredis');
const redis = new Redis();

async function getCachedData(key, fetchFn, ttl = 3600) {
  // Essayer le cache
  const cached = await redis.get(key);
  if (cached) {
    return JSON.parse(cached);
  }

  // Sinon, récupérer et mettre en cache
  const data = await fetchFn();
  await redis.setex(key, ttl, JSON.stringify(data));
  return data;
}

// Utilisation
const products = await getCachedData(
  'products:featured',
  () => db.query('SELECT * FROM products WHERE featured = true'),
  300  // 5 minutes
);
```

### 6.3 Compression

#### Gzip vs Brotli

| Algorithme | Taux de compression | Vitesse | Support |
|------------|-------------------|---------|---------|
| Gzip | Bon | Rapide | 100% |
| Brotli | Excellent (+15-20%) | Plus lent | 97% |

**Recommandation** : Utiliser Brotli en priorité avec fallback Gzip.

**Configuration Nginx :**

```nginx
# Gzip
gzip on;
gzip_vary on;
gzip_min_length 1000;
gzip_comp_level 6;
gzip_types
    text/plain
    text/css
    text/xml
    text/javascript
    application/json
    application/javascript
    application/xml
    application/xml+rss
    image/svg+xml;

# Brotli (si module installé)
brotli on;
brotli_comp_level 6;
brotli_types
    text/plain
    text/css
    text/xml
    text/javascript
    application/json
    application/javascript
    application/xml
    image/svg+xml;
```

### 6.4 Optimisation base de données

#### Requêtes efficaces

```sql
-- MAUVAIS : SELECT *
SELECT * FROM products;

-- BON : Colonnes nécessaires uniquement
SELECT id, name, price, image_url FROM products;

-- MAUVAIS : Pas de limite
SELECT * FROM products WHERE category_id = 5;

-- BON : Pagination
SELECT id, name, price
FROM products
WHERE category_id = 5
ORDER BY created_at DESC
LIMIT 20 OFFSET 0;
```

#### Indexation

```sql
-- Identifier les requêtes lentes
EXPLAIN ANALYZE
SELECT * FROM products WHERE category_id = 5 AND price < 100;

-- Créer un index approprié
CREATE INDEX idx_products_category_price
ON products(category_id, price);

-- Vérifier l'utilisation de l'index
EXPLAIN ANALYZE
SELECT * FROM products WHERE category_id = 5 AND price < 100;
-- Devrait afficher "Index Scan" au lieu de "Seq Scan"
```

#### Éviter le problème N+1

```python
# MAUVAIS : N+1 queries (1 requête + N requêtes)
orders = Order.objects.all()  # 1 requête
for order in orders:
    print(order.customer.name)  # N requêtes !

# BON : Eager loading (1 ou 2 requêtes)
orders = Order.objects.select_related('customer').all()
for order in orders:
    print(order.customer.name)  # Déjà chargé !
```

### 6.5 APIs efficaces

#### Pagination obligatoire

```javascript
// API REST avec pagination
app.get('/api/products', async (req, res) => {
  const page = Math.max(1, parseInt(req.query.page) || 1);
  const limit = Math.min(parseInt(req.query.limit) || 20, 100);
  const offset = (page - 1) * limit;

  const [products, countResult] = await Promise.all([
    db.query('SELECT id, name, price FROM products LIMIT ? OFFSET ?', [limit, offset]),
    db.query('SELECT COUNT(*) as total FROM products')
  ]);

  res.json({
    data: products,
    pagination: {
      page,
      limit,
      total: countResult[0].total,
      pages: Math.ceil(countResult[0].total / limit),
      hasMore: page * limit < countResult[0].total
    }
  });
});
```

#### Filtrage côté serveur

```javascript
// Permettre le filtrage pour réduire les données transférées
app.get('/api/products', async (req, res) => {
  let query = 'SELECT id, name, price FROM products WHERE 1=1';
  const params = [];

  // Filtres
  if (req.query.category) {
    query += ' AND category_id = ?';
    params.push(req.query.category);
  }

  if (req.query.min_price) {
    query += ' AND price >= ?';
    params.push(parseFloat(req.query.min_price));
  }

  if (req.query.max_price) {
    query += ' AND price <= ?';
    params.push(parseFloat(req.query.max_price));
  }

  // Sparse fieldsets (sélection des champs)
  if (req.query.fields) {
    const allowedFields = ['id', 'name', 'price', 'description', 'image'];
    const requestedFields = req.query.fields.split(',')
      .filter(f => allowedFields.includes(f));
    if (requestedFields.length > 0) {
      query = query.replace('id, name, price', requestedFields.join(', '));
    }
  }

  // Pagination...
});
```

---

## 7. Hébergement responsable

### 7.1 Critères de choix

#### Matrice d'évaluation d'un hébergeur

| Critère | Poids | Questions à poser |
|---------|-------|-------------------|
| **Énergie** | 30% | Quelle source d'électricité ? % renouvelable ? PPA signé ? |
| **Efficience** | 25% | Quel PUE ? Quelle technologie de refroidissement ? |
| **Localisation** | 20% | Où sont les serveurs ? Proximité des utilisateurs ? |
| **Certifications** | 15% | ISO 14001 ? ISO 50001 ? Autres labels ? |
| **Transparence** | 10% | Rapports publics ? Données vérifiables ? |

#### Indicateurs data center

**PUE (Power Usage Effectiveness)**
```
PUE = Énergie totale du data center / Énergie des équipements IT

PUE = 1.0 : Parfait (théorique)
PUE < 1.2 : Excellent (hyperscalers, data centers récents)
PUE < 1.4 : Bon
PUE < 1.6 : Moyen
PUE > 1.6 : À améliorer
```

**CUE (Carbon Usage Effectiveness)**
```
CUE = kg CO2 émis / kWh d'énergie IT

CUE = 0 : 100% énergie renouvelable
CUE < 0.2 : Excellent
CUE > 0.5 : À améliorer
```

### 7.2 Hébergeurs recommandés

#### France / Europe

| Hébergeur | Énergie | PUE | Points forts |
|-----------|---------|-----|--------------|
| **Infomaniak** | 100% renouvelable | 1.1 | Suisse, très engagé, certifié ISO 14001/50001 |
| **Scaleway** | 100% renouvelable | 1.2 | Français, refroidissement adiabatique |
| **OVHcloud** | 80%+ renouvelable | 1.1-1.3 | Watercooling propriétaire, grande capacité |
| **o2switch** | Renouvelable | - | Hébergeur mutualisé français |
| **PlanetHoster** | 100% renouvelable | - | Compensé carbone |

#### International (cloud)

| Fournisseur | Objectif énergie | PUE | Outils carbone |
|-------------|-----------------|-----|----------------|
| **Google Cloud** | 100% renouvelable (atteint) | 1.1 | Carbon Footprint dashboard |
| **Microsoft Azure** | 100% d'ici 2025 | 1.18 | Sustainability Calculator |
| **AWS** | 100% d'ici 2025 | ~1.2 | Customer Carbon Footprint |

### 7.3 Impact du mix électrique

Le mix électrique local influence fortement l'empreinte carbone.

| Pays/Région | gCO2e/kWh | Note |
|-------------|-----------|------|
| Islande | 0 | Géothermie |
| Suède | 13 | Hydro + nucléaire |
| France | 56 | Nucléaire + hydro |
| Canada (Québec) | 2 | Hydro |
| Norvège | 8 | Hydro |
| Allemagne | 350 | Charbon + renouvelable |
| USA (moyenne) | 380 | Variable selon état |
| Pologne | 650 | Charbon |
| Australie | 650 | Charbon |

**Recommandation** : Privilégier les régions à électricité bas carbone (Scandinavie, France, Québec) pour vos serveurs.

### 7.4 Configuration serveur optimale

#### Nginx optimisé pour l'éco-conception

```nginx
# /etc/nginx/nginx.conf

user nginx;
worker_processes auto;
worker_rlimit_nofile 65535;

events {
    worker_connections 4096;
    use epoll;
    multi_accept on;
}

http {
    # Performance de base
    sendfile on;
    tcp_nopush on;
    tcp_nodelay on;
    keepalive_timeout 65;
    types_hash_max_size 2048;

    # Taille des buffers
    client_body_buffer_size 10K;
    client_header_buffer_size 1k;
    client_max_body_size 8m;

    # Compression Gzip
    gzip on;
    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_min_length 1000;
    gzip_types
        text/plain
        text/css
        text/xml
        application/json
        application/javascript
        application/xml
        image/svg+xml;

    # Compression Brotli (si module disponible)
    brotli on;
    brotli_comp_level 6;
    brotli_types
        text/plain
        text/css
        text/xml
        application/json
        application/javascript
        application/xml
        image/svg+xml;

    # Cache de fichiers ouverts
    open_file_cache max=10000 inactive=20s;
    open_file_cache_valid 30s;
    open_file_cache_min_uses 2;
    open_file_cache_errors on;

    # Headers de sécurité
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;

    server {
        listen 80;
        listen [::]:80;
        server_name example.com;
        return 301 https://$server_name$request_uri;
    }

    server {
        listen 443 ssl http2;
        listen [::]:443 ssl http2;
        server_name example.com;

        root /var/www/html;
        index index.html;

        # SSL optimisé
        ssl_certificate /etc/ssl/certs/example.crt;
        ssl_certificate_key /etc/ssl/private/example.key;
        ssl_session_cache shared:SSL:10m;
        ssl_session_timeout 1d;
        ssl_protocols TLSv1.2 TLSv1.3;
        ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256;
        ssl_prefer_server_ciphers off;

        # Cache pour assets statiques
        location ~* \.(css|js)$ {
            expires 1y;
            add_header Cache-Control "public, immutable";
            access_log off;
        }

        location ~* \.(jpg|jpeg|png|gif|webp|avif|svg|ico)$ {
            expires 1y;
            add_header Cache-Control "public";
            access_log off;
        }

        location ~* \.(woff|woff2|ttf|eot)$ {
            expires 1y;
            add_header Cache-Control "public, immutable";
            access_log off;
        }

        # Fallback
        location / {
            try_files $uri $uri/ =404;
        }
    }
}
```

---

## 8. Cas pratiques et retours d'expérience

### 8.1 Méthodologie de refonte éco-conçue

#### Planning type d'une refonte

| Phase | Durée | Activités |
|-------|-------|-----------|
| **1. Audit** | 1-2 semaines | Mesure initiale, identification des problèmes |
| **2. Quick wins** | 2-4 semaines | Optimisations rapides (images, cache, compression) |
| **3. Optimisations profondes** | 1-3 mois | Refonte CSS/JS, architecture, hébergement |
| **4. Intégration continue** | Ongoing | Tests automatisés, formation, suivi |

#### Exemple de résultats

**Cas : Site vitrine d'entreprise**

| Métrique | Avant | Après | Amélioration |
|----------|-------|-------|--------------|
| Poids de page | 3,2 Mo | 380 Ko | -88% |
| Requêtes | 87 | 18 | -79% |
| EcoIndex | E (25) | A (82) | +57 points |
| Temps de chargement | 4,2s | 0,9s | -78% |
| Score Lighthouse | 34 | 96 | +62 points |

**Actions réalisées :**
1. Remplacement du slider par une image unique
2. Conversion des images en WebP
3. Mise en place du lazy loading
4. Remplacement de jQuery par vanilla JS
5. Suppression de 4 trackers sur 6
6. Configuration du cache navigateur

### 8.2 Erreurs courantes à éviter

| Erreur | Problème | Solution |
|--------|----------|----------|
| Optimiser sans mesurer | Pas de baseline, impossible de prouver les gains | Toujours mesurer avant/après |
| Se focaliser sur les détails | Perdre du temps sur des micro-optimisations | Prioriser par impact |
| Ignorer le mobile | Test uniquement sur desktop fibre | Tester sur mobile 3G/4G |
| Négliger le cache | Ressources rechargées à chaque visite | Configurer Cache-Control |
| Tracker tout | Scripts analytics lourds et multiples | Un seul outil, configuré sobrement |
| Oublier l'accessibilité | Site rapide mais inutilisable pour certains | Tester avec WAVE, clavier |

---

## 9. Intégration dans les projets

### 9.1 Éco-conception en méthode agile

#### Definition of Done éco-responsable

Ajouter ces critères à votre DoD :

```
Une User Story est "Done" quand :
☐ Les critères d'acceptance sont remplis
☐ Les tests passent
☐ Le code est reviewé
☐ La documentation est à jour
+ ☐ L'EcoIndex de la page n'a pas régressé
+ ☐ Le poids de page reste < 500 Ko
+ ☐ Les images sont optimisées (WebP, lazy loading)
+ ☐ Aucune dépendance > 50 Ko ajoutée sans validation
+ ☐ L'accessibilité est vérifiée (WAVE, clavier)
```

#### Checklist par phase

**Sprint Planning**
```
Pour chaque User Story :
☐ Impact environnemental évalué
☐ Critères d'éco-conception définis
☐ Alternatives sobres considérées
```

**Code Review**
```
☐ Pas de code mort ajouté
☐ Imports sélectifs (tree shaking)
☐ Images optimisées si ajoutées
☐ Pas de nouvelle dépendance lourde
```

**Retrospective**
```
Questions à aborder :
- Avons-nous amélioré nos métriques ce sprint ?
- Avons-nous introduit de la dette environnementale ?
- Quelles optimisations prioriser pour le prochain sprint ?
```

---

## 10. Référentiels et conformité

### 10.1 RGESN (Référentiel Général d'Écoconception)

Le RGESN est le référentiel officiel français avec **79 critères** répartis en 8 thématiques :

1. **Stratégie** (10 critères) : Besoins, objectifs, indicateurs
2. **Spécifications** (12 critères) : Fonctionnalités, accessibilité
3. **Architecture** (11 critères) : Infrastructure, modularité
4. **UX/UI** (13 critères) : Parcours, design, médias
5. **Contenus** (6 critères) : Textes, images, vidéos
6. **Frontend** (13 critères) : HTML, CSS, JavaScript
7. **Backend** (8 critères) : Code serveur, cache
8. **Hébergement** (6 critères) : Serveurs, énergie

**Obligations légales (Loi REEN) :**
- Obligatoire pour les services publics depuis 2024
- Déclaration environnementale à publier
- Objectifs de conformité progressifs

### 10.2 GR491 (Les 491 bonnes pratiques)

Le référentiel le plus complet, publié par GreenIT.fr :
- 491 bonnes pratiques détaillées
- Organisé par phase du cycle de vie
- Scoring d'impact pour chaque pratique

### 10.3 Conformité simplifiée

**Niveau Bronze (minimum) :** 50% des critères RGESN
- Fonctionnalités essentielles uniquement
- Images optimisées
- Cache configuré

**Niveau Argent (recommandé) :** 75% des critères
- Architecture sobre
- JavaScript minimal
- Hébergement responsable

**Niveau Or (excellence) :** 90%+ des critères
- Toutes les optimisations appliquées
- Monitoring continu
- Formation des équipes

---

## Conclusion

L'éco-conception web n'est pas une contrainte, c'est une opportunité de créer des services numériques **meilleurs** : plus rapides, plus accessibles, moins coûteux et plus durables.

### Les 10 commandements de l'éco-concepteur web

1. **Tu questionneras le besoin** avant de développer
2. **Tu mesureras l'impact** avant et après chaque action
3. **Tu optimiseras les images** systématiquement
4. **Tu éviteras le JavaScript superflu**
5. **Tu configureras le cache** correctement
6. **Tu compresseras les transferts**
7. **Tu choisiras un hébergeur responsable**
8. **Tu penseras accessibilité** dès la conception
9. **Tu documenteras et formeras** tes équipes
10. **Tu amélioreras continuellement**

### Ressources pour aller plus loin

**Communautés :**
- GreenIT.fr (France)
- ClimateAction.tech (International)
- Green Software Foundation

**Outils :**
- EcoIndex / GreenIT Analysis
- Lighthouse
- Website Carbon

**Formations :**
- La Fresque du Numérique
- MOOC INRIA Numérique Responsable
- Certificat INR

---

*Ce guide est maintenu à jour régulièrement. Les technologies et bonnes pratiques évoluent : consultez les sources originales pour les informations les plus récentes.*
