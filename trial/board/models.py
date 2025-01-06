from django.db import models
from django.utils import timezone
import uuid

# Create your models here.

class Board(models.Model):
    id = models.UUIDField(primarykey=True, default=uuid.uuid4, editable=False)
    username = models.CharField(verbose_name='ユーザ名', maxlength=15)
    content = models.CharField(verbose_name='投稿内容',maxlength=200)
    timestamps = models.DateTimeField(verbose_name="タイムスタンプ")