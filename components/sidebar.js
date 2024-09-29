import {
DrawerBody,VStack,Text,Flex,Button,IconButton} from "@chakra-ui/react";

import {FaXTwitter,FaFacebookF,FaInstagram,FaLinkedin} from "react-icons/fa6"
import Link from "next/link";
import {useRouter} from "next/router";

const Sidebar = () =>{


//const {isOpen , onClose , onOpen} = useDisclosure();

  const router = useRouter();
return(

  
<Flex minH="100vh"
  flexFlow="column"
  gap="4"
  align="flex-start"
  justify="flex-start"
  bg="white"
  p="6"
  width={{lg:"250px",xl:"350px"}}
  position="fixed"
  left="0"
  top="0"
  zIndex="10"
  shadow="lg"
  mt="5.5em"
  >


<Link color={router.pathname=="/dashboard" && "teal"} href="/dashboard">Home</Link>
  <Link color={router.pathname=="/data" && "teal"} href="/data" >Buy data</Link>
  <Link color={router.pathname=="/airtime" && "teal"} href="/airtime">Buy Airtime</Link>
  <Link color={router.pathname=="/hire-professionals" && "teal"} href="/hire-professionals">Hire Us</Link>
  <Link color={router.pathname=="/airtime-to-cash" && "teal"} href="/airtime-to-cash">Airtime to cash</Link>
  <Link color={router.pathname=="/refer" && "teal"} href="/refer">Refer</Link>
  <Link color={router.pathname=="/bulkSMS" && "teal"} href="/bulkSMS">Bulk SMS</Link>
  <Link color={router.pathname=="/fund" && "teal"} href="/fund">Fund Wallet</Link>
  <Link color={router.pathname=="/about" && "teal"} href="/about">About Us</Link>
  
  <Button w="full"  size="lg" colorScheme="red">Logout</Button>


  <Flex align="center" justify="center" gap="4">
  
  <IconButton size="md" icon={<FaXTwitter/>}/>
    
    <IconButton size="md" icon={<FaFacebookF/>}/>

    <IconButton size="md" icon={<FaInstagram/>}/>

    <IconButton size="md" icon={<FaLinkedin/>}/>
    
  </Flex>

  
</Flex>
  
  
);
  
}
export default Sidebar;
