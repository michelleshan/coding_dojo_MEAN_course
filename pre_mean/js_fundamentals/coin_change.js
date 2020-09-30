// Given a number of US cents, return the optimal configuration (meaning the largest denominations possible) of coins in an object. Use dollars, quarters, dimes, nickels, and pennies.

function coinChange(amt){
    var remainder = 0;
    var change = {
        'dollars': 0,
        'quarters': 0,
        'dimes': 0,
        'nickels': 0,
        'pennies': 0
    }
    change.dollars = Math.floor(amt/100);
    remainder = amt % 100;
    change.quarters = Math.floor(remainder/25);
    remainder = remainder % 25;
    change.dimes = Math.floor(remainder/10);
    remainder = remainder % 10;
    change.nickels = Math.floor(remainder/5);
    remainder = remainder % 5;
    change.pennies = Math.floor(remainder/1);
    remainder = remainder % 1;
    return console.log(change);
}
coinChange(312)
