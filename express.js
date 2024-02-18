const express = require("express");

const server = express();
server.use(
  (re, rs, next) => {
    console.log("first");
    next();
  },
  (re, rs, next) => {
    console.log("sec");
    next();
  }
);
server.get(
  "/",
  (req, res, next) => {
    console.log("just loggong", req.url);
    next();
  },
  (re, res, next) => {
    console.log("n nested mw");
    next();
  }
);
server.get("/", (req, res) => {
  console.log("in sec middleware");
  res.send("welcome to express");
});
server.listen(3000, () => {
  console.log("seerver is running");
});
