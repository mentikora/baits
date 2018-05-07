from flask_login import current_user, login_user, logout_user
from flask import request, render_template, jsonify, url_for, redirect, g, flash
from application.forms import LoginForm, EditBaitForm, EditMainInfo, EditCommentForm, EditColorForm
from application.models import Bait, User, Dom, Comment, Color
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

                if form.file.data is not None:
                    AdminController.remove_if_exists(bait.file_name)
                    bait.file_name = photos.save(form.file.data)
                    bait.url = photos.url(bait.file_name)

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

                header_data = form.header_image.data
                if header_data is not None:
                    AdminController.remove_if_exists(dom.header_file_name)
                    header_name = photos.save(header_data)
                    dom.header_file_name = header_name
                    dom.header_image = photos.url(header_name)

                dom.header_slogan = form.header_slogan.data

                dom.perch_title = form.perch_title.data
                dom.perch_body = form.perch_body.data

                p_data = form.perch_url.data
                if p_data is not None:
                    AdminController.remove_if_exists(dom.perch_file_name)
                    p_name = photos.save(p_data)
                    dom.perch_file_name = p_name
                    dom.perch_url = photos.url(p_name)

                dom.heads_title = form.heads_title.data
                dom.heads_body = form.heads_body.data

                h_data = form.heads_url.data
                if h_data is not None:
                    AdminController.remove_if_exists(dom.heads_file_name)
                    h_name = photos.save(h_data)
                    dom.heads_file_name = h_name
                    dom.heads_url = photos.url(h_name)

                dom.trout_title = form.trout_title.data
                dom.trout_body = form.trout_body.data

                t_data = form.trout_url.data
                if t_data is not None:
                    AdminController.remove_if_exists(dom.trout_file_name)
                    t_name = photos.save(t_data)
                    dom.trout_file_name = t_name
                    dom.trout_url = photos.url(t_name)

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
        colors = AdminController.prepare_colors()
        return render_template('colors.html', colors=colors)

    @staticmethod
    def edit_color(edit_request, app, db):
        # if current_user.is_authenticated:
        #     return redirect(url_for('admin'))

        form = EditColorForm()
        if edit_request.method == 'POST':
            if form.validate_on_submit():
                color = Color.get_by_code(form.code.data)
                if color is None:
                    color = Color()

                color.name = form.name.data
                color.code = form.code.data
                color.status = form.status.data
                color.availability = form.availability.data

                if form.url.data is not None:
                    AdminController.remove_if_exists(color.file_name)
                    color.file_name = photos.save(form.url.data)
                    color.url = photos.url(color.file_name)

                db.session.add(color)
                db.session.commit()

                return render_template('edit_or_add_color.html', comment=color, form=form)
            #
        else:
            color_id = request.args.get('id')
            if color_id is not None:
                c = Color.get_by_id(color_id)

                form.name.data = c.name
                form.code.data = c.code
                form.status.data = c.status
                form.availability.data = c.availability

        return render_template('edit_or_add_color.html', title='Color', form=form)

    @staticmethod
    def comments():
        comments = AdminController.prepare_comments()
        return render_template('comments.html', comments=comments)

    @staticmethod
    def edit_comment(edit_request, app, db):
        # if current_user.is_authenticated:
        #     return redirect(url_for('admin'))
        form = EditCommentForm()
        if edit_request.method == 'POST':
            if form.validate_on_submit():
                comment = Comment.get_by_name(form.name.data)
                if comment is None:
                    comment = Comment()

                comment.name = form.name.data
                comment.title = form.title.data
                comment.social_url = form.social_url.data
                comment.body = form.body.data

                if form.file.data is not None:
                    AdminController.remove_if_exists(comment.file_name)
                    comment.file_name = photos.save(form.file.data)
                    comment.file_url = photos.url(comment.file_name)

                db.session.add(comment)
                db.session.commit()

                return render_template('edit_or_add_comment.html', comment=comment, form=form)
            #
        else:
            comment_id = request.args.get('id')
            if comment_id is not None:
                c = Comment.get_by_id(comment_id)
                form.name.data = c.name
                form.title.data = c.title
                form.social_url.data = c.social_url

        return render_template('edit_or_add_comment.html', title='Comment', form=form)

    @staticmethod
    def prepare_baits():
        baits = Bait.query.all()
        for b in baits:
            b.redirect_url = url_for('edit_bait', _external=True, id=b.id)
            if b.url:
                b.url = resized_img_src(b.url,  width=40, height=40, mode='crop', quality=95)

        return baits

    @staticmethod
    def prepare_comments():
        comments = Comment.query.all()
        for c in comments:
            c.redirect_url = url_for('edit_comment', _external=True, id=c.id)
            if c.file_url:
                c.file_url = resized_img_src(c.file_url, width=40, height=40, mode='crop', quality=95)

        return comments

    @staticmethod
    def prepare_colors():
        colors = Color.query.all()
        for c in colors:
            c.redirect_url = url_for('edit_color', _external=True, id=c.id)
            if c.url:
                c.url = resized_img_src(c.url, width=40, height=40, mode='crop', quality=95)

        return colors

    @staticmethod
    def remove_if_exists(filename):
        if filename is not None:
            file_path = photos.path(filename)
            if os.path.exists(file_path):
                os.remove(file_path)
