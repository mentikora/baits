from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from config import BaseConfig
from flask_bcrypt import Bcrypt
from flask_login import LoginManager

app = Flask(__name__, static_folder="./static/dist", template_folder="./static/public")

login = LoginManager(app)
login.login_view = 'login'

app.config.from_object(BaseConfig)
db = SQLAlchemy(app)

bcrypt = Bcrypt(app)