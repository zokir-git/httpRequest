const router = require("express").Router();
const Student = require("../Models/Student");

//POST
router.post("/", async (req, res) => {
  try {
    const student = new Student({
      name: req.body.name,
      email: req.body.email,
      age: req.body.age,
    });
    const savedStudent = await student.save();
    res.status(200).json(savedStudent);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// PUT
router.put("/:id", async (req, res) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedStudent);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    const deletedStudent = await Student.findByIdAndDelete(req.params.id);
    res.status(200).json(`Student ${req.params.id} has been deleted`);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//GET
router.get("/:id", async (req, res) => {
  try {
    const students = await Student.findById(req.params.id);
    res.status(200).json(students);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//GET
router.get("/", async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
