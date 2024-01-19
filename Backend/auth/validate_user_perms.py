from resorces.JWT import validate_user_token
from users.models import User

def user_call_validation(request,perm):
        # Control de Acceso
    user = validate_user_token(token=request.META["HTTP_AUTHORIZATION"])
    print(User.objects.get(id=user["id"]))
        # print(User.objects.get(id=user["id"]).get_all_permissions())
    if User.objects.get(id=user["id"]).has_perm(perm) != True:
        text = "Acceso denegado! > [" + request.META["HTTP_AUTHORIZATION"]  + "]"
        raise Exception(text)