function Ninja(name){
    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;
    this.sayName = function(){
        console.log("My ninja name is "+this.name+"!");
    }
    this.showStats = function(){
        console.log("Name: "+this.name+", Health: "+this.health+", Speed: "+speed+", Strength: "+strength);
    }
    this.drinkSake = function(){
        this.health += 10;
    } 
    this.punch = function(opponent){
        if (opponent instanceof Ninja){
            opponent.health -= 5;
            console.log(opponent.name+" was punched by "+this.name+" and lost 5 Health!")
        }
        else {
            console.log("Action cannot be performed because "+opponent.name+" is not a Ninja")
        }
    }
    this.kick = function(opponent){
        if (opponent instanceof Ninja){
            opponent.health -= 15*(strength);
            var healthChange = strength*15;
            console.log(opponent.name+" was kicked by "+this.name+" and lost "+healthChange+" Health!")
        }
        else {
            console.log("Action cannot be performed because "+opponent.name+" is not a Ninja")
        }
    }
}
