let USERS = JSON.parse( localStorage.getItem('users'))
function add_data(){
  let Name =  document.getElementById("name").value
  let Email = document.getElementById("email").value
  let Password = document.getElementById('password').value
  let confirmPassword =  document.getElementById("cPassword").value
  for(i=0; i<USERS.length; i++){
    if(USERS[i].email == Email){
      window.alert("user already exist")
    return
    }
  }
  if(Password !== confirmPassword){
      window.alert("passwords dont match")
  }
  else {
    USERS.push({username:Name,email:Email,password:Password,isAdmin:false,id:USERS.length.toString(),img:"../images/user.png"})
    localStorage.setItem('users',JSON.stringify(USERS))
    window.open("../html/Login.html","_self")
  }
}

 