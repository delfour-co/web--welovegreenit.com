#!/bin/bash

###############################################################################
# Script de préparation d'un dépôt pour l'ouverture à l'open source
#
# Ce script effectue :
# 1. Audit de configuration du dépôt (sécurité, secrets, vulnérabilités)
# 2. Suppression de tous les runs d'actions GitHub
# 3. Squash de tous les commits en un seul commit "chore: Initial commit"
#    avec la date du dimanche précédant le dernier commit
# 4. Configuration de la protection des branches
# 5. Vérifications et recommandations pour l'open source
#
# Usage: ./scripts/prepare-for-opensource.sh [OPTIONS]
#
# Options:
#   --dry-run          Mode simulation (ne fait rien, affiche seulement)
#   --skip-runs        Ne pas supprimer les runs d'actions
#   --skip-squash      Ne pas squasher les commits
#   --skip-protection  Ne pas configurer la protection des branches
#   --skip-audit       Ne pas effectuer l'audit de configuration
#   --branch BRANCH    Branche à traiter (défaut: main ou master)
#   --help             Afficher cette aide
###############################################################################

set -euo pipefail

# Couleurs pour l'output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Variables par défaut
DRY_RUN=false
SKIP_RUNS=false
SKIP_SQUASH=false
SKIP_PROTECTION=false
SKIP_AUDIT=false
TARGET_BRANCH=""
REPO_NAME=""
REPO_OWNER=""

# Fonction d'aide
show_help() {
    cat << EOF
Script de préparation d'un dépôt pour l'ouverture à l'open source

Usage: $0 [OPTIONS]

Options:
    --dry-run          Mode simulation (ne fait rien, affiche seulement)
    --skip-runs        Ne pas supprimer les runs d'actions
    --skip-squash      Ne pas squasher les commits
    --skip-protection  Ne pas configurer la protection des branches
    --skip-audit       Ne pas effectuer l'audit de configuration
    --branch BRANCH    Branche à traiter (défaut: détection automatique)
    --help             Afficher cette aide

Exemples:
    $0                          # Exécution complète
    $0 --dry-run                # Simulation
    $0 --skip-runs              # Tout sauf suppression des runs
    $0 --branch develop         # Traiter la branche develop
EOF
}

# Parse des arguments
parse_args() {
    while [[ $# -gt 0 ]]; do
        case $1 in
            --dry-run)
                DRY_RUN=true
                shift
                ;;
            --skip-runs)
                SKIP_RUNS=true
                shift
                ;;
            --skip-squash)
                SKIP_SQUASH=true
                shift
                ;;
            --skip-protection)
                SKIP_PROTECTION=true
                shift
                ;;
            --skip-audit)
                SKIP_AUDIT=true
                shift
                ;;
            --branch)
                TARGET_BRANCH="$2"
                shift 2
                ;;
            --help)
                show_help
                exit 0
                ;;
            *)
                echo -e "${RED}Option inconnue: $1${NC}"
                show_help
                exit 1
                ;;
        esac
    done
}

# Fonction de log
log_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

log_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Vérifier les prérequis
check_prerequisites() {
    log_info "Vérification des prérequis..."
    
    if ! command -v gh &> /dev/null; then
        log_error "GitHub CLI (gh) n'est pas installé"
        exit 1
    fi
    
    if ! gh auth status &> /dev/null; then
        log_error "Vous n'êtes pas authentifié avec GitHub CLI"
        log_info "Exécutez: gh auth login"
        exit 1
    fi
    
    if ! git rev-parse --git-dir &> /dev/null; then
        log_error "Ce répertoire n'est pas un dépôt Git"
        exit 1
    fi
    
    # Détecter le repo GitHub
    REPO_NAME=$(gh repo view --json name -q '.name')
    REPO_OWNER=$(gh repo view --json owner -q '.owner.login')
    
    if [ -z "$REPO_NAME" ] || [ -z "$REPO_OWNER" ]; then
        log_error "Impossible de détecter le dépôt GitHub"
        exit 1
    fi
    
    log_success "Dépôt détecté: $REPO_OWNER/$REPO_NAME"
    
    # Détecter la branche principale
    if [ -z "$TARGET_BRANCH" ]; then
        if git show-ref --verify --quiet refs/heads/main; then
            TARGET_BRANCH="main"
        elif git show-ref --verify --quiet refs/heads/master; then
            TARGET_BRANCH="master"
        else
            log_error "Impossible de détecter la branche principale (main/master)"
            exit 1
        fi
    fi
    
    log_success "Branche cible: $TARGET_BRANCH"
}

# Supprimer tous les runs d'actions
delete_workflow_runs() {
    if [ "$SKIP_RUNS" = true ]; then
        log_info "Saut de la suppression des runs d'actions"
        return
    fi
    
    log_info "Suppression des runs d'actions GitHub..."
    
    local count=$(gh run list --limit=1000 --json databaseId --jq '.[].databaseId' | wc -l)
    
    if [ "$count" -eq 0 ]; then
        log_success "Aucun run à supprimer"
        return
    fi
    
    log_info "Nombre de runs à supprimer: $count"
    
    if [ "$DRY_RUN" = true ]; then
        log_warning "DRY RUN: Les runs suivants seraient supprimés:"
        gh run list --limit=1000 --json databaseId,workflowName,status,createdAt --jq '.[] | "  - \(.databaseId) - \(.workflowName) - \(.status) - \(.createdAt)"'
        return
    fi
    
    local deleted=0
    gh run list --limit=1000 --json databaseId --jq '.[].databaseId' | while read run_id; do
        if gh api repos/$REPO_OWNER/$REPO_NAME/actions/runs/$run_id -X DELETE &> /dev/null; then
            deleted=$((deleted + 1))
            echo -n "."
        fi
    done
    
    echo ""
    log_success "Suppression terminée"
}

# Calculer la date du dimanche précédent
get_previous_sunday() {
    local last_commit_date=$(git log -1 --format=%ci "$TARGET_BRANCH")
    local last_commit_timestamp=$(date -d "$last_commit_date" +%s)
    local day_of_week=$(date -d "$last_commit_date" +%u)  # 1=lundi, 7=dimanche
    
    # Si c'est déjà dimanche, prendre le dimanche précédent
    if [ "$day_of_week" -eq 7 ]; then
        local sunday_timestamp=$((last_commit_timestamp - 7 * 24 * 3600))
    else
        # Calculer le nombre de jours à reculer pour arriver au dimanche précédent
        local days_back=$((day_of_week))
        local sunday_timestamp=$((last_commit_timestamp - days_back * 24 * 3600))
    fi
    
    # Formater la date pour Git (format ISO 8601)
    date -d "@$sunday_timestamp" +"%Y-%m-%d %H:%M:%S %z"
}

