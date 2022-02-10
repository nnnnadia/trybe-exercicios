//querySelector
let fundoTodo = document.querySelector("body");
fundoTodo.style.backgroundColor = "#e5baa4";
//getElementById
let letraCabecalho = document.getElementById("header-container");
letraCabecalho.style.fontFamily = "Cursive";
letraCabecalho.style.borderBottom = "6px groove black"
//querySelectorAll
let tudoQueEhUrgente = document.querySelectorAll(".emergency-tasks h3");
for (let i = 0; i < tudoQueEhUrgente.length; i += 1) {
  tudoQueEhUrgente[i].style.backgroundColor = "#26b322";
}
//getElementsByClassName
let tudoQueNaoEhUrgente = document.getElementsByClassName("no-emergency-tasks-headings");
for(let i = 0; i < tudoQueNaoEhUrgente.length; i += 1) {
  tudoQueNaoEhUrgente[i].style.backgroundColor = "#2694d3";
}
//getElementsByTagName
let fundoNaoImportante = document.getElementsByTagName("div");
for(let i = 1; i < fundoNaoImportante.length; i += 2) {
  fundoNaoImportante[i].style.backgroundColor = "#dbb043";
}

let urgenteImportanteFundo = document.querySelector("div");
urgenteImportanteFundo.style.backgroundColor = "#ff3d47";
let naoUrgenteImportanteFundo = document.querySelector(".no-emergency-tasks div");
naoUrgenteImportanteFundo.style.backgroundColor = "#ff3d47";
let footerDivisor = document.getElementById("footer-container");
footerDivisor.style.borderTop = "6px groove black";