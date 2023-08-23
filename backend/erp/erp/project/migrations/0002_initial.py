# Generated by Django 4.2.4 on 2023-08-14 11:03

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('project', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='assigned_employees',
            field=models.ManyToManyField(related_name='projects_assigned', to=settings.AUTH_USER_MODEL),
        ),
    ]