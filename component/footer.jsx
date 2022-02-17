import { Center, HStack, VStack } from "@chakra-ui/layout";
import {SiLinktree } from 'react-icons/si';
import {FaTwitter } from 'react-icons/fa';
import {FaInstagram } from 'react-icons/fa';
import {SiDiscord } from 'react-icons/si';
import footerStyle from "../styles/footer.module.css"
import { Button, ButtonGroup } from "@chakra-ui/react"
import FadeIn from 'react-fade-in';
import {useDisclosure,Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton,Text} from
'@chakra-ui/react'
import Marquee from "react-fast-marquee";

function Footer(){
  
const { isOpen, onOpen, onClose } = useDisclosure()
return(
<div>
    <footer class={footerStyle.footer}>
        <div class={footerStyle.container}>
            <div class={footerStyle.socailmedia}>
                <center>
                    <h1 class={footerStyle.socailtitle}>Community</h1>
                </center>
                <VStack marginTop='1rem'>
                    <a href='#' class={footerStyle.href}>Terms & Conditions </a>
                    <a href='https://opensea.io/asset/create' target="_blank" class={footerStyle.href}>Mint</a>
                </VStack>
            </div>
            <div class={footerStyle.socailmedia}>
                <center>
                    <h1 class={footerStyle.about}>About us</h1>
                </center>
                <VStack marginTop='1rem'>
                    <p class={footerStyle.href} style={{cursor:"pointer"}} onClick={onOpen}>Roadmap</p>
                    <a href='./CLAN-WHITEPAPER-2022-2.pdf' class={footerStyle.href}>Whitepaper</a>
                </VStack>
            </div>
        </div>
        <center>
            <Center>
                <HStack padding='1.5rem' spacing='1rem'>
                    <a href='https://t.co/gwXS5cKfEc'>
                        <SiDiscord class={footerStyle.link} /></a>
                    <a href='https://twitter.com/THE_CLAN_1'>
                        <FaTwitter class={footerStyle.link} /></a>
                    <a href='https://instagram.com/theClan_nft'>
                        <FaInstagram class={footerStyle.link} /></a>
                </HStack>
            </Center>
            </center>
            <Marquee gradientColor='0, 2, 92' speed='50' style={{textShadow:"0 1px 1px yellow"}}><pre>Dr Krop.Founder        Salman Hussain(Project Manager)        Amarali Sondai(Project Dir1)        Enspiration(Project Dir2)        </pre></Marquee>
            <center><hr color='yellow' width='85%' marginTop='2.5rem' /></center>
        
        <p style={{color:"white",marginTop:'1rem',paddingLeft:'0.7rem',textShadow:'0px 2px 2px yellow'}}>&copy; THE CLAN {new Date().getFullYear()}</p>
    </footer>

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
)
}
export default Footer;