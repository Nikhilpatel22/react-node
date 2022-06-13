const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const sendmail = require('../controller/sendmail');
const jwtauth = require('../midddleware/jwtauth');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const session = require('express-session');
const nodemailer = require('nodemailer');
const Imap = require("imap");
// const { simpleParser } = require('mailparser');
const inspect = require('util').inspect;
const simpleParser = require('mailparser').simpleParser;
// var fs = require('fs');
//const Otp = require('../models/otp')
const notifier = require('mail-notifier');
const { json } = require('body-parser');
var imaps = require('imap-simple');
const fs = require('fs')
const mail1 = require('../mail')
const path = require('path');


router.use(cookieParser('secret'));
router.use(session({
  secret: 'secret',
  maxAge: 3600000,
  resave: true,
  saveUninitialized: true
}))

router.use(passport.initialize());
router.use(passport.session());

//checkauthnetication 
const checkAuthenticated = function (req, res, next) {
  if (req.isAuthenticated()) {
    res.set('cache-control', 'no-cache, private, no-store, must-revalidate, post-check=0, pre-check=0')
    return next();
  } else {
    res.redirect('/login')
  }
}



// router.get('/:id',userController.getUsersId);
router.get('/', userController.getUsers);
router.post('/adduser', userController.addUser);
router.post('/loginuser', userController.loginUser);
router.post('/passportlogin', userController.postLogin);
router.put('/:id', userController.editUser);
router.delete('/:id', userController.deleteUsers);
router.post('/send-mail', sendmail.otp);
router.post('/resetpassword', sendmail.resetpassword);
//router.put('/:id',userController.resetPassword);


//jwt authentcation
router.get('/about', (req, res) => {
  console.log('hello my about');
  // res.send(req.rootUser);
})


router.get('/getgmail', (req, res, next) => {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

  const imapConfig = {
    user: 'nikhilpatel.vision@gmail.com',
    password: 'nikhil@123',
    host: 'imap.gmail.com',
    port: 993,
    tls: true,
    // tlsOptions: { rejectUnauthorized: false }
  };
  // try {
  const imap = new Imap(imapConfig);
  function openInbox(cb) {
    imap.openBox('INBOX', false, cb);
  }
  imap.once('ready', function () {
    openInbox(function (err, box) {
      if (err) {
        console.log('failed to open the mail.');
      } else {
        console.log('the total of message:');
        console.log(box);
        //['SINCE', 'May 30, 2018']
        //['UNSEEN', ['SUBJECT', 'HY']]
        imap.search(['ALL'], function (err, results) {
          if (err) {
            console.log('failed to search the mail.');
          } else {
            if (!results || !results.length) {
              console.log('no mails!!!');
              imap.end();
            } else {
              console.log('the length of results:' + results.length);
              //var f = imap.fetch(results, {bodies:'',markSeen: true});
              var f = imap.fetch(results, { bodies: '' });
              f.on('message', function (msg, seqno) {
                msg.on('body', async function (stream) {
                  // simpleParser(stream)
                  //   .then(parsed => {
                  //     // res.json(parsed.subject)
                  //     // console.log(parsed.subject)
                  //     // let user = await parsed.find();
                  //     res.json(parsed)
                  //    })
                  //   .catch(err => { 
                  //     console.log(err)
                  //   });
                  // 

                  simpleParser(stream, async function (err, mail) {

                    console.log(mail)
                    res.json([mail])
                    next();

                    // var jsonObject = {};
                    // var key = 'detail';
                    // jsonObject[key] = [];

                    // simpleParser(stream)
                    //   .then(function (mail) {
                    //     jsonObject[key].push(mail);
                    //     res.json(jsonObject)
                    //     return jsonObject;
                    //   })
                    //   .catch(err => {
                    //     console.log(err)
                    //   });




                    // res.json(mail)
                    //     console.log(mail.subject)
                    // console.log(mail)
                    // res.json(mail)
                    // res.json(mail)
                    // res.send(mail)
                    // return res.json({data:mail})
                    // res.status(200).json({mail})
                    //  return res.json(mail.subject)
                    // console.log(mail.from.value[0].name);
                    // console.log('==================');
                    // console.log(mail.subject);
                    // console.log('==================');
                    // console.log(mail.date);
                    // if (!mail) {
                    //   return res.status(400).json({
                    //     status: 'error',
                    //     error: 'req body cannot be empty',
                    //   });
                    // }

                    // res.status(200).json({
                    //   status: 'success',
                    //   data: mail,
                    // })
                    //         if(mail) {
                    //           res.status(200).send({status: 0, message: "Messages available"});
                    //      }
                    // res.status(503).send({status: 1, message: "Messages not available!"});


                    //   if (mail.headers.has('subject')) {
                    //     console.log(mail.headers.get('subject'));
                    // }

                  })
                });

                msg.once('end', function () {
                  console.log(seqno + ' finished.');
                });
              });
              f.once('error', function (err) {
                console.log('failed to fetch: ' + err);
              });
              f.once('end', function () {
                console.log('succeed in getting all mails!');
                imap.end();
              });
            }
          }
        })
      }
    });
  });

  imap.once('error', function (err) {
    console.log(err);
  });

  imap.once('end', function () {
    console.log('finished!');
  });

  imap.connect();
  // } catch (err) {
  //   console.log('an error occurred');
  // }
})



