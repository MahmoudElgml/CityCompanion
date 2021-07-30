const nodemailer = require('nodemailer')
const smtp = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: process.env.NODE_ENV !== "development",
    auth: {
      user: '**********',
      pass: '*********'
    }, 
  });
  
  smtp.sendMail({
    to: '************',
    from: '**********',
    subject: 'Testing Email Sends',
    html: '<p>Sending some HTML to test.</p>',
  });