# Generated by Django 5.0 on 2024-01-02 17:19

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cards', '0007_card_attribute_card_rarity_card_subtype_card_type_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='card_subtype',
            name='card_family',
            field=models.ForeignKey(default='', on_delete=django.db.models.deletion.DO_NOTHING, to='cards.card_type'),
        ),
    ]
