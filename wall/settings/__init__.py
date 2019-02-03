from envparse import env

deploy = True
try:
    deploy = env.int('DEPLOY')
except:
    pass

if deploy:
    from wall.settings.deploy import *
else:
    from wall.settings.local import *
