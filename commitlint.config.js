export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Type doit être en minuscules
    'type-case': [2, 'always', 'lower-case'],
    // Type ne peut pas être vide
    'type-empty': [2, 'never'],
    // Portée optionnelle mais doit être en minuscules si présente
    'scope-case': [2, 'always', 'lower-case'],
    // Description ne peut pas être vide
    'subject-empty': [2, 'never'],
    // Description ne doit pas se terminer par un point
    'subject-full-stop': [2, 'never', '.'],
    // Description doit commencer par une minuscule
    'subject-case': [2, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],
    // Types autorisés selon Conventional Commits
    'type-enum': [
      2,
      'always',
      [
        'feat',     // Nouvelle fonctionnalité
        'fix',      // Correction de bug
        'docs',     // Documentation
        'style',    // Formatage, point-virgules manquants, etc.
        'refactor', // Refactorisation du code
        'perf',     // Amélioration des performances
        'test',     // Ajout ou modification de tests
        'build',    // Changements du système de build
        'ci',       // Changements de configuration CI
        'chore',    // Tâches de maintenance
        'revert',   // Annulation d'un commit précédent
      ],
    ],
  },
};
