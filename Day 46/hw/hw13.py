def average(numbers):
    if len(numbers) == 0:
        return 0
    total = sum(numbers)  
    count = len(numbers)
    return total / count  
numbers_list = [10, 20, 30, 40, 50]
average = average(numbers_list)
print(average)
