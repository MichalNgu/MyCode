let password = "123michal"

//check length
if (password.length > 13){
    console.log("velmi silné heslo")
}
else if (password.length >= 8 && password.length <= 13){
    console.log("silné heslo")
}
else {
    console.log("slabé heslo")
}

//check for 1234
if (password.includes("1234")){
    console.log("heslo nesmí obsahovat 1234")
}
else {
    console.log("heslo je v pořádku")
}