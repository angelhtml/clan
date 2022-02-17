import handler from "../../component/handler";
import cors from "cors"
import dbConnect from "../../component/dbconnect";
import mongoose from 'mongoose'

export default handler.use(cors()).post( async (req, res) => {
  const token = 'jxbJzk6bKAWUyxNf8GtUhm5091V2eTDRk6GtHgFo8TaDGLrW0jgzqYRPHmPnBKM9yG3es2ICMSxuevZSC0F7ePR0An65LQpBJPckrRHf15i5as3GW247AFqgdZjdmWXry7pCE2djOqgphTNZdXCfL0YGDV7t8wx1NbjmHRISKXUWFdVvaoSTFnnzi4KTVG631N5r7O2A'
  const verfiy = req.body.Token
  if (verfiy == token) {

try{
  await dbConnect()
  const homesSchema = {
    Home_url : String
  }

  const homes = mongoose.models.homes || mongoose.model('homes', homesSchema)
  const update = { Home_url: req.body.url};
  const homedoc = await homes.findOneAndUpdate({_id:'620d64a95ffb17a020990ac8'},update)
    res.send(homedoc)
    

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