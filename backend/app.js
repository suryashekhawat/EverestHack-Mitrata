var express = require('express');

var app = express();

const port = 3000;

var whatsappRoutes = require('./whatsapp.js');

app.use('/whatsapp', whatsappRoutes);
app.get('/', (req, res, next)=>{
    res.send("app running")
});



app.listen(port, () => {
  console.log(`app running on port ${port}`);
})
