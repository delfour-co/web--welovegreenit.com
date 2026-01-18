---
title: "Pourquoi j’ai piraté ma propre imprimante et ses cartouches officielles"
date: 2021-04-27T12:25:28.000Z
source: "Standblog (Tristan Nitot)"
language: "fr"
link: "https://signal.eu.org/blog/2021/04/27/pourquoi-jai-pirate-ma-propre-imprimante-et-ses-cartouches-officielles/"
description: "Tweet  Tout a commencé en septembre 2017 par un banal achat d'imprimante laser couleur. Il nous fallait une imprimante utilisable facilement ailleurs que sous Windows, idéalement en réseau pour éviter des allées et venues entre ordinateurs, et recto-verso. De préférence, connaissant les formats Post..."
author: "Pierre"
image: "https://signal.eu.org/blog/wp-content/uploads/2020/06/image-3.png"
guid: "https://signal.eu.org/blog/?p=1802"
categories:
  - "divers"
  - "environnement"
  - "fr"
  - "Geek stuff"
  - "Hacks"
draft: false
---

Tweet

Tout a commencé en septembre 2017 par un banal achat d'imprimante laser couleur. Il nous fallait une imprimante utilisable facilement ailleurs que sous Windows, idéalement en réseau pour éviter des allées et venues entre ordinateurs, et recto-verso. De préférence, connaissant les formats Postscript ou PDF pour éviter d'avoir à réaliser des conversions. La plupart de ces fonctions sont réalisables par logiciel pour compenser leur absence, mais c'est toujours plus compliqué à mettre en œuvre.

Par ailleurs, nous souhaitions une imprimante laser au lieu d'une jet d'encre. Ces dernières ne sont pas particulièrement moins chères, et sont moins fiables (l'encre sèche avec le temps), alors que nous imprimons assez peu. Je pensais aussi échapper aux restrictions d'usage qui touchent les cartouches jet d'encre et permettent de les vendre à prix fort, pensant naïvement que les cartouches de toner en étaient exemptes.

Bref, nous trouvons rapidement un modèle qui coche toutes les cases à un prix intéressant, un peu moins de 110 €. Appelons-la modèle 310.

C'est une imprimante très ressemblante mais d'un modèle différent que nous recevons. Appelons-la 317. La 317 est identique à la 310, à un petit détail près : elle a l'option wifi, qui ne nous intéresse pas du tout. Mais ça ne semble pas gênant de l'avoir.

L'imprimante est munie de 4 cartouches d'encre d'origine : noir, magenta, cyan, jaune. Elles sont censées permettre l'impression d'environ 1500 pages, contrairement aux cartouches vendues ensuite, prévues pour 3000 pages. Leur format étant identique, les cartouches d'origine ne sont donc pas remplies complètement. Le coût par page de l'imprimante neuve avec cartouches est ainsi relativement comparable au coût par page des 4 cartouches de remplacement. Le constructeur souhaite probablement s'assurer qu'on ne commandera pas une imprimante neuve complète lorsque vient le moment de changer les cartouches d'origine.

Passent alors quelques mois d'utilisation sans histoire, jusqu'à la fin 2018, principalement en noir et blanc. Nous approchons de l'épuisement de la cartouche magenta, gentiment signalé à l'avance par l'imprimante.

Nous commandons donc des cartouches de remplacement du constructeur, profitant d'une offre groupée à prix « d'ami » incluant les 4 couleurs. Nous les stockons en attente d'utilisation, le temps que la cartouche magenta d'origine arrive effectivement à bout, ce qui prendra 4 ou 5 mois.

« Et là, c'est le drame. »

L'imprimante ne reconnaît pas la cartouche magenta de remplacement, produisant une erreur cryptique et refusant catégoriquement d'imprimer, même en noir et blanc.

Tout naturellement nous appelons donc l'assistance de la marque en France, qui investigue pour m'expliquer, en substance, que tout cela est de ma faute : mon modèle est le 317, or j'ai commandé des cartouches pour le modèle 310. Il est donc tout à fait « normal » que cela ne fonctionne pas. J'aurais dû faire attention. Je peux m'adresser au vendeur des cartouches pour demander un échange.

De son côté, le vendeur des cartouches — nous avions, autre erreur, privilégié un commerçant du sud de la France pour éviter d'engraisser une grande plateforme de vente en ligne — explique qu'au titre de ses conditions de vente il ne peut réaliser d'échange, même de cartouches neuves non déballées, car notre commande date de plus de 3 mois (puisque nous nous y étions pris à l'avance).

