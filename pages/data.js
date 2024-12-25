import NavbarTop from "../components/topNavbar";
import NavbarBottom from "../components/bottomNavbar";
import Wallet from "../components/wallet";
import {Box,Flex,Text,Grid,IconButton,Button,Image,Input,Modal,ModalContent,ModalFooter,ModalBody,ModalOverlay,ModalHeader,Spinner,useToast} from "@chakra-ui/react";
import {useState,useEffect} from "react";
import Sidebar from "../components/sidebar";
import Head from "next/head";
import {useRecoilState} from "recoil";
import {dataPlansState,csrfState,userData} from "../states/recoil";
import axios from "axios";
import useUpdate from "../components/Update";






const Data = () => {

const [network,setNetwork] = useState("mtn");

const [plan,setPlan] = useRecoilState(dataPlansState);
  
const[selected,setSelected] = useState(null);

  const [openModal, setOpenModal]
  = useState(false);

  const[planId,setPlanId] = useState(null);

  const [csrf,setCsrf] = useRecoilState(csrfState);

  const [user,setUser] = useRecoilState(userData);

  const [btnLoading,setBtnLoading] = useState(false);
  
  const [phoneNumber,setPhoneNumber] = useState(null);
const update = useUpdate();
  const [planName,setPlanName] = useState(null);

  const select = (index,planName) => {

    setSelected(index);

    setPlanName(planName);
    
    setOpenModal(true);
    
  }

  const toast = useToast();


  
if(!plan && !csrf){

  return(

    <Flex align="center" justify="center" minH="100vh">
    
    <Spinner size="xl" color="teal" />
    
    </Flex>
  )
}


  const submitForm = () => {
  setBtnLoading(true);

  const data = {
    network: network,
    planId: planId,
    phoneNumber: phoneNumber,
    csrf: csrf,
  };

  //const fields = Object.values(data).every(Boolean);
  if (!phoneNumber ||  !planName) {
    toast.closeAll();
    setBtnLoading(false);

    toast({
      title: "Info",
      description: "Please pick a plan and enter recipient phone number ",
      position: "top",
      isClosable: true,
      status: "info",
      duration: 5000,
    });

    setBtnLoading(false);
    return;
  }

  const url = "https://mylezic.com.ng/api/buyData";

  // Using axios for the POST request
  axios.post(url, data ,{
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then((res) => {
      setCsrf(res.data.token);
      setBtnLoading(false);
      update();
      if (res.data.status === "success") {
        setOpenModal(false);
      //  setUser(res.data.userData);

        toast({
          title: "Congrats 🎉",
          description: "Your data plan purchase is successful. You will receive an SMS shortly. Thanks for trusting us!!!",
          status: "success",
          duration: 6000,
          isClosable: true,
          position:'top',
        });
      } else {
        toast({
          title: "Error",
          description: res.data.message,
          status: "error",
          duration: 5000,
          isClosable: true,
          position: 'top',
        });
      }
    })
    .catch((error) => {
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
  <title>Buy Affordable Data Plans | Mylezic - Fast and Reliable Data Service</title>

  {/* Meta Description */}
  <meta 
    name="description" 
    content="Buy affordable data plans with Mylezic. Get fast, reliable, and cost-effective data for all networks. Convenient and secure transactions for all your data needs." 
  />

  {/* Keywords */}
  <meta 
    name="keywords" 
    content="buy data, affordable data plans, cheap data, fast data service, data for all networks, Mylezic" 
  />

  {/* Canonical URL */}
  <link rel="canonical" href="https://mylezic.com.ng/data" />

  {/* Open Graph Tags */}
  <meta property="og:title" content="Buy Affordable Data Plans | Mylezic - Fast and Reliable Data Service" />
  <meta 
    property="og:description" 
    content="Get the best deals on data plans with Mylezic. Affordable and reliable data for all networks with quick, secure transactions." 
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://mylezic.com.ng/data" />
  <meta property="og:image" content="/logo.png" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Buy Affordable Data Plans | Mylezic - Fast and Reliable Data Service" />
  <meta 
    name="twitter:description" 
    content="Buy data at affordable rates with Mylezic. Enjoy fast and reliable service for all your data needs across all networks." 
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
  <meta name="application-name" content="Mylezic Data Service" />

  {/* Structured Data for Search Engines */}
  <script type="application/ld+json">
    {`
      {
        "@context": "http://schema.org",
        "@type": "Service",
        "name": "Data Purchase Service",
        "description": "Mylezic offers affordable and reliable data plans for all networks. Quick, secure transactions to keep you connected with ease.",
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
        "url": "https://mylezic.com.ng/data"
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


<Box display={{sm:"none",base:"none",md:"none",lg:"flex",xl:"flex"}}>

<Sidebar />
  
</Box>
  
         <Flex minH="100vh" align="center" justify="center" flexFlow="column" maxW={{sm:'27em', base: '35em', md: '27em', lg: '25em', xl: '28em', '2xl':'30em', }} mx={{base:"2em",sm:'auto',md:"auto"}} gap="6" mt="2.5em">


   <Wallet/>
      
<Flex  align="center" justify="center" gap="4">

  <IconButton onClick={()=>setNetwork("mtn")} shadow="lg" border={network=="mtn" && "1px solid teal"}>

<Image alt="mtn" borderRadius="full" w="30px" h="30px" objectFit="contain" src="mtn.png" />
  </IconButton>
  
<IconButton onClick={()=>setNetwork("airtel")} shadow="lg" border={network=="airtel" && "1px solid teal"}>

<Image alt="airtel" borderRadius="full" w="30px" h="30px" objectFit="cover" src="airtel.png" />
  </IconButton>

  
<IconButton onClick={()=>setNetwork("glo")} shadow="lg" border={network=="glo" && "1px solid teal"}>

<Image alt="glo" borderRadius="full" w="30px" h="30px" objectFit="cover" src="glo.png" />
  </IconButton>

  <IconButton onClick={()=>setNetwork("9mobile")} shadow="lg" border={network=="9mobile" && "1px solid teal"}>

<Image alt="9mobile" borderRadius="full" w="30px" h="30px" objectFit="cover" src="9mobile.png" />
  </IconButton>

</Flex>

           

             
           
        
  <Grid  gap="6"  templateColumns={{base:"repeat(3,1fr)"}}  mb="5em">

    {plan && plan[network].map((item,index)=>
   

      <Box h={{base:"95px",md:"100px"}} w={{base:"95px",md:"100px"}} key={index} onClick={()=>{select(index,item.planName); setPlanId(item.planId)}} shadow="lg" borderRadius="0.7em"  p="4" align="center" justify="center" bg={selected === index ? "teal.300" : "white"}>

        <Image alt="network" borderRadius="100%" w="25px" h="25px" src={`${network}.png`} objectFit="contain" />

        <Text fontSize="14px" color={selected===index ? "white" : "gray.700"} m="1"  fontWeight ="bold">{item.planName}</Text>

      
      <Text color={selected === index ? "teal" : "grey"} fontSize="sm" fontWeight="400">₦{item.price} </Text>
        
        
      </Box>
    
        
  
)}
    
    
    
  </Grid>
      


           
           
      
      <Modal  isOpen={openModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color="teal"> {network.toUpperCase()} {planName}  data</ModalHeader>
          
          <ModalBody>

            <Flex align="center" justify="center" gap="1" flexFlow="column wrap" mx="2em">
              
            <Text fontWeight="bold" mb="1em">
              Enter your Phone number
            </Text>

<Input onChange={(e)=>setPhoneNumber(e.target.value)} placeholder="Phone number" type="number" variant="flushed" _placeholder={{ color: 'gray.300' }}
  _focus={{ borderBottom: '1px solid teal', boxShadow: 'sm' }}  />
                        
<Button isLoading={btnLoading}  onClick={submitForm} w="full" colorScheme="teal" mt="1em" size="md">Buy</Button>

              </Flex>
            
          </ModalBody>

          <ModalFooter>
            <Button size="sm" bg='grey' color="white" mr={3} onClick={()=>setOpenModal(false)}>
              Close
            </Button>
            
          </ModalFooter>
        </ModalContent>
      </Modal>
    

  </Flex>
      
      <NavbarBottom/>
    </>
    
  );
  
}



export default Data;
