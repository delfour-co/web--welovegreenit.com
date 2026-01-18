---
title: "L’INR décode l’IA #1"
date: 2025-07-02T08:20:49.000Z
source: "Institut du Numérique Responsable"
language: "fr"
link: "https://institutnr.org/linr-decode-lia-1"
description: "Alors que l’IA prend une place croissante dans les processus et les décisions des organisations, il est plus que jamais nécessaire d’en assurer une intégration responsable. Fidèle à sa mission, l’INR souhaite accompagner les organisations pour que l’IA devienne également un levier de pérennité, plut..."
author: "mmaziere"
guid: "https://institutnr.org/?p=10942"
categories:
  - "Actualités"
  - "IA"
draft: false
---

Alors que l’IA prend une place croissante dans les processus et les décisions des organisations, il est plus que jamais nécessaire d’en assurer une intégration responsable. Fidèle à sa mission, l’INR souhaite accompagner les organisations pour que l’IA devienne également un levier de pérennité, plutôt qu’un seul outil d’optimisation à court terme.

Depuis trois ans, l’INR travaille activement sur les enjeux d’une IA plus responsable. Ce travail s’est concrétisé par la publication du RIA31, le Référentiel d’Intelligence Artificielle Responsable en juin 2024. Ce document, élaboré par un collectif de plus de 80 expertes et experts du numérique responsable, s’appuie sur les trois piliers qui fondent l’action de l’INR : People, Planet, Prosperity.

Dans la continuité de ces travaux, l’INR souhaite offrir aux entreprises des clés pour s’approprier le référentiel, mieux comprendre l’IA et explorer ses évolutions à la lumière de l’actualité. C’est l’objectif de cette newsletter.

En une minute

Dans cet article, vous retrouvez :

L’explication de la mise en application du principe de gouvernance des données dans un cas d’usage. Ce principe est issu du référentiel IA responsable de l’INR et son explication s’appuie sur un retour d’expérience de l’entreprise norsys, membre de l’INR

Le décryptage d’un enjeu technique de l’IA, à travers l’explication des CPU, GPU et NPU

Le réponse à une question que tout le monde se pose : Deepseek est-il réellement plus écolo que les autres LLM ? Spoiler alert : ce n’est pas vraiment le cas dans les usages malgré une approche technique nettement plus sobre

Le décodage des dernières avancées en matière de législation sur l’IA, ainsi que l’avancement des travaux de la commission Afnor – commission dans laquelle l’INR est impliqué. Sur ce dernier point, l’INR vient de lancer un appel à contribution au sein de ses adhérents. Et en matière de législation, l’AI Act est au cœur de nombreuses discussions tendant à le remettre en cause alors que son entrée en vigueur se fait de manière progressive depuis août 2024.

L’IA responsable appliquée

L’INR décode pour vous un principe du RIA31 à travers un cas d’usage en entreprise.

Illustration : Chloé Kossmann, facilitatrice graphique, conceptrice de la BD du RIA31

RIA31 | STR-2_01 : Une gouvernance des données est-elle mise en place sur l’ensemble du cycle de vie du projet IA ?

La gouvernance des données désigne l’ensemble des règles, processus et responsabilités qui encadrent la collecte, le traitement, le stockage, l’accès et la suppression des données, afin d’en garantir la qualité, la sécurité, l’usage éthique et la conformité réglementaire. Dans un projet basé sur l’intelligence artificielle, elle assure que les données utilisées sont fiables, pertinentes et traitées de manière responsable tout au long du cycle de vie du service.

Denis Debarbieux (PIRATe chez norsys) a expérimenté le RIA31 pour un de ses clients (collectivité publique). Norsys est une ESN, membre de l’INR, pionnière en matière d’adaptation de son business model aux enjeux de transition écologique – elle se définit comme permaentreprise. 

« L’intelligence artificielle est passée très vite d’un sujet de laboratoire à des usages concrets en entreprise. Dans ce contexte mouvant, il est essentiel de pouvoir s’appuyer sur un cadre clair pour prendre des décisions durables. Le RIA31 apporte cette boussole, plus opérationnelle que les grands textes comme le RGPD ou l’AI Act. Il est pensé par et pour des acteurs engagés, en phase avec nos valeurs. C’est un repère précieux face à l’accélération. », Denis Debarbieux

