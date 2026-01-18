---
title: "Mesurer l'Impact Numérique"
date: 2025-01-27
draft: false
weight: 6
description: "Guide méthodologique complet pour quantifier l'empreinte environnementale du numérique : outils, méthodologies et bonnes pratiques."
---

"Ce qui ne se mesure pas ne s'améliore pas." Cette maxime est particulièrement vraie pour l'empreinte environnementale du numérique. Sans mesure, impossible de prioriser les actions, de suivre les progrès ou de communiquer de manière crédible. Ce guide propose une méthodologie complète pour quantifier l'impact numérique à tous les niveaux : web, infrastructure, logiciel et organisation.

**Temps de lecture estimé : 55 minutes**

---

## 1. Fondamentaux de la Mesure

### Pourquoi mesurer ?

La mesure de l'impact environnemental du numérique répond à plusieurs objectifs :

```
┌─────────────────────────────────────────────────────────────────┐
│                    OBJECTIFS DE LA MESURE                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  1. COMPRENDRE                                                  │
│     • Identifier les sources d'impact                           │
│     • Quantifier chaque composant                               │
│     • Établir une baseline                                      │
│                                                                 │
│  2. PRIORISER                                                   │
│     • Cibler les actions à fort impact                          │
│     • Allouer les ressources efficacement                       │
│     • Arbitrer entre options                                    │
│                                                                 │
│  3. SUIVRE                                                      │
│     • Mesurer les progrès                                       │
│     • Détecter les dérives                                      │
│     • Valider les actions                                       │
│                                                                 │
│  4. COMMUNIQUER                                                 │
│     • Informer les parties prenantes                            │
│     • Reporter (CSRD, RSE)                                      │
│     • Éviter le greenwashing                                    │
│                                                                 │
│  5. COMPARER                                                    │
│     • Benchmarker avec le secteur                               │
│     • Évaluer les fournisseurs                                  │
│     • Suivre l'évolution dans le temps                          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Types d'impacts environnementaux

L'impact du numérique ne se limite pas au carbone. Une approche complète intègre plusieurs dimensions :

| Impact | Unité | Description |
|--------|-------|-------------|
| **Changement climatique** | kg CO2e | Émissions de gaz à effet de serre |
| **Épuisement des ressources** | kg Sb eq | Consommation de ressources abiotiques |
| **Consommation d'eau** | L | Eau douce consommée |
| **Acidification** | kg SO2 eq | Acidification des sols et eaux |
| **Eutrophisation** | kg PO4 eq | Apport excessif de nutriments |
| **Pollution de l'air** | kg PM2.5 eq | Particules fines |
| **Énergie primaire** | MJ | Énergie totale consommée |

**En pratique**, on se concentre souvent sur :
- **Émissions carbone (CO2e)** : indicateur le plus utilisé
- **Consommation d'énergie (kWh)** : facilement mesurable
- **Consommation d'eau** : critique pour les data centers
- **Épuisement des ressources** : critique pour le matériel

### Unités et ordres de grandeur

**Unités courantes :**

| Unité | Signification | Équivalence |
|-------|---------------|-------------|
| kg CO2e | Kilogramme d'équivalent CO2 | Impact climatique |
| g CO2e | Gramme d'équivalent CO2 | 1/1000 kg CO2e |
| t CO2e | Tonne d'équivalent CO2 | 1000 kg CO2e |
| kWh | Kilowattheure | Énergie électrique |
| MWh | Mégawattheure | 1000 kWh |
| TWh | Térawattheure | 1 milliard kWh |

**Ordres de grandeur numérique :**

```
┌─────────────────────────────────────────────────────────────────┐
│              ORDRES DE GRANDEUR - NUMÉRIQUE                      │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ÉQUIPEMENTS (fabrication + usage sur durée de vie)             │
│  ───────────────────────────────────────────────────            │
│  Smartphone (3 ans)          : 70 kg CO2e                       │
│  Laptop (5 ans)              : 300-400 kg CO2e                  │
│  Écran 24" (7 ans)           : 200-350 kg CO2e                  │
│  Serveur (5 ans)             : 1 000-2 000 kg CO2e              │
│                                                                 │
│  USAGES (par unité)                                             │
│  ─────────────────                                              │
│  Email simple                : 4 g CO2e                         │
│  Email avec PJ 1 Mo          : 11 g CO2e                        │
│  Email avec PJ 10 Mo         : 50 g CO2e                        │
│  Recherche web               : 0,2-7 g CO2e                     │
│  1h streaming HD             : 36-150 g CO2e                    │
│  1h visioconférence          : 150-300 g CO2e                   │
│                                                                 │
│  STOCKAGE (par an)                                              │
│  ─────────────────                                              │
│  1 Go cloud                  : 0,2-2 kg CO2e/an                 │
│  1 Go email                  : 10-30 kg CO2e/an (avec accès)    │
│                                                                 │
│  INFRASTRUCTURE                                                 │
│  ──────────────                                                 │
│  1 kWh électricité France    : 57 g CO2e (mix 2023)             │
│  1 kWh électricité Allemagne : 385 g CO2e                       │
│  1 kWh électricité Monde     : 475 g CO2e                       │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Équivalences pour communiquer :**

| Émission | Équivalent compréhensible |
|----------|---------------------------|
| 1 kg CO2e | 5 km en voiture |
| 10 kg CO2e | 50 km en voiture |
| 100 kg CO2e | Paris-Lyon en voiture |
| 1 t CO2e | Paris-New York en avion |
| 2 t CO2e | Budget carbone annuel compatible +2°C |

### Limites de la mesure

La mesure d'impact a des limites qu'il faut connaître :

**Incertitudes :**
- Les facteurs d'émission varient selon les sources (±20-50%)
- Les données des fournisseurs sont souvent incomplètes
- Les méthodologies ne sont pas standardisées

**Ce qu'on mesure difficilement :**
- L'impact des équipements réseau intermédiaires
- La répartition entre services mutualisés
- L'effet rebond (impact indirect)
- L'impact social (conditions de travail, extraction)

**Approche recommandée :**
- Utiliser une méthodologie cohérente dans le temps
- Documenter les hypothèses et sources
- Comparer les ordres de grandeur, pas les décimales
- Privilégier les tendances aux valeurs absolues

### Le piège de la précision

```
┌─────────────────────────────────────────────────────────────────┐
│                    PRÉCISION VS UTILITÉ                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ❌ MAUVAISE APPROCHE                                           │
│  "Notre empreinte est de 127,456 t CO2e"                        │
│  → Fausse précision, non crédible                               │
│                                                                 │
│  ✅ BONNE APPROCHE                                              │
│  "Notre empreinte est estimée entre 100 et 150 t CO2e"          │
│  → Ordre de grandeur honnête                                    │
│                                                                 │
│  ✅ ENCORE MIEUX                                                │
│  "Notre empreinte a baissé de 20% par rapport à l'an dernier"   │
│  → Focus sur la tendance                                        │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 2. Méthodologies

### Analyse de Cycle de Vie (ACV)

L'ACV est la méthodologie de référence pour évaluer l'impact environnemental d'un produit ou service sur l'ensemble de son cycle de vie.

**Phases du cycle de vie numérique :**

```
┌─────────────────────────────────────────────────────────────────┐
│                    CYCLE DE VIE NUMÉRIQUE                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  1. EXTRACTION DES MATIÈRES PREMIÈRES                           │
│     • Mines (cobalt, lithium, terres rares)                     │
│     • Raffinage et transformation                               │
│     → 10-20% de l'impact total                                  │
│                                                                 │
│  2. FABRICATION                                                 │
│     • Composants (puces, écrans, batteries)                     │
│     • Assemblage                                                │
│     → 50-80% de l'impact total (terminaux)                      │
│                                                                 │
│  3. TRANSPORT                                                   │
│     • Acheminement mondial                                      │
│     • Distribution locale                                       │
│     → 5-10% de l'impact total                                   │
│                                                                 │
│  4. UTILISATION                                                 │
│     • Consommation électrique                                   │
│     • Maintenance, mises à jour                                 │
│     → 10-40% de l'impact total (variable selon équipement)      │
│                                                                 │
│  5. FIN DE VIE                                                  │
│     • Collecte, tri                                             │
│     • Recyclage, traitement                                     │
│     → 1-5% de l'impact total                                    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Normes ACV :**
- **ISO 14040** : Principes et cadre
- **ISO 14044** : Exigences et lignes directrices
- **ISO 14067** : Empreinte carbone des produits

