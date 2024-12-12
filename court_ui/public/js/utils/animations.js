// Animation utilities
frappe.provide('court_ui.utils.animations');

court_ui.utils.animations = {
    fadeIn: (element, duration = 200) => {
        element.style.opacity = 0;
        element.style.transition = `opacity ${duration}ms`;
        setTimeout(() => element.style.opacity = 1, 10);
    },

    slideIn: (element, direction = 'right', duration = 200) => {
        const transforms = {
            right: 'translateX(20px)',
            left: 'translateX(-20px)',
            up: 'translateY(-20px)',
            down: 'translateY(20px)'
        };

        element.style.transform = transforms[direction];
        element.style.opacity = 0;
        element.style.transition = `all ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`;
        
        setTimeout(() => {
            element.style.transform = 'translate(0)';
            element.style.opacity = 1;
        }, 10);
    }
};