let biggestWord = (string) => {
  let biggest = '';
  string.split(' ').forEach(element => {
    if (element.length >= biggest.length) {
      biggest = element;
    }
  });;
  return biggest;
}

console.log(biggestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));