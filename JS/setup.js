if(localStorage.getItem("users") == null || localStorage.getItem("books") == null){
    let user_data = [{username:"Ahmed",email:"Ahmed@gmail.com",password:"A",id:"0",img:"../images/man4.jpg"},
    {username:"Bassem",email:"Bassem@gmail.com",password:"B",isAdmin:false,id:"1",img:"../images/man6.jpg"},
    {username:"Camel",email:"Camel@C",password:"C",isAdmin:false,id:"2",img:"../images/man7.jpg"},
    {username:"Donia",email:"Donia@gmail.com",password:"D",isAdmin:false,id:"3",img:"../images/woman1.jpg"},
    {username:"Emma",email:"Emma@gmail.com",password:"E",isAdmin:false,id:"4",img:"../images/woman7.jpg"},
    {username:"Farida",email:"Farida@gmail.com",password:"F",isAdmin:false,id:"5",img:"../images/woman8.jpg"},
    {username:"Gamal",email:"Gamal@gmail.com",password:"G",isAdmin:false,id:"6",img:"../images/man4.jpg"},
    {username:"Hassnaa",email:"Hassnaa@gmail.com",password:"H",isAdmin:false,id:"7",img:"../images/woman7.jpg"},
    {username:"Iman",email:"Iman@gmail.com",password:"I",isAdmin:false,id:"8",img:"../images/woman1.jpg"},
    {username:"admin",email:"admin@admin.com",password:"admin",isAdmin:true,id:"9",img:"../images/icons8-male-user-96.png"}]

    let books_data = [{title:"lord of the rings",author:"stephen king",description:"great book",img:"../images/book1.png",id:"0"},
    {title:"hobbit",author:"stephen queen",description:"good book",img:"../images/book2.png",id:"1"}]
    localStorage.setItem('users',JSON.stringify(user_data))
    localStorage.setItem('books',JSON.stringify(books_data))
}

