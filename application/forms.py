from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, BooleanField, SubmitField, FloatField, TextAreaField, SelectField, FileField
from wtforms.validators import DataRequired, Email, NumberRange


class LoginForm(FlaskForm):
    email = StringField('Email', validators=[Email()])
    password = PasswordField('Password', validators=[DataRequired()])
    remember_me = BooleanField('Remember Me')
    submit = SubmitField('Sign In')


class EditBaitForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired()])
    weight = FloatField('Weight', validators=[NumberRange(), DataRequired()])
    price = FloatField('Price')
    body = TextAreaField('Body', validators=[DataRequired()])
    title = StringField('Title', validators=[DataRequired()])
    file = FileField('File', validators=[DataRequired()])
    status = SelectField('Status', validators=[DataRequired()], choices={1, 2, 3, 4})
    availability = BooleanField('Available')

    submit = SubmitField('Save')
