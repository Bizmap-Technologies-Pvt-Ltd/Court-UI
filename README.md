# Court UI Theme for Frappe/ERPNext v15

A modern, responsive UI theme specifically designed for Court Management Systems built on Frappe/ERPNext v15.

## Features

- Modern and clean interface optimized for court management
- Enhanced dashboards for cases, hearings, and fines
- Custom components for court-specific functionality
- Improved navigation and workspace organization
- Keyboard shortcuts for common actions
- Responsive design for all screen sizes

## Installation

1. Get the app from GitHub:
```bash
bench get-app court_ui https://github.com/your-repo/court_ui
```

2. Install on your site:
```bash
bench --site your-site.com install-app court_ui
```

3. Build assets and restart:
```bash
bench build
bench restart
```

## Structure

```
court_ui/
├── court_ui/
│   ├── public/
│   │   ├── css/
│   │   │   ├── theme.css
│   │   │   └── components/
│   │   └── js/
│   │       └── court_ui.bundle.js
│   ├── dashboard/
│   │   ├── case.py
│   │   ├── hearing.py
│   │   └── fine.py
│   └── hooks.py
└── setup.py
```

## Customization

The theme can be customized by modifying:
- CSS variables in `variables.css`
- Component styles in respective CSS files
- Dashboard configurations in Python files
- JavaScript enhancements in `court_ui.bundle.js`

## License

MIT