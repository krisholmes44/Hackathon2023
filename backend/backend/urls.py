"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from backend_api import views
from django.views.generic import TemplateView
from rest_framework.routers import DefaultRouter
from backend_api.views import UserNameViewSet
from backend_api.views import save_user_name

router = DefaultRouter()
router.register(r'backend', UserNameViewSet, basename='backend')

urlpatterns = [
    path('', TemplateView.as_view(template_name='index.html')),
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('backend/', save_user_name, name='save_user_name'),
]