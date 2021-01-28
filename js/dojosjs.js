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


let arrows = document.getElementsByClassName("picto");

for (let i = 0; i < arrows.length; i++) {
  let fleche = arrows.item(i);
  fleche.addEventListener("click", () => {
    let arrow = fleche.parentNode.nextElementSibling;
    if (arrow.style.visibility !== "visible") {
      arrow.style.visibility = "visible";
      arrow.style.height = "auto";
    } else {
      arrow.style.visibility = "hidden";
      arrow.style.height = "0";
    }
  });
}

// Etape 3