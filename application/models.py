from flask_login import UserMixin

from app import db, bcrypt, login
from sqlalchemy.orm.exc import NoResultFound
from sqlalchemy.orm.exc import MultipleResultsFound


@login.user_loader
def load_user(id):
    return User.query.get(int(id))


class User(UserMixin, db.Model):
    id = db.Column(db.Integer(), primary_key=True)
    email = db.Column(db.String(255), unique=True)
    password = db.Column(db.String(255))

    def __init__(self, email, password):
        self.email = email
        self.active = True
        self.password = User.hashed_password(password)

    @staticmethod
    def hashed_password(password):
        return bcrypt.generate_password_hash(password).decode("utf-8")

    @staticmethod
    def get_user_with_email_and_password(email, password):
        user = User.query.filter_by(email=email).first()
        if user and bcrypt.check_password_hash(user.password, password):
            return user
        else:
            return None


class Bait(db.Model):
    id = db.Column(db.Integer(), primary_key=True)
    name = db.Column(db.String(255), unique=True)
    weight = db.Column(db.Float())
    url = db.Column(db.String(255))
    file_name = db.Column(db.String(255))
    price = db.Column(db.Integer())
    body = db.Column(db.Text, nullable=False)
    title = db.Column(db.Text, nullable=True)
    status = db.Column(db.Integer())
    availability = db.Column(db.Boolean())
    promoPhoto = db.Column(db.String(255))
    advantages = db.relationship('Advantage', backref='bait', lazy=True)
    redirect_url = ''

    @staticmethod
    def get_bait(bait_id):
        return Bait.query.get(int(bait_id))

    @property
    def to_json(self):
        return {
                'id': self.id,
                'name': self.name,
                'weight': self.weight,
                'url': self.url,

                'price': self.price,
                'body': self.body,
                'title': self.title,
                'status': self.status,

                'availability': self.price,
                'promoPhoto': self.promoPhoto,
                'advantages': [a.to_json() for a in self.advantages]
                }

    @classmethod
    def from_json(cls, json):
        b = Bait()
        b.id = json['id']
        b.name = json['name']
        b.weight = json['weight']
        b.url = json['url']
        b.price = json['price']
        b.body = json['body']
        b.title = json['title']
        b.status = json['status']
        b.availability = json['availability']
        b.promoPhoto = json['promoPhoto']

        advantages = json['advantages']
        [b.advantages.append(a) for a in advantages]

        return b


class Advantage(db.Model):
    id = db.Column(db.Integer(), primary_key=True)
    name = db.Column(db.String(255), unique=True)
    url = db.Column(db.String(255))
    bait_id = db.Column(db.Integer, db.ForeignKey('bait.id'), nullable=False)

    def __init__(self, name, url):
        self.name = name
        self.url = url

    @property
    def to_json(self):
        return {'id': self.id, 'name': self.name, 'url': self.url}

    @classmethod
    def from_json(cls, json):
        name = json['name']
        url = json['url']
        return Advantage(name, url)


class Color(db.Model):
    id = db.Column(db.Integer(), primary_key=True)
    name = db.Column(db.String(255), unique=True)
    code = db.Column(db.String(50), unique=True)
    url = db.Column(db.String(255))
    file_name = db.Column(db.String(255))
    status = db.Column(db.Integer())
    availability = db.Column(db.Boolean())
    redirect_url = ''

    @staticmethod
    def get_by_code(code):
        return Color.query.get(code)

    @staticmethod
    def get_by_id(color_id):
        return Color.query.get(int(color_id))

    @property
    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'url': self.url,
            'code': self.code,
            'status': self.status,
            'availability': self.availability
        }

    @classmethod
    def from_json(cls, json):
        bait_id = json['id']
        name = json['name']
        url = json['url']
        c = Color(bait_id, name, url)
        c.code = json['code']
        c.status = json['status']
        c.availability = json['availability']
        return c


