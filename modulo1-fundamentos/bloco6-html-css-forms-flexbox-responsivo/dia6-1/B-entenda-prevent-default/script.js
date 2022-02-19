// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function preventTest(event) {
  event.preventDefault();
}

function preventKeystrokeTest(event) {
  if (event.key !== 'a') {
    event.preventDefault();
  }
}

HREF_LINK.addEventListener('click', preventTest);
INPUT_CHECKBOX.addEventListener('click', preventTest);
INPUT_TEXT.addEventListener('keypress', preventKeystrokeTest);