def new_list(list):
    result = []
    for i in list:
        if len(i) > 3:
            result.append(i)
    return result