class Dom(db.Model):
    id = db.Column(db.Integer(), primary_key=True)

    fb_social = db.Column(db.String(255))
    inst_social = db.Column(db.String(255))
    youtube_social = db.Column(db.String(255))

    header_image = db.Column(db.String(255))
    header_file_name = db.Column(db.String(255))
    header_slogan = db.Column(db.String(255))

    perch_title = db.Column(db.String(255))
    perch_url = db.Column(db.String(255))
    perch_file_name = db.Column(db.String(255))
    perch_body = db.Column(db.Text, nullable=False)

    heads_title = db.Column(db.String(255))
    heads_url = db.Column(db.String(255))
    heads_file_name = db.Column(db.String(255))
    heads_body = db.Column(db.Text, nullable=False)

    trout_title = db.Column(db.String(255))
    trout_url = db.Column(db.String(255))
    trout_file_name = db.Column(db.String(255))
    trout_body = db.Column(db.Text, nullable=False)

    delivery_title = db.Column(db.String(255))
    delivery_body = db.Column(db.Text, nullable=False)

    video_url = db.Column(db.String(255))
    video_title = db.Column(db.String(255))
    video_text = db.Column(db.Text, nullable=True)

    phone = db.Column(db.String(255))
    phone_name = db.Column(db.String(255))

    phone_1 = db.Column(db.String(255))
    phone_name_1 = db.Column(db.String(255))

    @staticmethod
    def get_single():
        try:
            dom = Dom.query.one()
        except MultipleResultsFound, e:
            print e
            return None
        except NoResultFound, e:
            print e
            return None
        return dom

    @property
    def to_json(self):
        return {
            'id': self.id,
            'fb_social': self.fb_social,
            'inst_social': self.inst_social,
            'youtube_social': self.youtube_social,
            'header_image': self.header_image,
            'header_slogan': self.header_slogan,

            'perch_title': self.perch_title,
            'perch_url': self.perch_url,
            'perch_body': self.perch_body,

            'heads_title': self.heads_title,
            'heads_url': self.heads_url,
            'heads_body': self.heads_body,

            'trout_title': self.trout_title,
            'trout_url': self.trout_url,
            'trout_body': self.trout_body,

            'delivery_title': self.delivery_title,
            'delivery_body': self.delivery_body,

            'video_url': self.video_url,
            'video_title': self.video_title,
            'video_text': self.video_text,

            'phone': self.phone,
            'phone_name': self.phone_name,
            'phone_1': self.phone_1,
            'phone_name_1': self.phone_name_1
        }

    @classmethod
    def from_json(cls, json):
        dom = Dom()

        dom.id = json['id'],

        dom.fb_social = json['fb_social'],
        dom.inst_social = json['inst_social'],
        dom.youtube_social = json['youtube_social'],
        dom.header_file_url = json['header_image'],
        dom.header_slogan = json['header_slogan'],

        dom.perch_title = json['perch_title'],
        dom.perch_url = json['perch_url'],
        dom.perch_body = json['perch_body'],

        dom.heads_title = json['heads_title'],
        dom.heads_url = json['heads_url'],
        dom.heads_body = json['heads_body'],

        dom.trout_title = json['trout_title'],
        dom.trout_url = json['trout_url'],
        dom.trout_body = json['trout_body'],

        dom.delivery_title = json['delivery_title'],
        dom.delivery_body = json['delivery_body'],

        dom.video_url = json['video_url'],
        dom.video_title = json['video_title'],
        dom.video_text = json['video_text'],

        dom.phone = json['phone'],
        dom.phone_name = json['phone_name'],
        dom.phone_1 = json['phone_1'],
        dom.phone_name_1 = json['phone_name_1']

        return dom


class Comment(db.Model):
    id = db.Column(db.Integer(), primary_key=True)
    name = db.Column(db.String(255), unique=True)
    title = db.Column(db.String(255))
    social_url = db.Column(db.String(255))
    file_url = db.Column(db.String(255))
    file_name = db.Column(db.String(255))
    body = db.Column(db.Text, nullable=True)
    redirect_url = ''

    @staticmethod
    def get_by_name(name):
        return Comment.query.get(name)

    @staticmethod
    def get_by_id(comment_id):
        return Comment.query.get(int(comment_id))

    @property
    def to_json(self):
        return {'id': self.id,
                'name': self.name,
                'title': self.title,
                'body': self.body,
                'social_url': self.social_url,
                'file_url': self.file_url}

    @classmethod
    def from_json(cls, json):
        id = json['id']
        name = json['name']
        title = json['title']
        body = json['body']
        social_url = json['social_url']
        file_url = json['file_url']
        return Comment(id, name, title, body, social_url, file_url)
