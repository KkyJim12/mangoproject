const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

require("./models/Carousel");

mongoose.connect("mongodb://localhost:27017/mangoproject", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("connected!!");
});

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

require("./routes/Carousel")(app);
require("./routes/ImageUpload")(app);

app.listen(3000, () => {
  console.log("server is running on port 3000");
});