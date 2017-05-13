from django.db import models
from django.contrib.auth.models import User
from django_countries import countries

# Create your models here.

class Profile(models.Model):
	user = models.ForeignKey(User,related_name='profile')
	first_name = models.CharField(max_length=255)
	last_name = models.CharField(max_length=255)
	email = models.CharField(max_length=255)
	bio = models.TextField()
	dob = models.DateField()
	image = models.ImageField(upload_to='avatars/',
							height_field="height_field",
							width_field="width_field")
	height_field = models.IntegerField(default=0)
	width_field = models.IntegerField(default=0)
	city = models.CharField(max_length = 100)
	state = models.CharField(max_length = 100)
	country = models.CharField(max_length = 100,choices = countries,
								default='select a country')
	favourite_pet = models.CharField(max_length = 100)

	def __str__(self):
		return "{} {}".format(self.first_name, self.last_name)
