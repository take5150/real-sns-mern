const express = require("express");
const app = express();
const PORT = 5000;
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postsRoute = require("./routes/posts");
const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DBに接続中・・・");
  })
  .catch((err) => {
    console.log(err);
  });

// ミドルウェア
app.use(express.json());

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postsRoute);

app.listen(PORT, () => console.log("サーバーが起動しました"));
