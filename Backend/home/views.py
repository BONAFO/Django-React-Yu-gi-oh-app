import json
import os
from django.http import JsonResponse
from rest_framework import status
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
import datetime
from django.contrib.auth import authenticate
from django.utils.decorators import method_decorator
from users.serialaizer import UserSerializer
from users.models import User
from resorces.user_is_logged import user_is_logged
from django.core.serializers import serialize
from resorces.JWT import token_decode, token_sign

# from rest_framework import status
# from rest_framework.decorators import api_view
# from rest_framework.response import Response
# from snippets.models import Snippet
# from snippets.serializers import SnippetSerializer

# @api_view(['GET','POST'])
# def home_views(request):
#     print(1)


# Create your views here.


# def home_view(request):
#     response_data = {}
#     response_data['result'] = 'error'
#     response_data['message'] = 'Some error message'
#     # response_data = json.dumps(response_data)
#     return JsonResponse(response_data)


# class home_view(APIView):
#     def get(self, request, *args, **kwargs):
#         return super().get(request, *args, **kwargs)

#     def post(self, request, *args, **kwargs):
#         return super().post(request, *args, **kwargs)

#     def put(self, request, *args, **kwargs):
#         return super().put(request, *args, **kwargs)

# class home_view(viewsets.ModelViewSet):
#     queryset = User.objects.all()
#     serializer_class = UserSerializer

#     # GET MANY
#     def list(self, request):
#         queryset = User.objects.all()
#         serializer = UserSerializer(queryset, many=True)

#         #         user = User.objects.create(  # this line  will solve your problem
#         #     **validated_data
#         # )
#         # user.password = user.set_password(validated_data["password"])
#         # user.save()
#         return Response(serializer.data)

#     def create(self, request, *args, **kwargs):
#         serializer = self.get_serializer(data=request.data)

#         # if serializer.is_valid():
#         #             self.perform_create(serializer)
#         #     headers = self.get_success_headers(serializer.data)
#         # else:

#         if not serializer.is_valid():
#             return Response(
#                 {"error": "The username or the email are already taken"},
#                 status=status.HTTP_409_CONFLICT,
#             )
#         self.perform_create(serializer)
#         headers = self.get_success_headers(serializer.data)
#         return Response(
#             serializer.data, status=status.HTTP_201_CREATED, headers=headers
#         )

#     def perform_create(self, serializer):
#         serializer.save()

#     def retrieve(self, request, pk=None):
#         print("retrieve")
#         pass

#     def update(self, request, pk=None):
#         print("update")
#         pass

#     def partial_update(self, request, pk=None):
#         print("partial_update")
#         pass

#     def destroy(self, request, pk=None):
#         print("destroy")
#         pass

# permission_classes = []


# class home_view(APIView):
#     def get(self, request, *args, **kwargs):
#         queryset = User.objects.all()
#         serializer = UserSerializer(queryset, many=True)
#         return Response(serializer.data)

#     def post(self, request, *args, **kwargs):

#         serializer = UserSerializer(data=request.data)

#         # serializer = self.get_serializer(data=request.data)
#         if not serializer.is_valid():
#             return Response(
#                 {"error": "The username or the email are already taken"},
#                 status=status.HTTP_409_CONFLICT,
#             )

#         serializer.save()
#         return Response(
#             serializer.data, status=status.HTTP_201_CREATED
#         )


#         serializer = self.get_serializer(data=request.data)

#         # if serializer.is_valid():
#         #             self.perform_create(serializer)
#         #     headers = self.get_success_headers(serializer.data)

#         if not serializer.is_valid():
#             return Response(
#                 {"error": "The username or the email are already taken"},
#                 status=status.HTTP_409_CONFLICT,
#             )
#         self.perform_create(serializer)
#         headers = self.get_success_headers(serializer.data)
#         return Response(
#             serializer.data, status=status.HTTP_201_CREATED, headers=headers
#         )

