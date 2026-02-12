import random

class RandomNumberGenerator:
    def __init__(self, start, end):
        self.start = start
        self.end = end
        self.possible_numbers = set()
        for i in range(self.start, self.end):
            self.possible_numbers.add(i)

    def get_random_number(self):
        number = random.choice(list(self.possible_numbers))
        self.possible_numbers.remove(number)
        return number


LeetCodeList = RandomNumberGenerator(1, 59)

def get_random_number():
    number = LeetCodeList.get_random_number()
    print(number)
    print(f'{len(LeetCodeList.possible_numbers)} left')
    return number

get_random_number()
