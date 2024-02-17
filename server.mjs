import { readFileSync } from "fs";
import * as http from "http";
import { eventEmitter } from "./events.mjs";
// creat a server
const server = http.createServer((req, res) => {
  console.log(req.url);
  // res.write("kch to kahiye ki log kehte hain");
  //we can use switch case for multiple path
  if (req.method == "POST") {
    let body = "";
    req.on("data", (chunk) => {
      const str = chunk.toString();
      console.log("chunk", str);
      body += str;
    });
    req.on("end", () => {
      return res.end(`${body}`);
    });
    // return res.end("in post methods");
  }
  if (req.url === "/get") {
    eventEmitter.emit("start", "oolala");
    return res.end(" haal ksa hai janab ka");
  }
  if (req.url === "/getsite") {
    const data = readFileSync("./index.html").toString();
    return res.end(data);
  }
  // res.end(`welcome to end point ${req.url}`);
});

server.listen(3000, () => {
  console.log("server is running");
});
