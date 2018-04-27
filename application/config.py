import os

# export DATABASE_URL="mysql+mysqlconnector://root:apple@localhost/custombaits"

# export DATABASE_URL=

class BaseConfig(object):
    SECRET_KEY = "SO_SECURE"
    SQLALCHEMY_DATABASE_URI = "mysql+mysqlconnector://owwmaydx_max:custombaits2018@custombaits.com.ua/owwmaydx_custombaits" #os.environ['DATABASE_URL']
    SQLALCHEMY_TRACK_MODIFICATIONS = True

    IMAGES_CACHE = '/tmp/flask-images'
    IMAGES_PATH = ['static/public/images']

class TestingConfig(object):
    """Development configuration."""
    TESTING = True
    DEBUG = True
    WTF_CSRF_ENABLED = False
    SQLALCHEMY_DATABASE_URI = 'sqlite:///:memory:'
    DEBUG_TB_ENABLED = True
    PRESERVE_CONTEXT_ON_EXCEPTION = False
