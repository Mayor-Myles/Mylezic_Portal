import React from 'react';
import { Box, Text, HStack,VStack, Icon } from '@chakra-ui/react';
import { MdCellWifi,} from 'react-icons/md';
import { FiPhoneCall,} from 'react-icons/fi';
import {FaRegMessage} from "react-icons/fa6";
import {FaExchangeAlt} from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import {userData} from "../states/recoil";
import {useRecoilState} from "recoil";






const TransactionItem = ({ icon, name, type, amount ,color,date}) => (
  <HStack justify="space-between" w="full" py={2}>
    <HStack >
      <Icon color="seagreen" as={icon} boxSize={4} mr="3" />
      <VStack mr={3} align="start" spacing={0}>
        <Text fontWeight="bold">{name}</Text>
        <Text fontSize="sm" color="gray.500">{type}</Text>
      </VStack>
    </HStack>
    <Text color={color} fontWeight="bold">₦{amount}</Text>
    <Text ml={2} color="gray 400">{date}</Text>
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
    
    <Box display="flex" flexFlow="column" justify="center" align="center" p={2} mb="5em" mt="1em" w="full" gap="7">
      
      
        <Text fontSize="1em" fontWeight="bold" mb={3}>
          Transaction
        </Text>
        <VStack spacing={4} align="center">

          {user.transactions ? user.transactions.map((transaction,index) => (
      
        
<TransactionItem key={index} icon={icons[transaction.icon]} name={transaction.title} type={transaction.description} amount={transaction.amount} color={colors[transaction.status]} date={transaction.date} />

    )) :

         (<Text color="grey">You have not made any transactions. You can buy airtime,data, hire us and your transactions would show up here.</Text>)}
        
          
        </VStack>
    
    </Box>
  );
};

export default Transaction;
