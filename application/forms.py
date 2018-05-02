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
