// Gestion du thème dark/light
function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIconLight = document.getElementById('theme-icon-light');
    const themeIconDark = document.getElementById('theme-icon-dark');
    
    function updateIcons() {
        const html = document.documentElement;
        const isDark = html.classList.contains('dark');
        
        if (themeIconLight && themeIconDark) {
            if (isDark) {
                // Mode sombre : afficher l'icône soleil (light)
                themeIconLight.classList.remove('hidden');
                themeIconLight.classList.add('block');
                themeIconDark.classList.remove('block');
                themeIconDark.classList.add('hidden');
            } else {
                // Mode clair : afficher l'icône lune (dark)
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
        
        // Appliquer le nouveau thème
        if (newTheme === 'dark') {
            html.classList.add('dark');
        } else {
            html.classList.remove('dark');
        }
        
        // Sauvegarder dans localStorage
        localStorage.setItem('theme', newTheme);
        
        // Mettre à jour les icônes
        updateIcons();
    }
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            toggleTheme();
        });
    }
    
    // Mettre à jour les icônes au chargement initial
    updateIcons();
}

// Initialiser le thème quand le DOM est prêt
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTheme);
} else {
    initTheme();
}
