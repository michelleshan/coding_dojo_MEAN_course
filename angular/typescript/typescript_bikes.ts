class Bike{
    price: number;
    max_speed: string;
    miles: number;
    constructor(price: number, max_speed: string){
        this.miles = 0;
        this.price = price;
        this.max_speed = max_speed;
    }
    displayInfo(){
        console.log(`This bike costs $${this.price}, its maximum speed is ${this.max_speed}, and it has ${this.miles} total miles.`);
    }
    ride(){
        console.log('Riding');
        this.miles += 10;
        return this;
    }
    reverse(){
        if (this.miles > 0){
            console.log('Reversing');
            this.miles -= 5;
            return this;
        }
        else{
            console.log('Unable to reverse');
            return this;
        }
    }
}

let AJ = new Bike(1500, "30mph");
let Steven = new Bike(2000, "45mph");
let Tina = new Bike(750, "25mph");

AJ.ride().ride().ride().reverse().displayInfo();
Steven.ride().ride().reverse().reverse().displayInfo();
Tina.reverse().reverse().reverse().displayInfo();