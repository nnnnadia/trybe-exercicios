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

module.exports = {
  readAndParseFile,
};
