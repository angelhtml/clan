import { Image } from '@chakra-ui/image';
import { Center } from '@chakra-ui/layout';
import gifStyle from '../styles/gif.module.css'
import { BiCheck } from 'react-icons/bi';


function Gif(props){

    return(
        <div id="gif" className={gifStyle.section}>
            <div className={gifStyle.sectionbox1}>
                <Image src={props.result} marginTop="3rem" alt="theclan"/>
            </div>
            <div className={gifStyle.sectionbox2}>
                <Center>
                    <h1 style={{fontSize:"1.3rem",marginTop:"0.5rem",textShadow:"0 2px 1px yellow"}}>THE CLAN</h1>
                </Center>
                <p style={{padding:"20px",paddingTop:"1rem"}}><BiCheck style={{float:"left",color:"yellow",fontSize:"1.2rem"}}/>Earn 2% of all our total monthly sales on  Opensea</p>
                <p style={{padding:"20px",paddingTop:"0rem"}}><BiCheck style={{float:"left",color:"yellow",fontSize:"1.2rem"}}/>A project that pays your avatar for appearance</p>
                <p style={{padding:"20px",paddingTop:"0rem"}}><BiCheck style={{float:"left",color:"yellow",fontSize:"1.2rem"}}/>A project that compensates victims of ruggpull</p>
                <p style={{padding:"20px",paddingTop:"0rem"}}><BiCheck style={{float:"left",color:"yellow",fontSize:"1.2rem"}}/>A collection of different Cartoon characters</p>
                <p style={{padding:"20px",paddingTop:"0rem"}}><BiCheck style={{float:"left",color:"yellow",fontSize:"1.2rem"}}/>Good roadmap,Solid team, great artwork</p>
                <p style={{padding:"20px",paddingTop:"0rem"}}><BiCheck style={{float:"left",color:"yellow",fontSize:"1.2rem"}}/>Invest wisely.Join our community today</p>
            </div>
        </div>
    )
}
export default Gif;








