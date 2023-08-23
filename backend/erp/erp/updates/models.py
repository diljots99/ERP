from django.db import models
from django.contrib.auth import get_user_model
from erp.project.models import Project
from djrichtextfield.models import RichTextField
User = get_user_model()

class DailyUpdate(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    employee = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateField()
    update_text = RichTextField(null=True)
    task_name = models.TextField(null=True)
    hours_billed = models.FloatField(default=0,null=True)
    time_spent = models.FloatField(default=0,null=True)

    def __str__(self):
        return f"{self.id}. Update by {self.employee.name if self.employee.name else self.employee.username} on {self.date}"

