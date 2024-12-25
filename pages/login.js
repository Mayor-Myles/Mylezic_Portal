import React, { useState } from 'react';
import {
  Box,
  Flex,
  Input,
  Button,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  IconButton,
  Text,
  useToast,
} from '@chakra-ui/react';
import { FaUser, FaLock,FaEye,FaEyeSlash } from 'react-icons/fa';
import axios from 'axios';
import { useRouter } from 'next/router';
const LoginForm = () => {
  const [formData, setFormData] = useState({ phoneNumber: '', password: '' });
  const [loading, setLoading] = useState(false);
const [passwordVisible, setPasswordVisible] = useState(false);
const toast = useToast();
const router = useRouter();
  
  //set last saved Login phone number 
  
const lastLogin = localStorage.getItem('lastLogin');
  const handleInputChange = (e) => {

   //save last login
    localStorage.setItem('lastLogin',value);
    
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));


    
  };

  const handleSubmit = async () => {
    if (!formData.phoneNumber || !formData.password) {
      toast({
        title: 'Error',
        description: 'Please fill in all fields',
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top',
      });
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        '/api/login',
        { ...formData },
        { headers: { 'Content-Type': 'application/json' } }
      );

      if (response.data.status === 'success') {
        toast.closeAll();
        toast({
          title: 'Success',
          description: response.data.message || 'Logged in successfully!',
          status: 'success',
          duration: 3000,
          isClosable: true,
          position: 'top',
        });
        router.push('/dashboard'); // Redirect on successful login
      } else {
        toast.closeAll();
        toast({
          title: 'Error',
          description: response.data.message || 'Invalid login details',
          status: 'error',
          duration: 3000,
          isClosable: true,
          position: 'top',
        });
      }
    } catch (error) {
      toast.closeAll();
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again later.',
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Flex
      height="100vh"
      align="center"
      justify="center"
      bgGradientt="linear(to-b, grey, grey)"
      
      direction="column"
      px={4}
    >
      <Box textAlign="center" mb="5em">
        <Text fontFamily="'Poppings', sans-serif" fontSize="3xl" fontWeight="bold" mb={2}>
          Mylezic
        </Text>
        <Box mt="1em">
          <Text><i>Buy cheap data, airtime, and even hire us to build websites and craft your graphics design!!!</i></Text></Box>
      </Box>
      <Box
        w="full"
        maxW="400px"
        p={6}
        bg="rgba(255, 255, 255, 0.05)"
        
        
        textAlign="center"
      >
        <InputGroup textAlign="center" mb={10}>
          <InputLeftElement pointerEvents="none">
            <FaUser color="grey" />
          </InputLeftElement>
          <Input
            name="username"
      variant="flushed"     placeholder= "Phone number" 
            onChange={handleInputChange}
            value={lastLogin}
            
            _placeholder={{ color: 'gray.300' }}
            _focus={{ borderBottom: '1px solid teal', boxShadow: 'sm' }}
        type="number"
            />
        </InputGroup>
        <InputGroup textAlign="center" mb={12}>
          <InputLeftElement pointerEvents="none">
            <FaLock color="grey" />
          </InputLeftElement>
          
          <Input
            name="password"
            type={passwordVisible ? 'text' : 'password'}
            placeholder="Password"
            onChange={handleInputChange}
            value={formData.password}
        
     variant="flushed"       
            _placeholder={{ color: 'gray.300' }}
            _focus={{ borderBottom: '1px solid teal', boxShadow: 'sm' }}

            
          />

          <InputRightElement>
            <IconButton
            onClick={() => setPasswordVisible(!passwordVisible)}
            icon={passwordVisible ? <FaEyeSlash/> : <FaEye/>}
            variant="ghost"
            color="teal.400"
            aria-label="Toggle Password Visibility"
          />
            </InputRightElement>

        </InputGroup>
        <Button
          isLoading={loading}
          onClick={handleSubmit}
          w="full"
          bg="teal.400"
          color="white"
          _hover={{ bg: 'teal.500' }}
          _active={{ bg: 'teal.600' }}
          boxShadow="sm"
        >
          Login
        </Button>
        <Text mt={8}>
          Don’t have an account?{' '}
          <Text
            as="span"
            color="teal.400"
            cursor="pointer"
            onClick={() => router.push('/register')}
          >
            Register
          </Text>
        </Text>
        <Text fontWeight="bold" color="orange" onClick={()=>router.push('/reset_password')}>Click here if you forgot your Password!</Text>
      </Box>
    </Flex>
  );
};

export default LoginForm;
