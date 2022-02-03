const primeiroAngulo = 93;
const segundoAngulo = 45;
const terceiroAngulo = 45;
let eTriangulo;

if (primeiroAngulo <= 0 || segundoAngulo <= 0 || terceiroAngulo <= 0 || typeof primeiroAngulo == "string" || typeof segundoAngulo == "string" || typeof terceiroAngulo == "string") {
  eTriangulo = null;
} else if ((primeiroAngulo + segundoAngulo + terceiroAngulo) === 180) {
  eTriangulo = true;
} else {
  eTriangulo = false;
}

console.log(eTriangulo);