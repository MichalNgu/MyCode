let nameId = location.hash.substring(1)
let names = getSavedNames()

let search = names.find(function(oneName){
    return oneName.id === nameId
})

if(search === undefined){
    location.assign("index.html")
}

document.querySelector("#editName").value = search.firstName

let changing = document.querySelector("#changForm")

changing.addEventListener("submit", function(i){
    i.preventDefault()

    search.firstName = i.target.elements.editName.value

    saveNames(names)
    
})

window.addEventListener("storage", function(i){
    if(i.key === "names"){
        names = JSON.parse(i.newValue)
    }

    let search = names.find(function(oneName){
        return oneName.id === nameId
    })

    if(search === undefined){
        location.assign("index.html")
    }
    
    document.querySelector("#editName").value = search.firstName
})