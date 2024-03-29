const fs = require('fs').promises;

const readAndParseFile = async (filePath) => {
  try {
    const rawData = await fs.readFile(filePath, 'utf-8');
    const parsedData = JSON.parse(rawData);
    return parsedData;
  } catch (error) {
    throw new Error(`Erro ao ler arquivo: ${error.message}`);
  }
};

const findCharacterById = async (searchId) => {
  const data = await readAndParseFile('./simpsons.json');
  const promise = new Promise((resolve, reject) => {
    const character = data.find(({ id }) => +id === searchId);
    if (character) resolve(character);
    reject(new Error('Não há personagem com este id.'));
  });
  return promise;
};

const writeStringifiedFile = async (path, data) => {
  try {
    const stringifiedData = JSON.stringify(data);
    await fs.writeFile(path, stringifiedData);
  } catch (error) {
    console.error(`Erro ao escrever o arquivo: ${error.message}`);
  }
};

module.exports = {
  readAndParseFile,
  findCharacterById,
  writeStringifiedFile,
};
