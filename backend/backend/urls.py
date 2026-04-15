from django.urls import path
from .views import RecordListCreateView, RecordRetrieveUpdateDeleteView

urlpatterns = [
    path('records/', RecordListCreateView.as_view(), name='record-list-create'),
    path('records/<int:pk>/', RecordRetrieveUpdateDeleteView.as_view(), name='record-detail'),
]
