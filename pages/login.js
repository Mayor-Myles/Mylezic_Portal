import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Input,
  Link,
  Text,
  Image,
  InputGroup,
  InputRightElement,
  IconButton,
  useToast,
  Grid,
  Spinner,
} from '@chakra-ui/react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { userData, csrfState } from '../states/recoil';
import { useRecoilState } from 'recoil';
import Head from 'next/head';
import { useRouter } from 'next/router';

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
    setFormData((prev) => ({ ...prev, csrf }));
  }, [csrf]);

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
    const url = 'https://cbrbakery.com.ng/api?action=login';
    toast.closeAll();

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (!res.ok) {
          setLoading(false);
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((data) => {
        setCsrf(data.token); // Update CSRF token
        setLoading(false);
        if (data.status === 'success') {
          setUserData(data.userData);
          router.push('/dashboard');
        } else {
          toast({
            title: 'Error',
            description: data.message,
            status: 'error',
            duration: 5000,
            isClosable: true,
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
      {/* Your existing code for the form */}
    </>
  );
};

export default LoginForm;
      
