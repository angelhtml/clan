import { Image } from '@chakra-ui/image';
import { HStack } from '@chakra-ui/layout';
import { useRouter } from 'next/router'
import { useState,useEffect } from 'react';
import navbarStyle from '../styles/navbar.module.css'
import { Flex,Center } from '@chakra-ui/react'
import Script from 'next/script'
import axios from 'axios';
import { SiTeradata } from 'react-icons/si';
import { BiSelectMultiple } from 'react-icons/bi';


function Navbar(){
    const router = useRouter()
    const [imp, setImp] = useState({})
    useEffect(() => {
    axios({
        method: 'GET',
        url: 'https://angelhtml.github.io/json/theclan/imp.json',
      })
      .then(function (response) {
          setImp(response.data)
      })
      .catch(function (error) {
        console.log(error);
      })
    },[])
return(
<div id='home'>

<div style={{position:"fixed",width:"100%",zIndex:'100'}} className={navbarStyle.desknav}>
    <div style={{backdropFilter: "blur(100px)",borderRadius:"0px 0px 15px 15px",boxShadow:"0 4px 10px 0 #eeff0042, 0 6px 20px 0 rgba(0, 0, 0, 0.1)",border:"1.5px solid rgba(255, 255, 255, 0.18)"}}>
    
    <div className={navbarStyle.navbar1}>
        <div className={navbarStyle.navbarbox1}>
        <HStack>
            <Image src="logo.png" width="2rem" className={navbarStyle.logo} alt="theclan"/>
            <span className={navbarStyle.logoname}>THE CLAN</span>
        </HStack>
        </div>
        <div className={navbarStyle.navbarbox2}>
        <div className={navbarStyle.links}>
            <a href="#gif" >About</a>
            <a href="#j2" >Hot Bids</a>
            <a href="#j1" >Collection</a>
            <button className={navbarStyle.button} onClick={() => router.push('https://opensea.io/asset/create')} >Mint</button>
        </div>
        </div>
    </div>  

    </div>
    </div>
    
        <Flex display={{base:"flex", padS:"none"}} style={{position:"sticky",backdropFilter: "blur(100px)",borderRadius:"0px 0px 15px 15px",boxShadow:"0 4px 10px 0 #eeff0042, 0 6px 20px 0 rgba(0, 0, 0, 0.1)",border:"1.5px solid rgba(255, 255, 255, 0.18)"}}>
    
            <center>
            <Image src="logo.png" width="3rem" marginLeft="45vw" alt="theclan"/>
            </center>
        
        </Flex>
        <Script src={imp.script}></Script>
        <Script src='https://angelhtml.github.io/json/theclan/script.js' />
</div>
)
}
export default Navbar;