from __future__ import unicode_literals
import frappe

__version__ = '0.0.1'

def get_theme_info():
    return {
        "name": "Court UI Theme",
        "version": __version__
    }