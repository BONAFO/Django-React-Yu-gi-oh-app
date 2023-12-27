# Generated by Django 5.0 on 2023-12-27 15:36

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=32, unique=True, verbose_name='Username')),
                ('password', models.CharField(verbose_name='Password')),
                ('email', models.CharField(unique=True, verbose_name='Email')),
            ],
        ),
    ]
