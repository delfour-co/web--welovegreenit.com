---
title: "Guide Complet : Réduire l'Empreinte Carbone du Cloud"
date: 2025-01-27
draft: false
weight: 2
description: "Le manuel de référence pour une infrastructure cloud durable : mesure, optimisation, architecture sobre et bonnes pratiques pour réduire l'impact environnemental de vos services cloud."
---

Le cloud computing a révolutionné notre façon de concevoir et déployer les applications. Mais derrière la promesse d'une infrastructure "dématérialisée" se cache une réalité physique : des millions de serveurs, des kilomètres de câbles, et une consommation énergétique colossale. Ce guide complet vous accompagne dans la transformation de votre utilisation du cloud vers des pratiques plus durables.

**Temps de lecture estimé : 50 minutes**

---

## 1. Comprendre l'impact du cloud

### 1.1 Le cloud n'est pas immatériel

Contrairement à l'image véhiculée par son nom évocateur de nuages, le cloud repose sur une infrastructure physique massive et énergivore.

#### Anatomie d'un data center

Un data center moderne se compose de plusieurs couches :

**Infrastructure physique :**
- **Bâtiment** : structure, sécurité physique, contrôle d'accès
- **Alimentation électrique** : arrivées haute tension, transformateurs, onduleurs (UPS), générateurs de secours
- **Refroidissement** : systèmes HVAC, chillers, free cooling, refroidissement liquide
- **Connectivité** : fibres optiques, équipements réseau, points de présence (PoP)

**Infrastructure IT :**
- **Serveurs** : compute, mémoire, stockage local
- **Stockage** : baies SAN/NAS, disques SSD/HDD
- **Réseau** : switches, routeurs, load balancers, firewalls

**Ordres de grandeur :**

| Métrique | Data center moyen | Hyperscale |
|----------|-------------------|------------|
| Surface | 2 000 - 10 000 m² | 50 000 - 100 000+ m² |
| Puissance | 5 - 20 MW | 100 - 500+ MW |
| Serveurs | 5 000 - 20 000 | 100 000 - 1 000 000+ |
| Investissement | 50 - 200 M€ | 500 M€ - 2 Md€ |

#### Consommation énergétique mondiale

Les data centers représentent une part croissante de la consommation électrique mondiale :

| Année | Consommation estimée | Part mondiale |
|-------|---------------------|---------------|
| 2010 | ~200 TWh | ~1,0% |
| 2020 | ~400 TWh | ~1,5% |
| 2024 | ~415 TWh | ~1,6% |
| 2030 (proj.) | 600-1000 TWh | 2-3% |

**Facteurs de croissance :**
- Explosion des données (IoT, vidéo, IA)
- Adoption massive du cloud
- Intelligence artificielle et machine learning
- Blockchain et crypto-monnaies
- 5G et edge computing

### 1.2 Sources d'émissions

L'empreinte carbone du cloud se décompose selon les trois scopes du GHG Protocol :

#### Scope 1 : Émissions directes

Les émissions directement produites par le data center :
- **Générateurs diesel** : utilisés en secours lors des coupures
- **Fluides frigorigènes** : fuites des systèmes de climatisation (HFC à fort pouvoir de réchauffement)
- **Véhicules** : flottes de service et maintenance

**Part typique : 1-5% des émissions totales**

#### Scope 2 : Émissions indirectes liées à l'énergie

Les émissions de la production d'électricité consommée :
- **Électricité des serveurs** : alimentation des équipements IT
- **Électricité du refroidissement** : climatisation, ventilation
- **Électricité auxiliaire** : éclairage, sécurité, bureaux

**Part typique : 30-50% des émissions totales**

Le scope 2 varie énormément selon le mix électrique local :

| Pays/Région | Intensité carbone (gCO2e/kWh) |
|-------------|------------------------------|
| Suède | 20-40 |
| France | 50-80 |
| Canada | 120-150 |
| Allemagne | 350-400 |
| États-Unis (moyenne) | 380-420 |
| Pologne | 700-800 |
| Inde | 650-750 |

#### Scope 3 : Émissions indirectes autres

Les émissions de la chaîne de valeur :
- **Fabrication des équipements** : serveurs, stockage, réseau
- **Transport et logistique** : livraison des équipements
- **Construction du bâtiment** : béton, acier, matériaux
- **Fin de vie** : recyclage, destruction
- **Services externalisés** : maintenance, consulting

**Part typique : 45-70% des émissions totales**

> **Point clé** : Les émissions "embarquées" (scope 3) représentent souvent la majorité de l'empreinte. L'efficacité énergétique seule ne suffit pas à réduire significativement l'impact global.

### 1.3 Comparatif des fournisseurs cloud

Les trois hyperscalers (AWS, Google Cloud, Microsoft Azure) représentent environ 65% du marché cloud mondial. Leurs approches environnementales diffèrent.

#### Amazon Web Services (AWS)

**Engagement :** 100% énergies renouvelables d'ici 2025, neutralité carbone d'ici 2040

**Points forts :**
- Plus grand acheteur corporate d'énergies renouvelables au monde
- Outil Customer Carbon Footprint Tool
- Régions à faible carbone identifiées

**Points d'attention :**
- Transparence limitée sur les émissions scope 3
- Retard relatif sur les engagements par rapport aux concurrents
- Mix énergétique très variable selon les régions

**Régions à privilégier :** eu-north-1 (Stockholm), ca-central-1 (Canada), eu-west-3 (Paris)

#### Google Cloud Platform (GCP)

**Engagement :** 100% énergies renouvelables depuis 2017, fonctionnement 24/7 carbone-free d'ici 2030

**Points forts :**
- Carbon Footprint Dashboard intégré
- Carbon-free energy percentage (CFE%) par région
- Compute Engine carbon-aware scheduling
- Longue histoire d'efficacité énergétique (PUE moyen de 1.10)

**Points d'attention :**
- Couverture géographique plus limitée qu'AWS
- Certaines régions encore fortement carbonées

**Régions à privilégier :** europe-north1 (Finlande, CFE 97%), northamerica-northeast1 (Montréal, CFE 98%)

#### Microsoft Azure

**Engagement :** Carbone négatif d'ici 2030, compensation de toutes les émissions historiques d'ici 2050

**Points forts :**
- Emissions Impact Dashboard
- Sustainability Calculator
- Engagement ambitieux sur le scope 3
- Investissements massifs dans la capture carbone

**Points d'attention :**
- Complexité du reporting
- Variations importantes selon les régions

**Régions à privilégier :** Sweden Central, Canada Central, France Central

#### Comparatif synthétique

| Critère | AWS | GCP | Azure |
|---------|-----|-----|-------|
| Transparence carbone | ⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |
| Outils de mesure | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |
| Régions bas carbone | ⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |
| Engagement 2030 | ⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |
| PUE moyen | 1.20 | 1.10 | 1.18 |

### 1.4 Mythes et réalités

#### Mythe 1 : "Le cloud est forcément plus vert que l'on-premise"

**Réalité :** Ça dépend. Un data center d'entreprise bien optimisé dans une région à électricité décarbonée peut avoir une empreinte inférieure à un cloud mal utilisé dans une région carbonée.

**Facteurs clés :**
- Taux d'utilisation des ressources
- Mix énergétique local
- Efficacité de l'infrastructure (PUE)
- Durée de vie des équipements

#### Mythe 2 : "Migrer vers le cloud réduit automatiquement l'empreinte"

**Réalité :** La migration "lift and shift" sans optimisation peut même augmenter l'empreinte. Les gains viennent de l'optimisation rendue possible par le cloud, pas de la migration elle-même.

**Pour réduire réellement l'empreinte :**
- Right-sizing systématique
- Utilisation des services managés
- Architecture cloud-native
- Extinction des ressources inutilisées

#### Mythe 3 : "Les hyperscalers sont 100% verts"

**Réalité :** Les engagements "100% renouvelable" concernent généralement une compensation annuelle globale, pas une alimentation en temps réel. À certaines heures et dans certaines régions, l'électricité utilisée est carbonée.

**Ce que signifie réellement "100% renouvelable" :**
- Achat de certificats d'énergie renouvelable (RECs, GOs)
- Contrats d'achat d'électricité (PPAs)
- Compensation sur une base annuelle, pas instantanée

#### Mythe 4 : "L'efficacité énergétique résout tout"

**Réalité :** L'effet rebond (paradoxe de Jevons) montre que les gains d'efficacité sont souvent compensés par l'augmentation des usages. Un data center deux fois plus efficace qui double sa capacité n'a pas réduit son impact.

**L'équation complète :**
```
Impact = Nombre de services × Intensité par service × Intensité carbone de l'énergie
```

Il faut agir sur les trois facteurs simultanément.

### 1.5 PUE et indicateurs d'efficacité

Le **Power Usage Effectiveness (PUE)** est l'indicateur standard d'efficacité des data centers :

```
PUE = Énergie totale du data center / Énergie des équipements IT
```

| PUE | Qualification | Contexte |
|-----|--------------|----------|
| > 2.0 | Inefficace | Data centers anciens |
| 1.6 - 2.0 | Standard | Moyenne du marché |
| 1.4 - 1.6 | Bon | Data centers modernes |
| 1.2 - 1.4 | Très bon | Data centers optimisés |
| < 1.2 | Excellent | Hyperscalers, free cooling |

**Limites du PUE :**
- Ne mesure pas l'efficacité des serveurs eux-mêmes
- N'intègre pas les émissions embarquées
- Ne considère pas le mix énergétique
- Peut être "optimisé" sans réel gain environnemental

**Indicateurs complémentaires :**
- **CUE (Carbon Usage Effectiveness)** : émissions par kWh IT
- **WUE (Water Usage Effectiveness)** : consommation d'eau
- **ERE (Energy Reuse Effectiveness)** : récupération de chaleur
- **DCEM (Data Center Energy Management)** : norme ISO 30134

---

## 2. Mesurer son empreinte

### 2.1 Pourquoi mesurer ?

> "On ne peut améliorer que ce que l'on mesure." — Peter Drucker

La mesure est le point de départ indispensable de toute démarche de réduction :

**Objectifs de la mesure :**
- **Établir une baseline** : connaître son point de départ
- **Identifier les hotspots** : concentrer les efforts
- **Suivre les progrès** : vérifier l'efficacité des actions
- **Communiquer** : reporting RSE, parties prenantes
- **Comparer** : benchmarks sectoriels, objectifs science-based

### 2.2 Outils natifs des providers

#### AWS Customer Carbon Footprint Tool

**Accès :** Console AWS > Billing > Carbon Footprint

**Fonctionnalités :**
- Émissions par service et par région
- Historique sur 36 mois
- Projection des émissions évitées
- Export des données

**Méthodologie :**
- Basé sur l'utilisation réelle des ressources
- Facteurs d'émission par région
- Distinction scope 1, 2, 3 (market-based)

**Limites :**
- Données disponibles avec 3 mois de décalage
- Granularité limitée (pas de détail par instance)
- Pas de scope 3 amont (fabrication)

```python
# Exemple d'export via AWS CLI
import boto3
import json

ce = boto3.client('ce')

response = ce.get_cost_and_usage(
    TimePeriod={
        'Start': '2024-01-01',
        'End': '2024-12-31'
    },
    Granularity='MONTHLY',
    Metrics=['UnblendedCost'],
    GroupBy=[
        {'Type': 'DIMENSION', 'Key': 'SERVICE'},
        {'Type': 'DIMENSION', 'Key': 'REGION'}
    ]
)
```

#### GCP Carbon Footprint

**Accès :** Console GCP > Carbon Footprint

**Fonctionnalités :**
- Émissions brutes et nettes (après offset)
- Carbon-free energy percentage par projet
- Détail par service et région
- Comparaison location-based vs market-based
- Export BigQuery pour analyses avancées

**Atouts distinctifs :**
- CFE% (Carbon-Free Energy) par région
- Recommandations d'optimisation
- Données plus détaillées que les concurrents

