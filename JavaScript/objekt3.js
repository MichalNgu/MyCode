let person1 = {
    name: "Michal",
    age: 12,
    city: "Praha",
    gender: "male",
}

let person2 = {
    name: "Jana",
    age: 10,
    city: "Brno",
    gender: "female",
}

let person3 = {
    name: "Pepa",
    age: 20,
    city: "Ostrava",
    gender: "male",
}

let personInfo = function(person){
    if(person.gender == "male"){
        console.log("jmenuje se " + person.name + "a je mu " + person.age + "let a pocházím z města " + person.city)
    }
    else if(person.gender == "female"){
        console.log("jmenuje se " + person.name + "a je jí " + person.age + "let a pocházím z města " + person.city)
    }
}

personInfo(person1)
personInfo(person2)
personInfo(person3)