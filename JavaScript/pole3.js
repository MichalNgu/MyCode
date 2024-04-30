//přepsání pole
let pole1 = ["jablko", "hruska", "banan"]
pole1[0] = "ananas"
console.log(pole1)

//přidání posledního elementu
let pole2 = ["jablko", "hruska", "banan"]
pole2.push("ananas")
console.log(pole2)

//odstranení posledního elementu
let pole3 = ["jablko", "hruska", "banan"]
pole3.pop()
console.log(pole3)

//přidání prvniho elementu
let pole4 = ["jablko", "hruska", "banan"]
pole4.unshift("ananas")
console.log(pole4)

//odstranení prvniho elementu
let pole5 = ["jablko", "hruska", "banan"]
pole5.shift()
console.log(pole5)

//odstranění libovolnou hodnotu
let pole6 = ["jablko", "hruska", "banan"]
pole6.splice(1, 1)
console.log(pole6)

//přidání libovolnou hodnotu
let pole7 = ["jablko", "hruska", "banan"]
pole7.splice(1, 0, "ananas")
console.log(pole7)