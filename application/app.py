from flask import Flask
from flask import request, render_template, jsonify, g
from flask_bcrypt import Bcrypt
from flask_bootstrap import Bootstrap
from flask_images import Images
from flask_login import LoginManager
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
from flask_login import login_required
from auth import generate_token, requires_auth, verify_token
from config import BaseConfig

app = Flask(__name__, static_folder="./public/static", template_folder="./public")
app.config.from_object(BaseConfig)

bootstrap = Bootstrap(app)
login = LoginManager(app)
login.login_view = 'login'
images = Images(app)

db = SQLAlchemy(app)
migrate = Migrate(app, db)
bcrypt = Bcrypt(app)


from models import User
from controller.admin_controller import AdminController as Admin
from controller.main_controller import AppController as MainApp


@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')


@app.route('/<path:path>', methods=['GET'])
def any_root_path(path):
    return render_template('index.html')


@app.route("/api/user", methods=["GET"])
@requires_auth
def get_user():
    return jsonify(result=g.current_user)


@app.route("/api/get_token", methods=["POST"])
def get_token():
    incoming = request.get_json()
    user = User.get_user_with_email_and_password(incoming["email"], incoming["password"])
    if user:
        return jsonify(token=generate_token(user))

    return jsonify(error=True), 403


@app.route("/api/is_token_valid", methods=["POST"])
def is_token_valid():
    incoming = request.get_json()
    is_valid = verify_token(incoming["token"])

    if is_valid:
        return jsonify(token_is_valid=True)
    else:
        return jsonify(token_is_valid=False), 403


# App
@app.route('/app_info', methods=['GET', 'POST'])
def app_info():
    return MainApp.app_info()


# ADMIN
@app.route('/login', methods=['GET', 'POST'])
def login():
    return Admin.login()


@app.route('/logout')
def logout():
    return Admin.logout()


@app.route('/admin')
@login_required
# @login_required
def admin():
    return Admin.admin()


@app.route('/baits')
@login_required
def baits():
    return Admin.baits()


@app.route('/edit_bait', methods=["GET"])
@login_required
def edit_bait():
    return Admin.edit_bait(request)


@app.route('/upload', methods=['POST', 'DELETE'])
@login_required
def upload():
    return Admin.upload(request, app, db)
