# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-04-22 18:20
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0003_profile_bio'),
    ]

    operations = [
        migrations.RenameField(
            model_name='profile',
            old_name='image_path',
            new_name='image',
        ),
    ]
