import frappe

def get_data():
    return {
        'fieldname': 'case',
        'transactions': [
            {
                'label': 'Hearings',
                'items': ['Court Hearing']
            },
            {
                'label': 'Fines',
                'items': ['Fine']
            },
            {
                'label': 'Documents',
                'items': ['Case Document']
            }
        ],
        'charts': [
            {
                'name': 'Case Status',
                'chart_name': 'Case Status Distribution',
                'chart_type': 'Donut'
            }
        ]
    }