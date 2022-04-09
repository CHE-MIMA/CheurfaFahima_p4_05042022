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
    const checkBox1= document.getElementById("checkbox1");
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeModalElt.forEach((element)=> element.addEventListener("click",closeModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// validation input 
function firstValidat() {
	let inputValue = prenom.value;
	if (inputValue !== null && inputValue.length > 2) return true;
	else return false;
}


document.getElementById("btn-submit")
	.addEventListener("click", function formValidation(event) {
		event.preventDefault();
		console.log(firstValidat());
	});