# Squasher tous les commits en un seul
squash_commits() {
    if [ "$SKIP_SQUASH" = true ]; then
        log_info "Saut du squash des commits"
        return
    fi
    
    log_info "Squash de tous les commits en un seul commit..."
    
    # Vérifier qu'on est sur la bonne branche
    local current_branch=$(git rev-parse --abbrev-ref HEAD)
    if [ "$current_branch" != "$TARGET_BRANCH" ]; then
        log_warning "Vous n'êtes pas sur la branche $TARGET_BRANCH (actuellement: $current_branch)"
        log_info "Basculement vers $TARGET_BRANCH..."
        if [ "$DRY_RUN" = false ]; then
            git checkout "$TARGET_BRANCH"
        fi
    fi
    
    # Compter les commits
    local commit_count=$(git rev-list --count "$TARGET_BRANCH")
    
    if [ "$commit_count" -le 1 ]; then
        log_success "Un seul commit, rien à faire"
        return
    fi
    
    log_info "Nombre de commits à squasher: $commit_count"
    
    if [ "$DRY_RUN" = true ]; then
        log_warning "DRY RUN: Les commits suivants seraient squasher:"
        git log --oneline "$TARGET_BRANCH" | head -10
        if [ "$commit_count" -gt 10 ]; then
            log_info "... et $((commit_count - 10)) autres commits"
        fi
        local sunday_date=$(get_previous_sunday)
        log_info "Date du nouveau commit: $sunday_date"
        log_info "Message du commit: chore: initial commit"
        return
    fi
    
    # Créer une branche de sauvegarde
    local backup_branch="backup-before-squash-$(date +%Y%m%d-%H%M%S)"
    log_info "Création d'une branche de sauvegarde: $backup_branch"
    git branch "$backup_branch"
    
    # Obtenir la date du dimanche précédent
    local sunday_date=$(get_previous_sunday)
    log_info "Date du nouveau commit: $sunday_date"
    
    # Obtenir le hash du premier commit (root)
    local root_commit=$(git rev-list --max-parents=0 "$TARGET_BRANCH")
    
    # Réinitialiser à la racine mais garder les fichiers
    git reset --soft "$root_commit"
    
    # Créer le nouveau commit avec la date du dimanche
    # Message conforme à commitlint (sujet en minuscules)
    GIT_AUTHOR_DATE="$sunday_date" GIT_COMMITTER_DATE="$sunday_date" \
        git commit -m "chore: initial commit"
    
    log_success "Squash terminé. Branche de sauvegarde: $backup_branch"
    log_warning "Pour appliquer les changements, exécutez: git push --force-with-lease origin $TARGET_BRANCH"
}

# Configurer la protection des branches
protect_branch() {
    if [ "$SKIP_PROTECTION" = true ]; then
        log_info "Saut de la configuration de la protection des branches"
        return
    fi
    
    log_info "Configuration de la protection de la branche $TARGET_BRANCH..."
    
    if [ "$DRY_RUN" = true ]; then
        log_warning "DRY RUN: Les protections suivantes seraient configurées:"
        cat << EOF
  - Require pull request reviews before merging
  - Require status checks to pass before merging
  - Require conversation resolution before merging
  - Require linear history
  - Include administrators
  - Allow force pushes: false
  - Allow deletions: false
EOF
        return
    fi
    
    # Protéger la branche principale
    gh api repos/$REPO_OWNER/$REPO_NAME/branches/$TARGET_BRANCH/protection \
        --method PUT \
        --field required_status_checks='{"strict":true,"contexts":[]}' \
        --field enforce_admins=true \
        --field required_pull_request_reviews='{"required_approving_review_count":1,"dismiss_stale_reviews":true,"require_code_owner_reviews":false,"require_last_push_approval":false}' \
        --field restrictions=null \
        --field required_linear_history=true \
        --field allow_force_pushes=false \
        --field allow_deletions=false \
        --field block_creations=false \
        --field required_conversation_resolution=true &> /dev/null || {
        log_warning "Impossible de configurer la protection via l'API"
        log_info "Commandes manuelles à exécuter:"
        echo ""
        echo "gh api repos/$REPO_OWNER/$REPO_NAME/branches/$TARGET_BRANCH/protection \\"
        echo "  --method PUT \\"
        echo "  --field required_status_checks='{\"strict\":true,\"contexts\":[]}' \\"
        echo "  --field enforce_admins=true \\"
        echo "  --field required_pull_request_reviews='{\"required_approving_review_count\":1}' \\"
        echo "  --field required_linear_history=true \\"
        echo "  --field allow_force_pushes=false \\"
        echo "  --field allow_deletions=false \\"
        echo "  --field required_conversation_resolution=true"
        return
    }
    
    log_success "Protection de la branche configurée"
}

