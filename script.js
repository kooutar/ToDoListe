var cont=0

// fct pour afficher modale
function ajouter2()
{  
   let modal=document.getElementById("fenetre-medial");
   let closeBtn = document.getElementsByClassName("close")[0];
   modal.style.display="block";
   closeBtn.onclik=function(){
    modal.style.display="none"
   }
}

// lisnter pour fermer modale

document.addEventListener("DOMContentLoaded", ()=> {
  var ajouterTacheButton = document.getElementById("close");
  ajouterTacheButton.addEventListener("click", ()=>{
   let modal=document.getElementById("fenetre-medial");
    modal.style.display="none";
  });
});

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
      cont++;
    document.getElementById("cont").textContent=cont;
}
  }
    
  

function remove(){
  
}