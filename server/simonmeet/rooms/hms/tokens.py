import jwt
import uuid
import datetime

import os

from .ENV import *

app_access_key = APP_ACCESS_KEY
app_secret = APP_SECRET


def generateManagementToken():
    expires = 24 * 3600
    now = datetime.datetime.utcnow()
    exp = now + datetime.timedelta(seconds=expires)
    return jwt.encode(payload={
        'access_key': app_access_key,
        'type': 'management',
        'version': 2,
        'jti': str(uuid.uuid4()),
        'iat': now,
        'exp': exp,
        'nbf': now
        }, key=app_secret)

def generateAppToken(room_id, user_id, role):
    expires = 24 * 3600
    now = datetime.datetime.utcnow()
    exp  = now+ datetime.timedelta(seconds=expires)
    return jwt.encode(payload={
        "access_key": app_access_key,
        "type":"app",
        "version":2,
        "room_id": room_id,
        "user_id": user_id,
        "role":role,
        "jti": str(uuid.uuid4()),
        "exp": exp,
        "iat": now,
        "nbf": now,
        }, key=app_secret)

if __name__ == '__main__':
    print(generateManagementToken())
 