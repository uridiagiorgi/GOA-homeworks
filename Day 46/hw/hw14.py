def square(numbers):
    squared_numbers = []  
    for number in numbers:
        squared_numbers.append(number ** 2)  
    return squared_numbers  # 

numbers_list = [1, 2, 3, 4, 5]
squared_list = square(numbers_list)
print(squared_list)