Le cas d’usage était le développement d’un service public qui visait à répondre aux attentes des administrés, de plus en plus familiers avec l’IA générative, à travers un dispositif pertinent, accessible et réellement utilisé. L’objectif : concevoir un outil capable de répondre aux questions des citoyennes et citoyens concernant les services de la collectivité.

Si les préoccupations environnementales ont été intégrées dès le départ dans ce projet fondé sur l’IA générative, un autre enjeu est rapidement apparu comme central : la gouvernance des données.

Pour la collectivité, les principaux défis portaient sur deux axes cruciaux :

la souveraineté et la protection des données,

la fiabilité des réponses, notamment lorsqu’il s’agit de droits sociaux ou de montants d’aides ; terrain où l’erreur n’est pas permise.

En s’appuyant sur le principe ST-2_01 du RIA31, norsys a mis en œuvre plusieurs mesures structurantes pour encadrer l’usage des données :

Infrastructure locale : l’IA générative a été hébergée dans un data center public afin de garantir la souveraineté et la protection des données. Ce choix a nécessité des adaptations technologiques, notamment pour prendre en compte les spécificités matérielles liées à l’IA (comme les GPU).

Place de l’humain : un processus de validation humaine a été instauré pour fiabiliser les réponses. Concrètement, chaque première occurrence d’une question est validée par un expert avant d’être intégrée dans la base de connaissances de l’IA. L’autonomie est ainsi accordée progressivement à la solution.

Formation des équipes : un effort important d’acculturation a été mené auprès des équipes techniques. Objectif : leur permettre de s’approprier ces nouvelles pratiques et d’assurer une gouvernance partagée des données.

« Pour héberger les données dans un data center public, il a fallu relever plusieurs défis. Les équipes infrastructures n’étaient pas familières avec les technologies spécifiques à l’IA, comme les GPU. Cela a nécessité une montée en compétences importante. Nous avons aussi dû mettre en place un véritable travail DevOps pour construire l’environnement technique. Ce n’était pas juste une solution clé en main vers le Cloud, mais un projet structurant. », Denis Debarbieux

L’enjeu technique décrypté

À gauche : CPU Intel Core i7, recto/verso (Source : Jacek Halicki – Creative Commons) – 
À droite : GPU Nvidia A100 for HGX (Source : Nvidia.com) 

Définition et rôle des GPU en IA générative

Un GPU (Graphics Processing Unit) est un processeur spécialisé, initialement conçu pour les calculs graphiques 2D ou 3D – on en retrouve par exemple sur les PC Gaming. Il embarque des milliers de cœurs travaillant en parallèle, contrairement à un CPU (Central Processing Unit) aux quelques cœurs optimisés pour exécuter des tâches logiques et séquentielles. Les CPU sont traditionnellement embarqués dans les ordinateurs personnels : ce microprocesseur est installé sur la carte mère.

L’architecture parallèle du GPU permet de traiter des milliers d’opérations en simultané, ce qui est indispensable pour les réseaux de neurones profonds et donc aux IA génératives.

On peut comparer le CPU au chef cuisinier : très intelligent, peut gérer des recettes complexes, mais ne peut faire qu’un nombre limité de plats à la fois. Par analogie, on peut définir le GPU comme la brigade de cuisine : chaque cuisinier suit une instruction simple, mais tous travaillent en parallèle pour produire des centaines de plats rapidement.

Consommation électrique des GPU pour l’IA

La puissance des GPU modernes atteint plusieurs centaines de watts. Par exemple, un GPU NVIDIA A100 a une puissance d’environ 300-400 W, le GPU NVIDIA H100 peut atteindre environ 700 W, et une GeForce RTX 4090 peut monter à 450 W. Le GPU est ainsi l’un des facteurs principal de consommation énergétique de l’IA générative. À titre de comparaison, la consommation électrique des CPU s’étalent, selon la puissance des modèles, sur une plage allant de 30 W à un peu plus de 100 W.

Carbone incorporé d’un GPU

