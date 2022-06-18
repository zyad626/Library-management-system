const books = JSON.parse(localStorage.getItem("books"))
const users = JSON.parse(localStorage.getItem("users"))

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

const create_books = function(results){
    let wrapper = document.getElementById("cards-wrapper")
    wrapper.innerHTML = ""

    let books_wrapper = document.createElement("div")
    books_wrapper.setAttribute("class", "books-wrapper")

    results.forEach(book => {
        let book_div = document.createElement("div")
        let img = document.createElement("img")
        let title = document.createElement("h2")
        let author = document.createElement("p")
        let link = document.createElement("a")

        book_div.setAttribute("class", "book")
        img.setAttribute("src", "../images/book1.png")
        title.setAttribute("class", "title")
        author.setAttribute("class", "author")
        link.setAttribute("href", `../html/bookDetails.html?index=${book.id}`)

        title.textContent = book.title
        author.textContent = book.author
        link.textContent = "View"

        book_div.appendChild(img)
        book_div.appendChild(title)
        book_div.appendChild(author)
        book_div.appendChild(link)

        books_wrapper.appendChild(book_div)
    });
    wrapper.appendChild(books_wrapper)
}

const create_users = function(results){
    let wrapper = document.getElementById("cards-wrapper")
    wrapper.innerHTML = ""

    let users_wrapper = document.createElement("div")
    users_wrapper.setAttribute("class", "members-wrapper")

    results.forEach((member)=>{
        let a = document.createElement("a")
        let member_div = document.createElement("div")
        let img = document.createElement("img")
        let info_div = document.createElement("div")
        let name_element = document.createElement("h2")

        a.setAttribute("href", "")
        member_div.setAttribute("class", "member")
        img.setAttribute("src", "../images/man7.jpg")
        info_div.setAttribute("class","info")

        name_element.textContent = member.username

        a.appendChild(member_div)
        member_div.appendChild(img)
        member_div.appendChild(info_div)
        info_div.appendChild(name_element)

        users_wrapper.appendChild(a)
    })
    wrapper.appendChild(users_wrapper)
}