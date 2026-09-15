---
title: "Gestion des conteneurs : l’effet de lock-in demeure"
date: 2026-09-14T16:05:43.000Z
source: "Silicon.fr"
language: "fr"
link: "https://www.silicon.fr/cloud-1370/gestion-conteneurs-magic-quadrant-2026-229130"
description: "Complexité de gestion chez Microsoft, tarification élevée chez Red Hat, écosystème MSP limité chez Google, risque de verrouillage chez Huawei… D&rsquo;une année à l&rsquo;autre, il y a des choses qui ne changent pas sur le segment de la gestion des conteneurs. En tout cas selon la lecture que Gartne..."
author: "Clément Bohic"
image: "https://www.silicon.fr/wp-content/uploads/2026/09/Magic-Quadrant-2026-gestion-des-conteneurs.jpg"
guid: "https://www.silicon.fr/?p=229130"
categories:
  - "Cloud"
  - "conteneurs"
  - "Magic Quadrant"
draft: false
---

Complexité de gestion chez Microsoft, tarification élevée chez Red Hat, écosystème MSP limité chez Google, risque de verrouillage chez Huawei… D&rsquo;une année à l&rsquo;autre, il y a des choses qui ne changent pas sur le segment de la gestion des conteneurs. En tout cas selon la lecture que Gartner en donne dans son Magic Quadrant.

L&rsquo;effet lock-in n&rsquo;est pas circonscrit aux fournisseurs qui maximisent l&rsquo;intégration verticale. Les add-on propriétaires le favorisent aussi. Un constat qui ne date pas d&rsquo;hier.

Gestion des conteneurs : 16 fournisseurs, 7 « leaders »

La liste des fournisseurs classés « leaders » ne change pas non plus. Dans l&rsquo;ordre alphabétique : Alibaba Cloud, AWS, Google, Huawei, Microsoft, Red Hat et SUSE.

Le Magic Quadrant se structure en deux axes. L&rsquo;un mesure l&rsquo;« exécution », c&rsquo;est-à-dire la capacité à répondre à la demande (expérience client, tarification, qualité des produits/services…). L&rsquo;autre, la « vision » ; autrement dit les stratégies (ventes, marketing, innovation…).

La situation sur l&rsquo;axe « exécution » :

Rang
Fournisseur
Évolution

1
Google
=

2
AWS
+ 1

3
Microsoft
– 1

4
Red Hat
=

5
Alibaba Cloud
+ 1

6
SUSE
– 1

7
Huawei
=

8
Tencent Cloud
=

9
Nutanix
+ 2

10
Mirantis
– 1

11
Broadcom (VMware)
+ 1

12
Spectro Cloud
+ 1

13
Oracle
– 3

14
Canonical
=

15
Kubermatic
=

16
Portainer
nouvel entrant

Sur l&rsquo;axe « vision » :

Rang
Fournisseur
Évolution annuelle

1
Microsoft
+ 1

2
Google
+ 1

3
AWS
– 2

4
Red Hat
=

5
Alibaba Cloud
=

6
SUSE
=

7
Huawei
=

8
Mirantis
=

9
Nutanix
=

10
Spectro Cloud
+ 4

11
Canonical
=

12
Tencent Cloud
+ 1

13
Broadcom (VMware)
– 1

14
Portainer
nouvel entrant

15
Oracle
– 5

16
Kubermatic
– 1

Chez Alibaba, intégration notable avec les services IA…

Comme l&rsquo;an dernier, Gartner salue, d&rsquo;une part, la couverture fonctionnelle de l&rsquo;offre, sans égale hors fournisseurs américains. Et de l&rsquo;autre, la « validation » que constitue son usage intensif au sein du groupe Alibaba. Il y ajoute le niveau d&rsquo;intégration avec ses services IA (inférence, agentique et AIOps).

… mais tarification complexe

L&rsquo;an dernier, Gartner avait évoqué le poids des restrictions américaines sur le développement international d&rsquo;Alibaba Cloud. Cette fois, il pointe un autre frein : un écosystème de partenaires et un vivier de talents plus limité que ceux des principaux concurrents. Autres points soulignés : l&rsquo;échelle maximale des clusters plafonnée à 50 000 nœuds et la tarification plus complexe que chez les autres « leaders » (manque de granularité, en particulier).

AWS salué sur la scalabilité…

Une fois encore, AWS est crédité d&rsquo;un bon point pour le niveau d&rsquo;intégration de ses offres avec le reste de services d&rsquo;infra. Il l&rsquo;est aussi pour sa gamme serverless. Et, plus globalement, pour la flexibilité des options de déploiement. La scalabilité est un autre point fort (jusqu&rsquo;à 100 000 nœuds par cluster), favorisant l&rsquo;entraînement et l&rsquo;inférence distribuée.

… mais pas sur la coexistence ECS-EKS

