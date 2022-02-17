//import handler from "../../component/handler";
//import db from 'diskdb';
import mongoose from 'mongoose'
import dbConnect from "../../component/dbconnect";
import NextCors from 'nextjs-cors';


export default async function handler(req, res)  {

  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
 });

 if (req.method === "GET") {

try{

/*
  db.connect('./db', ['monkey']);



  const monkey = await db.monkey.find();
  */
/*
  mongoose.connect('mongodb+srv://angel:11320809Aa@cluster0.lmyqw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error: "));
  db.once("open", function () {
    console.log("Connected successfully");
  });
  
  
  monkeys.find({})((err, monkeys) => { res.send(monkeys) });

*/
await dbConnect()
const monkeysSchema = {
  Open_sea_Url_monkey : String,
  Nft_image_monkey: String,
  Title_monkey: String,
  Description_monkey: String,
  Mokey_price_monkey: Number
}

const monkeys = mongoose.models.monkeys || mongoose.model('monkeys', monkeysSchema)

const monkeydoc = await monkeys.find({})
res.send(monkeydoc)


}
  catch (error) {
    console.log(error)
  }
}
}
