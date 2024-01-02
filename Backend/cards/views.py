from django.http import JsonResponse
from cards.models import Cards
from resorces.array import push
from cards.sub_models import Card_Attribute
from resorces.models_functions import get_model_field
from rest_framework import status
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.views import APIView

# Create your views here.

# for f in Cards._meta.get_fields():
#     print(f.)
#     push(field_list, {"name": f.name, "field": f.verbose_name})


# class Cards_Model_View_Common(APIView):
#     def get(self, request, *args, **kwargs):
#         fields = get_model_field(Cards)
#         return Response({"fields": fields})


def GetAttributes_View(require):
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
