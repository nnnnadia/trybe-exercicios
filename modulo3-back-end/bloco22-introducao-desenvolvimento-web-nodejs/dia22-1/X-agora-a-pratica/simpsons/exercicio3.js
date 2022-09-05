const { readAndParseFile, writeStringifiedFile } = require('./services');

const removeCharacter = async (removeId) => {
  const data = await readAndParseFile('./simpsons.json');
  const newCharacterList = data.filter(({ id }) => +id !== removeId);
  await writeStringifiedFile('./simpsons.json', newCharacterList);
};

removeCharacter(6)
  .then(() => removeCharacter(10));
