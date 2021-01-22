console.log("Go Chuck !");
//Étape 1 changer le border radius soit à "0" ou en le désactivant en hover (mouseenter ou mouseover)

function carre(){
    this.style.borderRadius = 0;
}
function rond (){
    this.style.borderRadius = "50%";
}
document.querySelector("body > main > section > aside > div").onmouseover=carre;
document.querySelector("body > main > section > aside > div").onmouseout=rond;


// Étape 2 trouver comment trigger les 3 div pour changer leur visibility en "visible" et leur height en "auto"

let arrow1 = document.querySelector("body > main > section > section > article:nth-child(1) > div");
let arrow2 = document.querySelector("body > main > section > section > article:nth-child(2) > div");
let arrow3 = document.querySelector("body > main > section > section > article:nth-child(3) > div");

function show() {
    arrow1.style.visibility="visible";
    arrow1.style.height="auto";
    arrow2.style.visibility="visible";
    arrow2.style.height="auto";
    arrow3.style.visibility="visible";
    arrow3.style.height="auto";
}

addEventListener("click", show);

// Étape 3 charger le fichier JSON