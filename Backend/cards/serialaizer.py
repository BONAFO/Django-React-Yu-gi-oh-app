from rest_framework import serializers
from .models import Cards
from .sub_models import Card_Attribute



class Card_AttributeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Card_Attribute
        # fields = ["name"]
        fields = ("id", "name")

        
        
        
class Card_Type(serializers.ModelSerializer):
    class Meta:
        model = Card_Attribute
        # fields = ["name"]
        fields = ("id", "name")
        
        
class Card_Subtype(serializers.ModelSerializer):
    class Meta:
        model = Card_Attribute
        # fields = ["name"]
        fields = ("id", "name")

class Card_Rarity(serializers.ModelSerializer):
    class Meta:
        model = Card_Attribute
        # fields = ["name"]
        fields = ("id", "name")
        

class CardSerializerGet(serializers.ModelSerializer):
    attribute = Card_AttributeSerializer()
    card_type = Card_Type()
    card_subtype = Card_Subtype()
    card_rarity = Card_Rarity()
    # card_type = Card_AttributeSerializer()
    # card_subtype = 
    class Meta:
        model = Cards
        fields = "__all__"

class CardSerializerSet(serializers.ModelSerializer):
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