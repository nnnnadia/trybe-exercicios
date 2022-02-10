// 1 - Acesse o elemento elementoOndeVoceEsta.
let elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');

// 2 - Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele. 
elementoOndeVoceEsta.parentNode.style.color = 'red';

// 3 - Acesse o primeiroFilhoDoFilho e adicione um texto a ele.
elementoOndeVoceEsta.firstElementChild.innerText = 'O primeiro filho do filho é também meu primeiro filho.';

// 4 - Acesse o primeiroFilho a partir de pai.
let pai = document.getElementById('pai');
console.log(pai.children[0]);

// 5 - Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
console.log(elementoOndeVoceEsta.previousElementSibling);

// 6 - Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
console.log(elementoOndeVoceEsta.nextSibling);

// 7 - Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
console.log(elementoOndeVoceEsta.nextElementSibling);

// 8 - Agora acesse o terceiroFilho a partir de pai.
console.log(pai.lastElementChild.previousElementSibling);
console.log(pai.childNodes[5]);