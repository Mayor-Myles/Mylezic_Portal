import React, { useState } from 'react';
import { Flex, Text, Input, Select, Textarea, Button, Box, useToast } from '@chakra-ui/react';
import NavbarTop from '../components/topNavbar';
import NavbarBottom from '../components/bottomNavbar';
import Sidebar from '../components/sidebar';
import Head from 'next/head';
import { csrfState, userData } from '../states/recoil';
import { useRecoilState } from 'recoil';
import axios from 'axios';
import useUpdate from '../components/Update';

const Hire = () => {
  const [csrf, setCsrf] = useRecoilState(csrfState);
  const [service, setService] = useState(null);  // Fix: Use useState instead of useRecoilState
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [description, setDescription] = useState(null);
  const [btnLoading, setBtnLoading] = useState(false);
  const update = useUpdate();
  const [user, setUser] = useRecoilState(userData);

  const toast = useToast();

  const submitForm = async () => {
    setBtnLoading(true);

    const formData = {
      service,
      phoneNumber,
      csrf,
      description,
    };

    if (!formData.service || !formData.phoneNumber || !formData.description || !formData.csrf) {
      setBtnLoading(false);

      toast.closeAll();

      toast({
        title: 'Oops',
        description: 'Please fill all fields!!!',
        status: 'info',
        duration: 5000,
        isClosable: true,
        position: 'top',
      });

      return false;
    }

    const url = 'https://cbrbakery.com.ng/api/hire';

    try {
      const response = await axios.post(url, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = response.data;

      setCsrf(data.token);
      setBtnLoading(false);

      if (data.status === 'success') {
        update();

        toast.closeAll();
        toast({
          title: 'Congrats 🎉',
          description: 'Your request is completed. Our staff will contact you with the number you provided shortly.',
          status: 'success',
          duration: 6000,
          isClosable: true,
          position: 'top',
        });
      } else {
        toast.closeAll();
        toast({
          title: 'Error',
          description: data.message,
          status: 'error',
          duration: 5000,
          isClosable: true,
          position: 'top',
        });
      }
    } catch (error) {
      toast.closeAll();
      toast({
        title: 'Error',
        description: 'Your request could not be processed. ' + error.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top',
      });
    } finally {
      setBtnLoading(false);
    }
  };

  return (
    <>
      <Head>
        {/* Title and Meta Tags */}
        {/* Your Head Content */}
      </Head>

      <NavbarTop />

      <Box display={{ sm: 'none', base: 'none', md: 'none', lg: 'flex' }}>
        <Sidebar />
      </Box>

      <Flex
        direction="column"
        minH="100vh"
        align="center"
        justify="center"
        gap="7"
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
        <Text fontWeight="bold" fontSize="lg">
          Hire Us
        </Text>

        {/* Updated Inputs to use the correct state variables */}
        <Input
          onChange={(e) => setPhoneNumber(e.target.value)}
          type="tel"
          placeholder="Active Whatsapp number"
          size="md"
          colorScheme="teal"
          value={phoneNumber}  {/* Use phoneNumber state */}
        />

        <Select
          onChange={(e) => setService(e.target.value)}
          size="md"
          colorScheme="teal"
          placeholder="Choose Service"
          value={service}  {/* Use service state */}
        >
          <option value="web">Website Development</option>
          <option value="graphics">Graphics Design</option>
          <option value="ui/ux">UI/UX</option>
        </Select>

        <Textarea
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe what you want us to do for you in details..."
          size="md"
          h={{ base: '13em', lg: '10em' }}
          value={description}  {/* Use description state */}
        />

        <Button onClick={submitForm} isLoading={btnLoading} w="full" size="md" colorScheme="teal">
          Request
        </Button>
      </Flex>

      <NavbarBottom />
    </>
  );
};

export default Hire;
      
