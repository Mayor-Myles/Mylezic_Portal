import React,{useState,useEffext} from "react";

import {Button,Input,Flex,Box,Select, Text, Spinner,useToast} from "@chakra-ui/react";

import NavbarTop from "../components/topNavbar";

import NavbarBottom from "../components/bottomNavbar";

import Advert from "../components/adverts";
import Sidebar from "../components/sidebar";
import Head from "next/head";
import {a2cState,csrfState} from "../states/recoil";
import {useRecoilState} from "recoil";





const A2C = () => {

const [rate,setRate] = useRecoilState(a2cState);

const [network,setNetwork] = useState("");

  const[phoneNumber,setPhoneNumber] = useState("");

  const[amount,setAmount] = useState(0);

const toReceive = Math.floor(amount * rate[network]);
  
const [csrf,setCsrf] = useRecoilState(csrfState);


const [btnLoading,setBtnLoading] =  useState(false);


const toast = useToast();
  
  
if(!rate){

  return(

    <Flex align="center" justify="center" minH="100vh">
    
    <Spinner  size="xl" color="teal" speed="0.4s" />
    
    </Flex>
  )
}


  
  
  const submitForm = () => {

setBtnLoading(true)
    
const data = {

  amount:amount,
  phoneNumber:phoneNumber,
  csrf:csrf,
  network: network,
} 

    const fields = Object.values(data).every(Boolean);

    if(!fields){

      setBtnLoading(false);

      toast.closeAll();
      
      toast({
        title:"Oops",
        description:"Please enter the necessary information ",
        status:"info",
        duration:5000,
        isClosable:true,
        position:"top"
      })

      return;
    }
    

    const url = "https://cbrbakery.com.ng/api?action=a2c";
    
fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(res => {
        if (!res.ok) {
          setBtnLoading(false);
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then(data => {
        setCsrf(data.token);
        setBtnLoading(false);
        if (data.status === "success") {
       
   setUser(data.userData);

toast ({
title: "Congrats 🎉 ",
  description:"Airtime purchase is successful. Thanks for choosing us",
  status: "success",
  duration:6000,
  isClosable: true,
  
});
          
        } else {
          toast({
            title: "Error",
            description: data.message,
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        }
      })
      .catch(error => {
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


    
  }


  
  
  return(

    <>
      
<Head>
  {/* Title */}
  <title>Convert Airtime to Cash Instantly | Mylezic - Best Rates & Fast Service</title>

  {/* Meta Description */}
  <meta 
    name="description" 
    content="Convert your airtime to cash instantly at the best rates with Mylezic. We offer fast and reliable airtime to cash conversion services. Easy process, secure transactions, and quick payouts." 
  />

  {/* Keywords */}
  <meta 
    name="keywords" 
    content="airtime to cash, convert airtime to cash, airtime conversion, airtime to money, sell airtime, airtime conversion service, Mylezic" 
  />

  {/* Canonical URL */}
  <link rel="canonical" href="https://mylezic.com.ng/airtime_to_cash" />

  {/* Open Graph Tags */}
  <meta property="og:title" content="Convert Airtime to Cash Instantly | Mylezic - Best Rates & Fast Service" />
  <meta 
    property="og:description" 
    content="Get the best rates for converting your airtime to cash with Mylezic. Fast, secure, and easy airtime to cash conversion process. Instant payouts guaranteed!" 
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://mylezic.com.ng/airtime_to_cash" />
  <meta property="og:image" content="logo.png" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Convert Airtime to Cash Instantly | Mylezic - Best Rates & Fast Service" />
  <meta 
    name="twitter:description" 
    content="Convert your airtime to cash with ease. Enjoy quick and secure transactions with Mylezic's airtime to cash service. Best rates guaranteed." 
  />
  <meta name="twitter:image" content="logo.png" />

  {/* Robots Tag (Allow all crawling) */}
  <meta name="robots" content="index, follow" />

  {/* Author */}
  <meta name="author" content="Mylezic" />

  {/* Charset */}
  <meta charSet="UTF-8" />

  {/* Viewport */}
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  {/* Favicon */}
  <link rel="icon" href="logo.png" />

  {/* Additional SEO Tags */}
  <meta property="og:site_name" content="Mylezic" />
  <meta name="theme-color" content="teal" />
  <link rel="apple-touch-icon" href="/
    logo.png" />
  <meta name="application-name" content="Mylezic Airtime to Cash Service" />

  {/* Structured Data for Search Engines */}
  <script type="application/ld+json">
    {`
      {
        "@context": "http://schema.org",
        "@type": "Service",
        "name": "Airtime to Cash Conversion",
        "description": "Mylezic offers the best rates and fastest service for converting airtime to cash. Our service is secure and reliable.",
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
        "url": "https://mylezic.com.ng/airtime_to_cash"
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
      
      <Box display={{sm:"none",base:"none",lg:"flex",xl:"flex"}}>

<Sidebar />
  
</Box>
  

    <Flex justify="center" align="center" minH="100vh" direction="column" maxW={{sm:'27em', base: '35em', md: '27em', lg: '25em', xl: '28em', '2xl':'30em', }} mx={{base:"2em",sm:'auto',md:"auto"}}
>

<Advert/>
      
<Flex w="full" flexFlow="column" gap="3" align="center" justify="center">

  <Text mb="1em" fontWeight="bold">Airtime to cash</Text>

  <Input onChange={(e)=>setPhoneNumber(e.target.value)} type="tel" placeholder="Whatsapp number" size="lg" border="1px solid teal" />

  <Select onChange={(e)=>setNetwork(e.target.value)} border="1px solid teal" size="lg" colorScheme="teal">

    <option value="">Choose Network</option>
    
  <option value="mtn">MTN </option>

  <option value="glo">GLO</option>  


    <option value="airtel">AIRTEL </option>

    <option value="9mobile">9MOBILE</option>
    
  </Select>

      <Input onChange={(e)=>setAmount(e.target.value)} type="number" placeholder="Amount to convert (Naira)" size="lg" border="1px solid teal" />

<Input type="number" size="lg" border="1px solid teal" placeholder={toReceive ? `We will pay you ₦${toReceive}` : "Amount to receive"} readOnly="readonly" />
   
      <Button isLoading={btnLoading} onClick={submitForm} size="md" w="full" colorScheme="teal">Request</Button>
</Flex>


    </Flex>
      
      <NavbarBottom/>
    
    </>
    
  );

  
}

export default A2C;


