from django.db import models
from django.utils.text import slugify
from ckeditor_uploader.fields import RichTextUploadingField


# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Post(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True, blank=True)  # Unique URL for each post
    description =RichTextUploadingField()  # Full post content
    short_description = models.CharField(max_length=255, default='Default description')  # Short summary for the card carousel
    image = models.ImageField(upload_to='posts/')
    categories = models.ManyToManyField(Category)  # A post can belong to multiple categories
    created_at = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super(Post, self).save(*args, **kwargs)

    def __str__(self):
        return self.title
