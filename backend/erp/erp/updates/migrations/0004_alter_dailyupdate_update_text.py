# Generated by Django 4.2.4 on 2023-08-14 12:16

from django.db import migrations
import djrichtextfield.models


class Migration(migrations.Migration):

    dependencies = [
        ('updates', '0003_dailyupdate_time_spent_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='dailyupdate',
            name='update_text',
            field=djrichtextfield.models.RichTextField(null=True),
        ),
    ]