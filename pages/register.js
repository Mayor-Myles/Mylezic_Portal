import React, { useState,useEffect } from 'react';
import {
  Box,
  Button,
  Flex,
  Input,
  Text,
  Image,
  InputGroup,
  InputRightElement,
  IconButton,
  useToast,
  Grid,
  Spinner,
  Link,
} from '@chakra-ui/react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { csrfState } from '../states/recoil';
import { useRecoilState } from 'recoil';
import axios from 'axios';

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
    refferal: '',
    csrf: '',
  });

  const router = useRouter();

  const toggleVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };


  

useEffect(() => {
    setFormData((prev) => ({ ...prev, ['csrf']: csrf }));
  }, [csrf,setCsrf]);

  
  
  const submitForm = () => {
    if (
      formData.fullname === '' ||
      formData.password === '' ||
      formData.email === '' ||
      formData.phoneNumber === '' ,
      formData.password.length < 6
    ) {
      toast({
        position: 'top',
        title: 'Warning',
        description: 'Please fill in the important fields!!! Refferal is not compulsory. Password cant be less than six(6) characters',
        status: 'warning',
        duration: 7000,
        isClosable: true,
      });
      return;
    }

    setLoading(true);

    const url = 'https://cbrbakery.com.ng/api/register';

    toast.closeAll();

    axios
      .post(url, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        setLoading(false);
        const data = response.data;
        

        if (data.status === 'success') {
          
          

          toast({
            title: 'Congrats 🎉 ',
            description:
              'You have successfully registered. Please click on login to sign in to your account.',
            duration: 7000,
            position: 'top',
            isClosable: true,
            status:'success',
          });
        } else {
          toast({
            title: 'Error',
            description: data.message,
            status: 'error',
            duration: 7000,
            isClosable: true,
            position:'top',
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
      <Flex align="center" justify="center" minH="100vh">
        <Spinner size="xl" color="teal" />
      </Flex>
    );
  }

  return (
    <>
      <Head>
        {/* Title */}
        <title>Register Your Account | Mylezic - Join Us Today</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Create your Mylezic account today and unlock access to our services. Register quickly and securely to start enjoying the best deals and features we offer."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="register, sign up, create account, Mylezic registration, join Mylezic, new account"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://mylezic.com.ng/register" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Register Your Account | Mylezic - Join Us Today" />
        <meta
          property="og:description"
          content="Sign up for a Mylezic account and gain access to exclusive features and services. Join our platform today and start experiencing more."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mylezic.com.ng/register" />
        <meta property="og:image" content="/logo.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Register Your Account | Mylezic - Join Us Today" />
        <meta
          name="twitter:description"
          content="Register for a Mylezic account now and enjoy quick access to our services and best offers. Easy and secure registration process."
        />
        <meta name="twitter:image" content="/logo.png" />

        {/* Robots Tag (Allow all crawling) */}
        <meta name="robots" content="index, follow" />

        {/* Author */}
        <meta name="author" content="Mylezic" />

        {/* Charset */}
        <meta charSet="UTF-8" />

        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Additional SEO Tags */}
        <meta property="og:site_name" content="Mylezic" />
        <meta name="theme-color" content="teal" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta name="application-name" content="Mylezic Registration Portal" />

        {/* Structured Data for Search Engines */}
        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "WebPage",
              "name": "Register Page",
              "description": "Sign up for a Mylezic account to access our exclusive services and offers. Create your account easily and securely.",
              "provider": {
                "@type": "Organization",
                "name": "Mylezic",
                "url": "https://mylezic.com.ng"
              },
              "image": "https://mylezic.com.ng/logo.png",
              "url": "https://mylezic.com.ng/register"
            },

            "sameAs": [
              "https://x.com/Mylezic?t=rZ-XsKl0de9aDIJL_1LREA&s=09",
              "https://www.facebook.com/profile.php?id=61564236574047",
              "https://www.instagram.com/mylezic",
              "https://linkedin.com/mylezic"
            ]
          `}
        </script>
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
          <Text fontSize="1.2em" fontWeight="bold">
            Create an account with us
          </Text>

          <Text mt="0">
            Have account?{' '}
            <Link onClick={() => router.push('/login')} color="teal">
              <Box as="a" color="teal">Login</Box>
            </Link>
          </Text>
        </Flex>

        <Flex align="center" justify="center" flexDirection="column" mt="3em" w="full">
          <InputGroup mb="1.3em">
            <Input
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, ['email']: e.target.value }))
              }
              type="email"
              placeholder="Email address"
              outline="none"
              bg="#F5F5F5"
              p="1.2em"
              border="0px"
              borderRadius="0.5em"
              size="lg"
              w="full"
              fontSize="14px"
            />
          </InputGroup>

          <InputGroup mb="1.3em">
            <Input
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, ['phoneNumber']: e.target.value }))
              }
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
            />
          </InputGroup>

          <InputGroup mb="1.3em">
            <Input
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, ['fullname']: e.target.value }))
              }
              type="text"
              placeholder="Fullname"
              outline="none"
              bg="#F5F5F5"
              p="1.2em"
              border="0px"
              borderRadius="0.5em"
              size="lg"
              w="full"
              fontSize="14px"
            />
          </InputGroup>

          <InputGroup mb="1.3em">
            <Input
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, ['password']: e.target.value }))
              }
              type={passwordVisible ? 'text' : 'password'}
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
            <InputRightElement w="4.5rem">
              <IconButton
                variant="ghost"
                colorScheme="teal"
                aria-label={passwordVisible ? 'Hide password' : 'Show password'}
                icon={passwordVisible ? <FaEyeSlash /> : <FaEye />}
                onClick={toggleVisibility}
              />
            </InputRightElement>
          </InputGroup>

          <InputGroup mb="1.3em">
            <Input
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, ['refferal']: e.target.value }))
              }
              type="text"
              placeholder="Referred By (optional)"
              outline="none"
              bg="#F5F5F5"
              p="1.2em"
              border="0px"
              borderRadius="0.5em"
              size="lg"
              w="full"
              fontSize="14px"
            />
          </InputGroup>
        </Flex>

        <Flex w="full" mt="1em">
          <Button onClick={submitForm} isLoading={loading} size="md" colorScheme="teal" w="full">
            Sign up
          </Button>
        </Flex>

        {/*  <Grid mt="1.3em" align="center">
          <Text>Sign up using social media</Text>
        </Grid>

        <Flex mt="1.3em" justify="space-between" w="full">
          <Button size="lg" colorScheme="facebook" w="full" mr="1em">
            Facebook
          </Button>
          <Button size="lg" colorScheme="red" w="full">
            Google
          </Button>
        </Flex>*/}

        <Flex mt="3em" align="center" justify="center" >
<Text fontWeight="bold">Mylezic</Text>
      </Flex>
      </Flex>
    </>
  );
};

export default Register;
    
