var owl = {character: "Owl"};
var piglet = {character: "Piglet"};
var eeyore = {character: "eeyore"};
var kanga = {character: "Kanga"};
var chris = {character: "Christopher Robin"};
var pooh = {character: "Winnie the Pooh"};
var tigger = {character: "Tigger"};
var heffalumps = {character: "Heffalumps"};
var rabbit = {character: "Rabbit"};
var bees = {character: "Bees"};
var gopher = {character: "Gopher"};

owl.east = chris;
owl.south = piglet;
piglet.east = pooh;
eeyore.east = heffalumps;
eeyore.south = kanga;
chris.north = kanga;
chris.east = rabbit;
chris.south = pooh;
tigger.north = pooh;
pooh.east = bees;
bees.north = chris.east;
rabbit.east = gopher;

var player = {
    location: tigger
}

function move(direction){
    console.log(player.location);
    if (direction == 'north'){
        console.log('hello');
    }
}
move(north)