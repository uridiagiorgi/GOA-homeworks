operator = input('enter an operator: ')
num1 = int(input('enter a number: '))
num2 = int(input('enter a second number: '))
def calc(operator, num1, num2):
    if operator == '+':
        print(num1 + num2)
    if operator == '-':
        print(num1 - num2)
    if operator == '*':
        print(num1 * num2)
    if operator == '/':
        print(num1 / num2)
    if operator == '/':
        if num2 == 0:
            print('error')
        else:
            print(num1 / num2)
print(calc(operator, num1, num2))
        