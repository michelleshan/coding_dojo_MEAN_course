// es5 person class
function personConstructor(name, age){
    // console.log('pc ran')
    this.name = name;
    this.age = age;
    this.greet = function(){
        console.log(`Hello my name is ${this.name} and I am ${this.age} years old today`)
    }
}

let nick = new personConstructor('Nick',111)
console.log(nick)
// nick.greet()

// console.log(nick.greet)

// es6
class Person {
    constructor (name, age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log(`Hello my name is ${this.name} and I am ${this.age} years old today`)
    }
}

let bob = new Person('Bob',22)
console.log(bob)
bob.greet()

class MailMan extends Person{
    constructor(name, age, pay){
        super(name, age)
        this.pay = pay
    }
    greet(){
        console.log('Hello Speedy Delivery here')
        super.greet()
    }
    getPaid(){
        console.log(`Here is your pay of ${this.pay}`)
    }
}

carl = new MailMan('Carl', 78, '$1')
console.log(carl)
carl.greet()
carl.getPaid()
bob.getPaid() // => bob can't get paid :'(  cuz he is only a person and can't access the MailMan extension)