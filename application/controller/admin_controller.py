from flask_login import current_user, login_user, logout_user
from flask import request, render_template, jsonify, url_for, redirect, g, flash
from application.forms import LoginForm
from application.models import Bait, User
from flask_images import Images, resized_img_src
import os


# ADMIN
class AdminController:
    def __init__(self):
        pass

    @staticmethod
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

    @staticmethod
    def logout():
        logout_user()
        return redirect(url_for('login'))

    @staticmethod
    def baits():
        baits = Bait.query.all()
        for b in baits:
            if b.image_name is not None:
                b.url = resized_img_src(b.image_name, width=40, height=40, mode='crop', quality=95)
        return render_template('admin_baits.html', title='Baits', baits=baits)

    @staticmethod
    def admin():
        return render_template('ample-admin-lite/html/index.html')

    @staticmethod
    def edit_bait(edit_request):
        form = LoginForm()
        bait_id = edit_request.args.get('id')
        bait = Bait.get_bait(bait_id=bait_id)
        if bait.image_name is not None:
            bait.url = resized_img_src(bait.image_name, width=40, height=40, mode='crop', quality=95)
        return render_template('edit_or_add_bait.html', title='Baits', bait=bait, form=form)

    @staticmethod
    def allowed_file(filename):
        ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'}
        return '.' in filename and \
               filename.rsplit('.', 1)[1] in ALLOWED_EXTENSIONS

    @staticmethod
    def upload(upload_request, app, db):
        if upload_request.method == 'POST':
            f = upload_request.files['file']
            bait_id = upload_request.form.get('data')
            bait = Bait.get_bait(bait_id=bait_id)

            if f and AdminController.allowed_file(f.filename) and bait is not None:
                ext = f.filename.rsplit('.', 1)[1]
                new_name = bait_id + '.' + ext
                full_path = os.path.join(app.config['IMAGES_PATH'][0], new_name)
                f.save(full_path)

                bait.url = full_path
                bait.image_name = new_name
                db.session.commit()

                return redirect(url_for('admin'))
            return render_template('error/404.html', title='Not found')
