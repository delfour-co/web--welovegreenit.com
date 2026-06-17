---
title: "L’Arcep expose ses « chiffres de terrain » sur l’empreinte énergétique des LLM"
date: 2026-06-16T08:47:22.000Z
source: "Silicon.fr"
language: "fr"
link: "https://www.silicon.fr/green-it-1374/consommation-energetique-llm-227683"
description: "Pour les systèmes agentiques, NVIDIA préfère les SLM aux LLM.  Nous nous en étions fait l&rsquo;écho à l&rsquo;été 2025. L&rsquo;entreprise venait de publier, à partir d&rsquo;une revue de la littérature scientifique, un article aux airs d&rsquo;éloge. Elle y présentait les SLM (moins de 10 milliard..."
author: "Clément Bohic"
image: "https://www.silicon.fr/wp-content/uploads/2026/06/PEReN-Arcep-consommation-electrique-LLM.jpg"
guid: "https://www.silicon.fr/?p=227683"
categories:
  - "Green IT"
  - "peren"
draft: false
---

Pour les systèmes agentiques, NVIDIA préfère les SLM aux LLM.

Nous nous en étions fait l&rsquo;écho à l&rsquo;été 2025. L&rsquo;entreprise venait de publier, à partir d&rsquo;une revue de la littérature scientifique, un article aux airs d&rsquo;éloge. Elle y présentait les SLM (moins de 10 milliards de paramètres) comme « suffisamment puissants », « intrinsèquement mieux adaptés » et « nécessairement plus économiques ». Ses principales références étaient des évaluations sur les modèles Phi-2, Phi-3 Small, SmolLM2 et ses propres Nemotron-H.

L&rsquo;Arcep fait mention de cet article dans un rapport sur les défis environnementaux de l&rsquo;IA générative. Elle cite aussi, entre autres sources, une étude du PEReN (Pôle d&rsquo;expertise de la régulation numérique).

Ce service créé en 2020 est placé sous l&rsquo;autorité des ministres chargés de l&rsquo;économie, de la culture et du numérique. Parmi ses missions figure l&rsquo;évaluation d&rsquo;outils. C&rsquo;est le champ de l&rsquo;étude en question. Elle a consisté à mesurer la consommation électrique de la génération de texte à l&rsquo;inférence.

Inspect, CEEMS, Compar:IA : les outils d&rsquo;expérimentation

Le PEReN a d&rsquo;abord exploité deux publications scientifiques* et un sondage professionnel pour dégager des typologies d&rsquo;usage de l&rsquo;IA générative par le grand public. Il les a confrontées aux catégories de questions que posent les usagers du comparateur de modèles Compar:IA. En ont résulté 5 thématiques :

Code

Inventivité, créativité

Usage générique quotidien, éducatif

Prise de décision, analyse spécialisée, professionnel

Production de documents, résumé, aide à la rédaction

Le PEReN a ensuite sélectionné 6 jeux d&rsquo;évaluation, pour leur adéquation avec ces thématiques, leur popularité dans la littérature scientifique… et leur facilité d&rsquo;implémentation avec Inspect, bibliothèque Python qu&rsquo;on doit à l&rsquo;AI Safety Institute (Institut britannique pour la sécurité de l&rsquo;IA).

Tâche visée
Nombre d&rsquo;exemples
Méthode d&rsquo;évaluation

SimpleQA

(verified)
Questions courtes portant sur des faits connus
1000
LLM-as-a-judge

ZeroBench
Capacités de raisonnement sur des images
434 (200 + 134)
Comparaison

PIQA
Raisonnement sur le monde physique
1838
Comparaison

HealthBench
Questions de santé
5000
LLM-as-a-judge

HumanEval
Génération de code
164
Comparaison

WritingBench
Capacité rédactionnelle
128 (sous-catégories Creative Writing et Advertising & Marketing)
LLM-as-a-judge

