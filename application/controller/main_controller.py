from application.models import Bait, Dom, Color, Comment
from flask import jsonify
from flask_images import resized_img_src


# ADMIN
class AppController:
    def __init__(self):
        pass

    @staticmethod
    def app_info():
        baits = Bait.query.all()
        for b in baits:
            if b.url is not None:
                b.url = resized_img_src(b.url, _external=True, width=150, height=150, mode='crop', quality=95)

        colors = Color.query.all()
        for c in colors:
            if c.url is not None:
                c.url = resized_img_src(c.url,  _external=True, width=150, height=150, mode='crop', quality=95)

        comments = Comment.query.all()
        for cm in comments:
            if cm.file_url is not None:
                cm.file_url = resized_img_src(cm.file_url, _external=True, width=150, height=150, mode='crop', quality=95)

        dom = Dom.get_single()
        dom_json = dom.to_json
        dom_json['baits'] = [i.to_json for i in baits]
        dom_json['colors'] = [j.to_json for j in colors]
        dom_json['comments'] = [k.to_json for k in comments]

        return jsonify(dom=dom_json)
