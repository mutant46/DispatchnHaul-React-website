const nodemailer = require("nodemailer");
require("dotenv").config();

const { FROM_USER, FROM_USER_PASSWORD, TO_USER } = process.env;
exports.handler = async function (event, context) {
  const { firstName, lastName, contactNumber, mcNumber } = JSON.parse(
    event.body
  );

  const transporter = nodemailer.createTransport({
    host: "smtp.mail.yahoo.com",
    service: "yahoo",
    auth: {
      user: FROM_USER,
      pass: FROM_USER_PASSWORD,
    },
  });

  const mailOptions = {
    from: FROM_USER,
    to: TO_USER,
    subject: "New Form Submission on Dispatch n Haul",
    text: `First Name : ${firstName} \nLast Name : ${lastName} \nContact Number : ${contactNumber} \nMC Number : ${mcNumber}`,
  };

  return transporter
    .sendMail(mailOptions)
    .then(() => ({
      statusCode: 200,
      body: JSON.stringify({
        msg: "Your message was sent successfully!",
      }),
    }))
    .catch((error) => ({
      statusCode: 422,
      body: JSON.stringify({ msg: "Error sending email" }),
    }));
};
