//import handler from "../../component/handler";
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
const catsSchema = {
  Open_sea_Url_cat : String,
  Nft_image_cat: String,
  Title_cat: String,
  Description_cat: String,
  Cat_price_cat: Number
}


const cats = mongoose.models.cats || mongoose.model('cats', catsSchema)

const catdoc = await cats.find({})
res.send(catdoc)



}
  catch (error) {
    console.log(error)
  }
}
}