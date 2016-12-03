var express = require('express');
var router = express.Router();
var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport('smtps://yourGmailAddress%40gmail.com:superSecretPassword@smtp.gmail.com');


router.get('/', function(req, res, next){
  return res.render('pages/index') 
});

router.post('/email', function(req, res, next){
    transporter.sendMail({
        from: 'yourGmailAddress@gmail.com',
        to: 'yourGmailAddress@gmail.com',
        cc: req.body.email,
        subject: req.body.fname + " " + req.body.lname,
        text: req.body.message
    }, function(error, response) {
        if (error) {
            res.render('pages/email-send');
            console.log(error);
        } else {
            res.render('pages/email-send') 
            console.log('Message sent');
        }
    });
    return;
});

module.exports = router;