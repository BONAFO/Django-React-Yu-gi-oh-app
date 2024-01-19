from django.contrib import admin
from cards.models import Cards

# Register your models here.
# Register your models here.
class CardAdmin(admin.ModelAdmin):
    pass

admin.site.register(Cards,CardAdmin)