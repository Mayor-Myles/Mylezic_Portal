import React,{useState,useEffect} from 'react';
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Input,
  Text,
  Image,
  InputGroup,
InputRightElement,
  IconButton,
  useToast,
  Grid
} from '@chakra-ui/react';
import {FaEye,FaEyeSlash } from 'react-icons/fa';

import Head from "next/head";
import Link from "next/link";


const ResetPassword = () => {

const [passwordVisible,setPasswordVisible] = useState(false);

  const toggleVisibility = () => {

    setPasswordVisible(!passwordVisible);
  }

const [phoneNumber,setPhoneNumber] = useState("");

  const data = {

"phoneNumber": phoneNumber
    
  }

  const [loading,setLoading] = useState(false)


  const toast = useToast();
  
const submitForm = () => {
    
    if (!data.phoneNumber) {
      
      toast({
        position: "top",
        title: "Warning",
        description: "Please enter the phone number associated with your account",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    setLoading(true);

    const url = "https://cbrbakery.com.ng/api/resetPassword";

    toast.closeAll();

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(res => {
        if (!res.ok) {
          setLoading(false);
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then(data => {
        
        setLoading(false);
        if (data.status === "success") {
       
  toast({
            title: "Error",
            description: data.message,
            status: "success",
            duration: 7000,
            isClosable: true,
            position:'top',
          });
        
        } else {
          toast({
            title: "Error",
            description: data.message,
            status: "error",
            duration: 7000,
            isClosable: true,
            position:'top',
          });
        }
      })
      .catch(error => {
        toast({
          title: "Error",
          description: "Your request could not be processed. " + error.message,
          status: "error",
          duration: 7000,
          isClosable: true,
          position: "top",
        });
        setLoading(false);
    
      });
    
  };
  



  

  
  return (
    <>
      <Head>
        
       <meta charset="utf-8"/>
         
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
         
      <title>Reset Password | Mylezic</title>
        
      </Head>


    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      flexFlow="column wrap" 
      p="1em"
      maxW={{sm:'27em', base: '35em', md: '27em', lg: '25em', xl: '28em', '2xl':'30em', }} mx={{base:"2em",sm:'auto',md:"auto"}}

      
      
    >

      <Flex userSelect="none" userSelect="none" justify="center" align="center" flexFlow="column">
        
<Text fontSize="1.2em" fontWeight="bold">Recover your account</Text>

        <Text mt="0">Have  account? <Link href="/login" color="teal"><Box color="teal" as="span">Login</Box></Link></Text>
      </Flex>


      <Flex align="center" justify="center" flexDirection="column" mt="3em" w="full" >
      
      <InputGroup mb="1.3em">
      
      <Input onChange={(e)=>setPhoneNumber(e.target.value)} type="text" placeholder="Phone number" outline="none" bg="#F5F5F5" p="1.2em" border="0px" borderRadius="0.5em" size="lg" w="full" fontSize="14px"/>
      
      
      </InputGroup>

        
      </Flex>


    


<Flex w="full" mt="1em">

<Button onClick={submitForm} isLoading={loading} size="md" color="white" colorScheme="teal" w="full">Reset Password</Button>
</Flex>


      
      <Flex mt="3em" align="center" justify="center" >
<Text fontWeight="bold">MylesNG</Text>
      </Flex>
      
    </Flex>
      </>
  );
};

export default ResetPassword;
