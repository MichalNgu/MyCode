//více parametru funkce
let soucet = function(a, b, c){
    return a+b+c
}

let value = soucet(5, 10, 15)
console.log(value)

//defaultní hodnota
let game = function(name = "anonymous", score = 0){
    console.log(name)
    console.log(score)
}

game("Michal", 5)