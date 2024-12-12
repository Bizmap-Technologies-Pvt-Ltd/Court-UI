import frappe

def get_data():
    return {
        'fieldname': 'fine',
        'transactions': [
            {
                'label': 'Payments',
                'items': ['Payment Entry']
            },
            {
                'label': 'Disbursements',
                'items': ['Disbursement']
            }
        ],
        'charts': [
            {
                'name': 'Collection Status',
                'chart_name': 'Fine Collection Overview',
                'chart_type': 'Percentage'
            }
        ]
    }