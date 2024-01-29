

from cards.serialaizer import CardSerializerSet

from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView


from auth.validate_user_perms import user_call_validation








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