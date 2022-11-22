# todo/todo_api/urls.py : API urls.py
from django.conf.urls import url
from django.urls import path, include
from .views import (
    RoomApiView,
    RoomDetailApiView,
)

urlpatterns = [
    path('api', RoomApiView.as_view()),
    path('api/<int:room_id>/', RoomDetailApiView.as_view()),
]