var express = require('express');

var router = express.Router();

const accountSid = process.env.whatsappAccessId;
const authToken = process.env.whatsappToken;
const client = require('twilio')(accountSid, authToken);
const whatsapp_number = 'whatsapp:+14155238886';
const MessagingResponse = require('twilio').twiml.MessagingResponse;

function twimlMessage(message){
  const twiml = new MessagingResponse();
  return twiml.message(message);
}


function sendMessage(whatsapp_mobile, whatsapp_message){
    client.messages
    .create({
       from: whatsapp_number,
       body: `${whatsapp_message}`,
       to: `whatsapp:+${whatsapp_mobile}`
     })
    .then(message => {
      console.log(message.sid)
      return message;
    })
    .catch(error => {
      console.log(error);
      return message;
    });
}
router
  .get('/', (req, res, next)=>{
    var whatsapp_mobile = req.query.mobile;
    var whatsapp_message = req.query.message;
    sendMessage(whatsapp_mobile, whatsapp_message);
  })

router
  .post('/', (req, res, next) => {
    console.log(req.body);
    var twiml;

    var received_message = req.body.Body;
    if (received_message.toLowerCase() == "hi"){
      twiml = twimlMessage("Hi,\nKindly Provide your details (details,name,age,sex,address,medical_emergency)\ncomma separated");
    }
    else if(received_message.toLowerCase().split(",")[0] == "details" && received_message.toLowerCase().split(",").length > 1){
      let string_value = "These are the nearest hospitals according to your location\n1:Nepal orthopedic hospital,0.75km\n2:Shankarapur hospital, 1km\n3:Nmc, 2km\n4Nepal medical college, 3.8km"
      twiml = twimlMessage(string_value)
    }
    else{
    let string_value = "The details provided are incorrect or are wrongly formatted. Sorry try again with hi."
    twiml = twimlMessage(string_value)
    }

    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());
    // res.send("new message");
  })


module.exports = router;
