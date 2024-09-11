let myForm = document.querySelector("#myForm")
let body = document.querySelector("body")

myForm.addEventListener("submit", function(i){
    i.preventDefault()

    let input = i.target.elements.color.value

    body.style.backgroundColor = input

    i.target.elements.color.value = ""
})