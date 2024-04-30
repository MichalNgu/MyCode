let food = ["jablko", "hruska", "banan"]

console.log(food.indexOf("jablko"))
console.log(food.indexOf("hruska"))
console.log(food.indexOf("banan"))

console.log(food.indexOf("ananas"))

if(food.indexOf("ananas") != -1){
    console.log("nebylo nalezeno")
} else{
    console.log("bylo nalezeno")
}