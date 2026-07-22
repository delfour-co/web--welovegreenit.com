---
title: "Observabilité : une télémétrie à canaliser"
date: 2026-07-21T13:54:22.000Z
source: "Silicon.fr"
language: "fr"
link: "https://www.silicon.fr/data-ia-1372/observabilite-magic-quadrant-2026-228392"
description: "Pas classé, mais souvent cité : telle est la situation de ClickHouse dans le dernier Magic Quadrant des plates-formes d&rsquo;observabilité.  Depuis l&rsquo;an dernier, l&rsquo;entreprise américaine évolue sur ce marché. Capitalisant sur l&rsquo;acquisition d&rsquo;HyperDX, elle a effectivement lanc..."
author: "Clément Bohic"
image: "https://www.silicon.fr/wp-content/uploads/2026/07/Magic-Quadrant-2026-observabilite.jpg"
guid: "https://www.silicon.fr/?p=228392"
categories:
  - "Data & IA"
  - "Magic Quadrant"
  - "observabilite"
draft: false
---

Pas classé, mais souvent cité : telle est la situation de ClickHouse dans le dernier Magic Quadrant des plates-formes d&rsquo;observabilité.

Depuis l&rsquo;an dernier, l&rsquo;entreprise américaine évolue sur ce marché. Capitalisant sur l&rsquo;acquisition d&rsquo;HyperDX, elle a effectivement lancé l&rsquo;offre ClickStack, intégrée à son moteur de base de données. Début 2026, une autre acquisition – Langfuse – y a apporté des capacités de monitoring spécifiques aux applications et agents IA.

Ce produit lui vaut une « mention honorable ». Gartner en accorde aussi une à Dash0, fondé par les créateurs d&rsquo;Instana… et dont la plate-forme est construite sur ClickHouse. Même distinction pour groundcover, dont l&rsquo;architecture « bring your own cloud » permet de stocker la télémétrie sur des instances ClickHouse privées.

Un nouveau critère – facultatif – de filtrage de la télémétrie

D&rsquo;une année à l&rsquo;autre, la liste des critères fonctionnels à respecter pour figurer dans le Magic Quadrant de l&rsquo;observabilité a peu évolué. Étaient toujours impératifs :

Ingestion, stockage et analyse de télémétrie

Identification et analyse du comportement des applications, des services et de l&rsquo;infra

Enrichissement de la télémétrie, notamment par cartographie des dépendances et des relations entre services

Gartner y a ajouté la collecte de télémétrie de fournisseurs de cloud public « comme AWS et Azure ». Ainsi que la découverte et la cartographie automatisées des composants et des services infra/réserau/applicatifs liés.

Ce dernier élément était facultatif l&rsquo;an passé. Il faisait plus précisément partie d&rsquo;un ensemble de critères dont les fournisseurs devaient en couvrir au moins quatre. Cette exigence n&rsquo;est plus d&rsquo;actualité : les critères en question sont restés, mais étaient simplement « facultatifs ». Parmi eux :

Intégration d&rsquo;outils de type ITSM, CMDB, automatisation, DevOps…

Gestion des coûts

Observabilité des workloads IA

Automatisation des modifications de code et de configuration

Identification des vulnérabilités et blocage des tentatives d&rsquo;exploitation

Cette année, Gartner y a ajouté le filtrage/échantillonnage de la télémétrie. En toile de fond, une tendance qu&rsquo;il pointe depuis plusieurs éditions de ce Magic Quadrant : la difficulté à gérer les coûts. Plusieurs fournisseurs classés « leaders » ont droit à des remarques à ce sujet, parfois positives, parfois négatives.

Splunk n&rsquo;est plus « leader » de l&rsquo;observabilité

Les fournisseurs ont été évalués sur deux aspects. L&rsquo;un, dit « exécution », traduit leur capacité à répondre à la demande (expérience client, tarification, qualité des produits/services…). L&rsquo;autre, dit « vision », reflète les stratégies (produit, innovation, marketing…).

La situation sur l&rsquo;axe « exécution » :

Rang
Fournisseur
Évolution annuelle

1
Datadog
+ 1

2
Dynatrace
– 1

3
Grafana Labs
=

4
Elastic
+ 2

5
AWS
=

6
Microsoft
+ 2

7
New Relic
– 3

8
Chronosphere
+ 2

9
Splunk
– 2

10
LogicMonitor
+ 1

11
IBM
– 2

12
Alibaba Cloud
nouvel entrant

