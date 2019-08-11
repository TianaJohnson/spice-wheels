const express = require('express');
//const pool = require('../modules/pool');
const router = express.Router();

//.....
//This needs to be picked through 
//basically joining Cantina Groove and nodemailer files
//.....

// express static file serving - public is the folder name
app.use(express.static('server/public'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))

app.post('/api/form', (req, res) => {
    nodemailer.createTestAccount((err, account) => {
    const htmlEmail = `
    <h3>Contact Details</h3>
    <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
    </ul>
    <h3> Message, </h3>
    <p>${req.body.notes}</p>
    `

    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: 'alene.collier@ethereal.email',
          pass: 'QDuvwkp553B1e7yzfh'
        }
      });

    let mailOptions = {
        from: 'test@testaccount.com',
        to: 'alene.collier@ethereal.email',
        replyTo: 'test@testaccount.com',
        subject: 'new messasge',
        text: req.body.notes,
        html: htmlEmail
    }
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            return console.log(err)
        }
        console.log('message sent!: %s', info.massage)
        console.log('Message URL: %s', nodemailer.getTestMessageUrl(info  ))
    })
})    
})

module.exports = router;