**Limites de l'ACV pour le numérique :**
- Données manquantes sur les composants
- Allocation difficile pour les services mutualisés
- Complexité de la chaîne d'approvisionnement
- Coût et durée de réalisation

### Bilan Carbone (méthode ADEME)

Le Bilan Carbone® est une méthode française développée par l'ADEME pour comptabiliser les émissions de GES.

**Structure :**

```
┌─────────────────────────────────────────────────────────────────┐
│                    SCOPES DU BILAN CARBONE                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  SCOPE 1 : ÉMISSIONS DIRECTES                                   │
│  • Combustion sur site                                          │
│  • Véhicules de l'entreprise                                    │
│  → Pour le numérique : généralement faible                      │
│                                                                 │
│  SCOPE 2 : ÉMISSIONS INDIRECTES - ÉNERGIE                       │
│  • Électricité achetée                                          │
│  • Chauffage, climatisation                                     │
│  → Data centers, bureaux, équipements                           │
│                                                                 │
│  SCOPE 3 : AUTRES ÉMISSIONS INDIRECTES                          │
│  • Achats de biens et services                                  │
│  • Transport amont/aval                                         │
│  • Utilisation des produits vendus                              │
│  • Fin de vie                                                   │
│  → 80-90% de l'impact numérique                                 │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Pour le numérique, le Scope 3 est crucial :**
- Fabrication des équipements
- Services cloud
- Utilisation par les clients
- Fin de vie des équipements

### PEF (Product Environmental Footprint)

Méthode européenne visant à harmoniser l'évaluation environnementale des produits.

**Caractéristiques :**
- 16 catégories d'impact (pas seulement carbone)
- Règles par catégorie de produits (PEFCR)
- Approche cycle de vie complet
- Benchmark possible

**Limites :**
- Pas encore de PEFCR pour les services numériques
- Complexité de mise en œuvre
- Données spécifiques requises

### Méthodes simplifiées

Pour les organisations sans moyens pour une ACV complète :

**Approche par estimation :**

```python
# Estimation simplifiée empreinte SI

def estimer_empreinte_si(params):
    """
    Estimation rapide de l'empreinte carbone d'un SI
    Basée sur les facteurs moyens du marché
    """

    # Équipements utilisateurs (kg CO2e/an)
    impact_equipements = (
        params['nb_laptops'] * 60 +      # ~300 kg sur 5 ans
        params['nb_ecrans'] * 40 +       # ~280 kg sur 7 ans
        params['nb_smartphones'] * 25    # ~75 kg sur 3 ans
    )

    # Cloud et data center (kg CO2e/an)
    impact_cloud = (
        params['depense_cloud_eur'] * 0.5  # ~0,5 kg CO2e/€
    )

    # Réseau (kg CO2e/an)
    impact_reseau = (
        params['data_transfert_to'] * 50  # ~50 kg CO2e/To
    )

    # Logiciels SaaS (kg CO2e/an)
    impact_saas = (
        params['nb_utilisateurs'] * 50  # ~50 kg CO2e/user/an
    )

    total = impact_equipements + impact_cloud + impact_reseau + impact_saas

    return {
        'total_kg_co2e': total,
        'equipements': impact_equipements,
        'cloud': impact_cloud,
        'reseau': impact_reseau,
        'saas': impact_saas
    }
```

**Approche par ratio :**

| Indicateur | Facteur moyen |
|------------|---------------|
| Par employé tech | 500-2 000 kg CO2e/an |
| Par million € de CA (ESN) | 20-100 t CO2e |
| Par serveur | 1-2 t CO2e/an |
| Par To de stockage cloud | 100-500 kg CO2e/an |

### Comparatif des méthodologies

| Méthode | Précision | Complexité | Coût | Usage |
|---------|-----------|------------|------|-------|
| ACV complète | Élevée | Très élevée | 50-200k€ | Produit stratégique |
| ACV simplifiée | Moyenne | Moyenne | 10-50k€ | Comparaison options |
| Bilan Carbone | Moyenne | Élevée | 20-100k€ | Organisation |
| PEF | Élevée | Très élevée | 30-100k€ | Conformité EU |
| Estimation | Faible | Faible | Interne | Sensibilisation |

---

## 3. Périmètres de Mesure

### Définir le périmètre

Un périmètre clair est essentiel pour une mesure cohérente.

**Questions clés :**
- Quels équipements inclure ?
- Quelle période couvrir ?
- Comment allouer les ressources partagées ?
- Quels impacts prendre en compte ?

### Périmètre organisationnel

```
┌─────────────────────────────────────────────────────────────────┐
│              PÉRIMÈTRE ORGANISATIONNEL                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  NIVEAU 1 : POSTE DE TRAVAIL                                    │
│  • Équipement utilisateur (laptop, écran, périphériques)        │
│  • Consommation électrique directe                              │
│  → Utile pour sensibilisation individuelle                      │
│                                                                 │
│  NIVEAU 2 : ÉQUIPE / SERVICE                                    │
│  • Postes de travail de l'équipe                                │
│  • Part d'infrastructure mutualisée                             │
│  • Outils et services utilisés                                  │
│  → Utile pour objectifs d'équipe                                │
│                                                                 │
│  NIVEAU 3 : SYSTÈME D'INFORMATION                               │
│  • Infrastructure (serveurs, réseau, stockage)                  │
│  • Applications et services                                     │
│  • Équipements utilisateurs                                     │
│  → Utile pour stratégie IT                                      │
│                                                                 │
│  NIVEAU 4 : ORGANISATION COMPLÈTE                               │
│  • SI complet                                                   │
│  • Services externalisés                                        │
│  • Chaîne de valeur (fournisseurs, clients)                     │
│  → Utile pour reporting RSE/CSRD                                │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Périmètre technique

**Infrastructure on-premise :**

| Composant | Données à collecter |
|-----------|---------------------|
| Serveurs | Nombre, specs, âge, consommation |
| Stockage | Capacité, type (SSD/HDD), utilisation |
| Réseau | Équipements, bande passante |
| Climatisation | PUE, consommation |

**Cloud :**

| Provider | Données disponibles |
|----------|---------------------|
| AWS | Carbon Footprint Tool (gratuit) |
| Azure | Emissions Impact Dashboard |
| GCP | Carbon Footprint (gratuit) |
| OVH | API Carbon Calculator |

**Équipements utilisateurs :**

| Type | Données à collecter |
|------|---------------------|
| Laptops | Modèle, âge, configuration |
| Écrans | Taille, technologie, âge |
| Périphériques | Type, nombre |
| Smartphones | Modèle, usage pro/perso |

### Allocation des ressources partagées

Pour les ressources mutualisées, plusieurs méthodes d'allocation :

**Par utilisation :**
```
Impact_equipe = Impact_total × (Usage_equipe / Usage_total)
```

**Par effectif :**
```
Impact_equipe = Impact_total × (Effectif_equipe / Effectif_total)
```

