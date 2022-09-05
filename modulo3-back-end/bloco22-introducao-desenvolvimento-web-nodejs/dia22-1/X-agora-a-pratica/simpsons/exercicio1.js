const { readAndParseFile } = require('./services');

const printIdAndName = async () => {
  try {
    const data = await readAndParseFile('./simpsons.json');
    data.forEach(({ id,name }) => console.log(`${id} - ${name}`));
  } catch (error) {
    console.log(`Erro: ${error.message}`);
  }
};

printIdAndName();
