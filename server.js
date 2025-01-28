require("dotenv").config();

const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("assets")); // Serve static files

// Route to handle form submission
app.post("/send-email", (req, res) => {
  const { name, email, contact, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // Load from environment variables
      pass: process.env.EMAIL_PASS, // Load from environment variables
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER, // Load from environment variables
    subject: `Query from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nContact: ${contact}\n\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Error sending email.");
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Email sent successfully.");
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
