# Generated by Django 4.2.3 on 2023-08-02 12:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog_api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='category',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='image'),
        ),
    ]
