from .array import push


def get_model_field(model):
    field_list = []
    for f in model._meta.get_fields():
        print(f)
        push(field_list, {"name": f.name, "field" : f.verbose_name})
    return field_list


