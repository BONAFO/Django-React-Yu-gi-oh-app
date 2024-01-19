from rest_framework import serializers
from .models import Cards
from .sub_models import Card_Attribute


class Card_AttributeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Card_Attribute
        # fields = ["name"]
        fields = "__all__"

class CardSerializer(serializers.ModelSerializer):
    attribute = Card_AttributeSerializer()
    class Meta:
        model = Cards
        fields = "__all__"



# class TeacherSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Teacher
#         fields = ('id', 'name', 'tenure')

# class ClassroomSerializer(serializers.ModelSerializer):
#     teachers = TeacherSerializer(source='teacher_set')

#     class Meta:
#         model = Classroom