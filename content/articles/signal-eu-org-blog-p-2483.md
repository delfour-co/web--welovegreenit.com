---
title: "Énergie solaire personnelle pour le numérique, retour d’expérience"
date: 2022-11-21T11:52:48.000Z
source: "Standblog (Tristan Nitot)"
language: "fr"
link: "https://signal.eu.org/blog/2022/11/21/energie-solaire-personnelle-pour-le-numerique-retour-dexperience/"
description: "Tweet  En mars 2022, j'ai voulu tenter une petite expérimentation : est-il possible en ville d'assurer 100 % de sa consommation énergétique numérique mobile (ordinateur portable + ordiphone) par énergie solaire renouvelable ?  L'idée de fond n'était pas de décarboner ni de faire une économie sur la..."
author: "Pierre"
image: "https://signal.eu.org/blog/wp-content/uploads/2022/11/image-886x1024.png"
guid: "https://signal.eu.org/blog/?p=2483"
categories:
  - "environnement"
  - "fr"
  - "Geek stuff"
draft: false
---

Tweet

En mars 2022, j'ai voulu tenter une petite expérimentation : est-il possible en ville d'assurer 100 % de sa consommation énergétique numérique mobile (ordinateur portable + ordiphone) par énergie solaire renouvelable ?

L'idée de fond n'était pas de décarboner ni de faire une économie sur la facture d'électricité : malgré le pilonnage médiatique anti-numérique sur le poids colossal supposé de celui-ci, les quantités en jeu sont insignifiantes : tout au plus 50 à 100 Wh par jour, soit moins de 0,02 € sur la facture.

Le but était surtout de voir si on peut s'assurer une autonomie minimale en cas de coupure prolongée du réseau électrique.

L'habitat en ville, en immeuble, introduit quelques contraintes :

impossible d'utiliser un groupe électrogène classique : solution de toute façon exclue car polluante, bruyante, et non autonome puisqu'il faut de l'essence ;
difficile de déployer des panneaux solaires fixes sans accès à la toiture.

J'ai donc opté pour cette batterie de camping, d'une capacité de 500 Wh avec sortie 220 V et USB :

… et ce panneau solaire d'un peu moins de 1 m² , pour une puissance crête théorique de 120 W :

Le coût des 2 équipements est de presque 700 €, ce qui exclut toute rentabilité de l'investissement en terme de production d'électricité.

Avec une telle capacité de batterie, on peut en gros espérer alimenter un ordinateur portable pendant 20 à 30 heures, ou faire 30 recharges complètes de téléphone mobile.

La batterie pourrait se recharger théoriquement en 4-5 heures si le panneau produisait au maximum (120 W), mais la batterie possède un limiteur qui n'accepte pas plus de 65 W en charge. Cependant, il est possible de dépasser cette valeur par grand soleil en branchant des charges directement en sortie : elles seront alors alimentées directement par l'électricité reçue du panneau. L'électronique se charge alors de gérer les excédents en chargeant la batterie, ou les déficits en la déchargeant.

Par un beau jour et par éclairage direct, il est possible de récupérer 65 W, donc recharger la batterie théoriquement en 8-9 heures. En pratique, même au solstice d'été, en ville avec les ombres portées par les immeubles, il est difficile de dépasser 3-4 heures de charge maximale.

On peut bien sûr optimiser la production en déplaçant le panneau manuellement pour suivre au mieux le soleil, mais c'est peu pratique et très chronophage.

En novembre, ça se corse : le soleil est plus bas — ce qui, en ville, augmente très sensiblement les périodes d'ombre portée –, le temps est plus couvert, il est difficile de récupérer plus de 5-10 W. Ici, par temps couvert, on atteint péniblement 3 W, soit environ 2 heures pour gagner 1 % de charge batterie seulement. Depuis que j'ai pris cette photo, la puissance de charge est tombée à 1 W en plein midi…

La batterie était tombée à 10 % en début de mois, mais j'ai pu récupérer 30 % de charge en 2 journées relativement ensoleillées et avec un suivi serré du soleil.

En conclusion, si par une belle journée d'été ou de printemps il est assez facile de produire 100 à 200 Wh avec un tel matériel, on doit plutôt tabler sur 10 à 20 Wh par jour en moyenne en automne en région parisienne sur une journée couverte, et elles sont nombreuses.

Je considère donc que fonctionner en autonomie complète sur mon matériel mobile, malgré une utilisation très sobre (30 mn d'ordinateur portable par jour), est un quasi-échec.