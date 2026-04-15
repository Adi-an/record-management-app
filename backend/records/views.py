from rest_framework import generics
from .models import Record
from .serializers import RecordSerializer


class RecordListCreateView(generics.ListCreateAPIView):
    queryset = Record.objects.all().order_by('-updated_at', '-created_at')
    serializer_class = RecordSerializer


class RecordRetrieveUpdateDeleteView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Record.objects.all()
    serializer_class = RecordSerializer
