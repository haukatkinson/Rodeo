from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy import Column, ForeignKey, Integer, String, Float

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = "user"
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(256), nullable=False)
    last_name = db.Column(db.String(256), nullable=False)
    email = db.Column(db.String(256), unique=True, nullable=False)
    password = db.Column(db.String(256), nullable=False)
    is_active = db.Column(db.Boolean(), nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

class Register(db.Model):
    __tablename__ = "register"
    id = db.Column(db.Integer, primary_key=True)
    show = db.Column(db.String(), unique=False, nullable=False)
    location = db.Column(db.String(), unique=False, nullable=False)
    price = db.Column(db.String(), unique=False, nullable=False)
    date = db.Column(db.String(), unique=False, nullable=False)
    rules = db.Column(db.String(), unique=False, nullable=False)

    def __repr__(self):
        return f'<Register {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "show": self.show,
            "location": self.location,
            "price": self.price,
            "date": self.date,
            "rules": self.rules,
        }