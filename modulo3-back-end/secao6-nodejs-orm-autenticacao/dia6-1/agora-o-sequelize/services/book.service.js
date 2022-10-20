const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll();
  return books;
};

const getById = async (id) => {
  const book = await Book.findByPk(id);
  return book;
};

const create = async (newBook) => {
  const book = await Book.create({ ...newBook });
  return book;
};

const update = async (id, updatedBook) => {
  const book = await Book.update({ ...updatedBook },
    { where: { ...id } });
  return book;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
};
