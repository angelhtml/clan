//import handler from "../../component/handler";
import NextCors from 'nextjs-cors';
import dbConnect from "../../component/dbconnect";
import mongoose from 'mongoose'



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
  const hotsSchema = {
    hot_price : Number,
    hot_Title: String,
    hot_Definition: String,
    hot_OpenSeaNFTURL: String,
    hot_NFTImage: String
  }

  const hots = mongoose.models.hots || mongoose.model('hots', hotsSchema)
  
  const hotdoc = await hots.find({})
  res.send(hotdoc)


}
  catch (error) {
    console.log(error)
  }
}
}