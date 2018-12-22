from threading import Thread

import requests


class SMS(Thread):
    url = 'http://www.0098sms.com/sendsmslink.aspx?FROM=50002216802&' \
          'TO={to}&TEXT={text}&USERNAME=jsms4545&PASSWORD=26564313&DOMAIN=0098'

    def __init__(self, phone, text, *args, **kwargs):
        if phone.startswith('+98'):
            phone = '0' + phone[3:]
        self.phone = phone
        self.text = text
        super().__init__(*args, **kwargs)

    def run(self):
        requests.get(self.url.format(to=self.phone, text=self.text))
