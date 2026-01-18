---
title: "Guide Complet : Sobriété des Données"
date: 2025-01-27
draft: false
weight: 4
description: "Le manuel de référence pour une gestion responsable des données : de la collecte minimale à la suppression active, en passant par la gouvernance et la conformité RGPD."
---

Les données sont le carburant de l'économie numérique, mais leur accumulation incontrôlée représente un défi environnemental majeur. Les data centers mondiaux consomment plus de 400 TWh d'électricité par an, et le stockage en représente une part croissante. Ce guide complet vous accompagne dans la mise en place d'une gestion sobre et responsable des données.

**Temps de lecture estimé : 45 minutes**

---

## 1. Le problème des données

### 1.1 L'explosion volumétrique

#### Croissance exponentielle

Le volume de données mondial connaît une croissance sans précédent.

**Évolution du datasphere mondial :**
| Année | Volume total | Croissance annuelle |
|-------|-------------|---------------------|
| 2010 | 2 ZB | - |
| 2015 | 15 ZB | +50%/an |
| 2020 | 64 ZB | +25%/an |
| 2024 | 147 ZB | +23%/an |
| 2028 (proj.) | 394 ZB | +28%/an |

*1 ZB (Zettabyte) = 1 milliard de Terabytes = 1 000 milliards de Gigabytes*

#### Sources de cette croissance

**Données générées par les utilisateurs :**
- Photos et vidéos (smartphones, réseaux sociaux)
- Communications (emails, messageries)
- Documents collaboratifs
- Réseaux sociaux

