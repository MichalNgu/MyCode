document.querySelector("#form").addEventListener("submit", function(event){
    event.preventDefault()

    let name = event.target.elements.name.value
    let surname = event.target.elements.surname.value
    let email = event.target.elements.email.value

    let para = document.createElement("p")
    para.innerHTML = "jméno: " + name + "<br/>" + " prijmení: " + surname + "<br />" + " email: " + email
    document.querySelector("#output").appendChild(para)

    event.target.elements.name.value = ""
    event.target.elements.surname.value = ""
    event.target.elements.email.value = ""
})