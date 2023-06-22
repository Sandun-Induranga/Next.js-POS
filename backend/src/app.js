import dotenv from "dotenv";
dotenv.config();
import express from "express";
import db from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import Routes from "./routes/Routes";
const { json, urlencoded } = bodyParser;

const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use("/", new Routes().getRoutes());

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