**Données machine-to-machine :**
- IoT et capteurs (milliards d'objets connectés)
- Logs et métriques applicatives
- Télémétrie et monitoring
- Données de géolocalisation

**Données d'entreprise :**
- Transactions et événements business
- Analytics et tracking
- Backups et réplications
- Archives réglementaires

**Intelligence artificielle :**
- Datasets d'entraînement
- Modèles et poids (LLM : dizaines de Go par modèle)
- Données de fine-tuning
- Outputs et historiques

### 1.2 Le coût environnemental du stockage

#### Impact énergétique

Contrairement à l'intuition, le stockage consomme de l'énergie en permanence, pas seulement lors des accès.

**Consommation par type de stockage :**
| Type | Puissance par To | Consommation annuelle |
|------|-----------------|----------------------|
| HDD data center | 4-8 W | 35-70 kWh |
| SSD data center | 1-3 W | 9-26 kWh |
| Object storage (cloud) | 0.5-2 W* | 4-18 kWh |
| Tape (archive) | ~0 W (hors accès) | <1 kWh |

*Inclut l'overhead d'infrastructure

**Empreinte carbone du stockage :**
```
Empreinte = Volume × Durée × (Consommation + Overhead PUE) × Facteur carbone

Exemple :
- 100 To stockés pendant 1 an
- Cloud (région France, 60 gCO2e/kWh)
- PUE moyen de 1.3
- Consommation : 1 W/To

Empreinte = 100 × 8760h × 1W × 1.3 × 60 / 1000000
         = 68.3 kgCO2e/an

Soit ~0.7 kgCO2e/To/an pour du cloud en France
(5-20 kgCO2e/To/an dans des régions plus carbonées)
```

#### Impact matériel

**Empreinte de fabrication des disques :**
| Type | Empreinte fabrication | Durée de vie | Amortissement |
|------|----------------------|--------------|---------------|
| HDD 10 To | 50-80 kgCO2e | 4-6 ans | 10-20 kgCO2e/an |
| SSD 4 To | 80-120 kgCO2e | 5-7 ans | 15-25 kgCO2e/an |

**Ressources nécessaires :**
- Terres rares pour les composants électroniques
- Métaux précieux pour les connecteurs
- Plastiques et aluminium pour les boîtiers
- Énergie considérable pour la fabrication

#### Impact réseau

Les données ne restent pas statiques. Elles sont :
- Répliquées (redondance, haute disponibilité)
- Sauvegardées (backups locaux et distants)
- Synchronisées (multi-sites, edge)
- Transférées (accès utilisateurs, APIs)

**Multiplication des copies :**
```
Donnée originale : 1 To

Après infrastructure standard :
├─ Copie locale (RAID) : ×1.5 à ×3
├─ Backup quotidien (7 jours) : ×7
├─ Backup mensuel (12 mois) : ×12
├─ Réplication multi-région : ×2-3
└─ Snapshots et versions : ×1.5-3

Volume réel : 10 à 50 To pour 1 To "utile"
```

### 1.3 Le dark data

#### Définition

Le "dark data" désigne les données collectées, traitées et stockées mais jamais utilisées ni analysées.

**Études Gartner et Veritas :**
- 50-80% des données d'entreprise sont du dark data
- 33% des données n'ont jamais été accédées depuis leur création
- Moins de 10% des données stockées sont activement utilisées

#### Types de dark data

**Données oubliées :**
- Anciens projets jamais archivés ou supprimés
- Comptes d'employés partis non nettoyés
- Données de tests et développement en production
- Exports et rapports ponctuels jamais supprimés

**Données dupliquées :**
- Versions multiples du même fichier
- Copies locales de documents partagés
- Emails transférés avec pièces jointes répétées
- Backups redondants

**Données ROT (Redundant, Obsolete, Trivial) :**
- **Redundant** : doublons et copies inutiles
- **Obsolete** : données périmées sans valeur
- **Trivial** : données sans importance business

**Logs et données techniques :**
- Logs de debug jamais analysés
- Métriques à grain fin non exploitées
- Historiques de requêtes
- Données de télémétrie brutes

#### Coût du dark data

```
Calcul du coût du dark data :

Hypothèses entreprise moyenne :
- Stockage total : 500 To
- Dark data : 60% = 300 To
- Coût stockage cloud : 20€/To/mois

Coût annuel du dark data :
300 To × 20€ × 12 mois = 72 000€/an

Empreinte carbone (cloud France) :
300 To × 0.7 kgCO2e = 210 kgCO2e/an

Pour une grande entreprise (50 Po de données) :
30 Po de dark data × 20€ × 12 = 7.2 M€/an
```

### 1.4 Réglementation et contraintes

#### RGPD - Principe de minimisation

L'article 5 du RGPD impose :
- **Minimisation** : collecter uniquement les données adéquates, pertinentes et limitées
- **Limitation de conservation** : durées définies et respectées
- **Exactitude** : données à jour, inexactes effacées

#### Droit à l'effacement (article 17)

Les personnes concernées peuvent demander l'effacement :
- Données plus nécessaires aux finalités
- Consentement retiré
- Opposition au traitement
- Traitement illicite

#### Obligations sectorielles

| Secteur | Réglementation | Durées typiques |
|---------|---------------|-----------------|
| Finance | Bâle III, MiFID II | 5-10 ans |
| Santé | RGPD santé, HDS | Variable, jusqu'à 20 ans |
| Commerce | Code de commerce | 10 ans (factures) |
| RH | Code du travail | 5 ans après départ |
| Secteur public | Archives publiques | 5-100 ans selon nature |

---

## 2. Principes de sobriété

### 2.1 Le paradigme de la sobriété

#### Inverser la logique par défaut

**Approche traditionnelle :**
```
Collecter tout → Stocker indéfiniment → Peut-être utiliser un jour
```

**Approche sobre :**
```
Définir le besoin → Collecter le minimum → Durée de vie explicite → Suppression automatique
```

#### Les quatre questions fondamentales

Avant toute collecte ou conservation, se poser :

1. **Pourquoi ?** Quelle est la finalité précise de cette donnée ?
2. **Combien ?** Quelle quantité est réellement nécessaire ?
3. **Combien de temps ?** Quelle durée de conservation justifiée ?
4. **Qui ?** Qui est responsable de sa gestion et suppression ?

### 2.2 Collecte minimale

#### Principe "Privacy by Design"

Intégrer la minimisation dès la conception :
- Identifier les données strictement nécessaires
- Documenter la justification de chaque champ
- Prévoir la durée de vie dès la collecte
- Designer pour la suppression

#### Exemples de minimisation

**Formulaires web :**
```
❌ Formulaire maximaliste :
- Nom, Prénom, Email, Téléphone, Adresse complète
- Date de naissance, Sexe, Situation familiale
- Profession, Entreprise, Revenus
- "Comment nous avez-vous connu ?"
- Centres d'intérêt (checkboxes multiples)

✅ Formulaire sobre :
- Email (obligatoire, pour contact)
- Prénom (optionnel, pour personnalisation)
- Message (essentiel)
```

**Analytics :**
```
❌ Tracking maximaliste :
- User ID permanent
- Toutes les pages vues
- Temps passé par pixel
- Mouvements de souris
- Device fingerprint complet

✅ Analytics sobre :
- Pages vues agrégées (pas de user ID)
- Métriques essentielles uniquement
- Agrégation immédiate (pas de données brutes)
- Anonymisation ou pseudonymisation
```

**Logs applicatifs :**
```
❌ Logging excessif :
log.debug(f"User {user_id} requested {full_request_body}")
log.debug(f"Response: {full_response_body}")
log.debug(f"Processing time for each step: {detailed_timings}")

✅ Logging sobre :
log.info(f"Request: {request_id} {method} {path} -> {status_code} {duration_ms}ms")
# Détails uniquement si erreur
if status_code >= 400:
    log.error(f"Error details: {error_type} - {error_message}")
```

### 2.3 Durées de rétention explicites

#### Matrice de rétention type

| Catégorie | Type de données | Durée | Justification |
|-----------|----------------|-------|---------------|
| **Opérationnel** | Sessions utilisateur | 24h-7j | Sécurité, debug |
| | Cache applicatif | Minutes-heures | Performance |
| | Files d'attente | Jusqu'à traitement | Workflow |
| **Technique** | Logs applicatifs (info) | 30-90 jours | Debug, monitoring |
| | Logs sécurité | 1-2 ans | Conformité, audit |
| | Métriques agrégées | 2-5 ans | Tendances |
| | Métriques détaillées | 7-30 jours | Investigation |
| **Business** | Transactions | 10 ans | Légal (commerce) |
| | Contrats | Durée + 5-10 ans | Prescription |
| | Factures | 10 ans | Code commerce |
| **Personnel** | Données employés | Durée contrat + 5 ans | Obligations légales |
| | Données candidats non retenus | 2 ans max | RGPD + recrutement |
| | Données clients | Durée relation + 3 ans | Prescription commerciale |
| **Archives** | Documents historiques | Définitif (selon valeur) | Mémoire d'entreprise |
| | Projets terminés | 3-10 ans | Référence, litiges |

#### Implémentation technique

**Configuration TTL (Time To Live) :**

```yaml
# Redis - TTL automatique
SET session:user123 "data" EX 86400  # Expire en 24h

# Elasticsearch - Index lifecycle
PUT _ilm/policy/logs_policy
{
  "policy": {
    "phases": {
      "hot": {
        "actions": {
          "rollover": {
            "max_age": "7d",
            "max_size": "50gb"
          }
        }
      },
      "warm": {
        "min_age": "7d",
        "actions": {
          "shrink": { "number_of_shards": 1 }
        }
      },
      "cold": {
        "min_age": "30d",
        "actions": {
          "freeze": {}
        }
      },
      "delete": {
        "min_age": "90d",
        "actions": {
          "delete": {}
        }
      }
    }
  }
}
```

```sql
-- PostgreSQL - Partitionnement avec rétention
CREATE TABLE events (
    id BIGSERIAL,
    created_at TIMESTAMP NOT NULL,
    data JSONB
) PARTITION BY RANGE (created_at);

-- Créer des partitions mensuelles
CREATE TABLE events_2024_01 PARTITION OF events
    FOR VALUES FROM ('2024-01-01') TO ('2024-02-01');

-- Script de purge des anciennes partitions
DO $$
DECLARE
    partition_name TEXT;
    cutoff_date DATE := CURRENT_DATE - INTERVAL '90 days';
BEGIN
    FOR partition_name IN
        SELECT tablename FROM pg_tables
        WHERE tablename LIKE 'events_%'
        AND substring(tablename from 'events_(\d{4}_\d{2})')::DATE < cutoff_date
    LOOP
        EXECUTE format('DROP TABLE %I', partition_name);
        RAISE NOTICE 'Dropped partition: %', partition_name;
    END LOOP;
END $$;
```

### 2.4 Suppression active

#### Automatisation des purges

**Principes :**
- La suppression doit être automatique, pas manuelle
- Jobs de purge planifiés et monitorés
- Logs de suppression pour audit
- Alertes si les purges échouent

**Exemple de job de purge :**
```python
# Job de purge quotidien
import logging
from datetime import datetime, timedelta
from apscheduler.schedulers.blocking import BlockingScheduler

logger = logging.getLogger(__name__)

def purge_old_sessions():
    """Supprime les sessions de plus de 7 jours"""
    cutoff = datetime.utcnow() - timedelta(days=7)
    deleted = db.sessions.delete_many({"last_activity": {"$lt": cutoff}})
    logger.info(f"Purged {deleted.deleted_count} old sessions")
    metrics.record("sessions_purged", deleted.deleted_count)

def purge_old_logs():
    """Archive et supprime les logs de plus de 90 jours"""
    cutoff = datetime.utcnow() - timedelta(days=90)

    # Archiver d'abord
    logs_to_archive = db.logs.find({"timestamp": {"$lt": cutoff}})
    archive_to_cold_storage(logs_to_archive)

    # Puis supprimer
    deleted = db.logs.delete_many({"timestamp": {"$lt": cutoff}})
    logger.info(f"Purged {deleted.deleted_count} old logs")

def purge_orphaned_files():
    """Supprime les fichiers non référencés"""
    referenced_ids = set(db.documents.distinct("file_id"))
    all_files = storage.list_files("uploads/")

    orphans = [f for f in all_files if f.id not in referenced_ids]
    for orphan in orphans:
        storage.delete(orphan)

    logger.info(f"Purged {len(orphans)} orphaned files")

scheduler = BlockingScheduler()
scheduler.add_job(purge_old_sessions, 'cron', hour=2)
scheduler.add_job(purge_old_logs, 'cron', hour=3)
scheduler.add_job(purge_orphaned_files, 'cron', day_of_week='sun', hour=4)
scheduler.start()
```

#### Nettoyage assisté utilisateur

**Interface de gestion du stockage :**
```
┌─────────────────────────────────────────────────────────────┐
│           Mon espace de stockage - 45 Go utilisés           │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Répartition :                                              │
│  ████████████████████░░░░░░░░░░ Documents : 23 Go          │
│  ██████████░░░░░░░░░░░░░░░░░░░░ Emails : 12 Go             │
│  ██████░░░░░░░░░░░░░░░░░░░░░░░░ Photos : 7 Go              │
│  ███░░░░░░░░░░░░░░░░░░░░░░░░░░░ Autres : 3 Go              │
│                                                             │
│  ⚠️ Suggestions de nettoyage :                              │
│  ┌─────────────────────────────────────────────────────────┐│
│  │ 📁 Fichiers volumineux non ouverts depuis 1 an          ││
│  │    12 fichiers - 8.5 Go                    [Voir]       ││
│  ├─────────────────────────────────────────────────────────┤│
│  │ 📧 Emails avec pièces jointes > 5 Mo                    ││
│  │    234 emails - 4.2 Go                     [Voir]       ││
│  ├─────────────────────────────────────────────────────────┤│
│  │ 📋 Doublons détectés                                    ││
│  │    45 fichiers - 2.1 Go                    [Voir]       ││
│  └─────────────────────────────────────────────────────────┘│
│                                                             │
│  Économie potentielle : 14.8 Go                             │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 2.5 Éviter les doublons

#### Sources de duplication

**Comportements utilisateurs :**
- Copier un fichier partagé en local "au cas où"
- Créer des versions manuelles ("rapport_v2_final_vraifinal.docx")
- Garder les pièces jointes des emails + les stocker ailleurs

**Architecture système :**
- Synchronisation multi-devices sans déduplication
- Backups incrémentaux mal configurés
- Réplication excessive pour la "sécurité"

#### Stratégies de déduplication

**Niveau utilisateur :**
```
Politique de nommage :
├─ Un seul emplacement de référence par document
├─ Liens plutôt que copies
├─ Versioning automatique (pas de _v2, _final)
└─ Nettoyage régulier des espaces personnels
```

**Niveau système :**
```python
# Déduplication par hash au stockage
import hashlib

def store_file(content, filename):
    # Calculer le hash du contenu
    file_hash = hashlib.sha256(content).hexdigest()

    # Vérifier si le contenu existe déjà
    existing = storage.get_by_hash(file_hash)
    if existing:
        # Créer seulement une référence
        return create_reference(filename, existing.id)

    # Sinon, stocker le nouveau contenu
    return storage.store(content, file_hash, filename)
```

**Niveau infrastructure :**
- Déduplication au niveau stockage (NetApp, ZFS, etc.)
- Content-addressable storage
- Single-instance storage pour les emails

---

## 3. Gouvernance des données

### 3.1 Cartographie et inventaire

#### Pourquoi cartographier ?

Impossible de gérer ce qu'on ne connaît pas. La cartographie permet de :
- Identifier les volumes et leur répartition
- Repérer le dark data et les doublons
- Définir les responsabilités
- Prioriser les actions de nettoyage

#### Méthodologie de cartographie

**Étape 1 : Inventaire des systèmes de stockage**
```
Inventaire technique :
├─ Bases de données
│   ├─ PostgreSQL production : 2.3 To
│   ├─ MongoDB analytics : 5.1 To
│   └─ Redis cache : 50 Go
├─ Stockage fichiers
│   ├─ S3 documents : 12 To
│   ├─ NAS interne : 8 To
│   └─ OneDrive utilisateurs : 15 To
├─ Emails
│   └─ Exchange Online : 4 To
├─ Applications SaaS
│   ├─ Salesforce : 500 Go
│   └─ Slack : 200 Go
└─ Backups
    ├─ Veeam : 45 To
    └─ AWS S3 Glacier : 30 To

TOTAL : ~120 To
```

**Étape 2 : Classification des données**
```yaml
# Schéma de classification
categories:
  - name: "Données personnelles"
    sensitivity: high
    retention: "Durée relation + 3 ans"
    examples:
      - "Données clients CRM"
      - "Données employés RH"

  - name: "Données business"
    sensitivity: medium
    retention: "10 ans (légal)"
    examples:
      - "Factures et contrats"
      - "Transactions"

  - name: "Données techniques"
    sensitivity: low
    retention: "30-90 jours"
    examples:
      - "Logs applicatifs"
      - "Métriques"

  - name: "Données projet"
    sensitivity: medium
    retention: "Durée projet + 3 ans"
    examples:
      - "Documents de travail"
      - "Livrables"
```

**Étape 3 : Analyse d'usage**
```sql
-- Analyse d'accès aux fichiers (exemple)
SELECT
    date_trunc('month', last_accessed) as month,
    count(*) as file_count,
    sum(size_bytes) / 1024 / 1024 / 1024 as size_gb
FROM files
GROUP BY 1
ORDER BY 1;

-- Résultat exemple :
-- month      | file_count | size_gb
-- -----------+------------+---------
-- 2024-12    | 15,234     | 45.2    (accès récent)
-- 2024-06    | 8,432      | 23.1    (6 mois)
-- 2023-12    | 12,876     | 67.3    (>1 an = dark data potentiel)
-- Jamais     | 34,521     | 89.4    (dark data certain)
```

### 3.2 Politiques de rétention

#### Structure d'une politique

```markdown
# Politique de rétention des données

## 1. Objet et périmètre
Cette politique définit les durées de conservation des données
de [Entreprise] et les procédures de suppression associées.

## 2. Principes généraux
- Toute donnée collectée doit avoir une durée de vie définie
- La suppression est automatique sauf exception documentée
- Les dérogations requièrent une validation Data Owner + DPO

## 3. Durées de rétention par catégorie

### 3.1 Données clients
| Sous-catégorie | Durée | Base légale |
|----------------|-------|-------------|
| Données de contact | Relation + 3 ans | Prescription commerciale |
| Historique achats | 10 ans | Code commerce |
| Données de navigation | 13 mois | CNIL |

### 3.2 Données employés
| Sous-catégorie | Durée | Base légale |
|----------------|-------|-------------|
| Dossier personnel | Départ + 5 ans | Prescription sociale |
| Bulletins de paie | Départ + 5 ans | Code du travail |
| Documents médicaux | Départ + 40 ans | Code de la santé |

### 3.3 Données techniques
| Sous-catégorie | Durée | Justification |
|----------------|-------|---------------|
| Logs applicatifs | 90 jours | Debug et investigation |
| Logs sécurité | 2 ans | Conformité ISO 27001 |
| Métriques | 2 ans agrégées, 30j détaillées | Capacity planning |

## 4. Procédures de suppression

### 4.1 Suppression automatique
- Jobs de purge quotidiens pour les données techniques
- Archivage puis suppression pour les données business
- Vérification et audit mensuel des processus

### 4.2 Suppression sur demande
- Traitement des demandes RGPD sous 30 jours
- Validation par le Data Owner avant exécution
- Certificat de suppression fourni

## 5. Exceptions et dérogations
Les dérogations doivent être :
- Documentées avec justification
- Limitées dans le temps
- Validées par Data Owner et DPO
- Révisées annuellement

## 6. Responsabilités
- **Data Owners** : définition des durées métier
- **IT** : implémentation technique des purges
- **DPO** : validation conformité RGPD
- **Audit** : contrôle annuel

## 7. Révision
Cette politique est révisée annuellement ou lors de tout
changement réglementaire significatif.
```

### 3.3 Rôles et responsabilités

#### RACI des données

| Activité | Data Owner | IT | DPO | Utilisateur |
|----------|-----------|----|----|-------------|
| Définir les durées de rétention | A/R | C | C | I |
| Implémenter les purges | C | R | I | - |
| Valider les exceptions | A | I | C | R |
| Nettoyer les espaces personnels | I | C | - | R |
| Répondre aux demandes d'effacement | C | R | A | - |
| Auditer la conformité | I | C | A/R | - |

*R: Responsible, A: Accountable, C: Consulted, I: Informed*

#### Profils de Data Owners

**Par domaine métier :**
- **DRH** : données employés, candidats
- **Direction commerciale** : données clients, prospects
- **Direction financière** : données comptables, factures
- **DSI** : données techniques, logs, métriques

**Responsabilités du Data Owner :**
1. Définir les finalités et usages légitimes
2. Valider les durées de rétention
3. Approuver les accès et partages
4. Décider des suppressions exceptionnelles
5. Répondre aux demandes d'accès/rectification

### 3.4 Processus de revue

#### Revue périodique

**Revue mensuelle (automatisée) :**
```
Rapport automatique mensuel :
├─ Volume total et évolution (+/-%)
├─ Alertes de dépassement de quotas
├─ Purges effectuées (succès/échecs)
├─ Données approchant fin de rétention
└─ Anomalies détectées
```

**Revue trimestrielle (Data Owner) :**
- Analyse du dark data identifié
- Validation des suppressions manuelles
- Révision des exceptions en cours
- Priorisation des actions de nettoyage

**Revue annuelle (Comité) :**
- Bilan volumétrique et tendances
- Révision de la politique de rétention
- Mise à jour des durées légales
- Objectifs de réduction pour l'année

---

## 4. Données personnelles et RGPD

### 4.1 Principes de minimisation

#### Article 5.1.c du RGPD

> "Les données à caractère personnel doivent être adéquates, pertinentes et limitées à ce qui est nécessaire au regard des finalités pour lesquelles elles sont traitées (minimisation des données)."

#### Application pratique

**Test de nécessité pour chaque donnée :**
```
Pour chaque champ collecté, répondre à :

1. Cette donnée est-elle NÉCESSAIRE pour la finalité déclarée ?
   (pas "utile" ou "pratique" - NÉCESSAIRE)

2. Existe-t-il un moyen d'atteindre l'objectif avec MOINS de données ?
   (agrégation, pseudonymisation, échantillonnage)

3. La granularité est-elle JUSTIFIÉE ?
   (date de naissance complète vs tranche d'âge)

Si la réponse est "non" à 1 ou "oui" à 2-3 → ne pas collecter
```

**Exemples d'excès courants :**

| Finalité | Données excessives | Données suffisantes |
|----------|-------------------|---------------------|
| Newsletter | Nom, prénom, email, téléphone, adresse | Email |
| Devis | Date naissance, CSP, revenus | Email, besoin exprimé |
| Satisfaction | Nom, email, historique complet | Notation anonyme |
| Analytics | User ID, parcours détaillé | Pages vues agrégées |

### 4.2 Durées légales de conservation

#### Référentiel CNIL

| Finalité | Durée maximale | Source |
|----------|---------------|--------|
| Prospection commerciale | 3 ans après dernier contact | CNIL |
| Données de navigation web | 13 mois | CNIL (cookies) |
| Vidéosurveillance | 1 mois | Code de la sécurité |
| Données de connexion (FAI) | 1 an | LCEN |
| Données RH (contrat actif) | Durée du contrat | CNIL |
| Données RH (après départ) | 5 ans | Prescription sociale |
| Données de santé | 20 ans min | Code de la santé |
| Contentieux | Jusqu'à épuisement voies de recours | - |

#### Points de départ des durées

Attention au calcul du point de départ :
- **Dernière interaction** : pour la prospection
- **Fin de la relation** : pour les clients
- **Départ de l'entreprise** : pour les salariés
- **Fin du litige** : pour les données contentieuses

### 4.3 Droits des personnes

#### Droit à l'effacement (article 17)

**Conditions d'application :**
- Données plus nécessaires aux finalités
- Retrait du consentement
- Opposition au traitement
- Traitement illicite
- Obligation légale d'effacement

**Exceptions (l'effacement peut être refusé si) :**
- Liberté d'expression et d'information
- Obligation légale de conservation
- Motifs d'intérêt public (santé, archives)
- Constatation, exercice ou défense de droits en justice

**Procédure type :**
```
Réception demande (J)
    ↓
Vérification identité (J à J+3)
    ↓
Analyse du périmètre (J+3 à J+10)
├─ Quelles données ?
├─ Quels systèmes ?
├─ Exceptions applicables ?
    ↓
Exécution de l'effacement (J+10 à J+25)
├─ Bases de production
├─ Backups (si techniquement possible)
├─ Archives
├─ Sous-traitants
    ↓
Confirmation à la personne (J+30 max)
├─ Liste des données effacées
├─ Données conservées (avec justification)
```

### 4.4 Anonymisation et pseudonymisation

#### Différences

| Aspect | Pseudonymisation | Anonymisation |
|--------|-----------------|---------------|
| Réversibilité | Oui (avec la clé) | Non (irréversible) |
| Statut RGPD | Données personnelles | Hors scope RGPD |
| Techniques | Hashage, tokenisation, chiffrement | Agrégation, généralisation, bruit |
| Utilité | Sécurité, séparation des droits | Analytics, open data |

#### Techniques d'anonymisation

**Généralisation :**
```
Avant : Jean Dupont, 35 ans, Paris 15e
Après : H, 30-40 ans, Paris
```

**Agrégation :**
```
Avant : Achats individuels par client
Après : Moyenne des achats par tranche d'âge et région
```

**Perturbation (ajout de bruit) :**
```python
# K-anonymité par ajout de bruit
import numpy as np

def add_noise(value, epsilon=0.1):
    noise = np.random.laplace(0, 1/epsilon)
    return value + noise
```

**Suppression :**
```
Avant : {nom: "Dupont", email: "j.dupont@mail.com", age: 35}
Après : {age: 35}  # Identifiants directs supprimés
```

#### Vérification de l'anonymisation

**Critères du Groupe de travail Article 29 :**
1. **Individualisation** : impossible d'isoler un individu
2. **Corrélation** : impossible de relier des enregistrements
3. **Inférence** : impossible de déduire des informations

```python
# Test simple de k-anonymité
def check_k_anonymity(df, quasi_identifiers, k=5):
    """Vérifie que chaque combinaison apparaît au moins k fois"""
    counts = df.groupby(quasi_identifiers).size()
    return counts.min() >= k

# Usage
quasi_ids = ['age_group', 'region', 'gender']
is_k_anonymous = check_k_anonymity(anonymized_df, quasi_ids, k=5)
```

---

## 5. Données applicatives

### 5.1 Logs et monitoring

#### Niveaux de log appropriés

| Environnement | Niveau | Rétention |
|---------------|--------|-----------|
| Développement | DEBUG | Session |
| Test/QA | DEBUG | 7 jours |
| Staging | INFO | 14 jours |
| Production | WARN/ERROR + INFO sélectif | 30-90 jours |

**Configuration par environnement :**
```yaml
# logging.yaml
production:
  level: INFO
  filters:
    - exclude_debug_modules
  handlers:
    - rotating_file:
        max_size: 100MB
        backup_count: 30
    - elasticsearch:
        index_pattern: "logs-prod-{date}"
        retention_days: 90

development:
  level: DEBUG
  handlers:
    - console
    - file:
        path: /tmp/app.log
```

#### Structuration des logs

**Logs structurés (JSON) vs texte brut :**
```python
# ❌ Log non structuré
logging.info(f"User {user_id} logged in from {ip} at {timestamp}")

# ✅ Log structuré
logging.info("user_login", extra={
    "user_id": user_id,
    "ip": ip,
    "timestamp": timestamp,
    "event_type": "authentication"
})
```

**Avantages des logs structurés :**
- Analyse plus facile (requêtes, filtres)
- Compression plus efficace
- Agrégation automatisable
- Anonymisation ciblée possible

#### Réduction du volume de logs

```python
# Échantillonnage pour logs à haut volume
import random

class SampledLogger:
    def __init__(self, logger, sample_rate=0.1):
        self.logger = logger
        self.sample_rate = sample_rate

    def info(self, msg, **kwargs):
        if random.random() < self.sample_rate:
            self.logger.info(msg, **kwargs)

# Agrégation en mémoire avant écriture
from collections import defaultdict
import threading

class AggregatingLogger:
    def __init__(self, flush_interval=60):
        self.counts = defaultdict(int)
        self.lock = threading.Lock()

    def count(self, event_type):
        with self.lock:
            self.counts[event_type] += 1

    def flush(self):
        with self.lock:
            for event_type, count in self.counts.items():
                logging.info(f"{event_type}: {count} occurrences")
            self.counts.clear()
```

### 5.2 Données de session

#### Stockage sobre des sessions

**Ce qui doit être en session :**
- ID utilisateur authentifié
- Rôles/permissions (si pas trop volumineux)
- Préférences essentielles

**Ce qui NE doit PAS être en session :**
- Données métier complètes (les recharger)
- Historique de navigation complet
- Cache de données volumineuses
- Données sensibles non nécessaires

```python
# ❌ Session volumineuse
session['user'] = {
    'id': 123,
    'profile': {...},  # Données complètes
    'orders': [...],   # Historique complet
    'preferences': {...},
    'cart': [...],
    'viewed_products': [...],  # Historique navigation
}

# ✅ Session sobre
session['user_id'] = 123
session['roles'] = ['customer']
session['cart_id'] = 'cart_abc123'  # Référence, pas les données
```

#### Expiration des sessions

```python
# Configuration Flask avec expiration
app.config['PERMANENT_SESSION_LIFETIME'] = timedelta(hours=2)
app.config['SESSION_REFRESH_EACH_REQUEST'] = True

# Redis avec TTL automatique
@app.before_request
def refresh_session():
    session.modified = True  # Reset le TTL

# Nettoyage des sessions orphelines
def cleanup_orphaned_sessions():
    """Supprime les sessions sans activité depuis 24h"""
    cutoff = datetime.utcnow() - timedelta(hours=24)
    redis.delete(*redis.keys('session:*'))  # À adapter
```

### 5.3 Cache et données temporaires

#### Politique de cache

| Type de cache | TTL recommandé | Invalidation |
|---------------|----------------|--------------|
| Cache navigateur (assets) | 1 an (versionné) | Changement de version |
| Cache CDN | 1h à 1 jour | Purge manuelle ou TTL |
| Cache applicatif (Redis) | Minutes à heures | Event-driven |
| Cache base de données | Secondes à minutes | Write-through |

**Configuration Redis avec éviction :**
```
# redis.conf
maxmemory 2gb
maxmemory-policy allkeys-lru  # Supprime les moins récemment utilisés

# Ou volatile-ttl pour ne supprimer que les clés avec TTL
maxmemory-policy volatile-ttl
```

#### Nettoyage des données temporaires

```python
# Nettoyage des fichiers temporaires
import os
import time
from pathlib import Path

def cleanup_temp_files(temp_dir, max_age_hours=24):
    """Supprime les fichiers temporaires de plus de X heures"""
    cutoff = time.time() - (max_age_hours * 3600)

    for file_path in Path(temp_dir).rglob('*'):
        if file_path.is_file():
            if file_path.stat().st_mtime < cutoff:
                file_path.unlink()
                logging.info(f"Deleted temp file: {file_path}")

# Job Kubernetes pour nettoyage régulier
# cronjob.yaml
apiVersion: batch/v1
kind: CronJob
metadata:
  name: cleanup-temp-files
spec:
  schedule: "0 */6 * * *"  # Toutes les 6 heures
  jobTemplate:
    spec:
      template:
        spec:
          containers:
          - name: cleanup
            image: busybox
            command:
            - find
            - /tmp
            - -type
            - f
            - -mtime
            - "+1"
            - -delete
          restartPolicy: OnFailure
```

### 5.4 Données de test

#### Isolation des données de test

```
Environnements strictement séparés :
├─ Production : données réelles, jamais de test
├─ Staging : copie anonymisée ou données synthétiques
├─ Test : données synthétiques ou fixtures
└─ Développement : fixtures minimales

❌ JAMAIS de données de production en dev/test
❌ JAMAIS de données de test en production
```

#### Génération de données synthétiques

```python
# Génération de données réalistes mais fausses
from faker import Faker

fake = Faker('fr_FR')

def generate_test_users(n=100):
    return [
        {
            'id': i,
            'email': fake.email(),
            'name': fake.name(),
            'address': fake.address(),
            'phone': fake.phone_number(),
            'created_at': fake.date_time_this_year()
        }
        for i in range(n)
    ]

def generate_test_orders(users, n=500):
    return [
        {
            'id': i,
            'user_id': fake.random_element(users)['id'],
            'amount': fake.pydecimal(min_value=10, max_value=500, right_digits=2),
            'status': fake.random_element(['pending', 'paid', 'shipped']),
            'created_at': fake.date_time_this_year()
        }
        for i in range(n)
    ]
```

#### Nettoyage post-test

```python
# Fixture avec nettoyage automatique (pytest)
import pytest

@pytest.fixture
def test_data(db):
    """Crée des données de test et les nettoie après"""
    # Setup
    users = create_test_users(10)
    orders = create_test_orders(users, 50)

    yield {'users': users, 'orders': orders}

    # Teardown automatique
    db.orders.delete_many({'id': {'$in': [o['id'] for o in orders]}})
    db.users.delete_many({'id': {'$in': [u['id'] for u in users]}})

# CI/CD : nettoyage de l'environnement de test
# .gitlab-ci.yml
cleanup_test_env:
  stage: cleanup
  script:
    - python scripts/cleanup_test_data.py
  only:
    - schedules  # Nettoyage quotidien planifié
```

---

## 6. Bases de données

### 6.1 Optimisation du schéma

#### Normalisation vs dénormalisation

**Normalisation (3NF) :**
- Réduit les redondances
- Taille de stockage minimale
- Mais : plus de jointures, potentiellement plus lent

**Dénormalisation contrôlée :**
- Duplication ciblée pour performance
- Acceptable si les données dupliquées sont stables
- Documenté et maintenu consciemment

```sql
-- Exemple : stocker le nom du client dans la commande
-- Évite une jointure fréquente, mais duplique l'info

-- ❌ Dénormalisation excessive
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    customer_id INT,
    customer_name VARCHAR(100),      -- Dupliqué
    customer_email VARCHAR(255),     -- Dupliqué
    customer_phone VARCHAR(20),      -- Dupliqué
    customer_address TEXT,           -- Dupliqué
    -- ... et le reste de la commande
);

-- ✅ Dénormalisation raisonnable
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    customer_id INT REFERENCES customers(id),
    customer_name_snapshot VARCHAR(100), -- Seulement ce qui est utile et stable
    -- ... reste de la commande
);
```

#### Choix des types de données

| Besoin | Type inefficace | Type efficace | Économie |
|--------|----------------|---------------|----------|
| Booléen | VARCHAR(5) | BOOLEAN | 80% |
| ID interne | BIGINT | INT | 50% |
| UUID | VARCHAR(36) | UUID natif | 60% |
| Status | VARCHAR(20) | ENUM ou SMALLINT | 90% |
| Monnaie | FLOAT | DECIMAL(10,2) | Précision |
| Timestamp | VARCHAR(30) | TIMESTAMP | 75% |

```sql
-- Exemple d'optimisation
-- ❌ Avant
CREATE TABLE events (
    id VARCHAR(36),           -- UUID en texte
    event_type VARCHAR(50),   -- Texte libre
    is_processed VARCHAR(5),  -- "true"/"false"
    created_at VARCHAR(30)    -- "2024-01-15T10:30:00Z"
);

