---
title: "Outils de mesure et d'optimisation"
date: 2025-01-27
draft: false
weight: 1
description: "Répertoire exhaustif des outils pour mesurer, analyser et réduire l'empreinte environnementale du numérique."
---

Les outils sont essentiels pour objectiver l'impact environnemental du numérique et piloter les actions d'amélioration. Ce répertoire présente une sélection exhaustive d'outils, classés par catégorie, avec des fiches détaillées et des comparatifs pour vous aider à choisir.

**Temps de lecture estimé : 40 minutes**

---

## 1. Mesure Web

### Vue d'ensemble

| Outil | Type | Prix | Meilleur pour |
|-------|------|------|---------------|
| EcoIndex / GreenIT-Analysis | Extension | Gratuit | Quick check |
| Lighthouse | CLI / Extension | Gratuit | Performance + CI |
| Website Carbon Calculator | Web | Gratuit | Communication |
| WebPageTest | Web / Self-hosted | Gratuit | Analyse détaillée |
| Greenspector | SaaS | Payant | Mesure réelle |
| Ecograder | Web | Gratuit | Vue globale |

---

### EcoIndex / GreenIT-Analysis

**Description**
Référentiel français de mesure de l'empreinte environnementale des sites web. GreenIT-Analysis est l'extension navigateur qui implémente cette méthodologie.

**Métriques mesurées**
- Nombre de requêtes HTTP
- Poids total de la page (Ko)
- Nombre d'éléments DOM
- Score EcoIndex (0-100, notes A-G)
- Émissions CO2 estimées (g)
- Consommation d'eau estimée (cl)

**Installation**

```bash
# Extension navigateur
# Chrome : Chrome Web Store → "GreenIT-Analysis"
# Firefox : Addons → "GreenIT-Analysis"

# CLI (pour automation)
npm install -g ecoindex-cli

# Vérifier l'installation
ecoindex-cli --version
```

**Utilisation CLI**

```bash
# Analyser une URL
ecoindex-cli analyze --url https://example.com

# Analyser plusieurs URLs
ecoindex-cli analyze --url https://example.com --url https://example.com/about

# Depuis un fichier
echo "https://example.com" > urls.txt
echo "https://example.com/about" >> urls.txt
ecoindex-cli analyze --url-file urls.txt

# Export JSON
ecoindex-cli analyze --url https://example.com --output json > report.json

# Export CSV
ecoindex-cli analyze --url-file urls.txt --export csv --output-file results.csv
```

**Intégration CI/CD**

```yaml
# .github/workflows/ecoindex.yml
name: EcoIndex Check

on: [push, pull_request]

jobs:
  ecoindex:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install ecoindex-cli
        run: npm install -g ecoindex-cli

      - name: Run EcoIndex analysis
        run: |
          ecoindex-cli analyze \
            --url ${{ vars.STAGING_URL }} \
            --output json > ecoindex-report.json

      - name: Check score threshold
        run: |
          SCORE=$(jq '.score' ecoindex-report.json)
          if [ "$SCORE" -lt 50 ]; then
            echo "EcoIndex score $SCORE is below threshold (50)"
            exit 1
          fi
          echo "EcoIndex score: $SCORE"

      - name: Upload report
        uses: actions/upload-artifact@v3
        with:
          name: ecoindex-report
          path: ecoindex-report.json
```

**Interprétation des résultats**

| Note | Score | Requêtes | Poids | DOM |
|------|-------|----------|-------|-----|
| A | 80-100 | < 20 | < 200 Ko | < 500 |
| B | 70-79 | 20-30 | 200-500 Ko | 500-750 |
| C | 55-69 | 30-50 | 500 Ko-1 Mo | 750-1000 |
| D | 40-54 | 50-70 | 1-2 Mo | 1000-1500 |
| E | 25-39 | 70-100 | 2-3 Mo | 1500-2000 |
| F | 10-24 | 100-150 | 3-5 Mo | 2000-3000 |
| G | 0-9 | > 150 | > 5 Mo | > 3000 |

**Points forts**
- Méthodologie française reconnue
- Simple et rapide
- Open source
- Intégration CI possible