La fabrication d’un GPU génère une empreinte carbone incorporée (“embodied carbon”) importante. Une étude de 2023 publiée par le Dr. Sasha Luccioni (Hugging Face), Sylvain Viguier (Graphcore) et Anne-Laure Ligozat (CNRS) indique : « Bien que Nvidia ne divulgue pas actuellement l'empreinte carbone de ses GPU, des estimations récentes situent la limite inférieure de ce montant à environ 150 kg de CO2eq (Davy 2021), chiffre que nous utiliserons pour nos estimations des émissions incorporées » (propos traduits de la version originale en anglais).

GPU vs. CPU : performance et énergie

Avec leurs milliers de cœurs parallèles les GPU offrent, pour les tâches d’IA générative, une performance nettement supérieure par watt consommé. Autrement dit, un GPU exécute bien plus d&rsquo;opérations par unité d’énergie qu’un CPU, d’où l’usage des GPU pour entraîner les plus grands modèles.

La question que tout le monde se pose…

… mais dont personne n’a la réponse ! Est-ce que DeepSeek est vraiment plus écolo que les autres modèles d’IA générative ?

Alors que les modèles d’IA générative sont souvent pointés du doigt pour leur impact énergétique et leur opacité, DeepSeek AI semble proposer, sur les éléments déclarés par l’entreprise elle-même, une approche nettement plus sobre. Sur le plan matériel, DeepSeek n’a mobilisé qu’environ 2 000 GPU H800 (anciennes puces Nvidia) pour son entraînement, contre plus de 16 000 pour LLaMA 3.1 ou plus de 25 000 pour GPT-4 et avec des puces bien moins énergivores que celles de ChatGPT.

Résultat : seulement 2,78 millions d’heures GPU utilisées (plus de 10 fois moins que LLaMA 3.1) et un coût total d’environ 5,6 millions de dollars pour l’entraînement (source). Ces chiffres suggèrent une empreinte carbone bien inférieure à celle des modèles concurrents.

DeepSeek ne semble pas revendiquer une politique écologique explicite, mais sa stratégie d’optimisation, née de contraintes matérielles et géopolitiques, et les différents chiffres avancés montrent qu’une IA puissante peut être développée de manière plus économe que les grands modèles américains.

L’inférence aussi de DeepSeek est optimisée : seules des portions ciblées du modèle sont mobilisées, ce qui réduit l’énergie par requête. D’après un rapport technique produit par DeepSeek, son modèle DeepSeek-v3, entraîné fin 2024, repose sur une architecture dite Mixture-of-Experts (MoE) permettant d’activer uniquement 37 milliards de paramètres sur un total de près de 700 milliards à chaque requête.

 Toutefois, l’optimisation de cette phase d’usage reste questionnable. L’entreprise GreenSpector, spécialisée dans l’évaluation de l’empreinte environnementale de l’IT, a mesuré et comparé, en mars 2025, sur la base d’un même parcours les performances des applications mobiles DeepSeek et ChatGPT. 

GreenSpector conclut de ce travail, outre une application mobile deux fois plus légère que celle de ChatGPT, que DeepSeek sollicite moins intensément la batterie d’un smartphone, consomme moins de ressources CPU par unité de temps et génère un trafic de données plus léger. En revanche, ses temps de réponse sont nettement plus longs, ce qui constitue la principale source d’une consommation énergétique globale plus élevée que celle de ChatGPT sur l’ensemble du parcours utilisateur.

À savoir : DeepSeek AI est une entreprise chinoise. Elle respecte donc les exigences du National Cybersecurity Standards Committee en matière de contenu à diffuser. Dans ce cadre, DeepSeek AI ne répond pas aux questions sensibles en lien avec la Chine ou son gouvernement. De manière plus globale, les outils d’IA générative ne doivent pas fournir de contenus qui « incitent à subvertir le pouvoir de l&rsquo;État et à renverser le système socialiste », ou qui « mettent en danger la sécurité et les intérêts nationaux et nuisent à l&rsquo;image de la nation » (source).

Contenu édité par l’Institut du Numérique Responsable – N° pilote publié le 1er juillet 2025
The post L’INR décode l’IA #1 first appeared on Institut du Numérique Responsable.
mmazieremmaziere