# Generated by Django 5.0 on 2024-01-02 14:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cards', '0004_alter_cards_card_rarity'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='cards',
            name='card_special_subtype',
        ),
        migrations.AddField(
            model_name='cards',
            name='pendulum_scales',
            field=models.CharField(default='', max_length=1, null=True, verbose_name='Scaless'),
        ),
        migrations.AlterField(
            model_name='cards',
            name='attribute',
            field=models.CharField(max_length=80, verbose_name='Element/Attribute'),
        ),
        migrations.AlterField(
            model_name='cards',
            name='card_atk',
            field=models.CharField(max_length=20, verbose_name='Attack Points'),
        ),
        migrations.AlterField(
            model_name='cards',
            name='card_def',
            field=models.CharField(max_length=20, null=True, verbose_name='Defense Points'),
        ),
        migrations.AlterField(
            model_name='cards',
            name='card_description',
            field=models.TextField(null=True, verbose_name='Description'),
        ),
        migrations.AlterField(
            model_name='cards',
            name='card_link',
            field=models.CharField(max_length=3, null=True, verbose_name='Link Rank'),
        ),
        migrations.AlterField(
            model_name='cards',
            name='card_pendulum_description',
            field=models.TextField(null=True, verbose_name='Pendulum Description'),
        ),
        migrations.AlterField(
            model_name='cards',
            name='card_rarity',
            field=models.CharField(default='', max_length=10, verbose_name='Rarity'),
        ),
        migrations.AlterField(
            model_name='cards',
            name='card_special_type',
            field=models.CharField(max_length=120, verbose_name='Card Subtype'),
        ),
        migrations.AlterField(
            model_name='cards',
            name='card_type',
            field=models.CharField(max_length=50, verbose_name='Card Type'),
        ),
        migrations.AlterField(
            model_name='cards',
            name='name',
            field=models.CharField(unique=True, verbose_name='Name'),
        ),
        migrations.AlterField(
            model_name='cards',
            name='stars',
            field=models.CharField(max_length=2, null=True, verbose_name='Stars'),
        ),
        migrations.AlterField(
            model_name='cards',
            name='url_img',
            field=models.TextField(null=True, verbose_name='Image URL'),
        ),
    ]