AWS n&rsquo;a pas d&rsquo;outils natifs pour la gestion des flottes de clusters, avait affirmé Gartner l&rsquo;an dernier. Un manque comblé, mais il reste du retard sur l&rsquo;automatisation, la gouvernance et l&rsquo;orchestration cross-cluster. AWS n&rsquo;est pas non plus au niveau de la concurrence sur l&rsquo;implémentation du réseau Kubernetes (des solutions tierces peuvent être nécessaires pour couvrir des besoins avancés). Attention aussi à la coexistence des offres ECS et EKS. L&rsquo;an dernier, Gartner avait évoqué la difficulté à choisir en fonction des cas d&rsquo;usage. Cette année, il va plus loin, sur fond de standardisation du marché autour de Kubernetes : ECS exige des compétences spécifiques et en sortir peut imposer un refactoring.

Google, avancé sur l&rsquo;orchestration des workloads IA…

Chez Google, Gartner apprécie les capacités d&rsquo;orchestration des workloads IA : planification des gangs, gestion de la topologie, allocation de tranches de GPU, etc. Il salue aussi les offres serverless, en ce qu&rsquo;elles abaissent les barrières à l&rsquo;entrée pour les populations de développeurs. Il note aussi la posture de gouvernance unifiée qu&rsquo;encourage l&rsquo;approche axée sur l&rsquo;assemblage de composantes (data, CI/CD, sécurité, IA).

… mais « agressif » sur le cycle de vie des API

Gartner regrette une politique de cycle de vie « agressive » pour les API, que Google a tendance à ranger rapidement au placard. Comme l&rsquo;an dernier, il relève un écosystème de MSP plus restreint que chez les concurrents et une présence limitée dans les systèmes traditionnels (lift & shift, modernisation applicative).

L&rsquo;intégration verticale chez Huawei, un élément distinctif…

Comme sur d&rsquo;autres segments du marché IT, Gartner salue le niveau d&rsquo;intégration verticale chez Huawei. Ici, avec ses services IA et ses couches propriétaires d&rsquo;infra. Autre bon point : une gestion cohérente des environnements sur site au cloud public en passant par la périphérie. S&rsquo;y ajoute une présence sur les marchés émergents (support, conformité, connectivité) dont peuvent manquer les hyperscalers.

… à double tranchant

Évoqué l&rsquo;an dernier, le climat géopolitique l&rsquo;est à nouveau, tant il limite l&rsquo;influence de Huawei hors d&rsquo;Asie. Le hardware propriétaire reste, en parallèle, à double tranchant : il est nécessaire pour tirer pleinement bénéfice de la stack à disposition. On gardera aussi à l&rsquo;esprit que pour le déploiement des nouvelles fonctionnalités, la Chine a souvent la priorité.

Microsoft, bien positionné sur l&rsquo;automatisation du SRE

Comme en 2025, Gartner salue les passerelles avec GitHub et Azure DevOps. Il y ajoute la flexibilité de déploiement. Et le niveau d&rsquo;automatisation du SRE via l&rsquo;intégration d&rsquo;un agent avec le serveur MCP d&rsquo;AKS.

… mais pas du FinOps

À la largeur du portefeuille de Microsoft peut faire écho une complexité de gestion. Attention par ailleurs au risque de verrouillage vu le niveau d&rsquo;intégration avec les API Azure. Et au retard sur certains concurrents en matière d&rsquo;automatisation FinOps.

Red Hat, costaud sur le platform engineering…

La brique OpenShift Virtualization vaut un bon point à Red Hat. Comme les possibilités en matière de sécurité et de gouvernance. Mais aussi de platform engineering (orchestration de conteneurs, outils de développement, automatisation de la supply chain logicielle).

… mais toujours cher

D&rsquo;année en année, même constat : la tarification demeure élevée chez Red Hat. Difficile de la justifier pour des déploiements qui n&rsquo;exigent pas de fonctionnalités avancées. Attention aussi à la complexité de gestion. Et à l&rsquo;absence du provisionnement nodeless, adapté aux charges de travail irrégulières ou orientées événements.

SUSE, garant d&rsquo;une certaine « souveraineté »…

Comme l&rsquo;an dernier, Gartner souligne la capacité à gérer de multiples distributions Kubernetes. Il salue à nouveau le positionnement de SUSE sur l&rsquo;edge via K3s. Et y ajoute sa proposition de valeur en matière de souveraineté, entre capacités techniques et capitaux européens.

… qui suppose de l&rsquo;expertise

La « liberté de choix » inhérente à la pile SUSE exige un certain niveau d&rsquo;expertise pour la configuration et l&rsquo;exploitation. L&rsquo;offre reste axée sur l&rsquo;infra plus que sur les développeurs, que couvre mieux la concurrence. Gartner rappelle, dans un autre registre, les efforts de planification budgétaire nécessaire à l&rsquo;heure de la transition du support communautaire vers le support commerciale.

Illustration générée par IA

The post Gestion des conteneurs : l&rsquo;effet de lock-in demeure appeared first on Silicon.fr.