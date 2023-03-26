from django.urls import include, path

from rest_framework import routers

from backend_api.views import UserNameViewSet
from . import views

router = routers.DefaultRouter()
router.register(r'username', UserNameViewSet)

urlpatterns = [
   path('', include(router.urls)),
   path('', views.index, name='index')
]