**Limites**
- Ne mesure pas le JavaScript exécuté
- Pas de simulation de charge serveur
- Score relatif (pas d'émissions absolues précises)

**Ressources**
- Site officiel : [ecoindex.fr](https://www.ecoindex.fr)
- GitHub : [github.com/cnumr/GreenIT-Analysis](https://github.com/cnumr/GreenIT-Analysis)
- Documentation CLI : [github.com/cnumr/ecoindex-cli](https://github.com/cnumr/ecoindex-cli)

---

### Lighthouse

**Description**
Outil Google d'audit qualité web intégré à Chrome DevTools. Mesure performance, accessibilité, bonnes pratiques et SEO. Bien que non centré sur l'écoconception, les gains de performance sont fortement corrélés aux gains environnementaux.

**Métriques clés pour l'écoconception**
- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- Total Blocking Time (TBT)
- Cumulative Layout Shift (CLS)
- Speed Index
- Poids des ressources
- Nombre de requêtes

**Installation**

```bash
# Via npm
npm install -g lighthouse

# Via Chrome DevTools
# F12 → Onglet "Lighthouse"

# Via extension Chrome
# Chrome Web Store → "Lighthouse"
```

**Utilisation CLI**

```bash
# Audit complet
lighthouse https://example.com --output html --output-path report.html

# Format JSON
lighthouse https://example.com --output json --output-path report.json

# Focus performance uniquement
lighthouse https://example.com --only-categories=performance

# Mode desktop (défaut : mobile)
lighthouse https://example.com --preset=desktop

# Avec throttling réseau
lighthouse https://example.com --throttling.cpuSlowdownMultiplier=4

# Quiet mode (CI)
lighthouse https://example.com --chrome-flags="--headless" --quiet
```

**Intégration avec Lighthouse CI**

```yaml
# lighthouserc.js
module.exports = {
  ci: {
    collect: {
      url: ['https://example.com/', 'https://example.com/about'],
      numberOfRuns: 3,
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.8 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'first-contentful-paint': ['error', { maxNumericValue: 2000 }],
        'largest-contentful-paint': ['error', { maxNumericValue: 2500 }],
        'total-blocking-time': ['error', { maxNumericValue: 200 }],
        'resource-summary:script:size': ['error', { maxNumericValue: 300000 }],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
```

```yaml
# .github/workflows/lighthouse.yml
name: Lighthouse CI

on: [push]

jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Run Lighthouse CI
        uses: treosh/lighthouse-ci-action@v10
        with:
          urls: |
            https://example.com/
            https://example.com/about
          configPath: ./lighthouserc.js
          uploadArtifacts: true
          temporaryPublicStorage: true
```

**Points forts**
- Intégré à Chrome (aucune installation)
- Métriques Core Web Vitals
- Recommandations détaillées
- Bien documenté

**Limites**
- Pas de métrique d'impact environnemental direct
- Variation entre runs (utiliser plusieurs passes)
- Throttling simulé (pas de conditions réelles)

**Ressources**
- Documentation : [developer.chrome.com/docs/lighthouse](https://developer.chrome.com/docs/lighthouse)
- Lighthouse CI : [github.com/GoogleChrome/lighthouse-ci](https://github.com/GoogleChrome/lighthouse-ci)

---

### Website Carbon Calculator

**Description**
Service en ligne qui estime les émissions de CO2 d'une page web basé sur le transfert de données et le mix énergétique de l'hébergeur.

**Utilisation**
1. Aller sur [websitecarbon.com](https://websitecarbon.com)
2. Entrer l'URL
3. Obtenir l'estimation en g CO2 par visite

**API (usage programmatique)**

```bash
# API publique (usage modéré)
curl "https://api.websitecarbon.com/site?url=https://example.com"
```

```python
import requests

def get_website_carbon(url):
    response = requests.get(
        "https://api.websitecarbon.com/site",
        params={"url": url}
    )
    data = response.json()
    return {
        'url': data['url'],
        'green': data['green'],  # Hébergeur vert ?
        'bytes': data['bytes'],
        'cleanerThan': data['cleanerThan'],  # Percentile
        'statistics': {
            'co2_per_view': data['statistics']['co2']['grid']['grams'],
            'energy_per_view': data['statistics']['energy']
        }
    }

result = get_website_carbon("https://example.com")
print(f"CO2 par visite: {result['statistics']['co2_per_view']:.2f}g")
```

**Points forts**
- Simple et visuel
- Bon pour la communication
- Compare à la moyenne du web
- Détecte les hébergeurs verts

**Limites**
- Estimation approximative
- Ne prend pas en compte le JavaScript
- Basé uniquement sur le transfert

---

### WebPageTest

**Description**
Outil avancé de test de performance web, permettant des tests depuis différentes localisations, navigateurs et conditions réseau.

**Utilisation en ligne**
[webpagetest.org](https://www.webpagetest.org)

**Installation self-hosted (Docker)**

```bash
docker run -d -p 4000:80 \
  --name webpagetest \
  webpagetest/server
```

**API**

```bash
# Soumettre un test
curl "https://www.webpagetest.org/runtest.php?url=https://example.com&k=YOUR_API_KEY&f=json"

# Récupérer les résultats
curl "https://www.webpagetest.org/jsonResult.php?test=TEST_ID"
```

**Points forts**
- Tests depuis différentes régions
- Conditions réseau réalistes
- Waterfall détaillé
- Video et filmstrip

**Limites**
- Plus complexe que les autres outils
- Rate limiting sur l'API publique

---

### Greenspector

**Description**
Solution professionnelle de mesure d'impact environnemental pour web et mobile, avec mesures réelles sur devices physiques.

**Fonctionnalités**
- Mesure sur devices réels (consommation batterie, CPU, mémoire)
- Tests automatisés de parcours utilisateur
- Comparaison entre versions
- Intégration CI/CD
- Rapport détaillé avec recommandations

**Points forts**
- Mesure réelle (pas de simulation)
- Données précises
- Support mobile natif
- Accompagnement expert

**Limites**
- Solution payante
- Nécessite infrastructure de test

**Ressources**
- Site : [greenspector.com](https://greenspector.com)

---

### Comparatif mesure web

| Critère | EcoIndex | Lighthouse | Website Carbon | Greenspector |
|---------|----------|------------|----------------|--------------|
| Prix | Gratuit | Gratuit | Gratuit | Payant |
| Précision | Moyenne | Bonne | Faible | Élevée |
| CI/CD | Oui | Oui | Limité | Oui |
| Mobile | Non | Simulé | Non | Oui (réel) |
| Recommandations | Basiques | Détaillées | Non | Détaillées |
| Impact env. direct | Oui | Non | Oui | Oui |

---

## 2. Analyse de Code

### Vue d'ensemble

| Outil | Langages | Type | Prix |
|-------|----------|------|------|
| ecoCode | Java, PHP, JS, Python | Plugin SonarQube | Gratuit |
| SonarQube | Multi | Plateforme | Gratuit/Payant |
| CodeCarbon | Python | Bibliothèque | Gratuit |
| Green Metrics Tool | Multi | Plateforme | Gratuit |

---

### ecoCode

**Description**
Projet open source qui ajoute des règles d'éco-conception à SonarQube. Détecte les anti-patterns de code qui augmentent la consommation d'énergie.

**Langages supportés**
- Java (le plus complet)
- PHP
- Python
- JavaScript/TypeScript
- Android (Java/Kotlin)
- iOS (Swift)

**Exemples de règles**

| ID | Description | Langage |
|----|-------------|---------|
| EC1 | Éviter les requêtes SQL dans les boucles | Java |
| EC2 | Utiliser des types primitifs plutôt que des wrappers | Java |
| EC4 | Éviter la création d'objets dans les boucles | Java |
| EC53 | Utiliser des collections avec taille initiale | Java |
| EC67 | Éviter les appels système dans les boucles | Python |
| EC72 | Éviter le regex inutile | JavaScript |

**Installation (SonarQube)**

```bash
# Télécharger les plugins depuis les releases GitHub
# https://github.com/green-code-initiative/ecoCode/releases

# Copier dans le dossier extensions/plugins de SonarQube
cp sonar-ecocode-java-plugin-*.jar $SONARQUBE_HOME/extensions/plugins/
cp sonar-ecocode-javascript-plugin-*.jar $SONARQUBE_HOME/extensions/plugins/
cp sonar-ecocode-python-plugin-*.jar $SONARQUBE_HOME/extensions/plugins/

# Redémarrer SonarQube
$SONARQUBE_HOME/bin/linux-x86-64/sonar.sh restart
```

**Configuration Quality Profile**

```xml
<!-- Pour activer les règles ecoCode dans un profil -->
<!-- Administration → Quality Profiles → Create → Copy from Sonar way -->
<!-- Activer les règles avec le tag "ecocode" -->
```

**Intégration CI**

```yaml
# .github/workflows/sonar.yml
name: SonarQube Analysis

on: [push, pull_request]

jobs:
  sonar:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
        with:
          fetch-depth: 0

      - name: SonarQube Scan
        uses: sonarsource/sonarqube-scan-action@master
        env:
          SONAR_TOKEN: ${{ secrets.SONAR_TOKEN }}
          SONAR_HOST_URL: ${{ secrets.SONAR_HOST_URL }}

      - name: Check Quality Gate
        uses: sonarsource/sonarqube-quality-gate-action@master
        timeout-minutes: 5
        env:
          SONAR_TOKEN: ${{ secrets.SONAR_TOKEN }}
```

**Points forts**
- Intégré à SonarQube (workflow existant)
- Règles documentées et justifiées
- Communauté active
- Multi-langage

**Limites**
- Nécessite SonarQube
- Couverture variable selon les langages
- Ne mesure pas la consommation réelle

**Ressources**
- GitHub : [github.com/green-code-initiative/ecoCode](https://github.com/green-code-initiative/ecoCode)
- Règles détaillées : [github.com/green-code-initiative/ecoCode/tree/main/ecocode-rules-specifications](https://github.com/green-code-initiative/ecoCode/tree/main/ecocode-rules-specifications)

---

### CodeCarbon

**Description**
Bibliothèque Python pour tracker les émissions de CO2 liées à l'exécution de code, particulièrement utile pour le machine learning et le data processing.

**Installation**

```bash
pip install codecarbon
```

**Utilisation basique**

```python
from codecarbon import EmissionsTracker

# Méthode 1 : Context manager
with EmissionsTracker() as tracker:
    # Votre code
    model.fit(X_train, y_train)

# Méthode 2 : Explicite
tracker = EmissionsTracker()
tracker.start()
# Votre code
model.fit(X_train, y_train)
emissions = tracker.stop()
print(f"Emissions: {emissions} kg CO2eq")
```

**Utilisation avec décorateur**

```python
from codecarbon import track_emissions

@track_emissions(project_name="training", output_dir="./emissions")
def train_model(X, y):
    model = RandomForestClassifier()
    model.fit(X, y)
    return model

model = train_model(X_train, y_train)
```

**Configuration avancée**

```python
from codecarbon import EmissionsTracker

tracker = EmissionsTracker(
    project_name="mon_projet",
    measure_power_secs=15,      # Intervalle de mesure
    tracking_mode="process",     # 'process' ou 'machine'
    log_level="warning",
    save_to_file=True,
    output_dir="./emissions",
    save_to_api=False,          # Envoyer à l'API CodeCarbon
    gpu_ids=[0, 1],             # GPUs à tracker
    emissions_endpoint=None,     # Endpoint custom
    experiment_id=None,
    country_iso_code="FRA",     # Override la détection auto
    region=None,
    cloud_provider="aws",       # aws, gcp, azure
    cloud_region="eu-west-3",
)
```

**Fichier de configuration**

```ini
# .codecarbon.config
[codecarbon]
project_name = mon_projet
output_dir = ./emissions
save_to_file = true
save_to_api = false
log_level = warning
tracking_mode = machine
measure_power_secs = 15
```

**Analyse des résultats**

```python
import pandas as pd

# Lire les emissions
df = pd.read_csv("emissions/emissions.csv")

# Analyse par run
print(df.groupby('project_name')['emissions'].sum())

# Évolution temporelle
df['timestamp'] = pd.to_datetime(df['timestamp'])
df.set_index('timestamp')['emissions'].plot()
```

**Points forts**
- Simple à intégrer
- Mesure réelle (via RAPL/GPU)
- Facteurs d'émission par région
- Support GPU (NVIDIA)

**Limites**
- Python uniquement
- Précision variable selon le hardware
- Overhead de mesure

**Ressources**
- Site : [codecarbon.io](https://codecarbon.io)
- Documentation : [mlco2.github.io/codecarbon](https://mlco2.github.io/codecarbon)
- GitHub : [github.com/mlco2/codecarbon](https://github.com/mlco2/codecarbon)

---

### Green Metrics Tool

**Description**
Plateforme open source pour mesurer la consommation énergétique des logiciels avec une approche standardisée et reproductible.

**Installation (Docker)**

```bash
git clone https://github.com/green-coding-berlin/green-metrics-tool.git
cd green-metrics-tool
docker-compose up -d
```

**Utilisation**
1. Définir un fichier `usage_scenario.yml` décrivant les actions à mesurer
2. Soumettre le scénario
3. Visualiser les résultats dans le dashboard

**Exemple de scénario**

```yaml
name: Mon Application
author: equipe@example.com
description: Test de performance énergétique

compose-file: docker-compose.yml

sci:
  R_d: Request

flow:
  - name: Startup
    container: app
    commands:
      - type: console
        command: sleep 5
        note: Attente démarrage

  - name: Homepage Load
    container: app
    commands:
      - type: web
        url: http://app:8080/
        note: Chargement page d'accueil

  - name: API Call
    container: app
    commands:
      - type: web
        url: http://app:8080/api/data
        note: Appel API
```

**Points forts**
- Approche scientifique
- Reproductibilité
- Dashboard intégré
- Comparaison de versions

**Limites**
- Complexité de setup
- Nécessite Docker

**Ressources**
- GitHub : [github.com/green-coding-berlin/green-metrics-tool](https://github.com/green-coding-berlin/green-metrics-tool)
- Dashboard public : [metrics.green-coding.io](https://metrics.green-coding.io)

---

## 3. Mesure Infrastructure

### Vue d'ensemble

| Outil | Périmètre | Type | Prix |
|-------|-----------|------|------|
| Cloud Carbon Footprint | Multi-cloud | Open source | Gratuit |
| AWS Carbon Footprint | AWS | Natif | Gratuit |
| Azure Emissions Dashboard | Azure | Natif | Gratuit |
| GCP Carbon Footprint | GCP | Natif | Gratuit |
| Kepler | Kubernetes | Open source | Gratuit |
| Scaphandre | Serveurs | Open source | Gratuit |
| PowerAPI | Serveurs | Open source | Gratuit |

---

### Cloud Carbon Footprint

**Description**
Outil open source pour mesurer et visualiser l'empreinte carbone de l'utilisation du cloud sur AWS, GCP et Azure.

**Installation**

```bash
# Clone du repository
git clone https://github.com/cloud-carbon-footprint/cloud-carbon-footprint.git
cd cloud-carbon-footprint

# Installation des dépendances
yarn install

# Configuration
cp packages/api/.env.template packages/api/.env
cp packages/client/.env.template packages/client/.env

# Éditer packages/api/.env avec vos credentials
```

**Configuration AWS**

```bash
# .env
AWS_USE_BILLING_DATA=true
AWS_ATHENA_DB_NAME=athenacurcfn_cost_and_usage
AWS_ATHENA_DB_TABLE=cost_and_usage
AWS_ATHENA_REGION=us-east-1
AWS_ATHENA_QUERY_RESULT_LOCATION=s3://my-bucket/athena-results/
AWS_BILLING_ACCOUNT_ID=123456789012
AWS_BILLING_ACCOUNT_NAME=my-account
```

**Configuration GCP**

```bash
# .env
GCP_USE_BILLING_DATA=true
GCP_USE_CARBON_FREE_ENERGY_PERCENTAGE=true
GOOGLE_APPLICATION_CREDENTIALS=/path/to/service-account.json
GCP_BIG_QUERY_TABLE=billing_export.gcp_billing_export_v1_XXXXXX
GCP_BILLING_PROJECT_ID=my-project
GCP_BILLING_PROJECT_NAME=My Project
```

**Démarrage**

```bash
# Démarrer l'API et le client
yarn start

# Ou avec Docker
docker-compose up
```

**Accès**
- API : http://localhost:4000
- Dashboard : http://localhost:3000

**Points forts**
- Support multi-cloud
- Open source
- Dashboard visuel
- Historique et tendances

**Limites**
- Setup complexe
- Nécessite accès aux données de billing
- Estimation basée sur les coûts

**Ressources**
- Site : [cloudcarbonfootprint.org](https://www.cloudcarbonfootprint.org)
- GitHub : [github.com/cloud-carbon-footprint/cloud-carbon-footprint](https://github.com/cloud-carbon-footprint/cloud-carbon-footprint)

---

### Outils natifs cloud

#### AWS Customer Carbon Footprint Tool

**Accès**
Console AWS → Billing → Cost & Usage Reports → Customer Carbon Footprint Tool

**Données disponibles**
- Émissions scope 1, 2, 3 par service
- Tendance mensuelle
- Comparaison avec électricité sur site

**API (via Sustainability API)**

```python
import boto3

client = boto3.client('sustainability')

response = client.get_carbon_footprint_summary(
    dateRange={
        'startDate': '2024-01-01',
        'endDate': '2024-12-31'
    }
)

print(f"Total emissions: {response['totalCarbonEmissions']} kg CO2e")
```

#### Azure Emissions Impact Dashboard

**Accès**
Azure Portal → Cost Management → Carbon Optimization

**Power BI Template**

```bash
# Télécharger le template depuis
# https://github.com/Azure/azure-sustainability
```

#### GCP Carbon Footprint

**Accès**
Console GCP → Carbon Footprint

**Export BigQuery**

```sql
SELECT
  usage_month,
  service.description,
  location.location,
  carbon_footprint_total_kgCO2e.location_based as emissions_kg
FROM `project.dataset.carbon_footprint_*`
WHERE usage_month >= '2024-01'
ORDER BY emissions_kg DESC
```

---

### Kepler (Kubernetes)

**Description**
Kubernetes Efficient Power Level Exporter - exporte des métriques de consommation énergétique des pods Kubernetes vers Prometheus.

**Installation Helm**

```bash
helm repo add kepler https://sustainable-computing-io.github.io/kepler-helm-chart
helm repo update

helm install kepler kepler/kepler \
  --namespace kepler \
  --create-namespace \
  --set serviceMonitor.enabled=true
```

**Installation YAML**

```bash
kubectl apply -f https://raw.githubusercontent.com/sustainable-computing-io/kepler/main/manifests/kubernetes/deployment.yaml
```

**Métriques Prometheus**

```promql
# Consommation par pod (joules)
kepler_container_joules_total{container_name="my-app"}

# Par namespace
sum(rate(kepler_container_joules_total[5m])) by (namespace)

# Conversion en Watts
sum(rate(kepler_container_joules_total[1m])) by (pod_name)

# Top 10 pods par consommation
topk(10, sum(rate(kepler_container_joules_total[5m])) by (pod_name))
```

**Dashboard Grafana**

```json
{
  "dashboard": {
    "title": "Kepler Energy Dashboard",
    "panels": [
      {
        "title": "Total Power Consumption (Watts)",
        "type": "stat",
        "targets": [{
          "expr": "sum(rate(kepler_container_joules_total[1m]))"
        }]
      },
      {
        "title": "Power by Namespace",
        "type": "piechart",
        "targets": [{
          "expr": "sum(rate(kepler_container_joules_total[5m])) by (namespace)",
          "legendFormat": "{{namespace}}"
        }]
      },
      {
        "title": "Power Trend",
        "type": "timeseries",
        "targets": [{
          "expr": "sum(rate(kepler_container_joules_total[5m])) by (namespace)"
        }]
      }
    ]
  }
}
```

**Points forts**
- Métriques au niveau pod
- Intégration Prometheus/Grafana
- Open source (CNCF)
- Faible overhead

**Limites**
- Précision dépend du hardware
- Nécessite accès RAPL (Linux)

**Ressources**
- GitHub : [github.com/sustainable-computing-io/kepler](https://github.com/sustainable-computing-io/kepler)
- Documentation : [sustainable-computing.io](https://sustainable-computing.io)

---

### Scaphandre

**Description**
Agent de mesure de consommation électrique des serveurs et conteneurs, développé par Hubblo.

**Installation**

```bash
# Via cargo
cargo install scaphandre

# Via package (Debian/Ubuntu)
wget https://github.com/hubblo-org/scaphandre/releases/download/v1.0.0/scaphandre_1.0.0_amd64.deb
sudo dpkg -i scaphandre_1.0.0_amd64.deb

# Via Docker
docker run -d \
  --name scaphandre \
  -v /sys/class/powercap:/sys/class/powercap \
  -v /proc:/proc \
  -p 8080:8080 \
  hubblo/scaphandre prometheus
```

**Exporters disponibles**

| Exporter | Description |
|----------|-------------|
| prometheus | Métriques Prometheus |
| json | Export JSON |
| qemu | Pour VMs QEMU/KVM |
| riemann | Export Riemann |
| stdout | Affichage console |

**Usage Prometheus exporter**

```bash
scaphandre prometheus --port 8080 --host 0.0.0.0
```

**Métriques**

```promql
# Puissance totale hôte (microwatts)
scaphandre_host_power_microwatts

# Par process
scaphandre_process_power_consumption_microwatts{exe="python"}

# Énergie cumulée
scaphandre_host_energy_microjoules
```

**Points forts**
- Granularité process
- Léger
- Multi-plateforme
- Support Docker/Kubernetes

**Limites**
- Nécessite RAPL (Intel récent)
- Root requis

**Ressources**
- GitHub : [github.com/hubblo-org/scaphandre](https://github.com/hubblo-org/scaphandre)
- Documentation : [hubblo-org.github.io/scaphandre-documentation](https://hubblo-org.github.io/scaphandre-documentation)

---

## 4. Optimisation des Médias

### Images

| Outil | Type | Usage | Prix |
|-------|------|-------|------|
| Squoosh | Web | Compression manuelle | Gratuit |
| Sharp | Node.js | Backend/Build | Gratuit |
| ImageMagick | CLI | Scripts | Gratuit |
| ImageOptim | macOS | Desktop | Gratuit |
| TinyPNG | Web/API | PNG/JPEG | Freemium |
| SVGO | CLI/Node | SVG | Gratuit |

---

### Squoosh

**Description**
Application web Google pour compresser et convertir des images avec comparaison visuelle en temps réel.

**URL** : [squoosh.app](https://squoosh.app)

**Fonctionnalités**
- Conversion entre formats (JPEG, PNG, WebP, AVIF)
- Compression avec aperçu
- Redimensionnement
- Réduction de couleurs
- Comparaison avant/après

**CLI (via npm)**

```bash
npm install -g @aspect/squoosh

# Convertir en WebP
squoosh-cli --webp '{"quality":80}' image.jpg

# Convertir en AVIF
squoosh-cli --avif '{"quality":75}' image.jpg

# Redimensionner
squoosh-cli --resize '{"width":800}' --webp '{}' image.jpg
```

---

### Sharp (Node.js)

**Description**
Bibliothèque Node.js haute performance pour le traitement d'images, basée sur libvips.

**Installation**

```bash
npm install sharp
```

**Utilisation**

```javascript
const sharp = require('sharp');

// Conversion WebP
await sharp('input.jpg')
  .webp({ quality: 80 })
  .toFile('output.webp');

// Redimensionnement responsive
const sizes = [320, 640, 1024, 1920];
for (const width of sizes) {
  await sharp('input.jpg')
    .resize(width)
    .webp({ quality: 80 })
    .toFile(`output-${width}.webp`);
}

// Pipeline complet
await sharp('input.jpg')
  .resize(800, 600, { fit: 'inside' })
  .webp({ quality: 80, effort: 6 })
  .toBuffer()
  .then(data => {
    console.log(`Output size: ${data.length} bytes`);
  });

// AVIF (meilleure compression)
await sharp('input.jpg')
  .avif({ quality: 65, effort: 9 })
  .toFile('output.avif');
```

**Script de build optimisé**

```javascript
const sharp = require('sharp');
const glob = require('glob');
const path = require('path');

async function optimizeImages() {
  const images = glob.sync('src/images/**/*.{jpg,jpeg,png}');

  for (const image of images) {
    const baseName = path.basename(image, path.extname(image));
    const outDir = 'dist/images';

    // Version WebP
    await sharp(image)
      .resize(1920, null, { withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(`${outDir}/${baseName}.webp`);

    // Version AVIF (fallback)
    await sharp(image)
      .resize(1920, null, { withoutEnlargement: true })
      .avif({ quality: 65 })
      .toFile(`${outDir}/${baseName}.avif`);

    // Version originale optimisée
    await sharp(image)
      .resize(1920, null, { withoutEnlargement: true })
      .jpeg({ quality: 80, progressive: true })
      .toFile(`${outDir}/${baseName}.jpg`);

    console.log(`Optimized: ${baseName}`);
  }
}

optimizeImages();
```

---

### SVGO

**Description**
Optimiseur SVG en Node.js, élimine les métadonnées inutiles et optimise les paths.

**Installation**

```bash
npm install -g svgo
```

**Utilisation CLI**

```bash
# Optimiser un fichier
svgo input.svg -o output.svg

# Optimiser un dossier
svgo -f ./icons -o ./icons-optimized

# Afficher les stats
svgo input.svg --show-plugins

# Configuration personnalisée
svgo input.svg --config svgo.config.js
```

**Configuration**

```javascript
// svgo.config.js
module.exports = {
  plugins: [
    'preset-default',
    'removeDimensions',
    {
      name: 'removeAttrs',
      params: {
        attrs: '(fill|stroke)'
      }
    },
    {
      name: 'addAttributesToSVGElement',
      params: {
        attributes: [{ 'aria-hidden': 'true' }]
      }
    }
  ]
};
```

---

## 5. Audit Accessibilité

L'accessibilité et l'écoconception partagent des principes communs : simplicité, sobriété, performance.

### Vue d'ensemble

| Outil | Type | Standards | Prix |
|-------|------|-----------|------|
| axe DevTools | Extension | WCAG 2.1 | Freemium |
| WAVE | Extension/Web | WCAG 2.1 | Gratuit |
| Pa11y | CLI | WCAG 2.1 | Gratuit |
| Lighthouse Accessibility | CLI | WCAG | Gratuit |

---

### axe DevTools

**Description**
Extension navigateur et bibliothèque pour auditer l'accessibilité des pages web.

**Installation Extension**
- Chrome : Chrome Web Store → "axe DevTools"
- Firefox : Addons → "axe DevTools"

**Installation CLI/Node**

```bash
npm install @axe-core/cli
```

**Utilisation CLI**

```bash
# Audit d'une URL
axe https://example.com

# Avec règles spécifiques
axe https://example.com --rules color-contrast,image-alt

# Export JSON
axe https://example.com --save report.json
```

**Intégration dans les tests**

```javascript
const { AxePuppeteer } = require('@axe-core/puppeteer');
const puppeteer = require('puppeteer');

describe('Accessibility', () => {
  it('should have no accessibility violations', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://example.com');

    const results = await new AxePuppeteer(page).analyze();

    expect(results.violations).toHaveLength(0);

    await browser.close();
  });
});
```

---

### Pa11y

**Description**
Outil CLI et Node.js pour tester l'accessibilité, avec support CI/CD.

**Installation**

```bash
npm install -g pa11y
npm install -g pa11y-ci
```

**Utilisation**

```bash
# Test simple
pa11y https://example.com

# Avec standard spécifique
pa11y https://example.com --standard WCAG2AA

# Format JSON
pa11y https://example.com --reporter json > report.json

# Ignorer certaines règles
pa11y https://example.com --ignore "WCAG2AA.Principle1.Guideline1_1.1_1_1.H37"
```

**Configuration CI**

```json
// .pa11yci
{
  "defaults": {
    "standard": "WCAG2AA",
    "timeout": 10000,
    "wait": 1000
  },
  "urls": [
    "https://example.com/",
    "https://example.com/about",
    {
      "url": "https://example.com/login",
      "actions": [
        "set field #username to test@example.com",
        "click element #submit"
      ]
    }
  ]
}
```

```yaml
# .github/workflows/a11y.yml
name: Accessibility

on: [push]

jobs:
  pa11y:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Run Pa11y CI
        run: |
          npm install -g pa11y-ci
          pa11y-ci
```

---

## 6. Bilan et Reporting

### Vue d'ensemble

| Outil | Périmètre | Type | Prix |
|-------|-----------|------|------|
| Fruggr | SI complet | SaaS | Payant |
| Verdikt | SI complet | SaaS | Payant |
| Resilio | Organisation | SaaS | Payant |
| WeNR | Organisation | Questionnaire | Gratuit |
| NegaOctet | ACV | Base de données | Gratuit |
| Boavizta | ACV | Base de données | Gratuit |

---

### Fruggr

**Description**
Plateforme SaaS complète pour mesurer et piloter l'empreinte environnementale du numérique.

**Fonctionnalités**
- Inventaire automatisé du parc matériel
- Mesure web (extension navigateur)
- Calcul ACV simplifié
- Tableaux de bord personnalisables
- Export reporting (CSRD, RSE)

**Cas d'usage**
- Bilan carbone SI
- Suivi d'objectifs
- Benchmark sectoriel

**Ressources**
- Site : [fruggr.io](https://www.fruggr.io)

---

### NegaOctet

**Description**
Base de données de facteurs d'impact environnemental pour le numérique, utilisable pour les ACV.

**Contenu**
- Facteurs d'émission équipements
- Facteurs d'émission services cloud
- Facteurs d'émission réseau
- Méthodologie documentée

**Utilisation**

```python
# Exemple de calcul avec les facteurs NegaOctet
facteurs = {
    'laptop_fabrication_kg_co2e': 300,
    'laptop_usage_kwh_an': 25,
    'ecran_fabrication_kg_co2e': 350,
    'ecran_usage_kwh_an': 35,
    'kwh_france_kg_co2e': 0.057
}

def calculer_empreinte_poste(duree_vie_ans=5):
    # Fabrication (amorti sur durée de vie)
    fab_laptop = facteurs['laptop_fabrication_kg_co2e'] / duree_vie_ans
    fab_ecran = facteurs['ecran_fabrication_kg_co2e'] / 7  # 7 ans pour écran

    # Usage annuel
    usage_laptop = facteurs['laptop_usage_kwh_an'] * facteurs['kwh_france_kg_co2e']
    usage_ecran = facteurs['ecran_usage_kwh_an'] * facteurs['kwh_france_kg_co2e']

    total = fab_laptop + fab_ecran + usage_laptop + usage_ecran
    return total

print(f"Empreinte poste de travail : {calculer_empreinte_poste():.1f} kg CO2e/an")
```

**Ressources**
- Site : [negaoctet.org](https://negaoctet.org)

---

### Boavizta

**Description**
Initiative collaborative pour standardiser la mesure d'impact environnemental du numérique.

**Outils proposés**
- **Datavizta** : Base de données de facteurs d'impact
- **BoaviztAPI** : API pour calculs d'impact
- **Cloud Scanner** : Scan d'infra cloud

**API Boavizta**

```bash
# Exemple requête API
curl -X POST "https://api.boavizta.org/v1/server/" \
  -H "Content-Type: application/json" \
  -d '{
    "model": {
      "type": "rack"
    },
    "configuration": {
      "cpu": {"units": 2, "core_units": 24},
      "ram": [{"units": 12, "capacity": 32}],
      "disk": [{"units": 4, "capacity": 1000, "type": "ssd"}]
    },
    "usage": {
      "years_use_time": 5,
      "usage_location": "FRA"
    }
  }'
```

**Ressources**
- Site : [boavizta.org](https://boavizta.org)
- API : [api.boavizta.org](https://api.boavizta.org)
- GitHub : [github.com/Boavizta](https://github.com/Boavizta)

---

## 7. Développement et CI/CD

### Eco-CI (GitHub Actions)

**Description**
Action GitHub pour mesurer l'empreinte carbone des workflows CI/CD.

**Installation**

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

      - name: Get Measurement
        uses: green-coding-solutions/eco-ci-energy-estimation@v3
        with:
          task: get-measurement
          label: "build-and-test"

      - name: Show Results
        uses: green-coding-solutions/eco-ci-energy-estimation@v3
        with:
          task: display-results
```

**Ressources**
- GitHub : [github.com/green-coding-solutions/eco-ci-energy-estimation](https://github.com/green-coding-solutions/eco-ci-energy-estimation)

---

### Plugins IDE

#### VS Code

| Extension | Description |
|-----------|-------------|
| GreenCode | Suggestions d'écoconception |
| Import Cost | Affiche le poids des imports |
| Bundle Size | Taille des dépendances |

#### JetBrains (IntelliJ, WebStorm)

| Plugin | Description |
|--------|-------------|
| SonarLint | Analyse avec règles ecoCode |
| Energy Efficiency | Suggestions énergétiques |

---

## 8. Stacks Recommandés

### Stack développeur web frontend

```
MESURE
├── EcoIndex CLI (audit rapide)
├── Lighthouse (performance)
└── axe DevTools (accessibilité)

BUILD
├── Sharp (optimisation images)
├── SVGO (optimisation SVG)
└── Bundler avec tree-shaking

CI/CD
├── Lighthouse CI
├── EcoIndex CI
└── Pa11y CI
```

### Stack développeur backend

```
MESURE
├── CodeCarbon (Python)
├── JoularJX (Java)
└── Profilers énergétiques

ANALYSE
├── SonarQube + ecoCode
└── Green Metrics Tool

CI/CD
├── Tests de performance
├── Seuils d'énergie
└── Eco-CI
```

### Stack DevOps / SRE

```
INFRASTRUCTURE
├── Kepler (Kubernetes)
├── Scaphandre (serveurs)
└── Cloud Carbon Footprint

MONITORING
├── Prometheus + Grafana
├── Alertes consommation
└── Dashboards énergie

OPTIMISATION
├── Right-sizing automatisé
├── Scheduling
└── FinOps tools
```

### Stack responsable SI

```
BILAN
├── Fruggr ou Verdikt
├── NegaOctet (facteurs)
└── Boavizta API

REPORTING
├── Dashboard consolidé
├── Export CSRD
└── Benchmarks sectoriels

GOUVERNANCE
├── Indicateurs suivis
├── Plans d'action
└── Communication
```

---

## Ressources complémentaires

### Bases de données de facteurs

| Source | Contenu | Lien |
|--------|---------|------|
| Base Carbone ADEME | Facteurs France | [base-empreinte.ademe.fr](https://base-empreinte.ademe.fr) |
| NegaOctet | Facteurs numériques | [negaoctet.org](https://negaoctet.org) |
| Boavizta | API et données | [boavizta.org](https://boavizta.org) |
| Electricity Maps | Mix électriques temps réel | [electricitymaps.com](https://app.electricitymaps.com) |

### Communautés

| Communauté | Focus | Lien |
|------------|-------|------|
| Green Software Foundation | Standards | [greensoftware.foundation](https://greensoftware.foundation) |
| ClimateAction.tech | Communauté | [climateaction.tech](https://climateaction.tech) |
| Sustainable Computing | Kubernetes | [sustainable-computing.io](https://sustainable-computing.io) |
| Green Code Initiative | ecoCode | [github.com/green-code-initiative](https://github.com/green-code-initiative) |

---

## Conclusion

Cette liste n'est pas exhaustive. Le domaine évolue rapidement, et de nouveaux outils apparaissent régulièrement. L'essentiel est de commencer quelque part, avec les outils qui correspondent à votre contexte :

1. **Commencez simple** : EcoIndex + Lighthouse pour le web
2. **Automatisez** : Intégrez au CI/CD dès que possible
3. **Suivez** : Mettez en place des dashboards
4. **Progressez** : Ajoutez des outils selon vos besoins

---

*Ressource mise à jour en janvier 2025. N'hésitez pas à suggérer des ajouts.*
