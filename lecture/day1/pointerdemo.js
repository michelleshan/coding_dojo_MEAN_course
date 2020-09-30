function node(val){
    this.val = val;
    this.up = null;
    this.down = null;
    this.left = null;
    this.right = null;

    this.moveDown = function(){
        return this.down
    }

    this.moveUp function(){
        return this.up
    }
}

var first = new node(9)
var second = new node(7)
var third = new node(100)
// first.next = second;
// console.log(first); // => node { val: 9, next: node { val: 7, next: null }
// console.log(second); // => node { val: 7, next: null }
// console.log(first.next) // => node { val: 7, next: null }

// var runner = first;
// for (var i = 0; i < 10; i++){
//     console.log(runner.val)
//     runner = runner.val;
// }

first.down = third;
third.up = first;
first.right = second;
second.left = first;

// console.log(first)

var runner = first;
runner = runner.moveDown();
runner = runner.moveUp();
console.log(runner)