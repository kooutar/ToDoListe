var cont=0
function ajouter()
{
   var div=document.createElement("div");
   var input =document.createElement("input");
   

  //  Ajouter une classe à la div
    div.classList.add("contentToDo");
    //  aselectionner element parent de div
    var parent=document.getElementsByClassName("content")[0];
    //afectter enfent a son parent
    parent.appendChild(div);
    input.type="text";
     div.appendChild(input);
      cont++;
    document.getElementById("cont").textContent=cont;
}



function ajouter2()
{  
   var modal=document.getElementById("fenetre-medial");
   
  //  var ajouterTache=document.getElementById("ajouter");
   
   var closeBtn = document.getElementsByClassName("close")[0];
   
   
    modal.style.display="block";
   
   
   closeBtn.onclik=function(){
    modal.style.display="none"
   }
   
}
function remove(){
  
}