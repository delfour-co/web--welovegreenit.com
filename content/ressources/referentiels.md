---
title: "Référentiels et Normes du Numérique Responsable"
date: 2025-01-27
draft: false
weight: 4
---

Les référentiels et normes structurent les démarches Green IT et permettent d'harmoniser les pratiques. Ce guide exhaustif présente chaque référentiel en détail, avec des analyses approfondies, des guides d'implémentation et des correspondances entre standards.

---

## Vue d'ensemble

### L'écosystème des référentiels

Le paysage des référentiels Green IT s'est considérablement enrichi ces dernières années, reflétant la maturité croissante du domaine. Ces standards couvrent différents périmètres et objectifs :

```
┌─────────────────────────────────────────────────────────────────┐
│                    RÉFÉRENTIELS GREEN IT                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ÉCO-CONCEPTION         ORGANISATION          INFRASTRUCTURE   │
│  (Projets)              (Entreprise)          (Data centers)   │
│                                                                 │
│  ┌─────────────┐       ┌─────────────┐       ┌─────────────┐   │
│  │ RGESN       │       │ Label NR    │       │ EN 50600    │   │
│  │ GR491       │       │ ISO 14001   │       │ ISO 30134   │   │
│  │ 115 BP      │       │ B Corp      │       │ Green Grid  │   │
│  │ W3C SWDG    │       │ EcoVadis    │       │ PUE/WUE/CUE │   │
│  └─────────────┘       └─────────────┘       └─────────────┘   │
│                                                                 │
│  MESURE CARBONE         RÉGLEMENTATION        MÉTHODOLOGIE     │
│  (Impact)               (Conformité)          (Évaluation)     │
│                                                                 │
│  ┌─────────────┐       ┌─────────────┐       ┌─────────────┐   │
│  │ SCI (GSF)   │       │ Loi REEN    │       │ ACV         │   │
│  │ GHG Protocol│       │ CSRD        │       │ (ISO 14040) │   │
│  │ ISO 14064   │       │ Taxonomie UE│       │ Bilan       │   │
│  │ CDP         │       │ AGEC        │       │ Carbone     │   │
│  └─────────────┘       └─────────────┘       └─────────────┘   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Classification des référentiels

| Type | Objectif | Exemples | Portée |
|------|----------|----------|--------|
| **Technique** | Bonnes pratiques de conception | RGESN, GR491, 115 BP | Projets |
| **Organisationnel** | Management et gouvernance | Label NR, ISO 14001 | Entreprise |
| **Mesure** | Quantification de l'impact | SCI, GHG Protocol | Reporting |
| **Réglementaire** | Conformité légale | REEN, CSRD | Obligation |
| **Infrastructure** | Data centers et cloud | EN 50600, Green Grid | Exploitation |

### Matrice de choix rapide

| Vous êtes... | Référentiel principal | Référentiels complémentaires |
|--------------|----------------------|------------------------------|
| Développeur web | RGESN | GR491, 115 BP, W3C SWDG |
| Chef de projet IT | RGESN + GR491 | SCI, ISO 14001 |
| DSI/Responsable IT | Label NR | ISO 14001, REEN |
| Responsable RSE | CSRD + GHG Protocol | Label NR, CDP |
| Exploitant data center | EN 50600 | ISO 50001, Green Grid |
| Cloud architect | SCI | GHG Protocol, FinOps |

---

## Référentiels d'éco-conception

### RGESN - Référentiel Général d'Écoconception des Services Numériques

**Le référentiel officiel français pour l'éco-conception des services numériques.**

#### Présentation

Le RGESN est le référentiel officiel publié par l'État français pour guider l'éco-conception des services numériques. Fruit d'une collaboration entre la DINUM, l'ADEME, l'Arcep et l'INRIA, il constitue la référence pour les services publics et une base solide pour le secteur privé.

#### Contexte et objectifs

- **Origine** : Mission interministérielle numérique écoresponsable
- **Première version** : 2021
- **Dernière version** : 2024 (v2)
- **Statut légal** : Obligatoire pour les services publics (loi REEN)
- **Objectif** : Réduire l'impact environnemental des services numériques

#### Structure du référentiel

Le RGESN v2 comprend **79 critères** répartis en **8 thématiques** :

| Thématique | Nombre de critères | Focus |
|------------|-------------------|-------|
| **1. Stratégie** | 9 | Gouvernance, objectifs, évaluation |
| **2. Spécifications** | 11 | Expression du besoin, conception fonctionnelle |
| **3. Architecture** | 10 | Choix techniques, infrastructure |
| **4. UX/UI** | 11 | Design, parcours utilisateur |
| **5. Contenus** | 9 | Médias, textes, optimisation |
| **6. Frontend** | 12 | HTML, CSS, JavaScript |
| **7. Backend** | 10 | Serveur, base de données, API |
| **8. Hébergement** | 7 | Serveurs, infrastructure, énergie |

#### Critères détaillés par thématique

**Thématique 1 : Stratégie**

| ID | Critère | Niveau |
|----|---------|--------|
| 1.1 | Le service numérique a-t-il défini ses objectifs en matière d'écoconception ? | Essentiel |
| 1.2 | Le service numérique a-t-il réalisé un audit d'écoconception ? | Essentiel |
| 1.3 | Le service numérique utilise-t-il des indicateurs de mesure quantifiés ? | Essentiel |
| 1.4 | Le service numérique a-t-il mis en place une démarche d'amélioration continue ? | Recommandé |
| 1.5 | Le service numérique s'appuie-t-il sur un référentiel d'écoconception ? | Essentiel |
| 1.6 | Le service numérique publie-t-il une déclaration environnementale ? | Recommandé |
| 1.7 | Les parties prenantes sont-elles sensibilisées à l'écoconception ? | Recommandé |
| 1.8 | L'écoconception est-elle intégrée dans la gestion de projet ? | Essentiel |
| 1.9 | Le service numérique favorise-t-il la sobriété fonctionnelle ? | Essentiel |

**Thématique 2 : Spécifications**

| ID | Critère | Niveau |
|----|---------|--------|
| 2.1 | Le service numérique questionne-t-il l'existence des fonctionnalités ? | Essentiel |
| 2.2 | Le service numérique évite-t-il les fonctionnalités non utilisées ? | Essentiel |
| 2.3 | Le service numérique limite-t-il la quantité de données traitées ? | Essentiel |
| 2.4 | Le service numérique prévoit-t-il la fin de vie des données ? | Recommandé |
| 2.5 | Le service numérique est-il compatible avec les anciens équipements ? | Essentiel |
| ... | ... | ... |

**Thématique 6 : Frontend (exemples)**

| ID | Critère | Niveau |
|----|---------|--------|
| 6.1 | Le service numérique utilise-t-il des formats d'images adaptés ? | Essentiel |
| 6.2 | Le service numérique optimise-t-il les images ? | Essentiel |
| 6.3 | Le service numérique utilise-t-il le lazy loading ? | Recommandé |
| 6.4 | Le service numérique minimise-t-il les fichiers CSS et JS ? | Essentiel |
| 6.5 | Le service numérique évite-t-il les bibliothèques non utilisées ? | Essentiel |
| 6.6 | Le service numérique utilise-t-il la mise en cache ? | Essentiel |
| ... | ... | ... |

#### Niveaux de conformité

| Niveau | Description | Cible |
|--------|-------------|-------|
| **A** | Critères essentiels respectés | Minimum requis |
| **AA** | Niveau A + critères recommandés | Objectif standard |
| **AAA** | Tous les critères respectés | Excellence |

#### Guide d'implémentation

**Phase 1 : Diagnostic initial**

```
1. Identifier le périmètre du service
2. Réaliser un audit initial (checklist RGESN)
3. Mesurer les indicateurs de base (EcoIndex, poids, requêtes)
4. Identifier les écarts avec le niveau visé
5. Prioriser les actions correctives
```

**Phase 2 : Plan d'action**

```
1. Définir les objectifs (niveau A, AA ou AAA)
2. Planifier les corrections par priorité
3. Allouer les ressources (temps, budget, compétences)
4. Intégrer dans le backlog produit
5. Définir les jalons de contrôle
```

**Phase 3 : Mise en conformité**

```
1. Appliquer les corrections techniques
2. Mettre à jour la documentation
3. Former les équipes
4. Mesurer les progrès
5. Ajuster le plan si nécessaire
```

**Phase 4 : Maintien**

```
1. Intégrer les critères dans les processus
2. Automatiser les contrôles (CI/CD)
3. Auditer régulièrement
4. Publier les résultats
5. Améliorer continuellement
```

#### Outils de conformité

| Outil | Type | Usage |
|-------|------|-------|
| **NumEcoDiag** | En ligne | Auto-évaluation RGESN |
| **EcoIndex** | Extension/API | Mesure technique |
| **Checklist RGESN** | Document | Audit manuel |
| **Déclaration environnementale** | Template | Communication |

#### Liens et ressources

- **Site officiel** : [ecoresponsable.numerique.gouv.fr](https://ecoresponsable.numerique.gouv.fr/publications/referentiel-general-ecoconception/)
- **Guide méthodologique** : [Guide RGESN](https://ecoresponsable.numerique.gouv.fr)
- **Template déclaration** : Disponible sur le site
- **Communauté** : GitHub interministériel

---

### GR491 - Guide de Référence de Conception Responsable

**Le référentiel le plus complet avec 491 règles de conception responsable.**

#### Présentation

Le GR491 (Guide de Référence 491) est le référentiel le plus exhaustif pour l'éco-conception des services numériques. Développé par le collectif GreenIT.fr et l'Institut du Sustainable IT (ISIT), il propose 491 règles couvrant l'ensemble du cycle de vie d'un service numérique.

#### Historique et évolution

- **Origine** : Collectif GreenIT.fr (2012)
- **Évolution** : Des "115 bonnes pratiques" au GR491
- **Version actuelle** : GR491 (2023)
- **Maintenance** : ISIT-Europe

#### Structure du référentiel

Le GR491 est organisé en **8 familles** de règles :

| Famille | Nombre de règles | Périmètre |
|---------|-----------------|-----------|
| **Stratégie** | 45 | Gouvernance, pilotage |
| **Spécifications** | 68 | Besoins, conception fonctionnelle |
| **Architecture** | 72 | Choix techniques |
| **UX/UI Design** | 64 | Interface, expérience |
| **Contenus** | 51 | Médias, rédaction |
| **Frontend** | 78 | HTML, CSS, JS |
| **Backend** | 62 | Serveur, BDD, API |
| **Hébergement** | 51 | Infrastructure, exploitation |

#### Exemples de règles détaillées

**Famille Frontend**

| ID | Règle | Impact | Effort |
|----|-------|--------|--------|
| FE-001 | Utiliser le format WebP ou AVIF pour les images | Fort | Faible |
| FE-012 | Implémenter le lazy loading des images | Moyen | Faible |
| FE-023 | Minifier et compresser les fichiers CSS | Moyen | Faible |
| FE-034 | Éviter les animations non essentielles | Moyen | Faible |
| FE-045 | Limiter le nombre de polices web | Moyen | Moyen |
| FE-056 | Utiliser les sprites CSS ou SVG inline | Faible | Moyen |
| FE-067 | Implémenter le code splitting JavaScript | Fort | Moyen |
| FE-078 | Éviter les bibliothèques non utilisées | Fort | Moyen |

**Famille Backend**

| ID | Règle | Impact | Effort |
|----|-------|--------|--------|
| BE-001 | Optimiser les requêtes SQL | Fort | Moyen |
| BE-012 | Mettre en cache les données fréquemment accédées | Fort | Moyen |
| BE-023 | Paginer les résultats des API | Moyen | Faible |
| BE-034 | Compresser les réponses (gzip/brotli) | Moyen | Faible |
| BE-045 | Utiliser des indexes de base de données | Fort | Moyen |
| BE-056 | Éviter les N+1 queries | Fort | Moyen |
| BE-062 | Archiver les données anciennes | Moyen | Élevé |

#### Système de scoring

Le GR491 propose un système de scoring pour évaluer la maturité :

| Niveau | Score | Interprétation |
|--------|-------|----------------|
| **E** | 0-20% | Non conforme |
| **D** | 20-40% | Insuffisant |
| **C** | 40-60% | Moyen |
| **B** | 60-80% | Bon |
| **A** | 80-100% | Excellent |

#### Matrice impact/effort

```
            EFFORT
            Faible    Moyen     Élevé
         ┌─────────┬─────────┬─────────┐
  Fort   │ QUICK   │ MAJOR   │ FULL    │
