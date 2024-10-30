let myForm = document.querySelector("#test-form")

if(localStorage.getItem("users") == null){
    var myArray = []
} else {
    myArray = JSON.parse(localStorage.getItem("users"))
}



myForm.addEventListener("submit", function(i){
    i.preventDefault()

    myArray.push({
        id: "",
        firstName: event.target.elements.firstName.value,
        secondName: event.target.elements.secondName.value,
        crime: event.target.elements.age.value
    })

    event.target.elements.firstName.value = ""
    event.target.elements.secondName.value = ""
    event.target.elements.age.value = ""

    myArrayJSON = JSON.stringify(myArray)
    localStorage.setItem("users", myArrayJSON)
})

// vypisování zpět do stránky
let toList = document.querySelector(".to-list")
toList.addEventListener("click", function(){
    if(localStorage.getItem("users") == null){
        let paragraph = document.createElement("p")
        paragraph.innerHTML = "Nejsou zde záznamy"
        document.querySelector(".list-users").appendChild(paragraph)
        paragraph.classList.add("basic")

    } else {
        let myStorage = localStorage.getItem("users")
        let myStorageJSON = JSON.parse(myStorage)
    
        document.querySelector(".list-users").innerHTML = ""
    
        myStorageJSON.forEach(function(oneCriminal){
            let paragraph = document.createElement("p")
    
            paragraph.innerHTML = 
                `Jméno: ${oneCriminal.firstName},<br>
                Příjmení: ${oneCriminal.secondName},<br>
                věk: ${oneCriminal.crime}`
    
                paragraph.classList.add("basic")
    
            document.querySelector(".list-users").appendChild(paragraph)
        }) 
    }
    
})


let nameFilter = document.querySelector(".name-filter")

let myStorage = localStorage.getItem("users")
let myStorageJ = JSON.parse(myStorage)

nameFilter.addEventListener("input", function(i){
    let search = i.target.value

    let results = myStorageJ.filter(function(oneUser){
        return oneUser.firstName.toLowerCase().includes(search.toLowerCase())
    })

    document.querySelector(".filter-name").innerHTML = ""
    document.querySelector(".list-users").innerHTML = ""
    document.querySelector(".filter-name").classList.add("basic")

    results.forEach(function(oneUser){
        let para = document.createElement("p")
        para.innerHTML = `Jméno: ${oneUser.firstName},<br>
        Příjmení: ${oneUser.secondName},<br>
        Věk: ${oneUser.crime}`
        document.querySelector(".filter-name").appendChild(para)
    })
})