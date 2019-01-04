from django.http.response import JsonResponse
from django.views.generic.base import View

from accounts.models import Image


class UploadView(View):
    def post(self, request):
        file = request.FILES.get('file')
        if not file:
            return JsonResponse({'url': None}, status=400)
        image = Image.objects.create(image=file)
        return JsonResponse({'url': image.pk})