router.get('/getmail', (req, res) => {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

  const imapConfig = {
    user: 'nikhilpatel.vision@gmail.com',
    password: 'nikhil@123',
    host: 'imap.gmail.com',
    port: 993,
    tls: true,
    // tlsOptions: { rejectUnauthorized: false }
  };

  // const imap = new Imap(imapConfig);
  // const n = notifier(imap);
  // n.on('end', () => n.start()) // session closed
  //   .on('mail', mail => console.log(mail.from[0].address, mail.subject))
  //   .start();
  try {
    const imap = new Imap(imapConfig);
    function openInbox(cb) {
      imap.openBox('INBOX', true, cb);
    }


    imap.once('ready', function () {
      openInbox(function (err, box) {
        if (err) throw err;

        /* ??? */
        console.log(box)
        // res.json(box)

      });
    });
    imap.once('ready', () => {
      imap.openBox('INBOX', false, () => {
        imap.search(['ALL', ['BEFORE', new Date()]], (err, results) => {
          console.log("result", results)
          // res.json(results)
          const f = imap.fetch(results, { bodies: '' });
          f.on('message', msg => {
            msg.on('body', stream => {
              simpleParser(stream, async (err, parsed) => {

                // var r = {};
                const { from, subject, textAsHtml, text } = parsed;
                // r = parsed

                // res.json(r)
                // console.log(parsed.subject);

                // if (!parsed) {
                //   return res.status(400).json({
                //     status: 'error',
                //     error: 'req body cannot be empty',
                //   });
                // }

                // res.status(200).json({
                //   status: 'succes',
                //   data: parsed,
                // })

                console.log(parsed)
                res.json(parsed)
                /* Make API call to save the data
                   Save the retrieved data into a database.
                   E.t.c
                */
              });
            });
            msg.once('attributes', attrs => {
              const { uid } = attrs;
              imap.addFlags(uid, ['\\Seen'], () => {
                // Mark the email as read after reading it
                console.log('Marked as read!');
              });
            });
          });
          f.once('error', ex => {
            return Promise.reject(ex);
          });
          f.once('end', () => {
            console.log('Done fetching all messages!');
            imap.end();
          });
        });
      });
    });

    imap.once('error', err => {
      console.log(err);
    });

    imap.once('end', () => {
      console.log('Connection ended');
    });

    imap.connect();
  } catch (ex) {
    console.log('an error occurred');
  }
})


router.get('/ab', (req, res) => {
  var imap = new Imap({
    user: 'nikhilpatel.vision@gmail.com',
    password: 'nikhil@123',
    host: 'imap.gmail.com',
    port: 993,
    tls: true,
    tlsOptions: { rejectUnauthorized: false }

  });
  var header;
  function openInbox(cb) {
    imap.openBox('INBOX', true, cb);
  }

  imap.once('ready', function () {
    openInbox(function (err, box) {
      if (err) throw err;
      imap.search(['ALL', ['BEFORE', new Date()]], (err, results) => {
        const f = imap.fetch(results, { bodies: '' });
        // var f = imap.seq.fetch('100', {
        //   bodies: 'HEADER.FIELDS (FROM TO SUBJECT DATE)',
        //   struct: true
        // });
        f.on('message', function (msg, seqno) {
          console.log('Message #%d', seqno);
          var prefix = '(#' + seqno + ') ';
          msg.on('body', function (stream, info) {
            var buffer = '';
            stream.on('data', function (chunk) {
              buffer += chunk.toString('utf8');
            });
            stream.once('end', function () {
              // console.log(prefix + 'Parsed header: %s', inspect(Imap.parseHeader(buffer)));
              // var header = inspect(Imap.parseHeader(buffer));
              // // var headerObj = JSON.parse(header);
              // res.json([inspect(Imap.parseHeader(buffer))])
              header = inspect(Imap.parseHeader(buffer))
              // var headerObj = JSON.parse(header);
              // console.log(header)
            });
          });
          msg.once('attributes', function (attrs) {
            console.log(prefix + 'Attributes: %s', inspect(attrs, false, 8));
          });
          msg.once('end', function () {
            console.log(prefix + 'Finished');
          });
        });
        f.once('error', function (err) {
          console.log('Fetch error: ' + err);
        });
        f.once('end', function () {
          console.log('Done fetching all messages!');
         console.log(header)
         return res.json(header)
          imap.end();
        });
      });
    })
  });

  imap.once('error', function (err) {
    console.log(err);
  });

  imap.once('end', function () {
    console.log('Connection ended');
  });

  imap.connect();
})