# return super().post(request, *args, **kwargs)

# def list(self, request):
# queryset = User.objects.all()
# serializer = UserSerializer(queryset, many=True)

#         user = User.objects.create(  # this line  will solve your problem
#     **validated_data
# )
# user.password = user.set_password(validated_data["password"])
# user.save()
# return Response(serializer.data)


class User_View_Common(APIView):
    def post(self, request, *args, **kwargs):
        # try:
        # queryset = User.objects.filter(username=request.data["username"])
        # if queryset.count() != 0:
        #     return Response(
        #         {"error": "I found you!!"}, status=status.HTTP_200_OK
        #     )
        # else:
        #     return Response(
        #         {"error": "User not found"}, status=status.HTTP_400_BAD_REQUEST
        #     )
        auth = authenticate(
            request,
            username=request.data["username"],
            password=request.data["password"],
        )

        # token= jwt.encode(payLoad, os.getenv('SECRET'),algorithm="HS256")

        if auth != None:
            payLoad = {
                "id": auth.id,
                "exp": datetime.datetime.utcnow() + datetime.timedelta(hours=24),
                "iat": datetime.datetime.utcnow(),
            }
            token = token_sign(payLoad=payLoad)
            if token != False:
                return Response({"token": token}, status=status.HTTP_200_OK)
            else:
                return Response(
                    {"error": "Error signing the token."},
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR,
                )
        else:
            return Response(status=status.HTTP_403_FORBIDDEN)

    # except:
    #     return Response(
    #         {"error": "Invalid data!"}, status=status.HTTP_400_BAD_REQUEST
    #     )


class User_View_Create(APIView):
    def post(self, request, *args, **kwargs):
        serializer = UserSerializer(data=request.data)
        if not serializer.is_valid():
            return Response(
                {"error": "The username or the email are already taken"},
                status=status.HTTP_409_CONFLICT,
            )
        serializer.save()
        auth = authenticate(
            request,
            username=request.data["username"],
            password=request.data["password"],
        )
        if auth != None:
            payLoad = {
                "id": auth.id,
                "exp": datetime.datetime.utcnow() + datetime.timedelta(hours=24),
                "iat": datetime.datetime.utcnow(),
            }
            token = token_sign(payLoad=payLoad)
            if token != False:
                return Response({"token": token}, status=status.HTTP_201_CREATED)
            else:
                return Response(
                    {"error": "Error signing the token."},
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR,
                )
        else:
            return Response(
                {"error": "Error creating the new user."},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )
        # headers = self.get_success_headers(serializer.data)

class home_view(APIView):
    def get(self, request, id, *args, **kwargs):
        queryset = User.objects.filter(id=id)
        serializer = self.get_serializer(data=request.data)
        # logged = True
        # if queryset.count() == 0:
        #     logged = False

        logged = user_is_logged(queryset.count())
        data_user = {}

        data_user["data"] = queryset.values()
        data_user["logged"] = logged
        # data_user = json.dumps(data_user)

        # return Response(data={"data": queryset, "logged": logged})
        return Response(data_user)

    def post(self, request, id, *args, **kwargs):
        serializer = UserSerializer(data=request.data)

        # if serializer.is_valid():
        #             self.perform_create(serializer)
        #     headers = self.get_success_headers(serializer.data)
        # else:

        if not serializer.is_valid():
            return Response(
                {"error": "The username or the email are already taken"},
                status=status.HTTP_409_CONFLICT,
            )
        serializer.save()
        return Response({})

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)

        # if serializer.is_valid():
        #             self.perform_create(serializer)
        #     headers = self.get_success_headers(serializer.data)
        # else:

        if not serializer.is_valid():
            return Response(
                {"error": "The username or the email are already taken"},
                status=status.HTTP_409_CONFLICT,
            )
        serializer.save()
        headers = self.get_success_headers(serializer.data)
        return Response(
            serializer.data, status=status.HTTP_201_CREATED, headers=headers
        )
