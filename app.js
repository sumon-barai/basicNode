const express = require("express");
const route = require("./src/route/api");
const app = express();

app.use("/", route);

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.post("/upload", (req, res) => {
//   res.send("upload");
// });

module.exports = app;
