def vending_machine(products, prices, balance):
    for i, product in enumerate(products):
        print(str(i+1) + ". " + product + " - " + str(prices[i]) + " ₾")

    choice = int(input("Select product number: ")) - 1

    if 0 <= choice < len(products) and balance >= prices[choice]:
        balance -= prices[choice]
        print("You got " + products[choice] + "! Remaining balance: " + str(balance) + " ₾")
    else:
        print("Need more money")

products = ["Salty Sticks", "Ice Cream", "Crackers", "Lemonade"]
prices = [1.3, 5.0, 0.9, 2.5]
balance = 2.0

vending_machine(products, prices, balance)
