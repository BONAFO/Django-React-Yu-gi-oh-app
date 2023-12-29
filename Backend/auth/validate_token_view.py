from django.shortcuts import render
from rest_framework import status
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from resorces.JWT import token_decode
# Create your views here.


class Validate_token_View(APIView):
    def post(self, request, *args, **kwargs):
        decoded = token_decode(token=request.data["token"])
        status_f= status.HTTP_403_FORBIDDEN
        if decoded != False:
            decoded = True
            status_f = status.HTTP_200_OK
        return Response({'logged': decoded} ,status=status_f)
