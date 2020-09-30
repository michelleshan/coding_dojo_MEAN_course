// Challenge 1: Write a function that accepts an array of student objects, as shown below. PRint all of their names and cohorts.
let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

function challengeOne(arr){
    for (var s in students){
        console.log('Name: '+students[s].name+", Cohort: "+students[s].cohort)
    }
}
challengeOne(students)

// Challenge 2: Write a function that accepts an object of users divided into employees and managers, and display the number of characters per employee/manager's name, as shown below, and logs the information to the console.

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
        {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
        {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
};

function challengeTwo(obj){
    var count = 0;
    for (var type in obj){
        console.log(type.toUpperCase());
        for (var person of obj[type]){
            count += 1;
            var characters = person.first_name.length + person.last_name.length;
            console.log(`${count} - ${person.last_name.toUpperCase()}, ${person.first_name.toUpperCase()} - ${characters}`)
        }
    }
}
challengeTwo(users)