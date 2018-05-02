from flask_wtf import FlaskForm
from flask_wtf.file import FileField, FileRequired, FileAllowed
from wtforms import StringField, PasswordField, BooleanField, SubmitField, FloatField, TextAreaField, SelectField
from wtforms.validators import DataRequired, Email, NumberRange, Optional
from app import photos


class LoginForm(FlaskForm):
    email = StringField('Email', validators=[Email()])
    password = PasswordField('Password', validators=[DataRequired()])
    remember_me = BooleanField('Remember Me')
    submit = SubmitField('Sign In')


class EditBaitForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired()])
    weight = FloatField('Weight', validators=[NumberRange(), DataRequired()])
    price = FloatField('Price', validators=[NumberRange(), DataRequired()])
    body = TextAreaField('Body', validators=[DataRequired()])
    title = StringField('Title', validators=[DataRequired()])
    file = FileField('File', validators=[FileAllowed(photos, u'Image only!'), FileRequired(u'File was empty!')])
    status = SelectField('Status', choices=[('1', 'C++'), ('2', 'Python'), ('3', 'Plain Text')], validators=[Optional()])
    availability = BooleanField('Available')

    submit = SubmitField('Save')


class EditMainInfo(FlaskForm):
    fb_social = StringField('Facebook URL', validators=[Optional()])
    inst_social = StringField('Instagram URL', validators=[Optional()])
    youtube_social = StringField('Youtube URL', validators=[Optional()])

    header_image = FileField('File', validators=[FileAllowed(photos, u'Image only!'), FileRequired(u'File was empty!')])
    header_slogan = StringField('Slogan', validators=[DataRequired()])

    perch_title = StringField('Perch Title', validators=[DataRequired()])
    perch_body = TextAreaField('Perch Body', validators=[DataRequired()])
    perch_url = FileField('Perch Url', validators=[FileAllowed(photos, u'Image only!'), FileRequired(u'File was empty!')])

    heads_title = StringField('Heads Title', validators=[DataRequired()])
    heads_body = TextAreaField('Heads Body', validators=[DataRequired()])
    heads_url = FileField('Heads Url', validators=[FileAllowed(photos, u'Image only!'), FileRequired(u'File was empty!')])

    trout_title = StringField('Trout Title', validators=[DataRequired()])
    trout_body = TextAreaField('Trout Body', validators=[DataRequired()])
    trout_url = FileField('Trout Url', validators=[FileAllowed(photos, u'Image only!'), FileRequired(u'File was empty!')])

    delivery_title = StringField('Delivery Title', validators=[DataRequired()])
    delivery_body = TextAreaField('Delivery Body', validators=[DataRequired()])

    video_url = StringField('Video URL', validators=[DataRequired()])
    video_title = StringField('Video Title', validators=[DataRequired()])
    video_text = TextAreaField('Video Text', validators=[DataRequired()])

    phone = StringField('Phone', validators=[DataRequired()])
    phone_name = StringField('Phone Holder', validators=[DataRequired()])
    phone_1 = TextAreaField('Phone Next', validators=[DataRequired()])
    phone_name_1 = StringField('Phone Next Holder', validators=[DataRequired()])

    submit = SubmitField('Save')