const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

console.log(numbers.filter(number => number % 2 === 0).reduce((result, number) => result + number));
