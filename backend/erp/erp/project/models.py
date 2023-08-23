from django.db import models
from django.contrib.auth import get_user_model
from djrichtextfield.models import RichTextField

User = get_user_model()
# Create your models here.
class Project(models.Model):
    name = models.CharField(max_length=100)
    description = RichTextField()
    start_date = models.DateField()
    end_date = models.DateField()
    assigned_employees = models.ManyToManyField(User, related_name='projects_assigned')

    def __str__(self):
        return self.name