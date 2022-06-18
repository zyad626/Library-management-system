if(localStorage.length == 0){
    let user_data = [{username:"Ahmed",email:"A@A",password:"A"},{username:"Bassem",email:"B@B",password:"B"},{username:"Camel",email:"C@C",password:"C"},
    {username:"David",email:"D@D",password:"D"},{username:"Emad",email:"E@E",password:"E"},{username:"Farid",email:"F@F",password:"F"},
    {username:"Gavir",email:"G@G",password:"G"},{username:"Hassan",email:"H@H",password:"H"},{username:"Islam",email:"I@I",password:"I"},
    {username:"admin",email:"admin@admin",password:"admin",isAdmin:true}]
    let books_data = [{title:"lord of the rings",author:"stephen king",desccription:"great book",img:"../images/book1.png",id:"0"},
    {title:"hobbit",author:"stephen queen",desccription:"good book",img:"../images/book2.png",id:"1"}]
    localStorage.setItem('users',JSON.stringify(user_data))
    localStorage.setItem('books',JSON.stringify(books_data))
}

