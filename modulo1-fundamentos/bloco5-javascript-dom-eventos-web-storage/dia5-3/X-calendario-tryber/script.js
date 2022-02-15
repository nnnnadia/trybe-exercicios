function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
/*Exercício 1
  O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.

  - Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
  - Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
  - Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>
*/

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const holidayList = [24, 25, 31];
const fridayList = [4, 11, 18, 25];

function appendDays(daysList) {
  let ulDays = document.querySelector('#days')
  for (let day of daysList) {
    let liElement = document.createElement('li');
    liElement.className = 'day';
    liElement.innerText = day;
    ulDays.appendChild(liElement);
  }
}

function classifyDays(excepcDaysList, exceptionality) {
  let days = document.querySelector('#days').children;
  for (let i = 0; i < days.length; i += 1) {
    for (let j = 0; j < excepcDaysList.length; j += 1) {
      if (days[i].innerText == excepcDaysList[j]) {
        days[i].className += ` ${exceptionality}`;
      }
    }
  }
}

function createDays(daysList) {
  appendDays(daysList);
  classifyDays(holidayList, 'holiday');
  classifyDays(fridayList, 'friday');
}

createDays(dezDaysList);

/*Exercício 2
  Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".

  - Adicione a este botão a ID "btn-holiday" .
  - Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
*/

function createButton(btnId, btnText) {
  let btnContainer = document.querySelector('.buttons-container');
  let btn = document.createElement('button');
  btn.id = btnId;
  btn.innerText = btnText;
  btnContainer.appendChild(btn);
}

createButton('btn-holiday', 'Feriados');

/*Exercício 3
  Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .

  - É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" ou "#eee" .
*/

function changeColorHolidays() {
  let holidayElements = document.querySelectorAll('.holiday');
  for (let element of holidayElements) {
    let backgroundColor = element.style.backgroundColor;
    if (backgroundColor != 'darkgreen') {
      element.style.backgroundColor = 'darkgreen';
      element.style.color = 'white';
    } else {
      element.style.backgroundColor = '#eee';
      element.style.color = '#777';
    }
  }
}

let btnHoliday = document.querySelector('#btn-holiday');
btnHoliday.addEventListener('click', changeColorHolidays);

/*Exercício 4
  Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".

  Adicione a este botão o ID "btn-friday" .
  Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
*/

createButton('btn-friday', 'Sexta-feira');

/*Exercício 5
  Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.

  - É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.
*/

function changeTextFridays() {
  let fridayElements = document.querySelectorAll('.friday');
  for (let i = 0; i < fridayElements.length; i += 1) {
    let text = fridayElements[i].innerText;
    if (text != 'Sextou!') {
      fridayElements[i].innerText = 'Sextou!'
    } else {
      fridayElements[i].innerText = fridayList[i];
    }
  }
}

let btnFriday = document.querySelector('#btn-friday');
btnFriday.addEventListener('click', changeTextFridays);

/*Exercício 6
  Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.

  - Dica - Propriedade: event.target .
*/

function zoomIn(event) {
  event.target.style.fontWeight = 'bold';
}

function zoomOut(event) {
  event.target.style.fontWeight = 'normal';
}

let days = document.querySelectorAll('.day');
for (let element of days) {
  element.addEventListener('mouseover', zoomIn);
  element.addEventListener('mouseleave', zoomOut);
}