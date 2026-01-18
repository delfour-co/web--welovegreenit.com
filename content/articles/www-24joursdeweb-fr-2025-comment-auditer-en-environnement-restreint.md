---
title: "Comment auditer en environnement restreint"
date: 2025-12-04T23:00:00.000Z
source: "24 Jours de Web"
language: "fr"
link: "https://www.24joursdeweb.fr/2025/comment-auditer-en-environnement-restreint"
description: "Après plusieurs années dans le développement web, je suis devenue auditrice en accessibilité numérique.  L’accessibilité a toujours été au cœur de mon métier et le changement m’a semblé être une évolution pertinente. Après tout, je continue à naviguer dans le code, à tester des sites, à échanger ave..."
author: "Morgane Mounier"
guid: "tag:www.24joursdeweb.fr,2024-10-10:/comment-auditer-en-environnement-restreint"
categories:
  - "web"
  - "accessibilité"
  - "écoconception"
draft: false
---

Après plusieurs années dans le développement web, je suis devenue auditrice en accessibilité numérique.

L’accessibilité a toujours été au cœur de mon métier et le changement m’a semblé être une évolution pertinente. Après tout, je continue à naviguer dans le code, à tester des sites, à échanger avec des équipes techniques, à réfléchir à l’expérience utilisateur. Toutefois, dans la pratique, il y a des choses dont je n’avais pas du tout conscience.

Quand on développe depuis longtemps, on paramètre son IDE (Environnement de Développement Intégré) préféré, on installe ses extensions préférées, on sauvegarde des dizaines (voire des centaines) de favoris « parce que ça peut servir », on automatise certaines tâches. Bref, on travaille dans un espace maîtrisé.

En devenant auditrice, j’ai découvert un tout autre univers. On ne produit plus, mais on observe, analyse et évalue. Et surtout, j’ai découvert un métier où l’environnement de travail n’est plus toujours entre nos mains. Et c’est là que les choses se compliquent.

Auditer

Auditer un site, en France, c’est évaluer sa conformité au regard du Référentiel Général d’Amélioration de l’Accessibilité (RGAA 4.1.2) . Notre rôle est de relever les points bloquants pour les personnes en situation de handicap (visuel, auditif, cognitif, moteur, etc.) puis d’accompagner les équipes techniques et métiers dans la mise en conformité de leurs sites.

La sécurité c’est important

Les règles de sécurité sont bien sûr essentielles partout, mais s’il existe un secteur des plus stricts, c’est bien celui de la banque et de l’assurance. La protection des données est une priorité absolue et les politiques de sécurité y sont très encadrées. 

Pour effectuer nos audits dans ce contexte, il existe deux scénarios. 

Soit nous nous rendons directement dans les locaux du client, avec un accès encadré à leur environnement. L’audit se déroule alors sur leurs machines, parfois en présence d’un membre de l’équipe technique.

Soit le client met à disposition un ordinateur dédié, équipé des accès nécessaires via le VPN (Réseau Privé Virtuel) afin que nous puissions travailler à distance.

Dans tous les cas, avant de pouvoir récupérer une machine, je dois généralement passer par l’étape incontournable : la demi-journée d’intégration sécurité. Oui, même si je suis là pour trois jours, même si les demandes ont été faites deux mois avant.

Badge temporaire, présentation du plan d’évacuation, rappel des procédures, validation du test de sécurité, et me voilà en possession d’un ordinateur sûrement impeccable côté sécurité, mais généralement beaucoup moins côté outils d’audit. La plupart du temps, les logiciels nécessaires sont inconnus, les extensions ne sont pas autorisées. Pourtant, une liste de besoins avait été envoyée en amont, un ticket technique ouvert, validé, revalidé, contresigné par une hiérarchie que je ne rencontrerai probablement jamais. 

Il est fréquent de passer plusieurs journées en échanges avec le support technique, à chercher des solutions, à redemander des autorisations, à reformuler les besoins. 

Petits exemples : 

après avoir constaté que le centre de logiciels n’autorisait pas l’installation du lecteur d’écran NVDA, et avec l’accord du support technique, nous avons dû installer une machine virtuelle sur le poste fourni, uniquement pour pouvoir installer le logiciel et contourner la restriction ;

chez un autre client, et avec l’accord de l’équipe de développement, j’ai installé la version portable de Firefox, non prévue chez eux. Chaque jour, un script de sécurité passait le désinstaller à 14 h.

Cette réalité m’a appris une chose : dans les environnements sécurisés, auditer un site ne se résume pas à tester des contrastes ou des alternatives textuelles. Mais aussi à tester sa patience en composant avec les contraintes d’organisation.

Mais de quoi a-t-on besoin pour auditer ?

Pour auditer un site, nous allons avoir besoin d’un certain nombre d’extensions et de logiciels pour pouvoir évaluer correctement les différents critères des référentiels.

Dans les navigateurs, plusieurs extensions sont devenues des incontournables comme :

HeadingsMaps : analyser la hiérarchie des titres, vérifier la structure logique de la page ;

Color Contrast Analyser, Color Contrast checker : tester les contrastes de couleurs ou simuler différents types de déficiences visuelles ;

Web developer, Wave : identifier rapidement les textes alternatifs des images, visualiser les rôles et attributs ARIA utilisés dans le code.

Ces petits outils du quotidien permettent d’aller vite, d’être efficace et de repérer rapidement les problèmes les plus fréquents.

Mais quand il devient évident que tout ou partie des outils ne seront pas installés dans les temps et que la date programmée pour effectuer l’audit approche, il faut passer au plan B.

Le code source

