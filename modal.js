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





document.getElementById("btn-submit").addEventListener("click", function formValidat(event) {
		event.preventDefault();
    // validation prenom
    let prenomValue = prenom.value; 
    let nomValue = nom.value; 
    // let regexemail = /^([a-z0-9_\.-]+\@[\da-z\.-]+\.[a-z\.]{2,6})$/; 
    let regexemail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let regexquantity = /^[0-9]+$/;

    if (prenomValue.length < 2){ 
      errorprenom.innerHTML= "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
        // return false; 
    }else{
      errorprenom.innerHTML="";  
    }
    
         //validation nom
         
         if (nomValue.length < 2){ 
           errornom.innerHTML= "Veuillez entrer 2 caractères ou plus pour le champ du nom."; 
            //  return false; 
         }else{
           errornom.innerHTML="";  
         }
          // validation email
if (!regexemail.test(email.value) || email == ''){
  erroremail.innerHTML="veuillez entrer une adresse email valide";
}
 else{
  erroremail.innerHTML="";  
}
    // validation barthdate
    if (birthdate.value==''){

      errorbirthdate.innerHTML="veuillez entrer une date de naissance";
    }
  
  else{
    errorbirthdate.innerHTML="";  
  }
  // validation quantity
  if (!regexquantity.test(quantity.Value)){
    errorquantity.innerHTML="veuillez entrer un chiffre de 0 à 99 ";
  }
  
  else{
    errorquantity.innerHTML=""; 
  }
   // validation localiacation

   for(i=0; i<locationSelect.length; i++) {
     if (!locationSelect[i].checked) {
          errorlocation.innerHTML = "Vous devez choisir une option.";
        }
        else {
          errorlocation.innerHTML = "";
        }
    }
  //  validation condition d'utilisation  
  if (!checkBox1.checked){
    errorcheckbox.innerHTML="Vous devez vérifiez les conditions d'utlisation.";
  }
  else
  errorcheckbox.innerHTML=""; 
})

    /* "Vous devez choisir une option."
"Vous devez vérifier que vous acceptez les termes et conditions."
"Vous devez entrer votre date de naissance."*/