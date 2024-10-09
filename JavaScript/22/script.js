let array = []

let myForm = document.querySelector("#testForm")

myForm.addEventListener("submit", function(i){
    i.preventDefault()
    array.push(i.target.elements.name.value)
    arrayToLS = JSON.stringify(array)
    localStorage.setItem("users", arrayToLS)
    i.target.elements.name.value = ""

    let myLS = localStorage.getItem("users")
    let myLSj = JSON.parse(myLS)

    let para = document.createElement("p")
    para.textContent = myLSj[myLSj.length - 1]
    document.querySelector("#output").appendChild(para)
    
})

let myPresentArray = localStorage.getItem("users")
let myPresentArrayj = JSON.parse(myPresentArray)

myPresentArrayj.forEach(function(oneUser){
    let para = document.createElement("p")
    para.textContent = oneUser
    document.querySelector("#output").appendChild(para)
})