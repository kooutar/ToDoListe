var contToDo=0

// fct pour afficher modale
function ajouter2()
{  
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
// function priorite()
// {
//   let priorite="p1"
//   // let elt = document.querySelector('select');
//   // priorite=elt.options[this.selectedIndex].value;
//   return priorite;
// }

// fct pour ajouter une tache 
 function ajouterTache()
  {
    var div=document.createElement("div");
    // pour le style 
    div.classList.add("containerTache");
    var label =document.createElement("label");
    var titre=document.getElementById("titre").value;
    var description=document.getElementById("description").value;
    var date=document.getElementById("dateTache").value;
    var time=document.getElementById("timeTache").value;
    var priorite=document.getElementById("options").value;
 
  if(titre==="titre"){
   alert("vide")
  }else{
    
    //  aselectionner element parent de div
    var parent=document.getElementsByClassName("content")[0];

  
    //afectter enfent a son parent
    parent.appendChild(div);
    label.innerHTML= `<h1>${titre}</h1>
                       <p>${description}<br>${date}/${time}</p>
                       `;
    if(priorite==="p1")
    {
      div.classList.add("bg-red-300", "border-l-4", "border-red-500");
    }else if(priorite==="p2")
    {
      div.classList.add("bg-yellow-300", "border-l-4", "border-yellow-300");
    }else if(priorite==="p3")
    {
      div.classList.add("bg-green-100", "border-l-4", "border-green-500");
    }
      div.appendChild(label);
      contToDo++;
    document.getElementById("cont").textContent=contToDo;
    // ajouetr div conteint la button modifier et supprimmer
    let divButton=document.createElement("div");
    
    divButton.classList="divButton flex justify-end";
    div.appendChild(divButton);

let btnModifier = document.createElement("button");
let btnSupprimmer = document.createElement("button");

// Add Tailwind CSS classes for styling
btnModifier.className = "bteModifier bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 flex items-center";
btnSupprimmer.className = " bteSupprimer bg-red-500 text-white font-semibold py-2 px-4 rounded hover:bg-red-600 flex items-center";

// Set innerHTML with image icons
btnModifier.innerHTML = '<img src="modifierIcon.png" class="w-5 h-5 mr-2"> ';
btnSupprimmer.innerHTML = '<img src="supprimmericon.png" class="w-5 h-5 mr-2"> ';

// Append buttons to divButton
    divButton.appendChild(btnModifier);
    divButton.appendChild(btnSupprimmer);



}
}
    
  
// pour la suppression (ne fonctionne pas )
document.addEventListener("DOMContentLoaded", () => {
  let containerTache = document.getElementsByClassName("containerTache")[0];
  containerTache.addEventListener("click", () => {
    containerTache.remove();
  });
});



//priorite

function priorite()
{
 
    let containerTache=document.getElementsByClassName("containerTache")[0];
    let selectElement = document.getElementById("options");
    let selectedValue = selectElement.value;
    alert(selectedValue);
    if(selectedValue==="p1")
    {
      alert("You selected: " + selectedValue);
      containerTache.style.backgroundColor="red";
    }
    if(selectedValue=="p2")
    {
      alert("You selected: " + selectedValue);
      containerTache.style.backgroundColor="yello";
    }
    if(selectedValue=="p3")
      {
        alert("You selected: " + selectedValue);
        containerTache.style.backgroundColor="green";
      }

    
}

