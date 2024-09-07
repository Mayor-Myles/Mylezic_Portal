import React from 'react';
import { Box, Text, VStack, HStack, Circle,Flex,IconButton,Spacer,Button } from '@chakra-ui/react';
import {FaMoneyCheck} from "react-icons/fa";
//import {CiCirclePlus} from "react-icons/ci";


const Wallet = () => {
  return (
    <Box

      justify="center"
      bg="brown"
      color="white"
      borderRadius="xl"
      p={6}
      shadow="lg"
      maxW={{sm:'27em', base: '35em', md: '27em', lg: '25em', xl: '28em', '2xl':'30em', }} mx={{base:"2em",sm:'auto',md:"auto"}}

      align="center"
      display="flex"
    >
      <VStack align="start" spacing={2}>

        <Text fontSize="md" fontWeight="300">
          09060421393
        </Text>
        <HStack justify="space-between" w="full">
          <HStack>
            <Circle size="6px" bg="white" />
            <Circle size="6px" bg="white" />
            <Circle size="4px" bg="white" />
            <Circle size="4px" bg="white" />
            <Circle size="4px" bg="white" />
            <Circle size="4px" bg="white" />
          </HStack>
          <Flex flexFlow="column wrap" align="center">

           <Text size="10">Withdrawal</Text> 
          <Text fontWeight="bold" fontSize="md" letterSpacing="wider" mt="2">
           Closed
          </Text>

          </Flex>
        </HStack>

        <HStack mt="0.1" justifyContent="center">
          <Box>
        <Text fontSize="sm">My Package</Text>
        <Text fontSize="lg" fontWeight="bold">
          ₦0   
        </Text>
            <Text>Profit: ₦0</Text>
          </Box>
<Spacer mx="4.5em"/>
          <Box>

            <Flex color="white"  size="md">
              <FaMoneyCheck size="2em"/>
            </Flex>
          </Box>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Wallet;