-- ✅ Après
CREATE TABLE events (
    id UUID DEFAULT gen_random_uuid(),
    event_type SMALLINT,      -- Référence vers table de types
    is_processed BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- Économie : ~70% d'espace par ligne
```

### 6.2 Archivage et partitionnement

#### Stratégie de partitionnement

**Par date (le plus courant) :**
```sql
-- PostgreSQL : table partitionnée par mois
CREATE TABLE events (
    id BIGSERIAL,
    event_type VARCHAR(50),
    payload JSONB,
    created_at TIMESTAMPTZ NOT NULL
) PARTITION BY RANGE (created_at);

-- Partitions par mois
CREATE TABLE events_2024_01 PARTITION OF events
    FOR VALUES FROM ('2024-01-01') TO ('2024-02-01');
CREATE TABLE events_2024_02 PARTITION OF events
    FOR VALUES FROM ('2024-02-01') TO ('2024-03-01');
-- etc.

-- Création automatique des partitions futures (pg_partman)
SELECT partman.create_parent(
    p_parent_table := 'public.events',
    p_control := 'created_at',
    p_type := 'native',
    p_interval := '1 month',
    p_premake := 3  -- Créer 3 mois à l'avance
);
```

**Archivage vers stockage froid :**
```python
# Script d'archivage des anciennes partitions
import subprocess
from datetime import datetime, timedelta

def archive_old_partition(table_name, partition_date):
    """Archive une partition vers S3 puis la supprime"""

    partition_name = f"{table_name}_{partition_date.strftime('%Y_%m')}"

    # Export vers fichier compressé
    export_cmd = f"""
        pg_dump -t {partition_name} --data-only --format=custom
        | gzip > /tmp/{partition_name}.dump.gz
    """
    subprocess.run(export_cmd, shell=True, check=True)

    # Upload vers S3 Glacier
    subprocess.run([
        'aws', 's3', 'cp',
        f'/tmp/{partition_name}.dump.gz',
        f's3://archives/database/{partition_name}.dump.gz',
        '--storage-class', 'DEEP_ARCHIVE'
    ], check=True)

    # Supprimer la partition
    subprocess.run([
        'psql', '-c', f'DROP TABLE {partition_name}'
    ], check=True)

# Archiver les partitions de plus de 1 an
cutoff = datetime.now() - timedelta(days=365)
archive_old_partition('events', cutoff)
```

### 6.3 Purge automatisée

#### Jobs de purge

```python
# Job de purge avec monitoring
import logging
from datetime import datetime, timedelta
from contextlib import contextmanager

logger = logging.getLogger(__name__)

class DataPurger:
    def __init__(self, db):
        self.db = db
        self.stats = {'deleted': 0, 'errors': 0}

    @contextmanager
    def track_purge(self, table_name):
        start = datetime.now()
        try:
            yield
            duration = (datetime.now() - start).total_seconds()
            logger.info(f"Purge {table_name}: {self.stats['deleted']} rows in {duration:.2f}s")
        except Exception as e:
            self.stats['errors'] += 1
            logger.error(f"Purge {table_name} failed: {e}")
            raise

    def purge_old_sessions(self, days=7):
        """Supprime les sessions de plus de X jours"""
        with self.track_purge('sessions'):
            cutoff = datetime.utcnow() - timedelta(days=days)
            result = self.db.execute(
                "DELETE FROM sessions WHERE last_activity < %s",
                [cutoff]
            )
            self.stats['deleted'] = result.rowcount

    def purge_old_logs(self, days=90):
        """Supprime les logs de plus de X jours par batch"""
        with self.track_purge('logs'):
            cutoff = datetime.utcnow() - timedelta(days=days)
            total_deleted = 0

            while True:
                # Supprimer par batch de 10000 pour éviter les locks longs
                result = self.db.execute("""
                    DELETE FROM logs
                    WHERE id IN (
                        SELECT id FROM logs
                        WHERE created_at < %s
                        LIMIT 10000
                    )
                """, [cutoff])

                total_deleted += result.rowcount
                if result.rowcount < 10000:
                    break

            self.stats['deleted'] = total_deleted

    def purge_soft_deleted(self, days=30):
        """Supprime définitivement les enregistrements soft-deleted"""
        with self.track_purge('soft_deleted'):
            cutoff = datetime.utcnow() - timedelta(days=days)

            for table in ['users', 'orders', 'documents']:
                result = self.db.execute(f"""
                    DELETE FROM {table}
                    WHERE deleted_at IS NOT NULL
                    AND deleted_at < %s
                """, [cutoff])
                self.stats['deleted'] += result.rowcount
```

#### Monitoring des purges

```yaml
# Alerting sur les purges (Prometheus)
groups:
  - name: data_purge_alerts
    rules:
      - alert: PurgeJobFailed
        expr: purge_job_last_success_timestamp < (time() - 86400)
        for: 1h
        labels:
          severity: warning
        annotations:
          summary: "Purge job hasn't run successfully in 24h"

      - alert: DataRetentionExceeded
        expr: data_age_days > data_retention_policy_days
        for: 1h
        labels:
          severity: critical
        annotations:
          summary: "Data older than retention policy exists"
```

### 6.4 Indexation efficace

#### Index utiles vs inutiles

```sql
-- Analyser l'utilisation des index
SELECT
    schemaname,
    tablename,
    indexname,
    idx_scan as times_used,
    idx_tup_read,
    idx_tup_fetch,
    pg_size_pretty(pg_relation_size(indexrelid)) as size
FROM pg_stat_user_indexes
ORDER BY idx_scan ASC;

-- Index jamais utilisés = candidats à la suppression
-- Attention : vérifier sur une période représentative (semaines/mois)
```

**Index à éviter :**
```sql
-- ❌ Index sur colonnes peu sélectives
CREATE INDEX idx_status ON orders(status);  -- Si 90% sont "completed"

-- ❌ Index dupliqués
CREATE INDEX idx_user ON orders(user_id);
CREATE INDEX idx_user_date ON orders(user_id, created_at);
-- Le second couvre déjà les requêtes du premier

-- ❌ Index sur petites tables
CREATE INDEX idx_countries ON countries(code);  -- Table de 200 lignes
```

**Index à créer :**
```sql
-- ✅ Index composites pour les requêtes fréquentes
CREATE INDEX idx_orders_user_date ON orders(user_id, created_at DESC);

-- ✅ Index partiels pour les données actives
CREATE INDEX idx_orders_pending ON orders(created_at)
WHERE status = 'pending';

-- ✅ Index couvrants pour éviter les accès table
CREATE INDEX idx_orders_summary ON orders(user_id)
INCLUDE (total_amount, status);
```

---

## 7. Stockage fichiers

### 7.1 Organisation et nommage

#### Structure de répertoires

```
storage/
├── documents/
│   ├── contracts/
│   │   ├── 2024/
│   │   │   ├── 01/
│   │   │   └── 02/
│   │   └── 2023/
│   └── invoices/
│       └── {year}/{month}/
├── media/
│   ├── images/
│   │   ├── originals/   # Conservés temporairement
│   │   ├── processed/   # Versions optimisées
│   │   └── thumbnails/  # Vignettes
│   └── videos/
├── temp/                 # Purge automatique < 24h
│   └── uploads/
└── archives/             # Stockage froid
    └── {year}/
```

#### Convention de nommage

```
Format recommandé : {type}_{id}_{version}_{date}.{ext}

Exemples :
- invoice_12345_v1_20240115.pdf
- contract_abc123_signed_20240110.pdf
- profile_user789_thumb_100x100.jpg

Avantages :
- Tri chronologique naturel
- Identification sans ouvrir
- Versioning explicite
- Unicité garantie
```

### 7.2 Déduplication

#### Déduplication par hash

```python
import hashlib
from pathlib import Path

class DeduplicatedStorage:
    def __init__(self, base_path):
        self.base_path = Path(base_path)
        self.content_path = self.base_path / 'content'
        self.refs_path = self.base_path / 'refs'

    def store(self, file_content, logical_path):
        """Stocke un fichier avec déduplication"""
        # Calculer le hash du contenu
        content_hash = hashlib.sha256(file_content).hexdigest()
        content_file = self.content_path / content_hash[:2] / content_hash

        # Stocker le contenu s'il n'existe pas
        if not content_file.exists():
            content_file.parent.mkdir(parents=True, exist_ok=True)
            content_file.write_bytes(file_content)

        # Créer une référence vers le contenu
        ref_file = self.refs_path / logical_path
        ref_file.parent.mkdir(parents=True, exist_ok=True)
        ref_file.write_text(content_hash)

        return content_hash

    def get(self, logical_path):
        """Récupère un fichier par son chemin logique"""
        ref_file = self.refs_path / logical_path
        if not ref_file.exists():
            raise FileNotFoundError(logical_path)

        content_hash = ref_file.read_text()
        content_file = self.content_path / content_hash[:2] / content_hash
        return content_file.read_bytes()

    def delete(self, logical_path):
        """Supprime une référence (pas le contenu si encore utilisé)"""
        ref_file = self.refs_path / logical_path
        if ref_file.exists():
            ref_file.unlink()

    def cleanup_orphans(self):
        """Supprime les contenus sans référence"""
        # Collecter tous les hashs référencés
        referenced = set()
        for ref_file in self.refs_path.rglob('*'):
            if ref_file.is_file():
                referenced.add(ref_file.read_text())

        # Supprimer les contenus non référencés
        deleted = 0
        for content_file in self.content_path.rglob('*'):
            if content_file.is_file():
                content_hash = content_file.name
                if content_hash not in referenced:
                    content_file.unlink()
                    deleted += 1

        return deleted
```

### 7.3 Compression

#### Compression selon le type

| Type de fichier | Déjà compressé ? | Action recommandée |
|-----------------|------------------|-------------------|
| PDF | Souvent oui | Vérifier, recompresser si possible |
| DOCX/XLSX | Oui (ZIP) | Ne pas recompresser |
| Images (JPEG) | Oui | Optimiser qualité/taille |
| Images (PNG) | Oui (lossless) | Convertir en WebP |
| Vidéos | Oui | Transcoder si nécessaire |
| Texte brut | Non | Compresser (gzip) |
| JSON/XML | Non | Compresser (gzip) |
| Archives | Oui | Ne pas recompresser |

**Script d'optimisation d'images :**
```python
from PIL import Image
from pathlib import Path

def optimize_image(input_path, output_path, max_size=(1920, 1080), quality=85):
    """Optimise une image : redimensionne et compresse"""
    img = Image.open(input_path)

    # Redimensionner si nécessaire
    if img.width > max_size[0] or img.height > max_size[1]:
        img.thumbnail(max_size, Image.LANCZOS)

    # Convertir en RGB si nécessaire (pour JPEG)
    if img.mode in ('RGBA', 'P'):
        img = img.convert('RGB')

    # Sauvegarder avec compression
    img.save(output_path, 'JPEG', quality=quality, optimize=True)

    # Stats
    original_size = Path(input_path).stat().st_size
    new_size = Path(output_path).stat().st_size
    reduction = (1 - new_size / original_size) * 100

    return {'original': original_size, 'new': new_size, 'reduction': f'{reduction:.1f}%'}
```

### 7.4 Tiering et archivage

#### Classes de stockage cloud

**AWS S3 :**
```python
import boto3
from datetime import datetime, timedelta

s3 = boto3.client('s3')

# Politique de lifecycle
lifecycle_config = {
    'Rules': [
        {
            'ID': 'ArchiveOldFiles',
            'Status': 'Enabled',
            'Filter': {'Prefix': 'documents/'},
            'Transitions': [
                {
                    'Days': 30,
                    'StorageClass': 'STANDARD_IA'  # Infrequent Access
                },
                {
                    'Days': 90,
                    'StorageClass': 'GLACIER_IR'   # Glacier Instant Retrieval
                },
                {
                    'Days': 365,
                    'StorageClass': 'DEEP_ARCHIVE' # Archive long terme
                }
            ],
            'Expiration': {
                'Days': 2555  # Suppression après 7 ans
            }
        }
    ]
}

s3.put_bucket_lifecycle_configuration(
    Bucket='my-bucket',
    LifecycleConfiguration=lifecycle_config
)
```

**Coûts par classe (indicatif) :**
| Classe | Stockage/Go/mois | Récupération |
|--------|-----------------|--------------|
| Standard | $0.023 | Immédiat |
| Standard-IA | $0.0125 | Immédiat, frais accès |
| Glacier Instant | $0.004 | Millisecondes, frais accès |
| Glacier Flexible | $0.0036 | Minutes à heures |
| Deep Archive | $0.00099 | 12-48 heures |

---

## 8. Analytics et Business Intelligence

### 8.1 Collecte raisonnée

#### Définir les métriques essentielles

**Framework AARRR (Pirate Metrics) :**
```
Acquisition  : D'où viennent les utilisateurs ?
Activation   : Ont-ils une bonne première expérience ?
Retention    : Reviennent-ils ?
Referral     : Recommandent-ils ?
Revenue      : Génèrent-ils du revenu ?

Pour chaque étape : 2-3 métriques clés maximum
Pas de "nice to have" qui ne sera jamais analysé
```

**Exemple de métriques essentielles vs excessives :**
```
❌ Collecte excessive :
- Toutes les pages vues avec détail
- Tous les clics avec coordonnées
- Temps passé par élément
- Mouvements de souris
- Historique complet par utilisateur

✅ Collecte sobre :
- Pages vues (agrégées par page)
- Conversions (événements clés)
- Origine du trafic (agrégée)
- Temps moyen par session
```

### 8.2 Agrégation vs données brutes

#### Stratégie d'agrégation

```python
# Pipeline d'agrégation progressive
class AnalyticsPipeline:
    def __init__(self):
        self.raw_retention = timedelta(days=7)
        self.hourly_retention = timedelta(days=30)
        self.daily_retention = timedelta(days=365)
        self.monthly_retention = timedelta(days=365*5)

    def ingest_event(self, event):
        """Ingère un événement brut"""
        # Stockage temporaire des événements bruts
        self.raw_store.store(event)

        # Mise à jour des agrégats en temps réel
        self.update_realtime_counters(event)

    def hourly_aggregation(self):
        """Job horaire : agrège les données brutes"""
        hour = datetime.utcnow().replace(minute=0, second=0, microsecond=0)
        events = self.raw_store.get_events(hour - timedelta(hours=1), hour)

        aggregates = {
            'timestamp': hour,
            'page_views': defaultdict(int),
            'unique_visitors': set(),
            'conversions': defaultdict(int),
        }

        for event in events:
            if event['type'] == 'page_view':
                aggregates['page_views'][event['page']] += 1
            aggregates['unique_visitors'].add(event['session_id'])
            if event.get('conversion'):
                aggregates['conversions'][event['conversion_type']] += 1

        # Transformer les sets en counts
        aggregates['unique_visitors'] = len(aggregates['unique_visitors'])

        self.hourly_store.store(aggregates)

    def daily_aggregation(self):
        """Job quotidien : agrège les données horaires"""
        date = datetime.utcnow().date() - timedelta(days=1)
        hourly_data = self.hourly_store.get_day(date)

        daily_aggregate = {
            'date': date,
            'total_page_views': sum(h['page_views'].values() for h in hourly_data),
            'unique_visitors': ...,  # Recalculer depuis les raw ou estimer
            'conversions': ...,
        }

        self.daily_store.store(daily_aggregate)

    def cleanup_old_data(self):
        """Supprime les données au-delà de leur rétention"""
        now = datetime.utcnow()
        self.raw_store.delete_before(now - self.raw_retention)
        self.hourly_store.delete_before(now - self.hourly_retention)
        self.daily_store.delete_before(now - self.daily_retention)
```

### 8.3 Alternatives sobres aux analytics classiques

#### Analytics sans tracking individuel

**Plausible Analytics :**
- Open source, auto-hébergeable
- Pas de cookies
- Données agrégées uniquement
- Script < 1KB

**Umami :**
- Open source
- Privacy-first
- Pas de données personnelles

**Simple Analytics :**
- Aucune donnée personnelle
- Conforme RGPD par défaut

#### Analytics côté serveur

```python
# Analytics minimaliste côté serveur
from collections import defaultdict
from datetime import datetime

class ServerSideAnalytics:
    def __init__(self):
        self.daily_stats = defaultdict(lambda: defaultdict(int))

    def track_page_view(self, path, user_agent):
        """Track une page vue sans cookies ni JavaScript"""
        today = datetime.utcnow().date()
        self.daily_stats[today][path] += 1

        # Catégoriser le device sans fingerprinting
        if 'Mobile' in user_agent:
            self.daily_stats[today]['mobile_views'] += 1
        else:
            self.daily_stats[today]['desktop_views'] += 1

    def get_stats(self, date):
        return dict(self.daily_stats[date])

# Middleware Flask
@app.after_request
def track_analytics(response):
    if response.status_code == 200:
        analytics.track_page_view(
            request.path,
            request.headers.get('User-Agent', '')
        )
    return response
```

### 8.4 Rétention des données BI

#### Politique de rétention différenciée

```
Données brutes (events) :
├─ Temps réel → 24h (pour debug)
├─ Détail → 7 jours
└─ Puis supprimées

Agrégats horaires :
├─ Détail par page/source → 30 jours
└─ Puis agrégés en quotidien

Agrégats quotidiens :
├─ Détail → 1 an
└─ Puis agrégés en mensuel

Agrégats mensuels :
└─ Conservés 5 ans
```

---

## 9. Emails et collaboration

### 9.1 Politiques de messagerie

#### Quotas et limites

| Élément | Limite recommandée | Justification |
|---------|-------------------|---------------|
| Taille boîte | 2-5 Go | Encourage le tri |
| Taille pièce jointe | 10-25 Mo | Forcer partage de liens |
| Rétention corbeille | 30 jours | Récupération possible |
| Rétention spam | 30 jours | Faux positifs |
| Archivage auto | 2 ans → archive | Légèreté boîte active |

#### Configuration Exchange/M365

```powershell
# Définir les quotas par défaut
Set-Mailbox -Identity "Database01" `
    -IssueWarningQuota 4GB `
    -ProhibitSendQuota 4.5GB `
    -ProhibitSendReceiveQuota 5GB

# Politique de rétention
New-RetentionPolicy -Name "Standard Retention" `
    -RetentionPolicyTagLinks @(
        "Delete after 2 years",
        "Move to archive after 1 year",
        "Delete Junk Email after 30 days",
        "Delete Deleted Items after 30 days"
    )

# Appliquer la politique
Set-Mailbox -Identity "user@domain.com" `
    -RetentionPolicy "Standard Retention"
```

### 9.2 Pièces jointes

#### Stratégie "liens plutôt que fichiers"

**Mauvaise pratique :**
```
Email avec pièce jointe de 15 Mo
├─ Envoyé à 20 personnes
├─ Stocké dans 20 boîtes × taille
├─ Sauvegardé quotidiennement
└─ Total : 15 Mo × 20 × 30 jours × 2 (backup) = 18 Go
```

**Bonne pratique :**
```
Email avec lien vers fichier partagé
├─ Fichier stocké 1 fois (15 Mo)
├─ Lien ne prend quasi rien
├─ Versioning géré par la plateforme
└─ Total : 15 Mo × 3 versions = 45 Mo
```

**Implémentation technique :**
```python
# Intercepteur de pièces jointes (Exchange Transport Rule simulé)
def process_outgoing_email(email):
    attachments = email.attachments
    new_body = email.body

    for attachment in attachments:
        if attachment.size > 5_000_000:  # > 5 Mo
            # Upload vers SharePoint/OneDrive
            link = upload_to_sharepoint(attachment)

            # Remplacer par un lien dans le corps
            new_body += f"\n\n📎 {attachment.name}: {link}"

            # Retirer la pièce jointe
            email.remove_attachment(attachment)

    email.body = new_body
    return email
```

### 9.3 Stockage collaboratif

#### Gouvernance SharePoint/OneDrive

**Structure recommandée :**
```
SharePoint :
├─ Sites d'équipe (contenus collaboratifs)
│   ├─ Projets actifs
│   └─ Documentation équipe
├─ Sites de communication (contenus publiés)
│   └─ Intranet, news
└─ Archives (automatique après 2 ans d'inactivité)

OneDrive :
├─ Travail personnel en cours
├─ Brouillons avant partage
└─ PAS de sauvegarde de fichiers partagés
```

**Politiques de rétention M365 :**
```powershell
# Créer une politique de rétention
New-RetentionPolicy -Name "Document Retention" `
    -Mode Enforce `
    -SharePointLocation All `
    -OneDriveLocation All `
    -RetentionDuration Days730 `  # 2 ans
    -RetentionAction Delete
```

### 9.4 Messagerie instantanée

#### Rétention Slack/Teams

**Slack :**
```
Policies recommandées :
├─ Messages DM : 90 jours
├─ Channels publics : 1 an
├─ Channels privés : 6 mois
└─ Fichiers : 90 jours (forcer liens externes)
```

**Microsoft Teams :**
```powershell
# Politique de rétention Teams
New-TeamsRetentionPolicy -Name "Standard" `
    -ChatRetentionDuration 90 `  # Chats privés : 90 jours
    -ChannelRetentionDuration 365  # Canaux : 1 an
```

#### Nettoyage des fichiers partagés

```python
# Script de nettoyage des fichiers Slack anciens
from slack_sdk import WebClient

client = WebClient(token="xoxb-...")

def cleanup_old_files(days=90):
    """Supprime les fichiers de plus de X jours"""
    from datetime import datetime, timedelta

    cutoff = datetime.now() - timedelta(days=days)
    cutoff_ts = cutoff.timestamp()

    # Lister les fichiers
    response = client.files_list(ts_to=cutoff_ts)

    for file in response['files']:
        # Supprimer le fichier
        client.files_delete(file=file['id'])
        print(f"Deleted: {file['name']} ({file['size']} bytes)")
```

---

## 10. Mise en œuvre

### 10.1 Plan d'action type

#### Phase 1 : Diagnostic (1-2 mois)

```
Semaine 1-2 : Inventaire
├─ Lister tous les systèmes de stockage
├─ Collecter les volumétries
├─ Identifier les responsables

Semaine 3-4 : Analyse
├─ Cartographier les flux de données
├─ Identifier le dark data (fichiers non accédés)
├─ Estimer les coûts et l'empreinte

Semaine 5-6 : Diagnostic
├─ Identifier les quick wins
├─ Prioriser les actions
├─ Estimer les gains potentiels

Semaine 7-8 : Restitution
├─ Présentation des résultats
├─ Validation du plan d'action
└─ Définition des objectifs
```

#### Phase 2 : Quick wins (2-3 mois)

```
Actions à fort impact, faible effort :

1. Purge du dark data évident
   ├─ Fichiers temporaires oubliés
   ├─ Comptes utilisateurs partis
   └─ Données de test en production

2. Configuration des rétentions
   ├─ Emails (corbeille, spam)
   ├─ Logs (niveaux, durées)
   └─ Backups (consolidation)

3. Sensibilisation utilisateurs
   ├─ Communication sur les enjeux
   ├─ Outils de nettoyage individuel
   └─ Premiers challenges de réduction
```

#### Phase 3 : Structuration (3-6 mois)

```
Actions structurantes :

1. Politique de rétention
   ├─ Rédaction et validation
   ├─ Déploiement technique
   └─ Formation des équipes

2. Gouvernance
   ├─ Nomination des Data Owners
   ├─ Processus de validation
   └─ Revues périodiques

3. Automatisation
   ├─ Jobs de purge automatiques
   ├─ Alerting et monitoring
   └─ Rapports de suivi
```

#### Phase 4 : Amélioration continue

```
Actions pérennes :

1. Monitoring continu
   ├─ Dashboard de suivi
   ├─ Alertes de dépassement
   └─ Revues mensuelles

2. Optimisation progressive
   ├─ Déduplication
   ├─ Compression
   └─ Tiering

3. Culture de la sobriété
   ├─ Intégration dans les projets
   ├─ Formation continue
   └─ Objectifs individuels et collectifs
```

### 10.2 Outils et automatisation

#### Outils d'analyse

**Analyse de stockage fichiers :**
- **TreeSize** (Windows) : visualisation arborescente
- **ncdu** (Linux) : analyse en ligne de commande
- **WinDirStat** : visualisation graphique
- **Disk Inventory X** (Mac) : analyse visuelle

**Analyse cloud :**
- **AWS S3 Analytics** : patterns d'accès
- **Azure Storage Analytics** : métriques détaillées
- **GCS Insights** : recommandations

**Analyse bases de données :**
```sql
-- PostgreSQL : taille des tables
SELECT
    schemaname,
    tablename,
    pg_size_pretty(pg_total_relation_size(schemaname || '.' || tablename)) as total_size,
    pg_size_pretty(pg_relation_size(schemaname || '.' || tablename)) as data_size,
    pg_size_pretty(pg_indexes_size(schemaname || '.' || tablename)) as index_size
FROM pg_tables
WHERE schemaname = 'public'
ORDER BY pg_total_relation_size(schemaname || '.' || tablename) DESC
LIMIT 20;
```

#### Framework d'automatisation

```python
# Framework de gestion de la rétention
from dataclasses import dataclass
from datetime import datetime, timedelta
from enum import Enum
import logging

class RetentionAction(Enum):
    KEEP = "keep"
    ARCHIVE = "archive"
    DELETE = "delete"

@dataclass
class RetentionRule:
    name: str
    data_type: str
    retention_days: int
    action_after: RetentionAction
    archive_location: str = None

class RetentionManager:
    def __init__(self):
        self.rules = []
        self.logger = logging.getLogger(__name__)

    def add_rule(self, rule: RetentionRule):
        self.rules.append(rule)

    def evaluate(self, data_item):
        """Évalue quelle action appliquer à un item"""
        for rule in self.rules:
            if self._matches(data_item, rule):
                age_days = (datetime.now() - data_item.created_at).days
                if age_days > rule.retention_days:
                    return rule.action_after, rule
        return RetentionAction.KEEP, None

    def apply_rules(self, data_source, dry_run=True):
        """Applique les règles de rétention à une source de données"""
        stats = {'archived': 0, 'deleted': 0, 'kept': 0}

        for item in data_source.iterate():
            action, rule = self.evaluate(item)

            if action == RetentionAction.DELETE:
                if not dry_run:
                    data_source.delete(item)
                stats['deleted'] += 1
                self.logger.info(f"{'Would delete' if dry_run else 'Deleted'}: {item.id}")

            elif action == RetentionAction.ARCHIVE:
                if not dry_run:
                    data_source.archive(item, rule.archive_location)
                stats['archived'] += 1

            else:
                stats['kept'] += 1

        return stats

# Usage
manager = RetentionManager()
manager.add_rule(RetentionRule(
    name="Old logs",
    data_type="log",
    retention_days=90,
    action_after=RetentionAction.DELETE
))
manager.add_rule(RetentionRule(
    name="Archive old documents",
    data_type="document",
    retention_days=730,
    action_after=RetentionAction.ARCHIVE,
    archive_location="s3://archives/documents/"
))

# Dry run d'abord
stats = manager.apply_rules(log_database, dry_run=True)
print(f"Dry run results: {stats}")

# Puis exécution réelle
stats = manager.apply_rules(log_database, dry_run=False)
```

### 10.3 Indicateurs de suivi

#### KPIs essentiels

| Indicateur | Définition | Cible |
|------------|------------|-------|
| Volume total | Stockage total utilisé | Stabilisation ou réduction |
| Taux de croissance | Croissance mensuelle | < 5%/mois |
| Dark data ratio | % données non accédées > 1 an | < 20% |
| Coût par To | Coût moyen de stockage | Réduction YoY |
| Taux de purge | Données purgées / éligibles | > 95% |
| Délai traitement RGPD | Temps moyen de réponse | < 15 jours |

#### Dashboard de suivi

```
┌─────────────────────────────────────────────────────────────┐
│              Dashboard Sobriété des Données                 │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  VOLUME TOTAL                                               │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ ▂▃▄▅▅▅▄▄▄▃  120 To (objectif: 100 To)              │   │
│  │                         -15% vs objectif            │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  RÉPARTITION PAR TYPE                                       │
│  ████████████░░░░░░░░ Documents : 45 To (38%)              │
│  ████████░░░░░░░░░░░░ Emails : 30 To (25%)                 │
│  ██████░░░░░░░░░░░░░░ Bases de données : 25 To (21%)       │
│  ████░░░░░░░░░░░░░░░░ Logs : 15 To (12%)                   │
│  ██░░░░░░░░░░░░░░░░░░ Autres : 5 To (4%)                   │
│                                                             │
│  DARK DATA                                                  │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ 18% des données non accédées depuis > 1 an          │   │
│  │ = 21.6 To = 5 200€/mois de stockage                │   │
│  │ Objectif : < 10%                                    │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  PURGES CE MOIS                                             │
│  ├─ Logs expirés : 2.3 To ✓                                │
│  ├─ Sessions obsolètes : 150 Go ✓                          │
│  ├─ Fichiers temporaires : 80 Go ✓                         │
│  └─ Échecs de purge : 2 (voir alertes)                     │
│                                                             │
│  EMPREINTE CARBONE ESTIMÉE                                  │
│  84 kgCO2e/an (-12% vs année précédente)                   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 10.4 Sensibilisation utilisateurs

#### Programme de sensibilisation

**Module 1 : Les enjeux (30 min)**
- Impact environnemental du stockage
- Coûts cachés de l'accumulation
- Risques de sécurité du dark data
- Obligations légales (RGPD)

**Module 2 : Bonnes pratiques (1h)**
- Tri des emails et pièces jointes
- Organisation des fichiers
- Alternatives aux copies (liens)
- Outils de nettoyage

**Module 3 : Actions concrètes (exercices)**
- Audit de son espace personnel
- Challenge de réduction (1 Go libéré)
- Mise en place de routines de tri

#### Gamification

```
Challenge Sobriété Données - Janvier 2025

🏆 Classement par équipe :
1. 🥇 Marketing : 45 Go libérés
2. 🥈 IT : 38 Go libérés
3. 🥉 RH : 25 Go libérés

👤 Top contributeurs :
1. Marie D. : 8.5 Go
2. Thomas L. : 6.2 Go
3. Sophie M. : 5.8 Go

🎯 Objectif collectif : 200 Go
📊 Progression : 108 Go (54%)

💡 Astuce du jour :
"Remplacez les pièces jointes par des liens
vers des fichiers partagés !"
```

---

## Checklist sobriété des données

### Gouvernance

- [ ] Politique de rétention documentée et validée
- [ ] Data Owners nommés pour chaque domaine
- [ ] Processus de revue périodique en place
- [ ] Formation des équipes réalisée

### Technique

- [ ] Inventaire des systèmes de stockage complet
- [ ] Jobs de purge automatiques configurés
- [ ] Monitoring et alerting en place
- [ ] Backups optimisés (pas de redondance excessive)

### Données personnelles

- [ ] Durées de conservation RGPD définies
- [ ] Processus d'effacement opérationnel
- [ ] Minimisation appliquée aux collectes
- [ ] Anonymisation en place pour les analytics

### Utilisateurs

- [ ] Sensibilisation effectuée
- [ ] Outils de nettoyage fournis
- [ ] Quotas et limites configurés
- [ ] Rapports de consommation accessibles

### Suivi

- [ ] Dashboard de suivi opérationnel
- [ ] KPIs définis et mesurés
- [ ] Objectifs de réduction fixés
- [ ] Revue mensuelle planifiée

---

## Ressources complémentaires

### Réglementation

- **RGPD** : texte officiel et guidelines CNIL
- **Guide CNIL** : durées de conservation
- **ANSSI** : recommandations de sécurité des données

### Outils

- **Data governance** : Collibra, Alation, Apache Atlas
- **Analyse stockage** : TreeSize, ncdu, S3 Analytics
- **Purge automatisée** : custom scripts, AWS Lifecycle, Azure Retention

### Formations

- **MOOC CNIL** : atelier RGPD
- **Certification DPO** : formations professionnelles
- **Green IT** : MOOC INR, formations GreenIT.fr

---

La sobriété des données, c'est refuser l'accumulation par défaut. Chaque donnée conservée doit avoir une raison d'être, une durée de vie définie, et un responsable qui pourra décider de sa suppression. C'est un changement de paradigme : passer de "on garde tout au cas où" à "on ne conserve que ce qui est nécessaire".
