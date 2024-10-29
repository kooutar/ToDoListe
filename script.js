var cont=0

function ajouter2()
{  
   let modal=document.getElementById("fenetre-medial");
   let closeBtn = document.getElementsByClassName("close")[0];
    modal.style.display="block";

   closeBtn.onclik=function(){
    modal.style.display="none"
   }
   
}

document.addEventListener("DOMContentLoaded", function() {
  const ajouterTacheButton = document.getElementById("ajouterTache");
  ajouterTacheButton.addEventListener("click", ajouterTache);
});
 function ajouterTache()
  {
    var div=document.createElement("div");
    var label =document.createElement("label");

    var titre=document.getElementById("titre").value;
      //  Ajouter une classe à la div
      div.classList.add("titre");

       //  aselectionner element parent de div
    var parent=document.getElementsByClassName("content")[0];
    //afectter enfent a son parent
    parent.appendChild(div);
    label.innerHTML= titre;
    
     div.appendChild(label);
      cont++;
    document.getElementById("cont").textContent=cont;
    
  }

function remove(){
  
}