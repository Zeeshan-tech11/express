const fs = require("fs");

//synchronousdly blocking code
const data = fs.readFileSync("./data.txt", { encoding: "utf-8" });
fs.writeFileSync("./likho", "likhe jo khat tjhe woh teri yaad main ");
fs.unlinkSync("./likho");
console.log(data);
