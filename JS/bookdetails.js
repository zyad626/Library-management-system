var Title = document.getElementById('title')
var bookDescription= document.getElementById('bookDescription')
var bookImage= document.getElementById('bookImage')
var Author = document.getElementById('Author')
let Books = JSON.parse(localStorage.getItem('books'))
window.onload = function (){
    var parameters = new URLSearchParams(window.location.search)
    var bookIndex = parameters.get("index")
    Title.innerHTML= Books[bookIndex].title
    bookDescription.innerHTML = Books[bookIndex].description
    bookImage.setAttribute('src',Books[bookIndex].img)
    Author.innerHTML = "Author: "+Books[bookIndex].author
}

