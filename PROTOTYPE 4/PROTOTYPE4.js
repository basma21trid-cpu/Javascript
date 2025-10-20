let compteur = document.getElementById("compteur");
let taches = document.querySelectorAll(".tache");

taches.forEach(function(tache) {
  tache.addEventListener("click", calcul);
});

function calcul() {
  let count = 0;

  taches.forEach(function(tache) {
    if (tache.checked) {
      count++;
    }
  });

  compteur.innerText = count;
}