```sql
-- Requête BigQuery pour analyser les émissions
SELECT
  usage_month,
  service.description as service,
  location.location as region,
  carbon_footprint_total_kgCO2e.scope1,
  carbon_footprint_total_kgCO2e.scope2,
  carbon_footprint_total_kgCO2e.scope3
FROM `project.carbon_footprint.carbon_footprint_export`
WHERE usage_month BETWEEN '2024-01' AND '2024-12'
ORDER BY carbon_footprint_total_kgCO2e.scope2 DESC
```

#### Azure Emissions Impact Dashboard

**Accès :** Portal Azure > Emissions Impact Dashboard (preview)

**Fonctionnalités :**
- Émissions par abonnement et service
- Comparaison cloud vs on-premise
- Tendances temporelles
- Export Power BI

**Microsoft Sustainability Calculator :**
- Outil plus complet
- Intègre Microsoft 365 et Dynamics
- Émissions scope 1, 2, 3

### 2.3 Cloud Carbon Footprint (CCF)

**Cloud Carbon Footprint** est l'outil open source de référence pour la mesure multi-cloud.

**GitHub :** https://github.com/cloud-carbon-footprint/cloud-carbon-footprint

**Avantages :**
- Multi-cloud (AWS, GCP, Azure)
- Méthodologie transparente et auditable
- Personnalisable
- Gratuit et open source
- Communauté active

**Composants :**
- **API** : récupération et calcul des données
- **CLI** : utilisation en ligne de commande
- **Client** : interface web de visualisation

**Installation :**

```bash
# Cloner le repository
git clone https://github.com/cloud-carbon-footprint/cloud-carbon-footprint.git
cd cloud-carbon-footprint

# Installer les dépendances
yarn install

# Configurer les credentials (voir documentation)
cp packages/api/.env.template packages/api/.env
# Éditer .env avec vos credentials cloud

# Lancer l'application
yarn start
```

**Configuration AWS :**

```bash
# Variables d'environnement requises
AWS_TARGET_ACCOUNT_ROLE_NAME=CCFRole
AWS_ATHENA_DB_NAME=ccf_database
AWS_ATHENA_DB_TABLE=ccf_table
AWS_ATHENA_REGION=eu-west-1
AWS_ATHENA_QUERY_RESULT_LOCATION=s3://ccf-results/
AWS_BILLING_ACCOUNT_ID=123456789012
AWS_BILLING_ACCOUNT_NAME=main-account
```

**Méthodologie de calcul :**

```
Émissions = Utilisation × Facteur d'émission × Coefficient PUE

Où :
- Utilisation = heures × puissance (vCPU, mémoire, stockage)
- Facteur d'émission = gCO2e/kWh selon la région
- Coefficient PUE = overhead du data center
```

### 2.4 Méthodologies de calcul

#### Approche top-down (basée sur les coûts)

**Principe :** Estimer les émissions à partir des dépenses cloud en utilisant des ratios sectoriels.

**Formule :**
```
Émissions = Dépenses cloud (€) × Facteur d'émission sectoriel (kgCO2e/€)
```

**Facteurs typiques :**
- Services cloud : 0.2 - 0.5 kgCO2e/€
- À ajuster selon le mix régional

**Avantages :**
- Simple et rapide
- Données facilement disponibles

**Limites :**
- Peu précis
- Ne permet pas d'identifier les leviers d'action
- Sensible aux variations de prix

#### Approche bottom-up (basée sur l'utilisation)

**Principe :** Calculer les émissions à partir de l'utilisation réelle des ressources.

**Méthode par composant :**

**Compute :**
```
Émissions = Heures d'utilisation × Puissance moyenne × PUE × Facteur d'émission
```

Puissance moyenne par type d'instance :
| Type | Puissance estimée |
|------|-------------------|
| t3.micro | 5-10W |
| m5.large | 30-50W |
| c5.2xlarge | 80-120W |
| p3.2xlarge (GPU) | 250-350W |

**Stockage :**
```
Émissions = Volume (TB) × Puissance par TB × Heures × PUE × Facteur d'émission
```

Puissance par TB :
| Type | Puissance/TB |
|------|-------------|
| SSD | 1-2W |
| HDD | 4-6W |
| Objet (S3) | 0.5-1W |

**Réseau :**
```
Émissions = Volume transféré (TB) × Énergie par TB × Facteur d'émission
```

Énergie réseau : ~0.06 kWh/GB (variable selon la distance)

#### Intégration des émissions embarquées

Les émissions de fabrication (scope 3) sont souvent ignorées mais significatives :

**Serveur type :**
- Émissions de fabrication : 500-1500 kgCO2e
- Durée de vie : 4-6 ans
- Émissions amorties : 100-300 kgCO2e/an

**Pour intégrer le scope 3 :**
```
Émissions scope 3 = Émissions fabrication × (Utilisation / Durée de vie totale)
```

### 2.5 Reporting et dashboards

#### Métriques essentielles

| Métrique | Définition | Cible |
|----------|------------|-------|
| Émissions totales | tCO2e/mois | Réduction YoY |
| Intensité compute | gCO2e/vCPU-heure | < 50 |
| Intensité stockage | gCO2e/TB-mois | < 500 |
| Intensité applicative | gCO2e/requête | Variable |
| Utilisation moyenne | % CPU | > 40% |
| Ressources éteintes | % du parc | > 30% off-hours |

#### Dashboard exemple (Grafana)

```yaml
# Configuration dashboard Cloud Carbon
panels:
  - title: "Émissions mensuelles par service"
    type: timeseries
    datasource: prometheus
    targets:
      - expr: sum(cloud_carbon_emissions_kg) by (service)

  - title: "Top 10 ressources émettrices"
    type: table
    datasource: prometheus
    targets:
      - expr: topk(10, cloud_carbon_emissions_kg)

  - title: "Utilisation CPU moyenne"
    type: gauge
    datasource: prometheus
    targets:
      - expr: avg(cpu_utilization_percent)
    thresholds:
      - value: 30
        color: red
      - value: 50
        color: yellow
      - value: 70
        color: green
```

#### Intégration au reporting RSE

Pour le reporting extra-financier (CSRD, CDP, etc.) :

**Informations à collecter :**
- Émissions scopes 1, 2, 3 par catégorie
- Méthodologie de calcul utilisée
- Facteurs d'émission et sources
- Périmètre organisationnel
- Actions de réduction et objectifs

**Standards de reporting :**
- **GHG Protocol** : standard de référence
- **ISO 14064** : norme internationale
- **CDP** : questionnaire investisseurs
- **SBTi** : objectifs science-based

---

## 3. Architecture durable

### 3.1 Principes d'architecture sobre

Une architecture cloud durable repose sur plusieurs principes fondamentaux :

#### Principe 1 : Minimiser les ressources

> "La ressource la plus verte est celle qu'on n'utilise pas."

**Application :**
- Questionner chaque composant : est-il vraiment nécessaire ?
- Éliminer les couches intermédiaires inutiles
- Préférer les services managés aux solutions auto-hébergées
- Mutualiser les ressources quand c'est possible

#### Principe 2 : Maximiser l'utilisation

Les serveurs cloud ont un taux d'utilisation moyen de 10-20%. L'objectif est d'atteindre 50-70%.

**Application :**
- Right-sizing systématique
- Auto-scaling agressif
- Consolidation des workloads
- Extinction automatique hors utilisation

#### Principe 3 : Optimiser les flux

Chaque octet transféré consomme de l'énergie à travers le réseau.

**Application :**
- Rapprocher le calcul des données
- Minimiser les transferts inter-régions
- Cacher agressivement
- Compresser les données

#### Principe 4 : Choisir la bonne abstraction

Plus l'abstraction est élevée, plus l'optimisation est automatique.

**Hiérarchie d'efficacité :**
```
Plus efficient ←——————————————————→ Moins efficient
Serverless > Containers > VMs > Bare metal
```

#### Principe 5 : Design for failure, design for efficiency

Une architecture résiliente est souvent plus efficiente car elle évite le surdimensionnement défensif.

### 3.2 Serverless vs Containers vs VMs

#### Virtual Machines (VMs)

**Caractéristiques :**
- Isolation forte (hyperviseur)
- Overhead OS complet
- Facturation à l'heure (minimum)
- Scaling manuel ou lent

**Impact environnemental :**
- Utilisation typique : 10-30%
- Gaspillage significatif à l'idle
- Ressources réservées même sans charge

**Cas d'usage :**
- Applications legacy
- Exigences de compatibilité strictes
- Workloads très réguliers

**Optimisations :**
```bash
# Arrêt automatique des VMs de dev le soir
# AWS Instance Scheduler
aws scheduler create-schedule \
  --name "dev-instances-stop" \
  --schedule-expression "cron(0 19 ? * MON-FRI *)" \
  --target '{"Arn": "arn:aws:lambda:...", "RoleArn": "..."}'
```

#### Containers (Docker, Kubernetes)

**Caractéristiques :**
- Isolation légère (namespaces)
- Partage du kernel OS
- Démarrage rapide (secondes)
- Densité élevée

**Impact environnemental :**
- Utilisation typique : 30-50% (avec bon bin packing)
- Overhead réduit vs VMs
- Scaling plus réactif

**Optimisations Kubernetes :**
```yaml
# Resource requests et limits pour un pod
apiVersion: v1
kind: Pod
spec:
  containers:
  - name: app
    resources:
      requests:
        cpu: "100m"      # Minimum garanti
        memory: "128Mi"
      limits:
        cpu: "500m"      # Maximum autorisé
        memory: "512Mi"
```

#### Serverless (Functions)

**Caractéristiques :**
- Pas de serveur à gérer
- Facturation à l'exécution (ms)
- Scaling automatique à zéro
- Cold starts potentiels

**Impact environnemental :**
- Pay-per-use réel
- Pas de gaspillage à l'idle
- Mutualisation maximale
- Optimal pour workloads intermittents

**Comparatif d'empreinte :**

| Workload | VMs | Containers | Serverless |
|----------|-----|------------|------------|
| 100 req/jour (10ms) | 24h × P | ~1h × P | 1s × P |
| 10K req/heure (100ms) | 24h × P | 1-2h × P | 17min × P |
| 1M req/heure (100ms) | 24h × 10P | 4h × 5P | 28h × P |

