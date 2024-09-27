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
  <HStack bg="gray.100" p="1" borderRadius="md" gap="3" justify="space-between" w="full" wrap="wrap">
    <HStack minW="20%" spacing={2}>
      <Icon color="seagreen" as={icon} boxSize={4} ml="2" />
      <Text fontSize="sm" color="gray.500" isTruncated>{name} - {type}</Text>
    </HStack>

    <Text fontSize="13px" ml={2} color="gray.400" isTruncated>REF - {tid}</Text>

    <Text color={color} fontSize="14px" whiteSpace="nowrap" isTruncated>
      ₦{amount.toLocaleString()}
    </Text>

    <Text fontSize="13px" ml={2} color="gray.400" isTruncated>
      {date}
    </Text>
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
    
    <Box display="flex" flexFlow="column" justify="center" align="center" mb="5em" mt="1.5em" p="1" w="full">
      
      
        <Text fontSize="1em" fontWeight="bold">
          Transactions History 
        </Text>


    <Flex align="center" justify="space-around" w="100%" my="3">
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
