from django.db import models


class ProductManager(models.Manager):
    @property
    def visible(self):
        return self.get_queryset().filter(hidden=False)


class Product(models.Model):
    price = models.IntegerField('قیمت')
    CATEGORY_CHOICES = (
        ('DIGITAL_GOODS', 'کالاهای دیجیتال'),
        ('PROPERTY', 'املاک'),
        ('VEHICLE', 'وسیله نقلیه'),
        ('BEAUTY', 'زیبایی و سلامت'),
        ('CLOTHING', 'مد و پوشاک'),
        ('HOME_KITCHEN', 'خانه و آشپزخانه'),
        ('BOOK_MEDIA', 'کتاب, لوازم تحریر و هنر'),
        ('ENTERTAINMENT', 'اسباب بازی و کودک'),
        ('SPORT', 'ورزش و سفر'),
        ('OTHERS', 'سایر'),
    )
    title = models.CharField('عنوان', max_length=200)
    address = models.CharField('آدرس', max_length=100)
    description = models.TextField('توضیحات', max_length=1000, null=True, blank=True)
    prod_year = models.IntegerField('سال چاپ')
    category = models.CharField('دسته‌بندی', max_length=100, choices=CATEGORY_CHOICES)
    image = models.ForeignKey('accounts.Image', on_delete=models.SET_NULL, null=True, blank=True)
    seller = models.ForeignKey('accounts.User', on_delete=models.CASCADE, related_name='selling_products')
    buyer = models.ForeignKey('accounts.User', on_delete=models.CASCADE, null=True, blank=True, related_name='bought_products')
    
    hidden = models.BooleanField(default=False)
    objects = ProductManager()

    def __str__(self):
        return self.title