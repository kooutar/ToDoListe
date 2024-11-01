var contToDo=0
var contDoing=0;
var contDone=0;
let modal=document.getElementById("fenetre-medial");
var tablToDo=[];
var tabDoing=[];
var tabDone=[];


// fct pour afficher modale

let editModal = document.getElementById("edit-modal");
let editTitre = document.getElementById("editTitre");
let editDescription = document.getElementById("editDescription");
let editDateTache =document.getElementById("editDateTache");
let editTimeTache = document.getElementById("editTimeTache");
let editOptions = document.getElementById("editOptions");

function ajouter2()
{  
  document.getElementById('fenetre-medial').style.display="block"
}
 

// lisnter pour fermer modale

document.addEventListener("DOMContentLoaded", ()=> {
  var ajouterTacheButton = document.getElementById("close");
  ajouterTacheButton.addEventListener("click", ()=>{
  //  let modal=document.getElementById("fenetre-medial");
    modal.style.display="none";
  });
});

function closeEditModal(){
  editModal.classList.add("hidden");
}

// fct pour ajouter une tache 
 function ajouterTache()
  {
    var div=document.createElement("div");
    let label =document.createElement("label");
    let titre=document.getElementById("titre").value;
    let description=document.getElementById("description").value;
    let date=document.getElementById("dateTache").value;
    let time=document.getElementById("timeTache").value;
    let priorite=document.getElementById("options").value;
    let status = document.querySelector('input[name="taskStatus"]:checked').value;
    let containerDesTaches=document.getElementsByClassName("content")
    // pour le style 
    div.classList.add("containerTache","p-4");


    //  aselectionner element parent de div
    // var parent=document.getElementsByClassName("content")[0];

    
    //afectter enfent a son parent
    // parent.appendChild(div);
    label.innerHTML= `<h1>${titre}</h1>
                       <p >${description}<p><br>
                       <p>${date}/${time}</p>
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
      // contToDo++;
   
 
    
    // ajouetr div conteint la button modifier et supprimmer
    let divButton=document.createElement("div");
    
    divButton.classList="divButton flex justify-end";
    div.appendChild(divButton);

let btnModifier = document.createElement("button");
let btnSupprimmer = document.createElement("button");
// appeler la fct remove
btnSupprimmer.onclick= remove;
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
      // document.getElementById("todoList").appendChild(containerDesTaches[0]);
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
}
// supprimmer
function remove()
{
  let containerTache = document.getElementsByClassName("containerTache")[0];
  containerTache.remove();
  contToDo--;

  document.getElementById("contToDo").textContent=contToDo;
}
// modifier
function modifier()
{
  editModal.classList.remove("hidden");
  // let titre=document.getElementById("titre").value;
    // let description=document.getElementById("description").value;
    let date=document.getElementById("dateTache").value;
    let time=document.getElementById("timeTache").value;
    let priorite=document.getElementById("options").value;
  let containerTache = document.getElementsByClassName("containerTache")[0];
//   const tabenfant=containerTache.children;//recuperé les enfants de containerTache
//   for (let enfant of tabenfant) {
//    console.log(enfant)
// }
   let titre=containerTache.getElementsByTagName("h1")[0];
   let description=containerTache.getElementsByTagName("p")[0]
}

// pour modifier Tache
function modifierTache()
{

}