Nous voilà donc avec une imprimante totalement inutilisable à moins de payer à nouveau au moins une cartouche magenta (environ 150-170 €), et 450 € de cartouches inutilisables, potentiellement revendables sur e-bay avec les complications associées, une perte de valeur pour nous, et un risque pour l'acheteur.

Pour la petite histoire, la présence d'une cartouche vide empêche également toute mise à jour logicielle de l'imprimante.

En faisant quelques recherches en ligne, je découvre que des commerçants chinois revendent des circuits (chips) de remplacement pour les cartouches, classés par couleur d'encre, modèle d'imprimante, nombre de pages le cas échéant, et zone géographique.

Ici un petit aparté sur la notion de zone géographique pour imprimante. D'après l'assistance du fabricant, il s'agit de fournir du toner optimisé pour la région où il est utilisé, afin d'être adapté aux conditions climatiques locales (hygrométrie, température).

On pourra juger de cette promesse en constatant sur cette image que la Russie et toute l'Afrique sont dans la même zone, ainsi que l'Espagne et le Groenland, ou encore le sud des États-Unis et le grand nord du Canada. En revanche, cette politique commerciale permet d'appliquer des tarifs et circuits de distribution différenciés par continent.

J'ai donc commandé sur Aliexpress, en Chine, les circuits de remplacement "zone Europe", pour chacune des 4 couleurs, pour le modèle d'imprimante 317.

Ces circuits sont normalement prévus pour recharger des cartouches avec du toner "compatible" (bien moins cher). Je dois être l'un des rares à m'en être servi sur des cartouches constructeur neuves. La somme est modique (15 € par circuit), le risque financier est donc minime même si l'opération échoue, et la manipulation est simple : 2 vis à ôter, le chip à remplacer, on revisse et c'est reparti.

Cet hiver j'avais remplacé le chip de la cartouche magenta, ce qui m'a permis d'utiliser à nouveau l'imprimante après presque 1 an de panne sans trop savoir comment s'en sortir. Je viens de remplacer le chip et la cartouche noire. On note sur l'emballage (photo ci-dessous) la mention du nombre de pages (3K), de la couleur (BK = black, noir), et de la zone géographique (EUR).

Addendum technique : les circuits ci-dessus sont interfacés avec l'imprimante par le protocole I2C, très courant dans le petit matériel électronique. Il est possible, dans une certaine mesure, de les reprogrammer par ce protocole pour changer les paramètres (autre couleur, autre imprimante, autre zone géographique, remise à zéro du compteur), et on trouve sur le web des instructions d'électroniciens à cet effet. C'est de ce type d'instructions que se servent les vendeurs de chips "pirates". Dans certains cas, il est impossible de reprogrammer un circuit qui est arrivé au bout du nombre de pages. J'ai essayé ces procédés avec un Raspberry — car celui-ci comporte une interface I2C — sur les circuits "constructeur", mais sans succès. J'aurai peut-être plus de résultats avec les circuits commandés en Chine.

Les imprimantes considérées ici sont les Lexmark CS310dn (sans wifi) et CS317dn (avec wifi), mais il existe énormément d'autres marques connues qui pratiquent le même genre de procédé : HP, Epson, Ricoh, Samsung, etc. L'objet de ce texte était surtout de montrer les complications que cela implique pour des usages légitimes, ces restrictions n'étant bien entendu jamais explicitées lors de l'acquisition.