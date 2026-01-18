---
title: "L’impact environnemental du volume de données, une arnaque intellectuelle"
date: 2021-03-09T16:27:55.000Z
source: "Standblog (Tristan Nitot)"
language: "fr"
link: "https://signal.eu.org/blog/2021/03/09/limpact-environnemental-du-volume-de-donnees-une-arnaque-intellectuelle/"
description: "Tweet  Suite à ce billet précédent, La sobriété numérique, oui mais pour quoi faire ?, il est apparu nécessaire de revenir sur cette nouvelle tendance qui consiste à s'attacher au volume de données pour évaluer les impacts du numérique, et démontrer à nouveau en quoi cela n'a aucun sens.  En effet,..."
author: "Pierre"
image: "https://signal.eu.org/blog/wp-content/uploads/2021/03/image.png"
guid: "https://signal.eu.org/blog/?p=2286"
categories:
  - "environnement"
  - "fr"
draft: false
---

Tweet

Suite à ce billet précédent, La sobriété numérique, oui mais pour quoi faire ?, il est apparu nécessaire de revenir sur cette nouvelle tendance qui consiste à s'attacher au volume de données pour évaluer les impacts du numérique, et démontrer à nouveau en quoi cela n'a aucun sens.

En effet, le législateur se prépare à demander à nos fournisseurs de téléphonie et d'accès Internet de faire figurer sur nos factures une évaluation de l'équivalent CO₂, abrégé eqCO₂ (car des conversions existent pour d'autres éléments provoquant également un effet de serre) dérivant « directement » de notre consommation de données.

Profitant du contexte — étude en ce moment au parlement de la loi contre le gaspillage –, je vais tenter de montrer ici pourquoi cela ne protégera aucunement l'environnement et risque de nous orienter vers des politiques publiques désastreuses.

L'un des promoteurs de cette nouvelle croisade est le Shift Project. Le Shift Project est un think-tank associatif bien connu dans les milieux environnementaux, dont l'objectif est de proposer des mesures de politique publique pour respecter les accords de Paris et mener au mieux la lutte contre le réchauffement climatique.

Le Shift a publié en 2019 un rapport sobrement titré Climat : l’insoutenable usage de la vidéo en ligne, ciblant donc très explicitement la vidéo comme mauvais élève à abattre, en raison de son fort poids dans le trafic actuel des réseaux. Devant les levées de boucliers et des erreurs manifestes de méthodologie (facteur d'exagération de 20 à 50 de l'impact eqCO₂ sur certains chiffres publiés, ceux qui ont été le plus repris dans les médias), le Shift Project a fait discrètement machine arrière dans son rapport 2020 au titre plus sobre, Déployer la sobriété numérique, dans une note de bas de page :

Cependant, le mouvement de fond consistant à vouloir réduire la consommation de données est bien lancé en France, et il subsiste, alimenté la plupart du temps par une unique source, les études du Shift Project et de Carbone 4, le cabinet de consultants associé. On l'a notamment vu dans le débat contre la téléphonie 5G, où le chiffre –faux — le plus cité dans les médias français sur l'augmentation de la consommation électrique provenait d'une (trop) rapide multiplication issue d'une tribune du Shift publiée par le Monde, extrapolant abusivement des consommations d'équipements chinois spécifiques à l'ensemble des antennes du parc français.

Or, sur le fond, la critique de la consommation de données est fondée sur un choix non explicité et arbitraire, donc extrêmement contestable : la répartition de l'impact CO₂ du numérique par ses différents acteurs (opérateurs, équipementiers, services, etc) devrait se faire au prorata du volume de données consommé. Nous allons voir en quoi ce choix est infondé.

Comment évalue-t-on le poids du numérique ?

Les évaluations dites Top-Down (parce qu'elles ne s'intéressent qu'aux grandes masses sans entrer dans les détails de fonctionnement) incluent des Analyses du cycle de vie, donnant lieu à des rapports de « responsabilité sociale d'entreprise » (RSE). Ces rapports consistent à auditer l'ensemble des processus d'une entreprise et à en calculer l'impact environnemental. L'équivalent CO₂ n'est qu'une partie de ces évaluations. La consommation électrique est convertie en eqCO₂ au prorata du kWh, sur un facteur dépendant des modes de production. En France, le chiffre de 60-65 grammes eqCO₂/kWh est couramment utilisé, il correspond à l'évaluation par RTE du mix moyen de production français, peu carboné.

Ce poids inclut donc l'ensemble de l'activité de l'entreprise : non seulement la partie directement productive — dans le cas d'un opérateur, ses équipements réseau, serveurs, etc — mais également les consommations des camionnettes des équipes d'installation et maintenance, les chauffages et climatisation des bureaux, la consommation d'eau courante, l'entretien des parkings, etc.

On obtient ainsi un certain nombre de chiffres, dont l'équivalent CO₂ total émis annuellement par l'entreprise, qui sont publiés dans les rapports RSE.

Comment évalue-t-on ensuite le poids en équivalent CO₂ du volume de données ?

C'est ici qu'on commence à entrer dans les raisonnements à l'emporte-pièce, ceux qui semblent sujets à caution.

On évalue le trafic total de l'opérateur tel que délivré aux utilisateurs, et on divise le eqCO₂ émis par l'opérateur par le volume de données transmis.

On obtient ainsi un chiffre artificiel en grammes de eqCO₂/Go transmis, ou parfois en kWh/Go, facilement communicable et faussement parlant.

Au passage, on suppose que le service rendu par un opérateur est intégralement celui du volume de données transmis et qu'il n'existe rien d'autre de pertinent et mesurable. Or il existe d'autres métriques non moins utiles. Pour un opérateur de télécommunications : couverture géographique, débit, taux de disponibilité, etc. Pour un service de vidéo en ligne : œuvres stockées, ouverture à des tiers pour auto-publication, etc. Pour un service de simple stockage en ligne, le coût de gestion de la quantité de données ne sera pas le même que pour un service vidéo qui a besoin de procéder à des traitements lourds d'encodage. Pour un virement bancaire ou un message Twitter, le coût individuel de traitement d'une transaction va être très élevé par rapport au volume transféré. Et ainsi de suite.

Quand on a un marteau…

Pire : une fois que cette métrique artificielle du gramme eqCO₂/Go sera popularisée et présente éventuellement sur les factures des fournisseurs d'accès comme le propose aujourd'hui le législateur, la réaction attendue de l'utilisateur va être de réduire sa consommation de données pour décarboner.

Or il est facile de montrer que cet effort est vain et que cette initiative risque de détourner notre attention d'efforts plus efficaces.

Si demain nous divisons tous par 2 notre consommation de données au vu de l'évaluation qui précède, satisfaits de faire ainsi « notre part » dans la réduction d'impact, nos opérateurs vont-ils soudain constater avec plaisir que leurs factures d'électricité, d'équipements, de chauffage, de carburant sont également divisées par 2 ?

La réponse est évidemment « non ».

Pourraient-ils démonter quelques équipements afin de réduire leur infrastructure en rapport avec la baisse de volume ? Marginalement peut-être, mais pas au point de la réduire par un facteur proportionnel.

En fait l'impact sur le CO₂ émis serait infime, probablement même pas mesurable.

Il est utile de rappeler en passant que, si l'on cherche des corrélations, l'impact en équipement et consommation électrique d'une infrastructure d'opérateur, mobile comme fixe, est principalement lié à sa couverture géographique. Si nous voulons protéger l'environnement par des mesures de restriction, il serait donc directement utile de réduire cette couverture géographique. Affirmons sans grand risque d'être démenti que ce ne serait pas une voie souhaitable : en creux, on peut voir là une confirmation que les réseaux numériques ont une utilité qui va bien au delà de la comptabilité des volumes échangés.

Pitié pour les données…

Ce choix méthodologique de clé de répartition au volume, jamais questionné, n'a donc aucun sens physique, comme expliqué ici et dans le billet cité en introduction.

Pourquoi avoir choisi le volume de données ? La métrique a l'avantage d'être simple et de sembler logique. C'est le principe du compteur d'eau ou d'électricité.

Or si le numérique a vu ses usages exploser dans nos sociétés, c'est parce qu'il ne fonctionne pas aussi simplement que cela, et parce que la logique du compteur, privilégiée par les administrations des télécoms et leurs financiers, a été abandonnée : elle ne reflétait pas du tout les coûts réels, était elle-même coûteuse et improductive, et freinait notablement l'émergence des réseaux numériques à grande échelle et à haut débit.

La comptabilisation par secteur plutôt qu'au volume

La métrique du volume de données a aussi l'avantage perçu en France de cibler — en apparence — surtout des acteurs étrangers de la vidéo en ligne : Youtube, Netflix, Disney, etc. C'est oublier que la vidéo sur hébergement personnel est désormais possible, grâce à des outils comme Peertube, développé d'ailleurs par des français. Plomber la consommation de données ne peut que décourager les utilisateurs de s'approprier ces technologies, donc empêcher toute déconcentration du secteur, pourtant rêvée par nombre de nos politiques.

Si on se place du côté des gros fournisseurs de services, l'absurdité d'imputer le CO₂ par rapport aux volumes apparaît encore plus évidente. La vidéo en ligne produirait environ 60 % du trafic Internet aujourd'hui, selon une étude citée par le Shift. Est-ce que, pour autant, les fournisseurs de service concernés produisent 60 % du CO₂ de la totalité du secteur, comme le laisse entendre l'imputation au volume ? Très probablement pas. Il serait utile de le vérifier. Personne ne semble l'avoir fait.

Nous avons besoin de méthodologies d'imputation plus rigoureuses

Si nous voulons utilement lutter contre le réchauffement climatique, il est urgent de développer des méthodologies plus rigoureuses permettant un ciblage utile des efforts à réaliser, en entreprise comme par les citoyens, mais aussi en matière de politiques publiques. Sans cela, nous courons le risque de perdre nos efforts, notre temps et pire, de rater une cible qui est déjà difficile à atteindre.

Le volume cache la forêt

Réintroduire de près — imposition au vu d'un montant équivalent CO₂ artificiel ? — ou de loin une restriction des volumes échangés serait un considérable retour en arrière, introduisant une pénurie qui ne protégerait aucunement l'environnement, au contraire : elle nous restreindrait dans les usages vertueux du numérique — par exemple, la vidéoconférence ou le télétravail qui évitent des déplacements fortement émetteurs de CO₂ et qui congestionnent nos réseaux de transport. L'Ademe a ainsi conclu dans une étude récente que les externalités positives du télétravail prédominaient.

Le numérique est avant tout un fantastique outil de copie et diffusion en masse de l'information, bénéficiant d'effets d'échelle considérables. Depuis l'époque du Minitel, les débits de données couramment disponibles à coût comparable ont été multipliés par un million (de 1200 bps à 1 Gbps). Il en est de même avec les capacités de stockage, la puissance de nos ordinateurs, etc.

On me rétorquera — c'est un slogan en vogue — qu'il n'existe rien d'infini dans un monde fini. C'est une évidence. Mais notre bon sens habituel est dépassé pour appréhender des facteurs de gain d'efficacité d'un million en 40 ans, et les analogies avec le monde physique (réseau routier vs réseaux numériques) sont inopérantes et trompeuses.

On me parlera aussi de l'effet rebond — et de même, après avoir rappelé que l'effet rebond n'est pas une théorie physique s'appliquant mécaniquement avec certitude, qu'il ne peut donc être prouvé qu'a posteriori et n'a rien d'une fatalité, je répondrai qu'il faudrait un sacré effet rebond dans les usages pour enterrer des gains d'efficacité d'un million. Je ne réserve pas 1 million de fois plus de billets de train qu'autrefois, ni ne commande 1 million de fois par correspondance, ni ne regarde 1 million de fois plus d'heures de vidéo — je suis contraint là par le monde physique, celui qui n'a que 24 heures par jour.