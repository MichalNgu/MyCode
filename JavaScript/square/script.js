let div = document.querySelector(".square")

let newLeft = null
let newTop = null

document.querySelector("body").addEventListener("keydown", function(i){
    if(i.key == "ArrowLeft"){
        newLeft = newLeft - 10
        div.style.left = newLeft + "px"
    }
    else if (i.key == "ArrowRight"){
        newLeft = newLeft + 10
        div.style.left = newLeft + "px"
    }
    else if (i.key == "ArrowUp"){
        newTop = newTop - 10
        div.style.top = newTop + "px"
    }
    else if (i.key == "ArrowDown"){
        newTop = newTop + 10
        div.style.top = newTop + "px"
    }
})