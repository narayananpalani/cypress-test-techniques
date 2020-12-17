const nodemailer = require("nodemailer");
const fs = require("fs");

var emailBody = fs.createReadStream("cucumber-report//index.html");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "test@gmail.com",
    pass: "", // naturally, replace both with your real credentials or an application-specific password
  },
  debug: true, // show debug output
  logger: true, // log information in console
});

const mailOptions = {
  from: "test@gmail.com",
  to: "test@gmail.com",
  subject: "Automation Summary Report",
  text: "Plesae find the below report",
  html: emailBody,
};

transporter.sendMail(mailOptions, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Email sent: " + info.response);
  }
});
