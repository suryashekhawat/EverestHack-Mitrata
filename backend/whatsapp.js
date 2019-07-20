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
    if (received_message == "hi" || received_message == "Hi"){
      twiml = twimlMessage("hello");
    }else{
      switch(received_message){
        case "my details":
          twiml = twimlMessage("Please send your details in below format\nmy details:\nname: joy\nage: 12\ngendar: Male");
        break;
        case "my details:\nname: {{1}}\nage: {{2}}\ngendar: {{3}}":
          twiml = twimlMessage("Thanks for sharing.");
        break;

        default:
          twiml = twimlMessage("Could you say it again");
        break;
      }
    }

    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());
    // res.send("new message");
  })


module.exports = router;
