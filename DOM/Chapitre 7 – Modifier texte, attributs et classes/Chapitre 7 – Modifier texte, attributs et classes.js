let titre = document.getElementById("titre");
let image = document.querySelector("img");
let bouton = document.querySelector(".changer");

bouton.addEventListener("click",function(){
    titre.innerText = "titre modifié";
    titre.classList.toggle("highlight");
    image.setAttribute("src", "photo.png");
   image.setAttribute("alt", "Nouvelle image");
});