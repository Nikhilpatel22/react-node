const express = require("express");
const app = express();
const router = require('./routes/router')
require ('./database/conn')
const Imap = require("imap");
const {simpleParser} = require('mailparser');
const User = require("./models/user")
const cors = require('cors');
const nodemailer = require("nodemailer")
const bodyParser = require('body-parser');
const path = require('path')
const multer = require('multer')
// const bcrypt = require('bcrypt');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

 app.use(express.static(path.join(__dirname,'public')));
// app.use(express.static(path.resolve(__dirname,'public')));


router.use(express.static(__dirname + "./public/"))
router.use(express.static(path.resolve(__dirname,'public')));
var storage = multer.diskStorage({
  destination: './public/file/',
  filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

var upload = multer({
  storage: storage
}).single('file');


app.use(cors());
app.use('/users',router);

app.get('/mail',async(req,res)=>{
    try{
            let user = await User.find();
            res.json(user);
    }catch(error){
            res.json({message : error.message})
    }
})

app.post('/sendmail',(req,res)=>{
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'nikhilpatel.vision@gmail.com',
      pass: 'nikhil@123'
    }
});

var mailOptions = {
    from: 'patel221211@gmail.com',// sender address
    to: req.body.to, // list of receivers
    subject: req.body.subject, // Subject line
    text:req.body.description,
    html: `
    <p>test mail</p>
    <h3>Contact Details</h3>
    <ul>
        <li>Email: ${req.body.to}</li>
        <li>Subject: ${req.body.subject}</li>
        <li>Message: ${req.body.description}</li>
    </ul>
    `
};
 
transporter.sendMail(mailOptions, function(error, info){
    if (error)
    {
      res.json({status: true, respMesg: 'Email Sent Successfully'})
    } 
    else
    {
      res.json({status: true, respMesg: 'Email Sent Successfully'})
    }
 
  });
})





app.post('/sendmail1',(req,res)=>{
  upload(req,res,function(err){
      if(err){
          console.log(err)
          return res.end("Something went wrong!");
      }else{
          var {to,subject,description,path} = req.body;
          
          to = to
          subject = subject
          description = description
          path = req.file.path
          console.log(to);
          console.log(subject);
          console.log(body);
          console.log(req.file);

          var sendmail = nodemailer.createTransport({
              service: 'gmail',
              auth: {
                user: 'nikhilpatel.vision@gmail.com',
                pass: 'nikhil@123'
              }
            });
            
            var mailOptions = {
              from: 'pnik2228@gmail.com',
              to: to,
              subject: subject,
              text: description,
              attachments: [
                  {
                   file: path
                  }
               ]
            };
            sendmail.sendMail(mailOptions, function(error, info){
              if (error) {
                console.log(error);
              } else {
                console.log('Email sent: ' + info.response);
                fs.unlink(path,function(err){
                  if(err){
                      return res.end(err)
                  }else{
                      console.log("deleted")
                      return res.redirect('/mail')
                  }
                })
              }
            });
      }
})
})


  

module.exports = app;