router.get('/getgemail', async (req, res) => {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

  const list = [];

  const imapConfig = {
    user: 'nikhilpatel.vision@gmail.com',
    password: 'nikhil@123',
    host: 'imap.gmail.com',
    port: 993,
    tls: true,
  };

  try {
    const imap = new Imap(imapConfig);
    imap.once('ready', () => {
      imap.openBox('INBOX', false, () => {
        imap.search(['ALL', ['BEFORE', new Date()]], (err, results) => {
          const f = imap.fetch(results, { bodies: '' });
          f.on('message', msg => {
            msg.on('body', stream => {
              // res.json(stream)
              simpleParser(stream, async (err, parsed) => {
                // const a=[];
                const { from, subject, textAsHtml, text } = parsed;
                // a.push={values:[from]};
                // a=parsed;
                // a.push(parsed)
                // console.log(parsed);

                // imap.end();
                list.push(parsed);
                // if(err){
                //   res.status(400).send({
                //     error : err
                //   })
                // }
                // else(
                //   res.status(200).send({
                //    data : parsed
                //   })
                // )
                /* Make API call to save the data
                   Save the retrieved data into a database.
                   E.t.c
                */
              });
            });
            msg.once('attributes', attrs => {
              const { uid } = attrs;
              imap.addFlags(uid, ['\\ALL'], () => {
                // Mark the email as read after reading it
                console.log('Marked as read!');
              });
            });
          });
          f.once('error', ex => {
            return Promise.reject(ex);
          });
          f.once('end', () => {
            console.log('Done fetching all messages!');
            console.log(list)
            res.json(list)
            // let rawdata = fs.readFileSync(path.resolve(__dirname, 'student.json'));
            // let student = JSON.parse(rawdata);
            // console.log(student)
            res.end();
            imap.end();
          });
        });
      });
    });

    imap.once('error', err => {
      console.log(err);
    });

    imap.once('end', () => {
      console.log('Connection ended');
    });

    imap.connect();
  } catch (ex) {
    console.log('an error occurred');
  }
})


router.get('/ab', (req, res) => {
  var imap = new Imap({
    user: 'nikhilpatel.vision@gmail.com',
    password: 'nikhil@123',
    host: 'imap.gmail.com',
    port: 993,
    tls: true,
    tlsOptions: { rejectUnauthorized: false }

  });
  var header;
  function openInbox(cb) {
    imap.openBox('INBOX', true, cb);
  }

  imap.once('ready', function () {
    openInbox(function (err, box) {
      if (err) throw err;
      imap.search(['ALL', ['BEFORE', new Date()]], (err, results) => {
        const f = imap.fetch(results, { bodies: '' });
        // var f = imap.seq.fetch('100', {
        //   bodies: 'HEADER.FIELDS (FROM TO SUBJECT DATE)',
        //   struct: true
        // });
        f.on('message', function (msg, seqno) {
          console.log('Message #%d', seqno);
          var prefix = '(#' + seqno + ') ';
          msg.on('body', function (stream, info) {
            var buffer = '';
            stream.on('data', function (chunk) {
              buffer += chunk.toString('utf8');
            });
            stream.once('end', function () {
              // console.log(prefix + 'Parsed header: %s', inspect(Imap.parseHeader(buffer)));
              // var header = inspect(Imap.parseHeader(buffer));
              // // var headerObj = JSON.parse(header);
              // res.json([inspect(Imap.parseHeader(buffer))])
              header = inspect(Imap.parseHeader(buffer))
              // var headerObj = JSON.parse(header);
              // console.log(header)
            });
          });
          msg.once('attributes', function (attrs) {
            console.log(prefix + 'Attributes: %s', inspect(attrs, false, 8));
          });
          msg.once('end', function () {
            console.log(prefix + 'Finished');
          });
        });
        f.once('error', function (err) {
          console.log('Fetch error: ' + err);
        });
        f.once('end', function () {
          console.log('Done fetching all messages!');
         console.log(header)
         return res.json(header)
          imap.end();
        });
      });
    })
  });

  imap.once('error', function (err) {
    console.log(err);
  });

  imap.once('end', function () {
    console.log('Connection ended');
  });

  imap.connect();
})

