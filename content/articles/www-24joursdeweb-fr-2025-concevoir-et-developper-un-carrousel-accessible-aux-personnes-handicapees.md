---
title: "Concevoir et développer un carrousel accessible aux personnes handicapées"
date: 2025-12-05T23:00:00.000Z
source: "24 Jours de Web"
language: "fr"
link: "https://www.24joursdeweb.fr/2025/concevoir-et-developper-un-carrousel-accessible-aux-personnes-handicapees"
description: "Les carrousels, aussi appelés sliders, slideshows ou encore diaporamas, sont bien installés dans le paysage numérique. Des sites et des applications continuent d’en embarquer dès leur mise en production, bien que les ergonomes questionnent ce type de composant depuis plusieurs années1 .  À ce jour,..."
author: "Maïa Kopff"
image: "https://www.24joursdeweb.fr/media/pages/2025/concevoir-et-developper-un-carrousel-accessible-aux-personnes-handicapees/118a9b4858-1764454186/carrousel_stadium-museedusport-fr.png"
guid: "tag:www.24joursdeweb.fr,2024-10-10:/concevoir-et-developper-un-carrousel-accessible-aux-personnes-handicapees"
categories:
  - "web"
  - "accessibilité"
  - "écoconception"
draft: false
---

Les carrousels, aussi appelés sliders, slideshows ou encore diaporamas, sont bien installés dans le paysage numérique. Des sites et des applications continuent d’en embarquer dès leur mise en production, bien que les ergonomes questionnent ce type de composant depuis plusieurs années1
.

À ce jour, il n’existe pas de balise <carousel> portant une sémantique à toute épreuve. Chaque équipe intègre donc ces contenus comme elle peut, au risque de créer de nouveaux défis pour les personnes handicapées.

La Web Accessibility Initiative (WAI)2
 propose un guide des composants ARIA qui contient des implémentations permettant de rendre l’expérience en partie accessible aux personnes qui se servent d’une technologie d’assistance.

Cet article présente les points critiques qui peuvent créer des situations de handicap. Il apporte aussi des solutions pour produire des carrousels accessibles sur le web.

Le terme « carrousel » désigne ici les blocs dont on fait défiler les contenus au fur et à mesure pour n’en afficher qu’une partie à la fois et le terme « diapositive » désigne leurs sous-éléments.

Carrousel d’images légendées sur stadium.museedusport.fr.
Carrousel d’événements sur grandest.fr.
Carrousel pour les images d’une fiche produit sur burdastyle.fr.
Cet article fait des références au Référentiel général d’amélioration de l’accessibilité (RGAA) 4. Si vous êtes soumis à une norme ou à un référentiel différent (par exemple WCAG3
, EN 301 5494
, RAWeb5
 ou RAAM6
), vous pouvez faire la correspondance avec votre norme depuis la partie « Références » des critères cités.

Si vous ne pouvez pas lire tout l’article, vous pouvez retrouver les points essentiels à retenir dans la conclusion.

Sommaire de l’article

Bonnes pratiques pour concevoir un carrousel accessible

Prévoir un moyen d’arrêter les carrousels animés

Faciliter la navigation dans les carrousels

Ne pas masquer les carrousels d’images

Développer un carrousel accessible avec ARIA

Permettre l’utilisation du carrousel avec les technologies d’assistance

Gérer les carrousels avec de multiples diapositives

Les carrousels avec CSS sont-ils accessibles ?

Conclusion

Bonnes pratiques pour concevoir un carrousel accessible

Prévoir un moyen d’arrêter les carrousels animés

Si votre carrousel défile automatiquement et qu’il n’y a pas encore de bouton permettant d’arrêter le mouvement, alors il pose un premier problème d’accessibilité. De nombreuses personnes handicapées vont être gênées par ce défilement intempestif, notamment :

des personnes sensibles au mouvement, dont les personnes sujettes à la cybercinétose7
 ;

des personnes ayant un trouble de l’attention. Le mouvement du carrousel peut les empêcher de se concentrer sur une zone voisine de l’interface ;

des personnes malvoyantes, mais aussi des personnes qui ont des difficultés de lecture et des personnes ayant un handicap mental. Pour toutes ces personnes, essayer de lire du contenu en mouvement peut être particulièrement compliqué s’il n’est pas possible d’interrompre l’animation.

