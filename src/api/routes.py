"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Register
from api.utils import generate_sitemap, APIException

from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager
import requests
import datetime
import json

api = Blueprint('api', __name__)


@api.route('/signup', methods=['POST'])
def handle_signup():
    body = request.json # get the request body content
    email = request.json.get('email')
    first_name = request.json.get('first_name')
    last_name = request.json.get('last_name')
    password = request.json.get('password')
    print(email, first_name, last_name, password)
    if body is None:
        return "The request body is null", 400
    if not email:
        return 'You need to enter an email',400
    if not first_name:
        return 'You need to enter an first_name',400
    if not last_name:
        return 'You need to enter an last_name',400
    if not password:
        return 'You need to enter a password', 400

    # check_user = User.query.filter_by(email=email)
    check_user = User.query.filter_by(email=email).first()

    if check_user is not None:
        return jsonify({
            'msg': 'The email address already exists. Please login to your account to continue.'
        }),409

    user = User(email=email, first_name=first_name, last_name=last_name, password=password, is_active=True)

    db.session.add(user)
    db.session.commit()
   
    payload = {
        'msg': 'Your account has been registered successfully.',
        'user': user.serialize()
    }

    return jsonify(payload), 200

@api.route('/users', methods=['GET'])
def get_all_users():
    users=User.query.all()
    users_array=[user.serialize() for user in users]
    return jsonify(users_array), 200

@api.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    # if email != "test" or password != "test":
    #     return jsonify({"msg": "Bad email or password"}), 401
    user = User.query.filter_by(email=email, password=password).first()
    if not user :
        return jsonify({"msg": "Bad email or password"}), 401

    access_token = create_access_token(identity=user.id, expires_delta=datetime.timedelta(minutes=60))    
    return jsonify(access_token=access_token)

@api.route('/registrations', methods=['GET'])
def getRegistrations():
    registrations=Register.query.all()
    registrations_array=[register.serialize() for register in registrations]
    return jsonify(registrations_array), 200

@api.route('/register', methods=['POST'])
def eventRegister():
    body = request.json# get the request body content
    show = request.json.get('show')
    location = request.json.get('location')
    date = request.json.get('date')
    price = request.json.get('price')
    rules = request.json.get('rules')
    eventInfo = Register(show= show,location= location,date= date,price= price,rules= rules)
    db.session.add(eventInfo)
    db.session.commit()
    return jsonify(body), 201

@api.route('/register/<int:id>', methods=['DELETE'])
def deleteregister(id):
    register_to_delete = Register.query.get(id)
    db.session.delete(register_to_delete)
    db.session.commit()
    return redirect(url_for("home"))