13
Honeycomb
=

14
BMC Helix
+ 3

15
ScienceLogic
=

16
SolarWinds
+ 3

17
HPE
nouvel entrant

18
Apica
+ 2

Sur l&rsquo;axe « vision » :

Rang
Fournisseur
Évolution annuelle

1
Grafana Labs
=

2
Datadog
=

3
Coralogix
+ 5

4
Dynatrace
– 1

5
New Logic
– 1

6
Honeycomb
– 1

7
Elastic
– 1

8
Chronosphere
– 1

9
IBM
=

10
LogicScience
+ 4

11
AWS
+ 5

12
Alibaba Cloud
nouvel entrant

13
Microsoft
=

14
Splunk
– 4

15
HPE
nouvel entrant

16
Apica
– 5

17
ScienceLogic
– 5

18
SolarWinds
=

7 des 8 « leaders de l&rsquo;an dernier le restent » (Chronosphere, Datadog, Dynatrace, Elastic, Grafana Labs, IBM et New Relic). Splunk fait exception, rétrogradant chez les « challengers » en conséquence d&rsquo;un recul sur l&rsquo;axe « vision ». Coralogix le remplace. Il figurait, en 2025, parmi les « visionnaires ».

Classés « acteurs de niche » l&rsquo;an dernier, ITRS et Sumo Logic sortent du Magic Quadrant. Même sort pour Oracle, qui était « challenger ». HPE fait son entrée chez les « acteurs de niche » ; Alibaba Cloud, chez les « challengers ».

Chronosphere acquis par Palo Alto Networks : une intégration à suivre

Chronosphere appartient depuis janvier 2026 à Palo Alto Networks, qui entend le maintenir en tant qu&rsquo;offre autonome. Il se distingue sur sa capacité à gérer de la télémétrie à fort volume tout en conservant le contrôle des coûts. Gartner salue aussi ses dernières innovations dans l&rsquo;IA agentique pour l&rsquo;identification des problèmes. Et note ce que l&rsquo;acquisition par Palo Alto apporte en matière d&rsquo;opportunités commerciales et d&rsquo;assise financière.

On surveillera l&rsquo;impact de cette acquisition sur l&rsquo;activité de Chronosphere. Notamment sur son modèle de support, dont il a fait un élément distinctif. À voir également si le passage dans le giron de Palo Alto permettra d&rsquo;étendre la présence en direct, actuellement largement concentrée en Amérique du Nord. Gartner note aussi que Chronosphere n&rsquo;est pas forcément le plus recommandable pour les besoins d&rsquo;APM legacy (Java, .NET).

Chez Coralogix, le client est responsable de l&rsquo;infra S3

Chez Coralogix, Gartner apprécie l&rsquo;analyse de la télémétrie en flux et les économies potentielles qui en découlent (possibilité d&rsquo;exploiter des classes de stockage à plus bas coût). Comme chez Chronosphere, il souligne les innovations dans le domaine de l&rsquo;IA agentique (agent Olly, serveur MCP, intégrations Slack et GitHub). Il y ajoute la gestion granulaire des coûts par type de télémétrie avec des niveaux de priorité.

Coralogix pâtit d&rsquo;une notoriété limitée et son produit reste perçu comme « log-first ». Sa présence en direct demeure plus limitée que celle des autres « leaders » en Asie-Pacifique et en Amérique latine. Attention aussi à l&rsquo;infrastructure S3 sous-jacente, dont le client doit assurer la gestion (usage et coûts).

OpenTelemetry, pas au cœur de la proposition de valeur de Datadog

La profondeur du portefeuille de Datadog (« plus de 20 produits » en une interface) fait mouche auprès de Gartner. Même chose pour la brique Bits AI SRE, qui témoigne d&rsquo;une « maturité » dans la mise en œuvre de la GenAI. Et pour le marketing, avec en point d&rsquo;orgue sa propre conférence annuelle DASH.

La granularité de la tarification sur l&rsquo;ingestion, l&rsquo;indexation, les hôtes et les conteneurs exige une supervision attentive. Par ailleurs, si Datadog gère OpenTelemetry, sa proposition de valeur reste encore largement dépendante de son agent propriétaire. Quant à l&rsquo;option « bring your own cloud », elle couvre les logs, mais pas les métriques ni les traces.

Dynatrace et sa courbe d&rsquo;apprentissage

