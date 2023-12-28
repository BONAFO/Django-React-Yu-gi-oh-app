from django.urls import path, include
from .views import home_view,User_View_Common
from rest_framework import routers, documentation

# router = routers.DefaultRouter()
# router.register(r"users", home_view, "users")


urlpatterns = [
    path("api/v1/users/<int:id>", home_view.as_view()),
    # path("api/v1/", include(router.urls)),
    path("api/v1/users/", User_View_Common.as_view()),
    path("docs/", documentation.include_docs_urls(title= "Users")),
]