**Par budget :**
```
Impact_equipe = Impact_total × (Budget_equipe / Budget_total)
```

**Recommandation :** Utiliser la méthode la plus représentative de l'usage réel et rester cohérent dans le temps.

### Frontières temporelles

**Période de référence :**
- Année calendaire (pour reporting annuel)
- Année fiscale (pour alignement comptable)
- Période projet (pour comparaison avant/après)

**Amortissement du matériel :**
- Répartir l'impact fabrication sur la durée de vie
- Durées standards : laptop 5 ans, serveur 5 ans, smartphone 3 ans

```
Impact_annuel_equipement = Impact_fabrication / Durée_vie + Impact_usage_annuel
```

---

## 4. Outils de Mesure

### Inventaire des outils

```
┌─────────────────────────────────────────────────────────────────┐
│                    CARTOGRAPHIE DES OUTILS                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  MESURE WEB                                                     │
│  ──────────                                                     │
│  • EcoIndex / GreenIT-Analysis                                  │
│  • Website Carbon Calculator                                    │
│  • Lighthouse / PageSpeed Insights                              │
│  • WebPageTest                                                  │
│  • Greenspector                                                 │
│                                                                 │
│  MESURE INFRASTRUCTURE                                          │
│  ─────────────────────                                          │
│  • Cloud Carbon Footprint                                       │
│  • Outils natifs cloud (AWS, Azure, GCP)                        │
│  • Kepler (Kubernetes)                                          │
│  • Scaphandre                                                   │
│  • PowerAPI                                                     │
│                                                                 │
│  MESURE LOGICIELLE                                              │
│  ─────────────────                                              │
│  • CodeCarbon (Python)                                          │
│  • Green Metrics Tool                                           │
│  • Eco-CI (GitHub Actions)                                      │
│  • Profilers énergétiques                                       │
│                                                                 │
│  BILAN GLOBAL                                                   │
│  ────────────                                                   │
│  • Fruggr                                                       │
│  • Verdikt                                                      │
│  • Resilio                                                      │
│  • NegaOctet                                                    │
│  • WeNR                                                         │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Outils de mesure web

#### EcoIndex

**Description :** Score d'écoconception web de A à G, basé sur 3 métriques.

**Métriques :**
- Nombre de requêtes HTTP
- Poids de la page (Ko)
- Nombre d'éléments du DOM

**Utilisation CLI :**
```bash
# Installation
npm install -g ecoindex-cli

# Analyse d'une URL
ecoindex-cli analyze --url https://example.com

# Analyse de plusieurs URLs
ecoindex-cli analyze --url-file urls.txt --output results.json
```

**Interprétation :**

| Note | Score | Interprétation |
|------|-------|----------------|
| A | 80-100 | Excellent |
| B | 70-79 | Très bien |
| C | 55-69 | Bien |
| D | 40-54 | Moyen |
| E | 25-39 | Insuffisant |
| F | 10-24 | Très insuffisant |
| G | 0-9 | Critique |

**Limites :**
- Ne mesure pas le JavaScript exécuté
- Ne prend pas en compte le serveur
- Score relatif, pas d'émissions absolues

#### Website Carbon Calculator

**Description :** Estimation des émissions CO2 par visite.

**URL :** websitecarbon.com

**Calcul :**
```
CO2/visite = Transfert_données × Facteur_emission_reseau ×
             (1 + Part_non_renouvelable) × Facteur_visiteur
```

#### Lighthouse

**Description :** Outil Google d'audit qualité web (performance, accessibilité, SEO).

**Utilisation :**
```bash
# Installation
npm install -g lighthouse

# Audit complet
lighthouse https://example.com --output json --output-path report.json

# Focus performance
lighthouse https://example.com --only-categories=performance
```

**Métriques clés pour l'écoconception :**
- **LCP** (Largest Contentful Paint) : < 2,5s
- **FID** (First Input Delay) : < 100ms
- **CLS** (Cumulative Layout Shift) : < 0,1
- **Total Blocking Time** : < 200ms
- **Speed Index** : < 3,4s

#### Greenspector

**Description :** Outil professionnel de mesure d'impact (web et mobile).

**Caractéristiques :**
- Mesure réelle sur devices physiques
- Consommation mémoire, CPU, batterie
- Comparaison entre versions
- Intégration CI/CD

### Outils de mesure infrastructure

#### Cloud Carbon Footprint

**Description :** Outil open source pour estimer l'empreinte carbone du cloud.

**Installation :**
```bash
# Clone du repo
git clone https://github.com/cloud-carbon-footprint/cloud-carbon-footprint.git

# Installation des dépendances
cd cloud-carbon-footprint
yarn install

# Configuration
cp packages/api/.env.template packages/api/.env
# Éditer .env avec les credentials cloud

# Démarrage
yarn start
```

**Providers supportés :**
- AWS (via Cost and Usage Reports)
- Azure (via Consumption API)
- GCP (via BigQuery Export)

**Méthode de calcul :**
```
Emissions = Energie_consommee × Facteur_emission_region × PUE
```

#### Kepler (Kubernetes)

**Description :** Kubernetes Efficient Power Level Exporter - mesure la consommation énergétique des pods.

**Installation :**
```bash
# Via Helm
helm repo add kepler https://sustainable-computing-io.github.io/kepler-helm-chart
helm install kepler kepler/kepler --namespace kepler --create-namespace
```

**Métriques exposées :**
```prometheus
# Consommation CPU en joules
kepler_container_joules_total{container_name="my-app", pod_name="my-app-xxx"}

# Par namespace
kepler_namespace_joules_total{namespace="production"}
```

**Dashboard Grafana :**
```json
{
  "panels": [
    {
      "title": "Energy Consumption by Namespace",
      "type": "timeseries",
      "targets": [
        {
          "expr": "sum(rate(kepler_namespace_joules_total[5m])) by (namespace)",
          "legendFormat": "{{namespace}}"
        }
      ]
    }
  ]
}
```

#### Scaphandre

**Description :** Agent de mesure de consommation électrique pour serveurs.

**Installation :**
```bash
# Linux avec accès RAPL
cargo install scaphandre

# Ou via Docker
docker run -v /sys/class/powercap:/sys/class/powercap \
  -v /proc:/proc -ti hubblo/scaphandre
```

**Export Prometheus :**
```bash
scaphandre prometheus --port 8080
```

**Métriques :**
```prometheus
# Puissance totale
scaphandre_host_power_microwatts

# Par processus
scaphandre_process_power_consumption_microwatts{pid="1234", exe="python"}
```

### Outils de mesure logicielle

#### CodeCarbon

**Description :** Librairie Python pour tracker les émissions de code ML/Data.

**Installation :**
```bash
pip install codecarbon
```

**Utilisation :**
```python
from codecarbon import EmissionsTracker

# Tracking automatique
tracker = EmissionsTracker()
tracker.start()

# Votre code
model.fit(X_train, y_train)
predictions = model.predict(X_test)

emissions = tracker.stop()
print(f"Emissions: {emissions} kg CO2e")
```

**Avec décorateur :**
```python
from codecarbon import track_emissions

@track_emissions(project_name="mon_projet")
def train_model():
    # Entraînement
    pass
```

**Configuration :**
```ini
# .codecarbon.config
[codecarbon]
project_name = mon_projet
measure_power_secs = 15
save_to_file = true
output_dir = ./emissions
tracking_mode = machine
log_level = warning
```

#### Eco-CI (GitHub Actions)

**Description :** Action GitHub pour mesurer l'empreinte carbone des workflows CI.

**Utilisation :**
```yaml
# .github/workflows/eco-ci.yml
name: Build with Carbon Tracking

