let best_sellers = books.filter(book => book.isBestSeller)

let new_books = []
for(i = books.length-1; i > books.length-5 ; i--)
    new_books.push(books[i])


create_books(best_sellers, "#best-sellers")
create_books(new_books, "#new-books")

let best_sellers_parent = document.getElementById("best-sellers")
let new_books_parent = document.getElementById("new-books")

let best_sellers_header = document.createElement("h1")
let new_books_header = document.createElement("h1")

best_sellers_header.textContent = "Best Sellers"
new_books_header.textContent = "New"

best_sellers_parent.prepend(best_sellers_header)
new_books_parent.prepend(new_books_header)
