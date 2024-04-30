let number = 3.751651

//zaokrouhlování
console.log(number.toFixed(2))

//zaokrouhlování na celé číslo
console.log(Math.round(number))
console.log(Math.ceil(number))//nahoru
console.log(Math.floor(number))//dolů

// náhodné číslo
console.log(Math.ceil(Math.random() * 10))

//náhodné číslo v rozsahu
let min = 5
let max = 10
console.log(Math.floor(Math.random() * (max - min + 1) + min)) 