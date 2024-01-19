from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as DjangoUserAdmin
from users.models import User
# Register your models here.
class UserAdmin(DjangoUserAdmin):
    filter_horizontal = ('groups', 'user_permissions')
    list_display = ('username', 'email')

    class Meta:
       model = User

admin.site.register(User,UserAdmin) 