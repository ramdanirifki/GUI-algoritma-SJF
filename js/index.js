import Function from "./function.js";
import calculation from "./calculation.js";

window.addEventListener('load', function () {
  const navLi1 = document.querySelector('#home');
  const navLi3 = document.querySelector('#feature');

  const elementSatu = document.querySelector('#home-page');
  const elementTiga = document.querySelector('#sjf-feature'); 

  // Navlink
  Function.navLinks(navLi1, elementSatu, elementTiga);
  Function.navLinks(navLi3, elementTiga, elementSatu);

  // Button Active
  Function.buttonActive(navLi1, navLi3);
  Function.buttonActive(navLi3, navLi1);

  // Calculation
  calculation();
})
