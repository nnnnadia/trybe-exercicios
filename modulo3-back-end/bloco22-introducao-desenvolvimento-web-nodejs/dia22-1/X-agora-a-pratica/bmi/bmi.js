const readLineSync = require('readline-sync');

const weight = readLineSync.questionFloat('What is your weight? ');
const height = readLineSync.questionFloat('What is your height? ');
const bmi = () => (weight / height ** 2).toFixed(1);

console.log(`Your BMI is ${bmi()}`);

module.exports = bmi;