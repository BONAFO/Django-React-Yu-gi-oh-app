# Generated by Django 5.0 on 2023-12-29 16:07

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Cards',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(unique=True)),
                ('stars', models.CharField(max_length=2, null=True)),
                ('attribute', models.CharField(max_length=2)),
                ('url_img', models.CharField(max_length=2, null=True)),
                ('card_type', models.CharField(max_length=2)),
                ('card_special_type', models.CharField(max_length=2)),
                ('card_special_subtype', models.CharField(max_length=2)),
                ('card_description', models.CharField(max_length=2, null=True)),
                ('card_pendulum_description', models.CharField(max_length=2, null=True)),
                ('card_atk', models.CharField(max_length=2)),
                ('card_def', models.CharField(max_length=2, null=True)),
                ('card_link', models.CharField(max_length=2, null=True)),
            ],
            options={
                'verbose_name': 'api_card',
                'verbose_name_plural': 'api_cards',
                'db_table': 'api_cards',
                'ordering': ['id'],
            },
        ),
    ]