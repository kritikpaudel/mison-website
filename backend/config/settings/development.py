from .base import *


# ==========================================================
# DEVELOPMENT
# ==========================================================

DEBUG = True


# ==========================================================
# REST FRAMEWORK
# ==========================================================

# Browsable API is useful while developing.
REST_FRAMEWORK["DEFAULT_RENDERER_CLASSES"] = [
    "rest_framework.renderers.JSONRenderer",
    "rest_framework.renderers.BrowsableAPIRenderer",
]


# ==========================================================
# DEVELOPMENT CORS
# ==========================================================

# Keep explicit origins rather than allowing every website.
CORS_ALLOW_ALL_ORIGINS = False