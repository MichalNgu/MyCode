/*

// přidání položky
localStorage.setItem("location", "Rumburk")
localStorage.setItem("name", "Michal")

// update položky
localStorage.setItem("name", "Pepa")

// získání položky
localStorage.getItem("name")

// odstranenie položky
localStorage.removeItem("name")

// odstranenie vsetkých položiek
localStorage.clear()

*/

let user = {
    name: "Michal",
    age: 15
}

let userJSON = JSON.stringify(user)
localStorage.setItem("user", userJSON)

let userFromLS = localStorage.getItem("user")
let myUser = JSON.parse(userFromLS)

console.log("ahoj ja sem" + myUser.name + "a je mi " + myUser.age + "let")