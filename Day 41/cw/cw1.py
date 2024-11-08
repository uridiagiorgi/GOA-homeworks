def index_num():
    list = ["book", "notebook", "pencil", "pencilcase", "pen"]
    num = int(input("type a number between 0 and 4: "))
    
    if 0 <= num < 5:
        print(list[num])
    else:
        print("error")

index_num()
