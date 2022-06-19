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

    let books_data = [
        {title:"lord of the rings",author:"stephen king",description:"great book",img:"../images/book1.png",id:"0"},
        {title:"hobbit",author:"stephen queen",description:"good book",img:"../images/book2.png",id:"1"}
]
    localStorage.setItem('users',JSON.stringify(user_data))
    localStorage.setItem('books',JSON.stringify(books_data))
}

if(localStorage.getItem("session_type") != "admin")
    document.querySelectorAll(".for-admin").forEach((element)=>element.style.display = "none")

if(localStorage.getItem("current_user") != null){
    let current_user = JSON.parse(localStorage.getItem("current_user"))
    
    let info_element = document.createElement("div")
    let user_name = document.createElement("h3")
    let icon_element = document.createElement("a")
    let img = document.createElement("img")

    info_element.setAttribute("class", "icon-div")
    img.setAttribute("src", "../images/icons8-male-user-96.png")
    icon_element.setAttribute("href", `../html/memberDetails.html?index=${current_user.id}`)

    info_element.appendChild(user_name)
    info_element.appendChild(icon_element)
    icon_element.appendChild(img)
    document.querySelector("header").appendChild(info_element)

    user_name.textContent= current_user.username
}
else{
    let links_div = document.createElement("div")
    let login_link = document.createElement("a")
    let signup_link = document.createElement("a")

    links_div.setAttribute("class", "header-right")
    login_link.setAttribute("href", "login.html")
    signup_link.setAttribute("href", "Signup.html")

    login_link.textContent = "Login"
    signup_link.textContent = "Sign Up"

    links_div.appendChild(login_link)
    links_div.appendChild(signup_link)
    document.querySelector("header").appendChild(links_div)
}

