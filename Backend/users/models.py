from django.db import models


# Create your models here.
class User(models.Model):
    username = models.CharField(
        verbose_name="Username", null=False, max_length=32, unique=True
    )
    password = models.CharField(
        unique=False,
        null=False,
        verbose_name="Password",
    )
    email = models.CharField(
        unique=True,
        null=False,
        verbose_name="Email",
    )
    class Meta:
        db_table = "users"
        verbose_name = 'user'
        verbose_name_plural = 'users'
        ordering = ['id']