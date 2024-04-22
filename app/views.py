from django.shortcuts import render
from django.views.generic import TemplateView
from django.http import JsonResponse
from .matscan import process_image

class HomePageView(TemplateView):
    template_name = 'home.html'

    def post(self, request, *args, **kwargs):
        if request.FILES.get('image'):
            image = request.FILES['image']
            description = process_image(image)
            return JsonResponse({'description': description})
        else:
            return JsonResponse({'error': 'No image file provided'})
