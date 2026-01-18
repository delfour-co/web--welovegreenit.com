---
title: "Le blocage de site sans juge et le projet PJLSREN du gouvernement"
date: 2023-05-14T16:48:36.000Z
source: "Standblog (Tristan Nitot)"
language: "fr"
link: "https://signal.eu.org/blog/2023/05/14/le-blocage-de-site-web-sans-juge-en-france-et-le-projet-pjlsren-du-gouvernement/"
description: "Tweet  Si vous avez suivi l'actualité Internet de ce week-end, ou bien si vous utilisez l'application de messagerie Telegram, vous êtes peut-être tombé samedi (13 mai 2023) sur la page d'erreur suivante en tentant de lire une page que l'on vous avait envoyée :  Que s'est-il passé ? Cet article du Mo..."
author: "Pierre"
image: "https://signal.eu.org/blog/wp-content/uploads/2023/05/image-1-820x1024.png"
guid: "https://signal.eu.org/blog/?p=2527"
categories:
  - "fr"
  - "Geek stuff"
  - "vie privée"
draft: false
---

Tweet

Si vous avez suivi l'actualité Internet de ce week-end, ou bien si vous utilisez l'application de messagerie Telegram, vous êtes peut-être tombé samedi (13 mai 2023) sur la page d'erreur suivante en tentant de lire une page que l'on vous avait envoyée :

Que s'est-il passé ? Cet article du Monde revient sur l'incident ; cet article chez Stéphane Bortzmeyer de l'AFNIC explique les éléments techniques ; ce fil de Cécile d'AtaxyaNetwork sur Twitter est une rapide introduction aux notions de base du DNS. Ajout du 15 mai 2023 : article chez Nextinpact.

La liste de blocage DNS française

Ce système a été instauré en 2014 par Bernard Cazeneuve (cet article parle également des premières bavures en surblocage) pendant le mandat Hollande (avant de voter ce procédé, le PS l'avait lui-même combattu lorsqu'il était proposé lors du mandat Sarkozy). Il s'agissait alors, officiellement, de permettre à la police de bloquer en urgence — c'est à dire sans perdre de temps avec une procédure judiciaire, longue — les faits les plus graves : apologie du terrorisme et images de pédopornographie.

Image classique des années 90 sur les prétextes à la censure d'Internet

Les critiques n'ont pas manqué sur les dangers d'un tel procédé :

érosion des garanties démocratiques en supprimant le juge
risques de surblocage en raison du procédé utilisé
risques d'erreurs de manipulation, réduisant la résilience de l'Internet français
opacité, la liste n'étant pas publique
risques d'extension sans fin du système à de nombreux cas d'application bénins

On peut citer cet amendement, rejeté, de Laure de la Raudière et Lionel Tardy (historique plus détaillé ici et ici chez Nextinpact), qui tentait de limiter les dégâts :

Et également cet avis de la CNIL, cité par Alexandre Archambault.

La plupart de ces craintes, balayées à l'époque du revers de la main par le ministre et le législateur, se sont aujourd'hui concrétisées.

Le blocage DNS, comment ça marche ?

L'adresse d'un site web, par exemple https://signal.eu.org/blog/, est appelée une URL. Pour diverses raisons, l'une étant le secret des correspondances au sens du Code des postes et des communications électroniques, une autre étant le déploiement massif du chiffrement suite à l'affaire Snowden pour protéger les utilisateurs contre la surveillance de masse, il n'est possible ni juridiquement ni techniquement de bloquer par le réseau un morceau de site web.

Un autre procédé a donc été mis en place par l'État : bloquer le nom de domaine qui sert à indiquer le serveur de l'URL, ici signal.eu.org.

Pour cela, ses services distribuent à quelques fournisseurs d'accès triés sur le volet une liste secrète des blocages à effectuer au niveau de leurs propres serveurs de noms (serveurs DNS), ceux dont la plupart de leurs clients se servent pour accéder au web ou au courriel.

Cette liste fait donc de ces serveurs des "DNS menteurs", car ils peuvent donner une information exigée par une administration au lieu de l'information correcte.

Le blocage d'un site bloque le site complet. Il est impossible de bloquer une page seule ou un ensemble de pages. L'administration peut décider de bloquer, à sa convenance, un site complet même si celui-ci ne contient qu'une seule page tombant sous le coup de la loi. Cela pose un premier problème d'appréciation subjective de proportionnalité.

Comment est mis en œuvre le blocage DNS en France par l'État

L'opacité règne, malheureusement, sur les détails de procédure, mais on peut dire sans risque d'erreur que :

l'administration édicte une ou plusieurs listes de blocage, suivant les mandats qui lui sont confiés par le législateur
les fournisseurs dûment choisis par la puissance publique récupèrent périodiquement (au moins plusieurs fois par jour, voire en continu) et appliquent ces listes pour bloquer les domaines concernés

