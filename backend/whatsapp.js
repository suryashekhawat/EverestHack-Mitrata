var express = require('express');

var router = express.Router();

router.get('/', (req, res, next)=>{
  res.send("whatsapp working");
})

module.exports = router;