Le cas d&rsquo;usage « production de documents » n&rsquo;a pas été testé… par manque de benchmark de ce type dans Inspect.

Les expérimentations se sont déroulées sur le supercalculateur Jean Zay, à l&rsquo;aide de la bibliothèque intégrée CEEMS. Chacune a mobilisé entre 1 et 4 GPU H100, sur des nœuds en Xeon Gold 6248. Le PEReN a choisi vLLM comme moteur d&rsquo;inférence.

CEEMS mesure uniquement la consommation au niveau des nœuds. Il ne prend pas en compte le coût du refroidissement ou des interconnexions. Ce fut l&rsquo;une des limites de l&rsquo;expérience. La nécessité d&rsquo;avoir des modèles à poids ouverts (pour réaliser les inférences sur une infra connue) en a été une autre. Le PEReN a aussi rejeté les modèles aux licences « trop contraignantes » (il évoque ceux de DeepSeek).

Conso CPU, parallélisme, déterminisme… Les partis pris du PEReN

Le périmètre s&rsquo;est limité à des modèles génératifs, quand bien même des non génératifs auraient pu produire des résultats corrects sur certains usages, avec une consommation électrique inférieure.

Quoique représentant jusqu&rsquo;à un tiers de la consommation totale, la consommation CPU n&rsquo;a pas été prise en compte, car elle variait beaucoup entre itérations d&rsquo;une même expérience. Elle est toutefois quasiment proportionnelle à la consommation GPU, note le PEReN.

Le temps de calcul étant limité, la « très grande majorité » des modèles n&rsquo;ont eu droit qu&rsquo;à une mesure de consommation et de qualité par benchmark. Pour le paramètre de température, le PEReN s&rsquo;en est tenu à deux valeurs : 0 (déterminisme maximal) et 0,7. Il a fixé à 0,2 celle de Qwen3-Next-80B-A2B-Instruct lorsque utilisé comme LLM-as-a-judge (pour évaluer la performance sur certains benchmarks).

Les contraintes de temps de calcul ont conduit à ne sélectionner que les meilleurs modèles pour chaque distribution de propriétés (architecture, modalités, compression…). L&rsquo;OpenLLM Leaderboard et LMArena ont été utilisés à cet effet. Au bout, une liste de 23 modèles, de 3 à 123 milliards de paramètres, publiés entre juin et septembre 2025.

Benchmark
Modèles denses
MoE
Quantisés
Autre spécificité

Tous hors ZeroBench

(modèles textuels communs)
Llama-3.1-70B-Instruct

Qwen2.5-32B-Instruct

Gemma-3-27b-it

Qwen2.5-7B-Instruct

Ministral-8B-Instruct-2410
GLM-4.5-Air

Qwen3-Next-80B-A3B-instruct

Qwen3-30B-A3B-Instruct-2507
Qwen3-30B-A3B-Instruct-2507-FP8

(raisonnement + quantisé)

QwQ-32B-AWQ
(distillé)

DeepSeek-R1-Distill-Qwen-32B(raisonnement)

Qwen3-30B-A3B-Thinking-2507, QwQ-32B

ZeroBench + SimpleQA + PIQA

(modèles multimodaux)
Pixtral-Large-Instruct-2411

Mistral-Small-3.2-24B-Instruct-2506

Qwen2.5-VL-7B-Instruct
GLM-4.5V

Qwen3-VL-30B-A3B-Instruct-2507
Qwen3-VL-30B-A3B-Instruct-2507-FP8

HumanEval
Mistral-Small-3.2-24B-Instruct-2506

(spécialisé)

Qwen3-Coder-30B-A3B-Instruct, Codestral-22B-v0.1

HealthBench

(spécialisé)

Llama3-Med42-70B

Chaque modèle a tourné sur le nombre minimum de GPU sur lesquels il pouvait loger en mémoire. Le paramètre max-connections de la bibliothèque Aspect, destiné à paralléliser les requêtes, a été réglé sur trois valeurs (10, 100 et 1000).

