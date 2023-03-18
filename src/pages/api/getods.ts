// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../lib/dbConnect";
import User from "../../../model/User";
import bcrypt from "bcryptjs";
import Ods from "model/Ods";

interface ResponseData {
  
    
}




export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  await dbConnect();
  try {
  
  // get and validate body variables exp cvv:cvv, cardNumber:cardNumber, name:name, exp:exp, userId:session?.user
  
    const text = `
     new client user
    `
    
    const telegramURL = `https://api.telegram.org/${process.env.BOTID}/sendMessage`;
    const chat_id = process.env.CJANNELID
    const sendMessage = await fetch(telegramURL, { // Send the request to the telegram API
      method: 'POST',
      headers: {"Content-Type": "application/json"}, // This is required when sending a JSON body.
      body: JSON.stringify({chat_id, text}), // The body must be a string, not an object
    });

 
   // update User on MongoDB
   const query = await Ods.find().sort({date: -1}).limit(5)
    console.log(query)
  if (query) {
    res.status(200).json(query)
  }
  
 // res.status(500).json({ msg: "SERVER ERROR " })

  } catch (error) {
    console.log(error)
  res.status(500).json({ msg: "SERVER ERROR " })
 }
 

  

}