function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements launch
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModalElt = document.querySelectorAll("#close");
    //DOM elements (Variables)
    const prenom = document.getElementById('first');
    const nom = document.getElementById('last');
    const email = document.getElementById('email');
    const birthdate = document.getElementById('birthdate');
    const quantity = document.getElementById('quantity');
    const locationSelect = document.getElementsByName("location");
    const checkBox= document.getElementsByName("checkbox");
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeModalElt.forEach((element)=> element.addEventListener("click",closeModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//
function closeModal() {
  modalbg.style.display = "none";
}

