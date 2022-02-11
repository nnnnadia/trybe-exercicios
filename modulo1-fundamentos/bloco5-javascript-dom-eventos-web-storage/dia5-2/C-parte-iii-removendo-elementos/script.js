let elementoOndeVoceEsta = document.getElementById
('elementoOndeVoceEsta');
let pai = document.getElementById('pai');

elementoOndeVoceEsta.parentNode.style.color = 'red';
elementoOndeVoceEsta.firstElementChild.innerText = 'O primeiro filho do filho é também meu primeiro filho.';

let textoDoIrmao = 'eu sou o texto do irmão';
let elementoIrmao = document.createElement('p');
elementoIrmao.innerText = textoDoIrmao;
pai.appendChild(elementoIrmao);
let elementoFilho = document.createElement('h4');
elementoFilho.innerText = 'a grande família';
elementoOndeVoceEsta.appendChild(elementoFilho);
let elementoNeto = document.createElement('em');
elementoNeto.innerText = 'piada interna';
elementoOndeVoceEsta.firstElementChild.appendChild(elementoNeto);

// 1 - Remova todos os elementos filhos de paiDoPai exceto pai, elementoOndeVoceEsta e primeiroFilhoDoFilho.
let irmaos = pai.children;

for (let i = irmaos.length - 1; i >= 0 ; i -= 1) {
  if (irmaos[i].id !== 'elementoOndeVoceEsta') {
    irmaos[i].remove();
  }
}

for (let i = 0; i < 2; i += 1) {
  elementoOndeVoceEsta.lastElementChild.remove();
}