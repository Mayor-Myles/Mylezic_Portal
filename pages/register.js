import React,{useState,useEffect} from 'react';
import {
  Box,
  Button,
  Flex,
  Input,
  Text,
  Image,
  InputGroup,
InputRightElement,
  IconButton,
  useToast,
  Grid,
  Spinner ,
  Link 
} from '@chakra-ui/react';
import {FaEye,FaEyeSlash } from 'react-icons/fa';
import {useRouter} from "next/router";
import Head from "next/head";
import {csrfState} from "../states/recoil";
import {useRecoilState} from "recoil";








const Register = () => {

const [passwordVisible,setPasswordVisible] = useState(false);

  const toggleVisibility = () => {

    setPasswordVisible(!passwordVisible);
  }

  const [loading,setLoading] = useState(false);
  
  const toast = useToast();
  
  const[csrf,setCsrf] = useRecoilState(csrfState);
  
  const [formData,setFormData] = useState({

    fullname:"",
    email:"",
    password:"",
    phoneNumber:"",
    refferal:"",
    "csrf":csrf
    
  });
  
const router = useRouter();
  
  const submitForm = () => {
    if (formData.fullname === "" || formData.password === "" ||  formData.email === "" || formData.phoneNumber === "") {
      toast({
        position: "top",
        title: "Warning",
        description: "Please fill in the important fields!!!. Refferal is not compulsory",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    setLoading(true);

    const url = "https://cbrbakery.42web.io/app/register/";

    toast.closeAll();

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
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
        setCsrf(data.token);
        if (data.status === "success") {

   setUserData(data.userData);

          toast({
title:"Congrats 🎉 ",
            description:"You have successfully registered. Please click on login to sign in to your account ",
            duration:7000,
            position:"top",
            isClosable:true,
            
          })
          
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
        setLoading(false);
      });
  };
  
  useEffect(()=>{


  const url = "https://cbrbakery.com.ng/api?action=welcome";

  fetch(url)

        .then(res => {
          if (!res.ok) {

            throw new Error(res.statusText);
          }
          return res.json();
        })
        .then(data => {

          if(data) {

     setCsrf(data.token);

          } else {
            toast({
              title: "Error",
              description:"Page is expired. Please reload the page.",
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

        });




  })



  if(!csrf){

return(

  <Flex align="center" justify="center" minH="100vh" >
  
  <Spinner size="xl" color="teal"/>
    
  </Flex>
)
    
  }

  
  
  return (
    <>
      <Head>
        
        {/* Title */}
        <title>Register Your Account | Mylezic - Join Us Today</title>

        {/* Meta Description */}
        <meta 
          name="description" 
          content="Create your Mylezic account today and unlock access to our services. Register quickly and securely to start enjoying the best deals and features we offer." 
        />

        {/* Keywords */}
        <meta 
          name="keywords" 
          content="register, sign up, create account, Mylezic registration, join Mylezic, new account" 
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://mylezic.com.ng/register" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Register Your Account | Mylezic - Join Us Today" />
        <meta 
          property="og:description" 
          content="Sign up for a Mylezic account and gain access to exclusive features and services. Join our platform today and start experiencing more." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mylezic.com.ng/register" />
        <meta property="og:image" content="/logo.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Register Your Account | Mylezic - Join Us Today" />
        <meta 
          name="twitter:description" 
          content="Register for a Mylezic account now and enjoy quick access to our services and best offers. Easy and secure registration process." 
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
        <meta name="application-name" content="Mylezic Registration Portal" />

        {/* Structured Data for Search Engines */}
        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "WebPage",
              "name": "Register Page",
              "description": "Sign up for a Mylezic account to access our exclusive services and offers. Create your account easily and securely.",
              "provider": {
                "@type": "Organization",
                "name": "Mylezic",
                "url": "https://mylezic.com.ng"
              },
              "image": "https://mylezic.com.ng/logo.png",
              "url": "https://mylezic.com.ng/register"
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

    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      flexFlow="column wrap" 
      p="1em"
      maxW={{sm:'27em', base: '35em', md: '27em', lg: '25em', xl: '28em', '2xl':'30em', }} mx={{base:"2em",sm:'auto',md:"auto"}}

      
      
    >

      <Flex justify="center" align="center" flexFlow="column">
        
<Text fontSize="1.2em" fontWeight="bold">Create an account with us</Text>

        <Text mt="0">Have account? <Link onClick={()=>router.push("/login")} color="teal">Login</Link></Text>
      </Flex>


      <Flex align="center" justify="center" flexDirection="column" mt="3em" w="full" >
      
<InputGroup mb="1.3em">
      
      <Input onChange={(e)=>setFormData((prev)=>({...prev,['email']:e.target.value}))} type="email" placeholder="Email address" outline="none" bg="#F5F5F5" p="1.2em" border="0px" borderRadius="0.5em" size="lg" w="full" fontSize="14px"/>
      
      
      </InputGroup>



      <InputGroup mb="1.3em">
      
      <Input onChange={(e)=>setFormData((prev)=>({...prev,['phoneNumber']:e.target.value}))} type="number" placeholder="Phone number" outline="none" bg="#F5F5F5" p="1.2em" border="0px" borderRadius="0.5em" size="lg" w="full" fontSize="14px"/>
      
      
      </InputGroup>

<InputGroup mb="1.3em">
      
      <Input onChange={(e)=>setFormData((prev)=>({...prev,['fullname']:e.target.value}))} type="text" placeholder="Fullname" outline="none" bg="#F5F5F5" p="1.2em" border="0px" borderRadius="0.5em" size="lg" w="full" fontSize="14px"/>
      
      
      </InputGroup>

        
        <InputGroup mb="1.3em">
      
      <Input onChange={(e)=>setFormData((prev)=>({...prev,['password']:e.target.value}))} type={!passwordVisible ? "password" : "text"} placeholder="Create password" outline="none" bg="#F5F5F5" p="1.2em" border="0px" borderRadius="0.5em" size="lg" w="full" fontSize="14px"/>
      
     <InputRightElement onClick={toggleVisibility}>
       
       {passwordVisible ? <FaEye color="grey"/> :
     <FaEyeSlash color="grey"/> }
    
     </InputRightElement> 
      </InputGroup>
<InputGroup mb="1.3em">
      
      <Input onChange={(e)=>setFormData((prev)=>({...prev,['refferal']:e.target.value}))} type="text" placeholder="Refferal Code (optional)" outline="none" bg="#F5F5F5" p="1.2em" border="0px" borderRadius="0.5em" size="lg" w="full" fontSize="14px"/>
      
      
      </InputGroup>

        
      </Flex>
      

<Flex w="full" mt="1em">

<Button onClick={submitForm} isLoading={loading} size="md" colorScheme="teal" w="full">Sign up</Button>
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