router.get('/getgemail/:id', async (req, res) => {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

  const list = [];

  const imapConfig = {
    user: 'nikhilpatel.vision@gmail.com',
    password: 'nikhil@123',
    host: 'imap.gmail.com',
    port: 993,
    tls: true,
  };

  try {
    const imap = new Imap(imapConfig);
    imap.once('ready', () => {
      imap.openBox('INBOX', false, () => {
        imap.search(['ALL', ['BEFORE', new Date()]], (err, results) => {
          const f = imap.fetch(results, { bodies: '' });
          f.on('message', msg => {
            msg.on('body', stream => {
              // res.json(stream)
              simpleParser(stream, async (err, parsed) => {
                // const a=[];
                const { from, subject, textAsHtml, text } = parsed;
                // a.push={values:[from]};
                // a=parsed;
                // a.push(parsed)
                // console.log(parsed);

                // imap.end();
                list.push(parsed);
                // if(err){
                //   res.status(400).send({
                //     error : err
                //   })
                // }
                // else(
                //   res.status(200).send({
                //    data : parsed
                //   })
                // )
                /* Make API call to save the data
                   Save the retrieved data into a database.
                   E.t.c
                */
              });
            });
            msg.once('attributes', attrs => {
              const { uid } = attrs;
              imap.addFlags(uid, ['\\ALL'], () => {
                // Mark the email as read after reading it
                console.log('Marked as read!');
              });
            });
          });
          f.once('error', ex => {
            return Promise.reject(ex);
          });
          f.once('end', () => {
            console.log('Done fetching all messages!');
            console.log(list)
            res.json(list)
            res.end();
            imap.end();
          });
        });
      });
    });

    imap.once('error', err => {
      console.log(err);
    });

    imap.once('end', () => {
      console.log('Connection ended');
    });

    imap.connect();
  } catch (ex) {
    console.log('an error occurred');
  }
})


router.get('/aa', (req, res) => {
  //   var imaps = require('imap-simple');
  // const simpleParser = require('mailparser').simpleParser;
  const _ = require('lodash');

  var config = {
    imap: {
      user: 'nikhilpatel.vision@gmail.com',
      password: 'nikhil@123',
      host: 'imap.gmail.com',
      port: 993,
      tls: true,
      authTimeout: 3000,
      tlsOptions: { rejectUnauthorized: false }

    }
  };

  imaps.connect(config).then(function (connection) {
    return connection.openBox('INBOX').then(function () {
      var searchCriteria = ['ALL'];
      var fetchOptions = {
        bodies: ['HEADER', 'TEXT', ''],
      };
      return connection.search(searchCriteria, fetchOptions).then(function (messages) {
        messages.forEach(function (item) {
          var all = _.find(item.parts, { "which": "" })
          var id = item.attributes.uid;
          var idHeader = "Imap-Id: " + id + "\r\n";
          simpleParser(idHeader + all.body, (err, mail) => {
            console.log(mail)
            // access to the whole mail object
            console.log(mail.subject)
            console.log(mail.html)
          });
        });
      });
    });
  });
})


router.get('/bb', (req, res) => {
  // const _ = require('lodash');
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
  var config = {
    imap: {
      user: 'nikhilpatel.vision@gmail.com',
      password: 'nikhil@123',
      host: 'imap.gmail.com',
      port: 993,
      tls: true,
      authTimeout: 3000
      // tlsOptions: { rejectUnauthorized: false }

    }
  };

  imaps.connect(config).then(function (connection) {

    return connection.openBox('INBOX').then(function () {
      var searchCriteria = [
        'ALL'
      ];

      var fetchOptions = {
        bodies: ['HEADER', 'TEXT'],
        markSeen: false
      };

      return connection.search(searchCriteria, fetchOptions).then(function (results) {
        var subjects = results.map(function (res) {
          // return res.parts.filter(function (part) {
          //   return part.which === 'HEADER';
          // })[0].body.subject[0];
          return res.parts
        });

        console.log(subjects);
        //res.json(subjects)
        // =>
        //   [ 'Hey Chad, long time no see!',
        //     'Your amazon.com monthly statement',
        //     'Hacker Newsletter Issue #445' ]
      });
    });
  });
})

