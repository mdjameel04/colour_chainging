console.log(" hello world")
const buttons = document.querySelectorAll(".btn")
const body = document.querySelector("body")
   
buttons.forEach(function(btn){
    btn.addEventListener("click",function(e){
       if(e.target.id=== "grey") {
        body.style.backgroundColor= "grey";
       }
       if(e.target.id=== "white") {
        body.style.backgroundColor= e.target.id
       }
       if(e.target.id=== "pink") {
        body.style.backgroundColor= "pink";
       }
       if(e.target.id=== "yellow") {
        body.style.backgroundColor= "yellow";
       }
       if(e.target.id=== "red") {
        body.style.backgroundColor= "red";
       }
       if(e.target.id=== "black") {
        body.style.backgroundColor= "black";
       }
       if(e.target.id=== "blue") {
        body.style.backgroundColor= "blue";
       }
    })
})