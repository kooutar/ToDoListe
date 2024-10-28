function ajouter()
{
   var div=document.createElement("div");
  //  Ajouter une classe à la div
    div.classList.add("contentToDo");
    //  aselectionner element parent de div
    var parent=document.getElementsByClassName("content")[0];
    //afectter enfent a son parent
    parent.appendChild(div);
}

function remove(){
  
}