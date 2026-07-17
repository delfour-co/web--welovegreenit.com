---
title: "FinOps : la spécification FOCUS à l’épreuve de la « token-économie »"
date: 2026-07-16T15:26:51.000Z
source: "Silicon.fr"
language: "fr"
link: "https://www.silicon.fr/cloud-1370/finops-focus-token-economie-228311"
description: "Niveaux d&rsquo;inférence, chaînes de pensée, caches de contexte, débits provisionnés… Autant de concepts qui occupent actuellement la FinOps Foundation.  En ligne de mire, la prochaine version de la spécification FOCUS, attendue pour décembre 2026. La « token-économie » y est un chantier prioritair..."
author: "Clément Bohic"
image: "https://www.silicon.fr/wp-content/uploads/2026/07/FOCUS-token-economie.jpg"
guid: "https://www.silicon.fr/?p=228311"
categories:
  - "Cloud"
  - "FinOps"
  - "FOCUS"
draft: false
---

Niveaux d&rsquo;inférence, chaînes de pensée, caches de contexte, débits provisionnés… Autant de concepts qui occupent actuellement la FinOps Foundation.

En ligne de mire, la prochaine version de la spécification FOCUS, attendue pour décembre 2026. La « token-économie » y est un chantier prioritaire. Objectif : standardiser au maximum la représentation de l&rsquo;usage des services IA.

Apprendre d&rsquo;abord à se servir de l&rsquo;existant

La communauté est d&rsquo;avis que la matière est déjà là. L&rsquo;enjeu est plutôt d&rsquo;expliquer comment s&rsquo;en servir. Cela passe par la fourniture de tables de correspondance, potentiellement insérées dans une annexe, aux côtés d&rsquo;exemples de requêtes SQL. Elles couvriraient trois archétypes de fournisseurs : cloud (type Amazon Bedrock / Azure OpenAI), MaaS (OpenAI / Anthropic) et hybride (Vertex AI). Dans l&rsquo;idéal, elles aborderaient des « cas limites » comme le fine-tuning et le batching.

Ces mappings s&rsquo;accompagneront d&rsquo;un livre blanc, prévu quant à lui pour le mois d&rsquo;août. Le document de travail esquisse plusieurs pistes pour représenter les workloads d&rsquo;inférence en utilisant la sémantique existante. La notion de débit provisionnée peut par exemple être mappée aux réservations de capacités ; l&rsquo;agrégation de workflows agentiques, au regroupement de transactions. Parmi les ajouts envisagés, des colonnes permettant de distinguer identifiant de requête et identifiant de session. Motif : une interaction utilisateur peut engendrer plusieurs requêtes, invoquer plusieurs modèles, exécuter des outils, etc.

Pour distinguer les utilisateurs (humain, application, agent), le livre blanc ne suggère pas de créer de colonnes, mais d&rsquo;utiliser des tags. Pour s&rsquo;aligner sur la sémantique transactionnelle de FOCUS, il recommande des lignes distinctes pour chaque composant de facturation (input, output, cache, raisonnement, traitement d&rsquo;images…). Quant aux tarifications différenciées en fonction de la fenêtre, il propose de la traiter comme un problème standard de facturation par niveaux.

Segmenter par modèle et distinguer l&rsquo;input de l&rsquo;output

Autres axes prioritaires sur la roadmap : la capacité à segmenter les coûts par modèle, à distinguer les tokens d&rsquo;entrée et de sortie et à prendre en compte les limites de tokens par requête.

Depuis l&rsquo;an dernier, la spec englobe les « devises virtuelles » (non monétaires). Le token en fait partie, mais moins sous l&rsquo;angle de l&rsquo;IA que celui des crédits achetés à l&rsquo;avance.

La dernière version (1.4, publiée en juin 2026) ajoute deux jeux de données censés faciliter la réconciliation. L&rsquo;un matérialise les charges telles qu&rsquo;elles apparaissent sur les factures fournisseurs. L&rsquo;autre définit les intervalles de temps et les statuts associés aux cycles de facturation.

Autre ajout : des colonnes qui permettent de mieux comparer les structures d&rsquo;engagement entre fournisseurs et d&rsquo;identifier celles auxquelles une charge est éligible.

Adobe, AWS, Datadog, Google, IBM Cloudability et Microsoft composent le comité de pilotage de FOCUS, en plus de Capital One et Walmart. Parmi les organisations qui ont contribué à la v1.4 figurent Amadeus, American Express, Broadcom, Databricks, Oracle et Salesforce.

À consulter en complément :

L&rsquo;économie du token, nouveau point focal de la FinOps Foundation

Tokenmaxxing : gaspillage ou moteur de transformation IA ?

Jensen Huang défend sa vision de la « token-économie »

Illustration générée par IA

The post FinOps : la spécification FOCUS à l&rsquo;épreuve de la « token-économie » appeared first on Silicon.fr.