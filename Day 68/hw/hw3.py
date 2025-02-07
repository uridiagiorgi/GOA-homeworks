def insert_at_index(lst, index, item):
    lst.insert(index, item)
    return lst
my_list = [10, 20, 35, 40]
new_list = insert_at_index(my_list, 2, "new")
print(new_list)  