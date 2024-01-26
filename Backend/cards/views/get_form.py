from django.http import JsonResponse
from rest_framework import status
from cards.forms import (
    Create_Monster_Card_Form,
    Create_Spellcard_Card_Form,
    Create_Trap_Card_Form,
)
from auth.validate_user_perms import user_call_validation




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