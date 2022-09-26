require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const mainPageRoute = require("./routes/mainPageRoute");

const PORT = process.env.SERVER_PORT || 3000;
const app = express();
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use("/auth", mainPageRoute);

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION);
    app.listen(PORT, () => {
      console.log(`ALOHA ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
