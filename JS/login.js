function check_data(){
    /*let parammeters = new URLSearchParams(window.location.search)
    let data = parammeters.get("index")
    let data_array = data.split(" ")
    USERS[USERS.length-1] = {userame:data_array[0],email:data_array[1],password:d[2]}
    localStorage.setItem('users',JSON.stringify(USERS))*/
    let Email = document.getElementById("lemail").value
    let Password = document.getElementById('lpassword').value
    let USERS1 = JSON.parse( localStorage.getItem('users'))
    for (i=0; i<USERS1.length; i++){
      if(USERS1[i].email == Email && USERS1[i].password == Password){
        window.open("../html/home.html", "_self")
        console.log(user)
        return
      }
    }
    window.alert("wrog email or password")
   }