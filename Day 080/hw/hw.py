import random #random მოდული შეიცავს ფუნქციებს შემთხვევითი რიცხვების შესაქმნელად
guess_number = random.randint(1, 100) #ვიცი რომ .randint არ გვისწავლია, მარა დავალებისთვის დავგუგლე, ამ შემთხვევაში გამოიტანს ნებისმიერ რიცხვს 1-დან 100-მდე
print("Guess any number from 1-100")

while True:
    user_guess = int(input("Enter a number: "))
    if user_guess < guess_number:
        print("The number is higher!")
    elif user_guess > guess_number:
        print("the number is lower!")
    else:
        print("Congrats, you guessed the number right!")
        break