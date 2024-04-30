let people = [{
    name: "Michal",
    age: 15
}, {
    name: "Pepa",
    age: 20
}, {
    name: "Jana",
    age: 10
}]

let result1 = people.findIndex(function(person){
    return person.age == 15
})

console.log(result1)

let result2 = people.findIndex(function(person){
    return person.age == 20
})

console.log(result2)

let result3 = people.findIndex(function(person){
    return person.age == 10
})

console.log(result3)