En mai 2023, les administrations en mesure d'édicter des blocages DNS sans juge sont, sauf erreur ou oubli :

l'OCLCTIC (office central de lutte contre la criminalité liée aux technologies de l'information et de la communication), qui édite la page d'avertissement en début de cet article. 2 autres pages d'avertissement sont : une page sur le blocage de sites faisant l'apologie du terrorisme, une page générique sur les sites illégaux. Cette liste est soumise légalement à un contrôle par la CNIL, et bientôt l'ARCOM à sa place, mais ce contrôle semble s'effectuer a posteriori, après blocage. Ce contrôle n'évite donc pas les bavures. [Mise à jour 19 mai 2023 : les rapports d'activité 2019 2020 2021 de la personnalité qualifiée de la CNIL avant transfert à l'Arcom, rapport 2022 après transfert]

Schéma de procédure extrait du rapport 2021 de la personnalité qualifiée CNIL

l'ANJ (autorité nationale des jeux), qui jusqu'en mars 2022 devait passer par le juge, mais cette protection a été supprimée. Désormais, l'ANJ peut de son propre chef faire ajouter un site aux blocages DNS nationaux. La liste ANJ est publique et disponible ici sous forme de fichier CSV, ce qui permet d'avoir une idée de son contenu. On peut l'imaginer proche de celui du fichier OCLCTIC, pour simplifier la vie des fournisseurs devant l'appliquer. À ce jour, elle contient 725 noms.

La page de blocage de l'ANJ

Techniquement, le fonctionnement du blocage est en partie laissé à l'appréciation des fournisseurs, mais les sites bloqués par l'OCLCTIC doivent renvoyer vers les pages explicatives de l'OCLCTIC. Au passage, ces pages incluent des trackers (gardant donc une trace du passage de l'utilisateur), ce qui pose des problèmes de respect du RGPD. Par ailleurs, la généralisation du chiffrement rend ces messages d'erreur largement inopérants, mais il serait trop long de développer le sujet ici.

Un rare épisode de désaccord persistant entre l'OCLCTIC et la personnalité qualifiée de la CNIL, en raison d'appréciations très différentes sur la caractérisation d'un contenu, a eu lieu en 2018-2019 au sujet du site Indymedia, poussant cette dernière à un recours devant le tribunal administratif de Cergy-Pontoise, qui lui a donné raison (jugement complet). 3 articles de Nextinpact à l'époque reviennent en détail sur l'affaire : Blocage administratif : bras de fer entre la personnalité qualifiée de la CNIL et l’Intérieur, Blocage administratif : le ministère de l'Intérieur attaqué par le représentant de la CNIL, Blocage administratif : la personnalité qualifiée de la CNIL fait plier la police devant la justice. Assez curieusement, seules les URL (pages web) sont évoquées, or, comme expliqué ici, les blocages ne peuvent concerner que le nom de domaine en entier, qui ne semble pas avoir été mis en œuvre en réalité.

Extension du domaine de la liste

Ce procédé sans juge de blocage instantané, mis en place en 2014 sur des cas extrêmes, a été progressivement étendu malgré les promesses initiales :

à des cas bien plus bénins comme les sites de jeux
à un nombre croissant de fournisseurs d'accès, dans des conditions également opaques. La police s'est initialement attaquée aux 4 plus grands fournisseurs français fixe et mobile (Free, Orange, Bouygues, SFR) ; en 2023, de nombreux autres fournisseurs de plus petite taille sont également tenus de mettre en œuvre les blocages. Il est difficile de savoir qui et suivant quels critères ; on peut supposer qu'il s'agit d'initiatives de la police, au cas par cas. L'opacité des blocages OCLCTIC limite fortement la possibilité de disséminer largement la liste chez tous les fournisseurs d'accès : la liste serait rapidement fuitée.

