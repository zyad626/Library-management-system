if(localStorage.getItem("users") == null || localStorage.getItem("books") == null){
    let user_data = [{username:"Ahmed",email:"A@A",password:"A",id:"0",img:"../images/man4.jpg"},
    {username:"Bassem",email:"B@B",password:"B",id:"1",img:"../images/man6.jpg"},
    {username:"Camel",email:"C@C",password:"C",id:"2",img:"../images/man7.jpg"},
    {username:"Donia",email:"D@D",password:"D",id:"3",img:"../images/woman1.jpg"},
    {username:"Emma",email:"E@E",password:"E",id:"4",img:"../images/woman7.jpg"},
    {username:"Farida",email:"F@F",password:"F",id:"5",img:"../images/woman8.jpg"},
    {username:"Gamal",email:"G@G",password:"G",id:"6",img:"../images/man4.jpg"},
    {username:"Hassnaa",email:"H@H",password:"H",id:"7",img:"../images/woman7.jpg"},
    {username:"Iman",email:"I@I",password:"I",id:"8",img:"../images/woman1.jpg"},
    {username:"admin",email:"admin@admin",password:"admin",isAdmin:true,id:"9",img:"../images/icons8-male-user-96.png"}]

    let books_data = [{title:"lord of the rings",author:"stephen king",description:"great book",img:"../images/book1.png",id:"0"},
    {title:"hobbit",author:"stephen queen",description:"good book",img:"../images/book2.png",id:"1"}]
    localStorage.setItem('users',JSON.stringify(user_data))
    localStorage.setItem('books',JSON.stringify(books_data))
}

