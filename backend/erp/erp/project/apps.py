from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class ProjectConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'project'
    name = "erp.project"
    verbose_name = _("Project")

    def ready(self):
        try:
            import erp.project.signals  # noqa: F401
        except ImportError:
            pass

