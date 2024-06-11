let criminals = [{
    firstName: "Martin",
    secondName: "Zelený",
    birth: 1985,
    licencePlate: "85C3322",
    address: "U sloupů 16",
    city: "České Budějovice"
    }, {
    firstName: "Jana",
    secondName: "Růžová",
    birth: 1996,
    licencePlate: "93K3922",
    address: "Malská 29",
    city: "České Budějovice"
    }, {
    firstName: "Filip",
    secondName: "Modrý",
    birth: 1989,
    licencePlate: "2EP6328",
    address: "Stevardská 38",
    city: "České Budějovice"
}]

//uložeť dat z pole
let filter = {
    searchText: ""
}

const renderCriminals = function(Criminals, find){
    let result = Criminals.filter(function(suspect){
        return suspect.licencePlate.toLowerCase().includes(find.searchText.toLowerCase())
    })

    document.querySelector("#idCrime").innerHTML = ""

    result.forEach(function(oneSuspect){
        let para = document.createElement("p")
        para.innerHTML = "jmeno: " + oneSuspect.firstName + "<br/>" + "prijmení: " +  oneSuspect.secondName + "<br/>" + "datum narozeni: " + oneSuspect.birth + "<br/>" + "licence: " + oneSuspect.licencePlate + "<br/>" + "adresa: " + oneSuspect.address + "<br/>" + "mesto: " + oneSuspect.city
        
        document.querySelector("#idCrime").appendChild(para)
    })
}

//načítání dat
let plate = document.querySelector("#plate")
plate.addEventListener("input", function(event){
    filter.searchText = event.target.value
    renderCriminals(criminals, filter)
})
