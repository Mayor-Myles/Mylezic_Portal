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
import axios from"axios";
import useUpdate from "../components/Update";


const Profile = () => {
  const [csrf, setCsrf] = useRecoilState(csrfState);
  const [email, setEmail] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [fullname,setFullname] = useState(null);
  const [newPassword,setNewPassword] = useState(null);

  const [btnLoading, setBtnLoading] = useState(false);
  const [user, setUser] = useRecoilState(userData);

  const toast = useToast();
const update = useUpdate();

  const submitForm = () => {
  
  
  const data = {
    email: email,
    phoneNumber: phoneNumber,
    csrf: csrf,
    fullName: fullname,
    newPassword : newPassword,
  };

    const hasValue = Object.entries(data).some(([key, value]) => key !== 'csrf' && value);

if (!hasValue) {
  toast.closeAll();
  toast({
    title: "Error",
    description: "Please provide at least one field to update.",
    status: "error",
    duration: 5000,
    isClosable: true,
    position: "top",
  });
  return;
}
    
    setBtnLoading(true);
  const url = "https://mylezic.com.ng/api/editProfile";

  axios
    .post(url, data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      const data = response.data;
      setBtnLoading(false);

      // Close all existing toasts before showing a new one
      toast.closeAll();

      if (data.status === "success") {
        //setUser(data.userData);
       update();
        toast({
          title: "Congratulations 🎉",
          description: data.message,
          status: "success",
          duration: 7000,
          isClosable: true,
          position: "top",
        });
      } else {
        toast({
          title: "Error",
          description: data.message,
          status: "error",
          duration: 7000,
          isClosable: true,
          position: "top",
        });
      }
    })
    .catch((error) => {
      setBtnLoading(false);

      // Close all existing toasts before showing a new one
      toast.closeAll();

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
          <Box bg="" p={2} rounded="md">

        <p m="2" color="gray.300">Change any of your details below</p>
            <FormControl mb={2}>
              <Flex align="center" justify="center">
                <Avatar size="md" src="avatar.jpg" />
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
                variant="flushed"
                _placeholder={{ color: 'gray.300' }}
                _focus={{ borderBottom: '1px solid teal', boxShadow: 'sm' }}
              />
            </FormControl>

            <FormControl mb={4}>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder={user.email}
                _placeholder={{ color: 'gray.300' }}
                _focus={{ borderBottom: '1px solid teal', boxShadow: 'sm' }}
                variant="flushed"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>

            <FormControl mb={4}>
              <FormLabel>Phone Number</FormLabel>
              <Input
                type="tel"
                placeholder={user.phoneNumber}
                _placeholder={{ color: 'gray.300' }}
                _focus={{ borderBottom: '1px solid teal', boxShadow: 'sm' }}

                variant="flushed"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </FormControl>

            <FormControl mb={4}>
              <FormLabel>Change Password</FormLabel>
              <Input onChange={(e)=>setNewPassword(e.target.value)}
                type="text"
                placeholder="Enter New password"
                _placeholder={{ color: 'gray.300' }}
                _focus={{ borderBottom: '1px solid teal', boxShadow: 'sm' }}
                variant="flushed"
                
              />
            </FormControl>

            <Flex justify="space-between" mb="2em">
              <Button onClick={()=>window.location.href="/signOut"} variant="outline" colorScheme="red">
               Logout 
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
