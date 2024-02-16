from django.urls import path, include
from .views import SignUp_View,Login_View,home_view,User_Perms_Validation_Perms

# router = routers.DefaultRouter()
# router.register(r"users", home_view, "users")


urlpatterns = [
    # path("<int:id>", home_view.as_view()),
    # # path("", include(router.urls)),
    # path("", User_View_Common.as_view()),
    # path("create/", User_View_Create.as_view()),
    # path("validate-perms/", User_Perms_Validation_Perms.as_view()),
     path("login/", Login_View.as_view()),
     path("signup/", SignUp_View.as_view()),
     path("validate-perms/", User_Perms_Validation_Perms.as_view()),
]
