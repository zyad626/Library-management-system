if(localStorage.getItem("users") == null || localStorage.getItem("books") == null){
    let user_data = [{username:"Ahmed",email:"A@A",password:"A",id:"0"},{username:"Bassem",email:"B@B",password:"B",id:"1"},
    {username:"Camel",email:"C@C",password:"C",id:"2"},{username:"David",email:"D@D",password:"D",id:"3"},
    {username:"Emad",email:"E@E",password:"E",id:"4"},{username:"Farid",email:"F@F",password:"F",id:"5"},
    {username:"Gavir",email:"G@G",password:"G",id:"6"},{username:"Hassan",email:"H@H",password:"H",id:"7"},
    {username:"Islam",email:"I@I",password:"I",id:"8"},{username:"admin",email:"admin@admin",password:"admin",isAdmin:true,id:"9"}]

    let books_data = [{title:"lord of the rings",author:"stephen king",description:"great book",img:"../images/book1.png",id:"0"},
    {title:"hobbit",author:"stephen queen",description:"good book",img:"../images/book2.png",id:"1"}]
    localStorage.setItem('users',JSON.stringify(user_data))
    localStorage.setItem('books',JSON.stringify(books_data))
}

