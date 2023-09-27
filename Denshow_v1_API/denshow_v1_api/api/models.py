import uuid

from django.db import models

def load_path_video(instance, filename):
    return "/".join(["video", str(instance.title)+str(".mp4")])

def load_path_thum(instance, filename):
    ext = filename.split(".")[-1]
    return "/".join(["thum", str(instance.title)+str(".")+str(ext)])

class Video(models.Model):
    id = models.UUIDField(default=uuid.uuid4,
                          primary_key=True, editable=False)
    title = models.CharField(max_length=30, blank=False)
    video = models.FileField(blank=False, upload_to=load_path_video)
    thum = models.ImageField(blank=False, upload_to=load_path_thum)
    like = models.IntegerField(default=0)

    def __str__(self):
        return self.title