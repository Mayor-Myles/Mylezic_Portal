import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Avatar,
  IconButton,
  Container,
  useToast,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import NavbarTop from "../components/topNavbar";
import NavbarBottom from "../components/bottomNavbar";
import Sidebar from "../components/sidebar";
import { useRecoilState } from "recoil";
import { userData, csrfState } from "../states/recoil";
import Link from "next/link";



const Profile = () => {
  const [csrf, setCsrf] = useRecoilState(csrfState);
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fullname,setFullname] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);
  const [user, setUser] = useRecoilState(userData);

  const toast = useToast();

const data = {
      email: email,
      phoneNumber: phoneNumber,
      csrf: csrf,
      fullName:fullname,
    };
  
  
  const submitForm = () => {
    setBtnLoading(true);
    

    const url = "https://cbrbakery.com.ng/api?action=editPofile";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        setBtnLoading(false);

        if (data.status === "success") {

          setUser(data.userData);
          
          toast({
            title: "Congratulations 🎉",
            description: data.message,
            status: "success",
            duration: 5000,
            isClosable: true,
          });
        } else {
          toast({
            title: "Error",
            description: data.message,
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        }
      })
      .catch((error) => {
        setBtnLoading(false);

        toast({
          title: "Error",
          description: "Your request could not be processed. " + error.message,
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
      });
  };

  return (
    <>
      <NavbarTop />

      <Box display={{ sm: "none", base: "none", md: "none", lg: "flex" }}>
        <Sidebar />
      </Box>

      <Flex
        minH="100vh"
        align="center"
        justify="center"
        maxW={{
          sm: "27em",
          base: "35em",
          md: "27em",
          lg: "25em",
          xl: "28em",
          "2xl": "30em",
        }}
        mx={{ base: "2em", sm: "auto", md: "auto" }}
      >
        <Container py={4} mt="2em">
          <Box bg="white" p={2} rounded="md">
            <FormControl mb={4}>
              <Flex align="center" justify="center">
                <Avatar size="lg" src="avatar.jpeg" />
                <IconButton
                  icon={<EditIcon />}
                  size="sm"
                  position="relative"
                  top="2.5rem"
                  left="-1rem"
                  bg="teal.500"
                  color="white"
                  rounded="full"
                  aria-label="Edit profile picture"
                />
              </Flex>
            </FormControl>

            <FormControl mb={4}>
              <FormLabel>Full Name</FormLabel>
              <Input onChange={(e)=>setFullname(e.target.value)}
                placeholder={user.fullname}
                border="1px solid teal"
              />
            </FormControl>

            <FormControl mb={4}>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder={user.email}
                border="1px solid teal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>

            <FormControl mb={4}>
              <FormLabel>Phone Number</FormLabel>
              <Input
                type="tel"
                placeholder={user.phoneNumber}
                border="1px solid teal"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </FormControl>

            <FormControl mb={4}>
              <FormLabel>My balance</FormLabel>
              <Input
                type="text"
                value={`₦${user.balance}`}
                border="1px solid teal"
                readOnly
              />
            </FormControl>

            <Flex justify="space-between" mb="2em">
              <Button variant="outline" colorScheme="teal">
               <Link href="/dashboard">Back</Link> 
              </Button>
              <Button
                colorScheme="teal"
                onClick={submitForm}
                isLoading={btnLoading}
              >
                Update Changes
              </Button>
            </Flex>
          </Box>
        </Container>
      </Flex>
      <NavbarBottom />
    </>
  );
};

export default Profile;
