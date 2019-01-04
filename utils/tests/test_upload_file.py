from django.urls.base import reverse

from accounts.models import Image
from utils.testing import BaseTest


class FileUploadTest(BaseTest):
    def upload_file(self, file_name):
        with open(file_name, 'rb') as fp:
            data = {'file': fp}
            return self.client.post(reverse('upload'), data=data)

    def test_upload(self):
        response = self.upload_file('utils/tests/The_silmarillion.jpg')
        self.assertContains(response, 'url')
        url = response.json()['url']
        Image.objects.get(pk=url)
