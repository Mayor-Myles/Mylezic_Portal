import React from 'react';
import { Box, Text, HStack,VStack, Icon } from '@chakra-ui/react';
import { MdCellWifi,} from 'react-icons/md';
import { FiPhoneCall,} from 'react-icons/fi';
import {FaRegMessage} from "react-icons/fa6";
import {FaExchangeAlt} from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import {userData} from "../states/recoil";
import {useRecoilState} from "recoil";






const TransactionItem = ({ icon, name, type, amount ,color,date,tid}) => (
  <HStack gap="5" justify="space-between" w="fulll" py={2}>
    
      <Icon color="seagreen" as={icon} boxSize={4} mr="3" />
      <VStack mrr={3} align="" spacing={0}>
        <Text fontWeight="bold">{name}</Text>
        <Text fontSize="sm" color="gray.500">{type}</Text>
      </VStack>
  <VStack mrr={3} align="" spacing={0}>
        <Text fontWeight="bold">Reference</Text>
  <Text fontSize="13px" ml={2} color="gray.400">{tid}</Text>
  </VStack>

  <VStack mrr={3} align="" spacing={0}>
        <Text fontWeight="bold">Amount</Text>

    <Text color={color} fontSize="14px">₦{amount}</Text>
  </VStack>

  <VStack mrr={3} align="" spacing={0}>
        <Text fontWeight="bold">Date</Text>

    <Text fontSize="13px" ml={2} color="gray.400">{date}</Text>
      </VStack>
  
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
      
        
<TransactionItem key={index} icon={icons[transaction.icon]} name={transaction.title} type={transaction.description} amount={transaction.amount} color={colors[transaction.status]} date={transaction.date} tid={transaction.tid}/>

    )) :

         (<Text color="grey">You have not made any transactions. You can buy airtime,data, hire us and your transactions would show up here.</Text>)}
        
          
        </VStack>
    
    </Box>
  );
};

export default Transaction;
