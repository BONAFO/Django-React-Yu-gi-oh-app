
def unpack_values(pack, key):
    data = {}
    if ":" in key:
        indexs = [key.index(":"), len(key)]
        attribute = key[0 : indexs[0]]
        keys = key[(indexs[0] + 1) : indexs[1]].split(",")

        if not pack[attribute] is None:
            data.update({attribute: {}})
            for k in keys:
                data[attribute].update({k: pack[attribute][k]})
        else:
            data = None
    else:
        data.update({key: pack[key]})
    return data
