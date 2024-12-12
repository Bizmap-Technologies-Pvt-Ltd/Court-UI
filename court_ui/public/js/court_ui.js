// Initialize Court UI enhancements
frappe.provide('court_ui');

// Initialize components namespace
frappe.provide('court_ui.components');

// Initialize utils namespace
frappe.provide('court_ui.utils');

court_ui.setup = function() {
    // Initialize keyboard shortcuts
    court_ui.utils.keyboard.init();
    
    // Register default shortcuts
    court_ui.utils.keyboard.register('ctrl+shift+c', () => frappe.new_doc('Case'), 'Create New Case');
    court_ui.utils.keyboard.register('ctrl+shift+h', () => frappe.new_doc('Court Hearing'), 'Schedule New Hearing');
    
    // Setup theme
    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addListener(() => {
            court_ui.utils.theme.toggleTheme();
        });
    }
    
    // Enhanced Quick Entry
    if (frappe.ui.form.QuickEntryForm) {
        frappe.ui.form.QuickEntryForm = court_ui.QuickEntryForm;
    }
    
    // Custom Workspace
    if (frappe.boot && frappe.boot.developer_mode) {
        frappe.workspace.pages['Court'] = court_ui.workspace;
    }
};

// Initialize when document is ready
$(document).ready(function() {
    court_ui.setup();
});