const { readAndParseFile, writeStringifiedFile, findCharacterById } = require('./services');

const addToSimpsonsFamily = async (addId) => {
  const newMember = await findCharacterById(addId);
  const simpsonsFamily = await readAndParseFile('./simpsonsFamily.json');
  const updatedFamily = [...simpsonsFamily, newMember];
  await writeStringifiedFile('./simpsonsFamily.json', updatedFamily);
};

addToSimpsonsFamily(8);
