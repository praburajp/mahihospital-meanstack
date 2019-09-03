const express = require('express');
const app = express();
const adminRoutes = express.Router();
let Admin = require('../models/Admin');
// Defined login
adminRoutes.route('/admin').post(function (req, res) {
    var AdminID = req.body.AdminID;
    var Password = req.body.Password;
    if (AdminID.length > 0 && AdminID.length > 0) {
      Admin.findOne({ AdminID: AdminID, Password: Password }, function (err, admin) {
        if (err) {
          res.json({ status: 0, message: err });
        }
        if (!admin) {
          console.log("Not success");
          return res.status(400).end();
        }
        console.log("success");
        return res.status(200).end();
      })
    } else {
          console.log("Not success11");
          return res.end();
    }
  });
  
  module.exports = adminRoutes;  