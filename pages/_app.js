import '../styles/globals.css';
import { ChakraProvider, extendTheme ,} from '@chakra-ui/react';
import { createBreakpoints } from "@chakra-ui/theme-tools"
import { Global } from '@emotion/react';
import Head from 'next/head'

const breakpoints = createBreakpoints({
  watchS:"198px",
  watchM:"225px",
  watchL:"228px",
  phoneS:"321px",
  phoneM:"361px",
  phoneL:"413px",
  padS:"769px",
  padM:"811px",
  padL:"1025px",
  pcS:"1281px",
  pcM:"1367px",
  pcL:"1441px",
  pcXL:"1621px",
  pcXXL:"1921px",

  T869:"869",
  T655:"655",
  T555:"540",
  T460:"460",
  T370:"360",
  T1412:"1410",
  T1650:"1660",
})


const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
}


const theme = extendTheme({ config , breakpoints })



function MyApp({ Component, pageProps:{session, ...pageProps}, router }) {
  return (
    <div>
<Head>
<meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <meta name="next-head-count" content="2" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link rel="manifest" href="/manifest.json" />

<meta name="theme-color" content="#90cdf4" />
<link rel="apple-touch-icon" href="/favicon.ico" />
<link rel="icon" href="/favicon.ico" />
<meta name="description" content="The Clan NFT"/>

<meta name="apple-mobile-web-app-status-bar" content="#f6ff00" />
    <title>TheClan</title>
</Head>
      <ChakraProvider theme={theme}>


<Global
    styles={`
    @font-face {
      font-family: "Adelle_Reg";
      src:  url('./font/Adelle_Reg.otf') format('opentype');
    }

    @font-face {
      font-family: "Adelle_Bold";
      src:  url('./font/Adelle_Bold.otf') format('opentype');
    }

    @font-face {
      font-family: "Adelle_Heavy";
      src:  url('./font/Adelle_Heavy.otf') format('opentype');
    }
    

    .small-divider {
      margin:0.5rem;
      height: 15px;
      background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' height='100%' width='100%'><defs><pattern id='small' width='4' height='15' patternTransform='rotate(0 0 0)' patternUnits='userSpaceOnUse'> <circle cx='0.5' cy='1.5' r='0.5' fill='%23F05346'/> <circle cx='0.5' cy='4.5' r='0.5' fill='%23F05346'/> <circle cx='0.5' cy='7.5' r='0.5' fill='%23F05346'/> <circle cx='2.5' cy='2.5' r='0.5' fill='%23F05346'/> <circle cx='2.5' cy='5.5' r='0.5' fill='%23F05346'/> <circle cx='2.5' cy='8.5' r='0.5' fill='%23F05346'/> </pattern></defs><rect width='100%' height='100%' fill='url(%23small)'/></svg>");
      }
      `}
  />

      <Component {...pageProps} />

    </ChakraProvider>
    
   </div>
  )
}

export default MyApp
