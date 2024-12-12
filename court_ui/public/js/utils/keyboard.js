// Keyboard shortcuts utilities
frappe.provide('court_ui.utils.keyboard');

court_ui.utils.keyboard = {
    shortcuts: {},

    register: (key, callback, description) => {
        court_ui.utils.keyboard.shortcuts[key] = {
            callback,
            description
        };
    },

    init: () => {
        document.addEventListener('keydown', (e) => {
            const key = `${e.ctrlKey ? 'ctrl+' : ''}${e.shiftKey ? 'shift+' : ''}${e.key}`;
            const shortcut = court_ui.utils.keyboard.shortcuts[key];
            
            if (shortcut) {
                e.preventDefault();
                shortcut.callback();
            }
        });
    }
};