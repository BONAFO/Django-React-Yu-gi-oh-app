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
        "attributes": queryset_to_arr(attributes.values()),
        "type": queryset_to_arr(type_card.values()),
        "rarity": queryset_to_arr(rarity_card.values()),
        "race": queryset_to_arr(race_card.values()),
    }
    # Title.object  s.filter(id__startswith='12345')

    return data


def Create_Spellcard_Card_Form():
    race_card = Card_SubType.objects.filter(card_family__startswith="s")
    rarity_card = Card_Rarity.objects.all()
    type_card = Card_Type.objects.filter(
        Q(name="s")
    )
    data = {
        "race": queryset_to_arr(race_card.values()),
        "rarity": queryset_to_arr(rarity_card.values()),
        "type": queryset_to_arr(type_card.values()),
    }
    # Title.object  s.filter(id__startswith='12345')

    return data



def Create_Trap_Card_Form():
    race_card = Card_SubType.objects.filter(Q(card_family__icontains="t"))
    rarity_card = Card_Rarity.objects.all()
    type_card = Card_Type.objects.filter(
        Q(name="t")
    )
    data = {
        "race": queryset_to_arr(race_card.values()),
        "rarity": queryset_to_arr(rarity_card.values()),
        "type": queryset_to_arr(type_card.values()),
    }
    # Title.object  s.filter(id__startswith='12345')

    return data
# Item.objects.filter(Q(creator=owner) | Q(moderated=False))


# race_card = Card_SubType.objects.annotate(length=functions.Length('card_family')).filter(Q(card_family__startswith='s') | Q(length__gt=2))
