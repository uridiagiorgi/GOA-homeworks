def append_lists(list1, list2):
    list1.extend(list2)  
    return list1

list1 = [19, 27, 366]
list2 = [44, 94, 3]
updated_list = append_lists(list1, list2)
print(updated_list)  
