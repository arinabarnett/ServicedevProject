// Sign up form validation 

const email = document.getElementById("email");
const password = document.getElementById("psw");
const password_repeat =  document.getElementById("psw-repeat");


email.addEventListener("input", function (e) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Please enter your email in the right format (Example: myname@gmail.com)");
  } else {
    email.setCustomValidity("");
  }
});

password.addEventListener("input", function (e) {
if (password.value.length <= 5){
  password.setCustomValidity("Your password should be at least 6 characters");
} else {
  password.setCustomValidity("");
}
});

password_repeat.addEventListener("input", function (e) {
  if (password_repeat.value != password.value){
    password_repeat.setCustomValidity("Passwords don't match. Please enter the same password in both fields.");
  } else {
    password_repeat.setCustomValidity("");
  }
  });

// Burger menu

const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav_links');
  const navLinks = document.querySelectorAll('.nav_links li');

  burger.addEventListener('click', () => {
     // Toggle Navigation
    nav.classList.toggle('nav_active');

    //Links Animation
    navLinks.forEach((link, index) => {
      if(link.style.animation){
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
      }
    });
    // Burger Animation
    burger.classList.toggle('toggle');
  }); 
}

navSlide();


// Back to top button 

const mybutton = document.querySelector(".back_btn");

mybutton.onclick = function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}