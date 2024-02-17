const fs = require("fs");
fs.readFile("./data.txt", { encoding: "utf-8" }, (err, data) => {
  console.log("data", data);
});
fs.writeFile("./write.txt", "jane mannn jaaaan", (e) => {});
console.log("end of code");
