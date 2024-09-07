import React from 'react';
import { Box, Flex, IconButton, Icon ,Text,Link} from '@chakra-ui/react';
import { GoHome } from 'react-icons/go';
import { CiReceipt,CiUser,CiMoneyCheck1} from 'react-icons/ci';
import { AiOutlineCustomerService } from 'react-icons/ai';
import {useRouter} from "next/router";



const NavbarBottom = () => {

const whatsappLink = "https://wa.me/2347014443158?text=Hi%20Mylezic%20support%2C%20I%20need%20an%20assistant%20from%20you.%20My%20email%20is%20ab%40gmail.com";
  
  const router = useRouter();
  
  return (
    
    <Flex mt="1em"
      as="nav"
      position="fixed"
      bottom="0"
      width="100%"
      bg="white"
      boxShadow="0 -1px 4px rgba(0, 0, 0, 0.1)"
      justifyContent="space-around"
      alignItems="center"
      paddingY="0.2em"

      visibility={{lg:"hidden"}}
    >

      <Box onClick={()=>window.location.href="#trans"}>
      <IconButton
        aria-label="receipt"
        icon={<Icon as={CiReceipt} size="md"/>}
        fontSize="1.8rem"
        variant="ghost"
      />
<Text color="grey" fontSize="12px">Receipts</Text>
      </Box>

      <Box onClick={()=>window.location.href=whatsappLink}>
      <IconButton
        aria-label="support"
        icon={<Icon as={AiOutlineCustomerService} fontSize="" />}
        fontSize="1.8rem"
        variant="ghost"
      />
<Text color="grey" fontSize="12px">
    Support
  </Text>
    </Box>
      <Box onClick={()=>router.push("/dashboard")}
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="3rem"
        height="3rem"
        borderRadius="full"
        bg="teal.500"
        boxShadow="0 4px 8px rgba(0, 0, 0, 0.2)"

        >
        <Icon as={GoHome} color="white" fontSize="1.8rem" />
      </Box>
      
      <Box onClick={()=>router.push("/profile")}>
      
      <IconButton
        aria-label="Bookmark"
        icon={<Icon as={CiUser} />}
        fontSize="1.8rem"
        variant="ghost"
      />
        <Text color="grey" fontSize="12px">Profile</Text>
      </Box>
      
      <Box onClick={()=>router.push("/refer")}>
      <IconButton
        aria-label="Search"
        icon={<Icon as={CiMoneyCheck1} />}
        fontSize="1.8rem"
        variant="ghost"
      />
      <Text fontSize="12px" color="grey" >Refer</Text>
      
      </Box>
    </Flex>
  );
};

export default NavbarBottom;
