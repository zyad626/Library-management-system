const search = function(e){
    e.preventDefault()
    let value = document.getElementById("search-input").value
    let book_criteria = document.getElementById("book-criteria")
    let results = []
    
    if(book_criteria.checked){
        results = book_search(value)
        create_books(results)
    }
    else{
        results = user_search(value)
        create_users(results)
    } 

}

const book_search = function(value){
    const results = books.filter(book =>book.title.toLowerCase().includes(value.toLowerCase()) || book.author.toLowerCase().includes(value.toLowerCase()))
    return results
}

const user_search = function(value){
    const results = users.filter(user => user.username.toLowerCase().includes(value.toLowerCase()))
    return results
}