L&rsquo;impact de l&rsquo;architecture MoE, de la quantification et du raisonnement

Aucun benchmark ou modèle ne montre de cas où une température donnée engendrerait systématiquement une meilleure performance. Le PEReN a donc choisi de ne présenter les résultats que pour la valeur 0.

Premier constat : si le nombre de paramètres du modèle est le premier facteur explicatif de la consommation électrique, d&rsquo;autres éléments ont un impact significatif. La quantification 8 bits, par exemple, entraîne un gain de 39±18 %. L&rsquo;architecture joue aussi. À nombre de paramètres égal, les modèles MoE (mélange d&rsquo;experts) consomment moins que les modèles denses (45±12 %). Si on s&rsquo;en tient au nombre de paramètres activés, en revanche, les modèles denses ont l&rsquo;avantage. Selon les modèles et les jeux de données, le raisonnement a un effet très variable. En moyenne, il accroît la consommation de 92 %. Cela va toutefois de + 41 % sur SimpleQA à + 849 % sur HumanEval.

Toutes ces caractéristiques prises en compte, il arrive que des « grands » modèles consomment plus que des « petits »…

Modèles « spécialisés » : savoir à quoi s&rsquo;attendre

Le PEReN n&rsquo;a testé que trois modèles spécialisés, sur deux domaines (programmation informatique et connaissances médicales). Il en conclut toutefois que la spécialisation ne vaut vraiment que sur des tâches très proches de celles sur lesquelles on a entraîné le LLM. Pas sur des tâches « relevant seulement d&rsquo;un domaine similaire ». Il donne l&rsquo;exemple de Qwen3-Code-30B-A3B. Sa documentation le présente comme un modèle de codage agentique. Sa performance est effectivement plus faible sur HumanEval, qui implique bien des tâches de code mais pas de dimension agentique. De même, la version « médicale » de Llama-3-70B réussit mieux que la version de base, mais de nombreux modèles généralistes fournissent un meilleur rapport performance/consommation.

Une consommation doublée par l&rsquo;analyse d&rsquo;images

Optimisé ou non en FP8, Qwen-30B-A3B illustre que sur les tâches évaluées, les modèles multimodaux ont une consommation similaire à celle des modèles textuels. Les modèles de Mistral, ainsi que Gemma, en témoignent globalement aussi. Leur consommation est en revanche systématiquement plus élevée sur des tâches impliquant de l&rsquo;analyse d&rsquo;images (de l&rsquo;ordre du double par rapport à des tâches purement textuelles).

Les modèles dits de raisonnement consomment globalement plus que des modèles classiques de taille équivalente. C&rsquo;est dû au fait qu&rsquo;ils génèrent davantage de tokens. Certes cette propriété peut accroître nettement la performance (QwQ-32B sur le code et l&rsquo;écriture créative, par exemple). Mais en fonction des questions, la surconsommation d&rsquo;énergie peut être très élevée (plusieurs centaines de %).

Le PEReN ne repère pas de corrélation entre la consommation électrique et la qualité des réponses. Limiter l'empreinte n&rsquo;implique donc pas toujours des compromis de performance, conclut-il. Et de faire remarquer le poids des innovations au niveau du hardware. Quoique peu diffusées dans l&rsquo;industrie car difficiles à mettre en œuvre, elles peuvent permettre « une réduction de consommation allant jusqu&rsquo;à un facteur 1000 ».

* Which Economic Tasks are Performed with AI? Evidence from Millions of Claude Conversations (Handa et al., 2025)

REALM: A Dataset of Real-World LLM Use Cases (Cheng et al., 2025)

Illustration © Adrian Gros – Shutterstock

The post L&rsquo;Arcep expose ses « chiffres de terrain » sur l'empreinte énergétique des LLM appeared first on Silicon.fr.