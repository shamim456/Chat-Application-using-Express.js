// external import
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
dotenv.config();

// database connection
mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.MONGO_CONNECTION_STRING, { useNewUrlParser: true })
  .then(() => console.log("database connected"))
  .catch((err) => console.log(err));

app.listen(process.env.PORT, () => {
  console.log("App is running properly");
});

// request parser  middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set view engine

app.set("view engine", "ejs");

// set static folder

app.use(express.static(path.join(__dirname, "Public")));
