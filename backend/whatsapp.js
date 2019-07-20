var express = require('express');

var router = express.Router();

const accountSid = process.env.whatsappAccessId;
const authToken = process.env.whatsappToken;
const client = require('twilio')(accountSid, authToken);

router
  .get('/', (req, res, next)=>{
    client.messages
      .create({
         from: 'whatsapp:+14155238886',
         body: 'Hello there!',
         to: 'whatsapp:+919945551067'
       })
      .then(message => console.log(message.sid));

    res.send("whatsapp working");
  })

router
  .post('/', (req, res, next)=>{
    console.log(req);
    res.send("new message")
  })


module.exports = router;
