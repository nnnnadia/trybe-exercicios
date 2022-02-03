const peca = "RaiNHa";

switch (peca.toLowerCase()) {
  case ("peao"):
    console.log("na posição inicial pode andar duas casa, depois somente uma casa pra frente quando se movimenta ou uma casa na diagonal quando ataca");
    break;
  case "torre":
    console.log("qualquer quantidade de casas na horizontal ou vertical");
    break;
  case "cavalo":
    console.log("movimento em L");
    break;
  case "bispo":
    console.log("qualquer quantidade de casas na diagonal");
    break;
  case "rei":
    console.log("uma casa na diagonal, horizontal ou vertical");
    break;
  case "rainha":
    console.log("qualquer quantidade de casas na diagonal, horizontal ou vertical");
    break;
  default:
    console.log("não é uma peça");
}