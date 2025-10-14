let bouton = document.getElementById("btn-start");
let message = document.getElementById("message");

bouton.addEventListener("click",function(){
    let nom = prompt("Quel est votre prenom ?");
    if(nom){
        message.innerText="Bonjour , " + nom ;
    }else{
        alert("Aucun nom saisie");
    }
});
