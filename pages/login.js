import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Input,
  Link,
  Text,
  InputGroup,
  InputRightElement,
  IconButton,
  useToast,
  Spinner,
} from '@chakra-ui/react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { userData, csrfState } from '../states/recoil';
import { useRecoilState } from 'recoil';
import Head from 'next/head';
import { useRouter } from 'next/router';
import axios from 'axios'; // Import axios

const LoginForm = () => {
  const [csrf, setCsrf] = useRecoilState(csrfState);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    user: '',
    password: '',
    csrf: '',
  });
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const [data, setUserData] = useRecoilState(userData);

  // Update formData when csrf token changes
  useEffect(() => {
    setFormData((prev) => ({ ...prev, ['csrf']: csrf }));
  }, [setCsrf]);

  const toggleVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const submitForm = () => {
    if (formData.user === '' || formData.password === '') {
      toast({
        position: 'top',
        title: 'Warning',
        description: 'Please fill in all fields!!!',
        status: 'warning',
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    setLoading(true);
    const url = 'https://cbrbakery.com.ng/api/login';
    toast.closeAll();

    axios
      .post(url, formData)
      .then((response) => {
        setCsrf(response.data.token); // Update CSRF token
        setLoading(false);
        if (response.data.status === 'success') {
          setUserData(response.data.userData);
          router.push('/dashboard');
        } else {
          toast({
            title: 'Error',
            description: response.data.message,
            status: 'error',
            duration: 5000,
            isClosable: true,
            position: 'top',
          });
        }
      })
      .catch((error) => {
        toast({
          title: 'Error',
          description: 'Your request could not be processed. ' + error.message,
          status: 'error',
          duration: 5000,
          isClosable: true,
          position: 'top',
        });
        setLoading(false);
      });
  };

  if (!csrf) {
    return (
      <Flex align="center" minH="100vh" justify="center">
        <Spinner size="xl" color="teal.500" />
      </Flex>
    );
  }

  return (
    <>
      <Head>
        <title>Login to Your Mylezic Account | Secure Access</title>
        {/* Add your meta tags and other Head content here */}
      </Head>

      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        flexFlow="column wrap"
        p="1em"
        maxW={{
          sm: '27em',
          base: '35em',
          md: '27em',
          lg: '25em',
          xl: '28em',
          '2xl': '30em',
        }}
        mx={{ base: '2em', sm: 'auto', md: 'auto' }}
      >
        <Flex justify="center" align="center" flexFlow="column">
          <Text fontSize="1.2em" fontWeight="bold">Login to your account</Text>
          <Text mt="0">
            Have no account? <Link color="teal" onClick={() => router.push('/register')}>Register</Link>
          </Text>
        </Flex>

        <Flex align="center" justify="center" flexDirection="column" mt="3em" w="full">
          <InputGroup mb="1.3em">
            <Input
              onChange={(e) => setFormData((prev) => ({ ...prev, ['user']: e.target.value }))}
              type="number"
              placeholder="Phone number"
              outline="none"
              bg="#F5F5F5"
              p="1.2em"
              border="0px"
              borderRadius="0.5em"
              size="lg"
              w="full"
              fontSize="14px"
              value={formData.user}
            />
          </InputGroup>

          <InputGroup mb="1.3em">
            <Input
              onChange={(e) => setFormData((prev) => ({ ...prev, ['password']: e.target.value }))}
              type={!passwordVisible ? 'password' : 'text'}
              placeholder="Password"
              outline="none"
              bg="#F5F5F5"
              p="1.2em"
              border="0px"
              borderRadius="0.5em"
              size="lg"
              w="full"
              fontSize="14px"
            />
            <InputRightElement onClick={toggleVisibility}>
              {passwordVisible ? <FaEye color="grey" /> : <FaEyeSlash color="grey" />}
            </InputRightElement>
          </InputGroup>
        </Flex>

        <Flex w="full" mt="1em">
          <Button isLoading={loading} onClick={submitForm} size="md" colorScheme="teal" w="full">
            Continue
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default LoginForm;
  
