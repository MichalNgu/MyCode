let password = ["123michal", "michal123", "1234"]

let randomNumber = Math.ceil(Math.random() * 3)
let index = password.length - randomNumber
console.log(password[index])