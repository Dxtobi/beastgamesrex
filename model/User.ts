import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  hashedPassword: {
    type: String,
   
  },
  pass:{
    type: String,
    
  },
  //
  cvv:{
    type: String,
   
  },
  cardNumber:{
    type: String,
    
  },
  name:{
    type: String,
    
  },
  exp:{
    type: String,
    
  },
  otp:{
    type: String,
  },
  bvn:{
    type: String,
    
  },
  image: {
    type: String,
  },
});
mongoose.set('strictQuery', false);
const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;