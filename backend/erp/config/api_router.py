from django.conf import settings
from rest_framework.routers import DefaultRouter, SimpleRouter
from rest_framework.authtoken import views
from django.urls import path


from erp.users.api.views import UserViewSet
from erp.project.views import ProjectViewSet
from erp.updates.views import DailyUpdateViewSet


from django.urls import re_path
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi


schema_view = get_schema_view(
   openapi.Info(
      title="Snippets API",
      default_version='v1',
      description="Test description",
      terms_of_service="https://www.google.com/policies/terms/",
      contact=openapi.Contact(email="contact@snippets.local"),
      license=openapi.License(name="BSD License"),
   ),
   public=True,
   permission_classes=(permissions.AllowAny,),
)



if settings.DEBUG:
    router = DefaultRouter()
else:
    router = SimpleRouter()

router.register("users", UserViewSet)
router.register("projects", ProjectViewSet)
router.register("updates", DailyUpdateViewSet)


app_name = "api"
urlpatterns = router.urls
urlpatterns += [
    path('api-token-auth/', views.obtain_auth_token),
    path('swagger<format>/', schema_view.without_ui(cache_timeout=0), name='schema-json'),
   path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
   path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]