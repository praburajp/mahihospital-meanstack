const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema for Product  
let Prescription = new Schema({
  MobileNumber: {
    type: String
  },
  Medicine1: {
    type: String
  },
  Medicine2: {
    type: String
  },
  Medicine3: {
    type: String
  },
  Medicine4: {
    type: String
  },
  Medicine5: {
    type: String
  },
  Medicine6: {
    type: String
  },
  Medicine7: {
    type: String
  },
  createdDate: { type: Date, default: Date.now }
}, {
  collection: 'Prescription'
});
module.exports = mongoose.model('Prescription', Prescription);  