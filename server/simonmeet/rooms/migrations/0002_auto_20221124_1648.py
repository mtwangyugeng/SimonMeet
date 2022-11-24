# Generated by Django 3.2.16 on 2022-11-24 21:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rooms', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='room',
            old_name='task',
            new_name='name',
        ),
        migrations.RemoveField(
            model_name='room',
            name='completed',
        ),
        migrations.RemoveField(
            model_name='room',
            name='timestamp',
        ),
        migrations.RemoveField(
            model_name='room',
            name='updated',
        ),
        migrations.AddField(
            model_name='room',
            name='description',
            field=models.CharField(blank=True, max_length=180),
        ),
        migrations.AddField(
            model_name='room',
            name='region',
            field=models.CharField(default='auto', max_length=4),
        ),
        migrations.AddField(
            model_name='room',
            name='template_id',
            field=models.CharField(default='6373e770e61bbea99a48ece4', max_length=180),
        ),
    ]