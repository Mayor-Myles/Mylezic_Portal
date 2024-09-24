import React, { useState, useEffect } from "react";
import { Button, Input, Flex, Box, Select, Text, Spinner, useToast } from "@chakra-ui/react";
import NavbarTop from "../components/topNavbar";
import NavbarBottom from "../components/bottomNavbar";
import Advert from "../components/adverts";
import Sidebar from "../components/sidebar";
import Head from "next/head";
import { a2cState, csrfState } from "../states/recoil";
import { useRecoilState } from "recoil";
import axios from "axios";
import useUpdate from "../components/Update";



const A2C = () => {
  const [rate, setRate] = useRecoilState(a2cState);
  const [network, setNetwork] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [amount, setAmount] = useState(0);
  const toReceive = Math.floor(amount * rate[network] || 0);
  const [csrf, setCsrf] = useRecoilState(csrfState);
  const [btnLoading, setBtnLoading] = useState(false);
  const toast = useToast();
  const update = useUpdateUserData();

  // Check if rates are not yet loaded
  if (!rate) {
    return (
      <Flex align="center" justify="center" minH="100vh">
        <Spinner size="xl" color="teal" speed="0.4s" />
      </Flex>
    );
  }

  const submitForm = async () => {
    setBtnLoading(true);

    const data = {
      amount: amount,
      phoneNumber: phoneNumber,
      csrf: csrf,
      network: network,
    };

 //   const fieldsFilled = Object.values(data).every(Boolean);

    if (!amount || !phoneNumber) {
      setBtnLoading(false);

      toast.closeAll();
      toast({
        title: "Oops",
        description: "Please enter all the necessary information",
        status: "info",
        duration: 5000,
        isClosable: true,
        position: "top",
      });

      return;
    }

    try {
      const response = await axios.post("https://cbrbakery.com.ng/api/a2c", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.data) {
        const { token, userData, status, message } = response.data;
      
        
        setCsrf(token); // Update CSRF token

        setBtnLoading(false);

        if (status === "success") {

          update();
          
          toast({
            title: "Congrats 🎉",
            description: message,
            status: "success",
            duration: 6000,
            isClosable: true,
            position:'top'
          });

          return(<Update/>);
        } else {
          toast({
            title: "Error",
            description: message || "Something went wrong",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        }
      }
    } catch (error) {
      console.error("Error:", error);

      toast({
        title: "Error",
        description: `Your request could not be processed. ${error.message}`,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      setBtnLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Convert Airtime to Cash Instantly | Mylezic - Best Rates & Fast Service</title>
        <meta name="description" content="Convert your airtime to cash instantly at the best rates with Mylezic. We offer fast and reliable airtime to cash conversion services. Easy process, secure transactions, and quick payouts." />
        <meta name="keywords" content="airtime to cash, convert airtime to cash, airtime conversion, airtime to money, sell airtime, airtime conversion service, Mylezic" />
        <link rel="canonical" href="https://mylezic.com.ng/airtime_to_cash" />
        <meta property="og:title" content="Convert Airtime to Cash Instantly | Mylezic - Best Rates & Fast Service" />
        <meta property="og:description" content="Get the best rates for converting your airtime to cash with Mylezic. Fast, secure, and easy airtime to cash conversion process. Instant payouts guaranteed!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mylezic.com.ng/airtime_to_cash" />
        <meta property="og:image" content="logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Convert Airtime to Cash Instantly | Mylezic - Best Rates & Fast Service" />
        <meta name="twitter:description" content="Convert your airtime to cash with ease. Enjoy quick and secure transactions with Mylezic's airtime to cash service. Best rates guaranteed." />
        <meta name="twitter:image" content="logo.png" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Mylezic" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="logo.png" />
        <meta property="og:site_name" content="Mylezic" />
        <meta name="theme-color" content="teal" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta name="application-name" content="Mylezic Airtime to Cash Service" />
      </Head>

      <NavbarTop />

      <Box display={{ sm: "none", base: "none", lg: "flex", xl: "flex" }}>
        <Sidebar />
      </Box>

      <Flex justify="center" align="center" minH="100vh" direction="column" maxW={{ sm: '27em', base: '35em', md: '27em', lg: '25em', xl: '28em', '2xl': '30em' }} mx={{ base: "2em", sm: 'auto', md: "auto" }}>
        <Advert />

        <Flex w="full" flexFlow="column" gap="3" align="center" justify="center">
          <Text mb="1em" fontWeight="bold">Airtime to cash</Text>

          <Input onChange={(e) => setPhoneNumber(e.target.value)} type="tel" placeholder="Whatsapp number" size="lg" border="1px solid teal" />

          <Select onChange={(e) => setNetwork(e.target.value)} border="1px solid teal" size="lg" colorScheme="teal">
            <option value="">Choose Network</option>
            <option value="mtn">MTN</option>
            <option value="glo">GLO</option>
            <option value="airtel">AIRTEL</option>
            <option value="9mobile">9MOBILE</option>
          </Select>

          <Input onChange={(e) => setAmount(Number(e.target.value))} type="number" placeholder="Amount to convert (Naira)" size="lg" border="1px solid teal" />

          <Input type="number" size="lg" border="1px solid teal" placeholder={toReceive ? `We will pay you ₦${toReceive}` : "Amount to receive"} readOnly />

          <Button isLoading={btnLoading} onClick={submitForm} size="md" w="full" colorScheme="teal">Request</Button>
        </Flex>
      </Flex>

      <NavbarBottom />
    </>
  );
};

export default A2C;
      
