import React,{useState,useEffect} from 'react';
import { Box, Button, Flex, Heading, Text, Image, Stack, useToast ,Select, Input} from "@chakra-ui/react";
//import { FaFacebook, FaWhatsapp, FaInstagram, FaFacebookMessenger, FaEnvelope, FaTwitter } from 'react-icons/fa';
import NavbarTop from "../components/topNavbar";
import NavbarBottom from "../components/bottomNavbar";
import Wallet from "../components/wallet";
import Sidebar from "../components/sidebar";
import {useRecoilState} from "recoil";
import {merchantState,userData} from "../states/recoil";
import Script from "next/script";
import Head from "next/head";
import useUpdate from "../components/Update";
const Fund = () => {


  const [fundType,setFundType] = useState(null);
const update = useUpdate();
const [merchant,setMerchant] = useRecoilState(merchantState);

  const [user,setUser] = useRecoilState(userData);

  const [loading,setLoading] = useState(false);

  const [amount , setAmount]  =  useState(100);
    


  
    
const toast = useToast();

function genReference() {
    const randomPart = Math.random().toString(36).substring(2, 8); // Random part
    const timePart = Date.now().toString(36).substring(4); // Time-based part

    return randomPart + timePart;
}

//let charge = null; // Initialize charge as null

function getCharge(amount) {
  
    const paystackFeePercentage = 0.015; // 1.5% fee
  
    const flatFee = 100; // ₦100 
  
    const feeCap = 2000; // ₦2000 fee cap

    let paystackFee = amount * paystackFeePercentage;

    // Add flat fee if the amount is more than ₦2500
    if (amount > 2500) {
        paystackFee += flatFee;
    }

    // Apply the fee cap
  paystackFee = Math.min(paystackFee, feeCap);

    // Set the total amount (original amount + Paystack fee) to charge
    return paystackFee;

    
}

  const fundMe = () => {
  const pk = merchant['flutterwave']['pk']; // Replace with your Flutterwave public key

  setLoading(true);

  const charge = Math.ceil(getCharge(amount));

  FlutterwaveCheckout({
    public_key: pk, // Your Flutterwave public key
    tx_ref: genReference(), // Unique transaction reference
    amount: Number(amount) + Number(charge), // Total amount (original + Flutterwave charge)
    currency: 'NGN', // Nigerian Naira
    //payment_options: 'card,banktransfer,ussd', // Available payment options
    customer: {
      email: user.email, // Customer's email
      phonenumber: user.phoneNumber, // Customer's phone number
      name: user.fullName, // Customer's name
    },
    customizations: {
      title: "Mylezic Wallet Funding", // Title for the payment page
      description: "Fund your Mylezic wallet effortlessly.",
      logo: "/logo.png", // Optional logo
    },
    meta: {
      user_id: user.userId, // Pass the user ID properly in metadata
    },
    callback: function (response) {
      update(); // Perform any updates needed on success
      setLoading(false);

      toast({
        position: "top",
        title: "Congrats",
        description: "Your account has been funded successfully!",
        isClosable: true,
        status: "success",
        duration: 3000,
      });

      console.log("Payment successful. Reference:", response.tx_ref);
    },
    onclose: function () {
      setLoading(false); // Handle payment modal close

      toast({
        status: "info",
        title: "Payment cancelled",
        duration: 5000,
        isClosable: true,
        description: "You have cancelled the payment",
        position: "top",
      });
    },
  });
};
  

  const notify = () => {

    
const userId = user.userId;
    
const phoneNumber = "2347014443158"; // WhatsApp number without the '+' sign

// Construct the WhatsApp URL
const url = `https://wa.me/${phoneNumber}?text=Hi, I just made a transfer of ₦${amount} to you. My user Id is ${userId}`;

    window.location.href=url;
  }

  return(

    <>
    
     <Head>
  {/* Title */}
  <title>Fund Wallet| Mylezic - Manage Your Transactions Effortlessly</title>

  {/* Meta Description */}
  <meta 
    name="description" 
    content="Access your Mylezic dashboard, fund your walet to manage your airtime purchases, view transaction history, and monitor account details easily and securely." 
  />

  {/* Keywords */}
  <meta 
    name="keywords" 
    content="fund wallet, mylezic wallet, manage transactions, account details, transaction history, airtime management" 
  />

  {/* Canonical URL */}
  <link rel="canonical" href="https://mylezic.com.ng/fund" />

  {/* Open Graph Tags */}
  <meta property="og:title" content="Fund Wallet| Mylezic - Manage Your Transactions Effortlessly" />
  <meta 
    property="og:description" 
    content="Manage your transactions, view history, and update your account settings securely in the Mylezic dashboard." 
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://mylezic.com.ng/dashboard" />
  <meta property="og:image" content="/logo.png" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Fund wallet | Mylezic - Manage Your Transactions Effortlessly" />
  <meta 
    name="twitter:description" 
    content="Access your personal dashboard, fund your wallet to track your airtime purchases and manage your Mylezic account with ease." 
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
  <link rel="icon" href="/logo.png" />

  {/* Additional SEO Tags */}
  <meta property="og:site_name" content="Mylezic" />
  <meta name="theme-color" content="teal" />
  <link rel="apple-touch-icon" href="/logo.png" />
  <meta name="application-name" content="Mylezic Dashboard" />

  {/* Structured Data for Search Engines */}
  <script type="application/ld+json">
    {`
      {
        "@context": "http://schema.org",
        "@type": "WebApplication",
        "name": "Mylezic Dashboard",
        "description": "Manage your Mylezic transactions, view transaction history, and update account details in the dashboard.",
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
        "url": "https://mylezic.com.ng/dashboard"
      },
        "sameAs": [
    "https://x.com/Mylezic?t=rZ-XsKl0de9aDIJL_1LREA&s=09",
    "https://www.facebook.com/profile.php?id=61564236574047",
    "https://www.instagram.com/mylezic",
    "https://linkedin.com/mylezic"
  ]
    `}
  </script>
       
      <script src="https://checkout.flutterwave.com/v3.js" async></script>
       
         </Head>
    
{/*<Script src="https://js.paystack.co/v1/inline.js" />*/}
      
      

      
    <NavbarTop/>


     <Box display={{sm:"none",base:"none",md:"none",lg:"flex"}}>

<Sidebar />
  
</Box>
   

      <Flex gap="7" maxW={{sm:'27em', base: '35em', md: '27em', lg: '25em', xl: '28em', '2xl':'30em', }} mx={{base:"2em",sm:'auto',md:"auto"}}
 flexFlow="column" align="center" justify="center" minH="100vh">

<Wallet/>

        
    <Select onChange={(e)=>setFundType(e.target.value)} _hover={{border:"1px solid teal"}} size="lg" colorScheme="lightgrey">
      <option>Choose Funding Type</option>
    <option value="auto">Auto Funding</option>
    <option value="manual">Manual Transfer Funding</option>
    </Select>  

<Text shadow="md" bg="gray.200" p="5" color="gray" borderRadius="0.6em">{fundType == "manual" ? (<Text>Transfer to <strong>9060421393(Opay) - Babalola Mayowa Abel</strong>. After successful transfer, type in the amount sent below and click on 'Notify Us' </Text>) : "Choose preffered funding type. Manual deposits is free but takes few minutes to reflect in your wallet. Auto funding is instant and attracts little merchant fee."}</Text>

        {fundType == "auto" || fundType=="manual" ? (
  
    <Flex mb="3em" gap="2" align="center" flexFlow="row">
<Input onChange={(e)=>setAmount(e.target.value)} type="number" size="md" placeholder="Enter amount" />

   <Button isLoading={loading} onClick={fundType=="auto" ? fundMe : notify} colorScheme="teal">{fundType=="manual"?"Notify Us" : "Fund"}</Button>
  </Flex>
    ) : ""}
      </Flex>
      
    <NavbarBottom/>
    </>
  )

  
}

export default Fund;
