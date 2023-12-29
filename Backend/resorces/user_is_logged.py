from .JWT import token_decode


def user_is_logged(token):
    return token_decode(token=token)
