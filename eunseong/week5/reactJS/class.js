class Animal{
    constructor(leg){
        this.leg = leg
    }
    printAnimal(){
        console.log(this.name+" is "+String(this.leg))
    }
}

// Lioin -> Animal은 유용한 기능 가져오기
class Lion extends Animal{
    constructor(name, leg){
        super(leg) 
        this.name = name
    }
    getName(){
        console.log(this.name)
    }
}

myLion = new Lion("king",4)
myLion.getName()
myLion.printAnimal()