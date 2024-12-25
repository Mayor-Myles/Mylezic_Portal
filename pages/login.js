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
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const toast = useToast();
const router = useRouter();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (!formData.username || !formData.password) {
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
        toast({
          title: 'Success',
          description: response.data.message || 'Logged in successfully!',
          status: 'success',
          duration: 3000,
          isClosable: true,
          position: 'top',
        });
        window.location.href = '/Admin/dashboard'; // Redirect on successful login
      } else {
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
        <Text fontSize="3xl" fontWeight="bold" mb={2}>
          Mylezic
        </Text>
      </Box>
      <Box
        w="full"
        maxW="400px"
        p={6}
        bg="rgba(255, 255, 255, 0.05)"
        
        
        textAlign="center"
      >
        <InputGroup mb={10}>
          <InputLeftElement pointerEvents="none">
            <FaUser color="grey" />
          </InputLeftElement>
          <Input
            name="username"
      variantt="flushed"     placeholder="Phone number"
            onChange={handleInputChange}
            value={formData.username}
            border="0 0 2px 0"
            borderColor=""
            _placeholder={{ color: 'gray.300' }}
            _focus={{ border: '2px solid teal', boxShadow: 'md' }}
        type="number"
            />
        </InputGroup>
        <InputGroup mb={12}>
          <InputLeftElement pointerEvents="none">
            <FaLock color="grey" />
          </InputLeftElement>
          
          <Input
            name="password"
            type={passwordVisible ? 'text' : 'password'}
            placeholder="Password"
            onChange={handleInputChange}
            value={formData.password}
            border="0 0 2px 0 "
     variantt="flushed"       
            _placeholder={{ color: 'gray.300' }}
            _focus={{ border: '2px solid teal', boxShadow: '0 0 5px teal' }}

            
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
          SIGN IN
        </Button>
        <Text mt={4}>
          Don’t have an account?{' '}
          <Text
            as="span"
            color="teal.400"
            cursor="pointer"
            onClick={() => router.push('/register')}
          >
            Sign up
          </Text>
        </Text>
      </Box>
    </Flex>
  );
};

export default LoginForm;
