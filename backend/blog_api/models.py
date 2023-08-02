from tkinter import CASCADE
from django.db import models

class category(models.Model):
    name =  models.CharField(max_length=255)
    image = models.ImageField(upload_to='image', null=True, blank=True)

    def __str__(self):
        return self.name
    
class blog(models.Model):
    POST_CHOICES = [
        ('POPULAR', 'Popular')
    ]
    category = models.ForeignKey(category,on_delete=models.CASCADE, null=True)
    title   = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255)
    excerpt = models.CharField(max_length=255,default='')
    content    = models.TextField(null=True, blank=True)
    contentTwo = models.TextField(null=True, blank=True)
    image      = models.ImageField(upload_to='image', null=True, blank=True)
    keywords = models.TextField(null=True, blank=True)
    postlabel = models.CharField(max_length=100, choices=POST_CHOICES, null=True, blank=True)

    def __str__(self):
        return self.title
