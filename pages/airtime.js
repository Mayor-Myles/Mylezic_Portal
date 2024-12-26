import {useState,useEffect} from "react";
import NavbarTop from "../components/topNavbar";
import NavbarBottom from "../components/bottomNavbar";
import Wallet from "../components/wallet";
import Advert from "../components/adverts";
import Sidebar from "../components/sidebar";
import{Box,Flex,Text,IconButton,Input,Image,InputGroup,InputLeftElement,Button,useToast} from "@chakra-ui/react";
import Head from "next/head";
import axios from "axios";
import {useRecoilState} from "recoil";
import {csrfState,userData} from  "../states/recoil";
import useUpdate from "../components/Update";


  

const Airtime = () => {

const [network,setNetwork] = useState("mtn");

const [csrf,setCsrf] = useRecoilState(csrfState);

  const [amount,setAmount] = useState(0);

  const [phoneNumber,setPhoneNumber] =  useState("");

  const [btnLoading,setBtnLoading] =  useState(false);

  const update = useUpdate();
  
  const [user,setUser] = useRecoilState(userData);

const toast = useToast();

  
  const submitForm = () => {
  setBtnLoading(true);

  const data = {
    amount: amount,
    phoneNumber: phoneNumber,
    csrf: csrf,
    network: network,
  };

  const fields = Object.values(data).every(Boolean);

  if (!fields) {
    setBtnLoading(false);

    toast.closeAll();

    toast({
      title: "Oops",
      description: "Please enter the amount and the receiver's phone number",
      status: "info",
      duration: 5000,
      isClosable: true,
      position: "top",
    });

    return;
  }

  const url = "https://mylezic.com.ng/api/buyAirtime";

  axios
    .post(url, data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      setCsrf(res.data.token);
      setBtnLoading(false);
      update();
      if (res.data.status === "success") {
       // setUser(res.data.userData);
      
        toast.closeAll();
        toast({
          title: "Congrats 🎉",
          description: "Airtime purchase is successful. Thanks for choosing us",
          status: "success",
          duration: 6000,
          isClosable: true,
          position: "top",
        });
      } else {
        toast.closeAll();
        toast({
          title: "Error",
          description: res.data.message,
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
      }
    })
    .catch((error) => {
      toast.closeAll();
      toast({
        title: "Error",
        description: "Your request could not be processed. " + error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      setBtnLoading(false);
    });
};

  
  return(
<>

<Head>
  {/* Title */}
  <title>Buy Airtime at the Best Rates | Mylezic - Fast and Reliable Service</title>

  {/* Meta Description */}
  <meta 
    name="description" 
    content="Buy airtime instantly at competitive rates with Mylezic. Enjoy fast, secure, and reliable service for all your airtime needs. Available for all networks." 
  />

  {/* Keywords */}
  <meta 
    name="keywords" 
    content="buy airtime, airtime purchase, best airtime rates, fast airtime, airtime for all networks, Mylezic" 
  />

  {/* Canonical URL */}
  <link rel="canonical" href="https://mylezic.com.ng/airtime" />

  {/* Open Graph Tags */}
  <meta property="og:title" content="Buy Airtime at the Best Rates | Mylezic - Fast and Reliable Service" />
  <meta 
    property="og:description" 
    content="Get the best deals on airtime purchases with Mylezic. Fast, secure, and easy airtime buying process for all networks." 
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://mylezic.com.ng/airtime" />
  <meta property="og:image" content="/logo.png" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Buy Airtime at the Best Rates | Mylezic - Fast and Reliable Service" />
  <meta 
    name="twitter:description" 
    content="Buy airtime quickly and securely with Mylezic. Best rates guaranteed for all network airtime purchases." 
  />
  <meta name="twitter:image" content="/logo.png" />

  {/* Robots Tag (Allow all crawling) */}
  <meta name="robots" content="index, follow" />

  {/* Author */}
  <meta name="author" content="Mylezic" />

  {/* Charset */}
  <meta charSet="UTF-8" />

  {/* Viewport */}
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  {/* Favicon */}
  <link rel="icon" href="/favicon.ico" />

  {/* Additional SEO Tags */}
  <meta property="og:site_name" content="Mylezic" />
  <meta name="theme-color" content="teal" />
  <link rel="apple-touch-icon" href="/logo.png" />
  <meta name="application-name" content="Mylezic Airtime Service" />

  {/* Structured Data for Search Engines */}
  <script type="application/ld+json">
    {`
      {
        "@context": "http://schema.org",
        "@type": "Service",
        "name": "Airtime Purchase",
        "description": "Mylezic offers a fast and reliable platform to buy airtime at the best rates. Secure and easy-to-use service available for all networks.",
        "provider": {
          "@type": "Organization",
          "name": "Mylezic",
          "url": "https://mylezic.com.ng"
        },
        "areaServed": {
          "@type": "Place",
          "name": "Global"
        },
        "image": "https://mylezic.com.ng/logo.png",
        "url": "https://mylezic.com.ng/airtime"
      },
        "sameAs": [
    "https://x.com/Mylezic?t=rZ-XsKl0de9aDIJL_1LREA&s=09",
    "https://www.facebook.com/profile.php?id=61564236574047",
    "https://www.instagram.com/mylezic",
    "https://linkedin.com/mylezic"
  ]
    `}
  </script>
</Head>

  
<NavbarTop/>
  
<Box display={{sm:"none",base:"none",md:"none",lg:"flex"}}>

<Sidebar />
  
</Box>
  
   <Flex minH="100vh" align="center" justify="center" flexFlow="column" maxW={{sm:'27em', base: '35em', md: '27em', lg: '25em', xl: '28em', '2xl':'30em', }} mx={{base:"2em",sm:'auto',md:"auto"}} gap="5" mt="2.3em">
  
  <Wallet />

  <Advert/>

<Flex align="center" justify="center" gap="5">
  
<Text fontWeight="bold" color="lightgrey">Choose Network </Text>
  <IconButton onClick={()=>setNetwork("mtn")} border={network=="mtn" && "1px solid teal"}  shadow="lg">

<Image alt="mtn" borderRadius="full" w="30px" h="30px" objectFit="cover" src="mtn.png" />
  </IconButton>
  
<IconButton border={network=="airtel" && "1px solid teal"} onClick={()=>setNetwork("airtel")} shadow="lg">

<Image alt="airtel"  borderRadius="full" w="30px" h="30px" objectFit="cover" src="airtel.png" />
  </IconButton>

  
<IconButton border={network=="glo" && "1px solid teal"} onClick={()=>setNetwork("glo")} shadow="lg">

<Image alt="glo" borderRadius="full" w="30px" h="30px" objectFit="cover" src="glo.png" />
  </IconButton>

  <IconButton border={network=="9mobile" && "1px solid teal"} onClick={()=>setNetwork("9mobile")} shadow="lg">

<Image alt="9mobile" borderRadius="full" w="30px" h="30px" objectFit="cover" src="9mobile.png" />
  </IconButton>

</Flex>

<Flex align="center" justify="center" gap="2" flexFlow="row wrap" mb={{base:"4em"}}>

  <Box>
<InputGroup>
  
  <InputLeftElement>
    
  <Image alt="network logo" borderRadius="full"  src={`${network}.png`} objectFit="cover" w="20px" h="20px"/>
  </InputLeftElement>
  
  <Input onChange={(e)=>setPhoneNumber(e.target.value)} type="number" placeholder="Phone number" variant="flushed" _placeholder={{ color: 'gray.300' }}
    _focus={{ borderBottom: '1px solid teal', boxShadow: 'sm' }} />
  
</InputGroup>
    
</Box>

  <Box>
  
    <Input placeholder ="Amount" type="number" w="10em" onChange={(e)=>setAmount(e.target.value)} variant="flushed"  _placeholder={{ color: 'gray.300' }}
      _focus={{ borderBottom: '1px solid teal', boxShadow: 'sm' }}/>
  </Box>
  
  <Box>
  <Button isLoading={btnLoading} onClick={submitForm} colorScheme="teal" w="full" size="md">
  Buy
  </Button>
  </Box>
</Flex>
  
</Flex>
  
  <NavbarBottom/>

</>

    
  );
  
}

export default Airtime;
