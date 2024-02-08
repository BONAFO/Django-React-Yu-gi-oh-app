from django.http import JsonResponse
from django.db.models import Q
from cards.models import Cards
from cards.serialaizer import CardSerializerGet
from resorces.array import push
from cards.sub_models import Card_Attribute, Card_Rarity, Card_SubType, Card_Type
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView


from resorces.array import push, queryset_to_arr, queryset_to_dict
from cards.functions.unpack_values import unpack_values
from cards.functions.filters import show_cards_filters, build_extra_field, get_text_card_filter


class Cards_Show_View(APIView):
    def get(self, request, *args, **kwargs):
        # max = Cards.objects.all().count()

        pseudonumeric_fields = [
            "stars",
            "allowed",
            "card_atk",
            "card_def",
            "card_link",
            "pendulum_scales",
        ]

        try:
            paginated = int(request.GET.get("paginated"))
        except:
            paginated = 10

        try:
            page = int(request.GET.get("page"))
        except:
            page = 0

        order_by = request.GET.get("order_by") or "name"
        pair = [paginated * page, paginated * (page + 1)]

        filter = show_cards_filters(request)
        card_text_filter = get_text_card_filter(request)
        
        if len(filter) <= 0:
            queryset = Cards.objects.all()
        else:
            extra_filter = build_extra_field(pseudonumeric_fields, filter)
            queryset = Cards.objects.annotate(**extra_filter).filter(
                **filter
            )


        if card_text_filter != False and card_text_filter != None:
           queryset = queryset.filter(
               Q(name__icontains=card_text_filter) | 
               Q(card_description__icontains=card_text_filter) | 
               Q(card_pendulum_description__icontains=card_text_filter)
           )


        if order_by.replace("-", "") in pseudonumeric_fields:
            queryset = queryset.extra(
                select={
                    order_by.replace("-", ""): "CAST("
                    + order_by.replace("-", "")
                    + " AS INTEGER)"
                }
            ).order_by(order_by)
        else:
            queryset = queryset.order_by(order_by)


        query = queryset[pair[0] : pair[1]]
        serializer = CardSerializerGet(query, many=True)
        data = serializer.data
        response = {"max": queryset.count(), "data": []}

        fields = [
            "id",
            "name",
            "attribute:name",
            "stars",
            "url_img",
            "card_atk",
            "card_def",
            "pendulum_scales",
            "card_rarity:name",
            "card_type:name",
            "card_subtype:name",
        ]

        for card in data:
            entry = {}
            for field in fields:
                entry_data = unpack_values(card, field)
                if not entry_data is None:
                    entry.update(entry_data)
            push(response["data"], entry)

        return Response(response, status=status.HTTP_200_OK)


class Cards_Show_Detail_View(APIView):
    def get(self, request, id, *args, **kwargs):
        print(id)
        queryset = Cards.objects.filter(pk = id);
        
        if queryset.count() > 0:
            serializer = (CardSerializerGet(queryset, many=True)).data[0]
            data = queryset_to_dict(serializer)
            return Response({"data": data}, status=status.HTTP_200_OK)
        else :
            return Response({"data": ""}, status=status.HTTP_404_NOT_FOUND)
            


class Card_Params_View(APIView):
    def get(self, request, *args, **kwargs):
        attributes = queryset_to_arr(Card_Attribute.objects.all().values("id", "name"))
        rarity = queryset_to_arr(Card_Rarity.objects.all().values("id", "name"))
        sub_type = queryset_to_arr(
            Card_SubType.objects.all().values("id", "name", "card_family")
        )
        type = queryset_to_arr(Card_Type.objects.all().values("id", "name"))

        return JsonResponse(
            {
                "attributes": attributes,
                "rarity": rarity,
                "sub_type": sub_type,
                "type": type,
            },
            status=200,
        )
