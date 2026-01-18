---
title: "Sensibiliser les Équipes au Green IT"
date: 2025-01-27
draft: false
weight: 5
description: "Guide complet de conduite du changement pour embarquer toutes les parties prenantes dans une démarche de numérique responsable."
---

Le Green IT ne peut pas être l'affaire de quelques experts isolés. Pour avoir un impact réel et durable, il faut embarquer l'ensemble des équipes, du développeur au dirigeant, du product owner à l'acheteur. Ce guide propose une méthodologie complète pour sensibiliser, former et engager durablement l'ensemble de l'organisation.

**Temps de lecture estimé : 50 minutes**

---

## 1. Pourquoi Sensibiliser ?

### Les limites de la technologie seule

La tentation est grande de penser que le Green IT est un problème purement technique. Il suffirait d'optimiser le code, de choisir un hébergeur vert, d'acheter du matériel efficient, et le tour serait joué.

La réalité est tout autre :

```
┌─────────────────────────────────────────────────────────────┐
│                    IMPACT ENVIRONNEMENTAL                    │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   Technologie seule : 20-30% du potentiel de réduction     │
│                                                             │
│   Technologie + Comportements : 70-80% du potentiel        │
│                                                             │
│   Technologie + Comportements + Culture : 100%             │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Exemples concrets :**

| Optimisation technique | Comportement qui l'annule |
|----------------------|---------------------------|
| Site web optimisé à 50 Ko | Ajout de vidéo autoplay par le marketing |
| Serveurs right-sizés | Développeur qui sur-provisionne "par sécurité" |
| Politique de rétention | Utilisateurs qui archivent tout "au cas où" |
| Matériel durable | Renouvellement anticipé pour "plus de confort" |

### L'effet rebond

L'effet rebond est un phénomène bien documenté : les gains d'efficacité sont souvent compensés par une augmentation des usages.

**Effet rebond direct :**
- Les voitures consomment moins → on roule plus
- Les data centers sont plus efficients → on stocke plus de données
- Le streaming est optimisé → on regarde plus de vidéos

**Effet rebond indirect :**
- L'argent économisé sur l'énergie → dépensé ailleurs (avec impact)
- Le temps gagné grâce au numérique → utilisé pour d'autres activités numériques

**Chiffres clés :**
- L'efficacité énergétique des data centers a été multipliée par 6 en 10 ans
- Mais la consommation globale a augmenté de 60% sur la même période
- Le poids moyen des pages web a été multiplié par 5 malgré les optimisations

### Le facteur humain au centre

Chaque impact environnemental du numérique est le résultat d'une décision humaine :

```
┌──────────────────────────────────────────────────────────────────┐
│                    CHAÎNE DE DÉCISIONS                           │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Direction         → Stratégie et budget                         │
│       ↓                                                          │
│  Product Owner     → Fonctionnalités et priorités                │
│       ↓                                                          │
│  Designer          → Interfaces et parcours                      │
│       ↓                                                          │
│  Développeur       → Implémentation technique                    │
│       ↓                                                          │
│  Ops               → Infrastructure et déploiement               │
│       ↓                                                          │
│  Utilisateur       → Usage quotidien                             │
│                                                                  │
│  Chaque maillon peut amplifier ou réduire l'impact              │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

### La culture d'entreprise comme levier

La sensibilisation vise à faire évoluer la culture d'entreprise :

**De :**
- "La performance avant tout"
- "Plus de fonctionnalités = meilleur produit"
- "Les ressources cloud sont infinies"
- "On verra l'impact plus tard"

**Vers :**
- "La performance inclut la durabilité"
- "Les bonnes fonctionnalités = meilleur produit"
- "Chaque ressource a un coût environnemental"
- "L'impact se pense dès la conception"

### Le contexte réglementaire

La réglementation pousse également à la sensibilisation :

| Réglementation | Implication pour les équipes |
|---------------|------------------------------|
| Loi REEN (2021) | Sensibilisation obligatoire au numérique responsable |
| CSRD (2024) | Reporting extra-financier incluant le numérique |
| AGEC (2020) | Information sur l'impact environnemental |
| RGPD | Culture de la sobriété des données |

**Article 35 de la loi REEN :**
> "Les formations à destination des ingénieurs en informatique comportent un module relatif à l'écoconception des services numériques."

### Les bénéfices de la sensibilisation

**Pour l'organisation :**
- Réduction des coûts (infrastructure, énergie)
- Conformité réglementaire
- Image de marque
- Attractivité employeur
- Innovation (contrainte créative)

**Pour les équipes :**
- Sens au travail
- Montée en compétences
- Fierté du travail bien fait
- Réduction de la dette technique

**Pour le produit :**
- Meilleure qualité
- Performance accrue
- Accessibilité améliorée
- Expérience utilisateur optimisée

---

## 2. Comprendre les Freins

### Cartographie des résistances

Avant de sensibiliser, il faut comprendre pourquoi les gens résistent. Les freins sont multiples et souvent légitimes.

```
┌─────────────────────────────────────────────────────────────────┐
│                    TYPES DE FREINS                               │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  COGNITIFS          ÉMOTIONNELS         ORGANISATIONNELS       │
│  ─────────          ────────────        ─────────────────      │
│  • Méconnaissance   • Déni              • Manque de temps      │
│  • Complexité       • Éco-anxiété       • Objectifs conflits   │
│  • Incertitude      • Culpabilité       • Silos                │
│  • Biais            • Découragement     • Manque de moyens     │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Frein 1 : "Ce n'est pas ma responsabilité"

**Manifestation :**
- "C'est aux développeurs de faire du code propre"
- "C'est à l'hébergeur de choisir de l'énergie verte"
- "C'est au client de définir ses besoins"

**Origine :**
- Spécialisation des rôles
- Silos organisationnels
- Dilution des responsabilités

**Réponse :**
- Montrer l'impact de chaque rôle
- Créer des responsabilités partagées
- Célébrer les contributions de tous

**Exemple de réponse concrète :**
> "Un product owner qui ajoute une fonctionnalité non essentielle peut avoir plus d'impact qu'un développeur qui n'optimise pas son code. Chaque rôle compte."

### Frein 2 : "L'impact individuel est négligeable"

**Manifestation :**
- "Mes emails ne vont pas sauver la planète"
- "Que représente notre site face aux GAFAM ?"
- "Une optimisation de 10% sur rien, c'est rien"

**Origine :**
- Difficulté à visualiser l'impact agrégé
- Comparaison avec des acteurs plus gros
- Sentiment d'impuissance

**Réponse :**
- Agréger les impacts (équipe, entreprise, secteur)
- Montrer l'effet d'entraînement
- Souligner le rôle d'exemplarité

**Calcul parlant :**
```
Impact d'un email avec pièce jointe (10 Mo) : ~20g CO2e

Une équipe de 50 personnes envoyant 10 emails/jour :
→ 50 × 10 × 20g = 10 kg CO2e/jour
→ 2,2 tonnes CO2e/an (juste pour les pièces jointes)
→ Équivalent à 10 000 km en voiture

