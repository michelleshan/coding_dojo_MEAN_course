class Ninja{
    constructor(name){
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log(`My ninja name is ${this.name}`);
    }
    showStats(){
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strengh: ${this.strength}`);
    }
    drinkSake(){
        this.health += 10;
        console.log(this.health);
    }
}

// Extend the Ninja class and create the Sensei class. A Sensei should have 200 Health, 10 speed, and 10 strength by default. In addition, a Sensei should have a new attribute called wisdom, and the default should be 10. Finally, add the speakWisdom() method. speakWisdom() should call the drinkSake() method from the Ninja class, before console.logging a wise message.

class Sensei extends Ninja{
    constructor(name){
        super();
        this.name = name;
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    speakWisdom(){
        const wisdom = super.drinkSake();
        console.log(`What one programmer can do in one month, two programmers can do in two months.`)
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();
superSensei.speakWisdom();