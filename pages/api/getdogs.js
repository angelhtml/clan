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
  const dogsSchema = {
    Open_sea_Url_dog : String,
    Nft_image_dog: String,
    Title_dog: String,
    Description_dog: String,
    Dog_price_dog: Number
  }
  
  
  const dogs = mongoose.models.dogs || mongoose.model('dogs', dogsSchema)
  
  const dogdoc = await dogs.find({})
  res.send(dogdoc)

}
  catch (error) {
    console.log(error)
  }
}
}