if(localStorage.getItem("users") == null || localStorage.getItem("books") == null){
    let user_data = [{username:"Ahmed",email:"Ahmed@gmail.com",password:"A",id:"0",img:"../images/user.png"},
    {username:"Bassem",email:"Bassem@gmail.com",password:"B",isAdmin:false,id:"1",img:"../images/user.png"},
    {username:"Camel",email:"Camel@gmail.com",password:"C",isAdmin:false,id:"2",img:"../images/user.png"},
    {username:"Donia",email:"Donia@gmail.com",password:"D",isAdmin:false,id:"3",img:"../images/user.png"},
    {username:"Emma",email:"Emma@gmail.com",password:"E",isAdmin:false,id:"4",img:"../images/user.png"},
    {username:"Farida",email:"Farida@gmail.com",password:"F",isAdmin:false,id:"5",img:"../images/user.png"},
    {username:"Gamal",email:"Gamal@gmail.com",password:"G",isAdmin:false,id:"6",img:"../images/user.png"},
    {username:"Hassnaa",email:"Hassnaa@gmail.com",password:"H",isAdmin:false,id:"7",img:"../images/user.png"},
    {username:"Iman",email:"Iman@gmail.com",password:"I",isAdmin:false,id:"8",img:"../images/user.png"},
    {username:"admin",email:"admin@admin.com",password:"admin",isAdmin:true,id:"9",img:"../images/icons8-male-user-96.png"}]

    let books_data = [{title:"The Lord of the Rings",author:"J.R.R. Tolkien",description:"One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkness bind them",img:"../images/lord.jpg",id:"0",isBestSeller:false}
    ,{title:"The Hobbit",author:"J.R.R. Tolkien",description:"In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to eat: it was a hobbit-hole, and that means comfort",img:"../images/the hobbit.jpg",id:"1",isBestSeller:true}
,{title:"Harry Potter Part 1",author:"J. K. Rowling",description:"In the first installment of the massively popular series, Harry Potter and the Philosopher's Stone—otherwise known as Harry Potter and the Sorcerer's Stone—a boy finds out, not only that he's a wizard, but that he's already famous in a world he doesn't know.",img:"../images/harry potter part 1.jpg",id:"2",isBestSeller:false}
,{title:"Harry Potter Part 2",author:"J. K. Rowling",description:"In the second installment of the Harry Potter series, Harry Potter and the Chamber of Secrets, Harry, Ron, and Hermoine investigate the origin of threatening messages written on the walls of Hogwarts and the attacker of several petrified students and staff. Enemies of the heir, beware.",img:"../images/harry potter part 2.jpg",id:"3",isBestSeller:false}
,{title:"Harry Potter Part 3",author:"J. K. Rowling",description:"During the third part of the series, Harry Potter and the Prisoner of Azkaban, Harry is put in danger when someone from his past escapes a high-security wizarding prison, while Dementors threaten the well-being of students at Hogwarts.",img:"../images/harry potter part 3.jpg",id:"4",isBestSeller:true}
,{title:"Harry Potter Part 4",author:"J. K. Rowling",description:"Harry Potter and the Goblet of Fire is the fourth (and first really long) book in the franchise. It centers around the Triwizard Tournament, a highly anticipated event where students from two other wizarding schools visit Hogwarts so their finest students can compete in a series of tasks. But Harry and his friends start to suspect that someone sinister is pulling strings behind the scenes.",img:"../images/harry potter part 4.jpg",id:"5",isBestSeller:true}
,{title:"Harry Potter Part 5",author:"J. K. Rowling",description:"Harry develops a crush on classmate Cho Chang in the fifth part of the series, Harry Potter and the Order of the Phoenix, and things seem to be going great—despite the fact that no one believes him when he swears that Lord Voldemort is indeed coming back. So, to prepare, Harry and his friends form their own group, practicing self-defense magic.",img:"../images/harry potter part 5.jpg",id:"6",isBestSeller:false}
,{title:"Harry Potter Part 6",author:"J. K. Rowling",description:"In the sixth installment, Harry Potter and the Half-Blood Prince, Harry ends up in possession of a potions book that transforms him from a below-average student of Snape's to a truly remarkable one. Though, this greatness doesn't last for long after Harry realizes who the previous owner of his book, the Half-Blood Prince, really was.",img:"../images/harry potter part 6.jpg",id:"7",isBestSeller:false}
,{title:"Harry Potter Part 7",author:"J. K. Rowling",description:"Harry Potter and the Deathly Hollows brings the series to an end in a battle for Hogwarts—and the wizarding world as a whole.",img:"../images/harry potter part 7.jpg",id:"8",isBestSeller:false}
,{title:"Don Quixote",author:"Miguel de Cervantes",description:"The most popular novel of all time",img:"../images/book8.jpg",id:"9", isBestSeller:true}
,{title:"A Tale of Two Cities",author:"Charles Dickens",description:"Chances are, you read A Tale of Two Cities (or at least pretended to) in a high school class",img:"../images/book9.jpg",id:"10",isBestSeller:true}
,{title:"The Little Prince",author:"Antoine de Saint-Exupéry",description:"The Little Prince, a book about the perils of growing old by French aristocrat Antoine de Saint-Exupéry",img:"../images/book10.jpg",id:"11",isBestSeller:false}
,{title:"The Lion, The Witch and the Wardrobe",author:"C.S. Lewis",description:"The Lion, The Witch and the Wardrobe is by far the most popular novel in the seven-book series ",img:"../images/book11.jpg",id:"12",isBestSeller:false}
,{title:"She: A History of Adventure",author:"H. Rider Haggard",description:"Perhaps the most popular novel you've never heard of",img:"../images/book12.jpg",id:"13",isBestSeller:false}
,{title:"The Adventures of Pinocchio",author:"Carlo Collodi",description:"the Adventures of Pinocchio, originally written in Italian, inspired the famous Disney animated version and cemented a colloquial association between long noses and liars.",img:"../images/book13.jpg",id:"14",isBestSeller:false}
,{title:"The Da Vinci Code",author:"Dan Brown",description:"This thriller by Dan Brown became a sensation when it was first published",img:"../images/book14.jpg",id:"15",isBestSeller:false}
,{title:"The Alchemist",author:"Paulo Coelho",description:"The Alchemist, by Brazilian author Paulo Coelho, follows a shepherd boy named Santiago as he sets out to find the treasure that he dreamed about.",img:"../images/book15.jpg",id:"16",isBestSeller:false}
,{title:"The Catcher in the Rye",author:"J.D. Salinger",description:"One of the most frequently discussed coming-of-age books of all time",img:"../images/book16.jpg",id:"17",isBestSeller:false}
,{title:"The Bridges of Madison County",author:" Robert James Waller",description:"This best-selling romance takes place on a farm in Madison County",img:"../images/book17.jpg",id:"18",isBestSeller:false}
,{title:"Lolita",author:"Vladimir Nabokov",description:"As controversial as it still is, Lolita is still frequently read. Its narrator is also its protagonist—a middle-aged professor who becomes obsessed with his stepdaughter",img:"../images/book18.jpg",id:"19",isBestSeller:false}
,{title:"Heidi",author:"Johanna Spyri",description:"This Swiss children's book is about a young girl who goes to live with her grandfather after her parents pass away",img:"../images/book19.jpg",id:"20",isBestSeller:false}
,{title:"Anne of Green Gables",author:"Lucy Maud Montgomery",description:"Anne of Green Gables has inspired generations of young readers as it follows a girl who must overcome challenging obstacles with grit and gusto",img:"../images/book20.jpg",id:"21,isBestSeller:false"}
,{title:"Black Beauty",author:"Anna Sewell",description:"Black Beauty is  written from the perspective of the eponymous horse himself. It's considered one of the foremost pieces of fiction that discusses issues of animal cruelty and animal welfare",img:"../images/book21.jpg",id:"22",isBestSeller:false}
,{title:"The Name of the Rose",author:"Umberto Eco",description:"If you're a fan of the Robert Langdon books, you should also check out this mystery thriller by Italian author Umberto Eco.",img:"../images/book22.jpg",id:"23",isBestSeller:false}
,{title:"The Eagle Has Landed",author:"Jack Higgins",description:"This World War II novel was very quickly adapted into a feature film and continues to be widely read today.",img:"../images/book23.jpg",id:"24",isBestSeller:false}
,{title:"Watership Down",author:"Richard Adams",description:"Another much-assigned novel for high school students, Watership Down is an allegory heavy with meaning, starring…a warren full of rabbits, who develop their own intricate society.",img:"../images/book24.jpg",id:"25",isBestSeller:false}

]
    localStorage.setItem('users',JSON.stringify(user_data))
    localStorage.setItem('books',JSON.stringify(books_data))
}

if(localStorage.getItem("session_type") != "admin")
    document.querySelectorAll(".for-admin").forEach((element)=>element.style.display = "none")

else{
    document.querySelectorAll(".userBorrowForm").forEach((element)=>element.style.display = "none")
}

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
    localStorage.setItem("session_type", "user")
    
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

