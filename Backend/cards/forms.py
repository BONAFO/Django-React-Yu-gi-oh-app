from cards.sub_models import Card_Attribute, Card_SubType, Card_Type, Card_Rarity
from django.db.models import Q, functions

from resorces.array import queryset_to_arr


def Create_Monster_Card_Form():
    attributes = Card_Attribute.objects.all()
    type_card = Card_Type.objects.filter(
        Q(name__startswith="m") | Q(name__startswith="e")
    )
    race_card = Card_SubType.objects.filter(card_family__startswith="m")
    rarity_card = Card_Rarity.objects.all()

    data = {
        "attributes": queryset_to_arr(attributes),
        "type": queryset_to_arr(type_card),
        "rarity": queryset_to_arr(rarity_card),
        "race": queryset_to_arr(race_card),
    }
    # Title.object  s.filter(id__startswith='12345')

    return data


def Create_Spellcard_Card_Form():
    race_card = Card_SubType.objects.filter(card_family__startswith="s")
    rarity_card = Card_Rarity.objects.all()

    data = {
        "race": queryset_to_arr(race_card),
        "rarity": queryset_to_arr(rarity_card),
    }
    # Title.object  s.filter(id__startswith='12345')

    return data



def Create_Trap_Card_Form():
    race_card = Card_SubType.objects.filter(Q(card_family__icontains="t"))
    rarity_card = Card_Rarity.objects.all()

    data = {
        "race": queryset_to_arr(race_card),
        "rarity": queryset_to_arr(rarity_card),
    }
    # Title.object  s.filter(id__startswith='12345')

    return data
# Item.objects.filter(Q(creator=owner) | Q(moderated=False))


# race_card = Card_SubType.objects.annotate(length=functions.Length('card_family')).filter(Q(card_family__startswith='s') | Q(length__gt=2))
