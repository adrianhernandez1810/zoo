var animalPopulation =  0;
function run() {
    var tigger = new Tiger("Tigger");
    tigger.eat("meat");
    // tigger.eat("kibble");
    var pooh = new Bear("Pooh");
    pooh.eat("fish");
    pooh.eat("meat");
    var rarity = new Unicorn("Rarity");
    rarity.eat("marshmallow");
    var gemma = new Giraffe("Gemma");
    gemma.eat("meat");
    gemma.eat("leaves");
    var stinger = new Bee("Stinger");
    stinger.eat("ice cream");
    stinger.eat("pollen");
    var zoebot = new Zookeeper("Mr.Albinson");
    var animals = [tigger, pooh, gemma, stinger, rarity];
    zoebot.feedsAnimals(animals, "cheese");
    console.log(Animal.getPopulation());


}
function sleep(name){
    console.log(name + " sleeps for 8 hours");
}
var favoriteFood = "bacon";

function eat(name, food) {
    console.log(name + " eats " + food);
    food == this.favoriteFood ? console.log("YUM!!! " + name + " wants more " + food): sleep("tigger");
}

class Animal{
    constructor(name, favoriteFood){
        this.name = name;
        this.favoriteFood = favoriteFood;
        animalPopulation++;

    }
    static getPopulation() {
        return animalPopulation;
    }

    sleep(name){
        console.log(this.name + "sleeps for 8 hours");
    }
    eat(food){
        console.log(this.name + " eats " + food);
        food == this.favoriteFood ? console.log("YUM!!! " + this.name + " wants more " + food): this.sleep(this.name);
    }
}
class Tiger extends Animal {
   constructor(name){
       super(name, "meat")
   }
    sleep(){
        console.log(this.name + " sleeps for 8 hours");
}
    eat(food){
        console.log(this.name + " eats " + food);
        food == this.favoriteFood ? console.log("YUM!!! " + this.name + " wants more " + food): this.sleep("tigger");
}

}

class Bear extends Animal {
    constructor(name){
        super(name,"fish")
    }
    eat(food){
        console.log(this.name + " eats " + food);
        food == this.favoriteFood ? console.log("YUM!!! " + this.name + " wants more " + food): this.sleep();
    }
    sleep(){
        console.log(this.name + " hibernates for 4 months");
    }
}
class Unicorn extends Animal {
    constructor(name){
        super(name, "marshmallow")
    }
    sleep(){
        console.log(this.name + " sleeps in a cloud");
    }
    eat(food){
        console.log(this.name + " eats " + food);
        if(food == this.favoriteFood) {
            console.log("YUM!!! " + this.name + " wants more " + food);
            this.sleep();
        } else {
            this.sleep();
        }
    }
}
class Giraffe extends Animal {
    constructor(name){
        super(name, "leaves")
    }
    sleep(){
        console.log(this.name + " sleeps for 8 hours");
    }
    eat(food){
        if(food == this.favoriteFood) {
            super.eat("leaves");
            this.sleep();
        } else {
            console.log("YUCK!!! " + this.name + " will not eat " + food);
        }
    }
}
class Bee extends Animal{
    constructor(name){
        super(name, "pollen")
    }
    sleep(){
        console.log(this.name + " never sleeps")
    }
    eat(food){
        if(food == this.favoriteFood){
            super.eat("pollen");
            this.sleep();
        } else{
            console.log("YUCK!!! " + this.name + " will not eat " + food);
        }
    }
}
class Zookeeper {
    constructor(name){
        this.name = name;
    }
    feedsAnimals(animals, food){
        console.log(this.name + " is feeding " + food + " to " + animalPopulation + " total animals ");
        for(var i = 0; i > animals.length; i++){
            animals[i].eat(food);
        }
    }
}



// sleep("Tigger");
// eat("Tigger", "meat");
// eat("Tigger", "bacon");