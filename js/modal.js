const btn = document.getElementById("sign_up");
const modal = document.getElementById("id01");
const span = document.getElementsByClassName("close")[0];
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav_links');
const cancel = document.getElementById("closebtn");

 
btn.onclick = function() {
  modal.style.display = "block";
  nav.style.display = "none";
  burger.style.display = "none";
}

span.onclick = function() {
  modal.style.display = "none";
  nav.style.display = "flex";
  console.log("Hiiii");
  burger.style.display = "block";
  if(window.screen.width >= 1024) {
    burger.style.display = "none";
  }  
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    nav.style.display = "flex";
    burger.style.display = "none";
  }
}

cancel.onclick = function () {
  modal.style.display = "none";
  nav.style.display = "flex";
  burger.style.display = "block";
  if(window.screen.width >= 1024) {
    burger.style.display = "none";
  }  
}

