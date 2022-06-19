let Books = JSON.parse(localStorage.getItem('books'))
function openAddForm() {
    document.getElementById("addForm").style.display = "block";
  }
  function submitAddForm() {
    let newTitle = document.getElementById('newTitle').value
    let newDescription = document.getElementById('newDescription').value
    let newAuthor = document.getElementById('newAuthor').value
    document.getElementById("addForm").style.display = "none";
    Books.push({title:newTitle,author:newAuthor,description:newDescription,img:"../images/book1.png",id:Books.length.toString()})
    localStorage.setItem('books',JSON.stringify(Books))
    window.open("../html/All_Books.html","_self")
  }
  function closeAddForm() {
    document.getElementById("addForm").style.display = "none";
}