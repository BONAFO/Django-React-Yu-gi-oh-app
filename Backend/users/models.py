from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.hashers import make_password

# Create your models here.
class User(AbstractUser):
    username = models.CharField(
        verbose_name="Username", null=False, max_length=32, unique=True
    )
    password = models.CharField(
        max_length=255,
        unique=False,
        null=False,
        verbose_name="Password"

    )
    email = models.CharField(
        max_length=125,
        unique=True,
        null=False,
        verbose_name="Email"
        
    )
    class Meta:
        db_table = "api_users"
        verbose_name = 'api_user'
        verbose_name_plural = 'api_users'
        ordering = ['id']
        
    def set_password(self,password):
        return make_password(password)