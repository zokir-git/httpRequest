const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const studentRouter = require("./routes/student");
const bookRouter = require("./routes/book");
const postRouter = require("./routes/post");

mongoose.set("strictQuery", false);
mongoose.connect(
  "mongodb+srv://zokir:g0diPXvl7AFWYNqq@cluster0.ltslkgv.mongodb.net/FirstDB?retryWrites=true&w=majority"
);

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/students", studentRouter);
app.use("/api/books", bookRouter);
app.use("/api/posts", postRouter);

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
