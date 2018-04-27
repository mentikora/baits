import os

# export DATABASE_URL="mysql+mysqlconnector://root:apple@localhost/custombaits"

# export DATABASE_URL= "mysql+mysqlconnector://owwmaydx_max:custombaits2018@custombaits.com.ua/owwmaydx_custombaits"

class BaseConfig(object):
    SECRET_KEY = "SO_SECURE"
    SQLALCHEMY_DATABASE_URI = "mysql+mysqlconnector://owwmaydx_max:custombaits2018@custombaits.com.ua/owwmaydx_custombaits"
    SQLALCHEMY_TRACK_MODIFICATIONS = True

    IMAGES_CACHE = '/tmp/flask-images'
    IMAGES_PATH = ['static/public/images']

class TestingConfig(object):
    """Development configuration."""
    SECRET_KEY = "SO_SECURE"
    SQLALCHEMY_DATABASE_URI = os.environ['DATABASE_URL']
    SQLALCHEMY_TRACK_MODIFICATIONS = True

    IMAGES_CACHE = '/tmp/flask-images'
    IMAGES_PATH = ['static/public/images']
