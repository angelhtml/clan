import hero from '../styles/home/herro.module.css'
import { Image } from '@chakra-ui/image';
import {useDisclosure,Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton,Text} from
'@chakra-ui/react'
import FadeIn from 'react-fade-in';
import pic from '../public/WYAjt3T.webp'

function Herro(){
const { isOpen, onOpen, onClose } = useDisclosure()


return(
<>
<div background={pic} className={hero.pic}>
  <div className={hero.warp}>
  <center><p style={{zIndex:"10",marginTop:"6rem",fontSize:"0.8rem",textShadow:"0 1px 1px black"}}>Mint with The Clan</p><p style={{zIndex:"10",marginTop:"1rem",fontSize:"1.5rem",textShadow:"0px 2px 2px black"}}>The Clan NFT center</p></center>
    <div className={hero.buttoncenter} style={{marginTop:"1rem"}}><button onClick={onOpen} class={hero.drawborder}>RODEMAP</button></div>

    <div className={`${hero.square} ${hero.square1}`}>
      <Image src="s1.webp" width="100%" height="100%" alt="img"/>
    </div>
    <div className={`${hero.square} ${hero.square2}`}>
      <Image src="s6.webp" width="100%" height="100%" alt="img"/>
    </div>
    <div className={`${hero.square} ${hero.square3}`}>
      <Image src="s3.webp" width="100%" height="100%" alt="img"/>
    </div>
    <div className={`${hero.square} ${hero.square4}`}>
      <Image src="s7.webp" width="100%" height="100%" alt="img"/>
    </div>
    <div className={`${hero.square} ${hero.square5}`}>
      <Image src="s8.webp" width="100%" height="100%" alt="img"/>
    </div>
  </div>


  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent background="gold" maxWidth="70%">
      <ModalHeader style={{textShadow:"0 2px 1px black"}}>ROEDMAP</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <FadeIn>

          <Text className="h1" textAlign="left">Introduction of @THE CLAN NFT to the general
            public/promotion/sellout.</Text>

          <hr class="small-divider" />

          <Text className="h1" textAlign="left"> NFT airdrops for diamond holders and Eth airdrops. </Text>
          <Text className="h1" textAlign="left">Only Members who are holding more than one of the @THE CLAN NFTs will
            get an eth airdrops.</Text>
          <Text className="h1" textAlign="left">DODO Merch begins. </Text>
          <Text className="h1" textAlign="left">Hoodies and urban pants to everyone</Text>

          <hr class="small-divider" />

          <Text className="h1" textAlign="left"> At this point, we push out THE CLAN cartoon into the Cinemas and
            Netflix. </Text>
          <Text className="h1" textAlign="left">Holders get rewarded for holding a @THE CLAN NFT that played a
            role..</Text>

          <hr class="small-divider" />

          <Text className="h1" textAlign="left">We emback on @THE CLAN comics and mass production of toys.</Text>

          <hr class="small-divider" />

          <Text className="h1" textAlign="left"> Giving back to the Community. </Text>
          <Text className="h1" textAlign="left">We start by giving away 30% of all our total income to the Orphanage
            homes and Charity organizations across the globe.</Text>

          <hr class="small-divider" />

          <Text className="h1" textAlign="left">Introduction of THE CLAN NFT Market Place and our own Token (CoolCatCoin)
            $CCC.</Text>
          <Text className="h1" textAlign="left">A Market Place where collectors and Creators transact business not just
            THE CLAN collection but every verify creator can come onboard</Text>

          <hr class="small-divider" />

          <Text className="h1" textAlign="left">We unveil the advance program. </Text>
          <Text className="h1" textAlign="left">The developers and project managers of @THE CLAN are constantly looking
            for ways to improve and bring more value to the project, so we have a whole new stage and strategies to
            introduce to the general public at this Phase. </Text>
          <Text className="h1" textAlign="left">Stick with us and we promise you won't regret any moment of being a
            member of this great club</Text>
        </FadeIn>
      </ModalBody>

      <ModalFooter>

      </ModalFooter>
    </ModalContent>
  </Modal>


</div>
</>
)
}
export default Herro;