const { readAndParseFile, writeStringifiedFile } = require('./services');

const createSimpsonsFamily = async () => {
  const data = await readAndParseFile('./simpsons.json');
  const simpsonsFamily = data.filter(({ id }) => +id > 0 && +id < 5);
  await writeStringifiedFile('./simpsonsFamily.json', simpsonsFamily);
};

createSimpsonsFamily();
