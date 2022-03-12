// const getFactorial = (num) => {
//   let factorial = 1;
//   for (let i = 2; i <= num; i += 1) {
//     factorial *= i;
//   }
//   return factorial;
// }

// let num = 0;

// console.log(`${num}! = ${getFactorial(num)}`);

let getFactorial = (num) => num === 0 ? 1 : num *= getFactorial(num - 1);

let num = 0;

console.log(`${num}! = ${getFactorial(num)}`);
