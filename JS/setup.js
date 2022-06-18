if(localStorage.length == 0){
    let user_data = [{username:"Ahmed",email:"A@A",password:"A"},{username:"Bassem",email:"B@B",password:"B"},{username:"Camel",email:"C@C",password:"C"},
    {username:"David",email:"D@D",password:"D"},{username:"Emad",email:"E@E",password:"E"},{username:"Farid",email:"F@F",password:"F"},
    {username:"Gavir",email:"G@G",password:"G"},{username:"Hassan",email:"H@H",password:"H"},{username:"Islam",email:"I@I",password:"I"},
    {username:"admin",email:"admin@admin",password:"admin",isAdmin:true}]
    localStorage.setItem('users',JSON.stringify(user_data))
}

