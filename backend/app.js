require('dotenv').config()
var express = require('express');
var bodyParser = require('body-parser')
var app = express();

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

const port = 3000;

var whatsappRoutes = require('./whatsapp.js');
var apiRoutes = require('./apis.js');


app.use('/whatsapp', whatsappRoutes);
app.use('/api', apiRoutes);

app.get('/', (req, res, next)=>{
    res.send("App Rinning Everest Hack")
});



app.listen(port, () => {
  console.log(`app running on port ${port}`);
})
