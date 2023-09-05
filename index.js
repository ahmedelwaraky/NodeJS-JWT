const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRoute");
const app = express();
require("dotenv").config();
const port = process.env.SERVER_PORT;
const MONGODE_URL = "mongodb://127.0.0.1:27017/jwt";
const auth = require("./middlewares/auth")

// MiddleWare
app.use(express.json());
app.use("/user", userRouter);

app.post("/welcome", auth, (req, res) => {
  res.status(200).send("Welcome 🙌 ");
});

//Connect Server
app.listen(port, (req, res) => {
  console.log("server has Been created");
});
//connect Data Base
mongoose
  .connect(MONGODE_URL)
  .then(() => {
    console.log("DateBase Has Connected");
  })
  .catch((err) => {
    console.log("The Error " + err);
  });
