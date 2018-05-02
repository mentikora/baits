# export DATABASE_URL="mysql+mysqlconnector://root:apple@localhost/custombaits"
import os


class BaseConfig(object):
    SQLALCHEMY_DATABASE_URI =  "mysql+mysqlconnector://root:apple@localhost/custombaits" #"mysql+mysqlconnector://owwmaydx_max:custombaits2018@custombaits.com.ua/owwmaydx_custombaits"
    SQLALCHEMY_TRACK_MODIFICATIONS = True

    IMAGES_CACHE = '/tmp/flask-images'
    IMAGES_PATH = ['/images']
    UPLOADED_PHOTOS_DEST = os.getcwd() + '/images'
    SECRET_KEY = "SO_SECURE"
