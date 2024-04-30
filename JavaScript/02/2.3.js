let name1 = prompt("zadej jméno")
let name2 = prompt("zadej jméno")
let name3 = prompt("zadej jméno")

let pole = []

pole.push(name1)
pole.push(name2)
pole.push(name3)

let name4 = prompt("zadej jméno")
let name5 = prompt("zadej jméno")
let name6 = prompt("zadej jméno")

pole.unshift(name4)
pole.unshift(name5)
pole.unshift(name6)

console.log(pole)