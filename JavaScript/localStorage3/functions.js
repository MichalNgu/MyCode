
const getSavedNames = function(){
    let names = localStorage.getItem("names")

    if (names !== null){
        return JSON.parse(names)
    } else {
        return []   
    }
}

// funkce pro použití při odesílani folmuraře, uklada do localStorage

const saveNames = function(oneName){
    localStorage.setItem("names", JSON.stringify(names))
}

const generateHTML = function(oneName){
    const div = document.createElement("div")
    const a = document.createElement("a")
    const button = document.createElement("button")

    // nastavení mazacího tlačitka
    button.textContent = "vymazat"
    div.appendChild(button)

    button.addEventListener("click", function(i){
        deleteName(names, oneName.id)
        saveNames(names)
        toList()
    })

    a.textContent = oneName.firstName

    if(oneName.adult === true){
        div.classList.add("adult")
    } else {
        div.classList.add("no-adult")
    }
        
        a.setAttribute("href", "edit.html#" + oneName.id)

        div.appendChild(a)

    return div

}

// podle id najdem index daneho jmena a pomocí splice ho odstraníme
const deleteName = function(ourNames, id){
    const index = ourNames.findIndex(function(nameWantToCheck){
        return nameWantToCheck.id === id
    })

    if(index > -1){
        ourNames.splice(index, 1)
    }
}


const toList = function(){
    document.querySelector(".list").innerHTML = "" 

    let newData = getSavedNames()

    newData.forEach(function(newNames){
        const newContent = generateHTML(newNames)
        document.querySelector(".list").appendChild(newContent)
    })
}