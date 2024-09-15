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
        {/* Title */}
        <title>Login to Your Mylezic Account | Secure Access</title>

        {/* Meta Description */}
        <meta 
          name="description" 
          content="Login to your Mylezic account to access all our services. Enjoy secure and easy access to your dashboard for managing your transactions and profile." 
        />

        {/* Keywords */}
        <meta 
          name="keywords" 
          content="login, Mylezic login, account access, secure login, Mylezic account" 
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://mylezic.com.ng/login" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Login to Your Mylezic Account | Secure Access" />
        <meta 
          property="og:description" 
          content="Access your Mylezic account securely. Manage your transactions, view your profile, and explore our services by logging in." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mylezic.com.ng/login" />
        <meta property="og:image" content="/logo.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Login to Your Mylezic Account | Secure Access" />
        <meta 
          name="twitter:description" 
          content="Log in securely to your Mylezic account and take control of your profile and transactions." 
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
        <meta name="application-name" content="Mylezic Login Portal" />

        {/* Structured Data for Search Engines */}
        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "WebPage",
              "name": "Login Page",
              "description": "Secure login to access your Mylezic account. Manage your profile, view transactions, and access all our services.",
              "provider": {
                "@type": "Organization",
                "name": "Mylezic",
                "url": "https://mylezic.com.ng"
              },
              "image": "https://mylezic.com.ng/logo.png",
              "url": "https://mylezic.com.ng/login"
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
        minH="100vh"
        justify="center"
        align="center"
        flexFlow="column wrap"
        p="1em"
        w="full"
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

        <Flex w="full" justify="space-between" mb="1em">
          <Link color="teal" onClick={() => router.push('/reset_password')}>
            Forgot password?
          </Link>
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
    
