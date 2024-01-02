from django.db import models

# CARD ATTRIBUTE TABLE [DARK, WATER]
class Card_Attribute(models.Model):
    name = models.CharField(
        max_length=80, null=False, unique=False, verbose_name="Element/Attribute"
    )

    class Meta:
        db_table = "api_cards_attributes"
        verbose_name = "api_cards_attribute"
        verbose_name_plural = "api_cards_attributes"
        ordering = ["id"]
        
        
 # CARD RARITY TABLE
class Card_Rarity(models.Model):
    name = models.CharField(
        max_length=10, null=False, unique=False, verbose_name="Card Rarity"
    )

    class Meta:
        db_table = "api_cards_rarities"
        verbose_name = "api_cards_rarity"
        verbose_name_plural = "api_cards_rarities"
        ordering = ["id"]


# CARD TYPES TABLE [MONSTER,EXTRA DECK, PENDULUM,SPELL CARD, TRAP CARD]
class Card_Type(models.Model):
    name = models.CharField(
        max_length=80, null=False, unique=False, verbose_name="Card Type"
    )

    class Meta:
        db_table = "api_cards_types"
        verbose_name = "api_cards_type"
        verbose_name_plural = "api_cards_types"
        ordering = ["id"]


# CARD SUBTYPES TABLE [DRAGON , MACHINE]
class Card_SubType(models.Model):
    name = models.CharField(
        max_length=80, null=False, unique=False, verbose_name="Card Subtype"
    )
    card_family = models.CharField(
        max_length=5, null=False, unique=False, verbose_name="Card Type"
    )
    class Meta:
        db_table = "api_cards_subtypes"
        verbose_name = "api_cards_subtype"
        verbose_name_plural = "api_cards_subtypes"
        ordering = ["id"]
    