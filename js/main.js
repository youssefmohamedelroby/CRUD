var nameInput=document.getElementById("name")
var urlInput=document.getElementById("url")
var addbutton=document.getElementById("addBtn")
var tableBody=document.getElementById("tableBody")
var bookMarks
if(localStorage.getItem("bookMarks")==null){
    bookMarks=[]
}else{
    bookMarks=JSON.parse(localStorage.getItem("bookMarks"))
}
function getelement(){
    var bookmark={
        name : nameInput.value,
        url : urlInput.value
    }
    bookMarks.push(bookmark)
    localStorage.setItem("bookmarks",JSON.stringify(bookMarks))
    display()

}
function display(){
    var box=``
    for(var i=0;i<bookMarks.length;i++){
        box+=`
        <tr>
            <td>${bookMarks[i].name}</td>
            <td>${bookMarks[i].url}</td>
            <td><a href="${bookMarks[i].url}"><button class="btn btn-priamry">Vist</button></a></td>
            <td><button onclick="updatebook(${i})" class="btn btn-info">update</button></td>
            <td><button onclick="deletbook(${i})" class="btn btn-danger">delete</button></td>
        </tr>
        `
    }
    tableBody.innerHTML=box
}
function deletbook(index){
    bookMarks.splice(index,1)
    localStorage.setItem("bookmarks",JSON.stringify(bookMarks))
    display()
}
/*function clreardata(){
    nameInput.value=""
    urlInput.value=""
}*/
function updatebook(index){
    clreardata()
    nameInput.value=bookMarks[index].name
    urlInput.value=bookMarks[index].url
}