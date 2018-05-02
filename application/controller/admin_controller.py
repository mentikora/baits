from flask_login import current_user, login_user, logout_user
from flask import request, render_template, jsonify, url_for, redirect, g, flash
from application.forms import LoginForm, EditBaitForm, EditMainInfo
from application.models import Bait, User, Dom
from flask_images import resized_img_src
from application.app import photos
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
        baits = AdminController.prepare_baits()
        return render_template('baits.html', baits=baits)

    @staticmethod
    def admin(edit_request, app, db):
        # if current_user.is_authenticated:
        #     return redirect(url_for('admin'))

        form = EditMainInfo()
        if edit_request.method == 'POST':
            if form.validate_on_submit():
                dom = Dom.get_single()

                if dom is None:
                    dom = Dom()
                    db.session.add(dom)

                dom.fb_social = form.fb_social.data
                dom.inst_social = form.inst_social.data
                dom.youtube_social = form.youtube_social.data

                header_f_name = photos.save(form.header_image.data)
                dom.header_image = photos.url(header_f_name)

                dom.header_slogan = form.header_slogan.data

                dom.perch_title = form.perch_title.data
                dom.perch_body = form.perch_body.data
                p_filename = photos.save(form.perch_url.data)
                dom.perch_url = photos.url(p_filename)

                dom.heads_title = form.heads_title.data
                dom.heads_body = form.heads_body.data
                h_filename = photos.save(form.heads_url.data)
                dom.heads_url = photos.url(h_filename)

                dom.trout_title = form.trout_title.data
                dom.trout_body = form.trout_body.data
                t_filename = photos.save(form.trout_url.data)
                dom.trout_url = photos.url(t_filename)

                dom.delivery_title = form.delivery_title.data
                dom.delivery_body = form.delivery_body.data

                dom.video_url = form.video_url.data
                dom.video_title = form.video_title.data
                dom.video_text = form.video_text.data

                dom.phone = form.phone.data
                dom.phone_name = form.phone_name.data
                dom.phone_1 = form.phone_1.data
                dom.phone_name_1 = form.phone_name_1.data

                db.session.commit()

                return render_template('main.html', dom=dom, form=form)
        else:
            single_dom = Dom.get_single()
            if single_dom is not None:
                form.fb_social.data = single_dom.fb_social
                form.inst_social.data = single_dom.inst_social
                form.youtube_social.data = single_dom.youtube_social

                #form.header_image = single_dom.header_image
                form.header_slogan.data = single_dom.header_slogan

                form.perch_title.data = single_dom.perch_title
                form.perch_body.data = single_dom.perch_body
                #form.perch_url.data = single_dom.perch_url

                form.heads_title.data = single_dom.heads_title
                form.heads_body.data = single_dom.heads_body
                #form.heads_url.data = single_dom.heads_url

                form.trout_title.data = single_dom.trout_title
                form.trout_body.data = single_dom.trout_body
                #form.trout_url.data = single_dom.trout_url

                form.delivery_title.data = single_dom.delivery_title
                form.delivery_body.data = single_dom.delivery_body

                form.video_url.data = single_dom.video_url
                form.video_title.data = single_dom.video_title
                form.video_text.data = single_dom.video_text

                form.phone.data = single_dom.phone
                form.phone_name.data = single_dom.phone_name
                form.phone_1.data = single_dom.phone_1
                form.phone_name_1.data = single_dom.phone_name_1

        return render_template('main.html', title='Sign In', form=form)

    @staticmethod
    def colors():
        baits = AdminController.prepare_baits()
        return render_template('colors.html', baits=baits)

    @staticmethod
    def edit_bait(edit_request, app, db):
        # if current_user.is_authenticated:
        #     return redirect(url_for('admin'))
        form = EditBaitForm()
        if edit_request.method == 'POST':
            if form.validate_on_submit():
                bait = Bait()
                bait.name = form.name.data
                bait.weight = form.weight.data
                bait.price = form.price.data
                bait.body = form.body.data
                bait.title = form.title.data
                bait.status = int(form.status.data)
                bait.availability = form.availability.data

                filename = photos.save(form.file.data)
                bait.url = photos.url(filename)

                db.session.add(bait)
                db.session.commit()

                return render_template('edit_or_add_bait.html', bait=bait, form=form)
            #
        else:
            bait_id = request.args.get('id')
            if bait_id is not None:
                b = Bait.get_bait(bait_id)
                form.name.data = b.name
                form.weight.data = b.weight
                form.price.data = b.price
                form.body.data = b.body
                form.title.data = b.title
                form.status.data = b.status
                form.availability.data = b.availability

        return render_template('edit_or_add_bait.html', title='Sign In', form=form)

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
                db.session.commit()

                return redirect(url_for('admin'))
            return render_template('error/404.html', title='Not found')

    @staticmethod
    def prepare_baits():
        baits = Bait.query.all()
        for b in baits:
            b.redirect_url = url_for('edit_bait', _external=True, id=b.id)
            if b.url:
                b.url = resized_img_src(b.url, width=40, height=40, mode='crop', quality=95)

        return baits
