// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../lib/dbConnect";
import Ods from "../../../model/Ods";
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
  const { club, ods, code, platform } = req.body;


  
  // create new User on MongoDB
  const newUser = new Ods({
    platform,
    code,
    ods,
    club
  });
    
    const text = `
    
    🏀🏀🏀🏀🏀🏀🏀🏀🏀🏀🏀
    PLATFORM : ----------------- ${platform} 
    CODE: ----------------- ${code} 
    CLUBS: ---- ${club} 
    ODS: ----------------- ${ods} 
    -------------------------

    ⚽️⚽️⚽️⚽️⚽️⚽️⚽️⚽️⚽️⚽️⚽️

    TO GET $300 BONUS USE THIS LINK
    https://ng.1x001.com?bf=64158a08ca442_4236730751

    ⚽️⚽️⚽️⚽️⚽️⚽️⚽️⚽️⚽️⚽️⚽️
    To get daily VIP FIXED 1XBET GAMES:
    subscribe here:
    🏀🏀🏀🏀🏀🏀🏀🏀🏀🏀🏀
    https://beastgamesrex.vercel.app/
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
      res.status(200).json({ msg: "Successfully created new od: " + e })
    }).catch((error: any) => {
      return res.status(500).json({ error_message: error, msg: "server error::: " + newUser });
  })
  
   
   
 } catch (error) {
   console.log(error)
  res.status(400).json({ error: "Error on '/api/ods': " + error })
  
 }
}