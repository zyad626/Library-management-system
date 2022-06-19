const books = JSON.parse(localStorage.getItem("books"))
const users = JSON.parse(localStorage.getItem("users"))

const create_books = function(results = books, parent_element = "cards-wrapper"){
    let wrapper = document.getElementById(parent_element)
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
        if(book.img.includes("base64"))img.setAttribute("src", book.img)
        else  img.setAttribute("src", `../images/${book.img}`)
        
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

const create_users = function(results = users, parent_element = "cards-wrapper"){
    let wrapper = document.getElementById(parent_element)
    wrapper.innerHTML = ""

    let users_wrapper = document.createElement("div")
    users_wrapper.setAttribute("class", "members-wrapper")

    results.forEach((member)=>{
        let a = document.createElement("a")
        let member_div = document.createElement("div")
        let img = document.createElement("img")
        let info_div = document.createElement("div")
        let name_element = document.createElement("h2")
        let id_element = document.createElement("h3")

        a.setAttribute("href", `../html/memberDetails.html?index=${member.id}`)
        member_div.setAttribute("class", "member")
        img.setAttribute("src", member.img)
        info_div.setAttribute("class","info")

        name_element.textContent = member.username
        id_element.textContent = "#"+member.id

        a.appendChild(member_div)
        member_div.appendChild(img)
        member_div.appendChild(info_div)
        info_div.appendChild(name_element)
        info_div.appendChild(id_element)

        users_wrapper.appendChild(a)
    })
    wrapper.appendChild(users_wrapper)
}