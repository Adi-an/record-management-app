from django.db import models


class Record(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=20)
    company = models.CharField(max_length=150, blank=True)
    designation = models.CharField(max_length=150, blank=True)
    city = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    experience_years = models.DecimalField(max_digits=4, decimal_places=1)
    notes = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"
