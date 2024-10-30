if (localStorage.getItem("users") === null){
    var myArray = []
} else {
    myArray = JSON.parse(localStorage.getItem("users"))
}

let myForm = document.querySelector("#testForm")

myForm.addEventListener("submit", function(i){
    i.preventDefault()
    myArray.push(i.target.elements.name.value)
    arrayToLS = JSON.stringify(myArray)
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

if(myPresentArrayj !== null){
    myPresentArrayj.forEach(function(oneUser){
        let para = document.createElement("p")
        para.textContent = oneUser
        document.querySelector("#output").appendChild(para)
})
}