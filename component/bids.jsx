import { useSpringCarousel } from 'react-spring-carousel-js';
import { SiEthereum } from 'react-icons/si';
import dynamic from 'next/dynamic';
const Tilty = dynamic(() => import("react-tilty"), {
    ssr: false
    });

import { BiArrowToLeft,BiArrowToRight } from 'react-icons/bi';

import { Flex,Text,Box } from '@chakra-ui/react'

function Bids(props){
const countHotBids = props.Hots.length;


const items =[]


for (let index = 0; index < countHotBids; index++) {
  
  const object =  {   id: "CarouselItem-1",
  
  renderItem:<> 
  <a href={props.Hots[index].hot_OpenSeaNFTURL} target="_blank">
    <Tilty style={{ transformStyle: 'preserve-3d' }}>
    
  <Flex borderRadius="0px" margin="1rem" alignItems="center" flexDirection="column" width="10rem"
      cursor="pointer" height="19rem">

      <Box style={{ transform: 'translateZ(30px)' }} borderRadius="0 0px 10px 10px" width="10rem"
          height="10rem" margin="0rem" backgroundImage={props.Hots[index].hot_NFTImage} backgroundSize="cover"
          backgroundRepeat="no-repeat" boxShadow="0 5px 10px 5px #454500"
          style={{transformStyle: "preserve-3d"}}>
      </Box>
      
      <Text marginTop="0.7rem" textShadow="0 1px 1px yellow">{props.Hots[index].hot_Title}</Text>
      <p style={{padding:"10px",textAlign:"left",fontSize:"0.8rem"}}>{props.Hots[index].hot_Definition.substring(0, 80)}...</p>
      <div style={{display:"flex",width:"100%"}}>
          <SiEthereum style={{marginLeft:"10%",marginTop:"0.8rem"}} />
          <span style={{marginTop:"0.7rem"}}>{props.Hots[index].hot_price}</span>
      </div>
      
  </Flex>
  
</Tilty>
</a>

</>
}

items.push(object)

}

  





    const {
        carouselFragment,
        slideToPrevItem,
        slideToNextItem,
      } = useSpringCarousel({
        withLoop: true,
        itemsPerSlide: countHotBids,
        items: items,
      });
    return(
        <div id='j2'>
            <Text className="line-divider" ><span className="span-line-divider" >HOT BIDS</span></Text>
            <Box position="relative" width="100%">
       <Box zIndex="10" width="1.8rem" left="1rem" top="9rem" position="absolute" height="1.8rem" borderRadius="50%" background="yellow" onClick={slideToPrevItem} boxShadow="2px 2px 20px 4px black" cursor="pointer" _hover={{boxShadow:"2px 2px 20px 6px black"}}><BiArrowToLeft style={{width:"100%",height:"100%",color:"black"}}/></Box>
       <Box width="100%" >{carouselFragment}</Box>
       <Box zIndex="10" width="1.8rem"  right="1rem" top="9rem" position="absolute" height="1.8rem" borderRadius="50%" background="yellow" onClick={slideToNextItem} boxShadow="2px 2px 20px 4px black" cursor="pointer" _hover={{boxShadow:"2px 2px 20px 6px black"}}><BiArrowToRight style={{width:"100%",height:"100%",color:"black"}}/></Box>
     </Box>

        </div>
    )
}
export default Bids;