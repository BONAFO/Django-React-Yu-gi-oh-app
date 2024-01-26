from rest_framework import serializers
from .models import Cards
from .sub_models import Card_Attribute, Card_Rarity, Card_Type,Card_SubType



class Card_AttributeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Card_Attribute
        # fields = ["name"]
        fields = ("id", "name")

        
        
        
class Card_TypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Card_Type
        # fields = ["name"]
        fields = ("id", "name")
        
        
class Card_SubtypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Card_SubType
        # fields = ["name"]
        fields = ("id", "name","card_family")

class Card_RaritySerializer(serializers.ModelSerializer):
    class Meta:
        model = Card_Rarity
        # fields = ["name"]
        fields = ("id", "name")
        

class CardSerializerGet(serializers.ModelSerializer):
    attribute = Card_AttributeSerializer()
    card_type = Card_TypeSerializer()
    card_subtype = Card_SubtypeSerializer()
    card_rarity = Card_RaritySerializer()
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