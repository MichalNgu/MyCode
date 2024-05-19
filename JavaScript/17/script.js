let head = document.querySelector("h1")

head.addEventListener("mouseenter", function(i){
    i.target.style.color = "blue"
})

head.addEventListener("mouseleave", function(i){
    i.target.style.color = "red"
})

head.style.fontSize = "60px"