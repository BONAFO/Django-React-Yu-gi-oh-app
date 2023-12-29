from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.hashers import make_password


# Create your models here.
class Cards(models.Model):
    # CARD NAME
    name = models.CharField(
         null=False, unique=True
    )
    # AMMOUNT OF STARS
    stars = models.CharField(
         max_length = 2, null=True, unique=False
    )
    # DARK, WATER
    attribute = models.CharField(
         max_length = 80, null=False, unique=False
    )
    # YUGIOHDB IMG URL
    url_img = models.TextField(
     null=True, unique=False
    )
    # MONSTER,EXTRA DECK, PENDULUM,SPELL CARD, TRAP CARD
    card_type = models.CharField(
         max_length = 50, null=False, unique=False
    )
    # DRAGON , MACHINE, 
    card_special_type = models.CharField(
         max_length = 120, null=False, unique=False
    )
    # MONSTER, PENDULUM, XYZ,SPEEL AND TRAPS = CONTINUOS
    card_special_subtype = models.CharField(
         max_length = 80, null=False, unique=False
    )
    # BOOL
    # TEXT DESCRIPTION OF THE CARD
    card_description = models.TextField(
        null=True, unique=False
    )
    # IF IS PENDULUMN, DESCRIPTION OF THE PENDULUM ZONE
    card_pendulum_description = models.TextField(
          null=True, unique=False
    )
    card_atk = models.CharField(
         max_length = 20, null=False, unique=False
    )
    card_def = models.CharField(
         max_length = 20, null=True, unique=False
    )
    # IF IT'S LIKN, LINK RANK
    card_link = models.CharField(
         max_length = 3, null=True, unique=False
    )
    card_rarity = models.CharField(
         max_length = 10, default='None', null=False, unique=False, 
    )
    card_rarity = models.CharField(
         max_length = 1, default='0', null=False, unique=False, 
    )
    class Meta:
        db_table = "api_cards"
        verbose_name = "api_card"
        verbose_name_plural = "api_cards"
        ordering = ["id"]
