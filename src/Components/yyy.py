Game = "Guess a number from 1-100 and be our Lucky Winner"
print(Game)

lucky_number = 36
i = 0
while i < 3:
    guess_number = int(input("Guess Number: "))
    i += 1
    if guess_number == lucky_number:
        print("You are a Winner")
        break
    else:
        print("Try again")