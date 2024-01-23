from django.db import models
from .sub_models import Card_Attribute, Card_Rarity, Card_SubType, Card_Type


# Create your models here.
class Cards(models.Model):
    # CARD NAME
    name = models.CharField(
        max_length=128,
        null=False,
        unique=True,
    )
    # AMMOUNT OF STARS
    stars = models.CharField(
        max_length=2, null=True, unique=False, default="", verbose_name="Stars"
    )

    allowed = models.CharField(
        max_length=1,
        null=True,
        unique=False,
        default="",
        verbose_name="Ammount Allowed",
    )
    # DARK, WATER
    #     attribute = models.CharField(
    #         max_length=32,
    #         null=False,
    #         unique=False,
    #         verbose_name="Element/Attribute",
    #
    #         choices="",
    #     )
    attribute = models.ForeignKey(
        Card_Attribute,
        null=True,
        unique=False,
        default="",
        on_delete=models.DO_NOTHING,
        verbose_name="Card Attribute",
    )
    # YUGIOHDB IMG URL
    url_img = models.TextField(
        null=True,
        unique=False,
        verbose_name="Image URL",
    )
    # MONSTER,EXTRA DECK, PENDULUM,SPELL CARD, TRAP CARD
    #     card_type = models.CharField(
    #         max_length=50,
    #         null=False,
    #         unique=False,
    #         verbose_name="Card Type",
    #
    #     )
    card_type = models.ForeignKey(
        Card_Type,
        null=False,
        unique=False,
        default="",
        on_delete=models.DO_NOTHING,
        verbose_name="Card Type",
    )
    # DRAGON , MACHINE,
    #     card_special_type = models.CharField(
    #         max_length=120,
    #         null=False,
    #         unique=False,
    #         verbose_name="Card Subtype",
    #
    #     )
    card_subtype = models.ForeignKey(
        Card_SubType,
        null=False,
        unique=False,
        default="",
        on_delete=models.DO_NOTHING,
        verbose_name="Card Race",
    )
    # BOOL
    # TEXT DESCRIPTION OF THE CARD
    card_description = (
        models.TextField(
            null=True,
            unique=False,
            verbose_name="Description",
        ),
    )
    # IF IS PENDULUMN, DESCRIPTION OF THE PENDULUM ZONE
    card_pendulum_description = models.TextField(
        null=True,
        unique=False,
        verbose_name="Pendulum Description",
    )
    card_atk = models.CharField(
        max_length=20,
        null=True,
        unique=False,
        verbose_name="Attack Points",
    )
    card_def = models.CharField(
        max_length=20,
        null=True,
        unique=False,
        verbose_name="Defense Points",
    )
    # IF IT'S LIKN, LINK RANK
    card_link = models.CharField(
        max_length=3,
        null=True,
        unique=False,
        verbose_name="Link Rank",
    )
    obtain_method = models.TextField(
        null=True,
        unique=False,
        verbose_name="Obtain Method",
        default="",
    )
    #     card_rarity = models.CharField(
    #         max_length=10,
    #         default="",
    #         null=False,
    #         unique=False,
    #         verbose_name="Rarity",
    #
    #     )
    card_rarity = models.ForeignKey(
        Card_Rarity, null=False, unique=False, default="", on_delete=models.DO_NOTHING
    )
    pendulum_scales = models.CharField(
        max_length=10,
        default="",
        null=True,
        unique=False,
        verbose_name="Scales",
    )

    class Meta:
        db_table = "api_cards"
        verbose_name = "api_card"
        verbose_name_plural = "api_cards"
        ordering = ["id"]
