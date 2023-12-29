from django.urls import path, include
from .views import User_View_Create,User_View_Common,home_view

# router = routers.DefaultRouter()
# router.register(r"users", home_view, "users")


urlpatterns = [
    path("<int:id>", home_view.as_view()),
    # path("", include(router.urls)),
    path("", User_View_Common.as_view()),
    path("create/", User_View_Create.as_view()),
]
