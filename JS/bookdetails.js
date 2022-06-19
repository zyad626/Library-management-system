var Title = document.getElementById('title')
var bookDescription= document.getElementById('bookDescription')
var bookImage= document.getElementById('bookImage')
var Author = document.getElementById('Author')
let Books = JSON.parse(localStorage.getItem('books'))
let Users = JSON.parse(localStorage.getItem('users'))
window.onload = function (){
    var parameters = new URLSearchParams(window.location.search)
    var bookIndex = parameters.get("index")
    Title.textContent= Books[bookIndex].title
    bookDescription.textContent = Books[bookIndex].description
    bookImage.setAttribute('src',Books[bookIndex].img)
    Author.textContent = "Author: "+Books[bookIndex].author
}

//Edit Form
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
  

  //Delete Form
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


    //Borrow Form
    let pickupDate = document.getElementById('pickupDate')
    let returnDate = document.getElementById('returnDate')
    function openBorrowForm() {
      var parameters = new URLSearchParams(window.location.search)
      var bookIndex = parameters.get("index")
      if(localStorage.getItem("current_user") != null){
        if(Books[bookIndex].isBorrowed == true){
          window.alert("Book is out of stock and will be avaliable at " + Books[bookIndex].available)
          return
        }
        document.getElementById("borrowForm").style.display = "block";
      }
      else{
        window.open("../html/SignUp.html")
      }
    }
  function submitBorrowForm() {
      let date = new Date()
      if(pickupDate.value == returnDate.value || pickupDate.value > returnDate.value || new Date(pickupDate.value).getFullYear() < date.getFullYear()){
        window.alert("pickup date from today and upwards and borrow period of minimum one day")
      }
      else{
        document.getElementById("borrowForm").style.display = "none";
        let userId = JSON.parse(localStorage.getItem('current_user'))
        var parameters = new URLSearchParams(window.location.search)
        var bookIndex = parameters.get("index")
        Books[bookIndex].borrowUser = userId.id
        Books[bookIndex].borrowed = pickupDate.value
        Books[bookIndex].available = returnDate.value
        Books[bookIndex].isBorrowed = true
        localStorage.setItem('books',JSON.stringify(Books))
        if(!Users[userId.id].borrowedBooks){
          Users[userId.id].borrowedBooks = Books[bookIndex].title
          Users[userId.id].numberOfBorrowedBooks = 1
        }
        else{
          Users[userId.id].borrowedBooks += ","+Books[bookIndex].title
          Users[userId.id].numberOfBorrowedBooks += 1
        }
        localStorage.setItem('users',JSON.stringify(Users))
      }
    }
    function closeBorrowForm() {
      document.getElementById("borrowForm").style.display = "none";}

  //admin return book
  function bookAvailable(){
    var parameters = new URLSearchParams(window.location.search)
    var bookIndex = parameters.get("index")
    if(Books[bookIndex].isBorrowed == true){
      Books[bookIndex].isBorrowed = false
      localStorage.setItem('books',JSON.stringify(Books))
      let i = Books[bookIndex].borrowUser
      let number = Users[i].numberOfBorrowedBooks
      if(number>1){
        console.log(Users[i].borrowedBooks)
        let titles = Users[i].borrowedBooks.split(',')
        for(j =0; j<titles.length; j++){
          if(titles[j] == Books[bookIndex].title){
            titles.splice(j,1)
            titles.join()
            Users[i].borrowedBooks = titles.toString()
            Users[i].numberOfBorrowedBooks -= 1
            localStorage.setItem('users',JSON.stringify(Users))
            window.alert(Books[bookIndex].title+" is avaliable to borrow now")
            break;
          } 
        }
      }
      else{
        Users[i].numberOfBorrowedBooks -= 1
        delete Users[i].borrowedBooks;
        localStorage.setItem('users',JSON.stringify(Users))
        window.alert(Books[bookIndex].title+" is avaliable to borrow now")
      }
    }
    else{
      window.alert("book is already avaliable")
    }
  }