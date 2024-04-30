let books = [{
    title: "Harry Potter a kámen mudrců",
    author: "J. K. Rowlingová",
    published: 1997
    }, {
    title: "Harry Potter a Tajemná komnata",
    author: "J. K. Rowlingová",
    published: 1998
    }, {
    title: "Harry Potter a vězeň z Azkabanu",
    author: "J. K. Rowlingová",
    published: 1999
    }]

//filtrování
let result = books.filter(function(oneBook){
    if(oneBook.published <= 1998){
        return oneBook
    }
})
console.log(result)