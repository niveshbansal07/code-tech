from django.urls import path
from .views import home, convert_image, convert_video

urlpatterns = [
    path('', home, name='home'),
    path('convert_image/', convert_image, name='convert_image'),
    path('convert_video/', convert_video, name='convert_video'),
]

from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('media_converter_app.urls')),
]
