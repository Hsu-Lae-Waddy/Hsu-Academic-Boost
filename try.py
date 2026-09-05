class GameCharacter():
    gameName="COC"

    @classmethod
    def ShowGameName(cls):
        print("Game Name: ", cls.gameName)

    def __init__(self,name,health,attack_power,Level):
        self.name=name
        self.health=health
        self.attack_power=attack_power
        self.level=Level
    def intro(self):
        print("I am hero")

firstCharacter=GameCharacter("Poki",20,2,5)
SecondCharacter=GameCharacter("YoYo",12,5,10)
firstCharacter.intro()
SecondCharacter.intro()
print(firstCharacter.name)
print(SecondCharacter.level)
firstCharacter.ShowGameName()
SecondCharacter.ShowGameName()

        