Avec 1 000 entreprises similaires :
→ 2 200 tonnes CO2e/an
→ Équivalent à un vol Paris-New York pour 3 600 personnes
```

### Frein 3 : "On n'a pas le temps"

**Manifestation :**
- "On a des deadlines à tenir"
- "La dette technique, on verra plus tard"
- "Le Green IT, c'est du nice-to-have"

**Origine :**
- Pression des délais
- Priorisation court-terme
- Manque de visibilité sur le ROI

**Réponse :**
- Intégrer le Green IT au flux de travail (pas en plus)
- Montrer les gains de temps (code plus simple = moins de bugs)
- Commencer par les quick wins

**Argument :**
> "L'éco-conception n'est pas un surcoût en temps si elle est intégrée dès le départ. C'est comme l'accessibilité : plus on attend, plus c'est coûteux."

### Frein 4 : "Le business prime"

**Manifestation :**
- "Les clients veulent des fonctionnalités, pas de l'écologie"
- "La croissance d'abord, la durabilité ensuite"
- "On ne peut pas se permettre de perdre en compétitivité"

**Origine :**
- Objectifs financiers court-terme
- Méconnaissance des attentes clients
- Vision binaire (business OU environnement)

**Réponse :**
- Montrer l'alignement business/Green IT
- Présenter les attentes croissantes des clients B2B et B2C
- Quantifier les risques de l'inaction

**Données :**
- 76% des consommateurs français considèrent l'engagement environnemental dans leurs achats
- Les entreprises B2B exigent de plus en plus des critères RSE de leurs fournisseurs
- La CSRD impose un reporting sur l'impact numérique

### Frein 5 : "C'est du greenwashing"

**Manifestation :**
- "Encore une mode managériale"
- "C'est pour la comm', pas pour l'impact"
- "On fait semblant pour cocher des cases"

**Origine :**
- Expériences passées d'initiatives creuses
- Méfiance envers le discours institutionnel
- Cynisme face aux effets d'annonce

**Réponse :**
- Être transparent sur les limites
- Mesurer et publier les résultats réels
- Admettre ce qui n'est pas encore fait

**Approche :**
> "Nous ne prétendons pas être parfaits. Voici ce que nous faisons, voici ce que nous ne faisons pas encore, voici notre feuille de route avec des objectifs mesurables."

### Frein 6 : "C'est trop complexe"

**Manifestation :**
- "Je ne suis pas expert en ACV"
- "Les calculs d'empreinte sont incompréhensibles"
- "Il y a trop de référentiels différents"

**Origine :**
- Jargon technique
- Multiplicité des approches
- Manque de formation

**Réponse :**
- Vulgariser sans infantiliser
- Proposer des guides pratiques simples
- Former progressivement

### Frein 7 : L'éco-anxiété

**Manifestation :**
- Évitement du sujet
- Réactions défensives
- Découragement face à l'ampleur du problème

**Origine :**
- Conscience des enjeux climatiques
- Sentiment d'impuissance
- Dissonance cognitive

**Réponse :**
- Éviter le catastrophisme
- Mettre en avant le pouvoir d'agir
- Célébrer les victoires
- Proposer un accompagnement si besoin

### Matrice des réponses aux freins

| Frein | Réponse clé | Format adapté |
|-------|-------------|---------------|
| Responsabilité | Montrer l'impact de chaque rôle | Fresque, atelier |
| Impact négligeable | Agréger et visualiser | Dashboards, chiffres |
| Manque de temps | Quick wins, intégration au flux | Checklists, outils |
| Business prime | Aligner enjeux | Business case, ROI |
| Greenwashing | Transparence et mesure | Reporting honnête |
| Complexité | Vulgarisation | Formations, guides |
| Éco-anxiété | Pouvoir d'agir | Accompagnement, célébration |

---

## 3. Stratégies de Sensibilisation

### Principes fondamentaux

#### 1. Partir du concret

Éviter les discours abstraits sur le changement climatique. Partir de ce que les gens connaissent et peuvent visualiser.

**❌ Abstrait :**
> "Le numérique représente 4% des émissions mondiales de GES et croît de 6% par an."

**✅ Concret :**
> "L'email avec pièce jointe de 10 Mo que tu viens d'envoyer à 50 personnes, c'est l'équivalent de 100 km en voiture. La même info en lien partagé : 10 km."

**Ordres de grandeur parlants :**

| Action numérique | Équivalent |
|-----------------|------------|
| 1 heure de streaming HD | 100g CO2e ≈ 500m en voiture |
| 1 email avec PJ 10 Mo | 20g CO2e ≈ 200m en voiture |
| 1 recherche Google | 7g CO2e ≈ 1 ampoule LED 1 min |
| 1 Go stocké 1 an | 10 kg CO2e ≈ 50 km en voiture |
| Fabrication smartphone | 70 kg CO2e ≈ 350 km en voiture |
| Fabrication laptop | 300 kg CO2e ≈ 1 500 km en voiture |

#### 2. Montrer les co-bénéfices

Le Green IT n'est pas que de la contrainte. Chaque action éco-responsable apporte des bénéfices tangibles.

```
┌─────────────────────────────────────────────────────────────────┐
│                    CO-BÉNÉFICES                                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ACTION GREEN IT          →    CO-BÉNÉFICES                     │
│  ────────────────              ────────────                     │
│                                                                 │
│  Éco-conception web       →    Site plus rapide                 │
│                                Meilleure UX                     │
│                                SEO amélioré                     │
│                                                                 │
│  Optimisation cloud       →    Réduction des coûts              │
│                                Meilleure scalabilité            │
│                                                                 │
│  Prolongation matériel    →    Budget libéré                    │
│                                Moins de migrations              │
│                                                                 │
│  Code efficient           →    Application performante          │
│                                Moins de bugs                    │
│                                Maintenance facilitée            │
│                                                                 │
│  Sobriété données         →    Conformité RGPD                  │
│                                Recherche plus rapide            │
│                                Moins de stockage                │
│                                                                 │
│  Réunions optimisées      →    Temps récupéré                   │
│                                Focus amélioré                   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

#### 3. Rendre visible l'invisible

Le numérique est immatériel en apparence. Le rendre tangible est essentiel.

**Techniques de visualisation :**

