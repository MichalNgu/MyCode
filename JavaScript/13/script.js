let checkbox = document.querySelector("#checkbox")

let check = checkbox.addEventListener("change", function(event){
    if (event.target.checked == true){
        console.log("záškrtnuto")
    }
    else{
        console.log("nezaskrtnuto")
    }
})
