from django.db import models
import json


class ProductManager(models.Manager):
    @property
    def visible(self):
        return self.get_queryset().filter(hidden=False)


class Comment(models.Model):
    product = models.ForeignKey('products.Product', on_delete=models.CASCADE)
    author = models.ForeignKey('accounts.User', on_delete=models.CASCADE)
    text = models.CharField('متن', max_length=1000)


class Auction(models.Model):
    base_price = models.IntegerField('قیمت پایه')
    deadline = models.CharField('زمان', max_length=1000)
    product = models.ForeignKey('products.Product', on_delete=models.CASCADE)
    prices = models.CharField('قیمت های پیشنهادی', max_length=100000, default='[]')

    def set_prices(self):
        pass

    def add_price(self, user, price):
        prices = self.get_prices()
        for p in prices.items():
            if p['phone'] == user.phone:
                p['price'] = price
                return
        prices += [{'phone': user.phone, 'price': price}]
        self.prices = json.dumps(prices)

    def get_prices(self):
        return json.loads(self.prices)


class Product(models.Model):
    price = models.IntegerField('قیمت')
    CATEGORY_CHOICES = (
        ('DIGITAL_GOODS', 'کالاهای دیجیتال'),
        ('PERSONAL_APPLIANCE', 'آرایش, بهداشتی و سلامت'),
        ('VEHICLES', 'خودرو و ابزار'),
        ('APPAREL', 'مد و پوشاک'),
        ('HOME_AND_KITCHEN', 'خانه و آشپزخانه'),
        ('BOOK_AND_MEDIA', 'کتاب, لوازم تحریر و هنر'),
        ('SPORT_ENTERTAINMENT', 'ورزش و سفر'),
    )
    SUB_CATEGORY_CHOICES = (
        ('MOBILE_PHONE', 'گوشی موبایل'),
        ('MOBILE_ACCESSORIES', 'لوازم جانبی گوشی'),
        ('CAMERA', 'دوربین'),
        ('CAMERA_ACCESSORIES', 'لوازم جانبی دوربین'),
        ('LAPTOP', 'لپ تاپ'),
        ('LAPTOP_ACCESSORIES', 'لوازم جانبی لپ تاپ'),
        ('COMPUTER_PARTS', 'کامپیوتر و تجهیزات جانبی'),
        ('OFFICE_MACHINES', 'ماشین های اداری'),
        ('TABLET', 'تبلت'),
        ('BEAUTY', 'لوازم آرایشی'),
        ('HAIR_CLIPPER', 'لوازم بهداشتی'),
        ('ELECTRICAL_PERSONAL_CARE', 'لوازم شخصی برقی'),
        ('SUNGLASSES', 'عینک آفتابی'),
        ('PERFUME_ALL', 'عطر, ادکلن و اسپری'),
        ('JEWELERY', 'طلا, نقره و زیور آلات'),
        ('HEALTH_CARE', 'ابزار سلامت و طبی'),
        ('CARS', 'خودرو های ایرانی و خارجی'),
        ('CAR_ACCESSORY_PARTS', 'لوازم جانبی خودرو'),
        ('CONSUMABLE_PARTS', 'لوازم مصرفی خودرو'),
        ('MOTORBIKE', 'موتورسیکلت'),
        ('POWER_TOOLS', 'ابزار برقی'),
        ('MEN_APPAREL', 'مردانه'),
        ('WOMEN_APPAREL', 'زنانه'),
        ('WATCH_CLOCK', 'ساعت'),
        ('SPORTS_WEAR', 'پوشاک ورزشی'),
        ('KIS_APPAREL', 'پوشاک کودک و نوزاد'),
        ('PERSONAL_APPLIANCE_ACCESSORY', 'اکسسوری'),
        ('SPORT_SHOES', 'کفش ورزشی'),
        ('VIDEO_AUDIO', 'صوتی و تصویری'),
        ('HOME_APPLIANCE', 'لوازم برقی خانگی'),
        ('SERVING', 'سرو و پذیرایی'),
        ('LIGHTING', 'نور و روشنایی'),
        ('DECORATIVE', 'دکوراتیو'),
        ('PUBLICATION', 'کتاب و مجله'),
        ('TRAINING_PACK', 'محتوای آموزشی'),
        ('SOFTWARE', 'نرم‌افزار'),
        ('STATIONERY', 'لوازم التحریر'),
        ('MUSICAL_INSTRUMENTS', 'آلات موسیقی'),
        ('HANDICRAFT', 'صنایع دستی'),
        ('SPORT', 'لوازم ورزشی'),
        ('SPORT_WEAR', 'پوشاک ورزشی'),
        ('BICYCLE', 'دوچرخه'),
        ('BICYCLE_ACCESSORIES', 'لوازم جانبی دوپرخه'),
        ('HIKING_AND_CAMPING', 'کوهنوردی و کمپینگ'),
        ('TRAVELING_EQUIPMENT', 'تجهیزات سفر'),
    )

    title = models.CharField('عنوان', max_length=200)
    address = models.CharField('آدرس', max_length=100)
    description = models.TextField('توضیحات', max_length=1000, null=True, blank=True)
    prod_year = models.IntegerField('سال چاپ')
    category = models.CharField('دسته‌بندی', max_length=100, choices=CATEGORY_CHOICES)
    sub_category = models.CharField('دسته‌بندی', max_length=100, choices=SUB_CATEGORY_CHOICES)
    image = models.ForeignKey('accounts.Image', on_delete=models.SET_NULL, null=True, blank=True)
    seller = models.ForeignKey('accounts.User', on_delete=models.CASCADE, related_name='selling_products')
    buyer = models.ForeignKey('accounts.User', on_delete=models.CASCADE, null=True, blank=True,
                              related_name='bought_products')
    hidden = models.BooleanField(default=False)
    objects = ProductManager()

    def __str__(self):
        return self.title
