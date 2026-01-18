// Gestion de la sidebar
const sidebar = document.getElementById('filters-sidebar');
const overlay = document.getElementById('sidebar-overlay');
const openBtn = document.getElementById('open-sidebar');
const openBtnDesktop = document.getElementById('open-sidebar-desktop');
const closeBtn = document.getElementById('close-sidebar');
const toggleBtnDesktop = document.getElementById('toggle-sidebar-desktop');
const mainContent = document.getElementById('main-content');

// Vérifier si on est sur desktop
function isDesktop() {
  return window.matchMedia('(min-width: 1024px)').matches;
}

function openSidebar() {
  if (!sidebar) return;
  
  // Retirer la classe hidden
  sidebar.classList.remove('sidebar-hidden');
  
  // Sauvegarder l'état
  localStorage.setItem('sidebar-open', 'true');
  
  // Sur mobile
  if (!isDesktop()) {
    if (overlay) overlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  } else {
    // Sur desktop
    if (openBtnDesktop) openBtnDesktop.classList.add('hidden');
  }
}

function closeSidebar() {
  if (!sidebar) return;
  
  // Ajouter la classe hidden
  sidebar.classList.add('sidebar-hidden');
  
  // Sauvegarder l'état
  localStorage.setItem('sidebar-open', 'false');
  
  // Sur mobile
  if (!isDesktop()) {
    if (overlay) overlay.classList.add('hidden');
    document.body.style.overflow = '';
  } else {
    // Sur desktop
    if (openBtnDesktop) openBtnDesktop.classList.remove('hidden');
  }
}

// Événements
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

// Fermer la sidebar avec la touche Escape
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeSidebar();
  }
});

// Initialisation au chargement de la page
// Par défaut, la sidebar est FERMÉE
document.addEventListener('DOMContentLoaded', function() {
  // Récupérer l'état sauvegardé, par défaut fermée
  const savedState = localStorage.getItem('sidebar-open');
  const shouldBeOpen = savedState === 'true';
  
  if (shouldBeOpen) {
    // Sidebar ouverte (état sauvegardé)
    sidebar.classList.remove('sidebar-hidden');
    if (isDesktop() && openBtnDesktop) {
      openBtnDesktop.classList.add('hidden');
    }
    if (!isDesktop() && overlay) {
      overlay.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  } else {
    // Sidebar fermée par défaut
    sidebar.classList.add('sidebar-hidden');
    if (isDesktop() && openBtnDesktop) {
      openBtnDesktop.classList.remove('hidden');
    }
    if (!isDesktop() && overlay) {
      overlay.classList.add('hidden');
    }
  }
});

// Gérer le redimensionnement de la fenêtre
window.addEventListener('resize', function() {
  if (!isDesktop()) {
    // Sur mobile, fermer la sidebar si elle est ouverte
    closeSidebar();
  }
});
