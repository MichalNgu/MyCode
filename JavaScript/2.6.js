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
    
    let witness = prompt()
    
    let arrayResults = criminals.filter(function(oneSuspect){
            let tryToFind = oneSuspect.licencePlate.toLowerCase().includes(witness)
    return tryToFind
    })
    
    
    arrayResults.forEach(function(oneSuspect){
    console.log(`Jméno: ${oneSuspect.firstName}`)
    console.log(`Příjmení: ${oneSuspect.secondName}`)
    console.log(`Rok narození: ${oneSuspect.birth}`)
    console.log(`Poznávací značka: ${oneSuspect.licencePlate}`)
    console.log(`Adresa: ${oneSuspect.address}`)
    console.log(`Město: ${oneSuspect.city}`)
    console.log(`-----------------------------`)
    })