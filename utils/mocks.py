class SMSMock(object):
    last_phone = None
    last_text = None

    def __init__(self, phone, text, *args, **kwargs):
        self.phone = phone
        self.text = text

    def run(self):
        SMSMock.last_phone = self.phone
        SMSMock.last_text = self.text

    def start(self):
        self.run()
