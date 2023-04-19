const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const db = require("./db");
const router = require("./routers");

const app = express();
const PORT = process.env.PORT || 8080;


// db
db.connect();


//middlewares
app.use(bodyParser.json({ limit: "500mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "500mb" }));
app.use(express.json());

//headers
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

//api

app.use("/api", router);


// static resources
app.use("/uploads", express.static(path.join(__dirname, "/../uploads")));
app.use(express.static(path.join(__dirname, "/..client/build")));


app.get("*", (req, res) => {
  try {
    res.sendFile(path.join(`${__dirname}/../client/build/index.html`));
  } catch (e) {
    res.send("Error occurred !");
  }
});

// cors
app.use(cors());

app.listen(PORT, () => {
  console.log(`Social Community is running on PORT No- ${PORT}`);
});