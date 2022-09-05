const { findCharacterById } = require('./services');

const printById = async (id) => {
  try {
    const character = await findCharacterById(id);
    console.log(character);
  } catch (error) {
    console.log(`Erro: ${error.message}`);
  }
};

printById(6);
