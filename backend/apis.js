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
  .get('/policy', (req, res, next)=>{
    connection.query(`select * from policy`, function(error, results, fields){
      console.log(error, results);
      res.send(
        {
          data: results
        })
    });
  });


router
  .get('/policy/analyze', (req, res, next)=>{
    connection.query(`select * from policy where services_provided = 'measles vactination'`, function(error, results, fields){
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
        message: "citizen onboarded"
      });
    });
  });

router
  .post('/hospital', (req, res, next)=> {
    connection.query(`insert into hospital (hospital_id, name, code, inventory, latitude, longitude, inventory_stock)
  	values  (null, ?, ?,?,?,?,?,?,?)`, [
      req.body.name,
      req.body.code,
      req.body.inventory,
      req.body.latitude,
      req.body.longitude,
      req.body.inventory_stock
    ], function(error, results, fields){
      console.log(error, results);
      res.send({
        message: "hospital onboarded"
      });
    });
  });

router
  .post('/policy', (req, res, next)=> {
    connection.query(`insert into hospital (policy_id, overall_budget, hr_salary, operation_amount, procurment_charge, services_charge, analysis_charge, start_date, end_date, develpoment_charge, services_provided)
  	values  (null, ?, ?,?,?,?,?,?,?)`, [
      req.body.overall_budget,
      req.body.hr_salary,
      req.body.operation_amount,
      req.body.procurment_charge,
      req.body.services_charge,
      req.body.analysis_charge,
      req.body.start_date,
      req.body.end_date,
      req.body.develpoment_charge,
      req.body.services_provided
    ], function(error, results, fields){
      console.log(error, results);
      res.send({
        message: "policy onboarded"
      });
    });
  });

module.exports = router;
