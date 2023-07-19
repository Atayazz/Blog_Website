from django.contrib import admin
from .models import Category, Tag, Author, Post

# Register your models here.

admin.site.register(Category)
admin.site.register(Tag)
admin.site.register(Author)


class PostAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'pub_date')
    list_filter = ('author', 'categories', 'tags')
    search_fields = ('title', 'content')
    prepopulated_fields = {'slug': ('title',)}

admin.site.register(Post, PostAdmin)
