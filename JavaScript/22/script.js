const age = prompt("kolik ti je let?: ")
let notification 

/*
if (age >= 18) {
    notification = "můžeš vstoupit"
} else {
    notification = "nemůžeš vstoupit"
}
*/

// nebo

notification = age >= 18 ? "můžeš vstoupit" : "nemůžeš vstoupit"

//console.log(notification)

// nebo

const alow = () => "můžete vstoupit"
const disallow = () => "nemůžete vstoupit"

const result = age >= 18 ? alow() : disallow()

console.log(result)