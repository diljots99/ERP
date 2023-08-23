from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class ProjectConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'updates'
    name = "erp.updates"
    verbose_name = _("Updates")

    def ready(self):
        try:
            import erp.updates.signals  # noqa: F401
        except ImportError:
            pass

