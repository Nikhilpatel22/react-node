const express = require("express")
const router = express.Router();
const Imap = require("imap");
const {simpleParser} = require('mailparser');

router.get('/',(req,res)=>{
    res.send("hello my Router")
    console.log('hello my Router');
})


router.get('/get',(req,res)=>{
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
  
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
            imap.search(['ALL', ['SINCE',new Date()]], (err, results) => {
              //  console.log("result",results)
              // res.json(results)
              const f = imap.fetch(results, {bodies: ''});
              f.on('message', msg => {
                
                msg.on('body', stream => {
                  simpleParser(stream, async (err, parsed) => {
                     const {from, subject, textAsHtml, text} = parsed;
                    //console.log(parsed);
                    res.json(parsed)
                    // console.log(text)
                    /* Make API call to save the data
                       Save the retrieved data into a database.
                       E.t.c
                    */
                  });
                });
                msg.once('attributes', attrs => {
                  const {uid} = attrs;
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

module.exports = router;