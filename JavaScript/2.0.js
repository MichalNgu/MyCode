let vladniNarizeni = false
let school = {
    type: "SŠ",
    street: "Marianska",
    city: "Varnsdorf",
    capacity: 60,
    open: function(){
        console.log("School is open")
    },
    close: function(){
        console.log("School is closed")
    }
}

if(vladniNarizeni == true){
    school.open()
}
else{
    school.close()
}
