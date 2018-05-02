from application.models import Bait, Dom, Color
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
                b.url = resized_img_src(b.url, width=150, height=150, mode='crop', quality=95)

        colors = Color.query.all()
        for c in colors:
            if c.url is not None:
                c.url = resized_img_src(c.url, width=150, height=150, mode='crop', quality=95)

        dom = Dom.query.first()
        dom_json = dom.to_json
        dom_json['baits'] = [i.to_json for i in baits]

        return jsonify(dom=dom_json)
