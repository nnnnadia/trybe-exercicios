let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio;

for (let i = 0; i < menu.length; i += 1) {
  if (menu[i] === 'Portfólio') {
    indexOfPortfolio = i;
  }
}

console.log(indexOfPortfolio);