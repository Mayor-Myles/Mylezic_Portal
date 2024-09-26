import React,{useState} from 'react';
import { Box, Flex, Avatar, Text, useColorModeValue, IconButton ,Grid,Badge,useColorMode} from '@chakra-ui/react';
import {GoBell} from 'react-icons/go';
import {userData} from "../states/recoil";
import {useRecoilState} from "recoil";
import Notification from "../components/notifications";

const NavbarTop = () => {

const [user,setUser] = useRecoilState(userData);
const { colorMode, toggleColorMode } = useColorMode();
const [opened, setOpened] = useState(false);
  
  return (
    <>
    {opened && <Notification opened={{opened,setOpened}}/>}
    <Box
      position="fixed"
      top="0"
      width="100%"
      bg={colorMode === "light" ? "white" : "gray.900"}
      mb="1em"
      zIndex="999"
      p="2"
      
    >
      
      <Grid
        alignItems="center"
        
        
        templateColumns="6fr 1fr 1fr"
        
      >
        <Flex flexFlow="column wrap"  align="flex-start" justify="center" ml="3">
        <Text color="grey" fontSize="17" fontWeight="300" >Welcome back,</Text>
        <Text fontSize="15" fontWeight="bold ">{user.fullname}</Text>
      </Flex>
        
        <Flex position ="relative"
          p="4" alignItems="center">
          <IconButton fontSize="1.3em" shadow="md"
            aria-label="Notifications"
            icon={<GoBell />}
            
            mr="4"
            borderRadius="50%"
          />
          <Flex onClick={()=>setOpened(true)} position ="absolute" top="1" right="2.5"  align="center" p="3">
          
          <Badge fontSize="0.5em" borderRadius="sm" bg="teal"  color="white">New</Badge>
          </Flex>
        </Flex>

        <Avatar size="md" name={user.fullname} />
      </Grid>
    </Box>
          </>
  );
};

export default NavbarTop;