| Technique | Description | Impact |
|-----------|-------------|--------|
| Visite data center | Voir les serveurs, le refroidissement | Très fort |
| Vidéos extraction minière | Mines de cobalt, lithium | Fort (attention à l'éco-anxiété) |
| Dashboard empreinte | Visualisation temps réel | Moyen, durable |
| Métaphores | "Le cloud, c'est l'ordinateur de quelqu'un d'autre" | Accessible |
| Matériel démonté | Voir les composants d'un PC | Pédagogique |

**Exemple de dashboard temps réel :**
```
┌─────────────────────────────────────────────────────────────────┐
│  🌍 EMPREINTE ÉQUIPE - CETTE SEMAINE                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Cloud compute :    ████████████░░░░░░░░  156 kg CO2e          │
│  Stockage :         ████░░░░░░░░░░░░░░░░   45 kg CO2e          │
│  Transfert :        ██░░░░░░░░░░░░░░░░░░   23 kg CO2e          │
│  ─────────────────────────────────────────────────────         │
│  TOTAL :                                  224 kg CO2e          │
│                                                                 │
│  Équivalent : 1 120 km en voiture 🚗                           │
│                                                                 │
│  Évolution vs semaine précédente : -12% ⬇️                     │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

#### 4. Donner du pouvoir d'agir

La sensibilisation sans pouvoir d'agir crée de la frustration et du désengagement.

**Leviers à fournir :**

| Besoin | Solution |
|--------|----------|
| Savoir quoi faire | Checklists, guides, bonnes pratiques |
| Pouvoir mesurer | Outils accessibles, dashboards |
| Avoir le temps | Allocation officielle, objectifs adaptés |
| Être reconnu | Valorisation des initiatives, feedback |
| Monter en compétences | Budget formation, mentoring |

#### 5. Progresser par étapes

Ne pas vouloir tout changer d'un coup. Définir une progression réaliste.

```
┌─────────────────────────────────────────────────────────────────┐
│                    PROGRESSION TYPE                              │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  NIVEAU 1 : DÉCOUVERTE (0-3 mois)                               │
│  • Prise de conscience des enjeux                               │
│  • Premiers quick wins personnels                               │
│  • Vocabulaire de base                                          │
│                                                                 │
│  NIVEAU 2 : APPLICATION (3-6 mois)                              │
│  • Intégration aux pratiques quotidiennes                       │
│  • Premiers projets éco-conçus                                  │
│  • Utilisation des outils de mesure                             │
│                                                                 │
│  NIVEAU 3 : EXPERTISE (6-12 mois)                               │
│  • Maîtrise des bonnes pratiques                                │
│  • Contribution aux référentiels internes                       │
│  • Mentorat des nouveaux                                        │
│                                                                 │
│  NIVEAU 4 : AMBASSADEUR (12+ mois)                              │
│  • Formation des autres équipes                                 │
│  • Innovation et veille                                         │
│  • Représentation externe                                       │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Stratégie des petits pas

Plutôt qu'une révolution, privilégier une évolution progressive :

**Semaine 1-2 : Quick wins individuels**
- Nettoyer sa boîte mail (vieux emails, spam)
- Paramétrer les mises en veille
- Désactiver les notifications inutiles

**Mois 1 : Pratiques d'équipe**
- Revue des réunions (durée, pertinence)
- Organisation du stockage partagé
- Premiers outils de mesure

**Mois 3 : Intégration projet**
- Checklist éco-conception
- Revue d'impact en rétro
- Formation technique ciblée

**Mois 6 : Culture installée**
- Objectifs Green IT formalisés
- Reporting régulier
- Champions identifiés

### Stratégie des champions

Identifier et former des ambassadeurs dans chaque équipe :

**Profil idéal du champion :**
- Convaincu mais pas prosélyte
- Respecté techniquement
- Bon communicant
- Pragmatique

**Rôle du champion :**
- Relais de la stratégie
- Support de proximité
- Remontée des freins
- Force de proposition

**Formation des champions :**
1. Formation approfondie (2-3 jours)
2. Outils et ressources dédiés
3. Réseau de champions (échanges)
4. Reconnaissance officielle

### Stratégie du storytelling

Raconter des histoires plutôt que d'asséner des chiffres :

**Structure narrative efficace :**
1. **Situation initiale** : "Notre site pesait 5 Mo, les utilisateurs attendaient 8 secondes"
2. **Problème** : "On perdait 40% des visiteurs, mauvais pour le business et l'environnement"
3. **Action** : "On a optimisé les images, simplifié le JS, revu le parcours"
4. **Résultat** : "800 Ko, 2 secondes, conversion +25%, empreinte -85%"
5. **Apprentissage** : "L'éco-conception, c'est aussi du bon sens business"

**Exemples de storytelling :**

| Type | Exemple |
|------|---------|
| Success story | Refonte éco-conçue avec gains mesurés |
| Témoignage | Développeur converti qui partage son parcours |
| Échec instructif | Ce qu'on a appris d'un projet raté |
| Comparaison | Avant/après d'une optimisation |

---

## 4. Formats et Méthodes

### La Fresque du Numérique

**Description :**
Atelier collaboratif de 3 heures, basé sur l'intelligence collective. Les participants reconstituent les liens entre usages numériques et impacts environnementaux à l'aide de cartes.

**Format :**
- 4 à 8 participants par table
- 1 animateur formé
- 3 heures minimum
- Présentiel recommandé (possible en distanciel)

**Déroulement :**
1. **Compréhension (1h30)** : Assemblage des cartes, liens de cause à effet
2. **Créativité (30 min)** : Personnalisation, mémorisation
3. **Restitution (15 min)** : Partage entre tables
4. **Action (45 min)** : Identification des leviers, engagement

**Avantages :**
- Format ludique et participatif
- Crée du lien entre participants
- Vision systémique des enjeux
- Débouche naturellement sur l'action
- Contenu scientifiquement validé

**Quand l'utiliser :**
- Lancement d'une démarche Green IT
- Intégration de nouveaux collaborateurs
- Séminaires d'équipe
- Comités de direction

**Variantes :**
- **Fresque du Climat** : Plus large (tous les enjeux climatiques)
- **Fresque de la Donnée** : Focus données personnelles
- **Fresque de l'IA** : Impact de l'intelligence artificielle
- **2tonnes** : Atelier de projection vers la neutralité carbone

**Devenir animateur :**
- Formation de 3h + passage à l'animation
- Coût : ~150€ (finançable entreprise)
- Permet d'animer en interne

### Ateliers pratiques

**Atelier "Éco-conception en pratique" (demi-journée)**

| Durée | Activité |
|-------|----------|
| 30 min | Contexte et enjeux |
| 45 min | Démonstration outils (EcoIndex, Lighthouse) |
| 1h30 | Audit d'un vrai site (en groupes) |
| 30 min | Restitution et plan d'action |

**Atelier "Clean Code for the Planet" (2h)**

| Durée | Activité |
|-------|----------|
| 20 min | Impact du code sur l'environnement |
| 30 min | Revue de code "avant/après" |
| 1h | Kata de refactoring éco-conçu |
| 10 min | Débrief et bonnes pratiques |

**Atelier "Data Diet" (2h)**

| Durée | Activité |
|-------|----------|
| 20 min | Coût environnemental des données |
| 30 min | Inventaire des données personnelles |
| 1h | Définition politique de rétention |
| 10 min | Plan de mise en œuvre |

### Formations techniques

**Formation éco-conception web (2 jours)**

```
JOUR 1 : FONDAMENTAUX ET MESURE
─────────────────────────────────────
Matin :
• Impact environnemental du web
• Cycle de vie d'une page
• Référentiel RGESN
• Outils de mesure

Après-midi :
• Audit pratique d'un site
• Interprétation des résultats
• Définition d'objectifs

JOUR 2 : OPTIMISATION ET INTÉGRATION
─────────────────────────────────────
Matin :
• Optimisation images et médias
• CSS et JavaScript sobres
• Performance et caching

Après-midi :
• Éco-conception en projet agile
• Checklists et Definition of Done
• Plan d'action individuel
```

**Formation Green Ops (1 jour)**

```
MATIN : COMPRENDRE ET MESURER
────────────────────────────
• Impact du cloud (scope 1, 2, 3)
• Outils de mesure cloud
• Dashboard et alertes

APRÈS-MIDI : OPTIMISER
─────────────────────────
• Right-sizing et scaling
• Scheduling et extinction
• Kubernetes efficient
• FinOps et GreenOps
```

### Brown bags et Lunch & Learn

Format court (1h) sur la pause déjeuner :

**Exemples de sujets :**
- "5 gestes pour un numérique plus sobre"
- "Comment j'ai divisé par 10 le poids de notre site"
- "Les outils de mesure d'impact que j'utilise"
- "Retour sur notre audit éco-conception"
- "Le reconditionné, ça marche vraiment ?"

**Organisation :**
- 1 speaker (interne ou externe)
- 20-30 min de présentation
- 30 min de questions/discussion
- Sandwich ou pizza fournis (incitation)

### Dojos et katas

Entraînement pratique sur des exercices ciblés :

**Kata "Image Diet"**
- Objectif : Optimiser les images d'une page
- Durée : 45 min
- Outils : Squoosh, ImageMagick
- Metric : Poids total avant/après

**Kata "Bundle Slimming"**
- Objectif : Réduire un bundle JavaScript
- Durée : 1h
- Outils : Webpack-bundle-analyzer, tree-shaking
- Metric : Taille bundle avant/après

**Kata "SQL Optimizer"**
- Objectif : Optimiser des requêtes lentes
- Durée : 1h
- Outils : EXPLAIN, index
- Metric : Temps d'exécution avant/après

### E-learning et MOOC

**MOOC disponibles :**

| Formation | Durée | Certification |
|-----------|-------|---------------|
| MOOC Numérique Responsable (INR) | 14h | Badge |
| Fresque du Numérique (en ligne) | 3h | Attestation |
| Sustainable Software Engineering (Microsoft) | 6h | Badge |
| Green Software for Practitioners (Linux Foundation) | 8h | Certificat |

**Avantages :**
- Accessible à tous, à son rythme
- Coût réduit (souvent gratuit)
- Traçabilité des participations

**Limites :**
- Moins engageant que le présentiel
- Pas d'interaction avec les pairs
- Taux de complétion souvent faible

**Bonnes pratiques :**
- Prévoir du temps dédié (pas "quand tu peux")
- Former des cohortes (motivation collective)
- Débriefer ensemble après le MOOC

### Conférences et meetups

**Événements à suivre :**
- **Conférences** : GreenTech Forum, NumRéa, DevFest (track Green)
- **Meetups** : Green IT Paris/Lyon, Cloud & Green, Designers Éthiques
- **Podcasts** : Techologie, L'Octet Vert, Environment Variables

**Organiser un meetup interne :**
- Format : 1h30, après le travail
- 2-3 lightning talks (15 min)
- Temps d'échange informel
- Récurrence mensuelle

### Hackathons Green

Journée ou week-end d'innovation sur les enjeux Green IT :

**Format type :**

```
VENDREDI SOIR
─────────────
18h : Pitch des challenges
19h : Formation des équipes
20h : Lancement du hack

SAMEDI
──────
9h-12h : Développement
12h : Déjeuner
13h-18h : Développement
18h : Présentations
19h : Jury et remise des prix
```

**Challenges possibles :**
- Réduire l'empreinte d'une feature existante
- Créer un dashboard d'impact
- Concevoir un outil de sensibilisation
- Optimiser un processus métier

---

## 5. Engager la Direction

### Pourquoi c'est crucial

Sans soutien du management, les initiatives restent marginales et s'essoufflent.

**Le management détermine :**
- Les budgets (formation, outils, temps)
- Les objectifs (OKR, KPI)
- Les priorités (arbitrages)
- La culture (exemplarité)
- La reconnaissance (évaluations, promotions)

### Le business case Green IT

Parler le langage de la direction : ROI, risques, opportunités.

**Structure du business case :**

```
┌─────────────────────────────────────────────────────────────────┐
│                    BUSINESS CASE GREEN IT                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  1. RÉDUCTION DES COÛTS                                         │
│     • Cloud : -20 à -40% par optimisation                       │
│     • Matériel : +2 ans de durée de vie moyenne                 │
│     • Énergie : -10 à -15% sur les postes de travail           │
│     • Maintenance : moins de dette technique                    │
│                                                                 │
│  2. CONFORMITÉ RÉGLEMENTAIRE                                    │
│     • Loi REEN : obligations de sensibilisation                 │
│     • CSRD : reporting extra-financier obligatoire              │
│     • RGPD : sobriété des données                               │
│     • Marchés publics : critères environnementaux               │
│                                                                 │
│  3. IMAGE ET RÉPUTATION                                         │
│     • 76% des consommateurs sensibles à l'environnement        │
│     • Critères RSE des clients B2B                              │
│     • Communication différenciante                              │
│                                                                 │
│  4. ATTRACTIVITÉ EMPLOYEUR                                      │
│     • 70% des millennials préfèrent une entreprise engagée     │
│     • Fidélisation des talents                                  │
│     • Sens au travail                                           │
│                                                                 │
│  5. INNOVATION                                                  │
│     • La contrainte comme source de créativité                  │
│     • Avantage concurrentiel                                    │
│     • Anticipation des évolutions du marché                     │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Chiffrer les gains

**Exemple de calcul cloud :**
```
Situation actuelle :
• 100 instances EC2 m5.xlarge
• Coût : 100 × 0,20$/h × 24h × 365j = 175 200$/an
• Utilisation moyenne : 30%

Après optimisation (right-sizing + scheduling) :
• 50 instances m5.large + auto-scaling
• Extinction nuit/weekend
• Coût : 87 600$/an
• Gain : 87 600$/an = 50%

Impact environnemental :
• Avant : 100 × 0,015 kg CO2e/h × 8 760h = 13 140 kg CO2e/an
• Après : ~5 000 kg CO2e/an
• Réduction : 62%
```

**Exemple de calcul matériel :**
```
Parc de 500 laptops
Coût unitaire moyen : 1 200€

Renouvellement tous les 3 ans :
• 167 laptops/an × 1 200€ = 200 400€/an

Renouvellement tous les 5 ans :
• 100 laptops/an × 1 200€ = 120 000€/an
• Gain : 80 400€/an

Impact environnemental :
• Fabrication laptop : ~300 kg CO2e
• Avant : 167 × 300 = 50 100 kg CO2e/an
• Après : 100 × 300 = 30 000 kg CO2e/an
• Réduction : 40%
```

### Identifier les risques de l'inaction

| Risque | Impact | Probabilité |
|--------|--------|-------------|
| Non-conformité CSRD | Sanctions, image | Élevée (2025) |
| Perte de marchés B2B | Chiffre d'affaires | Moyenne |
| Départ de talents | Coûts RH | Moyenne |
| Taxe carbone | Coûts opérationnels | Moyenne (horizon 5 ans) |
| Crise réputation | Image, confiance | Faible mais fort impact |

### Les demandes clés

**Demander :**

1. **Un sponsor exécutif**
   - Membre du CODIR
   - Porte la vision
   - Arbitre les conflits

2. **Des objectifs formalisés**
   - OKR Green IT
   - Intégration aux évaluations
   - Reporting régulier

3. **Du budget**
   - Formations
   - Outils de mesure
   - Temps alloué
   - Communication

4. **Du temps officiel**
   - % du temps dev pour l'optimisation
   - Journées dédiées
   - Participation aux formations

5. **De l'exemplarité**
   - Dirigeants formés (Fresque)
   - Communication du CODIR
   - Décisions cohérentes

### Formats pour la direction

**Pitch CODIR (15 min)**

| Durée | Contenu |
|-------|---------|
| 3 min | Enjeux et contexte réglementaire |
| 5 min | Business case chiffré |
| 3 min | Benchmark concurrence |
| 2 min | Proposition et demandes |
| 2 min | Questions |

**Séminaire direction (demi-journée)**

| Durée | Activité |
|-------|----------|
| 30 min | Contexte et enjeux stratégiques |
| 2h30 | Fresque du Numérique |
| 1h | Définition de la feuille de route |

### Maintenir l'engagement

**Reporting régulier :**
- Dashboard mensuel des indicateurs
- Bilan trimestriel en CODIR
- Rapport annuel intégré au rapport RSE

**Communication des succès :**
- Quick wins visibles
- Témoignages d'équipes
- Gains chiffrés

**Gestion des blocages :**
- Escalade structurée
- Propositions de compromis
- Patience et persévérance

---

## 6. Équipes Techniques

### Développeurs

Les développeurs sont au cœur de l'impact environnemental du numérique. Leur sensibilisation est cruciale.

**Enjeux spécifiques :**
- Code et architecture applicative
- Choix des frameworks et librairies
- Optimisation des performances
- Dette technique

**Messages clés :**
- "Le code le plus écologique est celui qu'on n'écrit pas"
- "Performance = éco-conception = qualité"
- "Chaque librairie a un coût environnemental"

**Format recommandé :**
- Formation technique de 1-2 jours
- Katas réguliers
- Intégration aux code reviews

**Contenu formation développeurs :**

```
MODULE 1 : COMPRENDRE L'IMPACT (2h)
───────────────────────────────────
• Cycle de vie du code (écriture → exécution → maintenance)
• Impact CPU, mémoire, I/O
• Mesure avec profilers
• Ordres de grandeur

MODULE 2 : ÉCRIRE DU CODE SOBRE (4h)
───────────────────────────────────
• Algorithmes efficients
• Structures de données appropriées
• Éviter les N+1 queries
• Gestion mémoire
• Lazy loading et caching
• Exercices pratiques

MODULE 3 : ÉCOSYSTÈME FRUGAL (3h)
───────────────────────────────────
• Évaluer les dépendances
• Frameworks légers
• Alternatives sobres
• Tree shaking et bundle optimization

MODULE 4 : INTÉGRATION PROJET (2h)
───────────────────────────────────
• Checklist éco-conception
• Outils CI/CD
• Métriques à suivre
• Code review orientée impact
```

**Checklist développeur :**

```markdown
## Avant de coder
- [ ] Cette fonctionnalité est-elle vraiment nécessaire ?
- [ ] Existe-t-il une solution plus simple ?
- [ ] Cette librairie est-elle indispensable ?

## Pendant le développement
- [ ] Algorithme optimal (complexité minimale)
- [ ] Requêtes DB optimisées (index, pagination)
- [ ] Gestion de la mémoire (libération, pooling)
- [ ] Caching approprié

## Avant de merger
- [ ] Tests de performance
- [ ] Bundle size vérifié
- [ ] Pas de régression
- [ ] Code review effectuée
```

### Ops et SRE

Les équipes d'exploitation ont un levier majeur sur l'infrastructure.

**Enjeux spécifiques :**
- Dimensionnement des ressources
- Automatisation et scaling
- Monitoring et alertes
- Choix d'infrastructure

**Messages clés :**
- "Over-provisioning = gaspillage environnemental et financier"
- "Right-sizing et scheduling sont les quick wins"
- "Le meilleur serveur est celui qu'on n'allume pas"

**Contenu formation Ops :**

```
MODULE 1 : IMPACT INFRASTRUCTURE (2h)
────────────────────────────────────
• PUE et efficacité data center
• Scope 1, 2, 3 du cloud
• Comparatif providers
• Outils de mesure

MODULE 2 : OPTIMISATION COMPUTE (3h)
────────────────────────────────────
• Right-sizing méthodologie
• Instances spot et preemptible
• Auto-scaling intelligent
• Scheduling et extinction
• Exercices pratiques

MODULE 3 : OPTIMISATION STOCKAGE (2h)
────────────────────────────────────
• Classes de stockage
• Lifecycle policies
• Compression et déduplication
• Nettoyage des données orphelines

MODULE 4 : KUBERNETES GREEN (2h)
────────────────────────────────────
• Resource requests et limits
• Node autoscaling
• Bin packing
• Outils (Kepler, kube-green)

MODULE 5 : FINOPS/GREENOPS (2h)
────────────────────────────────────
• Alignement coût/carbone
• Tagging et allocation
• Dashboards et alertes
• Culture FinOps
```

**Dashboard Ops Green IT :**

```
┌─────────────────────────────────────────────────────────────────┐
│  🖥️ INFRASTRUCTURE DASHBOARD                                    │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  COMPUTE                                                        │
│  ───────                                                        │
│  Instances actives : 127                                        │
│  Utilisation moyenne CPU : 34%  ⚠️ (cible : >60%)               │
│  Instances sous-utilisées : 45  🔴                              │
│  Potentiel right-sizing : -12 000 €/mois                       │
│                                                                 │
│  STOCKAGE                                                       │
│  ────────                                                       │
│  Total : 45 To                                                  │
│  Données >1 an non accédées : 12 To (27%)  ⚠️                   │
│  Snapshots orphelins : 2,3 To  🔴                               │
│  Potentiel nettoyage : -2 000 €/mois                           │
│                                                                 │
│  EMPREINTE CARBONE                                              │
│  ─────────────────                                              │
│  Ce mois : 4 230 kg CO2e                                        │
│  Tendance : +5% vs mois précédent  📈                           │
│  Objectif annuel : -15%                                         │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Architectes

Les choix d'architecture ont un impact durable sur l'empreinte.

**Enjeux spécifiques :**
- Choix technologiques structurants
- Patterns d'architecture
- Scalabilité et résilience
- Vision long terme

**Messages clés :**
- "L'architecture sobre est souvent la plus simple"
- "Chaque composant ajouté a un coût de maintenance et d'énergie"
- "Pensez cycle de vie, pas juste lancement"

**Principes d'architecture durable :**

```
┌─────────────────────────────────────────────────────────────────┐
│              PRINCIPES D'ARCHITECTURE DURABLE                    │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  1. SIMPLICITÉ                                                  │
│     • Moins de composants = moins de maintenance                │
│     • Éviter l'over-engineering                                 │
│     • YAGNI (You Ain't Gonna Need It)                          │
│                                                                 │
│  2. MODULARITÉ                                                  │
│     • Composants indépendants                                   │
│     • Scalabilité ciblée                                        │
│     • Évolution possible sans refonte                           │
│                                                                 │
│  3. EFFICACITÉ                                                  │
│     • Choix des technos selon le besoin                         │
│     • Éviter les couches inutiles                               │
│     • Caching natif                                             │
│                                                                 │
│  4. DURABILITÉ                                                  │
│     • Technologies pérennes                                     │
│     • Éviter le vendor lock-in                                  │
│     • Documentation et maintenabilité                           │
│                                                                 │
│  5. MESURABILITÉ                                                │
│     • Observabilité intégrée                                    │
│     • Métriques d'impact                                        │
│     • Alertes sur les dérives                                   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**ADR (Architecture Decision Record) Green IT :**

```markdown
# ADR-XXX : Choix de l'architecture de stockage

## Contexte
Nous devons stocker les documents utilisateurs avec un volume prévu de 10 To.

## Options considérées

### Option A : Stockage objet S3
- Coût : $$
- Impact environnemental : Moyen (data center hyperscaler)
- Scalabilité : Excellente
- Durabilité : 99,999999999%

### Option B : Stockage sur serveur dédié
- Coût : $$$
- Impact environnemental : Variable selon hébergeur
- Scalabilité : Limitée
- Durabilité : Dépend de la redondance

### Option C : Stockage tiered (hot/cold/archive)
- Coût : $ à $$
- Impact environnemental : Optimisé selon accès
- Scalabilité : Excellente
- Durabilité : 99,999999999%

## Décision
Option C avec politique de lifecycle automatique.

## Justification environnementale
- 80% des données accédées <1 fois/an → archive
- Réduction estimée de 60% de l'empreinte stockage
- Alignement coût/impact
```

### Data Engineers

La gestion des données a un impact environnemental croissant.

**Enjeux spécifiques :**
- Pipelines de données
- Stockage et rétention
- Traitement batch vs streaming
- DataOps

**Contenu formation Data :**

```
MODULE 1 : IMPACT DES DONNÉES (2h)
─────────────────────────────────
• Coût environnemental du stockage
• Impact des traitements
• Data centers et énergie
• Ordres de grandeur

MODULE 2 : PIPELINES SOBRES (3h)
─────────────────────────────────
• Architecture data frugale
• Éviter les retraitements
• Optimisation des jobs Spark/Flink
• Scheduling intelligent

MODULE 3 : STOCKAGE EFFICIENT (2h)
─────────────────────────────────
• Formats colonnes (Parquet, ORC)
• Partitionnement optimal
• Compression
• Tiering et archivage

MODULE 4 : GOUVERNANCE DATA (2h)
─────────────────────────────────
• Catalogue et lignage
• Politiques de rétention
• Suppression automatisée
• Data quality vs quantité
```

---

## 7. Équipes Métier

### Product Owners et Product Managers

Les PO/PM définissent ce qui est construit. Leur impact est majeur.

**Enjeux spécifiques :**
- Priorisation des fonctionnalités
- Definition of Done
- Roadmap produit
- Relation avec les stakeholders

**Messages clés :**
- "La meilleure fonctionnalité est parfois celle qu'on ne fait pas"
- "Chaque feature a un coût de maintenance et d'énergie"
- "La valeur utilisateur n'est pas proportionnelle à la complexité"

**Intégration au product management :**

```
┌─────────────────────────────────────────────────────────────────┐
│           PRODUCT MANAGEMENT RESPONSABLE                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  DISCOVERY                                                      │
│  • Valider le besoin réel (pas supposé)                        │
│  • Questionner la solution numérique                            │
│  • Évaluer l'impact environnemental dès le début               │
│                                                                 │
│  PRIORISATION                                                   │
│  • Matrice valeur/impact environnemental                        │
│  • Fonctionnalités essentielles vs nice-to-have                 │
│  • Suppression des features peu utilisées                       │
│                                                                 │
│  CONCEPTION                                                     │
│  • Parcours utilisateur minimalistes                            │
│  • Alternatives moins impactantes                               │
│  • Dark patterns à éviter                                       │
│                                                                 │
│  DELIVERY                                                       │
│  • DoD incluant critères éco-conception                         │
│  • Mesure de l'impact en prod                                   │
│  • Amélioration continue                                        │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Matrice de priorisation impact/valeur :**

```
         HAUTE VALEUR
              │
              │
    FAIRE EN  │  FAIRE EN
    OPTIMISANT│  PRIORITÉ
    L'IMPACT  │
              │
 ─────────────┼─────────────
              │
    ÉVITER    │  QUESTIONNER
    OU        │  LA VRAIE
    SUPPRIMER │  VALEUR
              │
              │
         FAIBLE VALEUR

      FORT        FAIBLE
      IMPACT      IMPACT
```

**Checklist PO/PM :**

```markdown
## Avant de lancer une feature
- [ ] Le besoin est-il validé par des données utilisateurs ?
- [ ] Une solution non-numérique est-elle possible ?
- [ ] La feature la plus simple possible est-elle définie ?
- [ ] L'impact environnemental estimé est-il acceptable ?

## Pendant le développement
- [ ] Les critères éco-conception sont dans la DoD ?
- [ ] Les alternatives techniques sobres sont explorées ?
- [ ] La mesure d'impact est prévue ?

## Après le lancement
- [ ] L'usage réel est-il mesuré ?
- [ ] Les features peu utilisées sont-elles identifiées ?
- [ ] Un nettoyage régulier est-il prévu ?
```

### Designers UX/UI

Le design influence directement les comportements utilisateurs et l'impact technique.

**Enjeux spécifiques :**
- Parcours utilisateurs
- Composants et patterns
- Images et médias
- Animations et interactions

**Messages clés :**
- "Un bon design est invisible et économe"
- "La simplicité est le luxe ultime"
- "Chaque pixel a un coût"

**Principes de design responsable :**

```
┌─────────────────────────────────────────────────────────────────┐
│              DESIGN RESPONSABLE                                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  1. SOBRIÉTÉ                                                    │
│     • Interfaces minimalistes                                   │
│     • Hiérarchie visuelle claire                                │
│     • Moins d'éléments = moins de charge cognitive              │
│                                                                 │
│  2. EFFICACITÉ                                                  │
│     • Parcours courts (3 clics max)                             │
│     • Actions principales visibles                              │
│     • Réduction des étapes                                      │
│                                                                 │
│  3. FRUGALITÉ VISUELLE                                          │
│     • Icônes SVG vs images                                      │
│     • Couleurs systèmes                                         │
│     • Typographies web standard                                 │
│     • Animations essentielles uniquement                        │
│                                                                 │
│  4. DARK PATTERNS À ÉVITER                                      │
│     • Infinite scroll                                           │
│     • Notifications push abusives                               │
│     • Autoplay vidéo                                            │
│     • Confirmation shaming                                      │
│                                                                 │
│  5. ACCESSIBILITÉ                                               │
│     • Design inclusif = design sobre                            │
│     • Contrastes suffisants                                     │
│     • Navigation clavier                                        │
│     • Contenus alternatifs                                      │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Design system responsable :**

| Composant | Bonne pratique |
|-----------|----------------|
| Images | Format WebP/AVIF, tailles responsives, lazy loading |
| Icônes | SVG optimisés, sprite unique |
| Typographies | 2 max, formats woff2, subset caractères |
| Couleurs | Palette limitée, mode sombre natif |
| Animations | CSS uniquement, respect prefers-reduced-motion |
| Vidéos | Click-to-play, poster, compression |

### Marketing et Communication

Le marketing génère souvent des contenus lourds (vidéos, images, landing pages).

**Enjeux spécifiques :**
- Campagnes digitales
- Contenus multimédias
- Landing pages
- Emails marketing

**Messages clés :**
- "Un email léger a un meilleur taux de délivrabilité"
- "Une page rapide convertit mieux"
- "La sobriété peut être un argument de communication"

**Bonnes pratiques marketing :**

```
EMAIL MARKETING
───────────────
✅ À faire :
• Poids < 100 Ko
• Images optimisées
• Liens vs pièces jointes
• Nettoyage régulier des listes

❌ À éviter :
• GIF animés lourds
• Pièces jointes volumineuses
• Envois non ciblés
• Listes non maintenues

LANDING PAGES
─────────────
✅ À faire :
• Poids < 500 Ko
• Images WebP/AVIF
• Lazy loading
• Hébergement vert

❌ À éviter :
• Vidéos autoplay
• Parallax excessif
• Animations lourdes
• Trackers multiples

CONTENUS SOCIAUX
────────────────
✅ À faire :
• Compression vidéos
• Durées courtes
• Formats adaptés aux plateformes
• Réutilisation des contenus

❌ À éviter :
• Surproduction de contenus
• Qualité max systématique
• Duplication sur toutes les plateformes
```

### Équipes Achats

Les acheteurs ont un impact majeur sur l'empreinte matérielle.

**Enjeux spécifiques :**
- Sélection des fournisseurs
- Cahiers des charges
- Critères d'évaluation
- Gestion du parc

**Messages clés :**
- "80% de l'impact d'un équipement est à la fabrication"
- "Le reconditionné est une option professionnelle"
- "Prolonger la durée de vie est le premier geste"

**Critères d'achat responsable :**

```
┌─────────────────────────────────────────────────────────────────┐
│              GRILLE D'ÉVALUATION FOURNISSEUR                     │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  CRITÈRES ENVIRONNEMENTAUX (40%)                                │
│  ─────────────────────────────                                  │
│  • Politique RSE documentée         /10                         │
│  • Labels et certifications         /10                         │
│  • Durabilité des produits          /10                         │
│  • Offre reconditionné              /10                         │
│                                                                 │
│  CRITÈRES TECHNIQUES (30%)                                      │
│  ────────────────────────                                       │
│  • Performance / besoin             /10                         │
│  • Réparabilité                     /10                         │
│  • Évolutivité                      /10                         │
│                                                                 │
│  CRITÈRES ÉCONOMIQUES (30%)                                     │
│  ─────────────────────────                                      │
│  • Coût total de possession         /10                         │
│  • Conditions de reprise            /10                         │
│  • Garantie et SAV                  /10                         │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 8. Intégration aux Processus

### Definition of Done

Intégrer des critères Green IT à la Definition of Done de l'équipe.

**DoD enrichie :**

```markdown
## Definition of Done - Équipe Alpha

### Critères fonctionnels
- [ ] Fonctionnalité implémentée selon les specs
- [ ] Tests unitaires et d'intégration passent
- [ ] Code review effectuée
- [ ] Documentation mise à jour

### Critères qualité
- [ ] Pas de régression de performance
- [ ] Accessibilité WCAG 2.1 AA respectée
- [ ] Sécurité validée (OWASP)

### Critères éco-conception ✨
- [ ] Poids de page < budget défini
- [ ] Pas de régression EcoIndex
- [ ] Requêtes DB optimisées (EXPLAIN OK)
- [ ] Images optimisées (WebP, lazy loading)
- [ ] Bundle JS < seuil défini
- [ ] Pas de librairie ajoutée sans justification
```

### Code Reviews

Intégrer l'éco-conception aux revues de code.

**Checklist code review Green IT :**

```markdown
## Code Review - Critères environnementaux

### Performance
- [ ] Algorithme optimal (pas de O(n²) évitable)
- [ ] Pas de requête N+1
- [ ] Utilisation appropriée du cache
- [ ] Pas de traitement inutile

### Ressources
- [ ] Mémoire libérée correctement
- [ ] Connexions fermées
- [ ] Fichiers temporaires nettoyés
- [ ] Pas de fuite de ressources

### Dépendances
- [ ] Nouvelle librairie justifiée
- [ ] Librairie légère préférée
- [ ] Tree shaking possible
- [ ] Pas de duplication de dépendances

### Données
- [ ] Collecte minimale
- [ ] Rétention définie
- [ ] Pas de stockage superflu
```

**Commentaires de review orientés impact :**

```
// ❌ Éviter
"Ce code n'est pas optimal"

// ✅ Préférer
"Cette requête en boucle génère N appels DB.
Une requête avec IN() réduirait de 95% les accès DB
et l'empreinte associée."
```

### Rétrospectives

Inclure l'impact environnemental dans les rétros.

**Format "Green Retro" :**

```
┌─────────────────────────────────────────────────────────────────┐
│                    GREEN RETROSPECTIVE                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  🌱 CE QUI A RÉDUIT NOTRE IMPACT                                │
│  • Optimisation des images du sprint 12                         │
│  • Suppression de la feature inutilisée X                       │
│  • Passage à des instances spot                                 │
│                                                                 │
│  🔥 CE QUI A AUGMENTÉ NOTRE IMPACT                              │
│  • Ajout de la vidéo homepage                                   │
│  • Nouvelle dépendance lourde (chart.js)                        │
│  • Logs verbeux en production                                   │
│                                                                 │
│  💡 ACTIONS POUR LE PROCHAIN SPRINT                             │
│  • Compresser la vidéo homepage                                 │
│  • Évaluer alternative légère à chart.js                        │
│  • Réduire le niveau de log                                     │
│                                                                 │
│  📊 MÉTRIQUES DU SPRINT                                         │
│  • EcoIndex : B → C (régression à investiguer)                  │
│  • Poids moyen pages : +15%                                     │
│  • Coût cloud : stable                                          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Sprint Planning

Intégrer l'évaluation d'impact au planning.

**Estimation enrichie :**

| User Story | Points | Impact env. | Décision |
|------------|--------|-------------|----------|
| US-123 : Ajout vidéo produit | 5 | Fort (vidéo) | Évaluer alternatives |
| US-124 : Optimisation recherche | 3 | Positif | Prioritaire |
| US-125 : Nouvelle feature X | 8 | Moyen | À challenger |

### OKR et objectifs

Formaliser des objectifs Green IT mesurables.

**Exemples d'OKR :**

```
OBJECTIF : Réduire l'empreinte environnementale de notre produit

KEY RESULTS :
□ KR1 : Améliorer l'EcoIndex de D à B sur les 5 pages principales
□ KR2 : Réduire le poids moyen des pages de 30%
□ KR3 : Diminuer la consommation cloud de 20%
□ KR4 : Former 100% de l'équipe à l'éco-conception
```

```
OBJECTIF : Intégrer le Green IT dans nos processus

KEY RESULTS :
□ KR1 : 100% des nouvelles features passent la checklist éco-conception
□ KR2 : Dashboard d'impact consulté à chaque sprint review
□ KR3 : 0 régression EcoIndex non justifiée
□ KR4 : 80% des code reviews incluent des critères environnementaux
```

### CI/CD

Automatiser les contrôles dans le pipeline.

**Pipeline enrichi :**

```yaml
# .gitlab-ci.yml
stages:
  - build
  - test
  - quality
  - green-check  # Nouveau stage
  - deploy

green-check:
  stage: green-check
  script:
    # Vérification du poids du bundle
    - |
      BUNDLE_SIZE=$(du -sb dist/ | cut -f1)
      MAX_SIZE=500000
      if [ $BUNDLE_SIZE -gt $MAX_SIZE ]; then
        echo "❌ Bundle trop lourd: $BUNDLE_SIZE bytes (max: $MAX_SIZE)"
        exit 1
      fi

    # Audit Lighthouse
    - npx lighthouse-ci autorun

    # Audit EcoIndex
    - npx ecoindex-cli analyze --url $STAGING_URL --output json

    # Vérification des nouvelles dépendances
    - |
      NEW_DEPS=$(git diff HEAD~1 package.json | grep "^\+" | grep -v "^++")
      if [ -n "$NEW_DEPS" ]; then
        echo "⚠️ Nouvelles dépendances détectées, vérifier la justification"
      fi

  artifacts:
    reports:
      performance: lighthouse-report.json
```

### Documentation

Maintenir une documentation Green IT accessible.

**Structure wiki/Confluence :**

```
📁 Green IT
├── 📄 Charte et engagements
├── 📄 Bonnes pratiques
│   ├── Développement
│   ├── Infrastructure
│   ├── Design
│   └── Données
├── 📄 Checklists
│   ├── Nouveau projet
│   ├── Code review
│   └── Mise en production
├── 📄 Outils et mesure
├── 📄 Formations et ressources
└── 📄 Indicateurs et reporting
```

---

## 9. Communication Interne

### Newsletter Green IT

Maintenir l'attention avec une communication régulière.

**Format newsletter mensuelle :**

```
┌─────────────────────────────────────────────────────────────────┐
│  🌱 GREEN IT NEWS - JANVIER 2025                                │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  📊 LES CHIFFRES DU MOIS                                        │
│  • Empreinte cloud : -8% vs décembre                           │
│  • EcoIndex moyen : B (stable)                                  │
│  • Formations : 12 personnes sensibilisées                      │
│                                                                 │
│  🏆 LA VICTOIRE DU MOIS                                         │
│  L'équipe Checkout a réduit le poids de la page panier         │
│  de 2,1 Mo à 450 Ko. Résultat : temps de chargement            │
│  divisé par 3 et EcoIndex passé de D à A !                     │
│                                                                 │
│  💡 LE TIP DU MOIS                                              │
│  Pensez à vider votre corbeille d'emails. 1 Go de mails        │
│  supprimés = 10 kg CO2e évités par an.                         │
│                                                                 │
│  📅 À VENIR                                                     │
│  • 15/02 : Fresque du Numérique (inscriptions ouvertes)        │
│  • 22/02 : Brown bag "Kubernetes Green" par Marie              │
│                                                                 │
│  📚 RESSOURCE                                                   │
│  Le MOOC Numérique Responsable de l'INR est gratuit            │
│  et dure 14h. Lien : [...]                                     │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Challenges et gamification

Créer de l'émulation positive.

**Challenge "Data Diet"**

```
┌─────────────────────────────────────────────────────────────────┐
│  🏆 CHALLENGE DATA DIET - CLASSEMENT                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ÉQUIPES                                                        │
│  1. 🥇 Équipe Backend    -45 Go    (1 350 kg CO2e évités)      │
│  2. 🥈 Équipe Frontend   -32 Go    (960 kg CO2e évités)        │
│  3. 🥉 Équipe Data       -28 Go    (840 kg CO2e évités)        │
│  4.    Équipe Mobile     -15 Go    (450 kg CO2e évités)        │
│                                                                 │
│  TOTAL ENTREPRISE : -120 Go = 3 600 kg CO2e évités             │
│                                                                 │
│  🎯 Objectif : -200 Go d'ici fin février                       │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Types de challenges :**

| Challenge | Métrique | Durée |
|-----------|----------|-------|
| Data Diet | Go supprimés | 1 mois |
| Bundle Slimming | Ko économisés | 2 semaines |
| Green Sprint | EcoIndex amélioré | 1 sprint |
| Clean Mailbox | Emails supprimés | 1 semaine |
| Meeting Diet | Minutes de réunion économisées | 1 mois |

### Témoignages et storytelling

Partager les expériences concrètes.

**Format interview :**

```
┌─────────────────────────────────────────────────────────────────┐
│  👤 PORTRAIT - MARIE, DÉVELOPPEUSE FRONTEND                     │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  "J'étais sceptique au début. Je pensais que l'éco-conception  │
│  allait me ralentir. En fait, c'est l'inverse : mon code est   │
│  plus propre, plus rapide, plus facile à maintenir.            │
│                                                                 │
│  Mon déclic ? La Fresque du Numérique. Comprendre que mon      │
│  travail quotidien avait un impact concret, ça a tout changé.  │
│                                                                 │
│  Aujourd'hui, je vérifie systématiquement le poids de mes      │
│  bundles, j'optimise les images, je challenge les features     │
│  trop lourdes. C'est devenu un réflexe.                        │
│                                                                 │
│  Mon conseil ? Commencez par mesurer. Quand on voit les        │
│  chiffres, on ne peut plus faire comme avant."                 │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Signalétique et rappels

Intégrer des rappels visuels dans l'environnement de travail.

**Affichage bureau :**
- Stickers sur les écrans : "Éteins-moi ce soir"
- Posters avec les ordres de grandeur
- Écran d'affichage dynamique avec métriques

**Intégration outils :**
- Message de signature email avec tips
- Bot Slack/Teams avec rappels
- Fond d'écran entreprise engagé

**Exemple signature email :**
```
--
Marie Dupont | Développeuse Frontend
📧 Avant d'imprimer, pensez à l'environnement
🌱 Cette année, notre équipe a économisé 2,4 tonnes de CO2e
```

### Canaux de communication

**Slack/Teams :**
- Channel #green-it dédié
- Bot de tips quotidiens
- Partage des victoires

**Intranet :**
- Page dédiée Green IT
- Actualités et ressources
- Indicateurs en temps réel

**Événements :**
- All-hands trimestriels avec bilan
- Séminaires avec ateliers
- Afterworks Green IT

---

## 10. Mesurer l'Impact

### Indicateurs de sensibilisation

Mesurer l'effort de sensibilisation :

| Indicateur | Cible | Fréquence |
|------------|-------|-----------|
| Taux de formation | 100% équipes tech | Annuel |
| Participation Fresques | 50% entreprise | Annuel |
| Consultation ressources | +20%/trimestre | Mensuel |
| Questions canal #green-it | Tendance positive | Mensuel |

**Dashboard sensibilisation :**

```
┌─────────────────────────────────────────────────────────────────┐
│  📊 SENSIBILISATION - BILAN T1 2025                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  FORMATIONS                                                     │
│  Personnes formées (cumulé) : ████████████░░░░  72%            │
│  Objectif annuel : 100%                                         │
│                                                                 │
│  FRESQUES RÉALISÉES                                             │
│  Participants : 45 / 120 collaborateurs                         │
│  Sessions à venir : 4                                           │
│                                                                 │
│  ENGAGEMENT                                                     │
│  Messages #green-it : 156 (+34% vs T4)                         │
│  Propositions d'amélioration : 12                               │
│  Initiatives spontanées : 5                                     │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Indicateurs de changement de pratiques

Mesurer l'adoption des bonnes pratiques :

| Indicateur | Baseline | Cible | Actuel |
|------------|----------|-------|--------|
| DoD Green IT respectée | 0% | 100% | 65% |
| Code reviews avec critères env. | 0% | 80% | 45% |
| Projets avec audit éco-conception | 20% | 100% | 60% |
| Features avec évaluation impact | 0% | 100% | 40% |

### Indicateurs techniques

Mesurer l'impact réel sur le produit et l'infrastructure :

**Web :**
| Indicateur | Baseline | Objectif | Actuel |
|------------|----------|----------|--------|
| EcoIndex moyen | D | B | C |
| Poids médian pages | 2,5 Mo | < 1 Mo | 1,8 Mo |
| Score Lighthouse perf. | 45 | > 80 | 62 |
| Requêtes HTTP / page | 80 | < 30 | 45 |

**Cloud :**
| Indicateur | Baseline | Objectif | Actuel |
|------------|----------|----------|--------|
| Utilisation CPU moyenne | 25% | > 60% | 42% |
| Instances right-sizées | 30% | 80% | 55% |
| Données > 1 an archivées | 10% | 80% | 45% |
| Coût cloud (tendance) | Réf. | -20% | -12% |

**Empreinte carbone :**
| Indicateur | Baseline | Objectif | Actuel |
|------------|----------|----------|--------|
| Émissions scope 2 (cloud) | 50 t CO2e | -30% | -18% |
| Émissions scope 3 (équipements) | 120 t CO2e | -20% | -15% |
| Durée vie moyenne équipements | 3,5 ans | 5 ans | 4,2 ans |

### Enquêtes et feedback

Mesurer la perception et la maturité :

**Enquête annuelle de maturité :**

```
┌─────────────────────────────────────────────────────────────────┐
│  ENQUÊTE MATURITÉ GREEN IT - RÉSULTATS 2025                     │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  "Je comprends les enjeux du numérique responsable"            │
│  ████████████████████░░░░  78% d'accord (+15 pts vs 2024)      │
│                                                                 │
│  "J'ai les moyens d'agir au quotidien"                         │
│  ████████████████░░░░░░░░  62% d'accord (+22 pts)              │
│                                                                 │
│  "Le Green IT est une priorité pour ma hiérarchie"             │
│  ████████████░░░░░░░░░░░░  48% d'accord (+18 pts)              │
│                                                                 │
│  "Je me sens compétent sur les sujets d'éco-conception"        │
│  ██████████████░░░░░░░░░░  55% d'accord (+30 pts)              │
│                                                                 │
│  NPS Green IT : 32 (+12 pts)                                   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Modèle de maturité

Évaluer la progression de l'organisation :

```
┌─────────────────────────────────────────────────────────────────┐
│              MODÈLE DE MATURITÉ GREEN IT                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  NIVEAU 1 : INITIAL                                             │
│  • Pas de démarche formalisée                                   │
│  • Initiatives individuelles isolées                            │
│  • Pas de mesure                                                │
│                                                                 │
│  NIVEAU 2 : SENSIBILISÉ                                         │
│  • Prise de conscience des enjeux                               │
│  • Premières formations                                         │
│  • Quick wins identifiés                                        │
│                                                                 │
│  NIVEAU 3 : ENGAGÉ                                ← VOUS ÊTES ICI│
│  • Stratégie formalisée                                         │
│  • Processus intégrés                                           │
│  • Mesure régulière                                             │
│  • Champions identifiés                                         │
│                                                                 │
│  NIVEAU 4 : OPTIMISÉ                                            │
│  • Culture installée                                            │
│  • Amélioration continue                                        │
│  • Innovation green                                             │
│  • Influence externe                                            │
│                                                                 │
│  NIVEAU 5 : EXEMPLAIRE                                          │
│  • Référence du secteur                                         │
│  • Contribution aux standards                                   │
│  • Accompagnement d'autres organisations                        │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### ROI de la sensibilisation

Calculer le retour sur investissement :

**Investissement :**
```
Formations (20 personnes × 500€)      : 10 000€
Fresques (10 sessions × 500€)         :  5 000€
Outils de mesure                      :  2 000€
Temps interne (coordination)          :  8 000€
Communication                         :  1 000€
─────────────────────────────────────────────────
TOTAL INVESTISSEMENT                  : 26 000€
```

**Gains mesurés :**
```
Réduction coût cloud (-15%)           : 45 000€
Prolongation équipements (+1 an)      : 30 000€
Productivité (moins de dette tech)    : 15 000€
Évitement coûts non-conformité        : 10 000€
─────────────────────────────────────────────────
TOTAL GAINS                           : 100 000€

ROI = (100 000 - 26 000) / 26 000 = 285%
```

---

## Checklist récapitulative

### Démarrage (0-3 mois)

```markdown
## Phase 1 : Lancement

### Cadrage
- [ ] Sponsor exécutif identifié
- [ ] Diagnostic initial réalisé
- [ ] Objectifs définis (OKR)
- [ ] Budget alloué
- [ ] Équipe projet constituée

### Premières actions
- [ ] Fresque du Numérique pour le CODIR
- [ ] Champions identifiés et formés
- [ ] Canal de communication créé
- [ ] Premières mesures (baseline)
- [ ] Quick wins lancés

### Communication
- [ ] Annonce officielle
- [ ] Page intranet créée
- [ ] Newsletter lancée
```

### Déploiement (3-12 mois)

```markdown
## Phase 2 : Déploiement

### Formations
- [ ] Planning de Fresques établi
- [ ] Formations techniques programmées
- [ ] MOOC recommandé et suivi
- [ ] Brown bags réguliers

### Intégration processus
- [ ] DoD enrichie
- [ ] Code review adaptée
- [ ] Retrospectives Green
- [ ] CI/CD avec contrôles
- [ ] Documentation créée

### Mesure
- [ ] Dashboards opérationnels
- [ ] Reporting mensuel
- [ ] Enquête de maturité
- [ ] Indicateurs suivis
```

### Ancrage (12+ mois)

```markdown
## Phase 3 : Ancrage

### Culture
- [ ] Green IT dans les valeurs
- [ ] Critères dans les évaluations
- [ ] Onboarding intègre le sujet
- [ ] Initiatives spontanées

### Amélioration continue
- [ ] Bilan annuel
- [ ] Objectifs révisés
- [ ] Nouveaux challenges
- [ ] Veille active

### Rayonnement
- [ ] Témoignages externes
- [ ] Contribution communauté
- [ ] Accompagnement partenaires
```

---

## Pour aller plus loin

### Ressources

**Ateliers :**
- [Fresque du Numérique](https://www.fresquedunumerique.org/)
- [Fresque du Climat](https://fresqueduclimat.org/)
- [2tonnes](https://www.2tonnes.org/)
- [Fresque de la Donnée](https://www.yourdata.network/)

**Formations :**
- [MOOC Numérique Responsable (INR)](https://www.academie-nr.org/)
- [Green Software for Practitioners (Linux Foundation)](https://training.linuxfoundation.org/)
- [Formations Greenspector](https://greenspector.com/)
- [Formations GreenIT.fr](https://www.greenit.fr/)

**Communautés :**
- [Planet Tech'Care](https://www.intechinfo.fr/planet-techcare/)
- [Designers Éthiques](https://designersethiques.org/)
- [ClimateAction.tech](https://climateaction.tech/)
- [Green Software Foundation](https://greensoftware.foundation/)

**Référentiels :**
- [RGESN](https://ecoresponsable.numerique.gouv.fr/publications/referentiel-general-ecoconception/)
- [GR491](https://gr491.isit-europe.org/)
- [115 bonnes pratiques](https://collectif.greenit.fr/)

### Livres recommandés

- *Sobriété numérique* - Frédéric Bordage
- *Éco-conception web : les 115 bonnes pratiques* - Collectif GreenIT.fr
- *Green IT : réduire l'empreinte environnementale des systèmes d'information* - INR

### Podcasts

- **Techologie** : Podcast sur la tech responsable
- **L'Octet Vert** : Numérique et environnement
- **Environment Variables** : Green software (EN)

---

## Conclusion

Sensibiliser les équipes au Green IT est un marathon, pas un sprint. Les changements de comportement et de culture prennent du temps, mais ils sont les seuls à garantir un impact durable.

**Les clés du succès :**

1. **Progressivité** : Commencer petit, persévérer longtemps
2. **Exemplarité** : Le management doit montrer l'exemple
3. **Pragmatisme** : Privilégier l'action à la perfection
4. **Mesure** : Ce qui ne se mesure pas ne s'améliore pas
5. **Célébration** : Valoriser les victoires, même petites

Chaque personne sensibilisée est une graine plantée. Certaines germeront vite, d'autres prendront du temps. L'essentiel est de créer les conditions pour que chacun puisse s'engager à son rythme, selon ses moyens, dans la transformation vers un numérique plus responsable.

---

*Guide mis à jour en janvier 2025. Pour contribuer ou signaler une erreur : [contact]*
