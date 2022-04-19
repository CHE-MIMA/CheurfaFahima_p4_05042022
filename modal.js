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
const errorprenom = document.getElementById('errorprenom')
const nom = document.getElementById('last');
const errornom = document.getElementById('errornom')
const email = document.getElementById('email');
const erroremail = document.getElementById('erroremail')
const birthdate = document.getElementById('birthdate');
const errorbirthdate = document.getElementById('errorbirthdate')
const quantity = document.getElementById('quantity');
const errorquantity = document.getElementById('errorquantity')
const locationSelect = document.getElementsByName("location");
const errorlocation = document.getElementById('errorlocation')
const checkBox1 = document.getElementById("checkbox1");
const errorcheckbox = document.getElementById('errorcheckbox1')
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeModalElt.forEach((element) => element.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// validation input form
document.getElementById("btn-submit").addEventListener("click", function validateForm(event) {
  event.preventDefault();
  let champErreur = 0;

  let prenomValue = prenom.value;
  let pattern = /^[a-zA-Z ]+$/i;
  let nomValue = nom.value;
  // validat prenom
  if (prenomValue.length < 2 || !pattern.test(prenomValue)) {
    errorprenom.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prenom.";
    champErreur++;

  } else {
    errorprenom.innerHTML = "";
  }
  //validation nom

  if (nomValue.length <2 ||!pattern.test(nomValue)){
  errornom.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
  champErreur++;
}
else {
  errornom.innerHTML = "";
}
// validation email

if (!/^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email.value)) {
  erroremail.innerHTML = "Veuillez entrer une adresse mail valide";
  champErreur++;
}
else {
  erroremail.innerHTML = "";
}

// //  // validation barthdate

if (!(birthdate.value)) {
  errorbirthdate.innerHTML = "veuillez entrer une date de naissance";
  champErreur++;
}
else {
  errorbirthdate.innerHTML = "";
}
//  // validation quantity
if (!/^([0-9]{1,2})$/.test(quantity.value)) {
  errorquantity.innerHTML = "veuillez entrer un chiffre de 0 à 99 ";
  champErreur++;
}
else {
  errorquantity.innerHTML = "";
}
//  // validation localisation
let option = false;
for (i = 0; i < locationSelect.length; i++) {
  if (locationSelect[i].checked) {
    option = true;
  }
}
if (option == false) {
  errorlocation.innerHTML = "Vous devez choisir une option.";
  champErreur++;
}
else {
  errorlocation.innerHTML = "";
}

//   //  validation condition d'utilisation  
if (!checkBox1.checked) {
  errorcheckbox.innerHTML = "Vous devez vérifiez les conditions d'utilisation.";
  champErreur++;
}
else {
  errorcheckbox.innerHTML = "";
}

if (champErreur == 0) {
  succes();
}


  })



function succes() {
  //  launch succesModal
  const modalbg = document.querySelector(".bground");
  const succesModal = document.querySelector(".confirmation-bg");
  modalbg.style.display = "none";
  succesModal.style.display = "block";


  //Close succesModal
  document.querySelectorAll('.close-succes').forEach(btn => {
    btn.addEventListener('click', (e) => {
      if (succesModal.style.display = "block") {
        succesModal.style.display = 'none';
      }
    })
  })
  //  reset form
  document.getElementById('form').reset();
}







    //  let pattern = /^[a-zA-Z ]+$/i;