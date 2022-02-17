import { SiEthereum } from 'react-icons/si';
import { VirtuosoGrid } from 'react-virtuoso'
import styled from '@emotion/styled'
import dynamic from 'next/dynamic';
const Tilty = dynamic(() => import("react-tilty"), {
ssr: false
});

import {
Flex,Text,Box
} from '@chakra-ui/react'

function Gallery(props){
return(
<>
    <div id='j1'>
    
        <Text className="line-divider"><span className="span-line-divider">Ape Clan</span></Text>
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}>
        {props.Collections.Monkeys.map(e=><div key={e._id}>
            <a href={e.Open_sea_Url_monkey} target="_blank">
            <Tilty style={{ transformStyle: 'preserve-3d' }}>
            
                <Flex borderRadius="0px" margin="1rem" alignItems="center" flexDirection="column" width="10rem"
                    cursor="pointer" height="19rem">


                    <Box style={{ transform: 'translateZ(30px)' }} borderRadius="0 0px 10px 10px" width="10rem"
                        height="10rem" margin="0rem" backgroundImage={e.Nft_image_monkey} backgroundSize="cover"
                        backgroundRepeat="no-repeat" boxShadow="0 5px 10px 5px #454500"
                        style={{transformStyle: "preserve-3d"}}>
                    </Box>
                    
                    <Text marginTop="0.7rem" textShadow="0 1px 1px yellow">{e.Title_monkey}</Text>
                    <p style={{padding:"5px",textAlign:"left",fontSize:"0.8rem"}}>{e.Description_monkey.substring(0, 80)}...</p>
                    <div style={{display:"flex",width:"100%"}}>
                        <SiEthereum style={{marginLeft:"10%",marginTop:"0.8rem"}} />
                        <span style={{marginTop:"0.7rem"}}>{e.Mokey_price_monkey}</span>
                    </div>
                    
                </Flex>
                
            </Tilty>
            </a>
            </div>)}
            </div>
    </div>
    <div>
        <Text className="line-divider"><span className="span-line-divider">Cat Clan</span></Text>
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}>
    {props.Collections.Cats.map(e=><div key={e._id}>
        <a href={e.Open_sea_Url_cat} target="_blank">
            <Tilty style={{ transformStyle: 'preserve-3d' }}>
                <Flex borderRadius="0px" margin="1rem" alignItems="center" flexDirection="column" width="10rem"
                    cursor="pointer" height="19rem">

                    <Box style={{ transform: 'translateZ(30px)' }} borderRadius="0 0px 10px 10px" width="10rem"
                        height="10rem" margin="0rem" backgroundImage={e.Nft_image_cat} backgroundSize="cover"
                        backgroundRepeat="no-repeat" boxShadow="0 5px 10px 5px #454500"
                        style={{transformStyle: "preserve-3d"}}>
                    </Box>
                    <Text marginTop="0.7rem" textShadow="0 1px 1px yellow">{e.Title_cat}</Text>
                    <p style={{padding:"10px",textAlign:"left",fontSize:"0.8rem"}}>{e.Description_cat.substring(0, 80)}...</p>
                    <div style={{display:"flex",width:"100%"}}>
                        <SiEthereum style={{marginLeft:"10%",marginTop:"0.8rem"}} />
                        <span style={{marginTop:"0.7rem"}}>{e.Cat_price_cat}</span>
                    </div>
                </Flex>
            </Tilty></a></div>)}
            </div>
    </div>
    <div>
        <Text className="line-divider"><span className="span-line-divider">Bulldog Clan</span></Text>
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}>
        {props.Collections.Dogs.map(e=><div key={e._id}>
            <a href={e.Open_sea_Url_dog} target="_blank">
            <Tilty style={{ transformStyle: 'preserve-3d' }}>
                <Flex borderRadius="0px" margin="1rem" alignItems="center" flexDirection="column" width="10rem"
                    cursor="pointer" height="19rem">

                    <Box style={{ transform: 'translateZ(30px)' }} borderRadius="0 0px 10px 10px" width="10rem"
                        height="10rem" margin="0rem" backgroundImage={e.Nft_image_dog} backgroundSize="cover"
                        backgroundRepeat="no-repeat" boxShadow="0 5px 10px 5px #454500"
                        style={{transformStyle: "preserve-3d"}}>
                    </Box>
                    <Text marginTop="0.7rem" textShadow="0 1px 1px yellow">{e.Title_dog}</Text>
                    <p style={{padding:"10px",textAlign:"left",fontSize:"0.8rem"}}>{e.Description_dog.substring(0, 80)}...</p>
                    <div style={{display:"flex",width:"100%"}}>
                        <SiEthereum style={{marginLeft:"10%",marginTop:"0.8rem"}} />
                        <span style={{marginTop:"0.7rem"}}>{e.Dog_price_dog}</span>
                    </div>
                </Flex>
            </Tilty></a></div>)}
            </div>
    </div>
</>
)
}
export default Gallery;

const ItemContainer = styled.div`

`



const ListContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content:space-around;
`