on: [push]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Initialize Eco-CI
        uses: green-coding-solutions/eco-ci-energy-estimation@v3
        with:
          task: start-measurement

      - name: Build
        run: npm run build

      - name: Tests
        run: npm test

      - name: Report Energy
        uses: green-coding-solutions/eco-ci-energy-estimation@v3
        with:
          task: get-measurement
          label: "build-and-test"
```

### Outils de bilan global

#### Fruggr

**Description :** Plateforme SaaS de mesure d'empreinte environnementale du numérique.

**Fonctionnalités :**
- Inventaire automatisé du parc
- Mesure web (extension navigateur)
- Calcul ACV simplifié
- Tableaux de bord et reporting

#### Verdikt

**Description :** Solution de mesure et pilotage de l'empreinte numérique.

**Fonctionnalités :**
- Collecte multi-sources
- Méthodologie ACV
- Benchmark sectoriel
- Plans d'action suggérés

#### NegaOctet

**Description :** Base de données de facteurs d'impact pour ACV numérique.

**Contenu :**
- Facteurs pour équipements
- Facteurs pour services cloud
- Méthodologie documentée

### Comparatif des outils

| Outil | Périmètre | Prix | Complexité | Usage |
|-------|-----------|------|------------|-------|
| EcoIndex | Web | Gratuit | Faible | Quick check |
| Lighthouse | Web | Gratuit | Faible | CI/CD |
| Greenspector | Web/Mobile | Payant | Moyenne | Pro |
| CCF | Cloud | Gratuit | Élevée | Multi-cloud |
| Kepler | Kubernetes | Gratuit | Moyenne | K8s |
| CodeCarbon | Code | Gratuit | Faible | ML/Data |
| Fruggr | SI complet | Payant | Moyenne | Entreprise |

---

## 5. Mesure Web

### Méthodologie d'audit web

**Processus d'audit :**

```
┌─────────────────────────────────────────────────────────────────┐
│                    PROCESSUS D'AUDIT WEB                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  1. PRÉPARATION                                                 │
│     • Lister les pages à auditer (priorité trafic)              │
│     • Définir les conditions de test                            │
│     • Préparer l'environnement                                  │
│                                                                 │
│  2. COLLECTE                                                    │
│     • Exécuter les outils de mesure                             │
│     • Répéter les mesures (stabilité)                           │
│     • Documenter les conditions                                 │
│                                                                 │
│  3. ANALYSE                                                     │
│     • Identifier les problèmes principaux                       │
│     • Prioriser par impact                                      │
│     • Comparer aux benchmarks                                   │
│                                                                 │
│  4. RECOMMANDATIONS                                             │
│     • Lister les actions correctives                            │
│     • Estimer les gains                                         │
│     • Définir les priorités                                     │
│                                                                 │
│  5. SUIVI                                                       │
│     • Mesurer après corrections                                 │
│     • Valider les gains                                         │
│     • Mettre en place le monitoring                             │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Métriques clés

**Métriques techniques :**

| Métrique | Cible | Outils |
|----------|-------|--------|
| Poids total | < 1 Mo | DevTools, WebPageTest |
| Nombre de requêtes | < 30 | DevTools |
| Éléments DOM | < 1500 | EcoIndex |
| JavaScript | < 300 Ko | Webpack Analyzer |
| CSS | < 100 Ko | CSS Stats |
| Images | < 500 Ko | ImageOptim |
| Temps de chargement | < 3s | Lighthouse |

**Métriques d'impact :**

| Métrique | Source | Interprétation |
|----------|--------|----------------|
| EcoIndex score | EcoIndex | A-G, synthétique |
| g CO2e/visite | Website Carbon | Impact par visite |
| kWh/1000 visites | Estimation | Consommation |

### Automatisation des mesures

**Script de mesure automatique :**

```javascript
// measure-eco.js
const { execSync } = require('child_process');
const fs = require('fs');

const urls = [
  'https://example.com/',
  'https://example.com/produits',
  'https://example.com/contact'
];

const results = [];

for (const url of urls) {
  console.log(`Measuring ${url}...`);

  // EcoIndex
  const ecoindex = JSON.parse(
    execSync(`ecoindex-cli analyze --url "${url}" --output json`).toString()
  );

  // Lighthouse
  const lighthouse = JSON.parse(
    execSync(`lighthouse "${url}" --output json --quiet`).toString()
  );

  results.push({
    url,
    date: new Date().toISOString(),
    ecoindex: {
      score: ecoindex.score,
      grade: ecoindex.grade,
      requests: ecoindex.requests,
      size: ecoindex.size,
      dom: ecoindex.dom,
      water: ecoindex.water,
      co2: ecoindex.co2
    },
    lighthouse: {
      performance: lighthouse.categories.performance.score * 100,
      lcp: lighthouse.audits['largest-contentful-paint'].numericValue,
      fcp: lighthouse.audits['first-contentful-paint'].numericValue,
      tbt: lighthouse.audits['total-blocking-time'].numericValue
    }
  });
}

fs.writeFileSync('eco-report.json', JSON.stringify(results, null, 2));
console.log('Report saved to eco-report.json');
```

**Intégration CI/CD :**

```yaml
# .github/workflows/eco-audit.yml
name: Eco Audit

on:
  push:
    branches: [main]
  schedule:
    - cron: '0 6 * * 1'  # Chaque lundi à 6h

jobs:
  audit:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install tools
        run: |
          npm install -g lighthouse ecoindex-cli

      - name: Run audit
        run: node measure-eco.js

      - name: Check thresholds
        run: |
          SCORE=$(jq '.[] | select(.url == "https://example.com/") | .ecoindex.score' eco-report.json)
          if [ "$SCORE" -lt 50 ]; then
            echo "EcoIndex score below threshold: $SCORE"
            exit 1
          fi

      - name: Upload report
        uses: actions/upload-artifact@v3
        with:
          name: eco-report
          path: eco-report.json
```

### Interprétation des résultats

**Grille de lecture :**

```
┌─────────────────────────────────────────────────────────────────┐
│                    INTERPRÉTATION RÉSULTATS                      │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  POIDS DE PAGE                                                  │
│  < 500 Ko     : Excellent                                       │
│  500 Ko - 1 Mo : Bien                                           │
│  1 - 2 Mo     : Moyen, optimisation possible                    │
│  2 - 5 Mo     : Problématique                                   │
│  > 5 Mo       : Critique, action urgente                        │
│                                                                 │
│  REQUÊTES HTTP                                                  │
│  < 20         : Excellent                                       │
│  20 - 40      : Bien                                            │
│  40 - 80      : Moyen                                           │
│  > 80         : Problématique                                   │
│                                                                 │
│  JAVASCRIPT                                                     │
│  < 100 Ko     : Excellent                                       │
│  100 - 300 Ko : Bien                                            │
│  300 - 500 Ko : Moyen                                           │
│  > 500 Ko     : Problématique                                   │
│                                                                 │
│  IMAGES                                                         │
│  Format moderne (WebP/AVIF) : +10 points                        │
│  Lazy loading              : +10 points                         │
│  Responsive               : +10 points                          │
│  Compression optimale     : +10 points                          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Benchmarks sectoriels

**Moyennes par secteur (2024) :**

| Secteur | Poids moyen | EcoIndex moyen |
|---------|-------------|----------------|
| E-commerce | 3,2 Mo | E (35) |
| Media | 4,5 Mo | F (25) |
| Corporate | 2,1 Mo | D (42) |
| SaaS | 1,8 Mo | C (55) |
| Blog | 1,5 Mo | C (58) |
| Portfolio | 1,2 Mo | B (68) |

**Top performers :**
- Low-tech Magazine : < 500 Ko, A
- Gov.uk : < 200 Ko, A
- Motherfucking Website : < 10 Ko, A

---

## 6. Mesure Infrastructure

### Méthode de mesure data center

**Indicateurs clés :**

| Indicateur | Formule | Cible |
|------------|---------|-------|
| **PUE** | Énergie totale / Énergie IT | < 1,4 |
| **CUE** | Émissions CO2 / Énergie IT | Variable selon mix |
| **WUE** | Eau consommée / Énergie IT | < 1,8 L/kWh |
| **ERE** | Énergie réutilisée / Énergie IT | > 0,5 |

**Calcul simplifié empreinte data center :**

```python
def calculer_empreinte_dc(params):
    """
    Calcul de l'empreinte carbone d'un data center
    """

    # Consommation IT annuelle (kWh)
    conso_it = params['puissance_it_kw'] * 8760  # heures/an

    # Consommation totale avec PUE
    conso_totale = conso_it * params['pue']

    # Émissions (kg CO2e)
    emissions_usage = conso_totale * params['facteur_emission_kwh']

    # Amortissement équipements (kg CO2e/an)
    emissions_equipements = (
        params['nb_serveurs'] * 400 +  # ~2000 kg / 5 ans
        params['nb_switches'] * 60 +   # ~300 kg / 5 ans
        params['stockage_to'] * 20     # ~100 kg / 5 ans / To
    )

    return {
        'conso_kwh_an': conso_totale,
        'emissions_usage_kg': emissions_usage,
        'emissions_equipements_kg': emissions_equipements,
        'emissions_totales_kg': emissions_usage + emissions_equipements
    }

