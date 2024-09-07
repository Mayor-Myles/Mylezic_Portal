import {
DrawerBody,VStack,Text,Flex,Button,IconButton} from "@chakra-ui/react";

import {FaXTwitter,FaFacebookF,FaInstagram,FaLinkedin} from "react-icons/fa6"
import Link from "next/link";


const Sidebar = () =>{


//const {isOpen , onClose , onOpen} = useDisclosure();

  
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


<Link href="/dashboard">Home</Link>
  <Link href="/data" >Buy data</Link>
  <Link href="/airtime">Buy Airtime</Link>
  <Link href="/hire">Hire Us</Link>
  <Link href="/airtime_to_cash">Airtime to cash</Link>
  <Link href="/refer">Refer</Link>
  <Link href="/bulkSMS">Bulk SMS</Link>
  <Link href="/fund">Fund Wallet</Link>
  <Link href="/about">About Us</Link>
  
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