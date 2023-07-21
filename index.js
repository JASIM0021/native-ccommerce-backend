const express = require("express");
const dotEnv = require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const ProductRouter = require("./app/routes/ProducrRoute");
const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(cors());

app.use("/api/v1/product", ProductRouter);

const dbConnect = async () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then((res) => {
      console.log("Db connection established");
      app.listen(port, () =>
        console.log(`Example app listening on port ${port}!`)
      );
    })
    .catch((err) => {
      console.log("error", err);
    });
};

app.get("/", (req, res) => res.send("Hello World!"));
dbConnect();
