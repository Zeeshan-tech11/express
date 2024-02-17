const readLine = require("readline");
const sum = (a, b) => {
  console.log(a + b);
};

//create interface
const inputInterface = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//readfrom terminal function
const read = (inputtitle, cb) => {
  inputInterface.question(inputtitle, cb);
};

read("enter furstnum", (a) => {
  console.log("firstnum", a);
  read("second num", (e) => {
    console.log("second nun", e);
    sum(a + e);
  });
});
