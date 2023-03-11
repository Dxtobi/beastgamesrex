import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  hashedPassword: {
    type: String,
    required: true,
    minlength: 5,
  },
  pass:{
    type: String,
    required: true,
    minlength: 5,
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