import React from 'react';
import { Box, Text, VStack, HStack, Circle, Flex, IconButton, Spacer } from '@chakra-ui/react';
import { FaPlusCircle } from "react-icons/fa";
import {useRecoilState} from "recoil";
import {userData} from "../states/recoil";
import Link from "next/link";




const Wallet = () => {



   const [user,setUser] = useRecoilState(userData);

  
  return (

    <Flex w="full" alignItems="center" flexFlow="column" justify="center" maxW={{sm:'25em', base: '25em', md: '28em', lg: '20em', xl: '25em', '2xl':'30em', }} >
    
      <Box
      bgg="teal.500"
        bgGradient="linear-gradient(90deg, teal, rgba(91, 192, 165, 1))"
      color="white"
      borderRadius="xl"
      p={5}
      shadow="lg"
      
      
      display="flex"
      alignItems="center"
      justifyContent="center"
      w="full"
    >
      <VStack spacing={[1, 2, 1]} w="full">
        <Text fontSize={["sm", "md", "lg"]} fontWeight="300">
          {user.phoneNumber}
        </Text>
        <HStack justify="space-between" w="full" flexWrap="wrap">
          <HStack spacing={1}>
            <Circle size="6px" bg="white" />
            <Circle size="6px" bg="white" />
            <Circle size="4px" bg="white" />
            <Circle size="4px" bg="white" />
            <Circle size="4px" bg="white" />
            <Circle size="4px" bg="white" />
          </HStack>
          {/*<Flex direction="column" alignItems="center">
            <HStack>
              <Text fontSize={["xs", "sm"]}>Referral Code</Text>
              <IconButton
                bg="teal"
                color="white"
                icon={<FaRegCopy />}
                aria-label="Copy referral code"
                size="sm"
              />
            </HStack>
            <Text fontWeight="bold" fontSize={["md", "lg"]} letterSpacing="wider" mt={2}>
              AzcXv23
            </Text>
          </Flex>*/}
        </HStack>

        <HStack justifyContent="space-between" w="full" flexWrap="wrap" mt={[1, 2]}>
          <Box>
            <Text fontSize={["xs", "sm"]}>Balance</Text>
            <Text fontSize={["lg", "xl"]} fontWeight="bold">
              ₦{user.balance.toLocaleString()}
            </Text>
          </Box>
          <Spacer />
          <Box>
            <Link href="/fund"><IconButton
              color="white"
              aria-label="Add funds"
              icon={<FaPlusCircle size="2em" />}
              bg="transparent"
              size="lg"
            /></Link>
          </Box>
        </HStack>
      </VStack>
    </Box>
    </Flex>
  );
};

export default Wallet;
    