# Exemple
params = {
    'puissance_it_kw': 100,
    'pue': 1.5,
    'facteur_emission_kwh': 0.057,  # France
    'nb_serveurs': 50,
    'nb_switches': 10,
    'stockage_to': 100
}

result = calculer_empreinte_dc(params)
print(f"Emissions annuelles: {result['emissions_totales_kg']/1000:.1f} t CO2e")
```

### Mesure cloud

#### AWS

**Carbon Footprint Tool :**

Dashboard disponible dans la console AWS avec :
- Émissions par service
- Émissions par région
- Tendance historique

**API Cost and Usage Report :**
```sql
-- Requête Athena pour extraire les données
SELECT
    line_item_product_code as service,
    product_region as region,
    SUM(line_item_usage_amount) as usage,
    SUM(line_item_unblended_cost) as cost
FROM cost_and_usage
WHERE month = '2024-01'
GROUP BY 1, 2
ORDER BY cost DESC
```

#### Azure

**Emissions Impact Dashboard :**
```powershell
# Récupération via API
$token = (Get-AzAccessToken -ResourceUrl "https://management.azure.com").Token
$headers = @{Authorization = "Bearer $token"}

$response = Invoke-RestMethod `
    -Uri "https://management.azure.com/providers/Microsoft.Carbon/carbonEmissionReports?api-version=2023-04-01-preview" `
    -Headers $headers

$response.value | Format-Table
```

#### GCP

**Carbon Footprint :**
```bash
# Export BigQuery
bq query --use_legacy_sql=false '
SELECT
    usage_month,
    service.description as service,
    location.location as region,
    SUM(carbon_footprint_kgCO2e.scope1) as scope1,
    SUM(carbon_footprint_kgCO2e.scope2_location) as scope2,
    SUM(carbon_footprint_kgCO2e.scope3) as scope3
FROM `project.dataset.carbon_footprint`
GROUP BY 1, 2, 3
ORDER BY usage_month DESC
'
```

### Mesure Kubernetes

**Avec Kepler :**

```yaml
# prometheus-rules.yaml
apiVersion: monitoring.coreos.com/v1
kind: PrometheusRule
metadata:
  name: kepler-energy-rules
spec:
  groups:
    - name: kepler.energy
      rules:
        - record: namespace:kepler_energy_consumption:rate5m
          expr: |
            sum(rate(kepler_container_joules_total[5m])) by (namespace)

        - alert: HighEnergyConsumption
          expr: |
            sum(rate(kepler_container_joules_total[5m])) by (namespace) > 100
          for: 15m
          labels:
            severity: warning
          annotations:
            summary: "High energy consumption in namespace {{ $labels.namespace }}"
```

**Dashboard Grafana :**

```json
{
  "dashboard": {
    "title": "Kubernetes Energy Dashboard",
    "panels": [
      {
        "title": "Energy by Namespace (Watts)",
        "type": "bargauge",
        "targets": [{
          "expr": "sum(rate(kepler_container_joules_total[5m])) by (namespace)"
        }]
      },
      {
        "title": "Top 10 Pods by Energy",
        "type": "table",
        "targets": [{
          "expr": "topk(10, sum(rate(kepler_container_joules_total[5m])) by (pod_name))"
        }]
      },
      {
        "title": "Estimated CO2 (kg/day)",
        "type": "stat",
        "targets": [{
          "expr": "sum(rate(kepler_container_joules_total[5m])) * 86400 / 3600000 * 0.057"
        }]
      }
    ]
  }
}
```

### Calcul d'empreinte cloud

**Formule générale :**

```
Emissions = Σ (Usage_ressource × Facteur_emission_ressource × PUE × Facteur_mix_region)
```

**Facteurs d'émission par type de ressource :**

| Ressource | Unité | Facteur (kg CO2e) |
|-----------|-------|-------------------|
| vCPU-heure | heure | 0,003 - 0,008 |
| GB-mois (stockage) | mois | 0,0001 - 0,0003 |
| GB (transfert) | GB | 0,01 - 0,05 |
| GPU-heure | heure | 0,05 - 0,20 |

**Facteurs par région :**

| Région | Mix (g CO2e/kWh) |
|--------|------------------|
| eu-west-3 (Paris) | 57 |
| eu-west-1 (Ireland) | 280 |
| us-east-1 (Virginia) | 350 |
| us-west-2 (Oregon) | 110 |
| eu-north-1 (Stockholm) | 8 |
| ap-northeast-1 (Tokyo) | 480 |

---

## 7. Mesure Logicielle

### Profiling énergétique

**Outils de profiling :**

| Outil | Langage | Métrique |
|-------|---------|----------|
| PowerTOP | Linux | Watts process |
| Intel VTune | Multi | Energy, CPU |
| Perf | Linux | CPU cycles |
| CodeCarbon | Python | kg CO2e |
| JoularJX | Java | Joules |

**Exemple avec PowerTOP :**
```bash
# Lancer le monitoring
sudo powertop --csv=power-report.csv --time=60

# Analyser un process spécifique
sudo perf stat -e power/energy-pkg/,power/energy-cores/ ./mon_programme
```

### Benchmark énergétique

**Script de benchmark :**

```python
import time
import psutil
from codecarbon import EmissionsTracker

def benchmark_function(func, *args, iterations=100):
    """
    Benchmark énergétique d'une fonction
    """
    tracker = EmissionsTracker(log_level='error')

    # Baseline (CPU idle)
    process = psutil.Process()
    cpu_before = process.cpu_percent(interval=1)

    # Exécution
    tracker.start()
    start_time = time.time()

    for _ in range(iterations):
        result = func(*args)

    elapsed = time.time() - start_time
    emissions = tracker.stop()

    cpu_after = process.cpu_percent(interval=1)
    memory = process.memory_info().rss / 1024 / 1024  # MB

    return {
        'emissions_kg': emissions,
        'emissions_per_call_g': emissions * 1000 / iterations,
        'duration_s': elapsed,
        'duration_per_call_ms': elapsed * 1000 / iterations,
        'cpu_percent': (cpu_before + cpu_after) / 2,
        'memory_mb': memory
    }

# Exemple
def process_data(data):
    return sorted(data)

data = list(range(100000))
result = benchmark_function(process_data, data, iterations=100)

