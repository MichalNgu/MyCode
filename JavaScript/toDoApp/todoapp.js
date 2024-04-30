let toDos = [{
    text: "vynést koš",
    completed: false
},{
    text: "dojít nakoupit",
    completed: false
},{
    text: "uklidit",
    completed: true
},{
    text: "nakrmit psa",
    completed: false
},{
    text: "nakrmit kočku",
    completed: true
}]

let toDoleft = toDos.filter(function(onetoDo){
    return onetoDo.completed == false 
})

console.log(toDoleft.length)

const paragraph = document.createElement("p")
paragraph.textContent = "ještě zbývá udělat " + toDoleft.length + " úkoly"
document.querySelector("main").appendChild(paragraph)

for(let i = 0; i < toDoleft.length; i++){
    let para = document.createElement("p")
    para.textContent = toDoleft[i].text
    document.querySelector("main").appendChild(para)
}

document.querySelector(".btn").addEventListener("click", function(){
    console.log("clicked")
})