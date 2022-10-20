const { BookService } = require('../services');

const getAll = async (_req, res) => {
  try {
    const books = await BookService.getAll();
    return res.status(200).json(books);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: 'Ocorreu um erro' });
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

module.exports = {
  getAll,
  getById,
};
