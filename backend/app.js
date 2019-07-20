var express = require('express');

var app = express();
const port = 3000;

app.get('/', (req, res, next)=>{
    res.send("app running")
});

app.listen(port, () => {
  console.log(`app running on port ${port}`);
})
