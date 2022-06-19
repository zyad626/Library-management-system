var ID = document.getElementById('ID')
var Name = document.getElementById('name')
var Email = document.getElementById('email')
var memberImage =document.getElementById('memberImage')
let Users = JSON.parse(localStorage.getItem('users'))
window.onload = function (){
    var parameters = new URLSearchParams(window.location.search)
    var userIndex = parameters.get("index")
    ID.textContent= "#"+Users[userIndex].id
    Name.textContent = "Name: "+ Users[userIndex].username
    Email.textContent = "Email: "+ Users[userIndex].email
    memberImage.setAttribute('src',Users[userIndex].img)
}

const delete_member = function(){
    var parameters = new URLSearchParams(window.location.search)
    var userIndex = parameters.get("index")
    Users.splice(userIndex, 1)

    Users.forEach((user, index)=>user.id = index) //correct the ids after removing the user
    localStorage.setItem("users", JSON.stringify(Users))
    window.open("../html/all_members.html", "_self")
}

const logout = function(){
    localStorage.removeItem("current_user")
    window.open("../html/index.html", "_self")
}
