// Fonction pour normaliser les catégories
function normalizeCategories(cats) {
  if (!cats || !Array.isArray(cats)) return [];
  return cats
    .map(function(cat) {
      if (typeof cat === 'string') {
        return cat;
      }
      if (typeof cat === 'object' && cat !== null) {
        if (cat._) {
          return cat._;
        }
        const values = Object.values(cat);
        const stringValue = values.find(function(v) { return typeof v === 'string'; });
        return stringValue || '';
      }
      return '';
    })
    .filter(function(cat) { return cat && cat.trim() !== ''; });
}

// État des filtres
let selectedSources = new Set();
let selectedCategories = new Set();

// Fonction de filtrage
function filterArticles() {
  const articles = document.querySelectorAll('[data-article]');
  let visibleCount = 0;

  articles.forEach(function(article) {
    const articleElement = article;
    const articleSource = articleElement.dataset.articleSource || '';
    let articleCategories = [];
    try {
      articleCategories = JSON.parse(articleElement.dataset.articleCategories || '[]');
    } catch (e) {
      articleCategories = [];
    }
    const normalizedCats = normalizeCategories(articleCategories);

    const matchesSource = selectedSources.size === 0 || selectedSources.has(articleSource);
    const matchesCategory = selectedCategories.size === 0 || normalizedCats.some(function(cat) {
      return selectedCategories.has(cat);
    });

    if (matchesSource && matchesCategory) {
      // Afficher l'article s'il correspond aux filtres
      // Les articles masqués par infinite scroll (classe hidden) restent masqués
      // jusqu'à ce qu'ils soient chargés par infinite scroll
      if (!articleElement.classList.contains('hidden')) {
        articleElement.style.display = '';
        visibleCount++;
      } else {
        // Article masqué par infinite scroll mais correspond aux filtres
        // On ne l'affiche pas encore, il sera affiché quand infinite scroll le chargera
        articleElement.style.display = 'none';
      }
    } else {
      articleElement.style.display = 'none';
    }
  });

  // Mettre à jour le compteur
  const counter = document.getElementById('article-counter');
  if (counter) {
    counter.textContent = visibleCount + ' article' + (visibleCount > 1 ? 's' : '');
  }

  // Afficher un message si aucun résultat
  const grid = document.getElementById('articles-grid');
  const emptyState = document.getElementById('empty-state');
  
  if (visibleCount === 0 && grid && emptyState) {
    emptyState.style.display = 'block';
    grid.style.display = 'none';
  } else if (grid && emptyState) {
    emptyState.style.display = 'none';
    grid.style.display = 'grid';
  }
}

// Fonction pour mettre à jour le compteur de sélection des catégories
function updateSelectedCount() {
  const count = selectedCategories.size;
  const countElement = document.getElementById('selected-count');
  if (countElement) {
    if (count === 0) {
      countElement.textContent = 'Aucune sélection';
    } else {
      countElement.textContent = `${count} sélectionnée${count > 1 ? 's' : ''}`;
    }
  }
}

// Fonction pour mettre à jour le compteur de sélection des sources
function updateSelectedSourcesCount() {
  const count = selectedSources.size;
  const countElement = document.getElementById('selected-sources-count');
  if (countElement) {
    if (count === 0) {
      countElement.textContent = 'Aucune sélection';
    } else {
      countElement.textContent = `${count} sélectionnée${count > 1 ? 's' : ''}`;
    }
  }
}

