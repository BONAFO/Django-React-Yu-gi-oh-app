from django.db.models.functions import Cast
from django.db.models import IntegerField


def create_filter_dict(dict_key):
    if "max" in dict_key:
        return dict_key.replace("_max", "_integer__lte")
    elif "min" in dict_key:
        return dict_key.replace("_min", "_integer__gte")
    else:
        return dict_key


def build_extra_field(pseudonumeric_fields, filter):
    extra = {}

    for key in filter:
        if "integer" in key:
            key = key.replace("_integer__gte", "")
            key = key.replace("_integer__lte", "")
            extra.update({key + "_integer": Cast(key, output_field=IntegerField())})


    return extra


def show_cards_filters(request):
    filter_head = "f__"
    valid_filters = [
        "stars_min",
        "stars_max",
        "allowed",
        "card_link_min",
        "card_link_max",
        "pendulum_scales_min",
        "pendulum_scales_max",
        "card_rarity",
        "attribute",
        "card_type",
        "card_subtype",
        "card_atk_min",
        "card_atk_max",
        "card_def_min",
        "card_def_max",
    ]
    filters = {}
    for fil in valid_filters:
        try:
            if not request.GET.get(filter_head + fil) is None:
                filters.update(
                    {create_filter_dict(fil): request.GET.get(filter_head + fil)}
                )
        except Exception as error:
            print(error)

    return filters


def get_text_card_filter(request):
    filter_head = "f__"

    try:
        card_text = request.GET.get(filter_head + 'text')
    except :
        card_text = False
    
    return card_text