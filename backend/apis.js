var express = require('express');

var router = express.Router();

var connection = require('./connection.js');

router.get('/', (req, res, next)=>{
  res.send("api working")
});