Le focus conformité de Dynatrace lui vaut un bon point. Mêmechose pour les capacités de cartographie temps réel des dépendances, à l&rsquo;appui d&rsquo;un framework déterministe qui automatise l&rsquo;isolation des causes racines. Gartner apprécie aussi la couche IA qui permet de définir des objectifs cadrés par des garde-fous organisationnels.

Attention à l&rsquo;onboarding : tirer pleinement parti de la plate-forme de Dynatrace suppose une courbe d&rsquo;apprentissage importante. Gartner conseille par ailleurs de suivre les discussions en cours avec un « investisseur activiste » (Starboard Value, qui a acquis une participation majoritaire en avril). Et regrette un marketing de l&rsquo;IA susceptible d'embrouiller les acheteurs.

Du travail de tuning avec Elastic

Le triptyque recherche-sécurité-observabilité demeure intéressant – notamment du point de vue économique – pour qui est déjà dans l&rsquo;écosystème Elastic. Autre point fort : le niveau d&rsquo;intégration d&rsquo;OpenTelemetry, entre catalogue de collecteurs communautaires et distributions spécifiques. Gartenr salue aussi les avancées sur l&rsquo;IA agentique (constructeur d&rsquo;agents, bibliothèque de skills).

Elastic reste souvent perçu comme fournissant d&rsquo;abord un moteur de recherche. Son langage de requête nécessite beaucoup de configurations pour être fonctionnellement équivalent à la concurrence sur des fonctionnalités comme la cartographie de topologie et la remédiation automatique. Attention aussi au contrôle des coûts, en particulier sur les déploiements autogérés, dès l&rsquo;instant où on traite des index volumineux.

Avec Grafana Labs, la souplesse peut créer de la complexité

L&rsquo;héritage open source de Grafana Labs et son « association forte » avec les environnements Kubernetes fournissent un « point d&rsquo;entrée sans friction », pour reprendre les mots de Gartner. Le cabinet américain salue aussi les capacités de filtrage automatisé de la télémétrie et sa contextualisation grâce à un graphe de connaissances.

Grafana donne de la souplesse pour constituer des stacks d&rsquo;observabilité, mais il exige de l&rsquo;expertise sur Prometheus et OpenTelemetry. Le fait qu&rsquo;il utilise plusieurs back-ends (Mimir pour les métriques, Loki pour les logs…) peut créer une complexité architecturale. Gartner y ajoute la cyberattaque dont l&rsquo;entreprise a récemment été victime (intrusion dans son GitHub après vol d&rsquo;un identifiant dans le cadre de la campagne Mini Shai-Hulud).

IBM n&rsquo;a pas encore unifié Instana, Turbonomic et SevOne

Au-delà des opportunités commerciales que présente sa base installée sur d&rsquo;autres marchés, IBM se distingue par l&rsquo;intégration de Kubecost, qui donne un angle FinOps à Instana. Gartner apprécie aussi son « approche transparente » consistant à appliquer uniquement des modèles déterministes pour identifier les problèmes en réservant les modèles génératifs pour les explications et les recommandations.

Sous la marque Concert, IBM promet une expérience plus unifiée entre Instana, Turbonomic et SevOne… qui restent pour le moment des produits distincts, avec chaque son installation et son administration. Gartner pointe aussi le risque de « dilution » de la marque Instana dans le portefeuille du groupe. Et un licensing « souvent complexe » lorsqu&rsquo;il s&rsquo;inscrit dans les accords d&rsquo;entreprise d&rsquo;IBM.

New Relic : avec l&rsquo;IA, un modèle économique à bien étudier

New Relic est de ceux que Gartner crédite d&rsquo;un bon point pour leur couche d&rsquo;IA agentique (ici, pour l&rsquo;automatisation de l&rsquo;analyse de cause racine et le résumé des logs). Il est aussi salué pour ses capacités de filtrage et d&rsquo;échantillonnage de la télémétrie. Et pour ses partenariats (Accenture et NTT Data sont cités), qui lui ont permis d&rsquo;étendre son reach.

New Relic a tendance à perdre son avance sur la concurrence dans le domaine de l&rsquo;IA. Il lui manque aussi un événement référent, même s&rsquo;il a annoncé que sa conférence annuelle reprendrait en 2026. Attention aussi à bien étudier les implications du système de crédits (Compute Capacity Units) introduit pour les fonctionnalités IA.

Illustration © ArtemisDiana – Adobe Stock

The post Observabilité : une télémétrie à canaliser appeared first on Silicon.fr.