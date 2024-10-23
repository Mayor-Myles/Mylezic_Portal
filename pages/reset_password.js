import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Flex,
  Input,
  Text,
  useToast,
  InputGroup,
} from '@chakra-ui/react';
import { csrfState } from "../states/recoil";
import Head from "next/head";
import Link from "next/link";
import { useRecoilState } from "recoil";
import axios from 'axios';

const ResetPassword = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [csrf, setCsrf] = useRecoilState(csrfState);
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const [formData, setFormData] = useState({
    phoneNumber: '',
    csrf: '',
  });

  useEffect(() => {
    setFormData({
      phoneNumber,
      csrf,
    });
  }, [phoneNumber, csrf]);

  const submitForm = () => {
    if (!formData.phoneNumber) {
      toast.closeAll();
      toast({
        position: "top",
        title: "Warning",
        description: "Please enter the phone number associated with your account",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    setLoading(true);
    const url = "https://mylezic.com.ng/api/resetPassword";
    toast.closeAll();

    axios.post(url, formData)
      .then(response => {
        setLoading(false);
        const { data } = response;
        
        toast.closeAll();
        if (data.status === "success") {
          toast({
            title: "Success",
            description: data.message,
            status: "success",
            duration: 7000,
            isClosable: true,
            position: 'top',
          });
        } else {
          toast({
            title: "Error",
            description: data.message,
            status: "error",
            duration: 7000,
            isClosable: true,
            position: 'top',
          });
        }
      })
      .catch(error => {
        toast.closeAll();
        toast({
          title: "Error",
          description: "Your request could not be processed. " + error.message,
          status: "error",
          duration: 7000,
          isClosable: true,
          position: "top",
        });
        setLoading(false);
      });
  };

  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Reset Password | Mylezic</title>
      </Head>

      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        flexFlow="column wrap"
        p="1em"
        maxW={{ sm: '27em', base: '35em', md: '27em', lg: '25em', xl: '28em', '2xl': '30em' }} 
        mx={{ base: "2em", sm: 'auto', md: "auto" }}
      >
        <Flex userSelect="none" justify="center" align="center" flexFlow="column">
          <Text fontSize="1.2em" fontWeight="bold">Recover your account</Text>
          <Text mt="0">Have an account? <Link href="/login"><Box color="teal" as="span">Login</Box></Link></Text>
        </Flex>

        <Flex align="center" justify="center" flexDirection="column" mt="3em" w="full">
          <InputGroup mb="1.3em">
            <Input
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              type="number"
              placeholder="Phone number"
              outline="none"
              bg="#F5F5F5"
              p="1.2em"
              border="1px solid teal"
              borderRadius="0.5em"
              size="lg"
              w="full"
              fontSize="14px"
            />
          </InputGroup>
        </Flex>

        <Flex w="full" mt="1em">
          <Button onClick={submitForm} isLoading={loading} size="md" color="white" colorScheme="teal" w="full">Reset Password</Button>
        </Flex>

        <Flex mt="3em" align="center" justify="center">
          <Text fontWeight="bold">Mylezic</Text>
        </Flex>
      </Flex>
    </>
  );
};

export default ResetPassword;
            
