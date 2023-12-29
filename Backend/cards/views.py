from django.shortcuts import render
from rest_framework import status
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
# Create your views here.

class Cards_View_Common(APIView):
    def get(self, request, *args, **kwargs):
        
        return Response({})
    
class Cards_View_Particular(APIView):
    def get(self, request, *args, **kwargs):
        
        return Response({})