IMPACT   │ WINS    │ PROJECT │ PROJECT │
         ├─────────┼─────────┼─────────┤
  Moyen  │ FILL    │ WORTH   │ NICE TO │
         │ INS     │ DOING   │ HAVE    │
         ├─────────┼─────────┼─────────┤
  Faible │ LOW     │ MAYBE   │ AVOID   │
         │ HANGING │ LATER   │         │
         └─────────┴─────────┴─────────┘
```

#### Liens et ressources

- **Site officiel** : [gr491.isit-europe.org](https://gr491.isit-europe.org)
- **Outil d'évaluation** : En ligne sur le site
- **Formation** : GreenIT.fr et partenaires
- **Licence** : Creative Commons

---

### 115 Bonnes Pratiques d'Éco-conception Web

**Le classique de l'éco-conception web par GreenIT.fr.**

#### Présentation

Les "115 bonnes pratiques" sont le premier référentiel d'éco-conception web en France. Publié par Frédéric Bordage (GreenIT.fr), il a posé les bases de l'éco-conception et reste une référence accessible.

#### Structure

Les 115 bonnes pratiques sont organisées par domaine :

| Domaine | Nombre de pratiques |
|---------|---------------------|
| Conception | 25 |
| Templating | 15 |
| CSS | 12 |
| JavaScript | 18 |
| Images | 14 |
| Côté serveur | 16 |
| Hébergement | 15 |

#### Exemples par domaine

**Conception**
1. Éliminer les fonctionnalités non essentielles
2. Quantifier précisément le besoin
3. Optimiser le parcours utilisateur
4. Préférer la pagination au scroll infini
5. Limiter le nombre de fichiers téléchargés

**Images**
1. Utiliser le format adapté (WebP, AVIF)
2. Compresser les images
3. Utiliser des sprites CSS
4. Proposer un téléchargement alternatif pour les vidéos
5. Implémenter le lazy loading

**JavaScript**
1. Éviter les bibliothèques inutilisées
2. Minifier les fichiers JS
3. Utiliser le code splitting
4. Éviter les animations coûteuses
5. Préférer les API natives aux polyfills

#### Liens

- **Livre** : "Éco-conception web : les 115 bonnes pratiques" (Eyrolles)
- **Checklist** : [checklists.opquast.com](https://checklists.opquast.com)

---

### W3C SWDG - Sustainable Web Design Guidelines

**Les recommandations internationales du W3C pour un web durable.**

#### Présentation

Le W3C Sustainable Web Design Community Group travaille sur des recommandations pour réduire l'impact environnemental du web. Ces guidelines complètent les standards web existants avec une perspective environnementale.

#### Principes directeurs

1. **Réduire les transferts de données**
2. **Minimiser les requêtes**
3. **Optimiser les médias**
4. **Favoriser l'accessibilité**
5. **Prolonger la durée de vie du code**

#### Recommandations principales

| Domaine | Recommandation | Lien standard W3C |
|---------|----------------|-------------------|
| Performance | Minimiser les requêtes HTTP | Resource Hints |
| Images | Utiliser les formats modernes | WebP, AVIF |
| Vidéo | Lazy loading des médias | Loading attribute |
| Accessibilité | WCAG 2.1+ | WCAG |
| Caching | Service Workers | Service Workers |

#### Liens

- **Community Group** : [w3.org/community/sustyweb](https://www.w3.org/community/sustyweb/)
- **Draft Guidelines** : Disponibles sur le site

---

## Référentiels organisationnels

### Label Numérique Responsable (INR)

**Le label de référence pour les organisations engagées dans le numérique responsable.**

#### Présentation

Le Label Numérique Responsable, délivré par l'Institut du Numérique Responsable (INR), est le label de référence en France pour les organisations souhaitant structurer et faire reconnaître leur démarche de numérique responsable.

#### Niveaux de labellisation

| Niveau | Exigences | Durée validité |
|--------|-----------|----------------|
| **Niveau 1 - Engagement** | Auto-évaluation + plan d'action | 2 ans |
| **Niveau 2 - Progression** | Audit externe + résultats mesurables | 2 ans |
| **Niveau 3 - Exemplarité** | Excellence sur l'ensemble des critères | 2 ans |

#### Axes d'évaluation

Le référentiel couvre **5 axes** :

| Axe | Thématiques | Poids |
|-----|-------------|-------|
| **1. Stratégie et gouvernance** | Vision, engagement direction, politique NR | 20% |
| **2. Formation et sensibilisation** | Compétences, culture NR | 20% |
| **3. Conception responsable** | Éco-conception, accessibilité | 25% |
| **4. Achats responsables** | Matériel, prestataires | 20% |
| **5. Fin de vie** | Reconditionnement, recyclage | 15% |

#### Critères détaillés par axe

**Axe 1 : Stratégie et gouvernance**

| Critère | Description | Niveau 1 | Niveau 2 | Niveau 3 |
|---------|-------------|----------|----------|----------|
| 1.1 | Politique NR formalisée | Engagement | Document officiel | Publié |
| 1.2 | Responsable NR désigné | Identifié | Temps dédié | Équipe dédiée |
| 1.3 | Budget NR alloué | À définir | Alloué | Récurrent |
| 1.4 | Indicateurs de suivi | Identifiés | Suivis | Publiés |
| 1.5 | Parties prenantes impliquées | Identifiées | Consultées | Co-construction |

**Axe 3 : Conception responsable**

| Critère | Description | Niveau 1 | Niveau 2 | Niveau 3 |
|---------|-------------|----------|----------|----------|
| 3.1 | Référentiel d'éco-conception | Choisi | Appliqué | Audité |
| 3.2 | Mesure des services | Outils identifiés | Mesures régulières | Amélioration continue |
| 3.3 | Accessibilité | RGAA connu | Partiellement conforme | RGAA AA minimum |
| 3.4 | Sobriété fonctionnelle | Prise en compte | Process établi | Systématique |

#### Processus de labellisation

```
┌─────────────────────────────────────────────────────────────────┐
│                    PARCOURS DE LABELLISATION                    │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  1. CANDIDATURE          2. ÉVALUATION        3. AUDIT         │
│                                                                 │
│  ┌─────────────┐        ┌─────────────┐      ┌─────────────┐   │
│  │ Dossier     │───────>│ Auto-       │─────>│ Audit       │   │
│  │ candidature │        │ évaluation  │      │ externe     │   │
│  │ + engagement│        │ référentiel │      │ (N2/N3)     │   │
│  └─────────────┘        └─────────────┘      └─────────────┘   │
│        │                      │                     │           │
│        │                      │                     │           │
│        v                      v                     v           │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                    4. COMITÉ DE LABELLISATION           │   │
│  │                    Décision d'attribution               │   │
│  └─────────────────────────────────────────────────────────┘   │
│                              │                                  │
│                              v                                  │
│  ┌─────────────┐        ┌─────────────┐      ┌─────────────┐   │
│  │ Attribution │        │ Amélioration│      │ Renouvelle- │   │
│  │ du label    │───────>│ continue    │─────>│ ment        │   │
│  │             │        │ (2 ans)     │      │             │   │
│  └─────────────┘        └─────────────┘      └─────────────┘   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

