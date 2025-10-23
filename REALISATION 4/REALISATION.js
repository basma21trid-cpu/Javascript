
let input = document.getElementById("nouvelleTache");
let btn = document.getElementById("btn-ajouter");
let liste = document.getElementById("Liste");

 let taches = JSON.parse(localStorage.getItem("taches")) || []; 

 function afficherTaches() {
  liste.innerHTML = "";
  taches.forEach((texte, index) => {
        let tache = document.createElement("li");

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        
        let span = document.createElement("span");
        span.innerText = texte;

        let bouton = document.createElement("button");
        bouton.innerText = "DELETE";

        bouton.addEventListener("click",() => {
        taches.splice(index, 1); 
        localStorage.setItem("taches", JSON.stringify(taches));
        afficherTaches(); 
        });

        tache.appendChild(checkbox);
        tache.appendChild(span);
        tache.appendChild(bouton);

        liste.appendChild(tache);
 });
 }

btn.addEventListener("click", () => {
    let texte = input.value.trim();
    if(texte === "") return;

  taches.push(texte); 
  localStorage.setItem("taches", JSON.stringify(taches)); 

   afficherTaches();
    input.value = "";
});

 afficherTaches();








