const express = require("express");

const server = express();

server.get("/", (req, res) => {
  res.send("welcome to express");
});
server.listen(3000, () => {
  console.log("seerver is running");
});
