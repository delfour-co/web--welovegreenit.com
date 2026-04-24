---
title: "Chez Microsoft, la difficile équation du mode économie d’énergie"
date: 2026-04-23T12:50:40.000Z
source: "Silicon.fr"
language: "fr"
link: "https://www.silicon.fr/green-it-1374/microsoft-economie-energie-226874"
description: "Microsoft Teams aura bientôt son « mode efficacité ».  Le déploiement de cette fonctionnalité est prévu en mai sur l&rsquo;application de bureau (Windows, Mac). Activée par défaut « sur les appareils éligibles » (liste non spécifiée), elle aura deux effets principaux. D&rsquo;une part, ajuster dynam..."
author: "Clément Bohic"
image: "https://www.silicon.fr/wp-content/uploads/2026/04/Microsoft-economie-denergie.jpg"
guid: "https://www.silicon.fr/?p=226874"
categories:
  - "Green IT"
  - "Microsoft Teams"
  - "Windows 11"
draft: false
---

Microsoft Teams aura bientôt son « mode efficacité ».

Le déploiement de cette fonctionnalité est prévu en mai sur l&rsquo;application de bureau (Windows, Mac). Activée par défaut « sur les appareils éligibles » (liste non spécifiée), elle aura deux effets principaux. D&rsquo;une part, ajuster dynamiquement la résolution vidéo. De l&rsquo;autre, ne pas afficher une discussion au lancement, mais une image statique. On pourra la désactiver dans les paramètres de l&rsquo;application.

Dans la logithèque Microsoft, Edge embarque une fonctionnalité similaire. Initialement, elle s&rsquo;appelait aussi « mode efficacité ». Elle est devenue « économiseur d&rsquo;énergie ». Son principal rôle : mettre les onglets en veille après une certaine période d&rsquo;inactivité (5 ou 30 minutes selon le mode d&rsquo;économie choisi). Microsoft prévient toutefois : elle peut « rendre les vidéos moins fluides »… et, plus globalement, entraîner des « ralentissements visibles ».

Même constat pour l&rsquo;économiseur d&rsquo;énergie intégré dans Windows 10 au printemps 2021 sous le nom de « mode Eco » et devenu « mode efficacité » avec Windows 11. La différence avec celui d&rsquo;Edge, c&rsquo;est qu&rsquo;il n&rsquo;y a pas d&rsquo;option pour le désactiver intégralement. Microsoft entend respecter ainsi les préférences des développeurs d&rsquo;applications. Il leur donne effectivement la possibilité de définir, processus par processus, si le mode en question peut s&rsquo;enclencher. Il leur faut, pour cela, signaler que ces processus peuvent s&rsquo;exécuter avec une priorité basse et qu&rsquo;ils peuvent exploiter le mode EcoQoS (niveau de qualité).

Un mode peu contrôlable, parfois au détriment des performances

Beaucoup d&rsquo;applications qui implémentent le « mode efficacité » n&rsquo;offrent pas aux utilisateurs de quoi le contrôler. Le principal moyen à disposition est le gestionnaire des tâches Windows, qui permet un réglage par application et par processus. Mais la désactivation s&rsquo;avère souvent temporaire : le mode d&rsquo;économie d&rsquo;énergie a tendance à se réenclencher automatiquement.

Une solution consiste à ajouter l&rsquo;argument –disable-features=UseEcoQoSForBackgroundProcess aux exécutables. Mais certains programmes, à l&rsquo;image de Google Chrome, ne le prennent plus en charge.

Passer par le registre pour désactiver le process throttling (« mise au ralenti » des processus) est une autre option. Mais elle manque de granularité, s&rsquo;étendant aussi aux processus système et coupant tout accès aux autres modes d&rsquo;économie d&rsquo;énergie.

L&rsquo;application Process Lasso – qui a une version gratuite – est souvent citée comme un autre palliatif. Il existe aussi un script PowerShell non officiel qui effectue des contrôles réguliers en arrière-plan.

Le « mode efficacité » de Windows a parfois des comportements imprévisibles. Illustration chez un utilisateur de Power BI qui ne parvenait pas à couper la réactivation automatique… spécifiquement sur la version issue du Microsoft Store. Des utilisateurs de Teams se sont également plaints, le « mode efficacité » étant susceptible de couper les notifications, voire les appels…

Illustration générée par IA

The post Chez Microsoft, la difficile équation du mode économie d&rsquo;énergie appeared first on Silicon.fr.