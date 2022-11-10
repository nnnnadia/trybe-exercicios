import Student from './Student';

const s1 = new Student(
  'Fulano',
  {
    firstScore: 10,
    secondScore: 10,
    thirdScore: 10,
    fourthScore: 10,
  },
  {
    firstScore: 5,
    secondScore: 5,
  },
);

console.log(`Soma das notas de ${s1.name}:
- Provas: ${s1.getScoreSum().testScoreSum}
- Trabalhos: ${s1.getScoreSum().essayScoreSum}`);

console.log(`Média das notas de ${s1.name}:
- Provas: ${s1.getScoreAverage().testScoreAverage}
- Trabalhos: ${s1.getScoreAverage().essayScoreAverage}`);
