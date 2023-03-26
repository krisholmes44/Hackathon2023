from django.shortcuts import render
from rest_framework import viewsets
from backend_api.serializers import UserNameSerializer
from backend_api.models import UserName
from rest_framework.response import Response
from rest_framework import status
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
import json
import sqlite3
from django.http import JsonResponse

def index(request):
    return render(request, 'index.html')



class UserNameViewSet(viewsets.ModelViewSet):
    queryset = UserName.objects.all()
    serializer_class = UserNameSerializer

@api_view(['POST'])
def save_user_name(request):
    serializer = UserNameSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)