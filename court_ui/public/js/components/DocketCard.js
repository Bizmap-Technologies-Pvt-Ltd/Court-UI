frappe.provide('court_ui.components');

court_ui.components.DocketCard = class DocketCard {
    constructor(opts) {
        Object.assign(this, opts);
        this.make();
    }

    make() {
        this.card = document.createElement('div');
        this.card.className = 'docket-card';
        this.render();
    }

    render() {
        this.card.innerHTML = `
            <div class="docket-header">
                <h3 class="docket-title">${this.title}</h3>
                <span class="case-status case-status-${this.status.toLowerCase()}">${this.status}</span>
            </div>
            <div class="docket-body">
                <p class="docket-description">${this.description}</p>
                <div class="docket-meta">
                    <span class="docket-date">${frappe.datetime.str_to_user(this.date)}</span>
                    <span class="docket-ref">#${this.reference}</span>
                </div>
            </div>
        `;
    }
};