En tant qu’ancienne développeuse, mon premier réflexe est de passer par le code (inspecter le DOM — Document Object Model —, ouvrir la console, lancer quelques petites fonctions JavaScript pour retrouver les éléments). Mais effectuer les tests manuels est très chronophage surtout pour des vérifications qui en temps normal avec les extensions adaptées ne prennent que quelques secondes.

On se retrouve à lire le code source ligne par ligne pour reconstituer la hiérarchie des titres ou vérifier la présence d’alternatives, lire les attributs et chercher leur correspondance à la main. On finit par bricoler de petits scripts maison pour parser le code, lister les éléments focusables, repérer les listes, etc.

Ces méthodes de contournement sont possibles, mais elles demandent une connaissance technique plus avancée qui ne devrait pas être indispensable pour un audit standard. Le but d’un audit est avant tout d’évaluer l’accessibilité dans des conditions proches de l’utilisation réelle.

Sans un minimum d’outillage, l’audit perd en efficacité, en précision et souvent en fiabilité. On détecte certains des problèmes, mais il y a aussi de grandes chances que l’on passe à côté de beaucoup d’autres. Ce n’est clairement pas suffisant.

Ponctuellement, lire le code source, écrire des bouts de script dans la console pour retrouver ou vérifier la présence d’éléments, pourquoi pas. Le répéter à chaque audit « sécurisé », c’est rébarbatif. Pour cela, il existe déjà une solution légère, simple et parfaitement adaptée à ces contextes : les bookmarklets.

Les bookmarklets

Je connaissais déjà le principe des bookmarklets : on m’en avait parlé, j’avais trouvé ça intéressant, mais je pense qu’à l’époque, je n’avais pas pleinement percuté à quel point cet outil pouvait être utile dans un contexte d’audit.

Un bookmarklet, c’est simplement un petit script JavaScript enregistré comme un favori dans votre navigateur. Au lieu de pointer vers une page web, le favori déclenche du code directement dans la page que vous êtes en train de consulter. Aucune installation, aucun droit administrateur : un simple glisser-déposer dans votre barre de favoris suffit.

Ce faible niveau d’intrusion en fait un outil particulièrement pratique dans les contextes où chaque installation doit être validée par une multitude de services.

En condition d’audit, les bookmarklets ont plusieurs avantages très appréciables. Ils ne nécessitent aucune installation, ils fonctionnent dans la plupart des navigateurs et permettent de faire des tests directement dans la page (un peu comme les extensions, mais en version plus légère et plus facilement maîtrisable).

Bien sûr, ils n’offrent pas toutes les fonctionnalités et ils sont souvent moins « jolis » mais ils suffisent pour réaliser l’analyse de certains critères efficacement.

On trouve de nombreuses bibliothèques de bookmarklets partagées par la communauté ou des initiatives reconnues telle que ANDI, qui regroupent des dizaines de petits scripts utiles pour l’audit et la sensibilisation.

De même, il est tout à fait possible de faire ses propres bookmarklets pour répondre à ses habitudes de travail personnel ou à un critère précis :

afficher la hiérarchie des titres de la page ;

mettre en évidence les liens et leurs intitulés ;

afficher les alternatives des images ;

visualiser la structure des tableaux présents dans la page.

Exemple :

Un bookmarklet au final ce n’est qu’un petit bout de JavaScript :

// Lister toutes les balises <ul>, <ol> et les éléments qui ont un rôle "list" puis leur mettre une bordure rouge
document.querySelectorAll("ul, ol, [role='list']").forEach(el => {
 el.style.border = "2px solid red";
});
Pour faire un bookmarklet, il suffit de l’encapsuler dans une fonction anonyme auto-exécutable, puis de le réduire sur une seule ligne et de l’ajouter à ses favoris :

javascript:(() => {/\* Votre code \*/})();
Faites le test et glissez ce lien dans votre barre de favori et en l’activant, vous pourrez voir les listes de la page encadrée de rouge :

{document.querySelectorAll('ul, ol, [role=list]').forEach(el=>{el.style.border='2px solid red';});})();">Listes : entourer en rouge

Bien sûr ceci n’est qu’un exemple et cela pourrait être bien plus complexe avec une présentation plus travaillée. Voir les ressources en bas de page.

Quelques limites à garder en tête

Les bookmarklets ne sont pas une solution parfaite. Certains sites appliquent une politique de sécurité de contenu (CSP) stricte qui bloque l’exécution de scripts injectés dans la page. Dans ces cas-là, le bookmarklet ne fonctionnera pas. Et, comme pour tout script, il faut rester vigilant : ne jamais exécuter un code dont on ne connaît pas la source et privilégier des bookmarklets simples, audités et issus de ressources fiables.

Malgré ces limites, ils restent un outil précieux : léger, portable, facilement adaptable et surtout extrêmement pratique dans les environnements où tout est restreint.

En conclusion

Même s’il existe toujours des moyens de s’adapter et de trouver des solutions au cas par cas, il est tout aussi important de faire connaître nos métiers et nos pratiques à tous les niveaux : équipes techniques, support, sécurité.

Les outils conçus pour l’accessibilité ne sont pas seulement utiles pour les personnes qui évaluent : ils peuvent bénéficier à tous les profils et s’intégrer dans le cadre de travail quotidien. Ceci afin de plus facilement les faire accepter et autoriser. 

Voici quelques sites (en anglais) qui proposent des bookmarklets :

Liste d’outils d’accessibilité

The University of Texas Medical Branch

Department for Education (UK)

Paul Jadam (ressources un peu datée mais toujours utiles)