print(f"Emissions: {result['emissions_per_call_g']:.6f} g CO2e/call")
print(f"Duration: {result['duration_per_call_ms']:.2f} ms/call")
```

### Comparaison de solutions

**Framework de comparaison :**

```python
import json
from typing import Callable, Dict, List

class EnergyComparator:
    def __init__(self):
        self.results = []

    def add_solution(self, name: str, func: Callable, *args, **kwargs):
        """Ajoute une solution à comparer"""
        result = benchmark_function(func, *args, **kwargs)
        result['name'] = name
        self.results.append(result)

    def compare(self) -> Dict:
        """Compare les solutions"""
        if not self.results:
            return {}

        # Trier par émissions
        sorted_results = sorted(self.results, key=lambda x: x['emissions_kg'])

        baseline = sorted_results[0]['emissions_kg']

        for r in sorted_results:
            r['vs_best'] = f"+{((r['emissions_kg'] / baseline) - 1) * 100:.1f}%"

        return {
            'best': sorted_results[0],
            'worst': sorted_results[-1],
            'all': sorted_results,
            'potential_reduction': (
                (sorted_results[-1]['emissions_kg'] - baseline) /
                sorted_results[-1]['emissions_kg'] * 100
            )
        }

# Utilisation
comparator = EnergyComparator()

# Solution 1: Boucle native
comparator.add_solution(
    "Native loop",
    lambda data: [x * 2 for x in data],
    list(range(1000000))
)

# Solution 2: NumPy
import numpy as np
comparator.add_solution(
    "NumPy",
    lambda data: np.array(data) * 2,
    list(range(1000000))
)

# Solution 3: map
comparator.add_solution(
    "Map",
    lambda data: list(map(lambda x: x * 2, data)),
    list(range(1000000))
)

result = comparator.compare()
print(f"Best solution: {result['best']['name']}")
print(f"Potential reduction: {result['potential_reduction']:.1f}%")
```

### Intégration CI/CD

**GitHub Action pour suivi énergétique :**

```yaml
# .github/workflows/energy-tracking.yml
name: Energy Tracking

on:
  push:
    branches: [main]

jobs:
  measure:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Python
        uses: actions/setup-python@v4
        with:
          python-version: '3.10'

      - name: Install dependencies
        run: |
          pip install codecarbon pytest

      - name: Run benchmarks with tracking
        env:
          CODECARBON_LOG_LEVEL: error
        run: |
          python -c "
          from codecarbon import EmissionsTracker
          import subprocess
          import json

          tracker = EmissionsTracker(
            project_name='ci-tests',
            output_file='emissions.csv'
          )
          tracker.start()

          result = subprocess.run(['pytest', 'tests/', '-v'])

          emissions = tracker.stop()

          with open('emissions-summary.json', 'w') as f:
            json.dump({
              'emissions_kg': emissions,
              'commit': '${{ github.sha }}'
            }, f)
          "

      - name: Check emissions threshold
        run: |
          EMISSIONS=$(jq '.emissions_kg' emissions-summary.json)
          THRESHOLD=0.001  # 1g CO2e

          if (( $(echo "$EMISSIONS > $THRESHOLD" | bc -l) )); then
            echo "Warning: Emissions ($EMISSIONS kg) exceed threshold ($THRESHOLD kg)"
          fi

      - name: Upload results
        uses: actions/upload-artifact@v3
        with:
          name: emissions-report
          path: |
            emissions.csv
            emissions-summary.json
```

### Métriques applicatives

**Dashboard applicatif :**

```
┌─────────────────────────────────────────────────────────────────┐
│                    APPLICATION ENERGY DASHBOARD                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  SYNTHÈSE                                                       │
│  ─────────                                                      │
│  Émissions aujourd'hui : 2,34 kg CO2e                           │
│  Vs moyenne 7 jours   : -12% ▼                                  │
│  Vs même jour sem. précédente : +5% ▲                           │
│                                                                 │
│  PAR ENDPOINT                                                   │
│  ────────────                                                   │
│  /api/search      ████████████████  45%  (1,05 kg)             │
│  /api/products    ████████░░░░░░░░  25%  (0,59 kg)             │
│  /api/users       ████░░░░░░░░░░░░  12%  (0,28 kg)             │
│  /api/orders      ███░░░░░░░░░░░░░  10%  (0,23 kg)             │
│  Autres           ██░░░░░░░░░░░░░░   8%  (0,19 kg)             │
│                                                                 │
│  PAR TYPE D'OPÉRATION                                           │
│  ────────────────────                                           │
│  DB queries       ████████████░░░░  60%                         │
│  Compute          ██████░░░░░░░░░░  25%                         │
│  I/O              ███░░░░░░░░░░░░░  10%                         │
│  Network          █░░░░░░░░░░░░░░░   5%                         │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 8. Reporting et Communication

### Structure du rapport

**Rapport d'empreinte numérique :**

```markdown
# Rapport d'Empreinte Numérique 2024

## Résumé exécutif
- Empreinte totale : 150 ± 30 t CO2e
- Évolution vs 2023 : -15%
- Principaux postes : Cloud (45%), Équipements (35%), Réseau (20%)

## Méthodologie
- Périmètre : SI complet (scope 1, 2, 3)
- Période : Année calendaire 2024
- Sources : [détail des sources de données]
- Hypothèses : [principales hypothèses]

## Résultats détaillés

### Par catégorie
| Catégorie | 2023 | 2024 | Évolution |
|-----------|------|------|-----------|
| Cloud | 80 t | 68 t | -15% |
| Équipements | 60 t | 52 t | -13% |
| Réseau | 35 t | 30 t | -14% |

### Par scope
| Scope | Émissions | Part |
|-------|-----------|------|
| Scope 1 | 2 t | 1% |
| Scope 2 | 45 t | 30% |
| Scope 3 | 103 t | 69% |

## Actions et impacts
- Migration cloud vers région bas carbone : -20 t
- Prolongation durée vie équipements : -8 t
- Optimisation code : -5 t

## Objectifs 2025
- Réduction de 20% vs 2024
- Actions prioritaires : [liste]

## Annexes
- Méthodologie détaillée
- Données brutes
- Facteurs d'émission utilisés
```

### Dashboard de suivi

**Structure dashboard :**

```
┌─────────────────────────────────────────────────────────────────┐
│                    DASHBOARD EMPREINTE NUMÉRIQUE                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐ │
│  │ TOTAL ANNÉE     │  │ VS ANNÉE -1     │  │ VS OBJECTIF     │ │
│  │   150 t CO2e    │  │    -15% ▼       │  │    -5% ▼        │ │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘ │
│                                                                 │
│  TENDANCE MENSUELLE                                             │
│  ▁▂▃▄▅▆▅▄▃▂▁▂  (graphique sparkline)                           │
│                                                                 │
│  RÉPARTITION PAR POSTE                                          │
│  Cloud         ████████████████████  45%                        │
│  Équipements   ██████████████░░░░░░  35%                        │
│  Réseau        ████████░░░░░░░░░░░░  20%                        │
│                                                                 │
│  INDICATEURS CLÉS                                               │
│  • EcoIndex moyen sites : C (56)                                │
│  • Utilisation cloud : 42% (cible >60%)                         │
│  • Durée vie moyenne équipements : 4,2 ans                      │
│                                                                 │
│  ALERTES                                                        │
│  ⚠️ Consommation cloud +12% ce mois                             │
│  ⚠️ 15 équipements à renouveler prochainement                   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Conformité CSRD

La Corporate Sustainability Reporting Directive impose des exigences de reporting.

**ESRS E1 - Changement climatique :**

| Indicateur | Description |
|------------|-------------|
| E1-1 | Plan de transition climatique |
| E1-4 | Émissions GES scope 1, 2, 3 |
| E1-5 | Consommation d'énergie |
| E1-6 | Mix énergétique |

**Données numériques requises :**
- Émissions liées à la consommation électrique (scope 2)
- Émissions liées aux achats IT (scope 3 - catégorie 1)
- Émissions liées aux services cloud (scope 3 - catégorie 1)
- Émissions liées aux équipements utilisateurs (scope 3 - catégorie 1)

### Éviter le greenwashing

**Principes de communication responsable :**

```
┌─────────────────────────────────────────────────────────────────┐
│              COMMUNICATION RESPONSABLE                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ✅ À FAIRE                                                     │
│  • Communiquer des fourchettes, pas des chiffres précis         │
│  • Documenter la méthodologie                                   │
│  • Mentionner les limites et incertitudes                       │
│  • Comparer dans le temps (tendances)                           │
│  • Être transparent sur ce qui n'est pas mesuré                 │
│                                                                 │
│  ❌ À ÉVITER                                                    │
│  • Fausse précision (127,456 t CO2e)                           │
│  • Comparaisons non comparables                                 │
│  • Omettre les scopes défavorables                              │
│  • Utiliser des facteurs d'émission optimistes                  │
│  • Communiquer sans contexte                                    │
│                                                                 │
│  BONNES PRATIQUES                                               │
│  • Faire vérifier par un tiers                                  │
│  • Suivre un référentiel reconnu                                │
│  • Publier les données brutes                                   │
│  • Répondre aux questions                                       │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Communication interne vs externe

