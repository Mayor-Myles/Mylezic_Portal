import { Box, Heading, Text, Image, VStack, Stack, useColorModeValue } from '@chakra-ui/react';
import Head from 'next/head';
import NavbarTop from "topNavbar";



export default function About() {
  return (
    <>
      {/* Head Section */}
      <Head>
        <title>About Us | Mylezic - Our Vision, Mission, and Values</title>
        <meta 
          name="description" 
          content="Learn more about Mylezic, our mission, vision, and the values that drive our commitment to providing top-quality digital services. Join us on our journey of innovation." 
        />
        <meta 
          name="keywords" 
          content="about Mylezic, Mylezic mission, digital services, Mylezic values, about us" 
        />
        <link rel="canonical" href="https://mylezic.com.ng/about" />
        <meta property="og:title" content="About Us | Mylezic - Our Vision, Mission, and Values" />
        <meta 
          property="og:description" 
          content="Discover more about Mylezic, our goals, and the values that guide us in delivering exceptional digital solutions. Explore our story and what makes us unique." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mylezic.com.ng/about" />
        <meta property="og:image" content="/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | Mylezic - Our Vision, Mission, and Values" />
        <meta 
          name="twitter:description" 
          content="Get to know Mylezic better—our mission, vision, and dedication to providing premium digital services. We’re committed to innovation and excellence." 
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
        <meta name="application-name" content="Mylezic About Page" />
      </Head>
<NavbarTop/>
            
      {/* About Page Content */}
      <Box 
        bg={useColorModeValue('gray.100', 'gray.900')} 
        p={8} 
        minH="100vh"
      >
        <VStack spacing={8} align="center">
          <Heading 
            as="h1" 
            fontSize={{ base: '2xl', md: '4xl' }} 
            color={useColorModeValue('teal.600', 'teal.300')}
          >
            About Mylezic
          </Heading>
          <Text 
            fontSize={{ base: 'md', md: 'lg' }} 
            textAlign="center" 
            maxW="3xl"
          >
            At Mylezic, we are committed to delivering innovative digital solutions that empower businesses and individuals. 
            Our mission is to provide top-quality services with a focus on reliability, efficiency, and customer satisfaction. 
            Whether you are looking for seamless airtime conversion, affordable data plans, or professional hiring services, 
            Mylezic is here to serve you with excellence.
          </Text>
          <Image 
            src="/av2.jpg" 
            alt="About Mylezic" 
            borderRadius="md" 
            boxShadow="lg" 
            maxW="600px" 
          />
        </VStack>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={8}
          mt={12}
          justify="center"
          align="center"
        >
          <VStack>
            <Heading 
              as="h2" 
              fontSize={{ base: 'xl', md: '2xl' }} 
              color={useColorModeValue('teal.600', 'teal.300')}
            >
              Our Vision
            </Heading>
            <Text textAlign="center" maxW="sm">
              To become a leading provider of innovative digital solutions that make everyday tasks easier and more accessible for everyone.
            </Text>
          </VStack>

          <VStack>
            <Heading 
              as="h2" 
              fontSize={{ base: 'xl', md: '2xl' }} 
              color={useColorModeValue('teal.600', 'teal.300')}
            >
              Our Mission
            </Heading>
            <Text textAlign="center" maxW="sm">
              To consistently deliver high-quality services that meet the needs of our customers, while maintaining a strong commitment to integrity, excellence, and customer satisfaction.
            </Text>
          </VStack>
        </Stack>

        <VStack mt={12} spacing={4}>
          <Heading 
            as="h2" 
            fontSize={{ base: 'xl', md: '2xl' }} 
            color={useColorModeValue('teal.600', 'teal.300')}
          >
            Our Values
          </Heading>
          <Text textAlign="center" maxW="3xl">
            We believe in integrity, innovation, customer-centricity, and continuous improvement. These values guide every decision we make and help us deliver the best possible solutions to our clients.
          </Text>
        </VStack>
      </Box>
    </>
  );
}
