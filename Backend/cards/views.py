from django.http import JsonResponse
from cards.models import Cards
from cards.serialaizer import CardSerializerSet, CardSerializerGet
from resorces.array import push
from cards.sub_models import Card_Attribute
from resorces.models_functions import get_model_field
from rest_framework import status
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from cards.forms import (
    Create_Monster_Card_Form,
    Create_Spellcard_Card_Form,
    Create_Trap_Card_Form,
)
from auth.validate_user_perms import user_call_validation
from resorces.array import push

# Create your views here.

# for f in Cards._meta.get_fields():
#     print(f.)
#     push(field_list, {"name": f.name, "field": f.verbose_name})


# class Cards_Model_View_Common(APIView):
#     def get(self, request, *args, **kwargs):
#         fields = get_model_field(Cards)
#         return Response({"fields": fields})


def Get_Cards_Form(request, type):
    try:
        user_call_validation(request=request, perm="cards.add_cards")
    except Exception as error:
        print(error)
        return JsonResponse(
            {"error": "Token invalido o expirado."},
            status=status.HTTP_403_FORBIDDEN,
        )

    if type == "monster":
        data = Create_Monster_Card_Form()
    elif type == "spellcard":
        data = Create_Spellcard_Card_Form()
    elif type == "trap":
        data = Create_Trap_Card_Form()
    else:
        return JsonResponse(
            {"err": "Card type doesn't exist!"}, status=status.HTTP_200_OK
        )

    return JsonResponse({"data": data}, status=status.HTTP_200_OK)


def GetAttributes_View(require, id=None):
    try:
        attributes = Card_Attribute.objects.all()
        attributes_list = []
        for att in attributes.values():
            push(attributes_list, att)

        return JsonResponse({"data": attributes_list}, status=status.HTTP_200_OK)
    except:
        return JsonResponse({"data": []}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class Cards_View_Common(APIView):
    def get(self, request, *args, **kwargs):
        return Response({})


class Cards_View_Particular(APIView):
    def get(self, request, *args, **kwargs):
        return Response({})


class Cards_Create_View(APIView):
    def post(self, request, *args, **kwargs):
        try:
            user_call_validation(request=request, perm="cards.add_cards")
        except Exception as error:
            print(error)
            return Response(
                {"error": "Token invalido o expirado."},
                status=status.HTTP_403_FORBIDDEN,
            )

        serializer = CardSerializerSet(data=request.data)
        print(request.data)
        print(serializer.is_valid())
        if not serializer.is_valid():
            print(serializer.errors)
            return Response(
                {"error": serializer.errors},
                status=status.HTTP_400_BAD_REQUEST,
            )

        try:
            serializer.save()
        except Exception as exception:
            print(exception)
        return Response(
            {"msj": "Card " + request.data["name"] + " created!"},
            status=status.HTTP_201_CREATED,
        )


class Cards_Show_View(APIView):
    def get(self, request, *args, **kwargs):
        # max = Cards.objects.all().count()
        


        paginated = int(request.GET.get("paginated")) or 10
        page = int(request.GET.get("page")) or 0
        pair = [paginated * page, paginated * (page + 1)]
        
        
        
        queryset = Cards.objects.all()
        query = queryset[pair[0] : pair[1]]
        serializer = CardSerializerGet(query, many=True)
        data = serializer.data[pair[0] : pair[1]]
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
    def get(self, request, *args, **kwargs):
        print(request)
        return Response({"data": ""}, status=status.HTTP_201_CREATED)


def unpack_values(pack, key):
    data = {}
    if ":" in key:
        indexs = [key.index(":"), len(key)]
        attribute = key[0 : indexs[0]]
        keys = key[(indexs[0] + 1) : indexs[1]].split(",")

        if not pack[attribute] is None:
            data.update({attribute: {}})
            for k in keys:
                data[attribute].update({k: pack[attribute][k]})
        else:
            data = None
    else:
        data.update({key: pack[key]})
    return data


# datilla = [
#     (
#         [
#             ("id", 4),
#             ("attribute", ([("id", 6), ("name", "light")])),
#             ("card_type", ([("id", 4), ("name", "m-tunner")])),
#             ("card_subtype", ([("id", 28), ("name", "spellcaster ")])),
#             ("card_rarity", ([("id", 2), ("name", "r")])),
#             ("name", "Priestess With Eyes Of Blue"),
#             ("stars", "1"),
#             ("allowed", "3"),
#             ("url_img", "https://images.ygoprodeck.com/images/cards/36734924.jpg"),
#             ("card_pendulum_description", None),
#             ("card_atk", "0"),
#             ("card_def", "0"),
#             ("card_link", None),
#             (
#                 "obtain_method",
#                 "Pack Stardust Acceleration [R] , Pack Blue-Eyes Evolution [R]",
#             ),
#             ("pendulum_scales", ""),
#         ]
#     ),
#     (
#         [
#             ("id", 5),
#             ("attribute", ([("id", 6), ("name", "light")])),
#             ("card_type", ([("id", 6), ("name", "e-syncro")])),
#             ("card_subtype", ([("id", 11), ("name", "dragon")])),
#             ("card_rarity", ([("id", 4), ("name", "ur")])),
#             ("name", "Blue-Eyes Spirit Dragon"),
#             ("stars", "9"),
#             ("allowed", "3"),
#             (
#                 "url_img",
#                 "https://s3.duellinksmeta.com/cards/60c2b3a9a0e24f2d54a51791_w360.webp",
#             ),
#             ("card_pendulum_description", None),
#             ("card_atk", "2500"),
#             ("card_def", "3000"),
#             ("card_link", None),
#             ("obtain_method", "Box Judgement Force"),
#             ("pendulum_scales", ""),
#         ]
#     ),
#     (
#         [
#             ("id", 6),
#             ("attribute", None),
#             ("card_type", ([("id", 11), ("name", "t")])),
#             ("card_subtype", ([("id", 10), ("name", "normal")])),
#             ("card_rarity", ([("id", 3), ("name", "sr")])),
#             ("name", "Destined Rivals"),
#             ("stars", ""),
#             ("allowed", "3"),
#             (
#                 "url_img",
#                 "https://s3.duellinksmeta.com/cards/60c2b3aaa0e24f2d54a51d16_w360.webp",
#             ),
#             ("card_pendulum_description", None),
#             ("card_atk", None),
#             ("card_def", None),
#             ("card_link", None),
#             ("obtain_method", "Deck Sword of Paladin"),
#             ("pendulum_scales", ""),
#         ]
#     ),
#     (
#         [
#             ("id", 7),
#             ("attribute", None),
#             ("card_type", ([("id", 10), ("name", "s")])),
#             ("card_subtype", ([("id", 25), ("name", "ritual")])),
#             ("card_rarity", ([("id", 2), ("name", "r")])),
#             ("name", "Chaos Form"),
#             ("stars", ""),
#             ("allowed", "1"),
#             (
#                 "url_img",
#                 "https://s3.duellinksmeta.com/cards/60c2b3aaa0e24f2d54a5191a_w360.webp",
#             ),
#             ("card_pendulum_description", None),
#             ("card_atk", None),
#             ("card_def", None),
#             ("card_link", None),
#             ("obtain_method", "Deck Masters of Chaos, Box World of Barian"),
#             ("pendulum_scales", ""),
#         ]
#     ),
# ]
