from rest_framework import serializers
from .models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"

    def create(self, validated_data):
        user = User.objects.create(  # this line  will solve your problem
            **validated_data
        )
        user.password = user.set_password(validated_data["password"])
        user.save()
        return user

    # def create(self, validated_data):
    #     """
    #     Overriding the default create method of the Model serializer.
    #     :param validated_data: data containing all the details of profile
    #     :return: returns a successfully created profile record
    #     """

    # profile = User(**validated_data)
    # print("********************************************************************")
    # # make_password(profile.password)
    # # print(profile.password)
    # print("********************************************************************")

    # user_data = validated_data.pop("user")
    # user = User.objects.create(validated_data)

    # print("********************************************************************")
    # print(validated_data)
    # user = User.objects.create(**validated_data)
    # print()
    # user.set_password(user.password)
    # user.save()
    # print("********************************************************************")

    # user.set_password(user.password)
    # user.save()
    # profile, created = User.objects.update_or_create(
    #     **user
    #     # contact_no=validated_data.pop("contact_no"),
    #     # role=validated_data.pop("role"),
    # )
    # return User
