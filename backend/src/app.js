require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const db = require("mongoose");

app.get("/", (req, res) => {});

db.connect(process.env.MONGO_DB_URL)
  .then(() => {
    console.log("Connected to MongoDB!");
    app.listen(5000, () => {
      console.log("Server is listening on port 5000!");
    });
  })
  .catch((err) => {
    console.log(err);
  });
