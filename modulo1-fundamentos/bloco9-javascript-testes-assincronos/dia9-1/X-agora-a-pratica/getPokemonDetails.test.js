const { getPokemonDetails } = require("./getPokemonDetails");

describe("A função getPokemonDetails", (done) => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", () => {
    const expected = new Error('Não temos esse pokémon para você :(');

    function callback(onError, onSuccess) {
      expect(onError).toBe(expected);
      done();
    }

    getPokemonDetails((pokemon) => pokemon.name === 'nãoéumpokemon', callback);
  });

  it("retorna um pokemon que existe no banco de dados", () => {
    const expected = 'Olá, seu pokémon é o Bulbasaur, o tipo dele é Grass e a habilidade principal dele é Razor Leaf';

    function callback(onError, onSuccess) {
      expect(onSuccess).toBe(expected);
      done();
    }

    getPokemonDetails((pokemon) => pokemon.name === 'Bulbasaur', callback);
  });
});
