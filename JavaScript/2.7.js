let books = [{
    title: "Harry Potter a vězeň z Azkabanu",
    author: "J. K. Rowlingová",
    published: 1999
    }, {
    title: "Harry Potter a Tajemná komnata",
    author: "J. K. Rowlingová",
    published: 1998
    }, {
    title: "Harry Potter a kámen mudrců",
    author: "J. K. Rowlingová",
    published: 1997
    }]

//řazení pole
books.sort(function(a, b){
    if(a.published > b.published){
        return 1
    }
    else if(a.published < b.published){
        return -1
    }
    else{
        return 0
    }
})

console.log(books)