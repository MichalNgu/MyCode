let form = document.querySelector("#myForm")
let count = 0

form.addEventListener("submit", function(i){
    // vypnutí výchozího chování
    i.preventDefault()

    console.log(i.target.elements.task.value)

    // count +1
    count += 1

    let input = document.createElement("input")
    input.type = "checkbox"
    input.id = "testovací" + count
    console.log(input)
    document.querySelector("#output").appendChild(input)

    let label = document.createElement("label")
    label.textContent = i.target.elements.task.value
    label.setAttribute("for", "testovací" + count)
    document.querySelector("#output").appendChild(label)

    // vymazání políčka 
     i.target.elements.task.value = ""
})