# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-04-21 19:53
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_auto_20170419_2017'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='bio',
            field=models.TextField(default=''),
        ),
    ]