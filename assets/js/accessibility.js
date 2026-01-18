/**
 * Accessibility preferences management
 */
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

    // Load preferences from localStorage
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

    // Save preferences to localStorage
    function savePreferences() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(currentPrefs));
        } catch (e) {
            console.warn('Error saving accessibility preferences:', e);
        }
    }

    // Apply preferences to the DOM
    function applyPreferences() {
        const root = document.documentElement;

        // Apply CSS variable values
        root.style.setProperty('--font-size-multiplier', values.fontSize[currentPrefs.fontSize] || 1);
        root.style.setProperty('--line-height-value', values.lineHeight[currentPrefs.lineHeight] || 1.5);
        root.style.setProperty('--letter-spacing-value', values.letterSpacing[currentPrefs.letterSpacing] || '0em');
        root.style.setProperty('--word-spacing-value', values.wordSpacing[currentPrefs.wordSpacing] || '0em');

        // High contrast
        if (currentPrefs.highContrast) {
            root.setAttribute('data-contrast', 'high');
        } else {
            root.removeAttribute('data-contrast');
        }

        // Dyslexia font
        if (currentPrefs.dyslexiaFont) {
            root.setAttribute('data-dyslexia-font', 'true');
            loadDyslexiaFont();
        } else {
            root.removeAttribute('data-dyslexia-font');
        }

        // Update UI buttons
        updateUIState();
    }

    // Load OpenDyslexic font
    function loadDyslexiaFont() {
        if (!document.getElementById('dyslexia-font-link')) {
            const link = document.createElement('link');
            link.id = 'dyslexia-font-link';
            link.rel = 'stylesheet';
            link.href = 'https://cdn.jsdelivr.net/npm/@fontsource/opendyslexic@5.2.5/index.min.css';
            document.head.appendChild(link);
        }
    }

    // Update button states in the UI
    function updateUIState() {
        // Update option buttons
        document.querySelectorAll('[data-setting]').forEach(btn => {
            const setting = btn.dataset.setting;
            const value = btn.dataset.value;
            btn.classList.toggle('active', currentPrefs[setting] === value);
        });

        // Update checkboxes
        const contrastCheckbox = document.getElementById('high-contrast');
        const dyslexiaCheckbox = document.getElementById('dyslexia-font');

        if (contrastCheckbox) contrastCheckbox.checked = currentPrefs.highContrast;
        if (dyslexiaCheckbox) dyslexiaCheckbox.checked = currentPrefs.dyslexiaFont;
    }

    // Set a preference value
    function setPreference(key, value) {
        currentPrefs[key] = value;
        savePreferences();
        applyPreferences();
    }

    // Reset all preferences
    function resetPreferences() {
        currentPrefs = { ...defaults };
        savePreferences();
        applyPreferences();
    }

    // Modal management
    function openModal() {
        const overlay = document.getElementById('a11y-modal-overlay');
        const modal = document.getElementById('a11y-modal');
        if (overlay && modal) {
            overlay.classList.add('active');
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
            // Focus first interactive element
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

    // Initialize event listeners
    function initEventListeners() {
        // Option buttons
        document.querySelectorAll('[data-setting]').forEach(btn => {
            btn.addEventListener('click', () => {
                setPreference(btn.dataset.setting, btn.dataset.value);
            });
        });

        // Checkboxes
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

        // Reset button
        const resetBtn = document.getElementById('reset-accessibility');
        if (resetBtn) {
            resetBtn.addEventListener('click', resetPreferences);
        }

        // Modal open button
        const openBtn = document.getElementById('a11y-toggle');
        if (openBtn) {
            openBtn.addEventListener('click', openModal);
        }

        // Modal close button
        const closeBtn = document.getElementById('a11y-modal-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', closeModal);
        }

        // Close on overlay click
        const overlay = document.getElementById('a11y-modal-overlay');
        if (overlay) {
            overlay.addEventListener('click', closeModal);
        }

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeModal();
            }
        });
    }

    // Initialize on DOM ready
    function init() {
        loadPreferences();
        applyPreferences();

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initEventListeners);
        } else {
            initEventListeners();
        }
    }

    // Start initialization
    init();

    // Expose API for external use
    window.accessibilityPrefs = {
        get: () => ({ ...currentPrefs }),
        set: setPreference,
        reset: resetPreferences,
        openModal: openModal,
        closeModal: closeModal
    };
})();
