import React from 'react';
import { Box, Text, HStack,VStack, Icon, Flex, SimpleGrid } from '@chakra-ui/react';
import { MdCellWifi,} from 'react-icons/md';
import { FiPhoneCall,} from 'react-icons/fi';
import {FaRegMessage} from "react-icons/fa6";
import {FaExchangeAlt} from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import {userData} from "../states/recoil";
import {useRecoilState} from "recoil";



const TransactionItem = ({ icon, name, type, amount, color, date, tid }) => (
  <SimpleGrid columns={4} spacing={4} w="fulll" maxW="900px" alignItems="center">
    <HStack spacing={5}>
      <Icon color="seagreen" as={icon} boxSize={4} />
      <Text fontSize="sm" color="gray.500" wordBreak="break-word">
        {name} {/*- {type}*/}
      </Text>
    </HStack>

    <Text fontSize="13px" color="gray.400" wordBreak="break-word">
      REF - {tid}
    </Text>

    <Text color={color} fontSize="14px" textAlign="center" whiteSpace="normal">
      ₦{amount.toLocaleString()}
    </Text>

    <Text fontSize="13px" color="gray.400" textAlign="right" whiteSpace="normal">
      {date}
    </Text>
  </SimpleGrid>
);
  



const Transaction = () => {

const [user,setUser] = useRecoilState(userData);

const icons = {

"data":MdCellWifi,
  "airtime":FiPhoneCall,
  "bulkSMS":FaRegMessage,
  "a2c":FaExchangeAlt,
  "hire":IoPersonOutline,
  
  
}

  const colors = {

    "success" : "teal",
    "error" : "red",
    "pending": "orange",
  }
  
  
  return (
    
    <Box display="flex" flexFlow="column" justify="center" align="center" p={1} mb="5em" mt="0.5em" w="full" gap="7">
      
      
        <Text fontSize="1em" fontWeight="bold">
          Transactions History 
        </Text>


    <Flex align="center" justify="space-around" w="100%">
      {/* Error State */}
      <Flex align="center">
        <Box w="10px" h="10px" bg="red.500" borderRadius="50%" mr="2" />
        <Text>Error</Text>
      </Flex>

      {/* Pending State */}
      <Flex align="center">
        <Box w="10px" h="10px" bg="orange.400" borderRadius="50%" mr="2" />
        <Text>Pending</Text>
      </Flex>

      {/* Success State */}
      <Flex align="center">
        <Box w="10px" h="10px" bg="teal.400" borderRadius="50%" mr="2" />
        <Text>Success</Text>
      </Flex>

  </Flex>
        <VStack spacing={4} align="center">

          {user.transactions ? user.transactions.map((transaction,index) => (
      
        
<TransactionItem key={index} icon={icons[transaction.icon]} name={transaction.title} type={transaction.description} amount={transaction.amount} color={colors[transaction.status]} date={transaction.date} tid={transaction.tid}/>

    )) :

         (<Text color="grey">You have not made any transactions. You can buy airtime,data, hire us and your transactions would show up here.</Text>)}
        
          
        </VStack>
    
    </Box>
  );
};

export default Transaction;
