import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Flex,
  Input,
  Text,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  IconButton,
  useToast,
  Link,
} from '@chakra-ui/react';
import { FaUser, FaEnvelope, FaPhone, FaKey, FaTag, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import axios from 'axios';
import Head from 'next/head';
import { csrfState } from '../states/recoil';

const Register = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const [csrf, setCsrf] = useRecoilState(csrfState);
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    phoneNumber: '',
    referral: '',
    csrf: '',
  });

  const router = useRouter();

  // Update CSRF in formData whenever it changes
  useEffect(() => {
    setFormData((prev) => ({ ...prev, csrf }));
  }, [csrf]);

  // Toggle password visibility
  const toggleVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // Handle form submission
  const submitForm = () => {
    if (
      !formData.fullname ||
      !formData.email ||
      !formData.password ||
      !formData.phoneNumber ||
      formData.password.length < 6
    ) {
      toast({
        position: 'top',
        title: 'Warning',
        description:
          'Please fill in the required fields. Referral is optional. Password must be at least 6 characters.',
        status: 'warning',
        duration: 7000,
        isClosable: true,
      });
      return;
    }

    setLoading(true);
    axios
      .post('https://mylezic.com.ng/api/register', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        setLoading(false);
        const { status, message } = response.data;
        if (status === 'success') {
          toast({
            title: 'Registration Successful',
            description: 'You can now log in to your account.',
            status: 'success',
            duration: 7000,
            isClosable: true,
            position: 'top',
          });
          router.push('/login');
        } else {
          toast({
            title: 'Error',
            description: message,
            status: 'error',
            duration: 7000,
            isClosable: true,
            position: 'top',
          });
        }
      })
      .catch((error) => {
        toast({
          title: 'Error',
          description: `Failed to process your request. ${error.message}`,
          status: 'error',
          duration: 5000,
          isClosable: true,
          position: 'top',
        });
        setLoading(false);
      });
  };

  return (
    <>
      <Head>
        <title>Register | Mylezic</title>
        <meta name="description" content="Register to join Mylezic today." />
      </Head>

      <Flex
        minH="100vh"
        align="center"
        justify="center"
        direction="column"
        p="1em"
        maxW="400px"
        mx="auto"
      >
        <Box textAlign="center" mb="3em">
          <Text fontFamily="'Poppins', sans-serif" fontSize="3xl" fontWeight="bold" mb={2}>
            Mylezic
          </Text>
        </Box>

        <Box textAlign="center" mb="4">
          <Text fontSize="sm" fontWeight="bold" color="teal.600">
            Register to explore our rich and fast features.
          </Text>
          <Text fontSize="sm" color="gray.600">
            Already have an account?{' '}
            <Link color="teal.500" onClick={() => router.push('/login')}>
              Login here
            </Link>
          </Text>
        </Box>

        <Flex direction="column" w="full" gap="5">
          <InputGroup>
            <InputLeftElement>
              <FaUser color="gray" />
            </InputLeftElement>
            <Input
              placeholder="Full Name"
              value={formData.fullname}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, fullname: e.target.value }))
              }
              variant="flushed"
              focusBorderColor="teal.500"
            />
          </InputGroup>

          <InputGroup>
            <InputLeftElement>
              <FaEnvelope color="gray" />
            </InputLeftElement>
            <Input
              placeholder="Email Address"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              variant="flushed"
              focusBorderColor="teal.500"
            />
          </InputGroup>

          <InputGroup>
            <InputLeftElement>
              <FaPhone color="gray" />
            </InputLeftElement>
            <Input
              placeholder="Phone Number"
              type="tel"
              value={formData.phoneNumber}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, phoneNumber: e.target.value }))
              }
              variant="flushed"
              focusBorderColor="teal.500"
            />
          </InputGroup>

          <InputGroup>
            <InputLeftElement>
              <FaKey color="gray" />
            </InputLeftElement>
            <Input
              placeholder="Password"
              type={passwordVisible ? 'text' : 'password'}
              value={formData.password}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, password: e.target.value }))
              }
              variant="flushed"
              focusBorderColor="teal.500"
            />
            <InputRightElement>
              <IconButton
                icon={passwordVisible ? <FaEyeSlash /> : <FaEye />}
                onClick={toggleVisibility}
                variant="ghost"
                aria-label="Toggle Password Visibility"
                color="teal"
              />
            </InputRightElement>
          </InputGroup>

          <InputGroup>
            <InputLeftElement>
              <FaTag color="gray" />
            </InputLeftElement>
            <Input
              placeholder="Referral Code (Optional)"
              value={formData.referral}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, referral: e.target.value }))
              }
              variant="flushed"
              focusBorderColor="teal.500"
            />
          </InputGroup>

          <Button
            colorScheme="teal"
            isLoading={loading}
            onClick={submitForm}
            isFullWidth
          >
            Register
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default Register;
