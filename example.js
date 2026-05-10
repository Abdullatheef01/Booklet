var btn1=document.querySelector(".btn3")
var popupbox1=document.querySelector(".popupbox")
var overlay1=document.querySelector(".overlay")
var xbtn=document.querySelector(".xbtn")
btn1.addEventListener("click",function(event){
    popupbox1.style.display="flex";
    overlay1.style.display="flex";

})
xbtn.addEventListener('click',function(event){
    popupbox1.style.display="none"
    overlay1.style.display="none";

})
    
var container= document.querySelector(".container")
var bookname= document.getElementById("book-name")
var bookauthor= document.getElementById("book-author")
var description1=document.getElementById("description")
var addbtn= document.querySelector(".addbutton")

addbtn.addEventListener("click",function(){
    if(bookname.value==="" && bookauthor.value==="" && description1.value===""){
        return;
    }
    var div=document.createElement("div")
    div.id="container-box";
    div.innerHTML=`
    <h3> ${bookname.value}</h3>
  <h5>  ${bookauthor.value}</h5>
  <p>${description1.value}</p>
  <button onclick="this.parentElement.remove()">Delete</button>
  `;
  container.append(div);
bookname.value= "";
bookauthor.value= "";
description1.value= "";
 popupbox1.style.display="none";
overlay1.style.display="none";
})