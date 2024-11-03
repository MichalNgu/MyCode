const tax = (income) => {
    if (typeof income === "number"){
        return income * 0.25
    } else {
        throw error("Neplatný výsledek")
    }
    
}

try {
    const result = tax(true)
console.log(result)
} catch (e){
    console.log("Chyba")
}