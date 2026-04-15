from django.urls import path
from .views import RecordListCreateView, RecordRetrieveUpdateView

urlpatterns = [
    path('records/', RecordListCreateView.as_view(), name='record-list-create'),
    path('records/<int:pk>/', RecordRetrieveUpdateView.as_view(), name='record-retrieve-update'),
]
