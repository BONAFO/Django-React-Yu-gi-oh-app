def push(arr, element):
    index = len(arr)
    arr.insert(index, element)
    return arr


# def queryset_to_arr(queryset):
#     new_list = []
#     for v in queryset.values():
#         push(new_list, v)
#     return new_list

def queryset_to_arr(queryset):
    new_list = []
    for v in queryset:
        push(new_list, v)
    return new_list

def queryset_to_dict(queryset):
    new_dict = {}
    for v in queryset:
        new_dict.update({v : queryset[v]})
    return new_dict