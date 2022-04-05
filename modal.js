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

    //DOM elements (Variables)
    const prenom = document.getElementById('first');
    const nom = document.getElementById('last');
    const email = document.getElementById('email');
    const birthdate = document.getElementById('birthdate');
    const quantity = document.getElementById('quantity');
    const citySelector = document.getElementsByName("location");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}



