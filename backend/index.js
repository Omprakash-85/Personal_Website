require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const formRouter = require("./contact/contact.router");

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 4000;
const MONGODB_URL = process.env.MONGODB_URL;

mongoose
  .connect(MONGODB_URL, {})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.error("Error connecting to MongoDB:", err));
app.use("/api", formRouter);
app.listen(port, () => console.log(`Server is running on port ${port}`));
