# from django.http import JsonResponse
# from cards.models import Cards
# from cards.serialaizer import CardSerializerSet, CardSerializerGet
# from resorces.array import push
# from cards.sub_models import Card_Attribute, Card_Rarity, Card_SubType, Card_Type
# from resorces.models_functions import get_model_field
# from rest_framework import status
# from rest_framework import viewsets
# from rest_framework.response import Response
# from rest_framework.views import APIView
# from cards.forms import (
#     Create_Monster_Card_Form,
#     Create_Spellcard_Card_Form,
#     Create_Trap_Card_Form,
# )

# from auth.validate_user_perms import user_call_validation
# from resorces.array import push, queryset_to_arr





# def GetAttributes_View(require, id=None):
#     try:
#         attributes = Card_Attribute.objects.all()
#         attributes_list = []
#         for att in attributes.values():
#             push(attributes_list, att)

#         return JsonResponse({"data": attributes_list}, status=status.HTTP_200_OK)
#     except:
#         return JsonResponse({"data": []}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)



# Create your views here.

# for f in Cards._meta.get_fields():
#     print(f.)
#     push(field_list, {"name": f.name, "field": f.verbose_name})


# class Cards_Model_View_Common(APIView):
#     def get(self, request, *args, **kwargs):
#         fields = get_model_field(Cards)
#         return Response({"fields": fields})


# def Get_Cards_Form(request, type):
#     try:
#         user_call_validation(request=request, perm="cards.add_cards")
#     except Exception as error:
#         print(error)
#         return JsonResponse(
#             {"error": "Token invalido o expirado."},
#             status=status.HTTP_403_FORBIDDEN,
#         )

#     if type == "monster":
#         data = Create_Monster_Card_Form()
#     elif type == "spellcard":
#         data = Create_Spellcard_Card_Form()
#     elif type == "trap":
#         data = Create_Trap_Card_Form()
#     else:
#         return JsonResponse(
#             {"err": "Card type doesn't exist!"}, status=status.HTTP_200_OK
#         )

#     return JsonResponse({"data": data}, status=status.HTTP_200_OK)




# class Cards_View_Common(APIView):
#     def get(self, request, *args, **kwargs):
#         return Response({})


# class Cards_View_Particular(APIView):
#     def get(self, request, *args, **kwargs):
#         return Response({})


# class Cards_Create_View(APIView):
#     def post(self, request, *args, **kwargs):
#         try:
#             user_call_validation(request=request, perm="cards.add_cards")
#         except Exception as error:
#             print(error)
#             return Response(
#                 {"error": "Token invalido o expirado."},
#                 status=status.HTTP_403_FORBIDDEN,
#             )

#         serializer = CardSerializerSet(data=request.data)
#         print(request.data)
#         print(serializer.is_valid())
#         if not serializer.is_valid():
#             print(serializer.errors)
#             return Response(
#                 {"error": serializer.errors},
#                 status=status.HTTP_400_BAD_REQUEST,
#             )

#         try:
#             serializer.save()
#         except Exception as exception:
#             print(exception)
#         return Response(
#             {"msj": "Card " + request.data["name"] + " created!"},
#             status=status.HTTP_201_CREATED,
#         )


# class Cards_Show_View(APIView):
#     def get(self, request, *args, **kwargs):
#         # max = Cards.objects.all().count()

#         pseudonumeric_fields = [
#             "stars",
#             "allowed",
#             "card_atk",
#             "card_def",
#             "card_link",
#             "pendulum_scales",
#         ]

#         try:
#                  paginated = int(request.GET.get("paginated"))
#         except:
#                  paginated = 10
                 
#         try:
#                  page = int(request.GET.get("page"))
#         except:
#                  page = 0
                 
                 
#         print(paginated)
        
        
#         order_by = request.GET.get("order_by") or "name"
#         pair = [paginated * page, paginated * (page + 1)]
        
        
        
        
        

#         queryset = Cards.objects.all()
#         if order_by.replace("-","") in pseudonumeric_fields:
#             queryset = queryset.extra(
#             select={order_by.replace("-",""): "CAST("+ order_by.replace("-","")+" AS INTEGER)"}
#         ).order_by(order_by)
#         else:
#             queryset = queryset.order_by(order_by)
#         query = queryset[pair[0] : pair[1]]
#         serializer = CardSerializerGet(query, many=True)
#         data = serializer.data
#         response = {"max": queryset.count(), "data": []}

#         fields = [
#             "id",
#             "name",
#             "attribute:name",
#             "stars",
#             "url_img",
#             "card_atk",
#             "card_def",
#             "pendulum_scales",
#             "card_rarity:name",
#             "card_type:name",
#             "card_subtype:name",
#         ]

#         for card in data:
#             entry = {}
#             for field in fields:
#                 entry_data = unpack_values(card, field)
#                 if not entry_data is None:
#                     entry.update(entry_data)
#             push(response["data"], entry)

#         return Response(response, status=status.HTTP_200_OK)





# def unpack_values(pack, key):
#     data = {}
#     if ":" in key:
#         indexs = [key.index(":"), len(key)]
#         attribute = key[0 : indexs[0]]
#         keys = key[(indexs[0] + 1) : indexs[1]].split(",")

#         if not pack[attribute] is None:
#             data.update({attribute: {}})
#             for k in keys:
#                 data[attribute].update({k: pack[attribute][k]})
#         else:
#             data = None
#     else:
#         data.update({key: pack[key]})
#     return data




#
#
#
#
#
#
