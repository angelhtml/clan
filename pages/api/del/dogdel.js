import handler from "../../../component/handler";
import cors from "cors";
import dbConnect from "../../../component/dbconnect";
import mongoose from 'mongoose'


export default handler.use(cors()).post( async (req, res) => {

  const token = 'jxbJzk6bKAWUyxNf8GtUhm5091V2eTDRk6GtHgFo8TaDGLrW0jgzqYRPHmPnBKM9yG3es2ICMSxuevZSC0F7ePR0An65LQpBJPckrRHf15i5as3GW247AFqgdZjdmWXry7pCE2djOqgphTNZdXCfL0YGDV7t8wx1NbjmHRISKXUWFdVvaoSTFnnzi4KTVG631N5r7O2A'
  const verfiy = req.body.Token
  if (verfiy == token) {
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
  
  const dogdoc = await dogs.findOneAndDelete({_id:req.body.id})
  res.send(dogdoc)


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