Surtout, un nouveau projet de loi du gouvernement, PJLSREN (projet de loi visant à sécuriser et réguler l'espace numérique), va étendre à nouveau très sensiblement le processus sans juge :

extension aux ajouts par la DGCCRF (répression des fraudes : sites commerciaux d'arnaques)
extension aux ajouts par l'ARCOM (sites ne procédant pas à une vérification forte d'âge pour l'accès à la pornographie ; sites de propagande étrangère ; possiblement sites de piratage de streams de contenus sportifs)
extension aux services DNS ouverts (résolveurs), souvent utilisés comme moyen de contournement des mesures de blocage
extension aux éditeurs de navigateurs web, pour afficher une page d'avertissement néanmoins contournable
[Mise à jour] et potentiellement, si on en croit l'étude d'impact, d'autres administrations encore, avec un inventaire à la Prévert : l'ANSSI (agence nationale de la sécurité des systèmes d'information), l'ACPR (autorité de contrôle prudentiel et de résolution), l'AMF (autorité des marchés financiers), CyberGend (commandement de la gendarmerie dans le cyberespace), le GIP ACYMA, la mission d'appui au patrimoine immatériel de l'État (APIE), Signal Spam.

Page 95 de l'étude d'impact

L'étude d'impact du PJLSREN ne s'encombre pas d'obstacles techniques, écartant la plupart de ceux-ci d'un rapide revers de main, ce qui ne fait que renforcer le sentiment de flottement (j'en ai parlé sur Twitter ici).

On passe donc graduellement, sous l'égide du gouvernement Macron, d'un système de blocage d'urgence et limité, réservé aux cas les plus graves, à un système administratif de censure instantanée d'Internet, en masse, sans juge. Il est non seulement probable, mais certain, que les mesures ci-dessus seront resserrées et étendues au fil du temps pour criminaliser ou interdire techniquement les contournements, et l'accès élargi à d'autres administrations.

Et les bavures ?

Il est également à craindre que l'extension de l'ampleur du système provoque une multiplication des bavures comme celle concernant Telegram ce samedi, rendant Internet de moins en moins fiable. Il est donc nécessaire de demander de limiter le nombre des catégories de sites concernés, et d'obtenir de la part de l'administration une plus grande transparence sur la procédure actuelle, sur les gardes-fous qu'elle inclut, et sur ceux à y ajouter.

En 2016, le député Lionel Tardy avait posé quelques questions au ministre, hélas restées sans réponse.

Quelques autres questions légitimes à poser, à l'administration comme au législateur, sur le système actuel comme sur ses extensions :

par quelle chaîne de décision a-t-on abouti à ce que le domaine t.me soit dans la liste de blocage sans que quelqu'un détecte et élimine l'erreur ?
quel est le fonctionnement actuel du système de blocage OCLCTIC ?
quelle catégorie d'agent est ou sera habilitée à demander un blocage, sous quelle forme (URL ou nom de domaine) ?
où, comment et à quel moment intervient la CNIL — que le PJLSREN compte remplacer par l'ARCOM — ?
quelles vérifications et validations, manuelles ou automatiques, sont faites sur la demande ?
[ajout le 15 mai 2023] t.me est un usage assez particulier (raccourcisseur avec redirection), quelles dispositions de la procédure permettent ou pourraient permettre de détecter et traiter spécifiquement ce type de nom afin d'éviter un surblocage ?
quelles sont les voies de recours rapides pour les sites bloqués à tort ?
quelle est la procédure corrective actuelle en cas d'erreur de blocage à corriger en urgence ?
comment peut-on éviter de nouvelles bavures similaires à celles de t.me, dans le mesure où le procédé risque d'être substantiellement étendu si la nouvelle loi est votée ?
comment une demande de blocage d'URL est-elle convertie en demande de blocage DNS afin de la faire figurer dans la liste envoyée aux fournisseurs d'accès ; quelles précautions sont prises pour éviter un surblocage ?
quels critères subjectifs sont et seront appliqués, par exemple pour estimer si un site est, ou non, de nature pornographique ? Un site d'apologie du terrorisme ? Un site d'arnaque ?
même question pour déterminer si un site est, ou non, un site de propagande étrangère ?

Le ministre Jean-Noël Barrot a indiqué en effet être prêt à faire bloquer totalement le réseau social Twitter, qui n'est pas un site pornographique, ou d'autres réseaux sociaux qui ne vérifieraient pas l'âge des utilisateurs et n'interdiraient pas la pornographie. La loi souhaite en outre faciliter le blocage de sites d'information sous influence de gouvernements étrangers. On est là au cœur de la problématique de la liberté de communication et d'influence politique de l'État sur son application par des acteurs privés.

Est-ce un incident ponctuel et isolé ?

L'arbre du DNS ne doit pas cacher la forêt : il existe une tendance de fond de l'État et du politique, en France et au delà, à vouloir régenter, censurer et surveiller, non seulement Internet, mais l'ensemble de notre vie privée, à l'aide de nos usages grandissants de la technologie, qui présentent des coffres aux trésors très tentants.

Ainsi, en articulation directe avec le PJLSREN cité ci-dessus et qui est le sujet principal de ce billet, on peut rappeler, entre autres, la loi dite de "majorité numérique" visant à forcer l'ensemble des adultes en France à fournir une preuve d'âge pour se connecter aux réseaux sociaux. Le PJLSREN permet un blocage beaucoup plus radical et rapide des sites qui n'appliqueraient pas avec une diligence suffisante une vérification forte de l'âge des utilisateurs.

Il existe de nombreuses autres lois similaires, en France comme dans d'autres pays, cherchant à s'attaquer à la confidentialité de nos communications privées, etc.

Il ne s'agit pas simplement, comme cela est souvent prétendu, d'appliquer à Internet les mêmes interdictions que dans la vie réelle, mais d'aller beaucoup plus loin grâce à l'utilisation à notre détriment, et sous prétexte de notre sécurité, des moyens technologiques modernes.