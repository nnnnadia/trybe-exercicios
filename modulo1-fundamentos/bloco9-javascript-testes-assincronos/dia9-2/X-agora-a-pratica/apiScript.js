// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const showJoke = (joke) => {
  const jokeContainer = document.querySelector('#jokeContainer');
  jokeContainer.innerText = joke;
}

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  }
  fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => showJoke(data.joke));
};

window.onload = () => fetchJoke();
