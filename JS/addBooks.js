let Books = JSON.parse(localStorage.getItem('books'))
function openAddForm() {
    document.getElementById("addForm").style.display = "block";
  }

function submitAddForm(event) {
  event.preventDefault()
  let file_input = document.getElementById("bookImage")
  const FR = new FileReader();


  let newTitle = document.getElementById('newTitle').value
  let newDescription = document.getElementById('newDescription').value
  let newAuthor = document.getElementById('newAuthor').value

  FR.addEventListener("load", (e)=>{
    let src = e.target.result
    document.getElementById("addForm").style.display = "none";
    Books.push({title: newTitle, author: newAuthor, description: newDescription, img: src, id: Books.length.toString()})
    localStorage.setItem('books',JSON.stringify(Books))
    window.open("../html/All_Books.html","_self")
  })
  FR.readAsDataURL(file_input.files[0])

  
}

function closeAddForm() {
  document.getElementById("addForm").style.display = "none";
}


