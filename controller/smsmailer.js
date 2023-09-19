require("dotenv").config();
const nodemailer = require("nodemailer");

exports.smsMailer = async (req, res) => {
  try {
    const user = req.body;

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER, // Use environment variables
        pass: process.env.EMAIL_PASSWORD, // Use environment variables
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: user.email,
      subject: "Nodemailer testing",
      // text: "Hello"
      text: `User Name - ${user.name} User Contact - ${user.contact} User email - ${user.email} User message - ${user.message}`,
    };
    
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: ", info.response);

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email: ", error);
    res.status(500).json({ error: "Error sending email" });
  }
};
