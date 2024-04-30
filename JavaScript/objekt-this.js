let person1 = {
    name: "Michal",
    lastName: "Nguyen",
    age: 15,
    greet: function(){
        console.log(this.name)
        console.log(this.lastName)
        console.log(this.age)
    }
}

let person2 = {
    name: "pepa",
    lastName: "Novotný",
    age: 20,
    greet: function(){
        console.log(this.name)
        console.log(this.lastName)
        console.log(this.age)
    }
}

person1.greet()
person2.greet()