from django.shortcuts import render
from rest_framework import viewsets
# Create your views here.
from backend_api.serializers import UserNameSerializer
from backend_api.models import UserName


class UserNameViewSet(viewsets.ModelViewSet):
    queryset = UserName.objects.all()
    serializer_class = UserNameSerializer