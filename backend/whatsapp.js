var express = require('express');

var router = express.Router();

const accountSid = process.env.whatsappAccessId;
const authToken = process.env.whatsappToken;
const client = require('twilio')(accountSid, authToken);

router
  .get('/', (req, res, next)=>{
    res.send("whatsapp working");
  })

router
  .post('/', (req, res, next)=>{
    res.send(req)
  })


module.exports = router;
