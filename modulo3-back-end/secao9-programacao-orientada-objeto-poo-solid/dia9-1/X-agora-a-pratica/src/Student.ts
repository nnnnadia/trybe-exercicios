/*
  Exercício 1:
    Vamos modelar algumas partes de um software de uma escola.
    Escreva uma classe cujos objetos representarão pessoas estudantes matriculadas em uma disciplina.
    Cada objeto dessa classe deve conter os seguintes dados:
      matrícula, nome, 4 notas de prova, 2 notas de trabalho.
*/

export default class Student {
  private _name: string;
  private _testScores: {
    firstScore: number,
    secondScore: number,
    thirdScore: number,
    fourthScore: number,
  };

  private _essayScores: {
    firstScore: number,
    secondScore: number,
  };

  constructor(
    name: string,
    testScores: {
      firstScore: number,
      secondScore: number,
      thirdScore: number,
      fourthScore: number,
    },
    essayScores: {
      firstScore: number,
      secondScore: number,
    },
  ) {
    this._name = name;
    this._testScores = testScores;
    this._essayScores = essayScores;
  }
}
