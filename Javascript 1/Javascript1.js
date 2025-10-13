/*Variables */
let nombre1 = 10;
let nombre2 = 5;
let somme = nombre1 + nombre2;
console.log("La somme est : " + somme);

/*Fonctions */
function addition(a, b) {
  return a + b;
}

let Somme = addition(8, 5);
console.log("La Somme est : " + Somme);

/*conditions */
let age = 20;

if (age < 18) {
  console.log("Vous êtes mineur.");
} else if (age === 18) {
  console.log("Vous venez d’atteindre la majorité !");
} else {
  console.log("Vous êtes majeur.");
}


/*Boucles */
for (let i = 1; i <= 10; i++) {
  if (i === 5) continue; // sauter le 5
  console.log("Nombre : " + i);
}
