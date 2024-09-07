import { Box, Heading, Text, VStack, Stack, useColorModeValue } from '@chakra-ui/react';
import Head from 'next/head';

export default function PrivacyPolicy() {
  return (
    <>
      {/* Head Section */}
      <Head>
        <title>Privacy Policy | Mylezic - Your Data, Our Priority</title>
        <meta 
          name="description" 
          content="Learn how Mylezic collects, uses, and protects your data. Our privacy policy is designed to safeguard your information and ensure transparency." 
        />
        <meta 
          name="keywords" 
          content="privacy policy, data protection, Mylezic privacy, information security, user privacy" 
        />
        <link rel="canonical" href="https://mylezic.com.ng/privacy-policy" />
        <meta property="og:title" content="Privacy Policy | Mylezic - Your Data, Our Priority" />
        <meta 
          property="og:description" 
          content="At Mylezic, we prioritize your privacy and are committed to safeguarding your information. Read our privacy policy to understand our practices." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mylezic.com.ng/privacy-policy" />
        <meta property="og:image" content="/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Privacy Policy | Mylezic - Your Data, Our Priority" />
        <meta 
          name="twitter:description" 
          content="Learn how Mylezic collects, uses, and protects your data. Your privacy is important to us, and our policy reflects our commitment to transparency." 
        />
        <meta name="twitter:image" content="/logo.png" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Mylezic" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/logo.png" />
        <meta property="og:site_name" content="Mylezic" />
        <meta name="theme-color" content="teal" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta name="application-name" content="Mylezic Privacy Policy" />
      </Head>

      {/* Privacy Policy Page Content */}
      <Box 
        bg={useColorModeValue('gray.100', 'gray.900')} 
        p={8} 
        minH="100vh"
      >
        <VStack spacing={8} align="start" maxW="3xl" mx="auto">
          <Heading 
            as="h1" 
            fontSize={{ base: '2xl', md: '4xl' }} 
            color={useColorModeValue('teal.600', 'teal.300')}
            textAlign="left"
          >
            Privacy Policy
          </Heading>
          <Text fontSize={{ base: 'md', md: 'lg' }} textAlign="left">
            Your privacy is critically important to us. At Mylezic, we have a few fundamental principles:
          </Text>

          <Stack spacing={4}>
            <Text fontSize="md">
              1. We don’t ask you for personal information unless we truly need it.
            </Text>
            <Text fontSize="md">
              2. We don’t share your personal information with anyone except to comply with the law, develop our products, or protect our rights.
            </Text>
            <Text fontSize="md">
              3. We don’t store personal information on our servers unless required for the ongoing operation of our services.
            </Text>
          </Stack>

          <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} color={useColorModeValue('teal.600', 'teal.300')}>
            Information We Collect
          </Heading>
          <Text fontSize={{ base: 'md', md: 'lg' }}>
            We collect information in the following ways:
          </Text>
          <Stack spacing={4}>
            <Text fontSize="md">
              - Information you provide us directly: For example, when you create an account or use our services.
            </Text>
            <Text fontSize="md">
              - Information we get from your use of our services: This includes data like your IP address, device information, and location.
            </Text>
          </Stack>

          <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} color={useColorModeValue('teal.600', 'teal.300')}>
            How We Use Information
          </Heading>
          <Text fontSize={{ base: 'md', md: 'lg' }}>
            We use the information we collect to provide, maintain, and improve our services, as well as to protect Mylezic and our users.
          </Text>

          <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} color={useColorModeValue('teal.600', 'teal.300')}>
            Information Security
          </Heading>
          <Text fontSize={{ base: 'md', md: 'lg' }}>
            We work hard to protect Mylezic and our users from unauthorized access, alteration, disclosure, or destruction of information we hold.
          </Text>

          <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} color={useColorModeValue('teal.600', 'teal.300')}>
            Changes to This Privacy Policy
          </Heading>
          <Text fontSize={{ base: 'md', md: 'lg' }}>
            Although most changes are likely to be minor, Mylezic may change its Privacy Policy from time to time. We encourage visitors to frequently check this page for any changes.
          </Text>
        </VStack>
      </Box>
    </>
  );
}
