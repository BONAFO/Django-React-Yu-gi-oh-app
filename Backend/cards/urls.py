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
# from .views import (
#     # Cards_View_Common,
#     # Cards_View_Particular,
#     # GetAttributes_View,

#     # Cards_Create_View,
#     # Cards_Show_View,
#     # Cards_Show_Detail_View,
#     #  Card_Params_View
# )

from .views.get_form import Get_Cards_Form
from .views.create_form import Cards_Create_View
from .views.get_cards import Cards_Show_View, Cards_Show_Detail_View, Card_Params_View

urlpatterns = [
    # path("", Cards_View_Common.as_view()),

    # SHOW
    path("show/", Cards_Show_View.as_view()),
    path("show/<int:id>", Cards_Show_Detail_View.as_view()),
    path("filter-params/", Card_Params_View.as_view()),

    # CREATE
    path("create/<str:type>", Get_Cards_Form),
    path("create/", Cards_Create_View.as_view()),
    
    
    # path("attributes/<int:id>/", GetAttributes_View),
    
    # path("<int:id>", Cards_View_Particular.as_view()),
    

]
