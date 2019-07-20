var express = require('express');

var router = express.Router();

var connection = require('./database.js');

router
  .get('/citizen', (req, res, next)=>{
    connection.query(`select * from citizen_table`, function(error, results, fields){
      console.log(error, results);
      res.send(
        {
          data: results
        })
    });
  });

router
  .get('/hospital', (req, res, next)=>{
    connection.query(`select * from hospital`, function(error, results, fields){
      console.log(error, results);
      res.send(
        {
          data: results
        })
    });
  });

router
  .get('/inventory_hospital', (req, res, next)=>{
    connection.query(`select * from inventory_hospital`, function(error, results, fields){
      console.log(error, results);
      res.send(
        {
          data: results
        })
    });
  });

router
  .get('/medical_facility', (req, res, next)=>{
    connection.query(`select * from medical_facility`, function(error, results, fields){
      console.log(error, results);
      res.send(
        {
          data: results
        })
    });
  });



router
  .post('/citizen', (req, res, next)=> {
    connection.query(`insert into citizen_table (citizen_id, name, age, address, status, phone_no, blood_group,medical_condition,email)
  	values  (null, ?, ?,?,?,?,?,?,?)`, [
      req.body.name,
      req.body.age,
      req.body.address,
      req.body.status,
      req.body.phone_no,
      req.body.blood_group,
      req.body.medical_condition,
      req.body.email
    ], function(error, results, fields){
      console.log(error, results);
      res.send({
        message: "citizen created"
      });
    });
  });

module.exports = router;
