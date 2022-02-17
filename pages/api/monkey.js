import handler from "../../component/handler";
//import db from 'diskdb';
import cors from "cors"
import dbConnect from "../../component/dbconnect";
import mongoose from 'mongoose'



export default handler.use(cors()).post(async (req, res) => {
  const token = 'jxbJzk6bKAWUyxNf8GtUhm5091V2eTDRk6GtHgFo8TaDGLrW0jgzqYRPHmPnBKM9yG3es2ICMSxuevZSC0F7ePR0An65LQpBJPckrRHf15i5as3GW247AFqgdZjdmWXry7pCE2djOqgphTNZdXCfL0YGDV7t8wx1NbjmHRISKXUWFdVvaoSTFnnzi4KTVG631N5r7O2A'
  const verfiy = req.body.Token
  if (verfiy == token) {
try{

/*
  db.connect('./db', ['monkey']);

  var monkeysData = {
    Open_sea_Url_monkey : req.body.opensea,
    Nft_image_monkey: req.body.apeImage,
    Title_monkey: req.body.title,
    Description_monkey: req.body.definition,
    Mokey_price_monkey: req.body.price
  };


db.monkey.save(monkeysData);
*/
await dbConnect()
const monkeysSchema = {
  Open_sea_Url_monkey : String,
  Nft_image_monkey: String,
  Title_monkey: String,
  Description_monkey: String,
  Mokey_price_monkey: Number
}

const Open_sea_Url_monkey = req.body.opensea
const Nft_image_monkey = req.body.apeImage
const Title_monkey = req.body.title
const Description_monkey = req.body.definition
const Mokey_price_monkey = req.body.price

const monkeys = mongoose.models.monkeys || mongoose.model('monkeys', monkeysSchema)



const monkeysData = new monkeys ({
  Open_sea_Url_monkey,
  Nft_image_monkey,
  Title_monkey,
  Description_monkey,
  Mokey_price_monkey
});

monkeysData.save()
  res.send("monkey")


}
  catch (error) {
    console.log(error)
  }
}else {
    res.send({
      error: "You must be sign in to view the protected content on this page.",
    })
  }

})