import { Flex,Image,Box,Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import FadeIn from 'react-fade-in';
function Bcc(){


 const[ one,setone  ] =useState(false)
 const[ two,settwo  ] =useState(false)
 const[ three,setthree  ] =useState(false)
 const[ fure,setfure  ] =useState(false)
 const[ five,setfive  ] =useState(false)
useEffect(()=>{


setTimeout(() => {

    setone(true)
    
}, 1000);

setTimeout(() => {

    setone(false)
    
}, 4000);

setTimeout(() => {

    settwo(true)
    
}, 6000);

setTimeout(() => {

    settwo(false)
    
}, 10000);

setTimeout(() => {

    setthree(true)
    
}, 11000);

setTimeout(() => {

    setthree(false)
    
}, 17000);


setTimeout(() => {

    setfure(true)
    
}, 18000);

setTimeout(() => {

    setfure(false)
    
}, 22000);

setTimeout(() => {

    setfive(!five)
    
}, 23000);

},[five])

    
    return(
        <>
  <Flex wrap="wrap" height="25rem" width="100%"  justifyContent="center" alignItems="center" >


<Flex className="flot" margin="1rem" width="16rem" height="9rem" background="#1488cc" borderRadius="15px" backdropFilter="blur( 4px )" >

<div class="circles">
  <div class="circle circle-1"></div>
  <div class="circle circle-2"></div>
</div>

<div class="card-group">
  <div class="card">
    <div class="logo"><img src="logo.png" alt="Visa"/></div>
 
    <div class="number">0xc23d925684919c1619</div>
    <div class="name">THE CLAN</div>

    <div class="ring"></div>
  </div>
</div>

</Flex>

<Flex alignContent="center" justifyItems="center" zIndex="10" wrap="wrap" width="16rem" height="20rem">

{ one &&
<FadeIn>
<Text className="h" fontFamily="Adelle_Bold" textAlign="center" >TCMC is a membership card</Text>
</FadeIn>
}

{ two &&
<FadeIn>
<Text className="h" fontFamily="Adelle_Bold" textAlign="center"  >that allows holders to Earn 2%</Text>
</FadeIn>
}
{ three &&
<FadeIn>
<Text className="h" fontFamily="Adelle_Bold" textAlign="center"  >of all our total monthly sales on Opensea</Text>
</FadeIn>
}
{ fure &&
<FadeIn>
<Text className="h" fontFamily="Adelle_Bold" textAlign="center"  >With TCMC, you can mint upto 2 THE CLAN NFT free</Text>
</FadeIn>
}

</Flex>
  </Flex>
        </>
    )
}
export default Bcc;