| Aspect | Interne | Externe |
|--------|---------|---------|
| Niveau de détail | Élevé | Synthétique |
| Données | Brutes + analysées | Agrégées |
| Fréquence | Mensuelle/trimestrielle | Annuelle |
| Objectif | Pilotage | Information |
| Ton | Technique | Vulgarisé |

---

## 9. Amélioration Continue

### Définir des objectifs

**Cadre SMART pour objectifs Green IT :**

```
┌─────────────────────────────────────────────────────────────────┐
│                    OBJECTIFS SMART                               │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  SPÉCIFIQUE                                                     │
│  ❌ "Réduire notre empreinte"                                   │
│  ✅ "Réduire l'empreinte cloud de 20%"                          │
│                                                                 │
│  MESURABLE                                                      │
│  ❌ "Améliorer la performance web"                              │
│  ✅ "Atteindre EcoIndex B sur les 10 pages principales"         │
│                                                                 │
│  ATTEIGNABLE                                                    │
│  ❌ "Neutralité carbone en 1 an"                                │
│  ✅ "-15% par an pendant 5 ans"                                 │
│                                                                 │
│  RÉALISTE                                                       │
│  ❌ "0 émissions"                                               │
│  ✅ "Émissions résiduelles < 50 t, compensation certifiée"      │
│                                                                 │
│  TEMPOREL                                                       │
│  ❌ "Réduire quand c'est possible"                              │
│  ✅ "D'ici décembre 2025"                                       │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Exemples d'objectifs :**

| Domaine | Objectif | KPI | Échéance |
|---------|----------|-----|----------|
| Web | EcoIndex B sur homepage | Score > 70 | Q2 2025 |
| Cloud | -20% émissions | t CO2e | Q4 2025 |
| Équipements | +1 an durée vie moyenne | Années | Q4 2025 |
| Données | -30% stockage inutile | To | Q3 2025 |

### Trajectoire de réduction

**Science Based Targets (SBTi) :**

Pour être compatible avec l'objectif +1,5°C :
- Réduction de 4,2% par an minimum
- Réduction de 50% d'ici 2030 (vs 2019)

**Exemple de trajectoire :**

```
┌─────────────────────────────────────────────────────────────────┐
│                    TRAJECTOIRE DE RÉDUCTION                      │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  t CO2e                                                         │
│  200 ┤                                                          │
│      │ ●                                                        │
│  175 ┤   ●                                                      │
│      │     ●                                                    │
│  150 ┤       ●                                                  │
│      │         ●                                                │
│  125 ┤           ●                                              │
│      │             ●                                            │
│  100 ┤               ●                                          │
│      │                 ●                                        │
│   75 ┤                   ●                                      │
│      │                     ●                                    │
│   50 ┤                       ●                                  │
│      │                                                          │
│      └────┬────┬────┬────┬────┬────┬────┬────┬────┬────        │
│         2024  25   26   27   28   29   30   31   32   33       │
│                                                                 │
│  ● Trajectoire cible (-5%/an)                                   │
│  ─ Objectif 2030 : -50% vs 2024                                 │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Plan d'action priorisé

**Matrice impact/effort :**

```
          EFFORT FAIBLE                 EFFORT ÉLEVÉ
        ┌─────────────────────────┬─────────────────────────┐
        │                         │                         │
        │   QUICK WINS            │   PROJETS MAJEURS       │
        │   • Optimisation images │   • Migration cloud     │
IMPACT  │   • Extinction auto     │   • Refonte archi       │
ÉLEVÉ   │   • Right-sizing        │   • Changement provider │
        │                         │                         │
        ├─────────────────────────┼─────────────────────────┤
        │                         │                         │
        │   FILL-INS              │   À ÉVITER              │
        │   • Documentation       │   • Projets cosmétiques │
IMPACT  │   • Formation basique   │   • Over-engineering    │
FAIBLE  │   • Monitoring          │                         │
        │                         │                         │
        └─────────────────────────┴─────────────────────────┘
```

**Exemple de plan d'action :**

| Action | Impact estimé | Effort | Priorité | Échéance |
|--------|---------------|--------|----------|----------|
| Right-sizing cloud | -15 t CO2e | Faible | P1 | Q1 |
| Optimisation images web | -5 t CO2e | Faible | P1 | Q1 |
| Migration région bas carbone | -20 t CO2e | Moyen | P1 | Q2 |
| Prolongation équipements | -10 t CO2e | Moyen | P2 | Q3 |
| Refonte architecture | -25 t CO2e | Élevé | P2 | Q4 |

### Revue périodique

**Processus de revue :**

```
┌─────────────────────────────────────────────────────────────────┐
│                    CYCLE DE REVUE                                │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  QUOTIDIEN (automatisé)                                         │
│  • Alertes sur dépassements                                     │
│  • Dashboard temps réel                                         │
│                                                                 │
│  HEBDOMADAIRE (équipe)                                          │
│  • Revue des métriques clés                                     │
│  • Actions correctives immédiates                               │
│                                                                 │
│  MENSUEL (management)                                           │
│  • Bilan des indicateurs                                        │
│  • Avancement du plan d'action                                  │
│  • Ajustements de priorités                                     │
│                                                                 │
│  TRIMESTRIEL (direction)                                        │
│  • Revue stratégique                                            │
│  • Benchmark externe                                            │
│  • Validation des investissements                               │
│                                                                 │
│  ANNUEL (organisation)                                          │
│  • Bilan complet                                                │
│  • Mise à jour de la stratégie                                  │
│  • Publication du rapport                                       │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 10. Cas Pratiques

### Cas 1 : Bilan carbone SI complet

**Contexte :**
- ESN de 200 personnes
- SI hybride (on-premise + cloud)
- Objectif : Premier bilan carbone

**Démarche :**

```
┌─────────────────────────────────────────────────────────────────┐
│                    ÉTAPES DU BILAN                               │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  SEMAINE 1-2 : CADRAGE                                          │
│  • Définition du périmètre                                      │
│  • Identification des sources de données                        │
│  • Choix de la méthodologie                                     │
│                                                                 │
│  SEMAINE 3-4 : COLLECTE                                         │
│  • Inventaire équipements (CMDB, achats)                        │
│  • Extraction données cloud (CCF)                               │
│  • Collecte factures énergie                                    │
│  • Données réseau et télécoms                                   │
│                                                                 │
│  SEMAINE 5-6 : CALCUL                                           │
│  • Application des facteurs d'émission                          │
│  • Consolidation par catégorie                                  │
│  • Vérification de cohérence                                    │
│                                                                 │
│  SEMAINE 7-8 : ANALYSE ET REPORTING                             │
│  • Identification des postes majeurs                            │
│  • Comparaison avec benchmarks                                  │
│  • Rédaction du rapport                                         │
│  • Présentation et validation                                   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Résultat type :**

