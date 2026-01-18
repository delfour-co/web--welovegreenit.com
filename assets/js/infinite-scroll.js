/**
 * Gestion de l'infinite scroll pour charger les articles progressivement
 */

(function() {
  'use strict';

  const ARTICLES_PER_LOAD = 12;
  let currentVisibleCount = 12; // Les 12 premiers sont déjà visibles
  let isLoading = false;
  let allArticlesLoaded = false;

  /**
   * Charge les articles suivants
   */
  function loadMoreArticles() {
    if (isLoading || allArticlesLoaded) {
      return;
    }

    isLoading = true;
    const loader = document.querySelector('.infinite-scroll-loader');
    if (loader) {
      loader.classList.remove('hidden');
    }

    // Simuler un petit délai pour une meilleure UX
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
        // S'assurer que l'article est visible (peut être masqué par les filtres)
        article.style.display = '';
      });

      // Vérifier s'il reste des articles à charger
      const remainingArticles = document.querySelectorAll('.infinite-scroll-item.hidden');
      if (remainingArticles.length === 0) {
        allArticlesLoaded = true;
      }

      if (loader) {
        loader.classList.add('hidden');
      }

      isLoading = false;

      // Réappliquer les filtres après chargement pour masquer les articles qui ne correspondent pas
      if (typeof filterArticles === 'function') {
        filterArticles();
      }
    }, 300);
  }

  /**
   * Initialise l'infinite scroll avec Intersection Observer
   */
  function initInfiniteScroll() {
    const trigger = document.getElementById('infinite-scroll-trigger');
    if (!trigger) {
      return;
    }

    // Utiliser Intersection Observer pour détecter quand on approche du bas
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting && !isLoading && !allArticlesLoaded) {
          loadMoreArticles();
        }
      });
    }, {
      root: null,
      rootMargin: '200px', // Commencer à charger 200px avant d'atteindre le trigger
      threshold: 0.1
    });

    observer.observe(trigger);
  }

  /**
   * Réinitialise l'infinite scroll (utile après filtrage)
   */
  function resetInfiniteScroll() {
    // Ne pas réinitialiser complètement, juste permettre de charger plus si nécessaire
    const hiddenArticles = document.querySelectorAll('.infinite-scroll-item.hidden');
    if (hiddenArticles.length > 0) {
      allArticlesLoaded = false;
    }
  }

  /**
   * Fonction d'initialisation
   */
  function init() {
    // Vérifier le nombre total d'articles
    const totalArticles = document.querySelectorAll('[data-article]').length;
    if (totalArticles <= ARTICLES_PER_LOAD) {
      allArticlesLoaded = true;
      const trigger = document.getElementById('infinite-scroll-trigger');
      if (trigger) {
        trigger.style.display = 'none';
      }
      return;
    }

    initInfiniteScroll();

    // Exposer la fonction de reset pour les filtres
    window.resetInfiniteScroll = resetInfiniteScroll;
  }

  // Initialiser quand le DOM est prêt
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
