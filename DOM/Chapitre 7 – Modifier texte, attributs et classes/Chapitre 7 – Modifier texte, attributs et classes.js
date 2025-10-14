let titre = document.getElementById("titre");
let image = document.querySelector("img");
let bouton = document.querySelector(".changer");

bouton.addEventListener("click",function(){
    titre.innerText = "titre modifié";
    titre.classList.toggle("texte");
    image.setAttribute("src", "image/pink.jpg");
   image.setAttribute("alt", "nouvelle image");
})