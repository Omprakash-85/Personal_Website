const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const formRouter = require("./contact/contact.router");

const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 3001;

const MONGODB_URL = "mongodb://localhost:27017/mywebsite";
mongoose
  .connect(MONGODB_URL, {})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

app.use("/api", formRouter);
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
