const { expect, it } = require('@jest/globals');
const sum = require('./sum');

describe('the function sum()', () => {
  it('returns the sum of two numbers when natural numbers is given as parameters', () => {
    expect(sum(4, 5)).toBe(9);
  });

  it('returns the sum of two numbers when zeroes are given as parameters', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it(`throws an error message 'parameters must be numbers' when one of the given parameters is a string`, () => {
    expect(() => {
      sum(4, '5')
    }).toThrow('parameters must be numbers');
  });
})