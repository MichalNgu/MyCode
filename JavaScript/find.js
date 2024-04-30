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

let result = books.find(function(oneBook){
    if(oneBook.published == 1999){
        return oneBook
    }
})

console.log(result)