// main node app
const express = require("express");
const app = express();
const postRoute = require("./routes/posts");
const mongoose = require("mongoose");
require("dotenv").config();

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Go to http://localhost:${port}`));

app.use(express.json());
app.use(express.static("public"));

// -------- MongoDB Atlas Connection --------------
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};
mongoose.connect(process.env.DB_CONNECTION, options, (err) => {
  console.log("Connected to the database!");
});

// ----- postRoute is a middleware and routing system -------
app.use("/posts", postRoute);

// ------ handle "home page" get request ---------
app.get("/", (req, res) => {
  res.send("Home page.");
});
