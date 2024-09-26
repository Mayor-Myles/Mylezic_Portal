import React from 'react';
import { Box, Text, HStack,VStack, Icon, Flex } from '@chakra-ui/react';
import { MdCellWifi,} from 'react-icons/md';
import { FiPhoneCall,} from 'react-icons/fi';
import {FaRegMessage} from "react-icons/fa6";
import {FaExchangeAlt} from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import {userData} from "../states/recoil";
import {useRecoilState} from "recoil";






const TransactionItem = ({ icon, name, type, amount ,color,date,tid}) => (
  <HStack gap="3" justify="space-between" w="fulll">
    
  
  <Text fontSize="sm" color="gray.500"> <Icon color="seagreen" as={icon} boxSize={4} ml="2" /></Text>
 <Text fontSize="sm" color="gray.500">{name} - {type}</Text>
 <Text fontSize="13px" ml={2} color="gray.400">REF - {tid}</Text>
  <Text color={color} fontSize="14px">₦{amount.toLocaleString()}</Text>
  <Text fontSize="13px" ml={2} color="gray.400">{date}</Text>
      
  
  </HStack>
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
    
    <Box display="flex" flexFlow="column" justify="center" align="center" p={2} mb="5em" mt="0.5em" w="full" gap="7">
      
      
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
