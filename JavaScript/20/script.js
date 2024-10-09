let first = document.querySelector(".first")
let scrollEnd = document.querySelector(".scrollEnd").offsetTop

first.addEventListener("click", function(){
    window.scrollTo({
        top: scrollEnd,
        behavior: "smooth"
    })
})
