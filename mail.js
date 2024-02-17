import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "lalala@gmail.com",
    pass: "kch  bhi",
  },
});
const mailOptions = {
  from: "lalalla@gmail.com", // sender address
  to: "ouimaa@gmail.com", // list of receivers
  subject: "Hello ✔", // Subject line
  text: "Hello world?", // plain text body
  html: "<b>Hello world? unclee namste </b>", // html body
};

function sendMail() {
  return new Promise(async (res, rej) => {
    try {
      const info = await transport.sendMail(mailOptions);
      res("email sent");
    } catch (error) {
      rej(error);
    }
  });
}
sendMail()
  .then((res) => console.log("res", res))
  .catch((err) => console.log("err", err.message));
