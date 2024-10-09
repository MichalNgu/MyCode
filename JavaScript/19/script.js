window.addEventListener("scroll", function(){
    let scrolled = window.scrollY;
    let scrollable = document.documentElement.scrollHeight - window.innerHeight;

    if (Math.ceil(scrolled) > 1000){
        let toTop = document.querySelector(".top-page");
        toTop.style.display = "block";

        toTop.addEventListener("click", function(){
            toTop.style.display = "none";
        });
    }
});