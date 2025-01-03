import React from 'react';
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  VStack,
  HStack,
  Text,
  useToast,
  Flex,
} from '@chakra-ui/react';

import NavbarBottom from "../components/bottomNavbar";
import NavbarTop from "../components/topNavbar";
import Wallet from "../components/wallet";



function CableTvSubscription() {
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: 'Message.',
      description: 'Service is not available at the moment.',
      status: 'error',
      duration: 6000,
      isClosable: true,
      position:'top',
    });
  }

  return(
    <Box>
    <NavbarTop />
    
    <Flex align="center" justify="center" flexDirection="column"  minH="100vh" p={5} maxW="800px" mx="auto" mt={10} borderRadius="md">
      <Heading as="h1" size="lg" mb={6} textAlign="center" color="teal.500">
        Cable TV Subscription
      </Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={5}>
          {/* Smart Card Number */}
          <FormControl id="smartCardNumber" isRequired>
            <FormLabel>Smart Card Number</FormLabel>
            <Input type="text" placeholder="Enter your smart card number" variant="flushed" _placeholder={{ color: 'gray.300' }}
              _focus={{ borderBottom: '1px solid teal', boxShadow: 'sm' }} />
          </FormControl>

          {/* Select TV Package */}
          <FormControl id="tvPackage" isRequired>
            <FormLabel>Choose Tv Operator</FormLabel>
            <Select placeholder="Select package">
              <option value="basic">Dstv</option>
              <option value="premium">GOTV</option>
              <option value="ultimate">Startimes</option>
            </Select>
          </FormControl>

          {/* User Phone Number */}
          <FormControl id="phoneNumber" isRequired>
            <FormLabel>Phone Number</FormLabel>
            <Input type="tel" placeholder="Enter your phone number" variant="flushed"  _placeholder={{ color: 'gray.300' }}
              _focus={{ borderBottom: '1px solid teal', boxShadow: 'sm' }}/>
          </FormControl>

          {/* Total Price */}
          <HStack justify="space-between" w="full">
            <Text fontSize="lg" fontWeight="bold" color="gray.600">Total: ₦</Text>
            <Text fontSize="lg" fontWeight="bold" color="teal.500">0</Text>
          </HStack>

          {/* Submit Button */}
          <Button colorScheme="teal" size="sm" w="full" type="submit">
            Subscribe Now
          </Button>
        </VStack>
      </form>
    </Flex>
            <NavbarBottom/>
            </Box>
  );
}

export default CableTvSubscription;

    
