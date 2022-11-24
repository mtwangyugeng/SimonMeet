from django.db import models
from django.contrib.auth.models import User

class Room(models.Model):
    name = models.CharField(max_length = 180)
    description = models.CharField(max_length = 180, blank = True)
    template_id = models.CharField(max_length = 180, default = '6373e770e61bbea99a48ece4')
    region = models.CharField(max_length = 4, default = 'auto')
    
    # timestamp = models.DateTimeField(auto_now_add = True, auto_now = False, blank = True)
    # completed = models.BooleanField(default = False, blank = True)
    # updated = models.DateTimeField(auto_now = True, blank = True)
    
    user = models.ForeignKey(User, on_delete = models.CASCADE, blank = True, null = True)

    def __str__(self):
        return self.name
    