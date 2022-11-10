/*
  Exercício 1:
    Vamos modelar algumas partes de um software de uma escola.
    Escreva uma classe cujos objetos representarão pessoas estudantes matriculadas em uma disciplina.
    Cada objeto dessa classe deve conter os seguintes dados:
      matrícula, nome, 4 notas de prova, 2 notas de trabalho.

  Exercício 2:
    Agora vamos adicionar à nossa classe de pessoa estudante os comportamentos.
    Para isso adicione dois métodos:
      um que calcula a soma das notas da pessoa estudante
      e outro que calcula a média das notas da pessoa estudante.
*/

export default class Student {
  name: string;
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
    this.name = name;
    this._testScores = testScores;
    this._essayScores = essayScores;
  }

  getScoreSum(): {
    testScoreSum: number,
    essayScoreSum: number,
  } {
    const testScoreSum = Object.values(this._testScores)
      .reduce((acc, curr) => acc + curr);
    const essayScoreSum = Object.values(this._essayScores)
      .reduce((acc, curr) => acc + curr);
    return {
      testScoreSum,
      essayScoreSum,
    };
  }

  getScoreAverage(): {
    testScoreAverage: number,
    essayScoreAverage: number,
  } {
    const scoreSum = this.getScoreSum();
    const testScoreAverage = scoreSum.testScoreSum / 4;
    const essayScoreAverage = scoreSum.essayScoreSum / 2;
    return {
      testScoreAverage,
      essayScoreAverage,
    };
  }
}
