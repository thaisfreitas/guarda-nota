const express = require("express");
const app = express();
const web = require("../src/web");

app.use("/", web);

app.listen(3000, () => console.log("Up and running!"));
