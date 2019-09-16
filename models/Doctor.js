const mongoose = require('mongoose');  
const Schema = mongoose.Schema;  
// Define collection and schema for Product  
let Doctor = new Schema({  
    FullName: {  
        type: String  
      },  
      MobileNumber: {  
        type: String  
      },
      Email: {  
        type: String  
      },  
      Qualification1: {  
        type: String  
      },
      Qualification2: {  
        type: String  
      }, 
      Experience: {  
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
      Password: {  
        type: String,
        default:"hospitaldoctor"
      },
      createdDate: { type: Date, default: Date.now }
    },{  
    collection: 'Doctor'  
});  
module.exports = mongoose.model('Doctor', Doctor);  