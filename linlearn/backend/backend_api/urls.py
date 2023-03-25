from django.urls import include, path

from rest_framework import routers

from backend_api.views import UserNameViewSet

router = routers.DefaultRouter()
router.register(r'username', UserNameViewSet)

urlpatterns = [
   path('', include(router.urls)),
]