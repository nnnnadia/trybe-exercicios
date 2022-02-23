const btnSubmit = document.querySelector('#btn-submit');
const inputNome = document.querySelector('#nome-input').value.length;
const inputEmail = document.querySelector('#email-input').value.length;
const inputMotivo = document.querySelector('#motivo-input').value.length;

function submitForm(event) {
  event.preventDefault();
  if (inputNome < 10 || inputNome > 40 || inputEmail < 10 || inputEmail > 50 || inputMotivo > 500) {
    alert('Dados Inválidos');
  } else {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
  }
}

btnSubmit.addEventListener('click', submitForm);