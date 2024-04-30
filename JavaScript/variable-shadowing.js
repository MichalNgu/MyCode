// variable shadowing
let name = "Michal"

if(true){
    let name = "Pepa"

    if(true){
        let name = "Jana"
        console.log(name)
    }
    
}

if(true){
    console.log(name)
}
