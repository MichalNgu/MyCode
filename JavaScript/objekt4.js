//promněné
let name = "Michal"

let person = {
    name: name,
    lastName: "Nguyen",
    age: 15
}

console.log(person)

//return
let person1 = {
    name: "Michal",
    lastName: "Nguyen",
    age: 15,
}

let person2 = {
    name: "pepa",
    lastName: "Novotný",
    age: 20,
}

let personInfo = function(person){
    return{
        basicinfo: person.name + " " + person.lastName,
        age: person.age
    }
}

let result = personInfo(person1)
console.log(result)