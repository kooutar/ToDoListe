var contToDo=0
var contDoing=0;
var contDone=0;
let modal=document.getElementById("fenetre-medial");
var tablToDo=[];
var tabDoing=[];
var tabDone=[];

 
  let titre=document.getElementById("titre");
  let description=document.getElementById("description");
  let date=document.getElementById("dateTache");
  let time=document.getElementById("timeTache");
  let priorite=document.getElementById("options");
  let containerDesTaches=document.getElementsByClassName("content");
  // let Tachestatus = document.querySelector('input[name="taskStatus"]:checked');


// fct pour afficher modale

let editModal = document.getElementById("edit-modal");
let editTitre = document.getElementById("editTitre");
let editDescription = document.getElementById("editDescription");
let editDateTache =document.getElementById("editDateTache");
let editTimeTache = document.getElementById("editTimeTache");
let editOptions = document.getElementById("editOptions");
let editStatus = document.querySelector('input[name="EdittaskStatus"]:checked');
// variableTemperaire
 
let TitreTemporaire;
let DescrptionTemporaire;
let DateTemporaire;
let TimeTemporaire;
let statusTemporaire;
let prioriteTemporaire;

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

function closeEditModal(){
  editModal.classList.add("hidden");
}

// fct pour ajouter une tache 
 function ajouterTache()
  {
    if(gestionErr(titre,description,date,time))
    {
      alert("il faut remplaire Tous les champs");
      
    }
    else{
    var div=document.createElement("div");
    let label =document.createElement("label");
    var status = document.querySelector('input[name="taskStatus"]:checked').value;
    console.log(status);
    let containerDesTaches=document.getElementsByClassName("content")
    // pour le style 
    div.classList.add("containerTache","p-4");
    
    label.innerHTML= `<h1>${titre.value}</h1>
                       <p >${description.value}<p><br>
                       <p>${date.value}/${time.value}</p>
                       `;
    if(priorite.value==="p1")
    {
      div.classList.add("bg-red-300", "border-l-4", "border-red-500");
    }else if(priorite.value==="p2")
    {
      div.classList.add("bg-yellow-300", "border-l-4", "border-yellow-300");
    }else if(priorite.value==="p3")
    {
      div.classList.add("bg-green-100", "border-l-4", "border-green-500");
    }
      div.appendChild(label);
      // contToDo++;
   
 
    
    // ajouetr div conteint la button modifier et supprimmer
    let divButton=document.createElement("div");
    
    divButton.classList="divButton flex justify-end";
    div.appendChild(divButton);

let btnModifier = document.createElement("button");
let btnSupprimmer = document.createElement("button");
// appeler la fct remove
btnSupprimmer.onclick= function() {
  alert(status)
  supprimer(divButton, status);
};
btnModifier.onclick= modifier;
// ajouter css 
btnModifier.className = "bteModifier bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 flex items-center";
btnSupprimmer.className = " bteSupprimer bg-red-500 text-white font-semibold py-2 px-4 rounded hover:bg-red-600 flex items-center";

// ajouter des img 
btnModifier.innerHTML = '<img src="modifierIcon.png" class="w-5 h-5 mr-2"> ';
btnSupprimmer.innerHTML = '<img src="supprimmericon.png" class="w-5 h-5 mr-2"> ';

// affcetter e le parent 
      divButton.appendChild(btnModifier);
      divButton.appendChild(btnSupprimmer);

    if (status === "To-Do") {
        containerDesTaches[0].appendChild(div);
        tablToDo.push(div);
        contToDo++;
        document.getElementById("contToDo").textContent=contToDo;
    } else if (status === "Doing") {
      containerDesTaches[1].appendChild(div);
      tabDoing.push(div);
      contDoing++;
        document.getElementById("contDoing").textContent=contDoing;
    } else if (status === "Done") {
      containerDesTaches[2].appendChild(div);
      tabDone.push(div);
      contDone++;
      document.getElementById("contDone").textContent=contDone;
    } 
    
    TitreTemporaire=titre.value;
    DescrptionTemporaire=description.value;
    DateTemporaire=date.value;
    TimeTemporaire=time.value;
    prioriteTemporaire=priorite.value;

    titre.value='';
    description.value='';
    date.value='';
    time.value='';
    priorite.value='p1';
  }

}

function gestionErr(Titre,description,date,time)
{
  if(Titre.value===''||description.value===''||date.value===''||time.value==='')
    return true;
  return false;
}

function supprimer(button, status)
{
  
  if (status === "To-Do") 
    {
      button.parentElement.remove();
      contToDo--;
      document.getElementById("contToDo").textContent=contToDo;
    }
  else if (status === "Doing")
    { 
      button.parentElement.remove();
      contDoing--;
      document.getElementById("contDoing").textContent=contDoing;
    }
  else if (status === "Done") {
    button.parentElement.remove();
    contDone--;
    document.getElementById("contDone").textContent=contDone;
  }

}
// modifier
function modifier()
{
  
  editModal.classList.remove("hidden"); 
 
  editTitre.value=TitreTemporaire;
 editDescription.value=DescrptionTemporaire;
 editDateTache.value=DateTemporaire;
 editTimeTache.value= TimeTemporaire;
 editOptions.value=priorite.value;

// editStatus.value=Tachestatus.value;

}

// pour modifier Tache
function modifierTache()
{
  
}
