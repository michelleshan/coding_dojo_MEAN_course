// Given a string, write a function that will determine whether the braces  - including parentheses (), square brackets [], and curly brackets {} - within the string are valid. That means that any braces within other braces must close before the outer set closes.

function bracesValid(str){
    counter_open = 0;
    counter_closed = 0;
    if (str.length % 2 != 0){
        return false;
    }
    else {
        for (var i = 0; i < str.length; i++){
            if (str.charAt(i) == "(" || str.charAt(i) == "[" || str.charAt(i) == "{"){
                counter_open += 1;
            }
            else if (str.charAt(i) == ")" || str.charAt(i) == "]" || str.charAt(i) == "}"){
                counter_closed += 1;
            }
            if (counter_closed > counter_open) {
                console.log("closed > open")
                return false;
            }
        }
        console.log(counter_open);
        console.log(counter_closed);
        if (counter_closed != counter_open){
            console.log("closed != open")
            return false;
        }
        else{
            return true;
        }
    }
}
console.log(bracesValid("{[(()]{}"))