Utiliser des animations dans une page web est autorisé à condition de respecter cette règle essentielle d’accessibilité : les internautes doivent pouvoir contrôler le mouvement, par exemple au moyen d’un bouton « pause ».

Carrousel avec défilement automatique et bouton « pause » sur tgvinoui.sncf.
Le nom de ce bouton doit indiquer l’action qu’il permet de réaliser, par exemple : « lecture » quand le carrousel est à l’arrêt et « pause » lorsque le carrousel est en mouvement.

Ce bouton doit apparaître sur toutes les résolutions, y compris lorsque les internautes agrandissent la page à 200 % ou à 400 %8
.

Sur tgvinoui.sncf, le bouton « pause » reste présent dans une largeur réduite (correspondant au zoom graphique à 400 %).
Attention : certaines bibliothèques de composants permettent de mettre le carrousel sur pause lorsqu’une personne le survole à l’aide de la souris ou prend le focus sur un des éléments qu’il contient. Cette solution est insuffisante pour l’accessibilité : 

Les personnes qui utilisent un logiciel de contrôle visuel ou un logiciel de contrôle vocal en raison d’un handicap moteur pourraient avoir des difficultés à réaliser ce type d’action ;

Les utilisateurs et utilisatrices pourraient être en train d’interagir avec une zone différente de l’interface tout en percevant l’animation du carrousel dans leur champ visuel. 

Pour bien comprendre le problème, le site Access & Use propose des extraits vidéo de tests utilisateurs montrant les difficultés rencontrées par des personnes handicapées face à des carrousels animés.

Faciliter la navigation dans les carrousels

Gestes et boutons de navigation

Si votre carrousel est animé, il doit donc s’accompagner d’un bouton « lecture/pause ». Mais ce n’est probablement pas le seul bouton à prévoir…

En effet, dans certains carrousels, le passage d’une diapositive à l’autre se fait uniquement au moyen d’un geste de glissement, par exemple :

sur mobile : avec un doigt posé sur l’écran allant de la droite vers la gauche ;

sur ordinateur : en faisant défiler le contenu grâce au pavé tactile (touchpad).

Or, bon nombre de personnes handicapées peuvent rencontrer des difficultés pour réaliser ce type de mouvement. Citons notamment :

les personnes paraplégiques dont le périphérique est fixé à leur fauteuil roulant ;

les personnes déficientes visuelles qui ne voient pas l’interface, mais qui interagissent avec elle au moyen d’une plage braille ou d’un lecteur d’écran ;

les personnes ayant un trouble cognitif ou des difficultés d’apprentissage, qui ne comprendront pas forcément l’action à réaliser. 

Par ailleurs, toutes les technologies d’assistance ne permettent pas de réaliser des gestes de glissement : les contacteurs (qui reprennent les actions du clavier), les logiciels de contrôle visuel ou vocal, les lecteurs d’écran, les plages braille, etc.

Votre carrousel doit donc proposer des boutons de navigation visibles et utilisables au moyen d’un clic simple. Ainsi ils pourront être activés par tout le monde, que ce soit au clavier, à la voix, avec un système de contrôle visuel, etc. Il peut s’agir de boutons « Précédent » et « Suivant », de puces permettant de choisir la diapositive précise que l’on souhaite afficher, d’images miniatures, etc.

Carrousel de contenus sur groupe-sncf.com. L’utilisation d’un geste de glisser-déposer avec la souris permet de faire défiler le contenu. Des boutons « précédent » et « suivant » permettent de réaliser la même action.
Ces boutons doivent eux aussi apparaître sur toutes les résolutions, donc également pour les personnes qui zooment à 200 % ou à 400 %.

Sur grandest.fr les boutons « précédent » et « suivant » restent présents dans une largeur réduite (correspondant au zoom graphique à 400 %).
Navigation au clavier et ordre d’accès aux éléments

Votre carrousel commence à prendre forme !

Vous disposez maintenant du contenu de votre carrousel (probablement des images, des textes et/ou des éléments interactifs tels que des liens), de boutons de navigation et peut-être d’un bouton lecture/pause.

Dans quel ordre les personnes handicapées devraient-elles interagir avec ces différents éléments ?

Distinguons ici l’affichage et l’ordre d’accès au clavier ou avec une technologie d’assistance qui lit la page de manière linéaire.

Il est préférable de permettre aux internautes d’interagir d’abord avec le bouton lecture/pause, parce qu’il s’agit de l’une des fonctionnalités les plus critiques des carrousels.

