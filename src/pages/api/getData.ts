
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
  res: NextApiResponse //<ResponseData>
) {
  await dbConnect();
  try {
  // validate if it is a PUT
  if (req.method !== "GET") {
    return res
      .status(200)
      .json({ error: "This API call only accepts GET" });
  }
 
   // update User on MongoDB
      const query = await User.find().lean()
      res.status(200).json(query)
 // res.status(500).json({ msg: "SERVER ERROR " })

  } catch (error) {
    console.log(error)
  res.status(500).json({ msg: "SERVER ERROR " })
 }
 

  

}