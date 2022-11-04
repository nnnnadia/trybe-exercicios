const { BookService } = require('../services');

const getAll = async (_req, res) => {
  try {
    const books = await BookService.getAll();
    return res.status(200).json(books);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: 'Something went wrong' });
  }
};

const getById = async (req, res) => {
  try {
    const id = req.params;
    const book = await BookService.getById(id);
    return res.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    return res.status(404).json({ message: 'Book not found' });
  }
};

const create = async (req, res) => {
  try {
    const newBook = req.body;
    const book = await BookService.create(newBook);
    return res.status(201).json(book);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: 'Something went wrong' });
  }
};

const update = async (req, res) => {
  try {
    const id = req.params;
    const updatedBook = req.body;
    const book = await BookService.update(id, updatedBook);
    return res.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: 'Something went wrong' });
  }
};

const remove = async (req, res) => {
  try {
    const id = req.params.id;
    const book = await BookService.remove(id);
    return res.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: 'Something went wrong' });
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
