from django.db import models

# Create your models here.
class UserName(models.Model):
    username = models.CharField(max_length=150)
    created = models.DateTimeField(auto_now_add=True) 
