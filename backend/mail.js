const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'shinygrace147@gmail.com',
        pass: 'rayurgpfqfymppyl'
    }
});
const mailDetails = {
    from: 'shinygrace147@gmail.com',
    to: 'kakarachaitanyachandana@gmail.com',
    subject: 'First Nodejs mail',
    text: 'Hello, my first mail'
}
transporter.sendMail(mailDetails, function(err, info){
    if(err){
        console.log(err)
    }else{
        console.log(info)
    }
})