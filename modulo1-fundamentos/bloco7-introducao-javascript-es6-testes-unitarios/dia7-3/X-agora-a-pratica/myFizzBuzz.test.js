function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

describe('The function myFizzBuzz(num)', () => {
  it('returns fizzbuzz if num is divisible by 3 and 5', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  it('returns fizz if num is divisible by 3', () => {
    expect(myFizzBuzz(27)).toBe('fizz');
  });
  it('returns buzz if num is divisible by 5', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });
  it('returns num if num isn\'t divible by 3 neither 5', () => {
    expect(myFizzBuzz(2)).toBe(2);
  });
  it('returns false if num isn\'t a number', () => {
    expect(myFizzBuzz('abacate')).toBeFalsy();
  });
});