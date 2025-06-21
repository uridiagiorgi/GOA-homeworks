names = ["Guram", "Giorgi", "Lasha", "Alexandre", "Nikoloz", "Davit", "Ilia", "Gabriel", "Demetre", "Tato"]
lastnames = ["Kotashvili", "Uridia", "Beqauri", "Uridia", "Uridia", "Popkhadze", "Gurgenidze", "Molodini", "bikashvili", "Kotashvili" ]
age = [13, 13, 31, 18, 17, 14, 16, "idk", 13, 14]
random_nums = [20, 15, 25, 30, 10, 18, 22, 29, 17, 11]
print(names[0:4])
for i in range(3, 8):
    print(lastnames[i])
print(age[-2:-5])
sth = 0
while sth < len(random_nums):
    print(random_nums[sth])
    sth += 1