function check_data(){
    let Email = document.getElementById("lemail").value
    let Password = document.getElementById('lpassword').value
    let USERS1 = JSON.parse( localStorage.getItem('users'))
    for (i=0; i<USERS1.length; i++){
      if(USERS1[i].email == Email && USERS1[i].password == Password){
        window.open("../html/home.html", "_self")
        return
      }
    }
    window.alert("wrog email or password")
   }