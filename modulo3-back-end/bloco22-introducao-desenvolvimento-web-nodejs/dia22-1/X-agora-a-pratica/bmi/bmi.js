const weight = 65.2;
const height = 1.68;
const bmi = () => weight / height ** 2;

console.log(bmi());

module.exports = bmi;