const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require('nodemailer');
const PDFDocument = require('pdfkit');
const fs = require('fs');
const generatePDF = require('./pdfGenerator');
const generateEmail = require("./emailGenerator");
require("dotenv").config();

console.log(process.env.User)
const app = express();
app.use(
  cors({
        origin: ["https://deluxe-kitten-8401f7.netlify.app","https://64f5f80c00f4f606ecf36ca1--deluxe-kitten-8401f7.netlify.app","http://localhost:3000"],
  })
);
mongoose.connect(process.env.MONGO_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Define a Mongoose schema for your data
const formDataSchema = new mongoose.Schema({
  email: String,
  fullName: String,
  age: Number,
  highestEducation: String,
  institute: String,
  study: String,
  jobTitle: String,
  companyName: String,
  jobDuties: String,
  canadaInstitute: String,
  programOfStudy: String,
  applyingCountry: String,
  futureGoals: String,
  listeningScore: String,
  readingScore: String,
  speakingScore: String,
  writingScore: String,
  paidFirstYearTuition: String,
  tuitionFee: String,
  didGIC: String,
  gicAmount: String,
  study: String,
});

const FormData = mongoose.model("FormData", formDataSchema);

app.use(bodyParser.json());

// Endpoint to handle form submissions and save data to MongoDB
app.post("/user", (req, res) => {
  console.log(req.body);
  FormData.find({
    fullName:req.body.fullName
  }).then((user) => {
    console.log(user);
    if (user.length > 0) {
      return res.status(200).json({ userName: "user has already registered" });
    } else {
      const newUser = new FormData({
        fullName: req.body.fullName,
        email: req.body.email,
        age: req.body.age,
        highestEducation: req.body.highestEducation,
        institute: req.body.institute,
        study: req.body.study,
        jobTitle: req.body.jobTitle,
        companyName: req.body.companyName,
        jobDuties: req.body.jobDuties,
        canadaInstitute: req.body.canadaInstitute,
        programOfStudy: req.body.programOfStudy,
        applyingCountry: req.body.applyingCountry,
        futureGoals: req.body.futureGoals,
        listeningScore: req.body.listeningScore,
        readingScore: req.body.readingScore,
        speakingScore: req.body.speakingScore,
        writingScore: req.body.writingScore,
        paidFirstYearTuition: req.body.paidFirstYearTuition,
        tuitionFee: req.body.tuitionFee,
        didGIC: req.body.didGIC,
        gicAmount: req.body.gicAmount,
      });

      newUser.save();
      console.log(newUser)
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.User, 
          pass: process.env.Pass ,
        }
      });

      const pdfBuffer = new Promise((resolve, reject) => {
        const pdfDoc = new PDFDocument();
        const chunks = [];
        pdfDoc.on('data', (chunk) => {
          chunks.push(chunk);
        });
        pdfDoc.on('end', () => {
          const buffer = Buffer.concat(chunks);
          resolve(buffer);
        });
        pdfDoc.text(generateEmail(req.body));
        pdfDoc.end(); 
      })

      pdfBuffer.then((buffer) => {
        const mailDetails = {
          from: process.env.FROM_MAIL,
          to: newUser.email,
          subject: 'Reset your password',
          text: `Dear ${newUser.fullName}

          Please find attched the Statement of Purpose template for your student
          visa application to Canada. Kindly edit it as per your scenario and
          needs.
          
          In case you would like to get the full statement of purpose drafted by
          our experts, do not hesitate to contact us.
          
          Here is the doc file in case you would like to edit it:
          https://docs.google.com/document/d/1rkFbNH5bOE2s4_wX5W5coSQtirTOf6wAtD7ZBO69sW0/edit?usp=drivesdk
          
          Leave us a google review if you liked our service:
          https://g.page/r/CQT2Q8IwOnqpEB0/review
          
          Best Regards,
          Team Effizient
          www.effizient.ca
          Ph: 226-774-9168
          Email: info@effizient.ca`,
          attachments: [
            {
              filename: 'custom.pdf',
              content: buffer,
            },
          ],
        }
        transporter.sendMail(mailDetails, (error, info) => {
          if (error) {
            console.error('Error sending email: ', error);
          } else {
            console.log('Email sent: ', info.response);
          }
        });
      });
      return res.status(200).json({ msg: newUser });
      
    }
  });
});

const port = 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
