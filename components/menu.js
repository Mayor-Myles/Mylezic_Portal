import 
{Box,Flex,Grid,IconButton,Button,Text,} from "@chakra-ui/react";

import {FaWifi,FaRegMessage} from "react-icons/fa6";
import {GoPersonAdd,GoPeople} from "react-icons/go";
import {FiPhoneCall} from "react-icons/fi";
import {MdCurrencyExchange,MdComputer} from "react-icons/md";
import {LuWallet} from "react-icons/lu";
import {useRouter} from "next/router";

const Menu = () => {

const router = useRouter();

return(
<>

  {/*
  <Box mx="1.3em" mt="1em">
  
  <Text fontSize="1em" fontWeight="bold">Services</Text>  
  
  </Box>

  */}


  
<Box mt="1em" bg="wheatsmoke" p="1" borderRadius="md" w="full">

  <Grid gap="2" align="center" templateColumns="repeat(4,1fr)">

    <Flex onClick={()=>router.push('/data')}  align="center" flexFlow="column wrap">
      
<IconButton  bg="white" p="2" icon={<FaWifi color="teal" fontSize="1.5em"/>}  size="lg" borderRadius="0.5em" shadow="md" />

      <Text fontSize="sm" fontWeight="400" mt="2">Data</Text>
      </Flex>
  

    
    
      <Flex onClick={()=>router.push('/hire-professionals')} align="center" flexFlow="column wrap">
        
<IconButton bg="white" p="2" icon={<GoPersonAdd color="teal" fontSize="1.5em"/>}  size="lg" borderRadius="0.5em" shadow="md" />

      <Text fontSize="sm" fontWeight="400" mt="2">Hire Us</Text>
        
  </Flex>

<Flex onClick={()=>router.push('/airtime')} align="center" flexFlow="column wrap">
        
<IconButton bg="white" p="2" icon={<FiPhoneCall color="teal" fontSize="1.5em"/>}  size="lg" borderRadius="0.5em" shadow="md" />

  <Text fontSize="sm" fontWeight="400" mt="2">Airtime</Text>
  </Flex>


    <Flex onClick={()=>router.push('/bulkSMS')} align="center" flexFlow="column wrap">

    <IconButton bg="white" p="2" icon={<FaRegMessage color="teal" fontSize="1.5em"/>}  size="lg" borderRadius="0.5em" shadow="md" />

      <Text fontSize="sm" fontWeight="400" mt="2">Bulk SMS</Text>
    </Flex>

    <Flex onClick={()=>router.push('/airtime-to-cash')} align="center" flexFlow="column wrap">

    <IconButton bg="white" p="2" icon={<MdCurrencyExchange color="teal" fontSize="1.5em"/>}  size="lg" borderRadius="0.5em" shadow="md" />

      <Text fontSize="sm" fontWeight="400" mt="2">Airtime2Cash</Text>
    </Flex>
    
    <Flex onClick={()=>router.push("/cable")} align="center" flexFlow="column wrap">

    <IconButton bg="white" p="2" icon={<MdComputer color="teal" fontSize="1.5em"/>}  size="lg" borderRadius="0.5em" shadow="md" />

      <Text fontSize="sm" fontWeight="400" mt="2">Cable</Text>
    </Flex>


    <Flex onClick={()=>router.push('/refer')} align="center" flexFlow="column wrap">

    <IconButton bg="white" p="2" icon={<GoPeople color="teal" fontSize="1.5em"/>}  size="lg" borderRadius="0.5em" shadow="md" />

      <Text fontSize="sm" fontWeight="400" mt="2">Refer</Text>
    </Flex>


    <Flex onClick={()=>router.push('/fund')} align="center" flexFlow="column wrap">

    <IconButton bg="white" p="2" icon={<LuWallet color="teal" fontSize="1.5em"/>}  size="lg" borderRadius="0.5em" shadow="md" />

      <Text fontSize="sm" fontWeight="400" mt="2">Fund</Text>
    </Flex>
    
  </Grid>

  </Box>
</>
);

  
  
}

export default Menu;
