import frappe

def get_data():
    return {
        'fieldname': 'hearing',
        'transactions': [
            {
                'label': 'Related Documents',
                'items': ['Hearing Document']
            },
            {
                'label': 'Decisions',
                'items': ['Court Decision']
            }
        ],
        'charts': [
            {
                'name': 'Hearing Schedule',
                'chart_name': 'Monthly Hearing Distribution',
                'chart_type': 'Bar'
            }
        ]
    }