#### Coûts et délais

| Élément | Coût indicatif | Délai |
|---------|----------------|-------|
| Adhésion INR | 500-5000€/an | - |
| Accompagnement (optionnel) | 3000-15000€ | 3-6 mois |
| Audit niveau 2 | 3000-8000€ | 2-4 semaines |
| Audit niveau 3 | 5000-12000€ | 3-6 semaines |
| Label (validité 2 ans) | Inclus dans adhésion | - |

#### Organisations labellisées

Plus de 100 organisations labellisées à ce jour :
- Administrations publiques
- Grandes entreprises
- PME/ETI
- ESN et agences
- Collectivités territoriales

#### Liens

- **Site officiel** : [institutnr.org](https://institutnr.org)
- **Référentiel** : Disponible pour les adhérents
- **Liste des labellisés** : [label-nr.fr](https://label-nr.fr)

---

### Référentiel B Corp

**La certification globale pour les entreprises à impact positif.**

#### Présentation

B Corp est une certification internationale pour les entreprises qui utilisent leur activité comme force positive pour la société et l'environnement. Le volet environnemental inclut des critères sur le numérique.

#### Structure de l'évaluation

Le B Impact Assessment couvre 5 domaines :

| Domaine | Points possibles | Focus IT |
|---------|-----------------|----------|
| Gouvernance | ~25 | Politiques éthiques, transparence |
| Collaborateurs | ~50 | Formation, conditions de travail |
| Communauté | ~50 | Impact local, diversité |
| Environnement | ~50 | Green IT, énergie, déchets |
| Clients | ~25 | Impact produits/services |

**Minimum requis** : 80 points sur 200 pour être certifié.

#### Critères environnementaux IT

| Critère | Points | Niveau |
|---------|--------|--------|
| Politique environnementale IT | 0-3 | Base |
| Mesure empreinte carbone IT | 0-5 | Intermédiaire |
| Objectifs de réduction | 0-5 | Intermédiaire |
| Achats IT responsables | 0-3 | Base |
| Fin de vie des équipements | 0-3 | Base |
| Hébergement vert | 0-3 | Base |
| Éco-conception | 0-5 | Avancé |

#### Processus de certification

1. **Évaluation en ligne** : B Impact Assessment gratuit
2. **Score minimum** : 80 points requis
3. **Vérification** : Audit documentaire par B Lab
4. **Recertification** : Tous les 3 ans

#### Coûts

| Chiffre d'affaires | Frais annuels |
|-------------------|---------------|
| < 150k€ | 500€ |
| 150k€ - 2M€ | 1 000€ |
| 2M€ - 10M€ | 2 500€ |
| 10M€ - 50M€ | 10 000€ |
| > 50M€ | 25 000€+ |

#### Liens

- **Site officiel** : [bcorporation.fr](https://www.bcorporation.fr)
- **Évaluation gratuite** : [bimpactassessment.net](https://www.bimpactassessment.net)

---

### EcoVadis

**La plateforme de notation RSE pour les chaînes d'approvisionnement.**

#### Présentation

EcoVadis est une plateforme de notation RSE utilisée par de nombreuses grandes entreprises pour évaluer la performance environnementale et sociale de leurs fournisseurs, y compris sur les aspects IT.

#### Structure de l'évaluation

| Thème | Poids | Critères IT |
|-------|-------|-------------|
| Environnement | 25% | Green IT, énergie, déchets |
| Social | 25% | Conditions de travail |
| Éthique | 25% | Corruption, données |
| Achats responsables | 25% | Supply chain |

#### Niveaux de médaille

| Médaille | Percentile | Score indicatif |
|----------|------------|-----------------|
| Platine | Top 1% | 73+ |
| Or | Top 5% | 65-72 |
| Argent | Top 25% | 45-64 |
| Bronze | Top 50% | 25-44 |

#### Liens

- **Site** : [ecovadis.com](https://www.ecovadis.com)

---

## Standards de mesure carbone

### SCI - Software Carbon Intensity (Green Software Foundation)

**Le standard international pour mesurer l'intensité carbone des logiciels.**

#### Présentation

Le Software Carbon Intensity (SCI) est une spécification développée par la Green Software Foundation pour calculer l'intensité carbone des applications logicielles. C'est le standard de référence pour le "green software".

#### La formule SCI

```
SCI = ((E × I) + M) / R
```

Où :
- **E** = Énergie consommée (kWh)
- **I** = Intensité carbone du réseau (gCO2/kWh)
- **M** = Carbone intrinsèque (embodied carbon)
- **R** = Unité fonctionnelle (requêtes, utilisateurs, transactions)

#### Composantes détaillées

**E - Énergie (kWh)**

| Composante | Méthode de mesure | Outils |
|------------|-------------------|--------|
| CPU | Profiling, estimation | CodeCarbon, Kepler |
| Mémoire | Mesure ou estimation | Idem |
| GPU | Si applicable | nvidia-smi, Kepler |
| Réseau | Transferts × facteur | CO2.js |
| Stockage | Taille × facteur I/O | Estimation |

**I - Intensité carbone (gCO2/kWh)**

| Approche | Description | Sources |
|----------|-------------|---------|
| Location-based | Moyenne régionale | Electricity Maps |
| Market-based | Fournisseur spécifique | Contrats, PPA |
| Marginal | Ajout/retrait marginal | WattTime |

Exemples d'intensité carbone :

| Région | gCO2/kWh (2024) |
|--------|-----------------|
| France | ~50 |
| Allemagne | ~350 |
| Pologne | ~700 |
| Suède | ~20 |
| USA (moyenne) | ~400 |
| Inde | ~700 |

**M - Carbone intrinsèque (gCO2)**

| Équipement | Carbone intrinsèque | Durée de vie |
|------------|--------------------| -------------|
| Serveur | 1 000-3 000 kg CO2 | 4-6 ans |
| PC portable | 200-400 kg CO2 | 4-5 ans |
| Smartphone | 50-80 kg CO2 | 2-4 ans |

Formule d'amortissement :
```
M_service = (M_équipement × Usage%) / Durée_vie
```

**R - Unité fonctionnelle**

| Type d'application | Unités recommandées |
|-------------------|---------------------|
| API | Par requête |
| Site web | Par page vue |
| Application mobile | Par utilisateur actif |
| Batch | Par traitement |
| Base de données | Par transaction |

#### Exemple de calcul

```
Application web :
- E = 0.001 kWh par requête
- I = 400 gCO2/kWh (USA)
- M = 50 gCO2 par requête (amorti)
- R = 1 requête

SCI = ((0.001 × 400) + 50) / 1
SCI = 50.4 gCO2/requête
```

#### Bonnes pratiques

1. **Documenter les hypothèses** : Sources de données, périmètre
2. **Utiliser des données réelles** : Mesures > estimations
3. **Comparer de manière cohérente** : Même périmètre, même méthode
4. **Améliorer progressivement** : Réduire le SCI dans le temps

#### Outils compatibles

| Outil | Usage | SCI-ready |
|-------|-------|-----------|
| Cloud Carbon Footprint | Cloud providers | Oui |
| CodeCarbon | Python | Partiellement |
| Kepler | Kubernetes | Partiellement |
| CO2.js | Web/JS | Partiellement |

#### Liens

- **Spécification** : [sci.greensoftware.foundation](https://sci.greensoftware.foundation)
- **GitHub** : [github.com/Green-Software-Foundation](https://github.com/Green-Software-Foundation)
- **Formation** : Green Software for Practitioners

---

### GHG Protocol - ICT Sector Guidance

**Le protocole de référence pour le bilan carbone IT.**

#### Présentation

Le GHG Protocol est le standard mondial pour la comptabilité carbone. L'ICT Sector Guidance adapte ce protocole au secteur des technologies de l'information.

#### Les 3 scopes

```
┌─────────────────────────────────────────────────────────────────┐
│                        GHG PROTOCOL - IT                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  SCOPE 1              SCOPE 2               SCOPE 3             │
│  Émissions directes   Énergie achetée       Chaîne de valeur   │
│                                                                 │
│  ┌─────────────┐     ┌─────────────┐       ┌─────────────┐     │
│  │ • Groupes   │     │ • Électricité│      │ • Fabrication│    │
│  │   électrogènes│   │   data centers│     │   équipements│    │
│  │ • Fluides   │     │ • Électricité│      │ • Cloud/SaaS │    │
│  │   frigorigènes│   │   bureaux    │      │ • Usage client│   │
│  │ • Véhicules │     │ • Chaleur/   │      │ • Fin de vie │    │
│  │             │     │   froid      │      │ • Déplacements│   │
│  └─────────────┘     └─────────────┘       └─────────────┘     │
│                                                                 │
│  ~5% des émissions    ~15% des émissions   ~80% des émissions  │
│  IT typiques          IT typiques          IT typiques         │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

#### Scope 3 IT détaillé

| Catégorie | Inclut | Méthode de calcul |
|-----------|--------|-------------------|
| Achats | Fabrication équipements, services | ACV fournisseurs |
| Transport | Livraison matériel | Facteurs d'émission |
| Déchets | DEEE, recyclage | Facteurs ADEME |
| Déplacements | Télétravail, trajets | Enquête + facteurs |
| Cloud | Services cloud tiers | Données fournisseurs |
| Usage produits | Consommation client | Estimation |

#### Sources de données

| Type | Sources |
|------|---------|
| Facteurs d'émission | ADEME Base Carbone, DEFRA, EPA |
| Électricité | Electricity Maps, AIB, contrats |
| Équipements | ACV fabricants, Base Impacts |
| Cloud | Rapports providers (AWS/GCP/Azure) |

#### Liens

- **Site officiel** : [ghgprotocol.org](https://ghgprotocol.org)
- **ICT Guidance** : [ghgprotocol.org/guidance-built-ghg-protocol](https://ghgprotocol.org/guidance-built-ghg-protocol)

---

### CDP (Carbon Disclosure Project)

**La plateforme mondiale de reporting environnemental.**

#### Présentation

Le CDP est une organisation internationale qui gère une plateforme de reporting environnemental utilisée par des milliers d'entreprises. Le questionnaire inclut des sections spécifiques au numérique.

#### Questionnaire IT

| Section | Éléments demandés |
|---------|-------------------|
| Gouvernance | Politique climat IT, responsabilités |
| Risques | Risques climatiques sur l'IT |
| Stratégie | Objectifs de réduction |
| Émissions | Scope 1, 2, 3 IT |
| Actions | Projets de réduction |

#### Niveaux de notation

| Note | Signification |
|------|---------------|
| A | Leadership |
| A- | Leadership |
| B | Management |
| B- | Management |
| C | Awareness |
| C- | Awareness |
| D | Disclosure |
| D- | Disclosure |
| F | Non-réponse |

#### Liens

- **Site** : [cdp.net](https://www.cdp.net)

---

## Normes ISO applicables

### ISO 14001 - Système de Management Environnemental

**La norme de référence pour le management environnemental.**

#### Présentation

ISO 14001 spécifie les exigences pour un système de management environnemental (SME). Elle est applicable à tout type d'organisation, y compris les DSI et entreprises IT.

#### Structure (ISO 14001:2015)

| Chapitre | Contenu | Application IT |
|----------|---------|----------------|
| 4. Contexte | Parties prenantes, périmètre | Définir le périmètre IT |
| 5. Leadership | Engagement, politique | Politique Green IT |
| 6. Planification | Risques, objectifs | Plan d'action NR |
| 7. Support | Ressources, compétences | Formation équipes |
| 8. Réalisation | Maîtrise opérationnelle | Éco-conception, achats |
| 9. Évaluation | Surveillance, audit | Indicateurs, audits |
| 10. Amélioration | Correction, amélioration | Amélioration continue |

#### Exigences clés adaptées IT

| Exigence ISO | Application IT |
|--------------|----------------|
| Politique environnementale | Politique Green IT publiée |
| Aspects significatifs | Impacts IT identifiés (énergie, déchets, carbone) |
| Objectifs mesurables | KPIs Green IT (PUE, carbone, déchets) |
| Maîtrise opérationnelle | Procédures éco-conception, achats |
| Surveillance | Mesure et suivi des indicateurs |
| Audit interne | Audits Green IT réguliers |

#### Certification

| Élément | Détail |
|---------|--------|
| Organismes | AFNOR, Bureau Veritas, SGS, DNV... |
| Durée audit | 2-5 jours selon taille |
| Coût | 5 000-20 000€ selon taille |
| Validité | 3 ans (surveillance annuelle) |

#### Liens

- **Norme** : [iso.org/standard/60857.html](https://www.iso.org/standard/60857.html)
- **AFNOR** : [afnor.org](https://www.afnor.org)

---

### ISO 50001 - Système de Management de l'Énergie

**La norme pour optimiser la performance énergétique.**

#### Présentation

ISO 50001 spécifie les exigences pour établir, mettre en œuvre et améliorer un système de management de l'énergie. Particulièrement pertinente pour les data centers et grandes infrastructures IT.

#### Structure

| Chapitre | Contenu | Application IT |
|----------|---------|----------------|
| 4. Contexte | Besoins énergétiques | Cartographie conso IT |
| 5. Leadership | Politique énergétique | Objectifs PUE, efficacité |
| 6. Planification | Revue énergétique, IPÉ | Analyse consommation |
| 7. Support | Ressources, compétences | Expertise énergie |
| 8. Réalisation | Conception, achats | Spécifications efficacité |
| 9. Évaluation | Surveillance IPÉ | Monitoring énergie |
| 10. Amélioration | Optimisation continue | Actions d'efficacité |

#### IPÉ (Indicateurs de Performance Énergétique) IT

| IPÉ | Formule | Cible |
|-----|---------|-------|
| PUE | Total / IT load | < 1.4 |
| Conso/VM | kWh / VM | Minimiser |
| Conso/utilisateur | kWh / user | Minimiser |
| % renouvelable | ENR / Total | > 80% |

#### Liens

- **Norme** : [iso.org/standard/69426.html](https://www.iso.org/standard/69426.html)

---

### ISO 14040/14044 - Analyse du Cycle de Vie

**Les normes pour l'évaluation environnementale des produits et services.**

#### Présentation

ISO 14040 et 14044 définissent les principes et le cadre de l'Analyse du Cycle de Vie (ACV), méthode de référence pour évaluer les impacts environnementaux.

#### Structure de l'ACV

```
┌─────────────────────────────────────────────────────────────────┐
│                    CYCLE DE VIE NUMÉRIQUE                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  EXTRACTION          FABRICATION         DISTRIBUTION          │
│  ┌─────────────┐    ┌─────────────┐     ┌─────────────┐        │
│  │ Métaux rares│───>│ Composants  │────>│ Transport   │        │
│  │ Terres rares│    │ Assemblage  │     │ Logistique  │        │
│  │ Eau, énergie│    │             │     │             │        │
│  └─────────────┘    └─────────────┘     └─────────────┘        │
│        │                  │                   │                 │
│        v                  v                   v                 │
│  ┌─────────────────────────────────────────────────────┐       │
│  │                     UTILISATION                      │       │
│  │  • Consommation électrique équipements              │       │
│  │  • Consommation réseaux                             │       │
│  │  • Consommation data centers                        │       │
│  └─────────────────────────────────────────────────────┘       │
│                           │                                     │
│                           v                                     │
│  ┌─────────────────────────────────────────────────────┐       │
│  │                    FIN DE VIE                        │       │
│  │  • Collecte DEEE  • Recyclage  • Enfouissement      │       │
│  └─────────────────────────────────────────────────────┘       │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

#### Phases de l'ACV

| Phase | Contenu | Normes |
|-------|---------|--------|
| 1. Objectifs et champ | Périmètre, unité fonctionnelle | ISO 14040 §5 |
| 2. Inventaire | Flux entrants/sortants | ISO 14044 §4.3 |
| 3. Évaluation des impacts | Catégories d'impact | ISO 14044 §4.4 |
| 4. Interprétation | Conclusions, recommandations | ISO 14044 §4.5 |

#### Catégories d'impact IT

| Catégorie | Indicateur | Pertinence IT |
|-----------|------------|---------------|
| Changement climatique | kg CO2 eq | Très élevée |
| Épuisement ressources abiotiques | kg Sb eq | Élevée (métaux rares) |
| Acidification | kg SO2 eq | Moyenne |
| Eutrophisation | kg PO4 eq | Faible |
| Consommation d'eau | m³ | Moyenne (data centers) |
| Toxicité humaine | CTUh | Élevée (fabrication) |

#### Bases de données ACV

| Base | Éditeur | Contenu IT |
|------|---------|------------|
| Base Impacts ADEME | ADEME | Équipements, services FR |
| ecoinvent | ecoinvent | Mondial, détaillé |
| GaBi | Sphera | Composants électroniques |
| EF Database | Commission EU | PEF européen |

#### Outils ACV

| Outil | Type | Usage |
|-------|------|-------|
| OpenLCA | Open source | ACV générique |
| SimaPro | Commercial | ACV pro |
| GaBi | Commercial | ACV pro |
| Ecodesign Studio | SaaS | ACV simplifiée |

#### Liens

- **ISO 14040** : [iso.org/standard/37456.html](https://www.iso.org/standard/37456.html)
- **ISO 14044** : [iso.org/standard/38498.html](https://www.iso.org/standard/38498.html)

---

### ISO 14064 - Gaz à Effet de Serre

**Les normes pour quantifier et déclarer les émissions GES.**

#### Structure

| Partie | Contenu | Usage IT |
|--------|---------|----------|
| ISO 14064-1 | Inventaire GES organisation | Bilan carbone DSI |
| ISO 14064-2 | Projets de réduction GES | Projets Green IT |
| ISO 14064-3 | Vérification des déclarations | Audit tiers |

#### Liens

- **Site** : [iso.org](https://www.iso.org/standard/66453.html)

---

## Normes Data Centers

### EN 50600 - Data Centres

**La série de normes européennes pour les data centers.**

#### Présentation

EN 50600 est une série de normes européennes couvrant tous les aspects de la conception, de la construction et de l'exploitation des data centers.

#### Structure de la série

| Norme | Titre | Contenu |
|-------|-------|---------|
| EN 50600-1 | Concepts généraux | Définitions, classification |
| EN 50600-2-1 | Construction | Bâtiment, sécurité physique |
| EN 50600-2-2 | Distribution d'énergie | Alimentation électrique |
| EN 50600-2-3 | Contrôle environnemental | Refroidissement, climat |
| EN 50600-2-4 | Infrastructure télécom | Câblage, connectivité |
| EN 50600-2-5 | Systèmes de sécurité | Contrôle d'accès, vidéo |
| EN 50600-3-1 | Informations de gestion | Processus opérationnels |
| EN 50600-4-x | KPIs | Indicateurs de performance |

#### Classes de disponibilité

| Classe | Disponibilité | Redondance | Usage |
|--------|---------------|------------|-------|
| 1 | 99.671% | N | Non-critique |
| 2 | 99.741% | N+1 partiel | Bureau |
| 3 | 99.982% | N+1 | Production |
| 4 | 99.995% | 2N | Mission-critique |

#### KPIs EN 50600-4

| KPI | Norme | Formule | Cible |
|-----|-------|---------|-------|
| PUE | EN 50600-4-2 | Total / IT | < 1.4 |
| REF | EN 50600-4-3 | Renouvelable / Total | > 80% |
| ERE | EN 50600-4-4 | Reuse / Total | Maximiser |
| CER | EN 50600-4-5 | kgCO2 / kWh IT | < 0.3 |
| WUE | EN 50600-4-6 | Litres / kWh IT | < 1.0 |

#### Liens

- **CENELEC** : [cenelec.eu](https://www.cenelec.eu)
- **AFNOR** : Normes disponibles

---

### ISO/IEC 30134 - Data Centre KPIs

**Les normes internationales pour les indicateurs de performance des data centers.**

#### KPIs normalisés

| Norme | KPI | Description |
|-------|-----|-------------|
| ISO/IEC 30134-2 | PUE | Power Usage Effectiveness |
| ISO/IEC 30134-3 | REF | Renewable Energy Factor |
| ISO/IEC 30134-4 | ITEEsv | IT Equipment Energy Efficiency for servers |
| ISO/IEC 30134-5 | ITEEsv,network | Pour équipements réseau |
| ISO/IEC 30134-6 | ERE | Energy Reuse Effectiveness |
| ISO/IEC 30134-7 | CUE | Carbon Usage Effectiveness |
| ISO/IEC 30134-8 | WUE | Water Usage Effectiveness |
| ISO/IEC 30134-9 | GEC | Green Energy Coefficient |

#### PUE (Power Usage Effectiveness)

```
PUE = Énergie totale data center / Énergie équipements IT

           Énergie totale
           ┌─────────────────────────────────────┐
           │  ┌─────────────────────────────┐    │
           │  │    ÉQUIPEMENTS IT           │    │
           │  │    (serveurs, stockage,     │    │
           │  │     réseau)                 │    │
           │  └─────────────────────────────┘    │
           │                                     │
           │  + Refroidissement                  │
           │  + Distribution électrique          │
           │  + Éclairage                        │
           │  + Sécurité                         │
           │  + Autres                           │
           └─────────────────────────────────────┘
```

| PUE | Qualification | % énergie IT |
|-----|---------------|--------------|
| 3.0+ | Inefficace | < 33% |
| 2.0 | Standard ancien | 50% |
| 1.6 | Bon | 62% |
| 1.4 | Excellent | 71% |
| 1.2 | État de l'art | 83% |
| 1.1 | Exceptionnel | 91% |

#### WUE (Water Usage Effectiveness)

```
WUE = Litres d'eau consommés / kWh IT
```

| WUE | Qualification | Technologie |
|-----|---------------|-------------|
| > 2.0 | Élevé | Tours de refroidissement |
| 1.0-2.0 | Moyen | Refroidissement hybride |
| 0.5-1.0 | Bas | Free cooling + adiabatique |
| < 0.5 | Très bas | Free cooling air |

#### CUE (Carbon Usage Effectiveness)

```
CUE = kgCO2 émis / kWh IT
```

| CUE | Qualification | Mix énergétique |
|-----|---------------|-----------------|
| > 0.5 | Élevé | Mix carboné |
| 0.3-0.5 | Moyen | Mix européen |
| 0.1-0.3 | Bas | Renouvelable partiel |
| < 0.1 | Très bas | 100% renouvelable |

#### Liens

- **ISO** : [iso.org/standard/77692.html](https://www.iso.org/standard/77692.html)

---

### The Green Grid

**L'organisation de référence pour les métriques data center.**

#### Présentation

The Green Grid est une organisation internationale qui a développé les principales métriques de performance environnementale pour les data centers, dont le PUE.

#### Métriques développées

| Métrique | Formule | Objectif |
|----------|---------|----------|
| PUE | Total DC / IT | < 1.4 |
| DCiE | IT / Total DC × 100 | > 71% |
| CUE | CO2 / IT kWh | < 0.3 |
| WUE | Eau / IT kWh | < 1.0 |
| ERF | Réutilisation / Total | Maximiser |

#### Ressources

- **Site** : [thegreengrid.org](https://www.thegreengrid.org)
- **Bibliothèque** : White papers gratuits
- **Outils** : Calculateurs PUE

---

## Cadres réglementaires

### Loi REEN (France)

**La loi française pour réduire l'empreinte environnementale du numérique.**

#### Présentation

La loi n°2021-1485 du 15 novembre 2021 vise à Réduire l'Empreinte Environnementale du Numérique en France. Elle impose des obligations progressives aux différents acteurs.

#### Calendrier d'application

| Date | Obligation | Acteurs concernés |
|------|------------|-------------------|
| **2022** | Formation des élus locaux | Collectivités |
| **2023** | Stratégie NR collectivités | Collectivités > 50 000 hab |
| **2024** | Éco-conception services publics | Administrations |
| **2024** | Affichage indice réparabilité | Vendeurs |
| **2025** | RGESN obligatoire | Services publics |
| **2025** | Stratégie NR entreprises | Grandes entreprises |

#### Obligations par acteur

**Collectivités territoriales (> 50 000 habitants)**

| Obligation | Échéance | Détail |
|------------|----------|--------|
| Stratégie NR | 2023 | Document stratégique |
| Programme de travail | Annuel | Actions concrètes |
| Bilan | Tous les 2 ans | Évaluation progrès |
| Formation élus | 2022 | Sensibilisation |

**Administrations**

| Obligation | Échéance | Détail |
|------------|----------|--------|
| Éco-conception | 2024 | Conformité RGESN |
| Achats responsables | 2025 | Critères environnementaux |
| Sobriété | Continu | Rationalisation parc |

**Opérateurs**

| Obligation | Échéance | Détail |
|------------|----------|--------|
| Bilan environnemental | Annuel | Publication publique |
| Offres sobres | 2024 | Options sans terminaux |

**Fabricants/Distributeurs**

| Obligation | Échéance | Détail |
|------------|----------|--------|
| Indice réparabilité | 2021 | Affichage obligatoire |
| Indice durabilité | 2024 | Extension de l'indice |
| Information consommateurs | 2022 | Obsolescence logicielle |

#### Sanctions

| Manquement | Sanction |
|------------|----------|
| Non-affichage indice | Amende jusqu'à 15 000€ |
| Défaut stratégie (collectivité) | Pas de sanction directe |
| Non-conformité services publics | À préciser |

#### Liens

- **Texte de loi** : [legifrance.gouv.fr](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000044327272)
- **Guide d'application** : [ecologie.gouv.fr](https://www.ecologie.gouv.fr)

---

### CSRD (Corporate Sustainability Reporting Directive)

**La directive européenne sur le reporting de durabilité.**

#### Présentation

La CSRD (Corporate Sustainability Reporting Directive) remplace la NFRD et étend considérablement les obligations de reporting extra-financier, incluant explicitement le numérique.

#### Calendrier d'application

| Exercice | Entreprises concernées |
|----------|------------------------|
| 2024 | Grandes entreprises (> 500 salariés, anciennement NFRD) |
| 2025 | Grandes entreprises (selon seuils EU) |
| 2026 | PME cotées (option de report 2028) |

#### Seuils "grandes entreprises"

Une entreprise est "grande" si elle dépasse 2 des 3 seuils :
- Bilan > 25 M€
- CA > 50 M€
- Effectif > 250 salariés

#### Exigences IT dans les ESRS

Les European Sustainability Reporting Standards (ESRS) incluent des éléments IT :

| ESRS | Contenu IT |
|------|------------|
| E1 - Climat | Émissions IT (scope 1, 2, 3) |
| E2 - Pollution | Déchets électroniques |
| E5 - Ressources | Consommation matériaux IT |
| S1 - Personnel | Conditions de travail IT |
| G1 - Gouvernance | Éthique données, IA |

#### Double matérialité

La CSRD impose une analyse de "double matérialité" :

```
┌─────────────────────────────────────────────────────────────────┐
│                    DOUBLE MATÉRIALITÉ                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  MATÉRIALITÉ D'IMPACT          MATÉRIALITÉ FINANCIÈRE          │
│  (inside-out)                   (outside-in)                   │
│                                                                 │
│  ┌─────────────┐               ┌─────────────┐                 │
│  │ Impact de   │               │ Impact de   │                 │
│  │ l'IT sur    │               │ l'environne-│                 │
│  │ l'environne-│               │ ment sur    │                 │
│  │ ment        │               │ l'entreprise│                 │
│  └─────────────┘               └─────────────┘                 │
│        │                             │                          │
│        v                             v                          │
│  • Émissions carbone          • Risques climat                 │
│  • Déchets DEEE               • Coûts énergie                  │
│  • Épuisement ressources      • Réglementation                 │
│  • Consommation eau           • Réputation                     │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

#### Liens

- **Directive** : [eur-lex.europa.eu](https://eur-lex.europa.eu)
- **ESRS** : [efrag.org](https://www.efrag.org)

---

### Taxonomie européenne

**La classification des activités économiques durables.**

#### Présentation

La Taxonomie européenne est un système de classification qui définit ce qu'est une activité économique "durable". Elle inclut des critères pour les data centers et les services numériques.

#### Activités IT couvertes

| Code NACE | Activité | Critères applicables |
|-----------|----------|---------------------|
| J63.1 | Data processing, hosting | PUE, WUE, énergie |
| J62 | Programmation, conseil | Contribution à l'objectif climat |
| C26 | Fabrication électronique | Circularité, substances |

#### Critères data centers (J63.1)

Pour être "aligné" sur la taxonomie :

| Critère | Exigence |
|---------|----------|
| PUE | ≤ 1.5 (nouveaux), ≤ 1.4 (2025) |
| Énergie | Objectif 100% renouvelable |
| Réfrigérants | GWP < 675 |
| Chaleur fatale | Évaluation réutilisation |
| Circularité | Processus DEEE |
| Audit | Vérification tierce partie |

#### Liens

- **Règlement** : [eur-lex.europa.eu](https://eur-lex.europa.eu)
- **FAQ** : [ec.europa.eu/sustainable-finance-taxonomy](https://ec.europa.eu/sustainable-finance-taxonomy)

---

### Loi AGEC (France)

**La loi anti-gaspillage pour une économie circulaire.**

#### Impacts IT

| Mesure | Application IT | Échéance |
|--------|----------------|----------|
| Indice réparabilité | Smartphones, PC, tablettes | 2021 |
| Indice durabilité | Extension de l'indice | 2024 |
| Réemploi | Obligations acheteurs publics | 2021 |
| DEEE | Collecte renforcée | Continu |
| Obsolescence | Information consommateurs | 2022 |

#### Liens

- **Loi** : [legifrance.gouv.fr](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000041553759)

---

## Mapping entre référentiels

### Correspondances principales

```
┌─────────────────────────────────────────────────────────────────┐
│                 CORRESPONDANCES RÉFÉRENTIELS                    │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  RGESN ←──────────────────────────────────────────→ GR491      │
│    │                                                    │       │
│    │  Critères techniques similaires                    │       │
│    │  RGESN = synthèse officielle                       │       │
│    │  GR491 = détail exhaustif                          │       │
│    │                                                    │       │
│    v                                                    v       │
│  Label NR ←────────────────────────────────────────→ B Corp    │
│    │                                                    │       │
│    │  Approche organisationnelle                        │       │
│    │  Label NR = focus NR                               │       │
│    │  B Corp = RSE globale                              │       │
│    │                                                    │       │
│    v                                                    v       │
│  ISO 14001 ←───────────────────────────────────────→ CSRD      │
│    │                                                    │       │
│    │  Management environnemental                        │       │
│    │  ISO = système de management                       │       │
│    │  CSRD = reporting obligatoire                      │       │
│    │                                                    │       │
│    v                                                    v       │
│  SCI/GHG ←─────────────────────────────────────────→ CDP       │
│                                                                 │
│    Mesure carbone                                               │
│    SCI/GHG = méthodologie                                      │
│    CDP = plateforme reporting                                   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Matrice de correspondance RGESN / GR491

| Thématique RGESN | Familles GR491 | Correspondance |
|------------------|----------------|----------------|
| 1. Stratégie | Stratégie | ~80% |
| 2. Spécifications | Spécifications | ~90% |
| 3. Architecture | Architecture | ~85% |
| 4. UX/UI | UX/UI Design | ~90% |
| 5. Contenus | Contenus | ~95% |
| 6. Frontend | Frontend | ~90% |
| 7. Backend | Backend | ~85% |
| 8. Hébergement | Hébergement | ~90% |

### Cumul des référentiels

| Combinaison | Valeur ajoutée | Recommandé pour |
|-------------|----------------|-----------------|
| RGESN + Label NR | Projet + organisation | DSI |
| GR491 + Opquast | Technique complète | Développeurs |
| ISO 14001 + CSRD | Management + reporting | Grandes entreprises |
| SCI + GHG Protocol | Mesure carbone complète | Reporting carbone |
| EN 50600 + ISO 50001 | Data center complet | Exploitants DC |

---

## Guide de mise en conformité

### Démarche globale

```
┌─────────────────────────────────────────────────────────────────┐
│              PARCOURS DE MISE EN CONFORMITÉ                     │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  PHASE 1              PHASE 2              PHASE 3              │
│  DIAGNOSTIC           PLAN D'ACTION        MISE EN ŒUVRE       │
│                                                                 │
│  ┌─────────────┐     ┌─────────────┐     ┌─────────────┐       │
│  │ Identifier  │────>│ Prioriser   │────>│ Appliquer   │       │
│  │ référentiels│     │ les actions │     │ les actions │       │
│  │ applicables │     │             │     │             │       │
│  └─────────────┘     └─────────────┘     └─────────────┘       │
│        │                   │                   │                │
│        v                   v                   v                │
│  ┌─────────────┐     ┌─────────────┐     ┌─────────────┐       │
│  │ Évaluer     │     │ Allouer     │     │ Mesurer les │       │
│  │ la maturité │     │ ressources  │     │ progrès     │       │
│  │ actuelle    │     │             │     │             │       │
│  └─────────────┘     └─────────────┘     └─────────────┘       │
│        │                   │                   │                │
│        v                   v                   v                │
│  ┌─────────────┐     ┌─────────────┐     ┌─────────────┐       │
│  │ Identifier  │     │ Planifier   │     │ Ajuster et  │       │
│  │ les écarts  │     │ les jalons  │     │ améliorer   │       │
│  └─────────────┘     └─────────────┘     └─────────────┘       │
│                                                                 │
│  PHASE 4              PHASE 5              PHASE 6              │
│  CERTIFICATION        MAINTIEN             AMÉLIORATION         │
│                                                                 │
│  ┌─────────────┐     ┌─────────────┐     ┌─────────────┐       │
│  │ Préparer    │────>│ Intégrer    │────>│ Veille      │       │
│  │ l'audit     │     │ aux process │     │ et benchmark│       │
│  └─────────────┘     └─────────────┘     └─────────────┘       │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Checklist par profil

#### Pour un projet web/application

| Étape | Action | Référentiel |
|-------|--------|-------------|
| 1 | Auto-évaluation RGESN | RGESN |
| 2 | Audit EcoIndex | - |
| 3 | Identification des écarts | RGESN |
| 4 | Plan de remédiation | GR491 |
| 5 | Implémentation | 115 BP |
| 6 | Validation | RGESN |
| 7 | Publication déclaration | RGESN |

#### Pour une organisation

| Étape | Action | Référentiel |
|-------|--------|-------------|
| 1 | Diagnostic maturité NR | Label NR |
| 2 | Cartographie impacts | GHG Protocol |
| 3 | Définition stratégie | Label NR |
| 4 | Plan d'action | - |
| 5 | Formation équipes | - |
| 6 | Mise en œuvre | RGESN + achats |
| 7 | Mesure et reporting | CDP / CSRD |
| 8 | Labellisation | Label NR |

#### Pour un data center

| Étape | Action | Référentiel |
|-------|--------|-------------|
| 1 | Mesure PUE/WUE/CUE | EN 50600 |
| 2 | Benchmark secteur | Green Grid |
| 3 | Identification leviers | EN 50600 |
| 4 | Plan d'optimisation | - |
| 5 | Mise en œuvre | ISO 50001 |
| 6 | Monitoring continu | ISO 30134 |
| 7 | Certification | EN 50600 |

### Templates et outils

#### Template de plan d'action

| Action | Référentiel | Priorité | Responsable | Échéance | Statut |
|--------|-------------|----------|-------------|----------|--------|
| [Action 1] | RGESN 1.1 | Haute | [Nom] | [Date] | En cours |
| [Action 2] | GR491 FE-001 | Moyenne | [Nom] | [Date] | À faire |
| ... | ... | ... | ... | ... | ... |

#### Template de tableau de bord

| Indicateur | Référentiel | Valeur actuelle | Cible | Écart |
|------------|-------------|-----------------|-------|-------|
| EcoIndex | RGESN | 45/100 | 70/100 | -25 |
| Conformité RGESN | RGESN | 60% | 80% | -20% |
| PUE | EN 50600 | 1.8 | 1.4 | +0.4 |
| Score Label NR | INR | 2/5 | 4/5 | -2 |

---

## Outils et ressources

### Outils d'évaluation

| Outil | Référentiel | Type | Accès |
|-------|-------------|------|-------|
| NumEcoDiag | RGESN | Auto-évaluation | Gratuit |
| Checklist GR491 | GR491 | Auto-évaluation | Gratuit |
| B Impact Assessment | B Corp | Auto-évaluation | Gratuit |
| EcoVadis | EcoVadis | Évaluation tierce | Payant |

### Guides méthodologiques

| Document | Éditeur | Focus |
|----------|---------|-------|
| Guide RGESN | DINUM | Éco-conception |
| Guide GHG Protocol ICT | GHG Protocol | Bilan carbone IT |
| Guide Label NR | INR | Labellisation |
| Guide CSRD IT | EFRAG | Reporting |

### Veille réglementaire

| Source | Type | Fréquence |
|--------|------|-----------|
| EUR-Lex | Réglementation EU | Continu |
| Légifrance | Réglementation FR | Continu |
| ADEME | Guides, études | Mensuel |
| INR Newsletter | Actualités NR | Mensuel |

### Formations complémentaires

| Formation | Référentiel couvert | Organisme |
|-----------|---------------------|-----------|
| Certificat NR | Label NR, RGESN | INR |
| ISO 14001 Lead Implementer | ISO 14001 | PECB, AFNOR |
| FinOps Practitioner | GreenOps | FinOps Foundation |
| Formation éco-conception | RGESN, GR491 | GreenIT.fr |

---

## Conclusion

L'écosystème des référentiels Green IT est riche et en constante évolution. Plutôt qu'une contrainte, ces standards représentent une opportunité de structurer sa démarche et de la faire reconnaître.

### Recommandations clés

1. **Commencer simple** : RGESN pour les projets, Label NR niveau 1 pour les organisations
2. **Progresser graduellement** : Ajouter des référentiels au fur et à mesure de la maturité
3. **Automatiser** : Intégrer les contrôles dans les processus (CI/CD, achats)
4. **Communiquer** : Publier les résultats pour valoriser les efforts
5. **Anticiper** : Se préparer aux obligations réglementaires (CSRD, REEN)

### Ressources clés

- **RGESN** : [ecoresponsable.numerique.gouv.fr](https://ecoresponsable.numerique.gouv.fr)
- **GR491** : [gr491.isit-europe.org](https://gr491.isit-europe.org)
- **Label NR** : [institutnr.org](https://institutnr.org)
- **SCI** : [sci.greensoftware.foundation](https://sci.greensoftware.foundation)
- **GHG Protocol** : [ghgprotocol.org](https://ghgprotocol.org)

---

*Les référentiels évoluent régulièrement. Vérifiez toujours la version en vigueur auprès des éditeurs.*

*Dernière mise à jour : janvier 2025*
