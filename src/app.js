/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let carta = [1, 2, 3, 4, 5, 6, 7, 8, 9, "j", "q", "k"];
  let palos = ["♦", "♥", "♠", "♣"];

  let cartaRandom = Math.floor(Math.random() * carta.length);
  let cartaElegida = carta[cartaRandom];
  let paloRandom = Math.floor(Math.random() * palos.length);
  let paloElegido = palos[paloRandom];
  let palo = document.getElementById("palo");
  palo.innerHTML = paloElegido;

  let number = document.getElementById("number");
  number.innerHTML = cartaElegida;
  let palo2 = document.getElementById("palo2");
  palo2.innerHTML = paloElegido;
  if (paloElegido == "♥" || paloElegido == "♦") {
    palo.classList.add("red");
    palo.classList.remove("black");
    palo2.classList.add("red");
    palo2.classList.remove("black");
  } else {
    palo.classList.add("black");
    palo.classList.remove("red");
    palo2.classList.add("black");
    palo2.classList.remove("red");
  }
};
