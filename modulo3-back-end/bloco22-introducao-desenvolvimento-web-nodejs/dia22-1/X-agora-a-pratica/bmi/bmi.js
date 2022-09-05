const readLineSync = require('readline-sync');

const weight = readLineSync.questionFloat('What is your weight? ');
const height = readLineSync.questionFloat('What is your height? ');
const calculateBMI = () => (weight / height ** 2).toFixed(1);
const zoneBMI = (bmi) => {
  if (bmi < 18.5) return 'underweight';
  if (bmi >= 18.5 && bmi < 25) return 'healthy';
  if (bmi >= 25 && bmi < 30) return 'overweight';
  if (bmi >= 30 && bmi < 40) return 'obese';
  return 'extremely obese';
};

const calculatedBMI = calculateBMI();
const bandBMI = zoneBMI(calculatedBMI);

console.log(`Your BMI is ${calculatedBMI}.`);
console.log(`You are ${bandBMI}.`);

module.exports = {
  calculateBMI,
  calculatedBMI,
  zoneBMI,
  bandBMI,
};