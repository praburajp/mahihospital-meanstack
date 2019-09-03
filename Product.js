const mongoose = require('mongoose');  
const Schema = mongoose.Schema;  
// Define collection and schema for Product  
let Product = new Schema({  
    FullName: {  
        type: String  
      },  
      MobileNumber: {  
        type: String  
      },
      Email: {  
        type: String  
      },  
      Password: {  
        type: String  
      },
      Address: {  
        type: String  
      },  
      Address2: {  
        type: String  
      },
      Country: {  
        type: String  
      },  
      State: {  
        type: String  
      },
      Pincode: {  
        type: String  
      },
      createdDate: { type: Date, default: Date.now }
    },{  
    collection: 'Patient'  
});  
module.exports = mongoose.model('Patient', Product);  