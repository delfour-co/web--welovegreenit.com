---
title: "La mesure automatisée de consommation électrique"
date: 2020-11-27T15:02:51.000Z
source: "Standblog (Tristan Nitot)"
language: "fr"
link: "https://signal.eu.org/blog/2020/11/27/la-mesure-automatisee-de-consommation-electrique/"
description: "Tweet  Suite à mon billet précédent sur la question, et quelques retours de Stéphane Bortzmeyer, Philippe Bourcier et Laurent Penou, que je remercie ; suite aussi à un article tout récent de Pour la Science, j'ai décidé de commander un peu de matériel électronique pour pouvoir mieux mesurer la conso..."
author: "Pierre"
image: "https://signal.eu.org/blog/wp-content/uploads/2020/11/image-4.png"
guid: "https://signal.eu.org/blog/?p=2257"
categories:
  - "fr"
  - "Geek stuff"
  - "Hacks"
draft: false
---

Tweet

Suite à mon billet précédent sur la question, et quelques retours de Stéphane Bortzmeyer, Philippe Bourcier et Laurent Penou, que je remercie ; suite aussi à un article tout récent de Pour la Science, j'ai décidé de commander un peu de matériel électronique pour pouvoir mieux mesurer la consommation des équipements réseau domestiques.

Voici le graphique extrait de Pour la Science titré « le vrai coût énergétique du numérique » (réservé abonnés) [ bizarrement, le graphique semble avoir disparu de l'article depuis que je l'ai consulté initialement ], par Anne-Cécile Orgerie.

C'est ce style de graphe que je souhaiterais réaliser.

Pour cela, il faut un système permettant un relevé automatique périodique des consommations.

J'ai donc commandé :

une prise DELOCK 11827, essayée par Jan-Piet Mens ici.

Ces prises permettent une commande de l'appareil branché, mais aussi une consultation de sa consommation relevable par navigateur web ou programmation, à travers une connexion wifi.

un boîtier PZEM-004T. Le PZEM-004T est un circuit wattmètre intégré qui se branche entre le secteur et l'équipement à mesurer. Il se vend parfois nu, parfois dans un boîtier plastique. Il peut être relevé par port série (sur niveaux TTL), ou avec un câble USB réalisant l'adaptation. Le modèle représenté ici est limité à 10 ampères, mais il existe également une version 100 ampères que je n'ai pas commandée pour l'instant, et qui dispose d'une pince de courant pratique pour mesurer de fortes intensités sans couper le câble.

un relais 1PM « Shelly Plug ». Ce boîtier, normalement conçu pour être intégré dans un interrupteur mural ou une prise pour les rendre commandables à distance par navigateur web ou téléphone mobile, à travers votre wifi, inclut également un wattmètre relevable. Il y a en ce moment des promotions chez Shelly, petite société bulgare, et le paquet de 2 Shelly 1PM est à un prix particulièrement intéressant.

une « Shelly Plug S », à peu près la même chose que le Shelly 1PM ci-dessus, mais sous forme de prise électrique, prête à utiliser, et similaire à la DELOCK 11827 présentée en haut. Il existe un autre modèle de puissance supérieure, et toute une gamme pour commander vos appareils électriques à distance.

un module wattmètre I2C pour basse tension, courant continu, relevable par I2C. Il est donc plus compliqué à utiliser, il faut lui adjoindre un équipement supplémentaire disposant de l'I2C : un Raspberry, par exemple, ou un processeur destiné à l'électronique embarquée comme un STM32 ou un ESP32 qui disposent des interfaces nécessaires. Il doit être calibré avant usage, mais il dispose d'une bonne résolution (20 mW). En le complétant avec quelques prises adaptées, on peut par exemple lui faire mesurer la consommation d'un appareil USB, d'un appareil sur batterie, ou peut-être sur adaptateur secteur — si la tension mesurée est suffisamment lissée, ce qui n'est pas forcément gagné dans ce dernier cas –. 

Voilà. Restera à installer tout ça et à en tirer des informations pertinentes.

PS : Stéphane Bortzmeyer a lui aussi parlé des mesures qu'il a faites sur son réseau (électrique) domestique, des appareils utilisés, et des résultats obtenus. https://www.bortzmeyer.org/mesure-conso-energie.html