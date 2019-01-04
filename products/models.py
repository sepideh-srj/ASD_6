from django.db import models


class ProductManager(models.Manager):
    @property
    def visible(self):
        return self.get_queryset().filter(hidden=False)


class Product(models.Model):
    PRICE = 600
    GENRE_CHOICES = (
        ('PROPERTY', 'املاک'),
        ('VEHICLE', 'وسیله نقلیه'),
        ('DIGITAL-GOODS', 'کالاهای دیجیتال'),
        ('BEAUTY', 'زیبایی و سلامت'),
        ('CLOTHING', 'مد و پوشاک'),
        ('HOME-KITCHEN', 'خانه و آشپزخانه'),
        ('BOOK-MEDIA', 'کتاب, لوازم تحریر و هنر'),
        ('ENTERTAINMENT', 'اسباب بازی و کودک'),
        ('SPORT', 'ورزش و سفر'),
        ('OTHERS', 'سایر'),
    )
    title = models.CharField('عنوان آگهی', max_length=200)
    city = models.CharField('شهر', max_length=100)
    description = models.TextField('توضیحات', max_length=1000, null=True, blank=True)
    pro_year = models.IntegerField('سال تولید')
    category = models.CharField('دسته‌بندی', max_length=100, choices=GENRE_CHOICES)
    image = models.ForeignKey('accounts.Image', on_delete=models.SET_NULL, null=True, blank=True)
    owner = models.ForeignKey('accounts.User', on_delete=models.CASCADE, related_name='owned_products')
    hidden = models.BooleanField(default=False)
    objects = ProductManager()

    def __str__(self):
        return self.title

    def hide(self):
        self.hidden = True
        self.save(update_fields=['hidden'])
        self.clear_requests()

    def clear_requests(self):
        self.borrow_requests.filter(state='PENDING').update(state='REJECTED')

    def show(self):
        self.hidden = False
        self.save()