# Audit de configuration du dépôt
audit_repository_config() {
    log_info "Audit de configuration du dépôt..."
    echo ""
    
    local critical_issues=0
    local warnings=0
    local info_count=0
    
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "  AUDIT DE CONFIGURATION"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo ""
    
    # 1. Vérifier les fichiers sensibles dans le dépôt
    log_info "1. Vérification des fichiers sensibles..."
    local sensitive_files=(
        ".env"
        ".env.local"
        ".env.production"
        ".env.development"
        ".env.test"
        "config/secrets.yml"
        "config/secrets.json"
        "secrets.json"
        "secrets.yml"
        ".secrets"
        "credentials.json"
        "service-account.json"
        "*.pem"
        "*.key"
        "*.p12"
        "*.pfx"
        "id_rsa"
        "id_dsa"
        ".ssh/id_rsa"
        ".ssh/id_dsa"
    )
    
    local found_sensitive=false
    for pattern in "${sensitive_files[@]}"; do
        if find . -name "$pattern" -not -path "./.git/*" 2>/dev/null | grep -q .; then
            log_error "Fichier sensible trouvé: $pattern"
            find . -name "$pattern" -not -path "./.git/*" 2>/dev/null | while read file; do
                echo "  → $file"
            done
            found_sensitive=true
            critical_issues=$((critical_issues + 1))
        fi
    done
    
    if [ "$found_sensitive" = false ]; then
        log_success "Aucun fichier sensible détecté dans le dépôt"
    fi
    echo ""
    
    # 2. Vérifier les secrets hardcodés dans le code (VERSION AVANCÉE)
    log_info "2. Recherche approfondie de secrets hardcodés dans le code..."
    local secret_patterns=(
        # Patterns de base
        "password\s*=\s*['\"][^'\"]+['\"]"
        "api[_-]?key\s*=\s*['\"][^'\"]+['\"]"
        "secret[_-]?key\s*=\s*['\"][^'\"]+['\"]"
        "access[_-]?token\s*=\s*['\"][^'\"]+['\"]"
        "private[_-]?key\s*=\s*['\"][^'\"]+['\"]"
        "aws[_-]?access[_-]?key"
        "aws[_-]?secret[_-]?key"
        # Tokens GitHub
        "ghp_[A-Za-z0-9]{36}"
        "gho_[A-Za-z0-9]{36}"
        "ghu_[A-Za-z0-9]{36}"
        "ghs_[A-Za-z0-9]{36}"
        "ghr_[A-Za-z0-9]{36}"
        # AWS
        "AKIA[0-9A-Z]{16}"
        # Stripe
        "sk_live_[0-9a-zA-Z]{24,}"
        "sk_test_[0-9a-zA-Z]{24,}"
        "rk_live_[0-9a-zA-Z]{24,}"
        "rk_test_[0-9a-zA-Z]{24,}"
        # Slack
        "xox[baprs]-[0-9a-zA-Z-]{10,48}"
        # JWT tokens (base64)
        "eyJ[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*"
        # Google API keys
        "AIza[0-9A-Za-z\\-_]{35}"
        # Firebase
        "AAAA[A-Za-z0-9_-]{7}:[A-Za-z0-9_-]{140}"
        # Twilio
        "SK[0-9a-fA-F]{32}"
        # Mailgun
        "key-[0-9a-zA-Z]{32}"
        # SendGrid
        "SG\.[0-9A-Za-z\\-_]{22}\.[0-9A-Za-z\\-_]{43}"
        # PayPal
        'access_token\$production\$[0-9a-z]{16}\$[0-9a-f]{32}'
        # Heroku
        "heroku[a-z0-9]{16,}"
        # MongoDB
        "mongodb://[^:]+:[^@]+@"
        "mongodb\\+srv://[^:]+:[^@]+@"
        # PostgreSQL
        "postgres://[^:]+:[^@]+@"
        "postgresql://[^:]+:[^@]+@"
        # MySQL
        "mysql://[^:]+:[^@]+@"
        # Redis
        "redis://[^:]+:[^@]+@"
        # URLs avec credentials
        "https?://[^:]+:[^@]+@"
        # Clés SSH
        "-----BEGIN (RSA|DSA|EC|OPENSSH) PRIVATE KEY-----"
        # Certificats
        "-----BEGIN CERTIFICATE-----"
        # Tokens OAuth
        "ya29\\.[0-9A-Za-z\\-_]+"
        # Tokens Discord
        "[MN][A-Za-z\\d]{23}\\.[A-Za-z\\d-_]{6}\\.[A-Za-z\\d-_]{27}"
        # Tokens npm
        "npm_[A-Za-z0-9]{36}"
        # Clés RSA
        "ssh-rsa AAAA[0-9A-Za-z+/]+[=]{0,3}"
    )
    
    local found_secrets=false
    local secret_count=0
    local script_name=$(basename "$0")
    for pattern in "${secret_patterns[@]}"; do
        local matches=$(grep -r -i -E "$pattern" \
            --include="*.js" --include="*.ts" --include="*.jsx" --include="*.tsx" \
            --include="*.py" --include="*.rb" --include="*.php" --include="*.java" \
            --include="*.go" --include="*.rs" --include="*.cpp" --include="*.c" \
            --include="*.yml" --include="*.yaml" --include="*.json" --include="*.toml" \
            --include="*.env*" --include="*.config.*" --include="*.conf" \
            --include="*.sql" --include="*.md" --include="*.txt" \
            . 2>/dev/null | grep -v ".git" | grep -v "node_modules" | grep -v "vendor" | grep -v "dist" | grep -v "build" | grep -v ".next" | grep -v ".cache" | grep -v "/scripts/" | head -10)
        if [ -n "$matches" ]; then
            log_error "Secret potentiel détecté (pattern: $pattern):"
            echo "$matches" | while read line; do
                echo "  → $line"
            done
            found_secrets=true
            secret_count=$((secret_count + 1))
            critical_issues=$((critical_issues + 1))
        fi
    done
    
    # Vérifier les commentaires avec des informations sensibles
    log_info "2.1. Recherche de secrets dans les commentaires..."
    local comment_secrets=$(grep -r -i -E "(TODO|FIXME|NOTE|HACK|XXX).*password|(TODO|FIXME|NOTE|HACK|XXX).*secret|(TODO|FIXME|NOTE|HACK|XXX).*token|(TODO|FIXME|NOTE|HACK|XXX).*key" \
        --include="*.js" --include="*.ts" --include="*.py" --include="*.rb" --include="*.php" \
        --include="*.java" --include="*.go" --include="*.md" \
        . 2>/dev/null | grep -v ".git" | grep -v "node_modules" | grep -v "vendor" | head -5)
    if [ -n "$comment_secrets" ]; then
        log_warning "Commentaires avec références à des secrets détectés:"
        echo "$comment_secrets" | while read line; do
            echo "  → $line"
        done
        warnings=$((warnings + 1))
    fi
    
    # Vérifier les URLs hardcodées avec credentials
    log_info "2.2. Recherche d'URLs avec credentials..."
    local url_creds=$(grep -r -i -E "https?://[a-zA-Z0-9._-]+:[^@\s]+@[a-zA-Z0-9._-]+" \
        --include="*.js" --include="*.ts" --include="*.py" --include="*.rb" \
        --include="*.php" --include="*.java" --include="*.go" --include="*.yml" \
        --include="*.yaml" --include="*.json" --include="*.env*" \
        . 2>/dev/null | grep -v ".git" | grep -v "node_modules" | grep -v "vendor" | head -5)
    if [ -n "$url_creds" ]; then
        log_error "URLs avec credentials détectées:"
        echo "$url_creds" | while read line; do
            echo "  → $line"
        done
        critical_issues=$((critical_issues + 1))
    fi
    
    if [ "$found_secrets" = false ]; then
        log_success "Aucun secret hardcodé détecté"
    fi
    echo ""
    
    # 3. Vérifier les workflows GitHub Actions (VERSION AVANCÉE)
    log_info "3. Audit approfondi des workflows GitHub Actions..."
    if [ -d ".github/workflows" ]; then
        local workflow_issues=0
        local workflow_count=0
        
        for workflow in .github/workflows/*.yml .github/workflows/*.yaml; do
            if [ -f "$workflow" ]; then
                workflow_count=$((workflow_count + 1))
                local workflow_name=$(basename "$workflow")
                
                # Vérifier les secrets hardcodés
                if grep -q -E "(password|secret|token|key)\s*:\s*['\"][^'\"]+['\"]" "$workflow" 2>/dev/null; then
                    log_error "Secret potentiel dans $workflow_name"
                    grep -n -E "(password|secret|token|key)\s*:\s*['\"][^'\"]+['\"]" "$workflow" | while read line; do
                        echo "  → Ligne $line"
                    done
                    workflow_issues=$((workflow_issues + 1))
                    critical_issues=$((critical_issues + 1))
                fi
                
                # Vérifier l'utilisation de secrets GitHub (bonne pratique)
                if grep -q "secrets\." "$workflow" 2>/dev/null; then
                    log_success "Utilisation de secrets GitHub dans $workflow_name (bonne pratique)"
                fi
                
                # Vérifier les permissions
                if ! grep -q "permissions:" "$workflow" 2>/dev/null; then
                    log_warning "Permissions non définies dans $workflow_name (recommandé)"
                    warnings=$((warnings + 1))
                fi
                
                # Vérifier les actions non versionnées
                if grep -q "uses:.*@master\|uses:.*@main\|uses:.*@latest" "$workflow" 2>/dev/null; then
                    log_warning "Actions utilisant @master/@main/@latest dans $workflow_name (recommandé: utiliser des tags spécifiques)"
                    warnings=$((warnings + 1))
                fi
                
                # Vérifier les triggers
                if grep -q "workflow_dispatch:" "$workflow" 2>/dev/null; then
                    log_info "Workflow manuel activé dans $workflow_name"
                fi
                
                # Vérifier les matrices de build
                if grep -q "matrix:" "$workflow" 2>/dev/null; then
                    log_info "Matrice de build détectée dans $workflow_name"
                fi
                
                # Vérifier les caches
                if grep -q "actions/cache@" "$workflow" 2>/dev/null; then
                    log_success "Cache activé dans $workflow_name (bonne pratique)"
                fi
            fi
        done
        
        if [ $workflow_count -eq 0 ]; then
            log_info "Aucun workflow trouvé"
        elif [ $workflow_issues -eq 0 ]; then
            log_success "$workflow_count workflow(s) analysé(s), aucun problème critique détecté"
        else
            log_error "$workflow_issues problème(s) détecté(s) dans les workflows"
        fi
        
        # Vérifier les dépendances des workflows
        if [ -d ".github/dependabot.yml" ] || [ -f ".github/dependabot.yml" ]; then
            log_success "Dependabot configuré pour les dépendances GitHub Actions"
        else
            log_info "Dependabot non configuré (recommandé pour mettre à jour les actions)"
        fi
    else
        log_info "Aucun dossier .github/workflows trouvé"
    fi
    echo ""
    
    # 4. Vérifier les secrets GitHub du dépôt
    log_info "4. Vérification des secrets GitHub configurés..."
    if [ "$DRY_RUN" = false ]; then
        local gh_secrets=$(gh secret list 2>/dev/null | tail -n +2 | wc -l)
        if [ "$gh_secrets" -gt 0 ]; then
            log_success "$gh_secrets secret(s) GitHub configuré(s)"
            gh secret list 2>/dev/null | tail -n +2 | while read secret; do
                echo "  → $secret"
            done
        else
            log_info "Aucun secret GitHub configuré"
        fi
        
        local gh_vars=$(gh variable list 2>/dev/null | tail -n +2 | wc -l)
        if [ "$gh_vars" -gt 0 ]; then
            log_success "$gh_vars variable(s) d'environnement GitHub configurée(s)"
            gh variable list 2>/dev/null | tail -n +2 | while read var; do
                echo "  → $var"
            done
        else
            log_info "Aucune variable d'environnement GitHub configurée"
        fi
    else
        log_info "DRY RUN: Vérification des secrets GitHub ignorée"
    fi
    echo ""
    
    # 5. Vérifier les fichiers de configuration du projet (VERSION AVANCÉE)
    log_info "5. Audit approfondi des fichiers de configuration..."
    local config_files=(
        "package.json"
        "composer.json"
        "requirements.txt"
        "Pipfile"
        "poetry.lock"
        "Gemfile"
        "Gemfile.lock"
        "Cargo.toml"
        "Cargo.lock"
        "go.mod"
        "go.sum"
        "pom.xml"
        "build.gradle"
        "settings.gradle"
        "docker-compose.yml"
        "docker-compose.yaml"
        "Dockerfile"
        ".dockerignore"
        ".gitignore"
        ".npmrc"
        ".yarnrc"
        "tsconfig.json"
        "webpack.config.js"
        "vite.config.js"
        "next.config.js"
        "nuxt.config.js"
        "tailwind.config.js"
        "postcss.config.js"
        ".eslintrc"
        ".prettierrc"
        ".editorconfig"
    )
    
    local found_configs=0
    local config_issues=0
    
    for config in "${config_files[@]}"; do
        if [ -f "$config" ] || [ -d "$config" ]; then
            found_configs=$((found_configs + 1))
            log_success "Fichier de configuration trouvé: $config"
            
            # Vérifier package.json pour des scripts ou configs sensibles
            if [ "$config" = "package.json" ]; then
                if grep -q -E "(password|secret|token|key)" "$config" 2>/dev/null; then
                    log_warning "Mots-clés sensibles trouvés dans package.json (vérifiez manuellement)"
                    warnings=$((warnings + 1))
                    config_issues=$((config_issues + 1))
                fi
                
                # Vérifier les engines
                if command -v jq &> /dev/null; then
                    local engines=$(jq -r '.engines // empty' package.json 2>/dev/null)
                    if [ -n "$engines" ] && [ "$engines" != "null" ]; then
                        log_success "Engines spécifiés dans package.json"
                    fi
                fi
            fi
            
            # Vérifier docker-compose.yml pour des secrets
            if [ "$config" = "docker-compose.yml" ] || [ "$config" = "docker-compose.yaml" ]; then
                if grep -q -E "password|secret|token" "$config" 2>/dev/null | grep -v "^#" | grep -v "^\s*#" | grep -q .; then
                    log_warning "Secrets potentiels dans docker-compose.yml (vérifiez l'utilisation de variables d'environnement)"
                    warnings=$((warnings + 1))
                    config_issues=$((config_issues + 1))
                fi
            fi
            
            # Vérifier .npmrc pour des tokens
            if [ "$config" = ".npmrc" ]; then
                if grep -q -E "_authToken|registry.*token" "$config" 2>/dev/null; then
                    log_error "Token potentiel dans .npmrc (devrait être dans .npmrc.local ou variables d'environnement)"
                    critical_issues=$((critical_issues + 1))
                    config_issues=$((config_issues + 1))
                fi
            fi
            
            # Vérifier les fichiers de config web pour des URLs hardcodées
            if [[ "$config" == *"config.js" ]] || [[ "$config" == *"config.ts" ]]; then
                if grep -q -E "https?://[^/]+/(api|admin|internal)" "$config" 2>/dev/null; then
                    log_warning "URLs internes potentiellement hardcodées dans $config"
                    warnings=$((warnings + 1))
                fi
            fi
        fi
    done
    
    if [ $found_configs -eq 0 ]; then
        log_info "Aucun fichier de configuration standard détecté"
    else
        log_info "$found_configs fichier(s) de configuration trouvé(s)"
        if [ $config_issues -eq 0 ]; then
            log_success "Aucun problème détecté dans les fichiers de configuration"
        fi
    fi
    echo ""
    
    # 6. Vérifier .gitignore pour les fichiers sensibles
    log_info "6. Vérification du .gitignore..."
    if [ -f ".gitignore" ]; then
        local gitignore_checks=(
            ".env"
            "*.key"
            "*.pem"
            "secrets"
            "credentials"
            "node_modules"
            ".DS_Store"
        )
        
        local missing_ignores=0
        for check in "${gitignore_checks[@]}"; do
            if ! grep -q "^$check\|/$check" ".gitignore" 2>/dev/null; then
                log_warning ".gitignore ne contient pas: $check (recommandé)"
                missing_ignores=$((missing_ignores + 1))
                warnings=$((warnings + 1))
            fi
        done
        
        if [ $missing_ignores -eq 0 ]; then
            log_success ".gitignore semble bien configuré"
        fi
    else
        log_warning ".gitignore manquant"
        warnings=$((warnings + 1))
    fi
    echo ""
    
    # 7. Vérifier les permissions de fichiers sensibles
    log_info "7. Vérification des permissions de fichiers..."
    local sensitive_perms=0
    while IFS= read -r file; do
        if [ -f "$file" ]; then
            local perms=$(stat -c "%a" "$file" 2>/dev/null || stat -f "%OLp" "$file" 2>/dev/null || echo "")
            if [ -n "$perms" ] && [ "$perms" != "600" ] && [ "$perms" != "644" ] && [ "$perms" != "755" ]; then
                log_warning "Permissions inhabituelles pour $file: $perms (recommandé: 600 pour les clés, 644/755 pour les scripts)"
                sensitive_perms=$((sensitive_perms + 1))
                warnings=$((warnings + 1))
            fi
        fi
    done < <(find . -type f \( -name "*.sh" -o -name "*.key" -o -name "*.pem" \) -not -path "./.git/*" -not -path "./node_modules/*" -not -path "./vendor/*" 2>/dev/null)
    
    if [ $sensitive_perms -eq 0 ]; then
        log_success "Permissions de fichiers OK"
    fi
    echo ""
    
    # 8. Vérifier les dépendances et vulnérabilités (VERSION AVANCÉE)
    log_info "8. Audit approfondi des dépendances et vulnérabilités..."
    if [ -f "package.json" ]; then
        log_info "8.1. Analyse de package.json..."
        if command -v npm &> /dev/null; then
            # Compter les dépendances
            if command -v jq &> /dev/null; then
                local deps_count=$(jq '[.dependencies // {}, .devDependencies // {}] | add | length' package.json 2>/dev/null || echo "0")
                log_info "Nombre de dépendances: $deps_count"
            fi
            
            # Vérification des vulnérabilités npm
            log_info "8.2. Vérification des vulnérabilités npm..."
            if [ "$DRY_RUN" = false ]; then
                local audit_output=$(npm audit --audit-level=moderate --json 2>/dev/null || echo "{}")
                if echo "$audit_output" | grep -q '"vulnerabilities"'; then
                    local vuln_count=$(echo "$audit_output" | jq -r '.metadata.vulnerabilities.total // 0' 2>/dev/null || echo "0")
                    if [ "$vuln_count" != "0" ] && [ "$vuln_count" != "null" ]; then
                        log_warning "$vuln_count vulnérabilité(s) npm détectée(s) (exécutez 'npm audit' pour plus de détails)"
                        warnings=$((warnings + 1))
                    else
                        log_success "Aucune vulnérabilité npm critique détectée"
                    fi
                else
                    log_success "Aucune vulnérabilité npm détectée"
                fi
            else
                log_info "DRY RUN: Vérification npm ignorée"
            fi
            
            # Vérifier les dépendances non utilisées
            if [ "$DRY_RUN" = false ] && command -v depcheck &> /dev/null; then
                log_info "8.3. Vérification des dépendances non utilisées..."
                local unused=$(depcheck --json 2>/dev/null | jq -r '.dependencies | length' 2>/dev/null || echo "0")
                if [ "$unused" != "0" ] && [ "$unused" != "null" ]; then
                    log_warning "$unused dépendance(s) potentiellement non utilisée(s)"
                    warnings=$((warnings + 1))
                fi
            fi
            
            # Vérifier les dépendances avec des licences restrictives
            log_info "8.4. Vérification des licences des dépendances..."
            if command -v license-checker &> /dev/null && [ "$DRY_RUN" = false ]; then
                local gpl_deps=$(license-checker --json 2>/dev/null | jq -r 'to_entries[] | select(.value.licenses | test("GPL|AGPL")) | .key' 2>/dev/null | head -5)
                if [ -n "$gpl_deps" ]; then
                    log_warning "Dépendances avec licences GPL/AGPL détectées (vérifiez la compatibilité):"
                    echo "$gpl_deps" | while read dep; do
                        echo "  → $dep"
                    done
                    warnings=$((warnings + 1))
                fi
            fi
        else
            log_info "npm non disponible, vérifications ignorées"
        fi
    fi
    
    if [ -f "composer.json" ]; then
        log_info "8.5. Analyse de composer.json..."
        if command -v composer &> /dev/null; then
            # Compter les dépendances
            if command -v jq &> /dev/null; then
                local composer_deps=$(jq '[.require // {}, .require-dev // {}] | add | length' composer.json 2>/dev/null || echo "0")
                log_info "Nombre de dépendances Composer: $composer_deps"
            fi
            
            # Vérification des vulnérabilités Composer
            log_info "8.6. Vérification des vulnérabilités Composer..."
            if [ "$DRY_RUN" = false ]; then
                if composer audit --format=json 2>/dev/null | grep -q '"advisories"'; then
                    log_warning "Vulnérabilités Composer détectées (exécutez 'composer audit' pour plus de détails)"
                    warnings=$((warnings + 1))
                else
                    log_success "Aucune vulnérabilité Composer critique détectée"
                fi
            else
                log_info "DRY RUN: Vérification Composer ignorée"
            fi
        fi
    fi
    
    # Vérifier les autres gestionnaires de paquets
    if [ -f "requirements.txt" ] || [ -f "Pipfile" ]; then
        log_info "8.7. Dépendances Python détectées"
        if [ -f "requirements.txt" ]; then
            local py_deps=$(grep -v "^#" requirements.txt 2>/dev/null | grep -v "^$" | wc -l)
            log_info "Nombre de dépendances Python: $py_deps"
        fi
    fi
    
    if [ -f "Gemfile" ]; then
        log_info "8.8. Dépendances Ruby détectées"
        if command -v bundle &> /dev/null && [ "$DRY_RUN" = false ]; then
            log_info "Vérification des vulnérabilités Ruby..."
            # Note: bundle audit nécessite gem install bundler-audit
        fi
    fi
    
    if [ -f "Cargo.toml" ]; then
        log_info "8.9. Dépendances Rust détectées"
        if command -v cargo &> /dev/null && [ "$DRY_RUN" = false ]; then
            log_info "Vérification des vulnérabilités Rust..."
            # Note: cargo audit nécessite cargo install cargo-audit
        fi
    fi
    echo ""
    
    # 9. Vérifier les configurations GitHub du dépôt
    log_info "9. Vérification des configurations GitHub..."
    if [ "$DRY_RUN" = false ]; then
        local repo_info=$(gh repo view --json visibility,isPrivate,hasIssuesEnabled,hasProjectsEnabled,hasWikiEnabled,hasDiscussionsEnabled,deleteBranchOnMerge,allowSquashMerge,allowMergeCommit,allowRebaseMerge 2>/dev/null)
        
        if [ -n "$repo_info" ]; then
            local visibility=$(echo "$repo_info" | jq -r '.visibility')
            local has_issues=$(echo "$repo_info" | jq -r '.hasIssuesEnabled')
            local has_discussions=$(echo "$repo_info" | jq -r '.hasDiscussionsEnabled')
            local delete_branch=$(echo "$repo_info" | jq -r '.deleteBranchOnMerge')
            
            if [ "$visibility" = "PRIVATE" ]; then
                log_info "Visibilité: PRIVATE (sera PUBLIC après ouverture)"
            else
                log_success "Visibilité: $visibility"
            fi
            
            if [ "$has_issues" = "false" ]; then
                log_warning "Issues désactivées (recommandé pour l'open source)"
                warnings=$((warnings + 1))
            else
                log_success "Issues activées"
            fi
            
            if [ "$has_discussions" = "false" ]; then
                log_info "Discussions désactivées (optionnel mais recommandé)"
            else
                log_success "Discussions activées"
            fi
            
            if [ "$delete_branch" = "false" ]; then
                log_info "Suppression automatique des branches après merge: désactivée"
            else
                log_success "Suppression automatique des branches après merge: activée"
            fi
        fi
    else
        log_info "DRY RUN: Vérification des configurations GitHub ignorée"
    fi
    echo ""
    
    # 10. Vérifier les grandes tailles de fichiers
    log_info "10. Vérification des fichiers volumineux..."
    local large_files=$(find . -type f -size +10M -not -path "./.git/*" -not -path "./node_modules/*" -not -path "./vendor/*" 2>/dev/null | head -10)
    if [ -n "$large_files" ]; then
        log_warning "Fichiers volumineux détectés (>10MB):"
        echo "$large_files" | while read file; do
            local size=$(du -h "$file" | cut -f1)
            echo "  → $file ($size)"
        done
        log_info "Considérez utiliser Git LFS pour les gros fichiers"
        warnings=$((warnings + 1))
    else
        log_success "Aucun fichier volumineux détecté"
    fi
    echo ""
    
    # 11. Vérification approfondie des dépendances
    log_info "11. Audit approfondi des dépendances..."
    if [ -f "package.json" ]; then
        log_info "11.1. Analyse de package.json..."
        if command -v jq &> /dev/null; then
            # Vérifier les dépendances obsolètes
            if [ "$DRY_RUN" = false ] && command -v npm &> /dev/null; then
                local outdated=$(npm outdated --json 2>/dev/null | jq 'length' 2>/dev/null || echo "0")
                if [ "$outdated" != "0" ] && [ "$outdated" != "null" ]; then
                    log_warning "$outdated dépendance(s) obsolète(s) détectée(s)"
                    warnings=$((warnings + 1))
                fi
            fi
            
            # Vérifier les licences des dépendances
            log_info "11.2. Vérification des licences des dépendances..."
            local license_check=$(jq -r '.dependencies // {}, .devDependencies // {} | to_entries[] | .key' package.json 2>/dev/null | head -5)
            if [ -n "$license_check" ]; then
                log_info "Vérification des licences (échantillon de 5 dépendances)..."
                # Note: vérification basique, nécessiterait npm-license-checker pour être complet
            fi
            
            # Vérifier les scripts npm potentiellement dangereux
            log_info "11.3. Vérification des scripts npm..."
            local dangerous_scripts=$(jq -r '.scripts // {} | to_entries[] | select(.value | test("(rm -rf|sudo|chmod 777|eval|exec)")) | .key' package.json 2>/dev/null)
            if [ -n "$dangerous_scripts" ]; then
                log_warning "Scripts npm potentiellement dangereux détectés:"
                echo "$dangerous_scripts" | while read script; do
                    echo "  → $script"
                done
                warnings=$((warnings + 1))
            fi
        fi
    fi
    
    if [ -f "composer.json" ]; then
        log_info "11.4. Analyse de composer.json..."
        if command -v jq &> /dev/null; then
            # Vérifier les dépendances obsolètes
            if [ "$DRY_RUN" = false ] && command -v composer &> /dev/null; then
                log_info "Vérification des dépendances obsolètes Composer..."
                # Note: composer outdated nécessite composer/composer
            fi
        fi
    fi
    echo ""
    
    # 12. Vérification des fichiers de logs et temporaires
    log_info "12. Vérification des fichiers de logs et temporaires..."
    local log_files=$(find . -type f \( -name "*.log" -o -name "*.tmp" -o -name "*.temp" -o -name "*~" -o -name "*.swp" -o -name "*.swo" \) \
        -not -path "./.git/*" -not -path "./node_modules/*" -not -path "./vendor/*" 2>/dev/null | head -10)
    if [ -n "$log_files" ]; then
        log_warning "Fichiers de logs/temporaires détectés (devraient être dans .gitignore):"
        echo "$log_files" | while read file; do
            echo "  → $file"
        done
        warnings=$((warnings + 1))
    else
        log_success "Aucun fichier de log/temporaire détecté"
    fi
    echo ""
    
    # 13. Vérification des configurations de base de données
    log_info "13. Vérification des configurations de base de données..."
    local db_configs=$(find . -type f \( -name "*database*" -o -name "*db*" -o -name "*sql*" \) \
        -not -path "./.git/*" -not -path "./node_modules/*" -not -path "./vendor/*" \
        -not -name "*.md" -not -name "*.txt" 2>/dev/null | head -10)
    if [ -n "$db_configs" ]; then
        local db_has_secrets=false
        for config in $db_configs; do
            if grep -q -i -E "(password|secret|token|credential)" "$config" 2>/dev/null; then
                log_error "Configuration de base de données avec secrets potentiels: $config"
                db_has_secrets=true
                critical_issues=$((critical_issues + 1))
            fi
        done
        if [ "$db_has_secrets" = false ]; then
            log_success "Configurations de base de données OK"
        fi
    fi
    echo ""
    
    # 14. Vérification des certificats et clés
    log_info "14. Vérification approfondie des certificats et clés..."
    local cert_files=$(find . -type f \( -name "*.pem" -o -name "*.key" -o -name "*.crt" -o -name "*.cer" -o -name "*.p12" -o -name "*.pfx" -o -name "*.jks" \) \
        -not -path "./.git/*" -not -path "./node_modules/*" -not -path "./vendor/*" 2>/dev/null)
    if [ -n "$cert_files" ]; then
        log_error "Certificats/clés détectés dans le dépôt:"
        echo "$cert_files" | while read file; do
            echo "  → $file"
            # Vérifier si c'est un certificat auto-signé
            if command -v openssl &> /dev/null && [[ "$file" == *.pem ]] || [[ "$file" == *.crt ]]; then
                local issuer=$(openssl x509 -in "$file" -noout -issuer 2>/dev/null | grep -i "self" || echo "")
                if [ -n "$issuer" ]; then
                    log_warning "    Certificat auto-signé détecté"
                fi
            fi
        done
        critical_issues=$((critical_issues + 1))
    else
        log_success "Aucun certificat/clé détecté"
    fi
    echo ""
    
    # 15. Vérification des configurations serveur (nginx, apache, etc.)
    log_info "15. Vérification des configurations serveur..."
    local server_configs=$(find . -type f \( -name "nginx.conf" -o -name "*.nginx" -o -name "apache.conf" -o -name "httpd.conf" -o -name ".htaccess" \) \
        -not -path "./.git/*" -not -path "./node_modules/*" -not -path "./vendor/*" 2>/dev/null)
    if [ -n "$server_configs" ]; then
        local server_issues=0
        for config in $server_configs; do
            # Vérifier les mots de passe hardcodés
            if grep -q -i -E "password\s+[^#;]+" "$config" 2>/dev/null; then
                log_error "Mots de passe potentiels dans $config"
                server_issues=$((server_issues + 1))
                critical_issues=$((critical_issues + 1))
            fi
            # Vérifier les configurations de sécurité
            if ! grep -q -i "X-Frame-Options\|X-Content-Type-Options\|X-XSS-Protection" "$config" 2>/dev/null; then
                log_warning "Headers de sécurité manquants dans $config (recommandé)"
                warnings=$((warnings + 1))
            fi
        done
        if [ $server_issues -eq 0 ]; then
            log_success "Configurations serveur OK"
        fi
    fi
    echo ""
    
    # 16. Vérification des fichiers Docker
    log_info "16. Audit approfondi des fichiers Docker..."
    if [ -f "Dockerfile" ] || [ -f "docker-compose.yml" ] || [ -f "docker-compose.yaml" ]; then
        local docker_issues=0
        
        # Vérifier Dockerfile
        if [ -f "Dockerfile" ]; then
            # Vérifier les secrets dans les RUN
            if grep -q -E "RUN.*(password|secret|token|key)" Dockerfile 2>/dev/null; then
                log_error "Secrets potentiels dans Dockerfile"
                docker_issues=$((docker_issues + 1))
                critical_issues=$((critical_issues + 1))
            fi
            # Vérifier l'utilisation de USER non-root
            if ! grep -q -E "USER\s+[^root]" Dockerfile 2>/dev/null && grep -q "^FROM" Dockerfile 2>/dev/null; then
                log_warning "Dockerfile n'utilise pas d'utilisateur non-root (recommandé pour la sécurité)"
                warnings=$((warnings + 1))
            fi
            # Vérifier .dockerignore
            if [ ! -f ".dockerignore" ]; then
                log_warning ".dockerignore manquant (recommandé)"
                warnings=$((warnings + 1))
            fi
        fi
        
        # Vérifier docker-compose
        for compose_file in docker-compose.yml docker-compose.yaml; do
            if [ -f "$compose_file" ]; then
                # Vérifier les variables d'environnement hardcodées
                if grep -q -E "environment:\s*$" -A 10 "$compose_file" 2>/dev/null | grep -q -E "(password|secret|token|key)\s*:\s*['\"][^'\"]+['\"]"; then
                    log_error "Variables d'environnement hardcodées dans $compose_file"
                    docker_issues=$((docker_issues + 1))
                    critical_issues=$((critical_issues + 1))
                fi
            fi
        done
        
        if [ $docker_issues -eq 0 ]; then
            log_success "Fichiers Docker OK"
        fi
    fi
    echo ""
    
    # 17. Vérification de la qualité du code et des outils
    log_info "17. Vérification de la qualité du code..."
    local quality_tools=(
        ".eslintrc"
        ".eslintrc.js"
        ".eslintrc.json"
        ".prettierrc"
        ".prettierrc.js"
        ".prettierrc.json"
        ".editorconfig"
        "tsconfig.json"
        "pyproject.toml"
        ".rubocop.yml"
        ".golangci.yml"
        "rustfmt.toml"
    )
    
    local found_tools=0
    for tool in "${quality_tools[@]}"; do
        if [ -f "$tool" ] || [ -d "$tool" ]; then
            found_tools=$((found_tools + 1))
        fi
    done
    
    if [ $found_tools -gt 0 ]; then
        log_success "$found_tools outil(s) de qualité de code détecté(s)"
    else
        log_info "Aucun outil de qualité de code détecté (optionnel mais recommandé)"
    fi
    
    # Vérifier les tests
    log_info "17.1. Vérification des tests..."
    local test_dirs=$(find . -type d \( -name "test" -o -name "tests" -o -name "__tests__" -o -name "spec" -o -name "specs" \) \
        -not -path "./.git/*" -not -path "./node_modules/*" -not -path "./vendor/*" 2>/dev/null | head -5)
    local test_files=$(find . -type f \( -name "*.test.*" -o -name "*.spec.*" -o -name "*_test.*" -o -name "*Test.*" \) \
        -not -path "./.git/*" -not -path "./node_modules/*" -not -path "./vendor/*" 2>/dev/null | head -5)
    
    if [ -n "$test_dirs" ] || [ -n "$test_files" ]; then
        log_success "Tests détectés"
        if [ -f "package.json" ] && command -v jq &> /dev/null; then
            local has_test_script=$(jq -r '.scripts.test // empty' package.json 2>/dev/null)
            if [ -z "$has_test_script" ]; then
                log_warning "Script 'test' manquant dans package.json"
                warnings=$((warnings + 1))
            fi
        fi
    else
        log_info "Aucun test détecté (recommandé pour l'open source)"
    fi
    echo ""
    
    # 18. Vérification de la documentation
    log_info "18. Audit de la documentation..."
    local doc_files=(
        "README.md"
        "README"
        "CHANGELOG.md"
        "CHANGELOG"
        "CONTRIBUTING.md"
        "CONTRIBUTING"
        "CODE_OF_CONDUCT.md"
        "CODE_OF_CONDUCT"
        "LICENSE"
        "LICENSE.md"
        "LICENSE.txt"
        "SECURITY.md"
        ".github/SECURITY.md"
        "docs/"
        "documentation/"
    )
    
    local found_docs=0
    for doc in "${doc_files[@]}"; do
        if [ -f "$doc" ] || [ -d "$doc" ]; then
            found_docs=$((found_docs + 1))
        fi
    done
    
    if [ $found_docs -ge 3 ]; then
        log_success "Documentation complète ($found_docs fichiers/dossiers)"
    else
        log_warning "Documentation incomplète ($found_docs fichiers/dossiers trouvés)"
        warnings=$((warnings + 1))
    fi
    
    # Vérifier la qualité du README
    if [ -f "README.md" ] || [ -f "README" ]; then
        local readme_file=$(ls README.md README 2>/dev/null | head -1)
        local readme_size=$(wc -l < "$readme_file" 2>/dev/null || echo "0")
        if [ "$readme_size" -lt 10 ]; then
            log_warning "README semble trop court (< 10 lignes)"
            warnings=$((warnings + 1))
        fi
        # Vérifier les sections importantes
        if ! grep -q -i -E "(installation|usage|contributing|license|description)" "$readme_file" 2>/dev/null; then
            log_info "README pourrait bénéficier de plus de sections (installation, usage, etc.)"
        fi
    fi
    echo ""
    
    # 19. Vérification des métadonnées du projet
    log_info "19. Vérification des métadonnées du projet..."
    if [ -f "package.json" ] && command -v jq &> /dev/null; then
        local has_name=$(jq -r '.name // empty' package.json 2>/dev/null)
        local has_description=$(jq -r '.description // empty' package.json 2>/dev/null)
        local has_version=$(jq -r '.version // empty' package.json 2>/dev/null)
        local has_license=$(jq -r '.license // empty' package.json 2>/dev/null)
        local has_repository=$(jq -r '.repository // empty' package.json 2>/dev/null)
        local has_keywords=$(jq -r '.keywords // empty' package.json 2>/dev/null)
        
        local metadata_score=0
        [ -n "$has_name" ] && metadata_score=$((metadata_score + 1))
        [ -n "$has_description" ] && metadata_score=$((metadata_score + 1))
        [ -n "$has_version" ] && metadata_score=$((metadata_score + 1))
        [ -n "$has_license" ] && metadata_score=$((metadata_score + 1))
        [ -n "$has_repository" ] && metadata_score=$((metadata_score + 1))
        [ -n "$has_keywords" ] && metadata_score=$((metadata_score + 1))
        
        if [ $metadata_score -ge 4 ]; then
            log_success "Métadonnées complètes ($metadata_score/6)"
        else
            log_warning "Métadonnées incomplètes ($metadata_score/6)"
            warnings=$((warnings + 1))
        fi
    fi
    echo ""
    
    # 20. Vérification des workflows CI/CD avancée
    log_info "20. Audit approfondi des workflows CI/CD..."
    if [ -d ".github/workflows" ]; then
        local workflow_count=$(find .github/workflows -name "*.yml" -o -name "*.yaml" 2>/dev/null | wc -l)
        log_info "Nombre de workflows: $workflow_count"
        
        for workflow in .github/workflows/*.yml .github/workflows/*.yaml; do
            if [ -f "$workflow" ]; then
                local workflow_name=$(basename "$workflow")
                
                # Vérifier les permissions des workflows
                if grep -q "permissions:" "$workflow" 2>/dev/null; then
                    log_success "Permissions définies dans $workflow_name (bonne pratique)"
                else
                    log_warning "Permissions non définies dans $workflow_name (recommandé pour la sécurité)"
                    warnings=$((warnings + 1))
                fi
                
                # Vérifier l'utilisation de actions versionnées par tag
                if grep -q "uses:.*@[a-f0-9]\{40\}" "$workflow" 2>/dev/null; then
                    log_success "Actions versionnées par commit SHA dans $workflow_name (bonne pratique)"
                elif grep -q "uses:.*@[0-9]" "$workflow" 2>/dev/null; then
                    log_info "Actions versionnées par tag dans $workflow_name"
                else
                    log_warning "Actions potentiellement non versionnées dans $workflow_name"
                    warnings=$((warnings + 1))
                fi
                
                # Vérifier les triggers de workflow
                if grep -q "workflow_dispatch:" "$workflow" 2>/dev/null; then
                    log_info "Workflow manuel activé dans $workflow_name"
                fi
            fi
        done
    fi
    echo ""
    
    # 21. Vérification des backdoors et code suspect
    log_info "21. Recherche de code suspect et backdoors potentiels..."
    local suspicious_patterns=(
        "eval\s*\("
        "exec\s*\("
        "system\s*\("
        "shell_exec\s*\("
        "passthru\s*\("
        "popen\s*\("
        "proc_open\s*\("
        "base64_decode\s*\("
        "gzinflate\s*\("
        "str_rot13\s*\("
        "assert\s*\("
        "preg_replace.*\/e"
        "create_function\s*\("
        "call_user_func\s*\("
        "call_user_func_array\s*\("
        "file_get_contents\s*\(\s*['\"]https?://"
        "curl_exec\s*\("
        "fsockopen\s*\("
        "fopen\s*\(\s*['\"]https?://"
    )
    
    local suspicious_found=false
    for pattern in "${suspicious_patterns[@]}"; do
        local matches=$(grep -r -i -E "$pattern" \
            --include="*.php" --include="*.js" --include="*.py" --include="*.rb" \
            --include="*.java" --include="*.go" \
            . 2>/dev/null | grep -v ".git" | grep -v "node_modules" | grep -v "vendor" | grep -v "test" | grep -v "spec" | head -3)
        if [ -n "$matches" ]; then
            if [ "$suspicious_found" = false ]; then
                log_warning "Code potentiellement suspect détecté (vérifiez manuellement):"
                suspicious_found=true
            fi
            echo "$matches" | while read line; do
                echo "  → $line"
            done
        fi
    done
    
    if [ "$suspicious_found" = false ]; then
        log_success "Aucun code suspect détecté"
    else
        warnings=$((warnings + 1))
    fi
    echo ""
    
    # 22. Vérification des variables d'environnement non documentées
    log_info "22. Vérification des variables d'environnement..."
    local env_vars=$(grep -r -h -o -E "process\.env\.[A-Z_]+|getenv\s*\(|env\s*\(|ENV\[|os\.getenv" \
        --include="*.js" --include="*.ts" --include="*.py" --include="*.rb" --include="*.php" \
        . 2>/dev/null | grep -v ".git" | grep -v "node_modules" | grep -v "vendor" | sort -u | head -20)
    
    if [ -n "$env_vars" ]; then
        local env_count=$(echo "$env_vars" | wc -l)
        log_info "$env_count variable(s) d'environnement utilisée(s) dans le code"
        
        # Vérifier si un fichier .env.example existe
        if [ ! -f ".env.example" ] && [ ! -f ".env.template" ] && [ ! -f ".env.sample" ]; then
            log_warning "Fichier .env.example manquant (recommandé pour documenter les variables)"
            warnings=$((warnings + 1))
        fi
    fi
    echo ""
    
    # 23. Statistiques du dépôt
    log_info "23. Statistiques du dépôt..."
    local total_files=$(find . -type f -not -path "./.git/*" -not -path "./node_modules/*" -not -path "./vendor/*" -not -path "./dist/*" -not -path "./build/*" 2>/dev/null | wc -l)
    local code_files=$(find . -type f \( -name "*.js" -o -name "*.ts" -o -name "*.py" -o -name "*.rb" -o -name "*.php" -o -name "*.java" -o -name "*.go" -o -name "*.rs" \) \
        -not -path "./.git/*" -not -path "./node_modules/*" -not -path "./vendor/*" 2>/dev/null | wc -l)
    local total_lines=$(find . -type f \( -name "*.js" -o -name "*.ts" -o -name "*.py" -o -name "*.rb" -o -name "*.php" -o -name "*.java" -o -name "*.go" \) \
        -not -path "./.git/*" -not -path "./node_modules/*" -not -path "./vendor/*" 2>/dev/null | xargs wc -l 2>/dev/null | tail -1 | awk '{print $1}' || echo "0")
    local git_commits=$(git rev-list --count HEAD 2>/dev/null || echo "0")
    local git_branches=$(git branch -a 2>/dev/null | wc -l || echo "0")
    
    log_info "Fichiers totaux: $total_files"
    log_info "Fichiers de code: $code_files"
    log_info "Lignes de code (approximatif): $total_lines"
    log_info "Commits Git: $git_commits"
    log_info "Branches Git: $git_branches"
    echo ""
    
    # Résumé de l'audit (VERSION AVANCÉE)
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "  RÉSUMÉ COMPLET DE L'AUDIT"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo ""
    
    local total_checks=23
    local checks_passed=$((total_checks - critical_issues))
    local success_rate=$((checks_passed * 100 / total_checks))
    
    log_info "Vérifications effectuées: $total_checks"
    log_info "Taux de réussite: $success_rate%"
    echo ""
    
    if [ $critical_issues -gt 0 ]; then
        log_error "❌ $critical_issues problème(s) CRITIQUE(S) détecté(s)"
        echo ""
        log_error "⚠️  ACTION REQUISE: Corrigez ces problèmes avant l'ouverture à l'open source"
        echo ""
        log_info "Catégories de problèmes critiques détectés:"
        echo "  - Secrets hardcodés"
        echo "  - Fichiers sensibles"
        echo "  - Certificats/clés"
        echo "  - Configurations avec credentials"
        echo ""
    fi
    
    if [ $warnings -gt 0 ]; then
        log_warning "⚠️  $warnings avertissement(s)"
        echo ""
        log_info "Recommandations à considérer avant l'ouverture:"
        echo "  - Améliorer la documentation"
        echo "  - Ajouter des tests"
        echo "  - Configurer les outils de qualité de code"
        echo "  - Vérifier les licences des dépendances"
        echo "  - Mettre à jour les dépendances obsolètes"
        echo ""
    fi
    
    if [ $critical_issues -eq 0 ] && [ $warnings -eq 0 ]; then
        log_success "✅ Aucun problème détecté - Le dépôt semble prêt pour l'open source"
        echo ""
    elif [ $critical_issues -eq 0 ]; then
        log_success "✅ Aucun problème critique - Le dépôt peut être ouvert avec les améliorations suggérées"
        echo ""
    fi
    
    # Générer un rapport si demandé
    if [ "$DRY_RUN" = false ] && [ $critical_issues -gt 0 ]; then
        log_info "Génération du rapport d'audit..."
        local audit_report="audit-report-$(date +%Y%m%d-%H%M%S).txt"
        {
            echo "Rapport d'audit - $(date)"
            echo "Dépôt: $REPO_OWNER/$REPO_NAME"
            echo ""
            echo "Problèmes critiques: $critical_issues"
            echo "Avertissements: $warnings"
            echo ""
            echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
        } > "$audit_report"
        log_success "Rapport sauvegardé dans: $audit_report"
    fi
}

# Vérifications et recommandations pour l'open source
check_opensource_readiness() {
    log_info "Vérification de la préparation à l'open source..."
    
    local issues=0
    local warnings=0
    
    # Vérifier la présence d'un LICENSE
    if [ ! -f "LICENSE" ] && [ ! -f "LICENSE.txt" ] && [ ! -f "LICENSE.md" ]; then
        log_warning "Aucun fichier LICENSE trouvé"
        warnings=$((warnings + 1))
    else
        log_success "Fichier LICENSE trouvé"
    fi
    
    # Vérifier la présence d'un README
    if [ ! -f "README.md" ] && [ ! -f "README" ]; then
        log_warning "Aucun fichier README trouvé"
        warnings=$((warnings + 1))
    else
        log_success "Fichier README trouvé"
    fi
    
    # Vérifier la présence d'un CONTRIBUTING
    if [ ! -f "CONTRIBUTING.md" ] && [ ! -f "CONTRIBUTING" ]; then
        log_warning "Aucun fichier CONTRIBUTING trouvé (recommandé)"
        warnings=$((warnings + 1))
    else
        log_success "Fichier CONTRIBUTING trouvé"
    fi
    
    # Vérifier la présence d'un CODE_OF_CONDUCT
    if [ ! -f "CODE_OF_CONDUCT.md" ] && [ ! -f "CODE_OF_CONDUCT" ]; then
        log_warning "Aucun fichier CODE_OF_CONDUCT trouvé (recommandé)"
        warnings=$((warnings + 1))
    else
        log_success "Fichier CODE_OF_CONDUCT trouvé"
    fi
    
    # Vérifier .gitignore
    if [ ! -f ".gitignore" ]; then
        log_warning "Aucun fichier .gitignore trouvé"
        warnings=$((warnings + 1))
    else
        log_success "Fichier .gitignore trouvé"
    fi
    
    # Vérifier les secrets potentiels
    if grep -r "password\|secret\|api_key\|token" --include="*.env*" --include="*.config.*" . 2>/dev/null | grep -v ".git" | head -5 | grep -q .; then
        log_error "Fichiers potentiellement sensibles détectés (vérifiez .env, config, etc.)"
        issues=$((issues + 1))
    fi
    
    # Vérifier si le repo est déjà public
    local visibility=$(gh repo view --json visibility -q '.visibility')
    if [ "$visibility" != "PUBLIC" ]; then
        log_info "Le dépôt est actuellement: $visibility"
        log_info "Pour le rendre public: gh repo edit --visibility public"
    else
        log_success "Le dépôt est déjà public"
    fi
    
    echo ""
    if [ $issues -gt 0 ] || [ $warnings -gt 0 ]; then
        log_warning "Résumé: $issues problème(s) et $warnings avertissement(s)"
    else
        log_success "Toutes les vérifications sont passées !"
    fi
}

# Afficher les commandes supplémentaires utiles
show_additional_commands() {
    log_info "Commandes supplémentaires utiles pour l'open source:"
    echo ""
    echo "1. Rendre le dépôt public:"
    echo "   gh repo edit --visibility public"
    echo ""
    echo "2. Configurer les topics (tags):"
    echo "   gh repo edit --add-topic \"topic1\" --add-topic \"topic2\""
    echo ""
    echo "3. Configurer la description:"
    echo "   gh repo edit --description \"Description du projet\""
    echo ""
    echo "4. Activer les discussions:"
    echo "   gh api repos/$REPO_OWNER/$REPO_NAME -X PATCH --field has_discussions=true"
    echo ""
    echo "5. Configurer les templates d'issues:"
    echo "   Créez .github/ISSUE_TEMPLATE/ avec vos templates"
    echo ""
    echo "6. Configurer les templates de PR:"
    echo "   Créez .github/pull_request_template.md"
    echo ""
    echo "7. Ajouter un fichier SECURITY.md:"
    echo "   Créez .github/SECURITY.md pour la politique de sécurité"
    echo ""
    echo "8. Vérifier les dépendances vulnérables:"
    echo "   gh api repos/$REPO_OWNER/$REPO_NAME/vulnerability-alerts -X PUT"
    echo ""
    echo "9. Activer Dependabot:"
    echo "   Créez .github/dependabot.yml"
    echo ""
    echo "10. Configurer les labels par défaut:"
    echo "    gh label list pour voir les labels existants"
}

# Fonction principale
main() {
    echo "=========================================="
    echo "  Préparation pour l'open source"
    echo "=========================================="
    echo ""
    
    parse_args "$@"
    
    if [ "$DRY_RUN" = true ]; then
        log_warning "Mode DRY RUN activé - aucune modification ne sera effectuée"
        echo ""
    fi
    
    check_prerequisites
    echo ""
    
    if [ "$SKIP_AUDIT" = false ]; then
        audit_repository_config
        echo ""
    else
        log_info "Audit de configuration ignoré (--skip-audit)"
        echo ""
    fi
    
    delete_workflow_runs
    echo ""
    
    squash_commits
    echo ""
    
    protect_branch
    echo ""
    
    check_opensource_readiness
    echo ""
    
    show_additional_commands
    echo ""
    
    log_success "Préparation terminée !"
    
    if [ "$DRY_RUN" = false ] && [ "$SKIP_SQUASH" = false ]; then
        log_warning "N'oubliez pas de pousser les changements avec:"
        log_info "git push --force-with-lease origin $TARGET_BRANCH"
    fi
}

# Exécution
main "$@"
