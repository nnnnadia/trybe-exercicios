let elementoOndeVoceEsta = document.getElementById
('elementoOndeVoceEsta');
let pai = document.getElementById('pai');

elementoOndeVoceEsta.parentNode.style.color = 'red';
elementoOndeVoceEsta.firstElementChild.innerText = 'O primeiro filho do filho é também meu primeiro filho.';

// 1 - Crie um irmão para elementoOndeVoceEsta.
let textoDoIrmao = 'eu sou o texto do irmão';
let elementoIrmao = document.createElement('p');
elementoIrmao.innerText = textoDoIrmao;
pai.appendChild(elementoIrmao);

// 2 - Crie um filho para elementoOndeVoceEsta.
let elementoFilho = document.createElement('h4');
elementoFilho.innerText = 'a grande família';
elementoOndeVoceEsta.appendChild(elementoFilho);

// 3 - Crie um filho para primeiroFilhoDoFilho.
let elementoNeto = document.createElement('em');
elementoNeto.innerText = 'piada interna';
elementoOndeVoceEsta.firstElementChild.appendChild(elementoNeto);

// 4 - A partir desse filho criado, acesse terceiroFilho.
console.log(elementoNeto.parentNode.parentNode.nextElementSibling);