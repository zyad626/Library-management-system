var Title = document.getElementById('title')
var bookDescription= document.getElementById('bookDescription')
var bookImage= document.getElementById('bookImage')
var Author = document.getElementById('Author')
let Books = JSON.parse(localStorage.getItem('books'))
window.onload = function (){
    var parameters = new URLSearchParams(window.location.search)
    var bookIndex = parameters.get("index")
    Title.textContent= Books[bookIndex].title
    bookDescription.textContent = Books[bookIndex].description
    bookImage.setAttribute('src',Books[bookIndex].img)
    Author.textContent = "Author: "+Books[bookIndex].author
}

let titleChange = document.getElementById('titleMod')
let descriptionChange = document.getElementById('descriptionMod')
let authorChange = document.getElementById('authorMod')

function openEditForm() {
  if (document.getElementById("deleteForm").style.display == "block"){
    document.getElementById("deleteForm").style.display = "none";
  }
    document.getElementById("editForm").style.display = "block";
    titleChange.value = Title.textContent
    descriptionChange.value = bookDescription.textContent
    authorChange.value = Author.textContent.replace("Author: ","")
  }
function submitEditForm() {
    document.getElementById("editForm").style.display = "none";
    Title.textContent= titleChange.value
    bookDescription.textContent = descriptionChange.value
    Author.textContent = "Author: "+ authorChange.value
    var parameters = new URLSearchParams(window.location.search)
    var bookIndex = parameters.get("index")
    Books[bookIndex].title = Title.textContent
    Books[bookIndex].description = bookDescription.textContent
    Books[bookIndex].author = Author.textContent.replace("Author: ","")
    localStorage.setItem('books',JSON.stringify(Books))
  }
  function closeEditForm() {
    document.getElementById("editForm").style.display = "none";
}
  


  let adminPassword = document.getElementById('adminPassword')
  function openDeleteForm() {
    if (document.getElementById("editForm").style.display == "block"){
      document.getElementById("editForm").style.display = "none";
    }
    document.getElementById("deleteForm").style.display = "block";
    titleChange.value = Title.textContent
    descriptionChange.value = bookDescription.textContent
    authorChange.value = Author.textContent.replace("Author: ","")
  }
function submitDeleteForm() {
    document.getElementById("deleteForm").style.display = "none";
    if(adminPassword.value == "admin"){
        var parameters = new URLSearchParams(window.location.search)
        var bookIndex = parameters.get("index") 
        Books.splice(bookIndex,1)
        for(i=bookIndex;i<Books.length;i++){
            Books[i].id -= `${1}` ;
        }
        localStorage.setItem('books',JSON.stringify(Books))
        window.open("../html/All_Books.html","_self")
    }
    else{
        window.alert("wrong password")
    }
  }
  function closeDeleteForm() {
    document.getElementById("deleteForm").style.display = "none";}