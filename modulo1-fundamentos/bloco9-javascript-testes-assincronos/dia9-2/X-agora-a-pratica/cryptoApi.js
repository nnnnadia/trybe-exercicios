const url = 'https://api.coincap.io/v2/assets';

const append = ({ name, symbol, priceUsd }) => {
  const ul = document.querySelector('ul');
  const li = document.createElement('li');
  li.innerText = `${name} (${symbol}): ${priceUsd}`;
  ul.appendChild(li);
}

const fetchApi = (endPoint) => {
  fetch(endPoint)
    .then((response) => response.json())
    .then((data) => data.data
    .filter(({ rank }) => rank < 11)
    .forEach((coin) => append(coin)));
}

fetchApi(url);