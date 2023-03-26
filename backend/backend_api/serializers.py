from rest_framework import serializers

from backend_api.models import UserName

class UserNameSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserName
        fields = ('username','created','endTime')