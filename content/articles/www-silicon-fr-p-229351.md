---
title: "Tokenomics : les chiffres d’une discipline FinOps en construction"
date: 2026-09-25T10:36:13.000Z
source: "Silicon.fr"
language: "fr"
link: "https://www.silicon.fr/data-ia-1372/state-of-tokenomics-229351"
description: "Sur la passerelle IA de Vercel, les modèles à poids ouverts captent désormais la majorité du trafic de production.  Cette statistique trouve un forme d&rsquo;écho dans celles de la Tokenomics Foundation.  L&rsquo;organisation sœur de la FinOps Foundation a conduit son premier sondage communautaire...."
author: "Clément Bohic"
image: "https://www.silicon.fr/wp-content/uploads/2026/09/sondage-Tokenomics-Foundation.jpg"
guid: "https://www.silicon.fr/?p=229351"
categories:
  - "Data & IA"
  - "tokenomics foundation"
draft: false
---

Sur la passerelle IA de Vercel, les modèles à poids ouverts captent désormais la majorité du trafic de production.

Cette statistique trouve un forme d&rsquo;écho dans celles de la Tokenomics Foundation.

L&rsquo;organisation sœur de la FinOps Foundation a conduit son premier sondage communautaire. Elle a enregistré un peu moins de 500 réponses. Les participants se répartissent entre une dizaine de secteurs économiques. Le revenu médian des entreprises qu&rsquo;ils représentent est proche des 2 milliards $.

Une des questions visait à mesurer le ratio entre modèles propriétaires et modèles open-weight. Les sondés devaient l&rsquo;exprimer sur une échelle de 0 à 10. Plus de la moitié (51 %) ont largement penché en faveur des modèles fermés (8, 9 ou 10). La perspective à 12 mois est toutefois assez différente : ils sont environ 70 % à envisager d&rsquo;utiliser au moins autant les modèles ouverts.

L&rsquo;IA locale, trois fois moins fréquente que l&rsquo;IA cloud

En l&rsquo;état, la quasi-totalité des organisations représentées sont « en direct » avec au moins un fournisseur de modèles (Anthropic, OpenAI, Google, DeepSeek…). 96 % en l&rsquo;occurrence. Elles sont également nombreuses (87 %) à utiliser les services d&rsquo;inférence au token (Amazon Bedrock, Vertex AI, Azure Foundry…).

L&rsquo;IA embarquée – catégorie dans laquelle la Tokenomics Foundation classe par exemple Cursor, Windsurf, Databricks Genie et Snowflake CoCo – est une réalité chez 64 % de l&rsquo;échantillon. On tombe à 31 % pour l&rsquo;IA locale et/ou en périphérie. Même pourcentage pour la location de GPU chez des clouders. 29 % ont leur propre matériel, dans leur datacenter ou en colocation.

L&rsquo;usage « en direct » chez OpenAI & Cie implique souvent des modèles fermés (86 % de l&rsquo;échantillon). Ils sont tout de même plus d&rsquo;un tiers (35 %) à exploiter des modèles à poids ouverts. Et 18 % à utiliser des LLM personnalisés (entraînement ou ajustement).

Les proportions sont similaires sur les services « à la Bedrock » (respectivement 76, 34 et 16 %). Chez ceux qui louent du GPU, la proportion d&rsquo;open-weight atteint 24 % ; celle de custom, 16 %. Dans le scénario embarqué, le propriétaire domine (54 %, contre 23 % d&rsquo;ouvert et 9 % de custom).

Gouvernance : l&rsquo;approche multipartite n&rsquo;est pas si rare

Dans la lignée de ce qu&rsquo;elle a produit en quelques mois d&rsquo;existence officielle, la Tokenomics Foundation constate une confiance limitée tant dans la visibilité sur les dépenses que sur la mesure du ROI.

Visibilité sur les dépenses
Mesure du ROI

Très confiants
14 %
9 %

Modérément confiants
39 %
17 %

Peu confiants
28 %
34 %

Non confiants
20 %
39 %

Sur le volet ROI, les répondants qui se disent « très confiants » ont deux traits communs. D&rsquo;une part, la capacité à attribuer les coûts à des workloads et à des équipes. De l&rsquo;autre, l&rsquo;aptitude à suivre des métriques business « concrètes » tels les tickets, les PR ou le chiffre d&rsquo;affaires.

Ces deux dimensions (visibilité / attribution et mesure du ROI) apparaissent largement comme les principaux défis de la « token-économie ». À l&rsquo;inverse, les participants sont nettement moins nombreux à citer la gouvernance, les compétences et la complexité des tarifications.

La gouvernance, justement, échoit le plus souvent à l&rsquo;IT (35 % des répondants). Son partage entre fonctions n&rsquo;est pas rare (26 %). Il est plus inhabituel de la voir confiée à la direction (9 %), à la finance (5 %) ou à des métiers data / IA (6 %).

Une tendance à combiner les passerelles de routage LLM

Pour ce qui est des passerelles de routage LLM (élément-clé dans le discours de la Tokenomics Foundation), le paysage est pour l&rsquo;instant nettement fragmenté, entre des solutions établies comme OpenRouter et LiteLLM, des outils maison et des options cloud-native. Beaucoup de répondants restent en phase d&rsquo;évaluation. Les plus avancés « adoptent de plus en plus » des approches hybrides. La Tokenomics Foundation y perçoit un besoin d&rsquo;autant plus grand d&rsquo;architectures modulaires et de normes d&rsquo;interopérabilité.

Le sondage révèle une certaine prise en compte de l&rsquo;enjeu énergétique (38 % des répondants). Mais ce sont généralement ceux qui possèdent ou louent du matériel et utilisent des modèles open-weight ou en entraînent.

Peu de citations spontanées pour la spécification FOCUS

La Tokenomics Foundation souligne que, interrogés à propos de ce qu&rsquo;ils attendent des fournisseurs, 7 % des répondants ont spontanément mentionné FOCUS.

La prochaine version de cette spécification FinOps est prévue pour décembre. En matière de tokenomics, elle devrait notamment inclure :

Identification standardisée des modèles, de leurs versions et de leur développeurs

Attribution de charges aux individus, aux comptes de services et aux agents

Catalogue de prix publics pour estimer par avance le coût d&rsquo;un workload

Visibilité sur les caches en entrée et en sortie

La Tokenomics Foundation a déjà produit un livrable sur la gestion du cache. Elle a aussi proposé une adaptation de la notation Big-O, qui reflète la croissance d&rsquo;un système en fonction de ses intrants. Transposée à l&rsquo;IA, elle permet de comprendre comment la consommation de tokens augmente avec l&rsquo;usage, la complexité ou le niveau d&rsquo;autonomie (formule : requêtes x appels par requête x profondeur agentique).

Illustration générée par IA

The post Tokenomics : les chiffres d&rsquo;une discipline FinOps en construction appeared first on Silicon.fr.