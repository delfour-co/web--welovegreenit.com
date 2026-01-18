---
title: "Data Engineer Green"
date: 2025-01-27
draft: false
---

Le Data Engineer Green conçoit et opère des pipelines de données en optimisant leur consommation de ressources. Face à l'explosion des volumes de données, ce rôle devient crucial pour maîtriser l'empreinte du data.

## En quoi ça consiste

Le Data Engineer Green applique les principes de sobriété aux architectures data : collecte, stockage, transformation, mise à disposition. L'enjeu est de répondre aux besoins analytiques et métier tout en limitant le gaspillage de ressources.

Avec le recul, je remarque que le monde de la data a longtemps fonctionné sur le principe "on stocke tout, on verra plus tard". Le Data Engineer Green remet en question cette approche.

## Un cadre possible

Le Data Engineer Green intervient à plusieurs niveaux :

- **Collecte** : questionner la nécessité de chaque donnée collectée, définir des durées de rétention
- **Stockage** : choisir les formats et tiers adaptés (hot/warm/cold), compresser, dédupliquer
- **Transformation** : optimiser les jobs pour réduire le compute, éviter les retraitements inutiles
- **Mise à disposition** : cacher les résultats, pré-agréger quand c'est pertinent
- **Gouvernance** : documenter le cycle de vie des données, automatiser les purges

## Pratiques concrètes

- **Formats colonnaires** : Parquet, ORC plutôt que CSV ou JSON
- **Partitionnement intelligent** : faciliter les requêtes ciblées
- **Traitement incrémental** : éviter de tout recalculer à chaque run
- **Sampling** : travailler sur des échantillons en dev/test
- **Tiering** : archiver les données froides, supprimer les obsolètes

## Compétences clés

- Maîtrise des outils data (Spark, dbt, Airflow, etc.)
- Connaissance des architectures data modernes (lakehouse, data mesh)
- Optimisation SQL et des jobs de transformation
- Compréhension des coûts cloud data (storage, compute, egress)
- Culture de la mesure et du monitoring

## Métriques à suivre

- Volume de données stockées (et évolution)
- Coût par pipeline / par requête
- Taux de données non accédées (dark data)
- Consommation compute des jobs
- Temps de rétention effectif vs politique

## Perspectives

Le Data Engineer Green répond à une double pression : l'explosion des volumes de données et les contraintes environnementales/budgétaires. Ces compétences sont de plus en plus recherchées.

À toi de voir comment intégrer la sobriété dans ta pratique de data engineering.
