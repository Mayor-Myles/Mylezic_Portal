import React,{useState,useEffect} from 'react';
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Input,
  Link,
  Text,
  Image,
  InputGroup,
  IconButton,
  useBreakpointValue,
  Grid
} from '@chakra-ui/react';
import {FaEye,FaEyeSlash } from 'react-icons/fa';

import Head from "next/head";

import {useRouter} from "next/router";


const Register = () => {

const [passwordVisible,setPasswordVisible] = useState(false);

  const toggleVisibility = () => {

    setPasswordVisible(!passwordVisible);
  }

 // const bp = useBreakpoint();
 // alert(bp)

  const margin = useBreakpointValue({base:"0 1em",md:"0 12em",xl:"0 21em"})


const router = useRouter();
  
  return (
    <>
      <Head>

       <meta charset="utf-8"/>

    <meta name="viewport" content="width=device-width, initial-scale=1"/>

      <title>Register | Mylezic Investors</title>

      </Head>


    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      flexFlow="column wrap" 
      p="1em"
      maxW={{sm:'27em', base: '35em', md: '27em', lg: '25em', xl: '28em', '2xl':'30em', }} mx={{base:"2em",sm:'auto',md:"auto"}}

    >

      <Flex justify="center" align="center" flexFlow="column">

<Text fontSize="1.2em" fontWeight="bold">Invest with Mylezic</Text>

        <Text mt="0">Have account? <Link  onClick={()=>router.push("/investors?path=login")} color="brown">Login</Link></Text>
      </Flex>


      <Flex align="center" justify="center" flexDirection="column" mt="3em" w="full" >

<InputGroup mb="1.3em">

      <Input type="email" placeholder="Email address" outline="none" bg="#F5F5F5" p="1.2em" border="0px" borderRadius="0.5em" size="lg" w="full" fontSize="14px"/>


      </InputGroup>



      <InputGroup mb="1.3em">

      <Input type="number" placeholder="Phone number" outline="none" bg="#F5F5F5" p="1.2em" border="0px" borderRadius="0.5em" size="lg" w="full" fontSize="14px"/>


      </InputGroup>

<InputGroup mb="1.3em">

      <Input type="text" placeholder="Fullname" outline="none" bg="#F5F5F5" p="1.2em" border="0px" borderRadius="0.5em" size="lg" w="full" fontSize="14px"/>


      </InputGroup>

<InputGroup mb="1.3em">

      <Input type="Number" placeholder="Account Number" outline="none" bg="#F5F5F5" p="1.2em" border="0px" borderRadius="0.5em" size="lg" w="full" fontSize="14px"/>


      </InputGroup>


        <InputGroup mb="1.3em">

        <Input type="text" placeholder="Bank Name" outline="none" bg="#F5F5F5" p="1.2em" border="0px" borderRadius="0.5em" size="lg" w="full" fontSize="14px"/>


        </InputGroup>

        {/*
        <InputGroup mb="1.3em">

      <Input type={!passwordVisible ? "password" : "text"} placeholder="Create password" outline="none" bg="#F5F5F5" p="1.2em" border="0px" borderRadius="0.5em" size="lg" w="full" fontSize="14px"/>

     <InputRightElement onClick={toggleVisibility}>

       {passwordVisible ? <FaEye color="grey"/> :
     <FaEyeSlash color="grey"/> }

     </InputRightElement> 
      </InputGroup>

*/}

      </Flex>


<Flex w="full" mt="1em">

<Button size="md" color="white" bg="brown" w="full">Sign up</Button>
</Flex>


<Grid  templateColumns="repeat(3,1fr)" mt="1em" gap="1em" alignItems="center" justifyContent="center">


<Box w="full" h="0.5em" bg="#F5F5F5"></Box>



  <Box><Text fontSize="12px">or sign up with</Text></Box>



  <Box w="full" h="0.5em" bg="#F5F5F5"></Box>

</Grid>


<Grid templateColumns="repeat(3,1fr)" mt="1em" gap="1.5em" alignItems="center" justifyContent="center">

<IconButton p="1em" variant="outline">

<Image src="/google.png" h="1.5em" w="1.5em" objectFit="cover" alt="google icon"/>

</IconButton>

<IconButton p="1em" variant="outline">

<Image src="/x.png" h="2em" w="2em" objectFit="cover" alt="x Twitter icon"/>

</IconButton>

<IconButton p="1em" variant="outline">

<Image src="/fb.png" h="2.3em" w="2.3em" objectFit="cover" alt="facebook icon"/>

</IconButton>
</Grid>



      <Flex mt="3em" align="center" justify="center" >
<Text fontWeight="bold">MylesNG</Text>
      </Flex>

    </Flex>
      </>
  );
};

export default Register;
