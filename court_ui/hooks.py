from . import __version__ as app_version

app_name = "court_ui"
app_title = "Court UI"
app_publisher = "Your Company"
app_description = "Modern UI Theme for Court Management System"
app_icon = "octicon octicon-law"
app_color = "blue"
app_email = "your@email.com"
app_license = "MIT"
app_version = app_version

# Include JS and CSS files
app_include_js = ["/assets/court_ui/js/court_ui.bundle.js"]
app_include_css = ["/assets/court_ui/css/court_ui.bundle.css"]

# Desk Notifications
notification_config = "court_ui.notifications.get_notification_config"

# Fixtures
fixtures = [
    {
        "doctype": "Custom Field",
        "filters": [
            ["name", "in", [
                "Case-custom_status",
                "Hearing-custom_priority"
            ]]
        ]
    }
]

# Additional Page Configurations
calendars = [
    {
        "doctype": "Court Hearing",
        "field_map": {
            "start": "hearing_date",
            "end": "hearing_end_date",
            "id": "name",
            "title": "case_number",
            "allDay": "all_day"
        }
    }
]

# Override Doctype Dashboards
override_doctype_dashboards = {
    "Case": "court_ui.court_ui.dashboard.case.get_data",
    "Hearing": "court_ui.court_ui.dashboard.hearing.get_data",
    "Fine": "court_ui.court_ui.dashboard.fine.get_data"
}

# Website Theme Templates
website_theme_templates = [
    {
        "name": "Court Theme",
        "template": "templates/court_theme.html"
    }
]