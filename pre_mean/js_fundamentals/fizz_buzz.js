// function fizzbuzz(n){
//     if (n > 0){
//         for (var i = 1; i < n+1; i++){
//             if (i % 3 == 0 && i % 5 == 0){
//                 console.log("FizzBuzz");
//             }
//             else if (i % 3 == 0 && i % 5 != 0){
//                 console.log("Fizz");
//             }
//             else if (i % 3 != 0 && i % 5 == 0){
//                 console.log("Buzz");
//             }
//             else {
//                 console.log(i);
//             }
//         }
//     }
//     else {
//         console.log("Parameter must be a positive number")
//     }
// }
// fizzbuzz(15)

function fizzbuzz(n){
    var str = "";
    if (n > 0){
        for (var i = 1; i < n+1 ; i++){
            if (i % 3 == 0 && i % 5 == 0){
                str = str.concat("Fizzbuzz, ")
            }
            else if (i % 3 == 0 && i % 5 != 0){
                str = str.concat("Fizz, ");
            }
            else if (i % 3 != 0 && i % 5 == 0){
                str = str.concat("Buzz, ");
            }
            else {
                str = str.concat(i+", ");
            }
        }
    }
    else {
        return console.log("Parameter must be a positive number")
    }
    return console.log(str);
}
fizzbuzz(15)