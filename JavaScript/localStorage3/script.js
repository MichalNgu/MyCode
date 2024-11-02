
const names = getSavedNames()

let form = document.querySelector("#test-form")
let check = document.querySelector(".checkBox")

form.addEventListener("submit", function(i){
    i.preventDefault()

    names.push({
        id: uuidv4(),
        firstName: i.target.elements.firstName.value,
        adult: check.checked
    })

    i.target.elements.firstName.value = ""
    check.checked = false
    
    saveNames(names)
})

let buttonL = document.querySelector(".to-list")

buttonL.addEventListener("click", function(i){
    document.querySelector(".list").innerHTML = ""

    let namesF = localStorage.getItem("names")
    let namesFj = JSON.parse(namesF)

    namesFj.forEach(function(oneName){
        const Name = generateHTML(oneName)
        document.querySelector(".list").appendChild(Name)
    })
})

window.addEventListener("storage", function(i){
    location.reload()
})