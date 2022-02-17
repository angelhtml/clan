import handler from "../../component/handler";
import cors from "cors"

export default handler.use(cors()).post( async (req, res) => {
  const token = 'jxbJzk6bKAWUyxNf8GtUhm5091V2eTDRk6GtHgFo8TaDGLrW0jgzqYRPHmPnBKM9yG3es2ICMSxuevZSC0F7ePR0An65LQpBJPckrRHf15i5as3GW247AFqgdZjdmWXry7pCE2djOqgphTNZdXCfL0YGDV7t8wx1NbjmHRISKXUWFdVvaoSTFnnzi4KTVG631N5r7O2A'
  const us = req.body.Username
  const pw = req.body.Password
  if (pw == 'you always seem to bring the light' && us == 'QLgubfYvM43j') {
try{
    res.send(token)
}
  catch (error) {
    console.log(error)
  }
}else {
  res.send('You must be sign in to view the protected content on this page.')
}

})