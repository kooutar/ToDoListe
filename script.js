var contToDo=0

// fct pour afficher modale
function ajouter2()
{  
  //  let modal=document.getElementById("fenetre-medial");
  //  modal.style.display="block";
  document.getElementById('fenetre-medial').style.display="block"
}
 

// lisnter pour fermer modale

document.addEventListener("DOMContentLoaded", ()=> {
  var ajouterTacheButton = document.getElementById("close");
  ajouterTacheButton.addEventListener("click", ()=>{
   let modal=document.getElementById("fenetre-medial");
    modal.style.display="none";
  });
});
// fct de priorité
function priorite()
{
  let priorite="p1"
  // let elt = document.querySelector('select');
  // priorite=elt.options[this.selectedIndex].value;
  return priorite;
}
// fct pour ajouter une tache 
 function ajouterTache()
  {
    var div=document.createElement("div");
    // pour le style 
    div.classList.add("containerTache");
    var label =document.createElement("label");
    var titre=document.getElementById("titre").value;
 
  if(titre==="titre"){
   alert("vide")
  }else{
    
      
    //  aselectionner element parent de div
    var parent=document.getElementsByClassName("content")[0];
    //afectter enfent a son parent
    parent.appendChild(div);
    label.innerHTML= titre;
      div.appendChild(label);
      contToDo++;
    document.getElementById("cont").textContent=contToDo;
    // ajouetr div conteint la button modifier et supprimmer
    let divButton=document.createElement("div");
    
    divButton.classList="divButton flex  ";
    div.appendChild(divButton);

let btnModifier = document.createElement("button");
let btnSupprimmer = document.createElement("button");

// Add Tailwind CSS classes for styling
btnModifier.className = "bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 flex items-center";
btnSupprimmer.className = "bg-red-500 text-white font-semibold py-2 px-4 rounded hover:bg-red-600 flex items-center";

// Set innerHTML with image icons
btnModifier.innerHTML = '<img src="modifierIcon.png" class="w-5 h-5 mr-2"> ';
btnSupprimmer.innerHTML = '<img src="supprimmericon.png" class="w-5 h-5 mr-2"> ';

// Append buttons to divButton
if (divButton) {
    divButton.appendChild(btnModifier);
    divButton.appendChild(btnSupprimmer);
}


}
  }
    
  

function remove(){
  
}