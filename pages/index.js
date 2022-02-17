import Navbar from '../component/navbar';
import Herro from '../component/herro';
import Footer from "../component/footer"   
import Gif from "../component/gif"
import Hots from  "../component/bids"                                  // <<<++===========Hot bids component !!!
import Bcc from "../component/bcc"
import Gallery from "../component/gallery";
import Tabbar from "../component/Tabbar";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import mongoose from 'mongoose'


function App(props){


  return (
    <div>
      <Navbar />
      <Herro />
      <ScrollAnimation animateIn="animate__fadeIn" offset='200' duration={2}>
      <Gif  result={props.gif[0].Home_url} /> 
      </ScrollAnimation>
      <ScrollAnimation animateIn="animate__fadeInLeft" offset='200' duration={2}>
      <Bcc/>
      </ScrollAnimation>
      <ScrollAnimation animateIn="animate__fadeIn" offset='200' duration={2}>
      <Hots  Hots={props.Hots} />   
      </ScrollAnimation>
      <ScrollAnimation animateIn="animate__backInUp" offset='150' duration={2}>
      <Gallery Collections={props.Collections}/>
      </ScrollAnimation>
      <ScrollAnimation animateIn="animate__slideInUp" offset='150' duration={2}>
      <Footer/>
      </ScrollAnimation>
      <Tabbar />
    </div>
  )
}
export default App



export async function getServerSideProps() {

  mongoose.connect('mongodb+srv://theclan:11320809Aa@cluster0.syzik.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
  const homesSchema = {
    Home_url : String
  }
  const hotsSchema = {
    hot_price : Number,
    hot_Title: String,
    hot_Definition: String,
    hot_OpenSeaNFTURL: String,
    hot_NFTImage: String
  }
  const monkeysSchema = {
    Open_sea_Url_monkey : String,
    Nft_image_monkey: String,
    Title_monkey: String,
    Description_monkey: String,
    Mokey_price_monkey: Number
  }
  const catsSchema = {
    Open_sea_Url_cat : String,
    Nft_image_cat: String,
    Title_cat: String,
    Description_cat: String,
    Cat_price_cat: Number
  }
  const dogsSchema = {
    Open_sea_Url_dog : String,
    Nft_image_dog: String,
    Title_dog: String,
    Description_dog: String,
    Dog_price_dog: Number
  }
  const homes = mongoose.models.homes || mongoose.model('homes', homesSchema)
  const homegif = await homes.find({}).lean()

  const hots = mongoose.models.hots || mongoose.model('hots', hotsSchema)
  const hotdoc = await hots.find({}).lean()

  const monkeys = mongoose.models.monkeys || mongoose.model('monkeys', monkeysSchema)
  const monkeydoc = await monkeys.find({}).lean()

  const cats = mongoose.models.cats || mongoose.model('cats', catsSchema)
  const catdoc = await cats.find({})

  const dogs = mongoose.models.dogs || mongoose.model('dogs', dogsSchema)
  const dogdoc = await dogs.find({}).lean()



 
  

   const Hots = JSON.parse(JSON.stringify(hotdoc))
   const Homegif = JSON.parse(JSON.stringify(homegif))
   const Monkeys = JSON.parse(JSON.stringify(monkeydoc))
   const Cats = JSON.parse(JSON.stringify(catdoc))
   const Dogs = JSON.parse(JSON.stringify(dogdoc))


   const Collections = {Monkeys:Monkeys, Cats:Cats, Dogs:Dogs}

    return {
      props: { Hots: Hots  ,gif: Homegif , Collections:Collections},
    }
  }