// // es5
// var
// // es6
// let
// const

// scope

// functionscope
    function something(){
        // all this is in function scope
        var peanut = 'peanut'
        var i = 0
        while (i < 2){
            let peanut += 'butter'
            i++
        }
        console.log(peanut)
    }
something()

// blockscope