let criminals = [{
    firstName: "Martin",
    secondName: "Zelený",
    birth: 1985,
    address: "U sloupů 16",
    city: "České Budějovice"
    }, {
    firstName: "Jana",
    secondName: "Růžová",
    birth: 1996,
    address: "Malská 29",
    city: "České Budějovice"
    }, {
    firstName: "Filip",
    secondName: "Modrý",
    birth: 1989,
    address: "Stevardská 38",
    city: "České Budějovice"
    }]

let suspect = prompt("zadej jméno podeřelého")

let result =criminals.findIndex(function(person){
    return person.firstName == suspect
})

if(result == -1){
    console.log("podeřelého nenalezeno")
}

let suspectInfo = criminals[result]

console.log("jméno podeřelého: " + suspectInfo.firstName)
console.log("příjmení podeřelého: " + suspectInfo.secondName)
console.log("datum podeřelého: " + suspectInfo.birth)
console.log("adresa podeřelého: " + suspectInfo.address)
console.log("město podeřelého: " + suspectInfo.city)

