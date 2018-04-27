from flask_login import UserMixin

from application.app import db, bcrypt, login


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
    image_name = db.Column(db.String(255))

    def __init__(self, name, weight):
        self.name = name
        self.weight = weight
        self.url = ''

    @staticmethod
    def get_bait(bait_id):
        return Bait.query.get(int(bait_id))
