numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
even_sum = 0
odd_sum = 0
for i in numbers:
    if i % 2 == 0:
        even_sum = even_sum + i
    else:
        odd_sum = odd_sum + i
total_sum = even_sum - odd_sum
print(even_sum)
print(odd_sum)
print(total_sum)