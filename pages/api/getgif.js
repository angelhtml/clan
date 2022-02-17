import NextCors from 'nextjs-cors';
import mongoose from 'mongoose'
import dbConnect from "../../component/dbconnect";


export default async function handler(req, res)  {


  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
 });

  if (req.method === "GET") {
   

try{
  await dbConnect()
  const homesSchema = {
    Home_url : String
  }
  
  
  const homes = mongoose.models.homes || mongoose.model('homes', homesSchema)
  
  const homedoc = await homes.find({})
  res.send(homedoc)

}
  catch (error) {
    console.log(error)
  }
}
}