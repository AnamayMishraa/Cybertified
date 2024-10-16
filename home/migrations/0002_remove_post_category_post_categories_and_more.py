# Generated by Django 5.1.1 on 2024-10-13 09:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='post',
            name='category',
        ),
        migrations.AddField(
            model_name='post',
            name='categories',
            field=models.ManyToManyField(to='home.category'),
        ),
        migrations.AddField(
            model_name='post',
            name='short_description',
            field=models.CharField(default='Default description', max_length=255),
        ),
        migrations.AddField(
            model_name='post',
            name='slug',
            field=models.SlugField(blank=True, unique=True),
        ),
    ]