Les éléments suivants seront les boutons de navigation de votre carrousel. En effet, le fait de placer ces éléments avant le contenu du carrousel dans le code source permettra aux personnes qui naviguent au clavier d’afficher la ou les diapositives qui les intéressent avant d’y accéder.

Exemple 1 : carrousel avec ordre de tabulation cohérent.

Description de l’exemple 1 : carrousel avec ordre de tabulation cohérent
Carrousel qui affiche une photo (cliquable) d’une falaise et sa légende « Un morceau de l’Altschlossfelsen, aux airs de petites maisons troglodytes ».

L’image est cliquable et la légende contient un lien.

Le contenu du carrousel est suivi de trois boutons : « précédent », « lecture/pause » et « suivant ».

Des numéros indiquent l’ordre de tabulation :

Bouton lecture/pause

Bouton précédent

Bouton suivant

Contenu du carrousel : image cliquable puis le lien.

Placer les boutons de navigation avant les diapositives permet de réduire le nombre de manipulations au clavier en évitant aux utilisateurs et utilisatrices de revenir en arrière pour interagir avec la ou les diapositives qui les intéressent.

Exemple 2 : carrousel avec ordre de tabulation incohérent

Description de l’exemple 2 : carrousel avec ordre de tabulation incohérent
Carrousel qui affiche une photo (cliquable) d’une falaise et sa légende « Un morceau de l’Altschlossfelsen, aux airs de petites maisons troglodytes ».

L’image est cliquable et la légende contient un lien.

Le contenu du carrousel est suivi de trois boutons : « précédent », « lecture/pause » et « suivant ».

Des numéros indiquent l’ordre de tabulation incohérent :

Contenu du carrousel : image cliquable puis le lien

Bouton lecture/pause

Bouton précédent

Bouton suivant.

Il est donc possible d’utiliser un ordre d’affichage et un ordre d’accès au clavier différents, tant que la mise en forme ne laisse pas de doute sur la relation entre ces éléments, par exemple en utilisant la proximité. 

Ne pas masquer les carrousels d’images

Si votre carrousel ne contient que des images, elles devraient être décrites, même si elles vous semblent décoratives.

Carrousel d’images sans texte sur olympics.com.
Dans les fiches produit, les images peuvent véhiculer des informations telles que la couleur d’un produit, l’angle de vue, une fiche technique, etc. 

Sur drouault.net, les fiches produit contiennent des carrousels d’images montrant le produit sous différents angles.
Le fait d’intégrer les images de manière décorative (par exemple à l’aide d’un attribut alt="" sur une balise <img>) ne fait a priori pas disparaître le carrousel, qui est composé d’au moins un bouton « suivant » en plus de son contenu, aux technologies d’assistance.

Masquer vos images aux technologies d’assistance reviendrait donc à proposer un composant aux personnes aveugles et malvoyantes qui ne contiendrait que des boutons de navigation, mais pas de contenu.

Il reste donc préférable de toujours décrire les images. Si les images n’apportent pas d’information essentielle, il est possible de rédiger des descriptions courtes telles que « vue du produit de face » « toute notre équipe pose devant notre bâtiment » ou « paysage de montagnes ».