router.get('/getallmail', (req, res) => {
  var imap = new Imap({
    user: 'nikhilpatel.vision@gmail.com', // put your mail email
    password: 'nikhil@123', // put your mail password or your mail app password
    host: 'imap.gmail.com', // put your mail host
    port: 993, // your mail host port
    tls: true,
    tlsOptions: { rejectUnauthorized: false }
  })
  function openInbox(cb) {
    imap.openBox('INBOX', true, cb);
  }
  imap.once('ready', function () {
    openInbox(function (err, box) { // call function to select the mailbox inbox to fetch new emails from inbox 
      var f = imap.seq.fetch('1:3', {
        bodies: 'HEADER.FIELDS (FROM TO SUBJECT DATE)',
        struct: true
      });
      f.on('message', function (msg, seqno) {
        // msg.on('body', function (stream, info) {
        //   var buffer = '';
        //   stream.on('data', function (chunk) {
        //     buffer += chunk.toString('utf8');
        //   });
        //   stream.once('end', function () {
        //     console.log('Parsed header: %s',
        //       inspect(Imap.parseHeader(buffer)));
        //       res.json( inspect(Imap.parseHeader(buffer)))
        //   });
        // });
        msg.on('body', async function (stream, info) {
          let parsed = await simpleParser(stream);
          // the parsed will contains all information is in json object format
          console.log(parsed)
          res.json(parsed)
        });
      })

      f.once('error', function (err) {
        console.log('Fetch error: ' + err);
      });

      f.once('end', function () {
        console.log('Done fetching all messages!');
        imap.end();
      });
    })
  })

  imap.once('error', function (err) { // this event will call if there is any issue will come during making imap connection
    console.log(err);
  });

  imap.once('end', function () { // this event will call once the imap connection is closed
    console.log('Connection ended');
  });

  imap.connect() // this will call imap to connect to mail host using the mail credentials
})


router.get('/cc', (req, res) => {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

  // var Imap = require('imap'),
  //     inspect = require('util').inspect;
  var fs = require('fs');
  //const simpleParser = require('mailparser').simpleParser;
  // var list = [];
  var imap = new Imap({
    user: 'nikhilpatel.vision@gmail.com',
    password: 'nikhil@123',
    host: 'imap.gmail.com',
    port: 993,
    tls: true
  });

  function openInbox(cb) {
    imap.openBox('INBOX', true, cb);
  }

  imap.once('ready', function () {
    openInbox(function (err, box) {
      if (err) throw err;
      console.log(box.messages.total + ' message(s) found!');
      // 1:* - Retrieve all messages
      // 3:5 - Retrieve messages #3,4,5
      var f = imap.seq.fetch('1:2', {
        bodies: ''
      });
      f.on('message', function (msg, seqno) {
        console.log('Message #%d', seqno);
        var prefix = '(#' + seqno + ') ';

        msg.on('body', function (stream, info) {
          // use a specialized mail parsing library (https://github.com/andris9/mailparser)        
          simpleParser(stream, (err, mail) => {
            console.log(prefix + mail.subject);
            console.log(prefix + mail.text);
            // res.json(mail)
            const list = [];
            return list.push(mail)
          });

          // or, write to file
          //stream.pipe(fs.createWriteStream('msg-' + seqno + '-body.txt'));
        });
        msg.once('attributes', function (attrs) {
          console.log(prefix + 'Attributes: %s', inspect(attrs, false, 8));
        });
        msg.once('end', function () {
          // console.log(prefix + 'Finished');
          // res.json(mail)
        });
      });
      f.once('error', function (err) {
        console.log('Fetch error: ' + err);
      });
      f.once('end', function () {
        console.log('Done fetching all messages!');
        // res.json(list);
        console.log(list)
        imap.end();
      });

      // search example
      //    imap.search([ 'UNSEEN', ['SINCE', 'May 20, 2010'] ], function(err, results) {
      //      if (err) throw err;
      //      var f = imap.fetch(results, { bodies: '' });
      //      ...
      //    }

    });
  });

  imap.once('error', function (err) {
    console.log(err);
  });

  imap.once('end', function () {
    console.log('Connection ended');
  });

  imap.connect();
})


//send mail
router.post('/sendmail', (req, res) => {


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
    text: req.body.description,
    html: `
        <div style="padding:10px;border-style: ridge">
        <p>You have a new contact request.</p>
        <h3>Contact Details</h3>
        <ul>
            <li>Email: ${req.body.to}</li>
            <li>Subject: ${req.body.subject}</li>
            <li>Message: ${req.body.description}</li>
        </ul>
        `
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      res.json({ status: true, respMesg: 'Email Sent Successfully' })
    }
    else {
      res.json({ status: true, respMesg: 'Email Sent Successfully' })
    }

  });
});
module.exports = router;