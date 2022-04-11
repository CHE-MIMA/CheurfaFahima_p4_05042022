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
    const checkBox1= document.getElementById("checkbox1");
    const errorcheckbox = document.getElementById('errorcheckbox1')
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

function lastValidat() { ;
if (prenom.Value.length > 2) return true;
else return false;
}

function emailValidat() {
  let regex = /^([a-z0-9_\.-]+\@[\da-z\.-]+\.[a-z\.]{2,6})$/;
  
  return regex.test(email.Value);
}
function birthdateValidation() {
	let regex = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/;
	return regex.test(birthdate.value);
}

function quantityValidat() {
  let regex = /^[0-9]+$/;
  return regex.test(quantity.Value);
  
}




document.getElementById("btn-submit").addEventListener("click", function formValidation(event) {
		event.preventDefault();
    // validat prenom
        let prenomValue = prenom.value; 
             
        if (prenomValue.length < 2){ 
          errorprenom.innerHTML="Veuillez entrez votre prenom dans ce champ"; 
            return false; 
        }else{
          prenom.innerHTML="";  
        }
        error.focus();
          
         //validat nom
         let nomValue = nom.value;
         if (nomValue.length < 2){ 
           errornom.innerHTML="Veuillez entrez votre nom dans ce champ"; 
             return false; 
         }else{
           nom.innerHTML="";  
         }
           

    });
    