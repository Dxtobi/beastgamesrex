import mongoose from "mongoose";

const Schema = mongoose.Schema;

const OdsSchema = new Schema({
  
  ods:{
    type: String,
    
  },
  //
  platform:{
    type: String,
   
  },
  club:{
    type: String,
  },
  code:{
    type: String,
    
    },
    date: {
        type: Date,
        default: Date.now()
  }

});
mongoose.set('strictQuery', false);
const Ods = mongoose.models.Ods || mongoose.model("Ods", OdsSchema);
export default Ods;