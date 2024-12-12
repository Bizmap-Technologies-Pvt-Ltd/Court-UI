// Theme utilities
frappe.provide('court_ui.utils.theme');

court_ui.utils.theme = {
    isDarkMode: () => {
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    },

    toggleTheme: () => {
        const root = document.documentElement;
        const isDark = court_ui.utils.theme.isDarkMode();
        
        const themes = {
            light: {
                '--background-color': '#f8fafc',
                '--text-color': '#1a202c'
            },
            dark: {
                '--background-color': '#1a202c',
                '--text-color': '#f8fafc'
            }
        };

        Object.entries(themes[isDark ? 'dark' : 'light']).forEach(([key, value]) => {
            root.style.setProperty(key, value);
        });
    }
};