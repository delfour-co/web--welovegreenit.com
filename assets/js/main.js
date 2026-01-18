// =====================================================
// BUNDLE JS PRINCIPAL - Tous les scripts combinés
// =====================================================

// Mobile menu toggle (déplacé depuis header.html)
(function() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
})();

// =====================================================
// THEME MANAGEMENT
// =====================================================
function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIconLight = document.getElementById('theme-icon-light');
    const themeIconDark = document.getElementById('theme-icon-dark');
    
    function updateIcons() {
        const html = document.documentElement;
        const isDark = html.classList.contains('dark');
        
        if (themeIconLight && themeIconDark) {
            if (isDark) {
                themeIconLight.classList.remove('hidden');
                themeIconLight.classList.add('block');
                themeIconDark.classList.remove('block');
                themeIconDark.classList.add('hidden');
            } else {
                themeIconLight.classList.remove('block');
                themeIconLight.classList.add('hidden');
                themeIconDark.classList.remove('hidden');
                themeIconDark.classList.add('block');
            }
        }
    }
    
    function toggleTheme() {
        const html = document.documentElement;
        const currentTheme = localStorage.getItem('theme') || 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        if (newTheme === 'dark') {
            html.classList.add('dark');
        } else {
            html.classList.remove('dark');
        }
        
        localStorage.setItem('theme', newTheme);
        updateIcons();
    }
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            toggleTheme();
        });
    }
    
    updateIcons();
}

// =====================================================
// FILTERS MANAGEMENT
// =====================================================
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

let selectedSources = new Set();
let selectedCategories = new Set();

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
      if (!articleElement.classList.contains('hidden')) {
        articleElement.style.display = '';
        visibleCount++;
      } else {
        articleElement.style.display = 'none';
      }
    } else {
      articleElement.style.display = 'none';
    }
  });

  const counter = document.getElementById('article-counter');
  if (counter) {
    counter.textContent = visibleCount + ' article' + (visibleCount > 1 ? 's' : '');
  }

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