| Catégorie | Émissions (t CO2e) | Part |
|-----------|-------------------|------|
| Équipements utilisateurs | 45 | 30% |
| Serveurs on-premise | 25 | 17% |
| Cloud AWS | 35 | 23% |
| Réseau et télécoms | 15 | 10% |
| Bâtiments (part IT) | 10 | 7% |
| Déplacements pro (visio) | 5 | 3% |
| SaaS | 15 | 10% |
| **Total** | **150** | **100%** |

**Actions identifiées :**
1. Migration vers région cloud bas carbone (-15 t)
2. Prolongation durée vie équipements (-10 t)
3. Optimisation cloud (-8 t)

### Cas 2 : Audit écoconception site web

**Contexte :**
- Site e-commerce
- 500 000 visites/mois
- Performance dégradée

**Audit initial :**

| Page | Poids | Requêtes | EcoIndex | g CO2/visite |
|------|-------|----------|----------|--------------|
| Accueil | 4,2 Mo | 120 | F (22) | 2,8 |
| Listing | 3,8 Mo | 95 | F (28) | 2,5 |
| Produit | 5,1 Mo | 145 | G (15) | 3,2 |
| Panier | 2,1 Mo | 65 | D (45) | 1,4 |
| Checkout | 1,8 Mo | 52 | C (55) | 1,2 |

**Impact annuel estimé :**
- 6 millions de visites × 2,2 g CO2 moyen = 13,2 t CO2e/an

**Problèmes identifiés :**
1. Images non optimisées (format JPEG, pas de lazy loading)
2. JavaScript excessif (plusieurs frameworks)
3. Fonts web nombreuses (8 variantes)
4. Absence de cache navigateur
5. Trackers multiples

**Plan d'optimisation :**

| Action | Gain estimé | Complexité |
|--------|-------------|------------|
| Conversion WebP | -40% poids | Faible |
| Lazy loading | -30% requêtes | Faible |
| Bundling JS | -50% JS | Moyenne |
| Réduction fonts | -200 Ko | Faible |
| Cache headers | -60% requêtes repeat | Faible |
| Audit trackers | -500 Ko | Moyenne |

**Résultats après optimisation :**

| Page | Avant | Après | Gain |
|------|-------|-------|------|
| Accueil | 4,2 Mo | 850 Ko | -80% |
| Listing | 3,8 Mo | 720 Ko | -81% |
| Produit | 5,1 Mo | 980 Ko | -81% |
| Panier | 2,1 Mo | 450 Ko | -79% |
| Checkout | 1,8 Mo | 380 Ko | -79% |

**Impact :**
- EcoIndex moyen : F → B
- Émissions : 13,2 t → 2,6 t CO2e/an (-80%)
- Co-bénéfices : temps de chargement -70%, conversion +15%

### Cas 3 : Optimisation cluster Kubernetes

**Contexte :**
- Cluster de 50 nodes
- Applications métier critiques
- Coûts cloud en hausse

**Mesure initiale avec Kepler :**

```bash
# Consommation par namespace
kubectl top pods --all-namespaces
```

| Namespace | CPU (cores) | RAM (Gi) | Énergie (W) |
|-----------|-------------|----------|-------------|
| production | 45 | 180 | 2 500 |
| staging | 15 | 60 | 800 |
| dev | 10 | 40 | 550 |
| monitoring | 8 | 32 | 450 |
| **Total** | **78** | **312** | **4 300** |

**Problèmes identifiés :**
1. Over-provisioning des resources (requests >> usage réel)
2. Pas de scaling automatique
3. Environnements de dev toujours actifs
4. Images non optimisées

**Actions :**

```yaml
# Avant : over-provisioning
resources:
  requests:
    cpu: "2"
    memory: "4Gi"
  limits:
    cpu: "4"
    memory: "8Gi"

# Après : right-sizing basé sur usage réel
resources:
  requests:
    cpu: "500m"
    memory: "1Gi"
  limits:
    cpu: "1"
    memory: "2Gi"
```

**Résultats :**

| Métrique | Avant | Après | Gain |
|----------|-------|-------|------|
| Nodes actifs | 50 | 35 | -30% |
| Consommation (W) | 4 300 | 2 800 | -35% |
| Coût mensuel | 25 000 € | 17 000 € | -32% |
| Émissions (t CO2e/an) | 18 | 12 | -33% |

---

## Checklist récapitulative

### Avant de commencer

```markdown
## Préparation

- [ ] Périmètre défini (organisationnel et technique)
- [ ] Période de référence choisie
- [ ] Méthodologie sélectionnée
- [ ] Sources de données identifiées
- [ ] Outils installés et configurés
- [ ] Équipe constituée
- [ ] Budget alloué
```

### Pendant la mesure

```markdown
## Collecte et calcul

- [ ] Données équipements collectées
- [ ] Données cloud extraites
- [ ] Consommations énergétiques récupérées
- [ ] Données réseau/télécoms rassemblées
- [ ] Facteurs d'émission documentés
- [ ] Hypothèses tracées
- [ ] Calculs vérifiés
- [ ] Cohérence validée
```

### Après la mesure

```markdown
## Analyse et action

- [ ] Rapport rédigé
- [ ] Postes majeurs identifiés
- [ ] Benchmark effectué
- [ ] Plan d'action défini
- [ ] Objectifs fixés
- [ ] Dashboard créé
- [ ] Communication préparée
- [ ] Revue périodique planifiée
```

---

## Pour aller plus loin

### Ressources

**Méthodologies :**
- [GHG Protocol](https://ghgprotocol.org/)
- [Bilan Carbone ADEME](https://bilans-ges.ademe.fr/)
- [SBTi](https://sciencebasedtargets.org/)

**Bases de données :**
- [Base Carbone ADEME](https://base-empreinte.ademe.fr/)
- [NegaOctet](https://negaoctet.org/)
- [Boavizta](https://boavizta.org/)

**Outils :**
- [Cloud Carbon Footprint](https://www.cloudcarbonfootprint.org/)
- [EcoIndex](https://www.ecoindex.fr/)
- [Kepler](https://sustainable-computing.io/)
- [CodeCarbon](https://codecarbon.io/)

**Formations :**
- Certificat Bilan Carbone (ABC)
- ACV numérique (GreenIT.fr)
- MOOC Numérique Responsable (INR)

### Communautés

- [Boavizta](https://boavizta.org/) : Méthodologie open source
- [Green Software Foundation](https://greensoftware.foundation/)
- [ClimateAction.tech](https://climateaction.tech/)

---

## Conclusion

Mesurer l'impact numérique est un exercice complexe mais essentiel. Il ne s'agit pas de viser une précision illusoire, mais de :

1. **Comprendre** les ordres de grandeur
2. **Identifier** les leviers d'action prioritaires
3. **Suivre** l'évolution dans le temps
4. **Communiquer** de manière transparente

La mesure n'est pas une fin en soi. C'est le point de départ d'une démarche d'amélioration continue. Commencez simple, progressez itérativement, et gardez toujours en tête que l'objectif final est de réduire l'impact, pas de le mesurer parfaitement.

---

*Guide mis à jour en janvier 2025. Pour contribuer ou signaler une erreur : [contact]*
