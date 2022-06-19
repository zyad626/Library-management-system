window.onclick = function(){
    let book_criteria = document.getElementById("book-criteria")
    let user_criteria = document.getElementById("user-criteria")
    let searchBox = document.getElementById("search-input")
    if(book_criteria.checked){
        searchBox.setAttribute('placeholder','Tilte/Author')
    }
    else if(user_criteria.checked){
        searchBox.setAttribute('placeholder','Name')
    }
}
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
    const results = books.filter(book => book.title.includes(value) || book.author.includes(value))
    return results
}

const user_search = function(value){
    const results = users.filter(user => user.username.toLowerCase().includes(value))
    return results
}

