
let para = document.querySelectorAll("p")

para.forEach(function(onePara){
    if(onePara.textContent.toLowerCase().includes("3")){
        onePara.remove()
    }
})


const paragraphs = document.createElement("p")
paragraphs.textContent = "ahoj3"
document.querySelector("header").appendChild(paragraphs)

const div = document.createElement("div")
document.querySelector("header").appendChild(div)

paragraphs.append("ahoj")
paragraphs.prepend("ahoj")

const newSpan = document.createElement("span")
newSpan.textContent = "span"
div.append(newSpan)