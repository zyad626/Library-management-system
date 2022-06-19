var ID = document.getElementById('ID')
var Name = document.getElementById('name')
var Email = document.getElementById('email')
var memberImage =document.getElementById('memberImage')
let Users = JSON.parse(localStorage.getItem('users'))
window.onload = function (){
    console.log(Users)
    var parameters = new URLSearchParams(window.location.search)
    var userIndex = parameters.get("index")
    ID.textContent= "#"+Users[userIndex].id
    Name.textContent = "Name: "+ Users[userIndex].username
    Email.textContent = "Email: "+ Users[userIndex].email
    memberImage.setAttribute('src',Users[userIndex].img)
}

