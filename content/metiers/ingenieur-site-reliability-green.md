---
title: "Ingénieur SRE Green (Site Reliability Engineer)"
date: 2025-01-27
draft: false
---

L'ingénieur SRE Green assure la fiabilité et la disponibilité des services tout en optimisant leur consommation de ressources. C'est l'alliance de la résilience et de la sobriété.

## En quoi ça consiste

Le SRE classique se concentre sur la disponibilité, la performance et l'automatisation. Le SRE Green ajoute une dimension : l'efficacité énergétique et carbone. L'objectif est de maintenir les SLOs (Service Level Objectives) avec le minimum de ressources.

Avec le recul, je remarque que les principes SRE (éliminer le toil, automatiser, mesurer) s'appliquent naturellement à l'optimisation environnementale.

## Un cadre possible

L'ingénieur SRE Green travaille sur plusieurs axes :

- **Capacity planning sobre** : dimensionner au juste besoin, prévoir sans surallouer
- **Autoscaling intelligent** : adapter les ressources à la charge réelle, scale to zero
- **Observabilité énergétique** : métriques de consommation, alertes sur les dérives
- **Optimisation continue** : identifier et éliminer les gaspillages
- **Incident response** : intégrer l'impact environnemental dans les post-mortems

## Pratiques concrètes

- **Right-sizing automatisé** : ajuster les ressources selon l'utilisation réelle
- **Spot/Preemptible** : utiliser la capacité excédentaire pour les workloads tolérants
- **Multi-région intelligente** : router vers les régions à faible intensité carbone
- **Caching agressif** : réduire le compute en cachant les résultats
- **Cleanup automatique** : supprimer les ressources orphelines

## Compétences clés

- Maîtrise des pratiques SRE classiques
- Connaissance des métriques de consommation cloud
- Automatisation et scripting avancé
- Monitoring et alerting
- Analyse de performance et optimisation

## Outils typiques

- **Monitoring** : Prometheus, Grafana avec métriques carbone
- **Mesure** : Kepler, Cloud Carbon Footprint, outils natifs cloud
- **Optimisation** : Karpenter, Spot controllers, autoscalers custom
- **Automatisation** : Terraform, Pulumi, scripts de cleanup

## Perspectives

Le SRE Green répond à la double pression des coûts cloud et des objectifs environnementaux. Ces compétences sont de plus en plus recherchées dans les organisations cloud-native.

À toi de voir comment intégrer cette dimension dans ta pratique de SRE ou d'ops.
