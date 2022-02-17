import handler from "../../apicomponent/handler";
import db from 'diskdb';



export default handler.get( (req, res) => {
try{
    db.connect('./db', ['articles']);
    const article = {
        name : req.body.Username,
    }
    
    db.articles.save(article);
}
  catch (error) {
    console.log(error)
  }
})