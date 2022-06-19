if(localStorage.getItem("users") == null || localStorage.getItem("books") == null){
    let user_data = [{username:"Ahmed",email:"Ahmed@gmail.com",password:"A",id:"0",img:"../images/user.png"},
    {username:"Bassem",email:"Bassem@gmail.com",password:"B",isAdmin:false,id:"1",img:"../images/user.png"},
    {username:"Camel",email:"Camel@C",password:"C",isAdmin:false,id:"2",img:"../images/user.png"},
    {username:"Donia",email:"Donia@gmail.com",password:"D",isAdmin:false,id:"3",img:"../images/user.png"},
    {username:"Emma",email:"Emma@gmail.com",password:"E",isAdmin:false,id:"4",img:"../images/user.png"},
    {username:"Farida",email:"Farida@gmail.com",password:"F",isAdmin:false,id:"5",img:"../images/user.png"},
    {username:"Gamal",email:"Gamal@gmail.com",password:"G",isAdmin:false,id:"6",img:"../images/user.png"},
    {username:"Hassnaa",email:"Hassnaa@gmail.com",password:"H",isAdmin:false,id:"7",img:"../images/user.png"},
    {username:"Iman",email:"Iman@gmail.com",password:"I",isAdmin:false,id:"8",img:"../images/user.png"},
    {username:"admin",email:"admin@admin.com",password:"admin",isAdmin:true,id:"9",img:"../images/icons8-male-user-96.png"}]

    let books_data = [{title:"lord of the rings",author:"stephen king",description:"great book",img:"../images/book1.png",id:"0"},
    {title:"hobbit",author:"stephen queen",description:"good book",img:"../images/book2.png",id:"1"}]
    localStorage.setItem('users',JSON.stringify(user_data))
    localStorage.setItem('books',JSON.stringify(books_data))
}

if(localStorage.getItem("session_type") == "user")
    document.querySelectorAll(".for-admin").forEach((element)=>element.style.display = "none")

let current_user = JSON.parse(localStorage.getItem("current_user"))
let info_element = document.querySelector(".icon-div")
let user_name = info_element.querySelector("h3")
 user_name.textContent= current_user.username
