import jwt , os


def token_sign(payLoad):
    try:
        return jwt.encode(
            payLoad, os.getenv("JWT_SECRET"), algorithm=os.getenv("JWT_ALGORITHM")
        )
    except Exception as error:
        print(error)
        return False


def token_decode(token):
    try:
        return jwt.decode(
            token, os.getenv("JWT_SECRET"), algorithms=os.getenv("JWT_ALGORITHM")
        )
    except Exception as error:
        print(error)
        return False

def clean_token(token):
    token = token.replace("Bearer", "")
    token = token.strip()
    return token


def validate_user_token(token):
    token = clean_token(token=token)
    user = token_decode(token=token)
    if user != False:
        return user
    else: 
        raise Exception("Token Invalido > [" + token + "]")