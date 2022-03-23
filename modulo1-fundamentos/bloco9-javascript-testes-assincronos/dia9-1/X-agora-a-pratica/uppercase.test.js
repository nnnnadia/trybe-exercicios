const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

test('Testa a função uppercase()', (done) => {
  const expected = 'EU NÃO TÔ ENTENDENDO NADA';
  uppercase('eu não tô entendendo nada', (str) => {
    try {
      expect(str).toBe(expected);
      done();
    } catch {
      done(error);
    }
  });
});
