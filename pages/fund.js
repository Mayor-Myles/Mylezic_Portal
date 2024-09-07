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


const Fund = () => {


  const [fundType,setFundType] = useState(null);

const [merchant,setMerchant] = useRecoilState(merchantState);

  const [user,setUser] = useRecoilState(userData);

  const [loading,setLoading] = useState(false);

  const [amount , setAmount]  =  useState(null);
    
const pk = merchant.paystack.pk;

  
    
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

  
  
  useEffect(()=>{
//get public key
    
    
  },[])

  const fundMe = () => {

  
    setLoading(true);

    const charge =  getCharge(amount);
    
    var handler = PaystackPop.setup({
        key: pk, // Replace with your public key
        email: user.email, // Replace with the customer's email
        amount: amount * 100 + Number(charge * 100), // Replace with the amount (in kobo, so 5000 is ₦50)
        currency: 'NGN', // Use 'NGN' for Nigerian Naira
        ref: genReference, // Replace with a unique reference for the transaction
        callback: function(response) {

          
            // This function is called when the payment is successful
          setLoading(false);
          
            console.log('Payment successful. Reference:', response.reference);

        setUser(prev=>({...prev,balance:Number(prev.balance) + Number(amount)}));
            toast({
              position:"top",
              title:"Congrats",
              description:"Your account has been funded successfully!",
              isClosable:true,
              status:"success",
              duration:5000,
            })
            // You can send the response to your server here
        },
        onClose: function() {
            // This function is called when the customer closes the payment window

          setLoading(false);
          
           toast ({

             status:"info",
             title:"Payment cancelled",
             duration:5000,
             isClosable:true,
             description:"You have cancelled the payment",
             position:"top"
           });
        }
    });

    handler.openIframe(); // Open the payment modal
  }
  

  return(

    <>
      <Script src="https://js.paystack.co/v1/inline.js" />
      
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
    <option value="manual">Manual Funding</option>
    </Select>  

<Text shadow="md" bg="teal.200" p="5" color="white" borderRadius="0.6em">{fundType == "manual" ? "Transfer to 9060421393(Opay) - Babalola Mayowa Abel. After successful transfer, type in the amount sent below and click on 'Notify Us'" : "Choose preffered funding type. Manual deposits is free but takesfew minutes to reflect in your wallet. Auto funding attracts a merchant fee."}</Text>

        {fundType == "auto" || fundType=="manual" ? (
  
    <Flex mb="3em" gap="2" align="center" flexFlow="row">
<Input onChange={(e)=>setAmount(e.target.value)} type="number" size="md" placeholder="Enter amount" value={amount} />

   <Button isLoading={loading} onClick={fundType=="auto" && fundMe} colorScheme="teal">{fundType=="manual"?"Notify Us" : "Fund"}</Button>
  </Flex>
    ) : ""}
      </Flex>
      
    <NavbarBottom/>
    </>
  )

  
}

export default Fund;