var ID = document.getElementById('ID')
var Name = document.getElementById('name')
var Email = document.getElementById('email')
var memberImage =document.getElementById('memberImage')
var borrowed = document.getElementById('books')
let Users = JSON.parse(localStorage.getItem('users'))

var parameters = new URLSearchParams(window.location.search)
var userIndex = parameters.get("index")
window.onload = function (){
    ID.textContent= "#"+Users[userIndex].id
    Name.textContent = "Name: "+ Users[userIndex].username
    Email.textContent = "Email: "+ Users[userIndex].email
    memberImage.setAttribute('src',Users[userIndex].img)
    if(Users[userIndex].borrowedBooks){
        borrowed.textContent = "Borrowed Books: "+ Users[userIndex].borrowedBooks
    }
}

if(localStorage.getItem("current_user") == null || userIndex != JSON.parse(localStorage.getItem("current_user")).id)
    document.querySelectorAll(".for-current_user").forEach((element)=>element.style.display = "none")


const delete_member = function(){
    Users.splice(userIndex, 1)
    Users.forEach((user, index)=>user.id = index) //correct the ids after removing the user
    localStorage.setItem("users", JSON.stringify(Users))
    window.open("../html/all_members.html", "_self")
}

const logout = function(){
    localStorage.removeItem("current_user")
    window.open("../html/index.html", "_self")
}

