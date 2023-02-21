const router = require("express").Router();
const Book = require("../Models/Book");

//POST
router.post("/", async (req, res) => {
  try {
    const book = new Book({
      title: req.body.title,
      author: req.body.author,
      year: req.body.year,
      genre: req.body.genre,
      numOfPages: req.body.numOfPages,
      isBestseller: req.body.isBestseller,
    });
    const savedBook = await book.save();
    res.status(200).json(savedBook);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// PUT
router.put("/:id", async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedBook);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    res.status(200).json(`Book ${req.params.id} has been deleted`);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//GET
router.get("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    res.status(200).json(book);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//GET
router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
