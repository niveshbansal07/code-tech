from django.shortcuts import render
from django.core.files.storage import default_storage
from django.http import JsonResponse
from PIL import Image
import os
import subprocess

def home(request):
    return render(request, 'index.html')

def convert_image(request):
    if request.method == 'POST' and request.FILES.get('image'):
        uploaded_file = request.FILES['image']
        output_format = request.POST.get('format')
        file_name, _ = os.path.splitext(uploaded_file.name)
        new_file_name = f"{file_name}.{output_format}"
        file_path = default_storage.save(uploaded_file.name, uploaded_file)
        
        image = Image.open(default_storage.path(file_path))
        converted_path = default_storage.path(f"converted_{new_file_name}")
        image.save(converted_path)
        
        return JsonResponse({'download_url': f"/media/converted_{new_file_name}"})
    return JsonResponse({'error': 'Invalid request'})

def convert_video(request):
    if request.method == 'POST' and request.FILES.get('video'):
        uploaded_file = request.FILES['video']
        output_format = request.POST.get('format')
        file_name, _ = os.path.splitext(uploaded_file.name)
        new_file_name = f"{file_name}.{output_format}"
        file_path = default_storage.save(uploaded_file.name, uploaded_file)
        
        input_path = default_storage.path(file_path)
        output_path = default_storage.path(f"converted_{new_file_name}")
        
        command = ["ffmpeg", "-i", input_path, output_path]
        subprocess.run(command, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        
        return JsonResponse({'download_url': f"/media/converted_{new_file_name}"})
    return JsonResponse({'error': 'Invalid request'})
