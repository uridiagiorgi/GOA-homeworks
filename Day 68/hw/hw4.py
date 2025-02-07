def append_stuff(lst, items):
    lst.extend(items)  
    return lst


my_list = [5, 8, 20]
new_items = [21, 50, 61]
updated_list = append_stuff(my_list, new_items)
print(updated_list)  