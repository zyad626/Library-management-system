var ID = document.getElementById('ID')
var Name = document.getElementById('name')
var Email = document.getElementById('email')
let Users = JSON.parse(localStorage.getItem('users'))
window.onload = function (){
    console.log(Users)
    var parameters = new URLSearchParams(window.location.search)
    var userIndex = parameters.get("index")
    ID.innerHTML= Users[userIndex].id
    Name.innerHTML = "Name: "+ Users[userIndex].username
    Email.innerHTML = "Email: "+ Users[userIndex].email
}

