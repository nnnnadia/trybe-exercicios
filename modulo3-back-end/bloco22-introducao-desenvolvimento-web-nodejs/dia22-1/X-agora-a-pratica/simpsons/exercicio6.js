const { readAndParseFile, writeStringifiedFile } = require('./services');

const updateCharacterName = async (newName, charId) => {
  const simpsonsFamily = await readAndParseFile('./simpsonsFamily.json');
  const charIndex = simpsonsFamily.findIndex(({ id }) => +id === charId);
  simpsonsFamily[charIndex].name = newName;
  await writeStringifiedFile('./simpsonsFamily.json', simpsonsFamily);
};

updateCharacterName('Maggie Simpson', 8);
