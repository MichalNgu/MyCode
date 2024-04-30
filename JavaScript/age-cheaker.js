let adultchecker = function(age){
    if (age => 18)
    console.log("Dospělý")
    else
    console.log("dítě")
}

let value = adultchecker(20)

if(value == "Dospělý"){
    console.log("výsledek kontroly věku: " + value)
    console.log("můžeš vstoupit")
}
else{
    console.log("výsledek kontroly věku: " + value)
    console.log("můžeš nevstoupit")
}