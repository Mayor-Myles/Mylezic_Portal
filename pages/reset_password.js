import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Flex,
  Input,
  Text,
  useToast,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { FaPhoneAlt } from 'react-icons/fa';
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
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Reset Password | Mylezic</title>
      </Head>

      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        flexFlow="column wrap"
        p="1em"
        maxW="400px"
        mx="auto"
      >
        <Flex userSelect="none" justify="center" align="center" flexFlow="column">
          <Text fontSize="2xl" fontWeight="bold">Recover Your Account</Text>
          <Text mt="0" fontSize="sm">
            Have an account?{' '}
            <Link href="/login">
              <Box color="teal.500" as="span">Login</Box>
            </Link>
          </Text>
        </Flex>

        <Flex align="center" justify="center" flexDirection="column" mt="3em" w="full">
          <InputGroup mb="1.3em">
            <InputLeftElement pointerEvents="none" color="teal.500">
              <FaPhoneAlt />
            </InputLeftElement>
            <Input
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              type="tel"
              placeholder="Phone Number"
              variant="flushed"
              focusBorderColor="teal.500"
              size="lg"
            />
          </InputGroup>
        </Flex>

        <Flex w="full" mt="1em">
          <Button
            onClick={submitForm}
            isLoading={loading}
            colorScheme="teal"
            w="full"
          >
            Reset Password
          </Button>
        </Flex>

        <Flex mt="3em" align="center" justify="center">
          <Text fontWeight="bold" color="teal.500">Mylezic</Text>
        </Flex>
      </Flex>
    </>
  );
};

export default ResetPassword;
