function coinChange(amt){
    var total = consolidate(amt)
    var remainder = 0;
    var change = {
        'dollars': 0,
        'quarters': 0,
        'dimes': 0,
        'nickels': 0,
        'pennies': 0
    }
    change.dollars = Math.floor(total/100);
    remainder = total % 100;
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
coinChange({dollars: 2, dimes: 15, pennies: 5})

function consolidate(amt){
    var total = 0;
    var entries = Object.entries(amt)
    for (var entry in entries){
        if (amt[entry] = 'dollars'){
            total += amt.dollars*100
            console.log(total);
        }
        else if (amt[entry]= 'quarters'){
            total += amt.quarters*25;
            console.log(total);
        }
        else if (amt[entry]= 'dimes'){
            total += amt.dimes*10;
            console.log(total);
        }
        else if (amt[entry]= 'nickels'){
            total += amt.nickels*5;
            console.log(total);
        }
        else if (amt[entry]= 'pennies'){
            total += amt.pennies;
            console.log(total);
        }
    }
    console.log(total)
    return total;
}