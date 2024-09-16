num = 1
total_sum = 0
while total_sum < 50:
    total_sum += num
    if total_sum + num == 50:
        break
    num += 1
print(total_sum)