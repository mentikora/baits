import os

from flask import Flask
from flask import request, render_template, jsonify, url_for, redirect, g, flash
from flask_bcrypt import Bcrypt
from flask_bootstrap import Bootstrap
from flask_images import Images, resized_img_src
from flask_login import LoginManager
from flask_login import current_user, login_user, logout_user, login_required
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.exc import IntegrityError

from auth import generate_token, requires_auth, verify_token
from config import BaseConfig
from forms import LoginForm

app = Flask(__name__, static_folder="./public/static", template_folder="./public")
app.config.from_object(BaseConfig)

bootstrap = Bootstrap(app)
login = LoginManager(app)
login.login_view = 'login'
images = Images(app)

db = SQLAlchemy(app)
migrate = Migrate(app, db)
bcrypt = Bcrypt(app)

from models import User, Bait

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


@app.route("/api/create_user", methods=["POST"])
def create_user():
    incoming = request.get_json()
    user = User(
        email=incoming["email"],
        password=incoming["password"]
    )
    db.session.add(user)

    try:
        db.session.commit()
    except IntegrityError:
        return jsonify(message="User with that email already exists"), 409

    new_user = User.query.filter_by(email=incoming["email"]).first()

    return jsonify(
        id=user.id,
        token=generate_token(new_user)
    )


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


# ADMIN
@app.route('/login', methods=['GET', 'POST'])
def login():
    if current_user.is_authenticated:
        return redirect(url_for('admin'))
    form = LoginForm()
    if form.validate_on_submit():
        email = form.email.data
        pwd = form.password.data
        user = User.get_user_with_email_and_password(email, pwd)
        if user is None:
            flash('Invalid name or password')
            return redirect(url_for('login'))
        login_user(user, remember=form.remember_me.data)
        return redirect(url_for('admin'))
    return render_template('login.html', title='Sign In', form=form)


@app.route('/logout')
def logout():
    logout_user()
    return redirect(url_for('login'))


@app.route('/admin')
@login_required
def admin():
    baits = Bait.query.all()
    for b in baits:
        if b.image_name is not None:
            b.url = resized_img_src(b.image_name, width=40, height=40, mode='crop', quality=95)
    return render_template('admin_baits.html', title='Baits', baits=baits)


@app.route('/edit_bait', methods=["GET"])
@login_required
def edit_bait():
    form = LoginForm()
    bait_id = request.args.get('id')
    bait = Bait.get_bait(bait_id=bait_id)
    if bait.image_name is not None:
        bait.url = resized_img_src(bait.image_name, width=40, height=40, mode='crop', quality=95)
    return render_template('edit_or_add_bait.html', title='Baits', bait=bait, form=form)


ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'}


def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1] in ALLOWED_EXTENSIONS


@app.route('/upload', methods=['POST', 'DELETE'])
@login_required
def upload():
    if request.method == 'POST':
        f = request.files['file']
        bait_id = request.form.get('data')
        bait = Bait.get_bait(bait_id=bait_id)

        if f and allowed_file(f.filename) and bait is not None:
            ext = f.filename.rsplit('.', 1)[1]
            new_name = bait_id + '.' + ext
            full_path = os.path.join(app.config['IMAGES_PATH'][0], new_name)
            f.save(full_path)

            bait.url = full_path
            bait.image_name = new_name
            db.session.commit()

            return redirect(url_for('admin'))
        return render_template('error/404.html', title='Not found')
