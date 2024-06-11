document.querySelector("#form").addEventListener("submit", function(event){
    event.preventDefault()

    console.log(event.target.elements.int.value)
    

    let para = document.createElement("p")
    para.textContent = event.target.elements.int.value
    document.querySelector("#output").appendChild(para)

    event.target.elements.int.value = ""
})

