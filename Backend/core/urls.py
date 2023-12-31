"""
URL configuration for core project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from home import urls as home_urls
from cards import urls as cards_urls
from auth.validate_token_view import Validate_token_View
from rest_framework import routers, documentation

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/v1/validate-token/", Validate_token_View.as_view()),
    path("api/v1/users/", include(home_urls)),
    path("api/v1/cards/", include(cards_urls)),
    path("api/v1/docs/", documentation.include_docs_urls(title= "Api")),
]
