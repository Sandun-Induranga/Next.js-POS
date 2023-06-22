require("dotenv").config();
const express = require("express");
const { json, urlencoded } = require("body-parser");
const cors = require("cors");
const db = require("mongoose");
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use("/", routes);

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