// Fonction d'initialisation
function initFilters() {
  // Recherche de sources
  const sourceSearchInput = document.getElementById('source-search');
  if (sourceSearchInput) {
    sourceSearchInput.addEventListener('input', function(e) {
      const target = e.target || e.currentTarget;
      const searchTerm = target.value.toLowerCase();
      const sourceLabels = document.querySelectorAll('#sources-list label');
      
      sourceLabels.forEach(function(label) {
        const text = label.textContent ? label.textContent.toLowerCase() : '';
        if (text.includes(searchTerm)) {
          label.style.display = '';
        } else {
          label.style.display = 'none';
        }
      });
    });
  }

  // Recherche de catégories
  const searchInput = document.getElementById('category-search');
  if (searchInput) {
    searchInput.addEventListener('input', function(e) {
      const target = e.target || e.currentTarget;
      const searchTerm = target.value.toLowerCase();
      const categoryLabels = document.querySelectorAll('#categories-list label');
      
      categoryLabels.forEach(function(label) {
        const text = label.textContent ? label.textContent.toLowerCase() : '';
        if (text.includes(searchTerm)) {
          label.style.display = '';
        } else {
          label.style.display = 'none';
        }
      });
    });
  }

  // Gestionnaires pour les checkboxes de sources
  document.querySelectorAll('.source-checkbox').forEach(function(checkbox) {
    checkbox.addEventListener('change', function(e) {
      const target = e.target || e.currentTarget;
      const source = target.value;
      
      if (target.checked) {
        selectedSources.add(source);
      } else {
        selectedSources.delete(source);
      }
      
      updateSelectedSourcesCount();
      filterArticles();
    });
  });

  // Gestionnaires pour les checkboxes de catégories
  document.querySelectorAll('.category-checkbox').forEach(function(checkbox) {
    checkbox.addEventListener('change', function(e) {
      const target = e.target || e.currentTarget;
      const category = target.value;
      
      if (target.checked) {
        selectedCategories.add(category);
      } else {
        selectedCategories.delete(category);
      }
      
      updateSelectedCount();
      filterArticles();
    });
  });

  // Bouton "Tout sélectionner" pour les sources
  const selectAllSourcesBtn = document.getElementById('select-all-sources');
  if (selectAllSourcesBtn) {
    selectAllSourcesBtn.addEventListener('click', function() {
      const checkboxes = document.querySelectorAll('.source-checkbox');
      checkboxes.forEach(function(checkbox) {
        const label = checkbox.closest('label');
        if (label && label.style.display !== 'none') {
          checkbox.checked = true;
          selectedSources.add(checkbox.value);
        }
      });
      updateSelectedSourcesCount();
      filterArticles();
    });
  }

  // Bouton "Tout désélectionner" pour les sources
  const deselectAllSourcesBtn = document.getElementById('deselect-all-sources');
  if (deselectAllSourcesBtn) {
    deselectAllSourcesBtn.addEventListener('click', function() {
      const checkboxes = document.querySelectorAll('.source-checkbox');
      checkboxes.forEach(function(checkbox) {
        checkbox.checked = false;
      });
      selectedSources.clear();
      updateSelectedSourcesCount();
      filterArticles();
    });
  }

  // Bouton "Tout sélectionner" pour les catégories
  const selectAllBtn = document.getElementById('select-all-categories');
  if (selectAllBtn) {
    selectAllBtn.addEventListener('click', function() {
      const checkboxes = document.querySelectorAll('.category-checkbox');
      checkboxes.forEach(function(checkbox) {
        const label = checkbox.closest('label');
        if (label && label.style.display !== 'none') {
          checkbox.checked = true;
          selectedCategories.add(checkbox.value);
        }
      });
      updateSelectedCount();
      filterArticles();
    });
  }

  // Bouton "Tout désélectionner" pour les catégories
  const deselectAllBtn = document.getElementById('deselect-all-categories');
  if (deselectAllBtn) {
    deselectAllBtn.addEventListener('click', function() {
      const checkboxes = document.querySelectorAll('.category-checkbox');
      checkboxes.forEach(function(checkbox) {
        checkbox.checked = false;
      });
      selectedCategories.clear();
      updateSelectedCount();
      filterArticles();
    });
  }

}

// Initialiser les gestionnaires d'événements
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initFilters);
} else {
  initFilters();
}
