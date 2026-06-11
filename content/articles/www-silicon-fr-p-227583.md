---
title: "L’économie du token, nouveau point focal de la FinOps Foundation"
date: 2026-06-10T13:19:09.000Z
source: "Silicon.fr"
language: "fr"
link: "https://www.silicon.fr/data-ia-1372/tokenomics-foundation-227583"
description: "La FinOps Foundation a depuis peu une organisation sœur : la Tokenomics Foundation.  Elle n&rsquo;aborde pas le token dans le contexte des blockchains, mais comme « unité atomique » de l&rsquo;IA générative. Son objectif : contribuer à l&rsquo;émergence de normes et de bonnes pratiques pour maximise..."
author: "Clément Bohic"
image: "https://www.silicon.fr/wp-content/uploads/2026/06/FinOps-Foundation-economie-tokens.jpg"
guid: "https://www.silicon.fr/?p=227583"
categories:
  - "Data & IA"
  - "FinOps"
  - "FinOps Foundation"
draft: false
---

La FinOps Foundation a depuis peu une organisation sœur : la Tokenomics Foundation.

Elle n&rsquo;aborde pas le token dans le contexte des blockchains, mais comme « unité atomique » de l&rsquo;IA générative. Son objectif : contribuer à l&rsquo;émergence de normes et de bonnes pratiques pour maximiser la production de valeur… et le contrôle de la consommation.

Un socle de techniques pour consommer moins de tokens

On ne part pas de zéro. La FinOps Foundation a déjà un groupe de travail « Token Economics ». Ce dernier a notamment réalisé un sondage communautaire qui a permis de dégager une hiérarchie des leviers d&rsquo;optimisation des coûts.

Si on les considère individuellement, le plus gros potentiel d&rsquo;économies réside dans le choix d&rsquo;un modèle adapté à la tâche. Les frameworks de « routage intelligent » peuvent réduire de 60 à 80 % le coût par requête, ajoute la FinOps Foundation.

Levier
Potentiel d&rsquo;économies
Effort d&rsquo;implémentation

Rightsizing du modèle
60 à 90 %
Moyen

Traitement par lots (API batch)
50 %
Faible à moyen

Mise en cache des prompts
50 à 90 % sur les tokens en cache
Faible

Gestion de la fenêtre de contexte
20 à 60 %
Moyen à élevé

Contrôle de la longueur des outputs
10 à 40 %
Faible à moyen

Remises sur volume / engagement
10 à 30 %
Faible (achats)

La gestion de la fenêtre de contexte comprend, entre autres, les mécanismes de fenêtre glissante, de résumé des conversations et de compression des résultats d&rsquo;outils. Le contrôle de la longueur des outputs peut passer par l&rsquo;utilisation de schémas de réponse structurés.

Une stratégie FinOps en trois temps

Parmi toutes les manières d&rsquo;exploiter des capacités IA, les accès API directs (OpenAI, Anthropic…) sont identifiés par la communauté FinOps comme la catégorie la plus difficile à gérer. La facturation est d&rsquo;autant plus opaque qu&rsquo;elle n&rsquo;intègre pas nativement les concepts de business unit, de centre de coûts ou d&rsquo;application. Les changements fréquents dans les catalogues de modèles n&rsquo;aident pas. Et il reste difficile de prédire les pics d&rsquo;usage, tout comme de les plafonner.

La FinOps Foundation propose aux organisations d&rsquo;implémenter une stratégie en trois temps :

Mois 1 à 3 : inventaire des dépenses, mise en place d&rsquo;une gouvernance des clés d&rsquo;API, tagging léger, production d&rsquo;un dashboard basique, alertes budgétaires par compte

Mois 3 à 9 : attribution et showback par modèle, revue de rightsizing des modèles, intégration du batch et de la mise en cache des prompts, optimisation de la fenêtre de contexte, activation d&rsquo;une détection d&rsquo;anomalies

Au-delà : chargeback, routage dynamique, négociation de remises sur engagement, intégration de l&rsquo;estimation des coûts dans le CI/CD, consolidation du reporting des métriques de coût avec celles des autres technologies

Des outils natifs potentiellement suffisants… en monofournisseur

Gouverner les clés d&rsquo;API implique d&rsquo;associer chacune à une équipe, une application ou un cas d&rsquo;usage, avec un propriétaire et un centre de coûts clairement désignés. Les fonctionnalités d&rsquo;attribution (profils d&rsquo;inférence d&rsquo;applications sur AWS Bedrock, clés niveau projet chez OpenAI et niveau workspace chez Anthropic…) ont bien progressé, note la FinOps Foundation. Si bien qu&rsquo;elles suffisent généralement pour les organisations qui sont en monofournisseur. Celles qui en ont plusieurs recourront à l&rsquo;attribution au niveau des fonctionnalités, à l&rsquo;application de politiques par requête ou à des passerelle type Helicone, LiteLLM et Portkey.

Les organisations qui ont monté une équipe FinOps lui confient généralement la gouvernance des coûts de l&rsquo;IA. Il arrive aussi que la démarche relève de l&rsquo;équipe plate-forme ou d&rsquo;un centre d&rsquo;excellence IA. Dans tous les cas, elle passe par le cadrage du périmètre dans lequel les équipes d&rsquo;ingénierie peuvent opérer de manière autonome : listes de modèles approuvés, longueur maximale de contexte par use case, règles de classification de données pour les fournisseurs externes, exigences de revue d&rsquo;architecture pour les workflows agentiques, etc.

Les prix continuent certes à diminuer, mais moins vite que par le passé, constate la FinOps Foundation. Et le phénomène concerne surtout les modèles les moins chers. Pas ceux qui servent le raisonnement et l&rsquo;agentique… et qui consomment 5 à 40 fois plus de tokens par tâche.

Illustration générée par IA

The post L&rsquo;économie du token, nouveau point focal de la FinOps Foundation appeared first on Silicon.fr.