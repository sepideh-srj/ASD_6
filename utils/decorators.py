def modifier_method(func):
    def wrapped(self, *args, **kwargs):
        func(self, *args, **kwargs)
        self.save()

    return wrapped
