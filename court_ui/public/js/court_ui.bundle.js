frappe.provide('court_ui');

// Enhanced List View
frappe.views.ListView = class CourtListView extends frappe.views.ListView {
    get_args() {
        const args = super.get_args();
        if (this.doctype === 'Case') {
            args.fields = [...args.fields, 'status', 'priority', 'hearing_date'];
        }
        return args;
    }

    get_indicator(doc) {
        if (this.doctype === 'Case') {
            const colors = {
                'Pending': 'orange',
                'In Progress': 'blue',
                'Completed': 'green',
                'Urgent': 'red'
            };
            return [__(doc.status), colors[doc.status], 'status,=,' + doc.status];
        }
        return super.get_indicator(doc);
    }
}

// Enhanced Form View
frappe.ui.form.Form = class CourtForm extends frappe.ui.form.Form {
    refresh() {
        super.refresh();
        if (this.doctype === 'Case' || this.doctype === 'Hearing') {
            this.add_custom_buttons();
        }
    }

    add_custom_buttons() {
        if (this.doctype === 'Case') {
            this.add_case_buttons();
        } else if (this.doctype === 'Hearing') {
            this.add_hearing_buttons();
        }
    }

    add_case_buttons() {
        this.page.add_action_item(__('Schedule Hearing'), () => {
            frappe.new_doc('Court Hearing', {
                case: this.docname
            });
        });
    }

    add_hearing_buttons() {
        this.page.add_action_item(__('Record Decision'), () => {
            frappe.new_doc('Court Decision', {
                hearing: this.docname
            });
        });
    }
}