# Generated by Django 5.0 on 2024-01-23 11:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cards', '0004_alter_cards_attribute'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cards',
            name='obtain_method',
            field=models.TextField(default='', null=True, verbose_name='Obtain Method'),
        ),
    ]