import React,{useState,useRef} from "react";
import {
  Box,
  Button,
  Input,
  Flex,
  Textarea,
  Tag,
  Text,
  useToast,
  IconButton
} from "@chakra-ui/react";

import NavbarTop from "../components/topNavbar";
import NavbarBottom from "../components/bottomNavbar";
import Sidebar from "../components/sidebar";
import Head from "next/head";
import {csrfState,userData} from "../states/recoil";
import {useRecoilState} from "recoil";
import axios from "axios";





const BulkSMS = () => {
  

const toast = useToast();
  
const [numbers,setNumbers] = useState([]);

const inputRef = useRef(0);
  
const addNumber = (number) => {

  if(number == ""){

    toast({
      description:"Please enter a valid number. e.g 08123456789 oe +2348123456789",
      duration:5000,
      isClosable: true,
    })
  }
    setNumbers([number,...numbers]);

  toast.closeAll();

  toast({
position:"top",
    isClosable:true,
    title:"Number Added",
    description:"Number has been added successfully. Tap on the number to remove it",
    status:"success",
    duration:2000,
    
    
  });
  
}

const [csrf,setCsrf] = useRecoilState(csrfState);

  const [btnLoading,setBtnLoading] =  useState(false);

  const [message,setMessage] = useState("");
  
  const [sender,setSender] = useState("Mylezic");
  
  const[user,setUser] = useState(userData);
  
  const charPerPage = 155;

    const totalChars = message.length;

    const page = Math.ceil(totalChars/charPerPage);

 const totalCost = page * 3 * numbers.length; 

const removeNumber = (toRemove) =>{

 const newArray = numbers.filter((number) => number !== toRemove); 

  setNumbers(newArray);
}
  
  
  const submitForm = () => {

setBtnLoading(true)

const numString = numbers.join(",");
    
const data = {

  message:message,
  phoneNumbers:numString,
  csrf:csrf,
  sender:sender,
} 

    //const fields = Object.values(data).every(Boolean);

    if (!numString || !message || !sender) {
        setBtnLoading(false);
        toast.closeAll();
        toast({
            title: "Oops",
            description: "Please enter the necessary information",
            status: "info",
            duration: 5000,
            isClosable: true,
            position: "top",
        });
        return;
    }



    const url = "https://cbrbakery.com.ng/api/bulkSMS";

    axios.post(url, data, {
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then(response => {
        const { status, message, token, userData } = response.data;
        setCsrf(token);
        setBtnLoading(false);

        toast.closeAll(); // Close any existing toasts

        if (status === "success") {
            setUser(userData);

            toast({
                title: "Congrats 🎉",
                description: "Your message has been successfully sent to all recipients. Thanks for choosing us.",
                status: "success",
                duration: 7000,
                isClosable: true,
                position: "top",
            });

        } else {
            toast({
                title: "Error",
                description: message,
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "top",
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
};



   
  
  
  return (

    <>

     <Head>
  {/* Title */}
  <title>Send Bulk SMS with Customized Sender Name | Mylezic - Targeted Messaging Service</title>

  {/* Meta Description */}
  <meta 
    name="description" 
    content="Send bulk SMS to targeted recipients with a customized sender name using Mylezic. Reliable, fast, and cost-effective messaging service to help you reach your audience." 
  />

  {/* Keywords */}
  <meta 
    name="keywords" 
    content="bulk SMS, targeted messaging, send SMS, customized sender name, SMS service, bulk messaging, Mylezic" 
  />

  {/* Canonical URL */}
  <link rel="canonical" href="https://mylezic.com.ng/bulk_sms" />

  {/* Open Graph Tags */}
  <meta property="og:title" content="Send Bulk SMS with Customized Sender Name | Mylezic - Targeted Messaging Service" />
  <meta 
    property="og:description" 
    content="Reach your target audience with Mylezic's bulk SMS service. Send messages with a personalized sender name quickly and reliably." 
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://mylezic.com.ng/bulkSMS" />
  <meta property="og:image" content="/logo.png" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Send Bulk SMS with Customized Sender Name | Mylezic - Targeted Messaging Service" />
  <meta 
    name="twitter:description" 
    content="Send bulk SMS to your audience with ease. Customize the sender name and reach people effectively with Mylezic’s SMS service." 
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
  <meta name="application-name" content="Mylezic Bulk SMS Service" />

  {/* Structured Data for Search Engines */}
  <script type="application/ld+json">
    {`
      {
        "@context": "http://schema.org",
        "@type": "Service",
        "name": "Bulk SMS Service",
        "description": "Mylezic provides a fast and reliable platform to send bulk SMS with a customized sender name to targeted recipients. Perfect for marketing, alerts, and announcements.",
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
        "url": "https://mylezic.com.ng/bulkSMS"
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
  
      
      <Flex minH="100vh" align="center" justify="center" flexFlow="column" maxW={{sm:'37em', base: '37em', md: '27em', lg: '28em', xl: '28em', '2xl':'30em', }} mx={{base:"2em",sm:'3em',md:"auto"}}>

<Box maxH={["8.5em","10em", "10em"]} justify="center" align="center"  overflowY="scroll"   css={{
    '&::-webkit-scrollbar': {
      width: '4px',
    },
    '&::-webkit-scrollbar-track': {
      width: '6px',
    },
    '&::-webkit-scrollbar-thumb': {
      background: 'grey',
      borderRadius: '24px',
    },
  }} shadow="lg" borderRadius="1em" my="2" p="3"  >
  {
  numbers.length < 1 ? (
  
  <Text>Enter the recipients phone number e.g <Text as="span" fontWeight="bold">08145273563</Text> and click on add. You can add several numbers. Compose your message , enter Sender name then click on send.</Text>)

:(
  <Box>

  <Text color="lightgrey">Click on "x" beside a number to remove the number.</Text> 

    {numbers && numbers.map((item,index)=>

    <Tag key={index} fontWeight="bold" fontSize="11px" colorScheme="teal" m="1">{item} <Button m="1" size="xs" colorScheme="red" color="white" onClick={()=>removeNumber(item)} ml="2">x</Button> </Tag>
    
                )}
  

</Box>

  )}
  
</Box>

      
    <Flex w="full" gap="1.5" flexFlow="column" justify="center" align="center" p={5}  borderRadius="lg">

      <Flex gap="1">

             
            <Input ref={inputRef} border="1px solid teal" type="number" placeholder="Phone number" size="md" />
          
        
      <Button onClick={()=>addNumber(inputRef.current.value)} colorScheme="teal">Add</Button>

        
      </Flex>
      
            <Flex mt={2} align="center">
              
                
            </Flex>
          
            
      <Textarea onChange={(e)=>setMessage(e.target.value)} h="7.8em" border="1px solid teal"  placeholder="Type your message..." size="md" mb={2} />
      
      <Text fontSize="sm" color="gray.500" mb={2}>
      {page} page(s) | ₦3 per page | Total cost: <Text color="teal" as="span" fontWeight="bold">₦{totalCost}</Text>
      </Text>

<Input onChange={(e)=>setSender(e.target.value)} type="text" placeholder="Sender Name e.g Foodco" size="md" border="1px solid teal" />

      
      <Flex w="full" justify="center">

        <Button isLoading={btnLoading} onClick={submitForm} w="full" colorScheme="teal">Send</Button>
        
      </Flex>
    </Flex>
        
</Flex>
<NavbarBottom/>
    </>
  );
};

export default BulkSMS;