function initFilters() {
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

// =====================================================
// INFINITE SCROLL
// =====================================================
(function() {
  'use strict';

  const ARTICLES_PER_LOAD = 12;
  let currentVisibleCount = 3;
  let isLoading = false;
  let allArticlesLoaded = false;

  function loadMoreArticles() {
    if (isLoading || allArticlesLoaded) {
      return;
    }

    isLoading = true;
    const loader = document.querySelector('.infinite-scroll-loader');
    if (loader) {
      loader.classList.remove('hidden');
    }

    setTimeout(function() {
      const hiddenArticles = document.querySelectorAll('.infinite-scroll-item.hidden');
      const articlesToShow = Array.from(hiddenArticles).slice(0, ARTICLES_PER_LOAD);

      if (articlesToShow.length === 0) {
        allArticlesLoaded = true;
        if (loader) {
          loader.classList.add('hidden');
        }
        isLoading = false;
        return;
      }

      articlesToShow.forEach(function(article) {
        article.classList.remove('hidden');
        currentVisibleCount++;
        article.style.display = '';
      });

      const remainingArticles = document.querySelectorAll('.infinite-scroll-item.hidden');
      if (remainingArticles.length === 0) {
        allArticlesLoaded = true;
      }

      if (loader) {
        loader.classList.add('hidden');
      }

      isLoading = false;

      if (typeof filterArticles === 'function') {
        filterArticles();
      }
    }, 300);
  }

  function initInfiniteScroll() {
    const trigger = document.getElementById('infinite-scroll-trigger');
    if (!trigger) {
      return;
    }

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting && !isLoading && !allArticlesLoaded) {
          loadMoreArticles();
        }
      });
    }, {
      root: null,
      rootMargin: '200px',
      threshold: 0.1
    });

    observer.observe(trigger);
  }

  function resetInfiniteScroll() {
    const hiddenArticles = document.querySelectorAll('.infinite-scroll-item.hidden');
    if (hiddenArticles.length > 0) {
      allArticlesLoaded = false;
    }
  }

  function init() {
    const totalArticles = document.querySelectorAll('[data-article]').length;
    if (totalArticles <= 3) {
      allArticlesLoaded = true;
      const trigger = document.getElementById('infinite-scroll-trigger');
      if (trigger) {
        trigger.style.display = 'none';
      }
      return;
    }

    initInfiniteScroll();
    window.resetInfiniteScroll = resetInfiniteScroll;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

// =====================================================
// SIDEBAR MANAGEMENT
// =====================================================
(function() {
  const sidebar = document.getElementById('filters-sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  const openBtn = document.getElementById('open-sidebar');
  const openBtnDesktop = document.getElementById('open-sidebar-desktop');
  const closeBtn = document.getElementById('close-sidebar');
  const toggleBtnDesktop = document.getElementById('toggle-sidebar-desktop');

  function isDesktop() {
    return window.matchMedia('(min-width: 1024px)').matches;
  }

  function openSidebar() {
    if (!sidebar) return;
    
    sidebar.classList.remove('sidebar-hidden');
    localStorage.setItem('sidebar-open', 'true');
    
    if (!isDesktop()) {
      if (overlay) overlay.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    } else {
      if (openBtnDesktop) openBtnDesktop.classList.add('hidden');
    }
  }

  function closeSidebar() {
    if (!sidebar) return;
    
    sidebar.classList.add('sidebar-hidden');
    localStorage.setItem('sidebar-open', 'false');
    
    if (!isDesktop()) {
      if (overlay) overlay.classList.add('hidden');
      document.body.style.overflow = '';
    } else {
      if (openBtnDesktop) openBtnDesktop.classList.remove('hidden');
    }
  }

  if (openBtn) {
    openBtn.addEventListener('click', function(e) {
      e.preventDefault();
      openSidebar();
    });
  }

  if (openBtnDesktop) {
    openBtnDesktop.addEventListener('click', function(e) {
      e.preventDefault();
      openSidebar();
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', function(e) {
      e.preventDefault();
      closeSidebar();
    });
  }

  if (toggleBtnDesktop) {
    toggleBtnDesktop.addEventListener('click', function(e) {
      e.preventDefault();
      closeSidebar();
    });
  }

  if (overlay) {
    overlay.addEventListener('click', function(e) {
      e.preventDefault();
      closeSidebar();
    });
  }

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeSidebar();
    }
  });

  document.addEventListener('DOMContentLoaded', function() {
    const savedState = localStorage.getItem('sidebar-open');
    const shouldBeOpen = savedState === 'true';
    
    if (shouldBeOpen) {
      sidebar.classList.remove('sidebar-hidden');
      if (isDesktop() && openBtnDesktop) {
        openBtnDesktop.classList.add('hidden');
      }
      if (!isDesktop() && overlay) {
        overlay.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      }
    } else {
      sidebar.classList.add('sidebar-hidden');
      if (isDesktop() && openBtnDesktop) {
        openBtnDesktop.classList.remove('hidden');
      }
      if (!isDesktop() && overlay) {
        overlay.classList.add('hidden');
      }
    }
  });

  window.addEventListener('resize', function() {
    if (!isDesktop()) {
      closeSidebar();
    }
  });
})();