(P = Puissance d'une unité de compute)

**Exemple Lambda éco-conçu :**
```python
# Function optimisée : mémoire minimale, exécution rapide
import json

def handler(event, context):
    # Éviter les imports lourds au runtime
    # Traitement minimal
    result = process(event)

    return {
        'statusCode': 200,
        'body': json.dumps(result),
        'headers': {
            'Content-Type': 'application/json',
            # Cache pour réduire les invocations
            'Cache-Control': 'max-age=300'
        }
    }
```

### 3.3 Microservices vs Monolithes

#### Le monolithe : pas si mal

**Avantages environnementaux :**
- Moins de communication réseau
- Pas d'overhead de serialisation
- Déploiement simple
- Ressources partagées

**Quand préférer le monolithe :**
- Équipe réduite (< 10 développeurs)
- Domaine bien défini
- Charge modérée et prévisible
- Time-to-market critique

#### Microservices : complexité cachée

**Overhead environnemental :**
- Chaque service = ressources dédiées
- Communication réseau entre services
- Sérialisation/désérialisation
- Observabilité (logs, traces, metrics)
- Service mesh (Istio ajoute ~100ms et ~100MB/pod)

**Calcul d'overhead :**
```
Overhead microservices = N services × (Sidecar + Baseline + Réseau)

Exemple :
- 50 microservices
- Sidecar Envoy : 100MB RAM, 0.1 CPU
- Baseline par service : 256MB RAM
- Réseau inter-services : +30% latence

Overhead total : 50 × (100MB + 256MB) = 17.8 GB RAM juste pour l'overhead
```

#### Architecture modulaire : le compromis

**Approche "modular monolith" :**
- Modules bien découplés dans un seul déploiement
- Communication in-process
- Possibilité d'extraire en microservices si nécessaire

```
Monolithe modulaire
┌─────────────────────────────────────┐
│  ┌─────────┐ ┌─────────┐ ┌────────┐│
│  │ Module  │ │ Module  │ │ Module ││
│  │   A     │ │   B     │ │   C    ││
│  └────┬────┘ └────┬────┘ └───┬────┘│
│       │           │          │     │
│  ┌────┴───────────┴──────────┴────┐│
│  │        Shared Infrastructure    ││
│  └─────────────────────────────────┘│
└─────────────────────────────────────┘
        Un seul déploiement
        Communication in-process
```

### 3.4 Edge computing

#### Principe

Rapprocher le calcul des utilisateurs pour réduire :
- La latence
- Les transferts réseau longue distance
- La charge sur les data centers centraux

#### Impact environnemental

**Avantages :**
- Réduction des transferts backbone (-50 à -80%)
- Processing local des données IoT
- Filtrage avant envoi au cloud

**Inconvénients :**
- Multiplication des points de présence
- Matériel moins efficient (PUE plus élevé)
- Complexité de gestion

**Bilan net :** Positif pour les workloads à forte volumétrie réseau ou faible latence requise.

#### Services edge des providers

| Provider | Service | Points de présence |
|----------|---------|-------------------|
| AWS | CloudFront Functions, Lambda@Edge | 400+ |
| GCP | Cloud CDN, Cloud Functions | 200+ |
| Azure | Azure CDN, Azure Functions | 180+ |
| Cloudflare | Workers | 300+ |

**Exemple CloudFlare Workers :**
```javascript
// Worker edge pour cache et transformation
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const cache = caches.default
  let response = await cache.match(request)

  if (!response) {
    response = await fetch(request)
    // Cacher à l'edge pour 1 heure
    response = new Response(response.body, response)
    response.headers.set('Cache-Control', 'max-age=3600')
    event.waitUntil(cache.put(request, response.clone()))
  }

  return response
}
```

### 3.5 Architecture event-driven

#### Principe

Remplacer le polling (interrogation continue) par des événements (notification au changement).

**Polling :**
```
Client → Serveur : "Nouvelles données ?" (toutes les 5s)
Serveur → Client : "Non"
Client → Serveur : "Nouvelles données ?" (toutes les 5s)
Serveur → Client : "Non"
... (99% de requêtes inutiles)
```

**Event-driven :**
```
Client s'abonne aux événements
...
Serveur → Client : "Nouvelle donnée !" (quand elle existe)
```

#### Réduction de l'empreinte

| Approche | Requêtes/jour (1000 clients) |
|----------|------------------------------|
| Polling 5s | 17.3 millions |
| Polling 60s | 1.4 million |
| Event-driven | ~10 000 (événements réels) |

**Économie potentielle : 99%+**

#### Implémentation

**AWS EventBridge :**
```yaml
# Infrastructure as Code (SAM)
EventRule:
  Type: AWS::Events::Rule
  Properties:
    EventPattern:
      source:
        - "my.application"
      detail-type:
        - "OrderCreated"
    Targets:
      - Arn: !GetAtt ProcessOrderFunction.Arn
        Id: "ProcessOrder"
```

**Patterns utiles :**
- **Pub/Sub** : SNS, Pub/Sub, Event Grid
- **Event streaming** : Kinesis, Kafka
- **Webhooks** : notification HTTP
- **WebSocket** : connexion persistante bidirectionnelle

### 3.6 Patterns d'architecture durable

#### Pattern 1 : Demand shifting

Décaler les workloads non urgents vers les périodes de faible intensité carbone.

```python
# Exemple : batch processing carbon-aware
from electricity_maps import get_carbon_intensity

def should_run_batch():
    intensity = get_carbon_intensity(region='FR')
    threshold = 100  # gCO2/kWh

    if intensity < threshold:
        return True

    # Reporter si possible
    if can_delay(hours=4):
        return False

    # Exécuter quand même si urgent
    return is_urgent()
```

#### Pattern 2 : Demand shaping

Adapter la qualité de service selon l'intensité carbone.

```python
# Exemple : qualité vidéo adaptative
def get_video_quality(user_region):
    intensity = get_carbon_intensity(user_region)

    if intensity < 50:
        return '4K'
    elif intensity < 200:
        return '1080p'
    else:
        return '720p'  # Mode éco automatique
```

#### Pattern 3 : Infrastructure carbon-aware

Déplacer les workloads vers les régions les moins carbonées.

```yaml
# Kubernetes : scheduling carbon-aware
apiVersion: v1
kind: Pod
metadata:
  name: batch-job
spec:
  affinity:
    nodeAffinity:
      preferredDuringSchedulingIgnoredDuringExecution:
      - weight: 100
        preference:
          matchExpressions:
          - key: carbon-intensity
            operator: Lt
            values:
            - "100"
```

---

## 4. Optimisation Compute

### 4.1 Right-sizing : dimensionner correctement

Le surdimensionnement est la première source de gaspillage cloud. Les instances sont souvent 2 à 4 fois plus grandes que nécessaire.

#### Diagnostic

**Métriques à analyser :**
- Utilisation CPU moyenne et pic
- Utilisation mémoire moyenne et pic
- I/O disque et réseau
- Patterns temporels (jour/nuit, semaine/weekend)

**Outils de diagnostic :**

| Provider | Outil |
|----------|-------|
| AWS | Compute Optimizer, CloudWatch |
| GCP | Recommender, Cloud Monitoring |
| Azure | Advisor, Monitor |

**Script de diagnostic AWS :**
```python
import boto3
from datetime import datetime, timedelta

cloudwatch = boto3.client('cloudwatch')

def analyze_instance(instance_id):
    end_time = datetime.utcnow()
    start_time = end_time - timedelta(days=14)

    # CPU utilization
    cpu_stats = cloudwatch.get_metric_statistics(
        Namespace='AWS/EC2',
        MetricName='CPUUtilization',
        Dimensions=[{'Name': 'InstanceId', 'Value': instance_id}],
        StartTime=start_time,
        EndTime=end_time,
        Period=3600,
        Statistics=['Average', 'Maximum']
    )

    avg_cpu = sum(d['Average'] for d in cpu_stats['Datapoints']) / len(cpu_stats['Datapoints'])
    max_cpu = max(d['Maximum'] for d in cpu_stats['Datapoints'])

    return {
        'instance_id': instance_id,
        'avg_cpu': avg_cpu,
        'max_cpu': max_cpu,
        'recommendation': get_recommendation(avg_cpu, max_cpu)
    }

def get_recommendation(avg_cpu, max_cpu):
    if avg_cpu < 10 and max_cpu < 30:
        return 'DOWNSIZE_AGGRESSIVE'
    elif avg_cpu < 20 and max_cpu < 50:
        return 'DOWNSIZE'
    elif avg_cpu > 70:
        return 'UPSIZE'
    else:
        return 'OK'
```

#### Stratégie de right-sizing

**Étape 1 : Collecter les données (2-4 semaines)**
- Activer le monitoring détaillé
- Capturer les pics de charge
- Identifier les patterns

**Étape 2 : Analyser et catégoriser**
```
┌─────────────────────────────────────────────────────────────┐
│                    Matrice de décision                      │
├─────────────────┬───────────────────────────────────────────┤
│                 │         Utilisation max                   │
│                 │   < 30%    │  30-70%   │    > 70%        │
├─────────────────┼────────────┼───────────┼─────────────────┤
│ Utilisation     │            │           │                 │
│ moyenne         │            │           │                 │
│   < 20%         │ Réduire    │ Réduire   │ Auto-scale     │
│                 │ de 50%     │ de 25%    │                │
│  20-50%         │ Réduire    │ OK        │ Surveiller     │
│                 │ de 25%     │           │                │
│   > 50%         │ Surveiller │ OK        │ Augmenter?     │
└─────────────────┴────────────┴───────────┴─────────────────┘
```

**Étape 3 : Implémenter progressivement**
- Commencer par les environnements non-production
- Réduire graduellement (ne pas diviser par 4 d'un coup)
- Monitorer après chaque changement
- Prévoir un rollback rapide

#### Types d'instances et efficacité

**AWS - Familles d'instances :**

| Famille | Usage | Efficacité énergétique |
|---------|-------|----------------------|
| T (burstable) | Workloads variables | ⭐⭐⭐ (si bien utilisé) |
| M (general purpose) | Usage général | ⭐⭐ |
| C (compute optimized) | CPU-intensive | ⭐⭐⭐ |
| R (memory optimized) | Mémoire-intensive | ⭐⭐ |
| G/P (GPU) | ML/Graphics | ⭐ (mais nécessaire) |

**Graviton (ARM) vs x86 :**
```
Graviton3 vs équivalent x86 :
- Performance : équivalente ou supérieure
- Consommation : -60%
- Coût : -40%
- Recommandation : privilégier Graviton pour nouveaux workloads
```

### 4.2 Instances spot et preemptible

Les instances spot/preemptible utilisent la capacité excédentaire des data centers.

#### Avantages environnementaux

- **Optimisation du taux d'utilisation global** : les serveurs tournent de toute façon
- **Économie financière** : 60-90% moins cher
- **Alignement des incitations** : moins cher = plus efficace

#### Quand utiliser

**Workloads adaptés :**
- Batch processing
- CI/CD et tests
- Traitement de données
- Encoding vidéo
- Machine learning training
- Workers de queue

**Workloads inadaptés :**
- Bases de données
- Applications stateful critiques
- Services sans tolérance à l'interruption

#### Implémentation AWS Spot

```yaml
# Launch Template avec Spot
AWSTemplateFormatVersion: '2010-09-09'
Resources:
  SpotFleet:
    Type: AWS::EC2::SpotFleet
    Properties:
      SpotFleetRequestConfigData:
        IamFleetRole: !GetAtt SpotFleetRole.Arn
        TargetCapacity: 10
        AllocationStrategy: capacityOptimized  # Choisit les moins susceptibles d'interruption
        LaunchTemplateConfigs:
          - LaunchTemplateSpecification:
              LaunchTemplateId: !Ref LaunchTemplate
              Version: !GetAtt LaunchTemplate.LatestVersionNumber
            Overrides:
              - InstanceType: m5.large
              - InstanceType: m5a.large
              - InstanceType: m4.large
```

**Gestion des interruptions :**
```python
# Handler d'interruption spot
import requests
import signal
import sys

def check_spot_interruption():
    """Vérifie si une interruption est imminente"""
    try:
        response = requests.get(
            'http://169.254.169.254/latest/meta-data/spot/instance-action',
            timeout=1
        )
        if response.status_code == 200:
            return response.json()
    except:
        pass
    return None

def graceful_shutdown(signum, frame):
    """Arrêt propre avant interruption"""
    print("Interruption spot détectée, sauvegarde en cours...")
    save_checkpoint()
    cleanup_resources()
    sys.exit(0)

# Enregistrer le handler
signal.signal(signal.SIGTERM, graceful_shutdown)
```

### 4.3 Auto-scaling intelligent

L'auto-scaling permet d'adapter les ressources à la demande réelle.

#### Types d'auto-scaling

**Horizontal (scale out/in) :**
- Ajouter/retirer des instances
- Préférable pour la haute disponibilité
- Plus efficace énergétiquement

**Vertical (scale up/down) :**
- Changer la taille des instances
- Nécessite généralement un redémarrage
- Utile pour certains workloads

#### Configuration optimale

**Métriques de scaling :**

| Métrique | Seuil scale-out | Seuil scale-in | Cooldown |
|----------|-----------------|----------------|----------|
| CPU | 70% | 30% | 300s |
| Mémoire | 80% | 40% | 300s |
| Requêtes/s | Custom | Custom | 60s |
| Queue depth | > 100 | < 10 | 60s |

**Exemple AWS Auto Scaling :**
```yaml
AutoScalingGroup:
  Type: AWS::AutoScaling::AutoScalingGroup
  Properties:
    MinSize: 1
    MaxSize: 20
    DesiredCapacity: 2
    # Mixed instances pour résilience et économie
    MixedInstancesPolicy:
      InstancesDistribution:
        OnDemandBaseCapacity: 1
        OnDemandPercentageAboveBaseCapacity: 20
        SpotAllocationStrategy: capacity-optimized
      LaunchTemplate:
        LaunchTemplateSpecification:
          LaunchTemplateId: !Ref LaunchTemplate
          Version: !GetAtt LaunchTemplate.LatestVersionNumber
        Overrides:
          - InstanceType: t3.medium
          - InstanceType: t3a.medium

ScaleOutPolicy:
  Type: AWS::AutoScaling::ScalingPolicy
  Properties:
    AutoScalingGroupName: !Ref AutoScalingGroup
    PolicyType: TargetTrackingScaling
    TargetTrackingConfiguration:
      PredefinedMetricSpecification:
        PredefinedMetricType: ASGAverageCPUUtilization
      TargetValue: 60  # Maintenir ~60% d'utilisation
      ScaleInCooldown: 300
      ScaleOutCooldown: 60
```

#### Predictive scaling

Anticiper la charge plutôt que réagir.

```yaml
# AWS Predictive Scaling
PredictiveScalingPolicy:
  Type: AWS::AutoScaling::ScalingPolicy
  Properties:
    AutoScalingGroupName: !Ref AutoScalingGroup
    PolicyType: PredictiveScaling
    PredictiveScalingConfiguration:
      MetricSpecifications:
        - TargetValue: 60
          PredefinedMetricPairSpecification:
            PredefinedMetricType: ASGCPUUtilization
      Mode: ForecastAndScale
      SchedulingBufferTime: 300  # Provisionner 5min à l'avance
```

### 4.4 Scheduling et extinction automatique

#### Environnements de développement

Les environnements de dev/test sont souvent allumés 24/7 mais utilisés 8h/jour, 5j/semaine.

**Calcul d'économie :**
```
Heures/semaine avec scheduling : 8h × 5j = 40h
Heures/semaine sans scheduling : 24h × 7j = 168h
Économie : 76% de réduction
```

**AWS Instance Scheduler :**
```yaml
# Définition d'un schedule
Schedules:
  - Name: office-hours
    Timezone: Europe/Paris
    Periods:
      - BeginTime: "08:00"
        EndTime: "19:00"
        WeekDays: Mon-Fri

# Tags sur les instances
Tags:
  - Key: Schedule
    Value: office-hours
```

**Script Lambda simple :**
```python
import boto3

ec2 = boto3.client('ec2')

def lambda_handler(event, context):
    action = event.get('action', 'stop')

    # Trouver les instances avec le tag Environment=dev
    instances = ec2.describe_instances(
        Filters=[
            {'Name': 'tag:Environment', 'Values': ['dev', 'test']},
            {'Name': 'instance-state-name', 'Values': ['running' if action == 'stop' else 'stopped']}
        ]
    )

    instance_ids = [
        i['InstanceId']
        for r in instances['Reservations']
        for i in r['Instances']
    ]

    if instance_ids:
        if action == 'stop':
            ec2.stop_instances(InstanceIds=instance_ids)
        else:
            ec2.start_instances(InstanceIds=instance_ids)

    return {'stopped_instances': len(instance_ids)}
```

#### Ressources orphelines

**Types de ressources souvent oubliées :**
- Volumes EBS non attachés
- Elastic IPs non associées
- Snapshots anciens
- Load balancers inutilisés
- VPC endpoints dormants

**Script de détection :**
```python
import boto3
from datetime import datetime, timedelta

def find_orphaned_resources():
    ec2 = boto3.client('ec2')
    orphans = []

    # Volumes non attachés
    volumes = ec2.describe_volumes(
        Filters=[{'Name': 'status', 'Values': ['available']}]
    )
    for vol in volumes['Volumes']:
        age = (datetime.now(vol['CreateTime'].tzinfo) - vol['CreateTime']).days
        if age > 7:  # Non attaché depuis 7 jours
            orphans.append({
                'type': 'volume',
                'id': vol['VolumeId'],
                'age_days': age,
                'size_gb': vol['Size'],
                'monthly_cost': vol['Size'] * 0.10  # ~$0.10/GB/mois
            })

    # Elastic IPs non associées
    eips = ec2.describe_addresses()
    for eip in eips['Addresses']:
        if 'AssociationId' not in eip:
            orphans.append({
                'type': 'elastic_ip',
                'id': eip['AllocationId'],
                'monthly_cost': 3.65  # ~$0.005/heure
            })

    return orphans
```

### 4.5 GPU et calcul intensif

Les GPU sont parmi les composants les plus énergivores.

#### Consommation typique

| GPU | TDP | Usage ML typique |
|-----|-----|-----------------|
| NVIDIA T4 | 70W | Inférence |
| NVIDIA A10G | 150W | Training/Inférence |
| NVIDIA A100 | 400W | Training intensif |
| NVIDIA H100 | 700W | LLM Training |

#### Optimisations

**1. Utiliser le bon GPU pour le job :**
```
Inférence simple → T4 (70W) plutôt que A100 (400W)
Économie : 82% d'énergie
```

**2. Mixed precision training :**
```python
# PyTorch avec mixed precision
from torch.cuda.amp import autocast, GradScaler

scaler = GradScaler()

for data, target in dataloader:
    optimizer.zero_grad()

    with autocast():  # FP16 automatique
        output = model(data)
        loss = criterion(output, target)

    scaler.scale(loss).backward()
    scaler.step(optimizer)
    scaler.update()

# Réduction mémoire : ~50%
# Accélération : ~2x
# Énergie : ~50% de moins par epoch
```

**3. Pruning et quantization :**
```python
# Quantization INT8 pour l'inférence
import torch.quantization

model_fp32 = load_model()
model_int8 = torch.quantization.quantize_dynamic(
    model_fp32,
    {torch.nn.Linear},
    dtype=torch.qint8
)

# Réduction taille : ~75%
# Accélération inférence : ~2-4x
# Énergie inférence : ~50-75% de moins
```

**4. Batch processing :**
```python
# Mauvais : inférence unitaire
for item in items:
    result = model.predict(item)  # GPU sous-utilisé

# Bon : batch processing
batch_size = 32
for i in range(0, len(items), batch_size):
    batch = items[i:i+batch_size]
    results = model.predict(batch)  # GPU saturé
```

---

## 5. Optimisation Stockage

### 5.1 Classes de stockage

Chaque provider propose des classes de stockage avec des caractéristiques différentes.

#### AWS S3

| Classe | Usage | Coût/GB/mois | Récupération |
|--------|-------|-------------|--------------|
| Standard | Accès fréquent | $0.023 | Immédiat |
| Intelligent-Tiering | Variable | $0.023 + $0.0025 | Automatique |
| Standard-IA | Accès rare | $0.0125 | Immédiat |
| Glacier Instant | Archive rapide | $0.004 | Millisecondes |
| Glacier Flexible | Archive | $0.0036 | Minutes-heures |
| Glacier Deep Archive | Archive long terme | $0.00099 | 12-48h |

**Impact environnemental :**
- Stockage froid = disques moins sollicités = moins d'énergie
- Mais : accès = réveil des disques = pic d'énergie

#### Stratégie de tiering

```python
# Politique de lifecycle S3
lifecycle_policy = {
    'Rules': [
        {
            'ID': 'TierDownOldData',
            'Status': 'Enabled',
            'Filter': {'Prefix': 'data/'},
            'Transitions': [
                {
                    'Days': 30,
                    'StorageClass': 'STANDARD_IA'
                },
                {
                    'Days': 90,
                    'StorageClass': 'GLACIER_IR'
                },
                {
                    'Days': 365,
                    'StorageClass': 'DEEP_ARCHIVE'
                }
            ],
            'Expiration': {
                'Days': 2555  # 7 ans
            }
        }
    ]
}
```

### 5.2 Politiques de rétention

#### Définir les durées de conservation

| Type de données | Durée suggérée | Réglementation |
|-----------------|---------------|----------------|
| Logs application | 30-90 jours | - |
| Logs sécurité | 1-5 ans | ISO 27001, PCI |
| Données personnelles | Selon finalité | RGPD |
| Factures | 10 ans | Code commerce |
| Contrats | 5-30 ans | Variable |
| Backups | 30-90 jours | - |
| Données métier | Selon besoin | - |

#### Implémentation

**Lifecycle management S3 :**
```yaml
# CloudFormation
LogsBucket:
  Type: AWS::S3::Bucket
  Properties:
    BucketName: my-logs-bucket
    LifecycleConfiguration:
      Rules:
        - Id: DeleteOldLogs
          Status: Enabled
          ExpirationInDays: 90
        - Id: TransitionToGlacier
          Status: Enabled
          Prefix: archives/
          Transitions:
            - StorageClass: GLACIER
              TransitionInDays: 30
```

**Azure Blob Lifecycle :**
```json
{
  "rules": [
    {
      "name": "moveToArchive",
      "type": "Lifecycle",
      "definition": {
        "filters": {
          "blobTypes": ["blockBlob"],
          "prefixMatch": ["data/"]
        },
        "actions": {
          "baseBlob": {
            "tierToCool": {"daysAfterModificationGreaterThan": 30},
            "tierToArchive": {"daysAfterModificationGreaterThan": 90},
            "delete": {"daysAfterModificationGreaterThan": 365}
          }
        }
      }
    }
  ]
}
```

### 5.3 Déduplication et compression

#### Déduplication

**Principe :** Stocker une seule copie des données identiques.

**Niveaux de déduplication :**
- **Fichier** : hash du fichier entier
- **Bloc** : hash de blocs (4KB-64KB)
- **Variable** : blocs de taille variable (plus efficace)

**Gains typiques :**
| Type de données | Ratio de dédup |
|-----------------|---------------|
| Backups VM | 10:1 - 50:1 |
| Fichiers bureautiques | 3:1 - 10:1 |
| Bases de données | 2:1 - 5:1 |
| Médias (uniques) | 1:1 - 1.5:1 |

**Implémentation :**
```python
import hashlib
import boto3

s3 = boto3.client('s3')

def upload_deduplicated(file_path, bucket):
    """Upload avec déduplication côté client"""

    # Calculer le hash
    with open(file_path, 'rb') as f:
        file_hash = hashlib.sha256(f.read()).hexdigest()

    # Vérifier si déjà existant
    try:
        s3.head_object(Bucket=bucket, Key=f'dedup/{file_hash}')
        print(f"Fichier déjà présent, économie de stockage")
        return file_hash
    except:
        pass

    # Upload si nouveau
    s3.upload_file(file_path, bucket, f'dedup/{file_hash}')
    return file_hash
```

#### Compression

**Algorithmes et trade-offs :**

| Algorithme | Ratio | Vitesse | CPU |
|------------|-------|---------|-----|
| LZ4 | 2-3x | Très rapide | Faible |
| Snappy | 2-3x | Très rapide | Faible |
| GZIP | 3-5x | Moyenne | Moyen |
| ZSTD | 3-5x | Rapide | Moyen |
| BZIP2 | 5-8x | Lente | Élevé |
| LZMA | 5-10x | Très lente | Élevé |

**Recommandations :**
- Données chaudes : LZ4/Snappy (vitesse prioritaire)
- Données tièdes : ZSTD niveau 3 (bon compromis)
- Archives : ZSTD niveau 19 ou LZMA (ratio prioritaire)

```python
import zstandard as zstd

# Compression niveau 3 (défaut, bon compromis)
cctx = zstd.ZstdCompressor(level=3)
compressed = cctx.compress(data)

# Compression niveau 19 (max, pour archives)
cctx_max = zstd.ZstdCompressor(level=19)
archive_compressed = cctx_max.compress(data)
```

### 5.4 Archivage intelligent

#### Quand archiver ?

**Critères d'archivage :**
- Dernière modification > X mois
- Dernier accès > Y mois
- Type de données (logs, backups, etc.)
- Obligations légales remplies

**S3 Intelligent-Tiering :**
```yaml
# Activation automatique du tiering intelligent
IntelligentTieringConfiguration:
  Type: AWS::S3::Bucket
  Properties:
    BucketName: my-bucket
    IntelligentTieringConfigurations:
      - Id: EntireBucket
        Status: Enabled
        Tierings:
          - AccessTier: ARCHIVE_ACCESS
            Days: 90
          - AccessTier: DEEP_ARCHIVE_ACCESS
            Days: 180
```

#### Stratégie d'archivage des bases de données

**Pattern : Archive partitioning**
```sql
-- PostgreSQL : partitionnement par date
CREATE TABLE events (
    id BIGSERIAL,
    created_at TIMESTAMP NOT NULL,
    data JSONB
) PARTITION BY RANGE (created_at);

-- Partitions actives (SSD)
CREATE TABLE events_2024 PARTITION OF events
    FOR VALUES FROM ('2024-01-01') TO ('2025-01-01');

-- Anciennes partitions → archivage et suppression
-- Export vers S3 puis DROP
\copy events_2023 TO 's3://archive/events_2023.csv.gz' WITH CSV;
DROP TABLE events_2023;
```

### 5.5 Nettoyage des données orphelines

#### Types de données orphelines

| Type | Source | Détection |
|------|--------|-----------|
| Snapshots EBS | Instances supprimées | API describe-snapshots |
| AMIs obsolètes | Déploiements anciens | Tag "created" |
| Volumes non attachés | Instances terminées | status=available |
| Objects S3 incomplets | Uploads échoués | Lifecycle abort |
| Versions anciennes | S3 versioning | Lifecycle |

#### Script de nettoyage complet

```python
import boto3
from datetime import datetime, timedelta

def cleanup_orphaned_resources(dry_run=True):
    """Nettoie les ressources orphelines AWS"""

    ec2 = boto3.client('ec2')
    s3 = boto3.client('s3')

    savings = {'monthly_cost': 0, 'storage_gb': 0}

    # 1. Snapshots orphelins (> 90 jours, AMI supprimée)
    print("Analyse des snapshots...")
    snapshots = ec2.describe_snapshots(OwnerIds=['self'])['Snapshots']

    for snap in snapshots:
        age = (datetime.now(snap['StartTime'].tzinfo) - snap['StartTime']).days
        if age > 90:
            # Vérifier si l'AMI existe encore
            try:
                ec2.describe_images(ImageIds=[snap.get('Description', '').split()[-1]])
            except:
                # AMI n'existe plus, snapshot orphelin
                savings['storage_gb'] += snap['VolumeSize']
                savings['monthly_cost'] += snap['VolumeSize'] * 0.05

                if not dry_run:
                    ec2.delete_snapshot(SnapshotId=snap['SnapshotId'])
                print(f"  Snapshot orphelin: {snap['SnapshotId']} ({snap['VolumeSize']}GB, {age} jours)")

    # 2. Volumes non attachés (> 7 jours)
    print("\nAnalyse des volumes...")
    volumes = ec2.describe_volumes(
        Filters=[{'Name': 'status', 'Values': ['available']}]
    )['Volumes']

    for vol in volumes:
        age = (datetime.now(vol['CreateTime'].tzinfo) - vol['CreateTime']).days
        if age > 7:
            savings['storage_gb'] += vol['Size']
            savings['monthly_cost'] += vol['Size'] * 0.10

            if not dry_run:
                ec2.delete_volume(VolumeId=vol['VolumeId'])
            print(f"  Volume orphelin: {vol['VolumeId']} ({vol['Size']}GB, {age} jours)")

    # 3. Cleanup multipart uploads incomplets
    print("\nAnalyse des uploads S3 incomplets...")
    buckets = s3.list_buckets()['Buckets']

    for bucket in buckets:
        try:
            uploads = s3.list_multipart_uploads(Bucket=bucket['Name'])
            for upload in uploads.get('Uploads', []):
                if not dry_run:
                    s3.abort_multipart_upload(
                        Bucket=bucket['Name'],
                        Key=upload['Key'],
                        UploadId=upload['UploadId']
                    )
                print(f"  Upload incomplet: {bucket['Name']}/{upload['Key']}")
        except:
            pass

    print(f"\nRésumé:")
    print(f"  Stockage récupérable: {savings['storage_gb']} GB")
    print(f"  Économie mensuelle: ${savings['monthly_cost']:.2f}")

    return savings

# Exécution en mode dry-run d'abord
cleanup_orphaned_resources(dry_run=True)
```

---

## 6. Optimisation Réseau

### 6.1 Réduction des transferts

Chaque octet transféré consomme de l'énergie à travers le réseau.

#### Coût environnemental du réseau

**Énergie par GB transféré :**
- Réseau local : ~0.01 kWh/GB
- Intra-région : ~0.02 kWh/GB
- Inter-régions : ~0.05 kWh/GB
- Intercontinental : ~0.1 kWh/GB

#### Stratégies de réduction

**1. Éliminer les transferts inutiles :**
```python
# Mauvais : transférer puis filtrer
all_data = fetch_from_remote_db(table='events')
filtered = [e for e in all_data if e['type'] == 'click']

# Bon : filtrer à la source
filtered = fetch_from_remote_db(
    table='events',
    where="type = 'click'"
)
```

**2. Pagination efficace :**
```python
# Mauvais : récupérer tout
response = api.get('/users')  # 10 000 users, 10 MB

# Bon : pagination avec curseur
def get_all_users():
    cursor = None
    while True:
        response = api.get('/users', params={
            'limit': 100,
            'cursor': cursor
        })
        yield from response['users']
        cursor = response.get('next_cursor')
        if not cursor:
            break
```

**3. Projections (sélection de champs) :**
```graphql
# Mauvais : récupérer tout l'objet
query {
  user(id: 123) {
    id name email avatar bio followers following posts comments ...
  }
}

# Bon : seulement ce dont on a besoin
query {
  user(id: 123) {
    id
    name
  }
}
```

### 6.2 CDN et caching

#### Content Delivery Network

Les CDN réduisent la distance entre le contenu et l'utilisateur.

**Gains environnementaux :**
- Réduction distance : ~10x moins d'énergie réseau
- Cache hits : 0 transfert depuis l'origine
- Compression edge : processing distribué

**Configuration CloudFront optimisée :**
```yaml
CloudFrontDistribution:
  Type: AWS::CloudFront::Distribution
  Properties:
    DistributionConfig:
      DefaultCacheBehavior:
        # Cache agressif pour assets statiques
        CachePolicyId: !Ref AggressiveCachePolicy
        # Compression automatique
        Compress: true
        ViewerProtocolPolicy: redirect-to-https

      # Origins avec failover
      Origins:
        - Id: S3Origin
          DomainName: !GetAtt Bucket.DomainName
          S3OriginConfig:
            OriginAccessIdentity: !Sub origin-access-identity/cloudfront/${OAI}

      # Prix class : utiliser moins de PoP mais plus proches
      PriceClass: PriceClass_100  # US, Canada, Europe

AggressiveCachePolicy:
  Type: AWS::CloudFront::CachePolicy
  Properties:
    CachePolicyConfig:
      Name: AggressiveCache
      DefaultTTL: 86400      # 1 jour
      MaxTTL: 31536000       # 1 an
      MinTTL: 1
      ParametersInCacheKeyAndForwardedToOrigin:
        CookiesConfig:
          CookieBehavior: none
        HeadersConfig:
          HeaderBehavior: none
        QueryStringsConfig:
          QueryStringBehavior: none
```

#### Headers de cache

```nginx
# Configuration Nginx optimale
location /static/ {
    # Assets statiques : cache long
    expires 1y;
    add_header Cache-Control "public, immutable";
}

location /api/ {
    # API : cache court avec revalidation
    add_header Cache-Control "public, max-age=60, stale-while-revalidate=300";
    add_header ETag $request_uri;
}

location / {
    # HTML : pas de cache ou très court
    add_header Cache-Control "no-cache, must-revalidate";
}
```

### 6.3 Compression des données

#### HTTP compression

```nginx
# Configuration Nginx
gzip on;
gzip_vary on;
gzip_proxied any;
gzip_comp_level 6;
gzip_types
    text/plain
    text/css
    text/xml
    text/javascript
    application/json
    application/javascript
    application/xml
    application/rss+xml
    image/svg+xml;

# Brotli (meilleur ratio, support moderne)
brotli on;
brotli_comp_level 6;
brotli_types
    text/plain
    text/css
    text/xml
    text/javascript
    application/json
    application/javascript
    application/xml;
```

**Gains typiques :**

| Type | Taille originale | Gzip | Brotli |
|------|-----------------|------|--------|
| HTML | 100 KB | 20 KB | 17 KB |
| CSS | 150 KB | 25 KB | 20 KB |
| JavaScript | 500 KB | 150 KB | 120 KB |
| JSON | 200 KB | 30 KB | 25 KB |

#### Compression applicative

```python
# Compression des payloads API
import gzip
import json
from flask import Flask, Response

app = Flask(__name__)

@app.route('/api/data')
def get_data():
    data = generate_large_data()
    json_data = json.dumps(data).encode('utf-8')

    # Compresser si le client l'accepte
    if 'gzip' in request.headers.get('Accept-Encoding', ''):
        compressed = gzip.compress(json_data)
        return Response(
            compressed,
            headers={
                'Content-Encoding': 'gzip',
                'Content-Type': 'application/json'
            }
        )

    return Response(json_data, content_type='application/json')
```

### 6.4 Choix des régions

#### Critères de sélection

| Critère | Impact | Priorité |
|---------|--------|----------|
| Proximité utilisateurs | Latence, réseau | ⭐⭐⭐ |
| Mix électrique | Émissions | ⭐⭐⭐ |
| Réglementations | RGPD, souveraineté | ⭐⭐⭐ |
| Coût | Budget | ⭐⭐ |
| Services disponibles | Fonctionnalités | ⭐⭐ |

#### Régions recommandées par zone

**Europe :**
| Région | Provider | Intensité carbone | Note |
|--------|----------|------------------|------|
| Stockholm | AWS, GCP, Azure | 20-40 gCO2/kWh | ⭐⭐⭐ |
| Finland | GCP | 80-120 gCO2/kWh | ⭐⭐⭐ |
| Paris | AWS, GCP, Azure | 50-80 gCO2/kWh | ⭐⭐⭐ |
| Dublin | AWS, GCP, Azure | 300-400 gCO2/kWh | ⭐ |
| Francfort | AWS, GCP, Azure | 350-450 gCO2/kWh | ⭐ |

**Amérique du Nord :**
| Région | Provider | Intensité carbone | Note |
|--------|----------|------------------|------|
| Montréal | AWS, GCP, Azure | 20-40 gCO2/kWh | ⭐⭐⭐ |
| Oregon | AWS, GCP | 80-150 gCO2/kWh | ⭐⭐ |
| N. Virginia | AWS | 350-400 gCO2/kWh | ⭐ |

#### Multi-région intelligente

```python
# Routage carbon-aware
import requests

REGION_CARBON = {
    'eu-north-1': 30,     # Stockholm
    'eu-west-3': 60,      # Paris
    'ca-central-1': 30,   # Montréal
    'us-east-1': 380,     # N. Virginia
}

def get_optimal_region(user_location, urgency='normal'):
    """Sélectionne la région optimale selon localisation et carbone"""

    candidates = get_nearby_regions(user_location)

    if urgency == 'low':
        # Prioriser le carbone
        return min(candidates, key=lambda r: REGION_CARBON.get(r, 500))
    else:
        # Équilibrer latence et carbone
        scores = {}
        for region in candidates:
            latency = get_latency(user_location, region)
            carbon = REGION_CARBON.get(region, 500)
            scores[region] = latency * 0.7 + carbon * 0.3

        return min(scores, key=scores.get)
```

### 6.5 Peering et interconnexions

#### Types de connexions

| Type | Latence | Coût | Énergie |
|------|---------|------|---------|
| Internet public | Variable | Egress fees | Élevée |
| VPC Peering | Faible | Transfert inter-region | Moyenne |
| Direct Connect / Dedicated Interconnect | Très faible | Fixe + transfert | Faible |
| PrivateLink / Private Service Connect | Faible | Par heure + data | Moyenne |

#### Optimisations

**VPC Peering pour réduire l'egress :**
```yaml
# CloudFormation : VPC Peering
VPCPeeringConnection:
  Type: AWS::EC2::VPCPeeringConnection
  Properties:
    VpcId: !Ref VPC1
    PeerVpcId: !Ref VPC2
    PeerRegion: eu-west-1

# Routes pour utiliser le peering
Route:
  Type: AWS::EC2::Route
  Properties:
    RouteTableId: !Ref RouteTable1
    DestinationCidrBlock: 10.1.0.0/16
    VpcPeeringConnectionId: !Ref VPCPeeringConnection
```

**S3 Gateway Endpoint (gratuit, plus efficace) :**
```yaml
S3Endpoint:
  Type: AWS::EC2::VPCEndpoint
  Properties:
    VpcId: !Ref VPC
    ServiceName: !Sub com.amazonaws.${AWS::Region}.s3
    VpcEndpointType: Gateway
    RouteTableIds:
      - !Ref PrivateRouteTable
```

---

## 7. Kubernetes et conteneurs

### 7.1 Optimisation des clusters

Kubernetes peut être très efficient ou très gaspilleur selon sa configuration.

#### Dimensionnement du control plane

**Cluster trop petit :**
- Overhead proportionnellement élevé
- Moins d'opportunités de bin packing

**Cluster trop grand :**
- Ressources sous-utilisées
- Coût de gestion élevé

**Recommandations :**
| Workloads | Nodes recommandés | Note |
|-----------|-------------------|------|
| < 10 pods | Serverless (Fargate, Cloud Run) | Pas besoin de cluster |
| 10-50 pods | 3-5 nodes | Petit cluster |
| 50-200 pods | 5-20 nodes | Cluster moyen |
| > 200 pods | 20+ nodes | Grand cluster, multi-AZ |

#### Node pools optimisés

```yaml
# GKE : Node pools différenciés
apiVersion: container.google.com/v1
kind: NodePool
metadata:
  name: spot-pool
spec:
  # Instances spot pour workloads tolérants
  config:
    preemptible: true
    machineType: e2-medium
  autoscaling:
    enabled: true
    minNodeCount: 0
    maxNodeCount: 50
  management:
    autoRepair: true
    autoUpgrade: true
---
apiVersion: container.google.com/v1
kind: NodePool
metadata:
  name: stable-pool
spec:
  # Instances stables pour workloads critiques
  config:
    machineType: e2-medium
  autoscaling:
    enabled: true
    minNodeCount: 2
    maxNodeCount: 10
```

### 7.2 Resource requests et limits

#### Comprendre requests vs limits

```
┌─────────────────────────────────────────────────────────────┐
│                         Node (4 CPU, 8 GB)                 │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐        │
│  │   Pod A     │  │   Pod B     │  │   Pod C     │        │
│  │ req: 500m   │  │ req: 1000m  │  │ req: 500m   │        │
│  │ lim: 1000m  │  │ lim: 2000m  │  │ lim: 1000m  │        │
│  └─────────────┘  └─────────────┘  └─────────────┘        │
│                                                            │
│  Requests totaux : 2000m (50% du node)                    │
│  Limits totaux : 4000m (100% du node, overcommit OK)      │
└─────────────────────────────────────────────────────────────┘
```

**Requests :** ressources garanties, utilisées pour le scheduling
**Limits :** maximum autorisé, peut être dépassé (CPU throttling, OOM kill)

#### Configuration optimale

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: optimized-app
spec:
  containers:
  - name: app
    image: myapp:latest
    resources:
      requests:
        # Basé sur l'utilisation P50
        cpu: "200m"
        memory: "256Mi"
      limits:
        # Basé sur l'utilisation P99 + marge
        cpu: "500m"       # Soft limit (throttling)
        memory: "512Mi"   # Hard limit (OOM kill)
```

#### Vertical Pod Autoscaler (VPA)

Le VPA ajuste automatiquement les requests/limits.

```yaml
apiVersion: autoscaling.k8s.io/v1
kind: VerticalPodAutoscaler
metadata:
  name: my-app-vpa
spec:
  targetRef:
    apiVersion: "apps/v1"
    kind: Deployment
    name: my-app
  updatePolicy:
    updateMode: "Auto"  # Ou "Off" pour recommandations seules
  resourcePolicy:
    containerPolicies:
    - containerName: '*'
      minAllowed:
        cpu: 50m
        memory: 64Mi
      maxAllowed:
        cpu: 2
        memory: 4Gi
```

### 7.3 Bin packing

Le bin packing optimise le placement des pods pour maximiser l'utilisation des nodes.

#### Scheduler par défaut vs optimisé

```yaml
# Scheduler profile optimisé pour l'efficacité
apiVersion: kubescheduler.config.k8s.io/v1
kind: KubeSchedulerConfiguration
profiles:
- schedulerName: default-scheduler
  plugins:
    score:
      enabled:
      # Favoriser les nodes déjà utilisés (bin packing)
      - name: NodeResourcesBalancedAllocation
        weight: 1
      - name: NodeResourcesFit
        weight: 3  # Poids élevé pour le packing
      disabled:
      # Désactiver le spreading par défaut
      - name: NodeResourcesLeastAllocated
```

#### Pod topology spread

```yaml
apiVersion: apps/v1
kind: Deployment
spec:
  template:
    spec:
      topologySpreadConstraints:
      # Étaler sur les zones pour la résilience
      - maxSkew: 1
        topologyKey: topology.kubernetes.io/zone
        whenUnsatisfiable: ScheduleAnyway
        labelSelector:
          matchLabels:
            app: myapp
      # Mais packer sur les nodes dans chaque zone
      - maxSkew: 3
        topologyKey: kubernetes.io/hostname
        whenUnsatisfiable: ScheduleAnyway
        labelSelector:
          matchLabels:
            app: myapp
```

### 7.4 Spot nodes et preemption

#### Configuration des spot nodes

**EKS avec spot :**
```yaml
apiVersion: eksctl.io/v1alpha5
kind: ClusterConfig
metadata:
  name: my-cluster
  region: eu-west-1

managedNodeGroups:
  - name: spot-workers
    instanceTypes:
      - m5.large
      - m5a.large
      - m5n.large
    spot: true
    minSize: 0
    maxSize: 50
    desiredCapacity: 5
    labels:
      node-type: spot
    taints:
      - key: spot
        value: "true"
        effect: NoSchedule
```

**Toleration pour les pods :**
```yaml
apiVersion: apps/v1
kind: Deployment
spec:
  template:
    spec:
      tolerations:
      - key: "spot"
        operator: "Equal"
        value: "true"
        effect: "NoSchedule"
      affinity:
        nodeAffinity:
          preferredDuringSchedulingIgnoredDuringExecution:
          - weight: 100
            preference:
              matchExpressions:
              - key: node-type
                operator: In
                values:
                - spot
```

#### Gestion de la preemption

```yaml
# PodDisruptionBudget pour les migrations
apiVersion: policy/v1
kind: PodDisruptionBudget
metadata:
  name: my-app-pdb
spec:
  minAvailable: 2  # Toujours au moins 2 pods
  selector:
    matchLabels:
      app: my-app
```

### 7.5 Outils de monitoring carbone

#### Kepler (Kubernetes Efficient Power Level Exporter)

Kepler mesure la consommation énergétique des pods.

**Installation :**
```bash
# Helm
helm repo add kepler https://sustainable-computing-io.github.io/kepler-helm-chart
helm install kepler kepler/kepler \
  --namespace kepler \
  --create-namespace
```

**Métriques exposées :**
```promql
# Énergie par pod (joules)
kepler_container_joules_total{pod_name="my-app"}

# Puissance moyenne par namespace (watts)
rate(kepler_container_joules_total{namespace="production"}[5m])

# Top 10 pods les plus consommateurs
topk(10, rate(kepler_container_joules_total[1h]))
```

**Dashboard Grafana :**
```json
{
  "panels": [
    {
      "title": "Energy by Namespace",
      "targets": [
        {
          "expr": "sum(rate(kepler_container_joules_total[5m])) by (namespace)",
          "legendFormat": "{{namespace}}"
        }
      ]
    },
    {
      "title": "CO2 Emissions (estimated)",
      "targets": [
        {
          "expr": "sum(rate(kepler_container_joules_total[5m])) * 0.5 / 3600 * 100",
          "legendFormat": "gCO2/hour"
        }
      ]
    }
  ]
}
```

#### Kube-green

Kube-green permet d'éteindre automatiquement les workloads hors heures.

**Installation :**
```bash
kubectl apply -f https://github.com/kube-green/kube-green/releases/latest/download/kube-green.yaml
```

**Configuration :**
```yaml
apiVersion: kube-green.com/v1alpha1
kind: SleepInfo
metadata:
  name: development-sleep
  namespace: development
spec:
  weekdays: "1-5"     # Lundi à vendredi
  sleepAt: "19:00"    # Éteindre à 19h
  wakeUpAt: "08:00"   # Rallumer à 8h
  timeZone: "Europe/Paris"
  suspendCronJobs: true
  excludeRef:
    - apiVersion: "apps/v1"
      kind: Deployment
      name: critical-service  # Ne pas éteindre
```

#### Carbon Aware KEDA Scaler

Scaling basé sur l'intensité carbone.

```yaml
apiVersion: keda.sh/v1alpha1
kind: ScaledObject
metadata:
  name: carbon-aware-scaler
spec:
  scaleTargetRef:
    name: batch-processor
  minReplicaCount: 0
  maxReplicaCount: 10
  triggers:
  - type: carbon-aware
    metadata:
      # Scale up quand le carbone est bas
      carbonIntensityThreshold: "100"
      region: "FR"
      # Scale down quand le carbone est haut
      scalingStrategy: "low-carbon-first"
```

---

## 8. FinOps et GreenOps

### 8.1 Alignement coûts et carbone

Dans la majorité des cas, réduire les coûts cloud = réduire les émissions.

#### Corrélation coût/carbone

| Action | Impact coût | Impact carbone | Aligné ? |
|--------|-------------|----------------|----------|
| Right-sizing | ⬇️ | ⬇️ | ✅ |
| Spot instances | ⬇️ | ⬇️ | ✅ |
| Extinction auto | ⬇️ | ⬇️ | ✅ |
| Région moins chère | ⬇️ | ⬆️ possible | ⚠️ |
| Reserved instances | ⬇️ | = | ⚠️ |
| Archivage données | ⬇️ | ⬇️ | ✅ |

#### Cas de désalignement

**Région moins chère mais plus carbonée :**
```python
# Exemple : us-east-1 vs eu-north-1
costs = {
    'us-east-1': 0.10,      # $/heure
    'eu-north-1': 0.12,     # $/heure (+20%)
}

carbon = {
    'us-east-1': 380,       # gCO2/kWh
    'eu-north-1': 30,       # gCO2/kWh (-92%)
}

# Prix du carbone implicite :
# Δ coût = $0.02/heure = $175/an
# Δ carbone = 350 gCO2/kWh × 0.5 kWh × 8760h = 1533 kgCO2/an
# Prix implicite = $175 / 1.5 tCO2 = $117/tCO2

# Comparaison : marché carbone EU ~€80-100/tCO2
# Conclusion : le surcoût est justifiable
```

### 8.2 Tagging et allocation

#### Stratégie de tagging

```yaml
# Tags obligatoires pour le suivi
mandatory_tags:
  - Environment: [production, staging, development, test]
  - Team: [platform, frontend, backend, data, ml]
  - Project: <project-name>
  - CostCenter: <cost-center-id>
  - Owner: <email>

# Tags recommandés pour l'optimisation
recommended_tags:
  - AutoShutdown: [true, false]
  - DataClassification: [public, internal, confidential]
  - SLA: [gold, silver, bronze]
```

**Enforcement avec AWS Config :**
```yaml
# Règle AWS Config pour les tags obligatoires
ConfigRule:
  Type: AWS::Config::ConfigRule
  Properties:
    ConfigRuleName: required-tags
    InputParameters:
      tag1Key: Environment
      tag2Key: Team
      tag3Key: Project
    Source:
      Owner: AWS
      SourceIdentifier: REQUIRED_TAGS
```

#### Allocation des coûts et émissions

```python
# Script d'allocation par équipe
import boto3
import pandas as pd

def allocate_emissions_by_team():
    ce = boto3.client('ce')

    # Coûts par tag Team
    response = ce.get_cost_and_usage(
        TimePeriod={'Start': '2024-01-01', 'End': '2024-12-31'},
        Granularity='MONTHLY',
        Metrics=['UnblendedCost'],
        GroupBy=[{'Type': 'TAG', 'Key': 'Team'}]
    )

    # Convertir coûts en émissions (approximation)
    EMISSION_FACTOR = 0.0004  # kgCO2e/$

    allocations = []
    for period in response['ResultsByTime']:
        for group in period['Groups']:
            team = group['Keys'][0].replace('Team$', '') or 'Untagged'
            cost = float(group['Metrics']['UnblendedCost']['Amount'])
            emissions = cost * EMISSION_FACTOR

            allocations.append({
                'month': period['TimePeriod']['Start'],
                'team': team,
                'cost_usd': cost,
                'emissions_kgco2e': emissions
            })

    return pd.DataFrame(allocations)
```

### 8.3 Budgets et alertes

#### Configuration des alertes

**AWS Budgets :**
```yaml
Budget:
  Type: AWS::Budgets::Budget
  Properties:
    Budget:
      BudgetName: monthly-limit
      BudgetLimit:
        Amount: 10000
        Unit: USD
      BudgetType: COST
      TimeUnit: MONTHLY
    NotificationsWithSubscribers:
      - Notification:
          NotificationType: ACTUAL
          ComparisonOperator: GREATER_THAN
          Threshold: 80
        Subscribers:
          - SubscriptionType: EMAIL
            Address: finops@company.com
      - Notification:
          NotificationType: FORECASTED
          ComparisonOperator: GREATER_THAN
          Threshold: 100
        Subscribers:
          - SubscriptionType: SNS
            Address: !Ref AlertTopic
```

#### Alertes carbone personnalisées

```python
# Lambda pour alertes carbone
import boto3
import json

sns = boto3.client('sns')

def lambda_handler(event, context):
    # Récupérer les métriques carbone
    carbon_this_month = get_carbon_footprint_mtd()
    carbon_last_month = get_carbon_footprint_last_month()

    # Calculer la tendance
    trend = (carbon_this_month / carbon_last_month - 1) * 100

    # Alerter si augmentation > 10%
    if trend > 10:
        sns.publish(
            TopicArn='arn:aws:sns:eu-west-1:123456789:carbon-alerts',
            Subject='⚠️ Augmentation des émissions cloud',
            Message=json.dumps({
                'current_month_kgco2e': carbon_this_month,
                'last_month_kgco2e': carbon_last_month,
                'trend_percent': trend,
                'recommended_actions': [
                    'Vérifier les nouvelles ressources créées',
                    'Analyser les pics de consommation',
                    'Revoir le right-sizing'
                ]
            })
        )

    return {'statusCode': 200}
```

### 8.4 Culture FinOps/GreenOps

#### Principes FinOps

1. **Équipes responsabilisées** : chaque équipe voit et maîtrise ses coûts
2. **Décisions basées sur la valeur** : ROI, pas juste réduction
3. **Collaboration** : Engineering + Finance + Business
4. **Rapports centralisés** : visibilité pour tous
5. **Amélioration continue** : itérations régulières

#### Intégrer le carbone

**Tableau de bord unifié :**
```
┌─────────────────────────────────────────────────────────────┐
│                    Dashboard GreenOps                       │
├──────────────────────┬──────────────────────────────────────┤
│   Coût ce mois       │   Émissions ce mois                 │
│   $45,230            │   12.4 tCO2e                        │
│   ▼ 8% vs mois préc. │   ▼ 12% vs mois précédent          │
├──────────────────────┴──────────────────────────────────────┤
│   Top 5 équipes par émissions                               │
│   1. Data Platform    4.2 tCO2e  ████████████               │
│   2. ML Training      3.1 tCO2e  █████████                  │
│   3. Backend          2.8 tCO2e  ████████                   │
│   4. Frontend         1.5 tCO2e  ████                       │
│   5. DevOps           0.8 tCO2e  ██                         │
├─────────────────────────────────────────────────────────────┤
│   Actions recommandées                                      │
│   • 23 instances sous-utilisées (économie: 2.1 tCO2e/mois) │
│   • 145 GB de snapshots obsolètes                          │
│   • 3 environnements de dev actifs 24/7                    │
└─────────────────────────────────────────────────────────────┘
```

#### Rituels GreenOps

| Rituel | Fréquence | Participants | Objectif |
|--------|-----------|--------------|----------|
| Revue coûts/carbone | Hebdo | Tech leads | Suivi tendances |
| Optimisation sprint | Mensuel | Engineering | Actions concrètes |
| Revue architecture | Trimestriel | Architects | Décisions structurelles |
| Bilan RSE | Annuel | Direction | Reporting, objectifs |

---

## 9. Multi-cloud et hybride

### 9.1 Stratégies de placement

#### Critères de placement des workloads

```
┌─────────────────────────────────────────────────────────────┐
│              Matrice de placement workload                  │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                  Criticité business                         │
│                  Faible ◀────────▶ Élevée                  │
│              ┌─────────┬─────────┬─────────┐               │
│   Intensité │ Public  │ Public  │ Public  │               │
│   carbone   │ cloud   │ cloud   │ cloud + │               │
│   Faible    │ région  │ région  │ hybride │               │
│              │ optimale│ optimale│         │               │
│              ├─────────┼─────────┼─────────┤               │
│   Moyenne   │ Public  │ Public  │ Multi-  │               │
│              │ cloud   │ cloud   │ cloud   │               │
│              │ standard│ managed │         │               │
│              ├─────────┼─────────┼─────────┤               │
│   Élevée    │ Batch   │ Différer│ On-prem │               │
│   (urgent)  │ différé │ si poss.│ si dispo│               │
│              └─────────┴─────────┴─────────┘               │
└─────────────────────────────────────────────────────────────┘
```

#### Placement carbon-aware

```python
# Service de placement intelligent
class CarbonAwarePlacement:
    def __init__(self):
        self.providers = ['aws', 'gcp', 'azure']
        self.regions = self._load_regions()

    def get_optimal_placement(self, workload):
        """Détermine le meilleur placement pour un workload"""

        candidates = []

        for provider in self.providers:
            for region in self.regions[provider]:
                # Vérifier la disponibilité des services requis
                if not self._check_service_availability(workload, provider, region):
                    continue

                # Calculer le score
                score = self._calculate_score(workload, provider, region)
                candidates.append({
                    'provider': provider,
                    'region': region,
                    'score': score
                })

        # Trier par score (plus bas = meilleur)
        candidates.sort(key=lambda x: x['score'])
        return candidates[:3]  # Top 3

    def _calculate_score(self, workload, provider, region):
        """Score composite : carbone, latence, coût"""

        carbon = self._get_carbon_intensity(region)
        latency = self._get_latency(workload.user_location, region)
        cost = self._get_cost(workload, provider, region)

        # Pondération selon le type de workload
        if workload.type == 'batch':
            # Batch : carbone prioritaire
            return carbon * 0.6 + cost * 0.3 + latency * 0.1
        elif workload.type == 'interactive':
            # Interactif : latence prioritaire
            return latency * 0.5 + carbon * 0.3 + cost * 0.2
        else:
            # Défaut : équilibré
            return carbon * 0.4 + cost * 0.4 + latency * 0.2
```

### 9.2 Portabilité

#### Éviter le vendor lock-in

**Niveaux d'abstraction :**

| Niveau | Exemple | Portabilité |
|--------|---------|-------------|
| IaaS | EC2, Compute Engine | Moyenne |
| Containers | EKS, GKE, AKS | Bonne |
| Kubernetes natif | K8s vanilla | Excellente |
| Serverless | Lambda, Cloud Functions | Faible |
| Services managés | RDS, BigQuery | Très faible |

**Stratégie recommandée :**
```
┌─────────────────────────────────────────────────────────────┐
│              Architecture portable                          │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   Application Layer                                         │
│   ┌─────────────────────────────────────────────────────┐  │
│   │  Application Code (framework agnostique)            │  │
│   │  └─ Abstraction layer (interfaces)                  │  │
│   └─────────────────────────────────────────────────────┘  │
│                          │                                  │
│   Infrastructure Layer   │                                  │
│   ┌─────────────────────────────────────────────────────┐  │
│   │  Terraform / Pulumi (multi-cloud)                   │  │
│   │  └─ Kubernetes (portable)                           │  │
│   │      └─ Containers (standards OCI)                  │  │
│   └─────────────────────────────────────────────────────┘  │
│                          │                                  │
│   Provider Layer         │                                  │
│   ┌────────┐ ┌────────┐ ┌────────┐                        │
│   │  AWS   │ │  GCP   │ │ Azure  │                        │
│   └────────┘ └────────┘ └────────┘                        │
└─────────────────────────────────────────────────────────────┘
```

#### Infrastructure as Code multi-cloud

```hcl
# Terraform avec abstraction provider
variable "cloud_provider" {
  default = "aws"
}

module "kubernetes" {
  source = "./modules/kubernetes/${var.cloud_provider}"

  cluster_name = "production"
  node_count   = 5
  node_type    = "medium"
  region       = var.region
}

# Module AWS
# modules/kubernetes/aws/main.tf
resource "aws_eks_cluster" "main" {
  name     = var.cluster_name
  role_arn = aws_iam_role.cluster.arn
  # ...
}

# Module GCP
# modules/kubernetes/gcp/main.tf
resource "google_container_cluster" "main" {
  name     = var.cluster_name
  location = var.region
  # ...
}
```

### 9.3 Hybride : cloud + on-premise

#### Cas d'usage de l'hybride

| Cas | Cloud | On-premise |
|-----|-------|------------|
| Données sensibles | Processing | Stockage |
| Pics de charge | Burst | Base load |
| Legacy | Nouvelles apps | Apps existantes |
| Souveraineté | Services globaux | Données locales |

#### Architecture hybride type

```yaml
# Kubernetes multi-cluster hybride
apiVersion: federation.k8s.io/v1beta1
kind: KubeFedCluster
metadata:
  name: on-prem-cluster
spec:
  apiEndpoint: https://k8s.internal.company.com
  secretRef:
    name: on-prem-kubeconfig
---
apiVersion: federation.k8s.io/v1beta1
kind: KubeFedCluster
metadata:
  name: cloud-cluster
spec:
  apiEndpoint: https://xxx.eks.amazonaws.com
  secretRef:
    name: eks-kubeconfig
```

**Placement intelligent :**
```yaml
# Deployer sur on-prem par défaut, cloud en burst
apiVersion: types.kubefed.io/v1beta1
kind: FederatedDeployment
metadata:
  name: my-app
spec:
  template:
    spec:
      replicas: 10
  placement:
    clusters:
    - name: on-prem-cluster
    - name: cloud-cluster
  overrides:
  - clusterName: on-prem-cluster
    clusterOverrides:
    - path: "/spec/replicas"
      value: 8  # 80% on-prem
  - clusterName: cloud-cluster
    clusterOverrides:
    - path: "/spec/replicas"
      value: 2  # 20% cloud (burst)
```

---

## 10. Cas pratiques

### 10.1 Migration cloud durable

#### Étape 1 : Assessment initial

**Inventaire de l'existant :**
```python
# Script d'inventaire simplifié
def assess_current_infrastructure():
    inventory = {
        'servers': [],
        'storage': [],
        'network': [],
        'applications': []
    }

    # Collecter les données
    for server in get_servers():
        inventory['servers'].append({
            'name': server.name,
            'cpu_cores': server.cpu,
            'memory_gb': server.memory,
            'utilization_avg': get_avg_utilization(server, days=30),
            'utilization_peak': get_peak_utilization(server, days=30),
            'power_watts': estimate_power(server),
            'location': server.datacenter
        })

    # Calculer l'empreinte actuelle
    total_power = sum(s['power_watts'] for s in inventory['servers'])
    carbon_factor = get_carbon_factor(inventory['servers'][0]['location'])
    annual_emissions = total_power * 8760 * carbon_factor / 1000  # kgCO2e

    return {
        'inventory': inventory,
        'current_emissions_kg': annual_emissions,
        'avg_utilization': statistics.mean(s['utilization_avg'] for s in inventory['servers'])
    }
```

#### Étape 2 : Planification de la migration

**Matrice de décision :**
```
┌─────────────────────────────────────────────────────────────┐
│              Stratégie de migration par workload            │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   Complexité modification                                   │
│   Faible ◀─────────────────────────▶ Élevée               │
│                                                             │
│   ┌─────────────┬─────────────┬─────────────┐             │
│   │  Rehost     │ Replatform  │  Retire     │  Bénéfice   │
│   │  (lift &    │  (lift &    │  (éliminer) │  cloud      │
│   │  shift)     │  reshape)   │             │  Faible     │
│   ├─────────────┼─────────────┼─────────────┤             │
│   │  Replatform │ Refactor    │  Retain     │             │
│   │             │  (re-       │  (garder    │             │
│   │             │  architect) │  on-prem)   │             │
│   ├─────────────┼─────────────┼─────────────┤             │
│   │  Refactor   │ Rebuild     │  Replace    │  Bénéfice   │
│   │             │  (réécrire) │  (SaaS)     │  cloud      │
│   └─────────────┴─────────────┴─────────────┘  Élevé      │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

#### Étape 3 : Migration par vagues

**Wave planning :**
```yaml
migration_waves:
  wave_1:
    name: "Quick wins"
    duration: "1 mois"
    workloads:
      - type: "static_websites"
        strategy: "rehost"
        target: "S3 + CloudFront"
      - type: "dev_environments"
        strategy: "replatform"
        target: "EKS Spot"
    expected_savings: "30%"

  wave_2:
    name: "Core applications"
    duration: "3 mois"
    workloads:
      - type: "api_services"
        strategy: "refactor"
        target: "EKS + Fargate"
      - type: "databases"
        strategy: "replatform"
        target: "RDS"
    expected_savings: "40%"

  wave_3:
    name: "Legacy modernization"
    duration: "6 mois"
    workloads:
      - type: "monolith_apps"
        strategy: "refactor"
        target: "Microservices EKS"
    expected_savings: "50%"
```

### 10.2 Optimisation infrastructure existante

#### Audit rapide (1 semaine)

**Jour 1-2 : Collecte des données**
```bash
# Script de collecte AWS
#!/bin/bash

# Instances EC2
aws ec2 describe-instances \
  --query 'Reservations[*].Instances[*].[InstanceId,InstanceType,State.Name,Tags[?Key==`Name`].Value|[0]]' \
  --output table > ec2_inventory.txt

# Utilisation CloudWatch (14 jours)
for instance in $(aws ec2 describe-instances --query 'Reservations[*].Instances[*].InstanceId' --output text); do
  aws cloudwatch get-metric-statistics \
    --namespace AWS/EC2 \
    --metric-name CPUUtilization \
    --dimensions Name=InstanceId,Value=$instance \
    --start-time $(date -d '14 days ago' --iso-8601=seconds) \
    --end-time $(date --iso-8601=seconds) \
    --period 3600 \
    --statistics Average Maximum \
    --output json >> cpu_stats.json
done

# Recommandations Compute Optimizer
aws compute-optimizer get-ec2-instance-recommendations \
  --output json > recommendations.json
```

**Jour 3-4 : Analyse**
```python
# Analyse des résultats
import json
import pandas as pd

def analyze_optimization_opportunities():
    # Charger les recommandations
    with open('recommendations.json') as f:
        recommendations = json.load(f)

    # Charger les stats CPU
    with open('cpu_stats.json') as f:
        cpu_stats = json.load(f)

    opportunities = []

    for rec in recommendations['instanceRecommendations']:
        instance_id = rec['instanceArn'].split('/')[-1]
        current_type = rec['currentInstanceType']

        # Trouver la meilleure recommandation
        if rec['recommendationOptions']:
            best = rec['recommendationOptions'][0]
            new_type = best['instanceType']
            savings = best['projectedUtilizationMetrics']

            opportunities.append({
                'instance_id': instance_id,
                'current_type': current_type,
                'recommended_type': new_type,
                'current_cpu_avg': rec.get('utilizationMetrics', [{}])[0].get('value', 0),
                'estimated_savings_pct': calculate_savings(current_type, new_type)
            })

    return pd.DataFrame(opportunities)

def calculate_savings(current, new):
    # Prix approximatifs (simplifiés)
    prices = {
        'm5.large': 0.096,
        'm5.xlarge': 0.192,
        't3.medium': 0.0416,
        't3.large': 0.0832,
    }
    current_price = prices.get(current, 0.1)
    new_price = prices.get(new, 0.1)
    return (current_price - new_price) / current_price * 100
```

**Jour 5 : Plan d'action**
```markdown
# Plan d'optimisation - Semaine 1

## Actions immédiates (gain rapide)
- [ ] Arrêter 12 instances dev inutilisées
  - Économie estimée : $500/mois, 200 kgCO2e/mois
- [ ] Supprimer 85 snapshots obsolètes (> 90 jours)
  - Économie estimée : $50/mois

## Actions court terme (2-4 semaines)
- [ ] Right-sizer 23 instances surutilisées
  - m5.xlarge → m5.large : 8 instances
  - m5.large → t3.large : 15 instances
  - Économie estimée : $800/mois, 400 kgCO2e/mois
- [ ] Activer extinction automatique environnements dev
  - Économie estimée : $1200/mois, 500 kgCO2e/mois

## Actions moyen terme (1-3 mois)
- [ ] Migrer vers Graviton (ARM)
  - 45 instances éligibles
  - Économie estimée : 40% compute
- [ ] Implémenter spot instances pour workloads batch
  - Économie estimée : 70% sur ces workloads

## Total économies estimées
- Coût : $2,550/mois
- Carbone : 1,100 kgCO2e/mois (-25%)
```

### 10.3 ROI et gains mesurés

#### Métriques de succès

```python
# Dashboard de suivi des gains
class OptimizationTracker:
    def __init__(self):
        self.baseline = None
        self.current = None

    def set_baseline(self, date, metrics):
        """Définir la baseline avant optimisation"""
        self.baseline = {
            'date': date,
            'monthly_cost': metrics['cost'],
            'monthly_emissions': metrics['emissions'],
            'instance_count': metrics['instances'],
            'storage_tb': metrics['storage'],
            'avg_utilization': metrics['utilization']
        }

    def update_current(self, date, metrics):
        """Mettre à jour les métriques actuelles"""
        self.current = {
            'date': date,
            'monthly_cost': metrics['cost'],
            'monthly_emissions': metrics['emissions'],
            'instance_count': metrics['instances'],
            'storage_tb': metrics['storage'],
            'avg_utilization': metrics['utilization']
        }

    def get_report(self):
        """Générer le rapport de gains"""
        return {
            'cost_savings': {
                'absolute': self.baseline['monthly_cost'] - self.current['monthly_cost'],
                'percentage': (1 - self.current['monthly_cost'] / self.baseline['monthly_cost']) * 100
            },
            'carbon_savings': {
                'absolute': self.baseline['monthly_emissions'] - self.current['monthly_emissions'],
                'percentage': (1 - self.current['monthly_emissions'] / self.baseline['monthly_emissions']) * 100
            },
            'efficiency_gain': {
                'utilization_before': self.baseline['avg_utilization'],
                'utilization_after': self.current['avg_utilization'],
                'improvement': self.current['avg_utilization'] - self.baseline['avg_utilization']
            }
        }
```

#### Exemple de résultats réels

```
┌─────────────────────────────────────────────────────────────┐
│         Résultats optimisation - 6 mois                     │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   Métriques          Avant       Après      Gain            │
│   ─────────────────────────────────────────────────         │
│   Coût mensuel       $45,000     $28,000    -38%            │
│   Émissions (tCO2e)  15.2        8.4        -45%            │
│   Instances          234         156        -33%            │
│   Utilisation CPU    18%         52%        +34pts          │
│   Stockage (TB)      125         78         -38%            │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│   Détail des actions                                        │
│   ─────────────────────────────────────────────────         │
│   Right-sizing instances          $8,000/mois  3.2 tCO2e   │
│   Spot instances (batch)          $5,000/mois  2.1 tCO2e   │
│   Extinction auto dev/test        $2,500/mois  1.0 tCO2e   │
│   Nettoyage stockage              $1,000/mois  0.3 tCO2e   │
│   Migration Graviton              $500/mois    0.2 tCO2e   │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│   ROI                                                       │
│   ─────────────────────────────────────────────────         │
│   Investissement (outils, temps)  $25,000                   │
│   Économies annuelles             $204,000                  │
│   Payback period                  1.5 mois                  │
│   ROI annuel                      716%                      │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Checklist cloud durable

### Niveau 1 : Fondamentaux (1-2 semaines)

- [ ] Activer le reporting carbone du provider
- [ ] Inventorier toutes les ressources cloud
- [ ] Identifier les ressources orphelines
- [ ] Mettre en place le tagging obligatoire
- [ ] Configurer les alertes de coût/carbone

### Niveau 2 : Optimisation (1-3 mois)

- [ ] Réaliser un audit right-sizing complet
- [ ] Implémenter l'extinction automatique des environnements non-prod
- [ ] Migrer les workloads batch vers spot instances
- [ ] Définir et appliquer des politiques de rétention données
- [ ] Optimiser le tiering du stockage

### Niveau 3 : Architecture (3-6 mois)

- [ ] Évaluer la migration vers serverless/containers
- [ ] Implémenter l'auto-scaling optimisé
- [ ] Choisir des régions à faible intensité carbone
- [ ] Mettre en place le CDN pour le contenu statique
- [ ] Optimiser les architectures applicatives

### Niveau 4 : Excellence (continu)

- [ ] Intégrer les métriques carbone aux dashboards
- [ ] Sensibiliser les équipes (formations, rituels)
- [ ] Automatiser les recommandations d'optimisation
- [ ] Implémenter le scheduling carbon-aware
- [ ] Viser des certifications/labels durabilité

---

## Ressources complémentaires

### Outils

- **Cloud Carbon Footprint** : https://cloudcarbonfootprint.org
- **Kepler** : https://github.com/sustainable-computing-io/kepler
- **Kube-green** : https://kube-green.dev
- **Electricity Maps** : https://app.electricitymaps.com

### Frameworks et standards

- **Green Software Foundation** : https://greensoftware.foundation
- **SCI (Software Carbon Intensity)** : spécification de mesure
- **FinOps Foundation** : https://finops.org

### Lectures recommandées

- "Building Green Software" - Anne Currie, Sarah Hsu, Sara Bergman
- "Sustainable Web Design" - Tom Greenwood
- Documentation AWS/GCP/Azure sustainability

### Communautés

- **ClimateAction.tech** : communauté tech climat
- **Green Software Foundation** : formation et certifications
- **FinOps Foundation** : bonnes pratiques FinOps

---

Le cloud computing n'est ni intrinsèquement vert ni polluant. C'est un outil puissant dont l'impact dépend entièrement de la façon dont nous l'utilisons. Avec une approche méthodique — mesure, optimisation, architecture sobre — il est possible de réduire significativement l'empreinte environnementale tout en maintenant, voire améliorant, les performances et la disponibilité des services.

La clé réside dans l'alignement des incitations : les pratiques durables sont généralement aussi les plus économiques. En embarquant les équipes dans une culture FinOps/GreenOps, chaque décision technique devient une opportunité de progrès environnemental.
