const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
require("dotenv").config();
const userRouters = require("./routes/userRoutes");
//db
const MONGO_URL = process.env.MONGO_URL;
mongoose.connect(
  MONGO_URL,
  {
    // useCreateIndex: true,
    // useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Db connected");

    const PORT = process.env.PORT;
    app.listen(PORT, () => {
      console.log(`Server is running on port:${PORT}`);
    });
  }
);
// mw
app.use(express.json());
express.urlencoded({ extended: true });
app.use(cookieParser());

// routes
app.use(userRouters);
