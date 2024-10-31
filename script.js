var contToDo=0;
const modal=document.getElementById("fenetre-medial");
const label =document.createElement("label");
const titre=document.getElementById("titre").value;
const description=document.getElementById("description").value;
const date=document.getElementById("dateTache").value;
const time=document.getElementById("timeTache").value;
const priorite=document.getElementById("options").value;

// fct pour afficher modale
function ajouter2()
{  
  document.getElementById('fenetre-medial').style.display="block"
}
 
// lisnter pour fermer modale
document.addEventListener("DOMContentLoaded", ()=> {
  var ajouterTacheButton = document.getElementById("close");
  ajouterTacheButton.addEventListener("click", ()=>{
    modal.style.display="none";
  });
});

// fct pour ajouter une tache 
 function ajouterTache()
  {
    var div=document.createElement("div");
    // pour le style 
    div.classList.add("containerTache"); 
    
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
// appeler la fct remove
btnSupprimmer.onclick= remove;
btnModifier.onclick=modifier;
// ajouter css 
btnModifier.className = "bteModifier bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 flex items-center";
btnSupprimmer.className = " bteSupprimer bg-red-500 text-white font-semibold py-2 px-4 rounded hover:bg-red-600 flex items-center";

// ajouter des img 
btnModifier.innerHTML = '<img src="modifierIcon.png" class="w-5 h-5 mr-2"> ';
btnSupprimmer.innerHTML = '<img src="supprimmericon.png" class="w-5 h-5 mr-2"> ';

// affcetter e le parent 
    divButton.appendChild(btnModifier);
    divButton.appendChild(btnSupprimmer);

} 
// pour la suppression (ne fonctionne pas )
document.addEventListener("DOMContentLoaded", () => {
  let containerTache = document.getElementsByClassName("containerTache")[0];
  containerTache.addEventListener("click", () => {
    containerTache.remove();
  });
});

// supprimmer
function remove()
{
  let containerTache = document.getElementsByClassName("containerTache")[0];
 
  containerTache.remove();
  contToDo--;
  document.getElementById("cont").textContent=contToDo;
}
// modifier
function modifier()
{
  
}