// =====================================================
// ACCESSIBILITY MANAGEMENT
// =====================================================
(function() {
    const STORAGE_KEY = 'accessibility-preferences';

    const defaults = {
        fontSize: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        wordSpacing: 'normal',
        highContrast: false,
        dyslexiaFont: false
    };

    const values = {
        fontSize: { small: 0.875, normal: 1, large: 1.125 },
        lineHeight: { tight: 1.3, normal: 1.5, loose: 2 },
        letterSpacing: { tight: '-0.025em', normal: '0em', wide: '0.075em' },
        wordSpacing: { tight: '-0.025em', normal: '0em', wide: '0.15em' }
    };

    let currentPrefs = { ...defaults };

    function loadPreferences() {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (stored) {
                currentPrefs = { ...defaults, ...JSON.parse(stored) };
            }
        } catch (e) {
            console.warn('Error loading accessibility preferences:', e);
        }
        return currentPrefs;
    }

    function savePreferences() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(currentPrefs));
        } catch (e) {
            console.warn('Error saving accessibility preferences:', e);
        }
    }

    function applyPreferences() {
        const root = document.documentElement;

        root.style.setProperty('--font-size-multiplier', values.fontSize[currentPrefs.fontSize] || 1);
        root.style.setProperty('--line-height-value', values.lineHeight[currentPrefs.lineHeight] || 1.5);
        root.style.setProperty('--letter-spacing-value', values.letterSpacing[currentPrefs.letterSpacing] || '0em');
        root.style.setProperty('--word-spacing-value', values.wordSpacing[currentPrefs.wordSpacing] || '0em');

        if (currentPrefs.highContrast) {
            root.setAttribute('data-contrast', 'high');
        } else {
            root.removeAttribute('data-contrast');
        }

        if (currentPrefs.dyslexiaFont) {
            root.setAttribute('data-dyslexia-font', 'true');
            loadDyslexiaFont();
        } else {
            root.removeAttribute('data-dyslexia-font');
        }

        updateUIState();
    }

    function loadDyslexiaFont() {
        if (!document.getElementById('dyslexia-font-link')) {
            const link = document.createElement('link');
            link.id = 'dyslexia-font-link';
            link.rel = 'stylesheet';
            link.href = 'https://cdn.jsdelivr.net/npm/@fontsource/opendyslexic@5.2.5/index.min.css';
            link.media = 'print';
            link.onload = function() { this.media = 'all'; };
            document.head.appendChild(link);
        }
    }

    function updateUIState() {
        document.querySelectorAll('[data-setting]').forEach(btn => {
            const setting = btn.dataset.setting;
            const value = btn.dataset.value;
            btn.classList.toggle('active', currentPrefs[setting] === value);
        });

        const contrastCheckbox = document.getElementById('high-contrast');
        const dyslexiaCheckbox = document.getElementById('dyslexia-font');

        if (contrastCheckbox) contrastCheckbox.checked = currentPrefs.highContrast;
        if (dyslexiaCheckbox) dyslexiaCheckbox.checked = currentPrefs.dyslexiaFont;
    }

    function setPreference(key, value) {
        currentPrefs[key] = value;
        savePreferences();
        applyPreferences();
    }

    function resetPreferences() {
        currentPrefs = { ...defaults };
        savePreferences();
        applyPreferences();
    }

    function openModal() {
        const overlay = document.getElementById('a11y-modal-overlay');
        const modal = document.getElementById('a11y-modal');
        if (overlay && modal) {
            overlay.classList.add('active');
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
            const firstBtn = modal.querySelector('button, [tabindex]:not([tabindex="-1"])');
            if (firstBtn) firstBtn.focus();
        }
    }

    function closeModal() {
        const overlay = document.getElementById('a11y-modal-overlay');
        const modal = document.getElementById('a11y-modal');
        if (overlay && modal) {
            overlay.classList.remove('active');
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    function initEventListeners() {
        document.querySelectorAll('[data-setting]').forEach(btn => {
            btn.addEventListener('click', () => {
                setPreference(btn.dataset.setting, btn.dataset.value);
            });
        });

        const contrastCheckbox = document.getElementById('high-contrast');
        const dyslexiaCheckbox = document.getElementById('dyslexia-font');

        if (contrastCheckbox) {
            contrastCheckbox.addEventListener('change', (e) => {
                setPreference('highContrast', e.target.checked);
            });
        }

        if (dyslexiaCheckbox) {
            dyslexiaCheckbox.addEventListener('change', (e) => {
                setPreference('dyslexiaFont', e.target.checked);
            });
        }

        const resetBtn = document.getElementById('reset-accessibility');
        if (resetBtn) {
            resetBtn.addEventListener('click', resetPreferences);
        }

        const openBtn = document.getElementById('a11y-toggle');
        if (openBtn) {
            openBtn.addEventListener('click', openModal);
        }

        const closeBtn = document.getElementById('a11y-modal-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', closeModal);
        }

        const overlay = document.getElementById('a11y-modal-overlay');
        if (overlay) {
            overlay.addEventListener('click', closeModal);
        }

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeModal();
            }
        });
    }

    function init() {
        loadPreferences();
        applyPreferences();

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initEventListeners);
        } else {
            initEventListeners();
        }
    }

    init();

    window.accessibilityPrefs = {
        get: () => ({ ...currentPrefs }),
        set: setPreference,
        reset: resetPreferences,
        openModal: openModal,
        closeModal: closeModal
    };
})();

// =====================================================
// INITIALIZATION
// =====================================================
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        initTheme();
        initFilters();
    });
} else {
    initTheme();
    initFilters();
}
