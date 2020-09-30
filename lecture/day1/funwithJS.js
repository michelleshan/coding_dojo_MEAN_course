var number = 9
var name = "Bob"
var arr = []
var obj = {}

var whatis = number + name
console.log(whatis) // => 9Bob
number += 10 
console.log(whatis) // => 19
name += ' the great'
console.log(name) // => Bob the great
arr.push(9)
arr.push(8)
arr.push(7)
console.log(arr) // => [9, 8, 7]
arr[0] = 18
console.log(arr) // => [18, 8, 7]
var last_value = arr.pop()
console.log(arr,last_value,name) // => [18, 8] 7 Bob the great

obj['name'] = 'carl'
console.log(obj) // => {name: 'carl'}
console.log(obj['name']) // => carl

var students = []

var bob = {
    'name': 'bob',
    'age': 45,
    'saying': saying('bob'),
    'favNumbs': [5,13,78],
    'bestfriend': 'carl'
}

var carl = {
    'name': 'carl',
    'age': 36,
    'saying': saying('carl'),
    'favNumbs': [4,19,22],
    'bestfriend': 'bob'
}

var students = [bob, carl]
console.log(students[0]) // => {name: 'bob', age: 45}
console.log(students[0]['name']) // => bob
console.log(students[0].name) // => bob

for (var i = 0; i < students.length; i++){
    console.log(students[i].favNumbs)
    console.log(students[i].saying)
    for (var y = 0; y < students[i].favNumbs; y++){
        console.log(students[i].favNumbs[y])
    }
}
// => [5,13,78]
//    I am bob
// => [4,19,22]
//    I am carl

function saying(name){
    return ('I am '+name)
}