Attention : masquer entièrement le carrousel (c'est-à-dire à la fois les images et les boutons de navigation) aux technologies d’assistance à l’aide de l’attribut aria-hidden="true", n’est pas non plus souhaitable.

Le carrousel ne serait effectivement plus annoncé aux personnes aveugles et malvoyantes ; mais il ne serait plus non plus possible d’interagir avec son bouton lecture/pause ni ses boutons de navigation pour les personnes qui se servent d’autres types de technologie d’assistance, notamment les personnes qui utilisent le contrôle vocal en raison d’un handicap moteur.

Développer un carrousel accessible avec ARIA

Le site ARIA Authoring Practices Guide propose de nombreux exemples de composants interactifs et des manières de les rendre accessibles. Certains de ces exemples sont tout de même à sélectionner avec soin. Lisez toujours les avertissements accompagnant les différents motifs de conception.

Permettre l’utilisation du carrousel avec les technologies d’assistance

Le motif de conception ARIA Carousel a l’avantage de proposer deux exemples presque « clé-en-main » qui incluent une navigation au clavier cohérente :

un carrousel « basique » avec des boutons « précédent » et « suivant ». Ce code est relativement simple ;

un carrousel dont le fonctionnement s’apparente à celui d’un système d’onglets, avec des puces de navigation. C’est cet exemple dont vous auriez intérêt à vous servir pour développer un carrousel dont la navigation se fait à l’aide de numéros ou d’images miniatures. Le code est un peu plus complexe (attributs et interactions au clavier supplémentaires à implémenter en JavaScript).

Heureusement, la documentation est claire et des exemples de code HTML, CSS et JavaScript sont proposés.

Nom, rôle et changements d’état

Les carrousels sont des composants interactifs dans la mesure où l’on peut interagir avec différentes parties de la zone (notamment les boutons de navigation) pour en faire défiler le contenu.

Les éléments interactifs doivent posséder un nom, un rôle et leurs changements d’état doivent être signalés aux personnes qui se servent de technologies d’assistance. 

Utilisez le rôle region (implicite sur la balise <section>) ou le rôle group. Une fois nommé avec un attribut aria-label ou un attribut aria-labelledby, les lecteurs d’écran annonceront le début et la fin du composant9
.

<section aria-labelledby="carousel-heading">
 <h2 id="carousel-heading">Galerie photos</h2>
 […]
</section>

<div role="region" aria-label="Actualités">
 […]
</div>

<div role="group" aria-labelledby="testimonies-header">
 <h2 id="testimonies-header">Témoignages</h2>
 […]
</div>
Note : les régions nommées (rôle region ou balise <section>) proposent un raccourci qui peut être utilisé au moyen d’un lecteur d’écran ou d’une extension de navigateur pour les personnes qui naviguent au clavier. Ce rôle devrait être réservé aux zones principales de la page.

Affichage de la liste des repères dans le rotor du lecteur d’écran VoiceOver : le carrousel qui a le rôle region est identifié et atteignable.

Les rôles region et group restent des rôles généraux qui n’indiquent pas nécessairement l’interactivité de votre carrousel. Le guide des composants ARIA propose d’utiliser l’attribut aria-roledescription pour expliciter le rôle du carrousel aux personnes qui consultent votre site à l’aide d’une technologie d’assistance.

Il est donc suggéré d’ajouter un attribut aria-roledescription="carousel" sur votre carrousel (là où vous avez utilisé une balise <section>, un rôle region ou group) et dans le cas d’un carrousel « basique », un attribut aria-roledescription="slide" sur chacune des diapositives.

Certains lecteurs d’écran remplacent le rôle de l’élément par la valeur de l’attribut. D’autres lecteurs d’écrans ajoutent la valeur au rôle de l’élément. Ils annonceront donc par exemple « Actualités, carousel » ou « 1 sur 6, groupe, slide ».

Le lecteur d’écran VoiceOver ne restitue pas le rôle « région », uniquement le contenu de l’attribut aria-roledescription.

Attention : la valeur de l’attribut aria-roledescription est restituée telle quelle, elle doit donc être traduite ! En effet, le terme « slide » n’est a priori pas connu des dictionnaires français. Sa prononciation par les lecteurs d’écran risque donc d’être hasardeuse.

Dans ce cas, utilisez par exemple aria-roledescription="diapositive".

Certains carrousels indiquent visuellement la diapositive active dans les boutons de navigation au moyen d’une couleur, d’une bordure, d’un arrière-plan ou d’une autre mise en forme. Cette indication doit également être transmise aux personnes qui se servent d’une technologie d’assistance.

Sur ccicampus.fr, une barre violette indique le témoignage en cours de consultation.
Pour transmettre une information visuelle à une personne qui se sert d’un lecteur d’écran, il est possible d’utiliser un attribut title sur un élément interactif (bouton), un texte positionné hors écran10
 ou un attribut ARIA permettant de transmettre un état.

Le motif de conception ARIA Carousel propose un exemple avec puces de navigation qui utilise l’attribut aria-selected sur la puce qui indique la diapositive active du carrousel.

Note : l’utilisation des attributs ARIA correspond à des rôles précis. Consultez la documentation ARIA avant d’ajouter ce type d’attribut à votre code.

Restituer des informations « en direct »

Vous avez positionné les boutons qui permettent de naviguer dans votre carrousel avant les diapositives dans le code source afin de faciliter la navigation pour les personnes qui naviguent au clavier.

Il reste à informer les personnes qui se servent d’un lecteur d’écran du contenu de la nouvelle diapositive à chaque activation de l’un des boutons de navigation.

Le motif de conception ARIA Carousel propose justement une utilisation intéressante de l’attribut aria-live qui permet de gérer des régions « en direct ». À chaque fois qu’un changement de contenu se produit dans la zone qui possède l’attribut aria-live="polite" (dans notre cas : l’affichage d’une nouvelle diapositive), les lecteurs d’écran restituent ces changements.

Attention : dans le cas d’un carrousel qui défilerait automatiquement, la restitution des changements gênerait les utilisateurs et utilisatrices. L’exemple y répond bien : lorsque le carrousel défile automatiquement, l’attribut aria-live="polite" devient un attribut aria-live="off".

Pour mieux comprendre les bonnes pratiques d’utilisation de l’attribut aria-live, lisez l’article « Live regions ARIA : bonnes et mauvaises pratiques ».

Gérer les carrousels avec de multiples diapositives

La limite principale du motif de conception ARIA Carousel est l’absence d’exemple pour les carrousels qui affichent plusieurs contenus en même temps.

Carrousel d’actualités sur olympics.com.
Carrousel de vidéos sur franceinfo.fr.
Ce type de carrousels permet généralement de faire défiler un contenu à la fois ou l’ensemble des contenus visibles à l’écran. Il est donc possible d’observer le déplacement de quatre diapositives en même temps.

En l’absence de proposition du guide des composants ARIA permettant de gérer ce type de carrousel, il est possible de s’inspirer des principes déjà évoqués tout en adaptant l’intégration à notre besoin, en s’assurant que :

votre carrousel dispose bien d’un rôle et d’un nom pertinents et ses changements d’état sont signalés ;

l’attribut aria-live restitue le contenu de la ou les dernières diapositives visibles, mais ne restitue pas des éléments dont la visibilité n’est pas modifiée ;

les nouveaux éléments affichés sont bien accessibles aux technologies d’assistance.

Pour l’attribut aria-live, vous pouvez continuer à utiliser la valeur aria-live="polite" dans votre carrousel. Il faudra éviter d’ajouter l’attribut aria-atomic="true" qui aurait pour effet de restituer l’ensemble du carrousel, y compris les diapositives dont la visibilité n’a pas été modifiée. Si l’attribut aria-atomic doit être présent, vérifiez que sa valeur est bien aria-atomic="false". Pour plus d’informations sur l’attribut aria-atomic, lisez l’article « Live regions ARIA : aria-live et ses analogues alert, log, status ». 

Ne masquez pas de diapositives visibles avec l’attribut aria-hidden="true". Cet attribut empêche les personnes qui se servent d’une technologie d’assistance d’interagir avec le contenu ou de le vocaliser, y compris celles qui voient l’écran et qui utilisent un logiciel de contrôle vocal, une loupe d’écran vocalisée ou un lecteur d’écran.

Même si une seule diapositive est considérée comme « active » dans le code, les internautes pourraient tenter d’interagir avec n’importe laquelle des diapositives affichées.

Un carrousel qui affiche plusieurs diapositives en même temps.

Le bookmarklet « Blackout » ajoute un fond noir aux éléments qui possèdent l’attribut aria-hidden="true".

Les carrousels avec CSS sont-ils accessibles ?

Au mois de mars 2025, Chrome a commencé à communiquer sur des carrousels réalisés sans JavaScript, grâce à la spécification CSS Overflow 5. Le site Carousel Gallery propose plusieurs exemples de zones défilantes implémentant ces fonctionnalités11
. 

Sara Soueidan a écrit un article détaillé et très pédagogique sur l’accessibilité de ces « carrousels CSS ».

Bien que la navigation au clavier soit impressionnante sur les pseudo-éléments CSS interactifs, les carrousels CSS ne proposent pas une expérience suffisamment accessible aux personnes handicapées pour l’instant.

Conclusion

Les carrousels peuvent revêtir des formes multiples. Aucun composant normé n’existe à ce jour, ce qui laisse donc chaque équipe libre de son intégration, mais aussi responsable des effets que celle-ci aura sur l’expérience des personnes handicapées. 

Cet article vous indique des points critiques parmi lesquels :

Le défilement automatique doit pouvoir être mis sur pause12
 ;

Le carrousel doit posséder des boutons permettant de naviguer et ceux-ci doivent se trouver avant les diapositives dans le code source13
 ;

Les carrousels et leurs contenus ne peuvent pas être totalement masqués. Ils doivent posséder un nom, un rôle et leurs changements d’état doivent être signalés14
 ;

Il est possible de signaler les changements dans l’interface aux personnes qui se servent d’une technologie d’assistance sans les extraire de leur contexte, mais cela ne doit pas créer de gêne15
 ;

Certains motifs de conception ARIA doivent être adaptés en fonction de vos besoins ;

L’accessibilité des fonctionnalités expérimentales doit être testée avant d’être déployée en production.

Loin de se limiter aux carrousels, ces principes s’appliquent à l’ensemble de vos composants interactifs !

Pour aller plus loin

Dans l’article What's an interactive element?, Manuel Matuzović s’interroge sur ce qui définit un élément interactif. Les carrousels, qui embarquent des boutons de navigation, rentrent bien dans ce cas. Voir aussi son livre Web Accessibility Cookbook. O’Reilly, qui donne des recettes de code accessible accompagnées d’explications sur les impacts utilisateur.

Dans l’article Horizontal Scrolling Containers Are Not a Content Strategy, Adrian Roselli s’intéresse aux blocs de contenu défilants… qui ne sont pas des carrousels ! Ceux-ci représentent de nouveaux défis pour les utilisateurs et utilisatrices.

Dans son guide A Content Slider, Heydon Pickering explore l’accessibilité des carrousels avec des exemples de code. Il a aussi écrit le livre Inclusive Components. Smashing Magazine où il propose des exemples de code accessible pour d’autres composants interactifs.

Dans l’article Carrousels LinkedIn avec Canva : peut-on les rendre accessibles ?, Coryse Quibel s’intéresse à l'accessibilité des carrousels sur les réseaux sociaux qui peuvent également être rendus accessibles, moyennant l’ajout d’une alternative.

Remerciements

Merci aux personnes ayant permis d’enrichir cet article : Luce Carević, Marius Chamsseddine, Marie Guillaumet, Cécile Jeanne et Magali Milbergue d’Access42, ainsi que l’équipe de Paris Web.

 Voir par exemple le site Dois-je utiliser un carrousel ? 

 ↩
 Retour au texte 1

 Web Accessibility Initiative (WAI) : groupe de travail du W3C (World Wide Web Consortium) dédié à l’accessibilité numérique 

 ↩
 Retour au texte 2

 Web Content Accessibility Guidelines : recommandations internationales pour l’accessibilité des contenus web. 

 ↩
 Retour au texte 3

 EN 301 549 (PDF en anglais) : norme européenne pour l’accessibilité des produits et services des technologies de l’information et de la communication. 

 ↩
 Retour au texte 4

 Référentiel d’Évaluation de l’Accessibilité Web : référentiel luxembourgeois qui contient des critères de la norme EN 301 549 absents du RGAA. 

 ↩
 Retour au texte 5

 Référentiel d’évaluation de l’accessibilité des applications mobiles : référentiel luxembourgeois permettant l’évaluation des applications mobiles. 

 ↩
 Retour au texte 6

 À ce sujet, voir la conférence « Vos présentations et vos sites me donnent littéralement envie de vomir » de Christophe Breheret-Girardin en 2024 à Paris Web 

 ↩
 Retour au texte 7

 Voir le critère 10.4 du RGAA sur l’augmentation de la taille des caractères et le critère 10.11 du RGAA sur le défilement de la fenêtre. 

 ↩
 Retour au texte 8

 De la même manière que les lecteurs d’écran annoncent le début et la fin des listes (balise <ul>) et des tableaux (balise <table>). 

 ↩
 Retour au texte 9

 Voir l’article « Masquage accessible de pointe » par Gaël Poupard 

 ↩
 Retour au texte 10

 À l’heure actuelle, certaines de ces fonctionnalités sont expérimentales et non supportées sur Firefox ni Safari. 

 ↩
 Retour au texte 11

 Voir le critère 13.8 du RGAA 

 ↩
 Retour au texte 12

 Voir le critère 13.10, le critère 12.8 et le critère 10.3 du RGAA 

 ↩
 Retour au texte 13

 Voir le critère 7.1 du RGAA et le motif de conception ARIA Carousel 

 ↩
 Retour au texte 14

 Voir le critère 7.5 du RGAA et le motif de conception ARIA Carousel 

 ↩
 Retour au texte 15