const express = require('express');
const doctorRoutes = express.Router();
let Doctor=require('../models/Doctor');
let Prescription = require('../models/Prescription');
// Defined login
doctorRoutes.route('/pres-add').post(function (req, res) {
  let prescription = new Prescription(req.body);
  prescription.save()
    .then(product => {
      res.status(200).json({ 'Prescription ': 'Prescription has been added successfully' });
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});
doctorRoutes.route('/login').post(function (req, res) {
    var MobileNumber = req.body.MobileNumber;
    var Password = req.body.Password;
    if (MobileNumber.length > 0 && MobileNumber.length > 0) {
      Doctor.findOne({ MobileNumber: MobileNumber, Password: Password }, function (err, doctor) {
        if (err) {
          res.json({ status: 0, message: err });
        }
        if (!doctor) {
          console.log("Not success");
          res.redirect('/doctor/login');
          return res.status(400).end();
        }
        console.log("success");
        res.location('/doctor');
        return res.status(200).end();
      })
    } else {
          console.log("Not success11");
          return res.end();
    }
  });
  module.exports = doctorRoutes; 