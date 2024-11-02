let people = [{
    name: "Michal",
    age: 15
},{
    name: "Pepa",
    age: 14
},{
    name: "Jana",
    age: 10
}]

//šipková funkce
let less15 = people.filter((person) => person.age < 15)
console.log(less15)

let people15 = people.filter((person) => person.age == 15)
console.log(people15)

const personmichal = people.filter((person) => person.name == "Michal")
console.log(personmichal)