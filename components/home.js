import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Image,
  Grid,
  SimpleGrid,
  GridItem,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Stack,
  Avatar,
  Input,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import {useRouter} from "next/router";
import {FaStar} from "react-icons/fa";
import Link from "next/link";
import Head from "next/head";



function Home() {

  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

const testimonials = [
  {
    name: "Adeyemi Deborah",
    role: "Entrepreneur",
    image:"debbie.jpg",
    quote: "A very nice portal. Very fast and easy to use. The custom care is always very helpful and ready to assit if there is ever a problem. Keep it up!!!",
  },
  {
    name: "Ayokanmi Ajayi",
    role: "Artiste",
    image: "kanmi.jpg",
    quote: "I use them on a regular. They are very okay. There support is fast to attend to issues if there is any. Not a bad service.",
  },
  {
    name: "John Opeyemi",
    role: "Engineer",
    image: "john.jpg",
    quote: "This guys are trying. I see them flying higher. They have Excellent professionals.",
  },

];
  
  return (

    <>
      <Head>
  {/* Title */}
  <title>Welcome to Mylezic - Innovative Digital Solutions</title>

  {/* Meta Description */}
  <meta 
    name="description" 
    content="Discover Mylezic, where we offer innovative digital solutions including airtime to cash conversion, bulk SMS services, affordable data plans, and professional hiring services. Explore our offerings and join us in transforming digital experiences." 
  />

  {/* Keywords */}
  <meta 
    name="keywords" 
    content="Mylezic, digital solutions, airtime to cash, bulk SMS, data plans, web development, graphic design, UI/UX design, hiring services" 
  />

  {/* Canonical URL */}
  <link rel="canonical" href="https://mylezic.com.ng" />

  {/* Open Graph Tags */}
  <meta property="og:title" content="Welcome to Mylezic - Innovative Digital Solutions" />
  <meta 
    property="og:description" 
    content="Explore Mylezic for cutting-edge digital solutions including airtime conversion, bulk SMS, affordable data, and professional services. Join us in redefining digital experiences." 
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://mylezic.com.ng" />
  <meta property="og:image" content="/logo.png" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Welcome to Mylezic - Innovative Digital Solutions" />
  <meta 
    name="twitter:description" 
    content="Discover Mylezic for innovative digital services including airtime to cash conversion, bulk SMS, data plans, and professional hiring. Transform your digital experience with us." 
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
  <link rel="icon" href="/logo.png" />

  {/* Additional SEO Tags */}
  <meta property="og:site_name" content="Mylezic" />
  <meta name="theme-color" content="teal" />
  <link rel="apple-touch-icon" href="/logo.png" />
  <meta name="application-name" content="Mylezic Home Page" />

  {/* Structured Data for Search Engines */}
  <script type="application/ld+json">
    {`
      {
        "@context": "http://schema.org",
        "@type": "Organization",
        "name": "Mylezic",
        "url": "https://mylezic.com.ng",
        "logo": "https://mylezic.com.ng/logo.png",
        "description": "Mylezic offers innovative digital solutions including airtime to cash conversion, bulk SMS services, affordable data plans, and professional hiring services.",
        "sameAs": [
          "https://x.com/Mylezic?t=rZ-XsKl0de9aDIJL_1LREA&s=09",
          "https://www.facebook.com/profile.php?id=61564236574047",
          "https://www.instagram.com/mylezic",
          "https://linkedin.com/mylezic"
        ]
      }
    `}
  </script>
</Head>
      
    <Box>
      
      {/* Header Section */}
      <Flex shadow="sm" position ="fixed" zIndex="999" top="0" bg="white" w="full" as="header" align="center" justify="space-between" py={4} px={2}>
        <Heading as="h1" size="sm">Mylezic</Heading>
        <IconButton
          display={{ base: "block", md: "none" }}
          icon={<HamburgerIcon />}
          onClick={onOpen}
          aria-label="Open Menu"
        />
        <HStack display={{ base: "none", md: "flex" }} spacing={6}>
          <Text onClick={()=>router.push('/')}>Home</Text>

                    <Text onClick={()=>router.push('/data')}>Buy data</Text>
                    <Text onClick={()=>router.push('/hire')}>Hire Us</Text>
                    <Text onClick={()=>router.push('/airtime')}>Buy airtime</Text>
                    <Text onClick={()=>router.push('/bulkSMS')}>Bulk SMS</Text>
             <Text onClick={()=>router.push('/airtime_to_cash')}>Airtime to cash</Text>   
                    
          
         
          
        </HStack>
      </Flex>

      {/* Sidebar for Mobile */}
      <Drawer  isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Mylezic</DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} align="start">
              <Text onClick={()=>router.push('/')}>Home</Text>
              
              <Text  onClick={()=>router.push('/data')}>Buy data</Text>
              <Text onClick={()=>router.push('/hire')}>Hire Us</Text>
              <Text onClick={()=>router.push('/airtime')}>Buy airtime</Text>
              <Text onClick={()=>router.push('/bulkSMS')}>Bulk SMS</Text>
       <Text onClick={()=>router.push('/airtime_to_cash')}>Airtime to cash</Text>   
     <Text onClick={()=>router.push('/about')}>About us</Text>         
              
              
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* Hero Section */}
      <Box mt="5em" as="section" py={15} px={8} bgg="gray.50">
        <Flex direction={{ base: "column", md: "row" }} align="center">
          <VStack align="start" spacing={6} flex={1}>
            <Text color="teal.600" fontWeight="bold">Telecommunications & IT Solutions</Text>
            <Heading as="h3" size={{sm:"lg",base:"md",md:"xl"}} maxW="md">We build creative websites, cheap data bundles, airtime to cash, Bulk SMS and more.</Heading>
            <Text color="gray.600">Mylezic offers a relaible service which is specifically tailored for your needs. Your satisfaction is always our concern.</Text>
            <Button onClick={()=>router.push('/register')} colorScheme="teal">Sign up / Login</Button>
          </VStack>
          <Image
            src="av4.jpg"
            alt="Person working on laptop"
            objectFit="cover"
            boxSize={{ base: "300px", md: "400px" }}
            borderRadius="full"
            mt={{ base: 6, md: 0 }}
            ml={{ md: 10 }}
          />
        </Flex>
      </Box>

      {/* About Us Section */}
      <Box mx={[1,10]} as="section" py={20} px={8} bgg="white">
        <Flex direction={{ base: "column", md: "row" }} align="center">
          <Image
            src="avatar.jpeg"
            alt="Teamwork"
            boxSize={{ base: "380px", md: "400px" }}
            borderRadius="md"
            mb={{ base: 6, md: 0 }}
            mr={{ md: 10 }}
            objectFit="contain"
          />
          <VStack align="center" spacing={4} flexx={1}>
            <Heading as="h3" size="lg">We are here to creatively solve your Telecoms and IT needs</Heading>
            <Text color="gray.600">Affordable services in due time with top notch professionals tailored specifically for you.</Text>
            <HStack spacing={10} mt={6}>
              <VStack align="center">
                <Text color="teal.600" fontWeight="bold" fontSize="2xl">200+</Text>
                <Text color="gray.600">Projects Delivered</Text>
              </VStack>
              <VStack align="center">
                <Text color="teal.600" fontWeight="bold" fontSize="2xl">120+</Text>
                <Text color="gray.600">Happy Clients</Text>
              </VStack>
              <VStack align="center">
                <Text color="teal.600" fontWeight="bold" fontSize="2xl">100+</Text>
                <Text color="gray.600">Positive Reviews </Text>
              </VStack>
            </HStack>
          </VStack>
        </Flex>
      </Box>

      {/* Services Section */}
      <Box as="section" py={20} px={8} bgg="gray.900">
        <Heading as="h3" size="lg" color="white" textAlign="center" mb={10}>
          What we do
        </Heading>
        <Grid mx={[1,"1em"]} templateColumns={["1fr", "repeat(2, 1fr)", "repeat(3,1fr)"]} gap={6}>
          <GridItem bg="gray.800" p={6} borderRadius="md">
            <Heading as="h4" size="md" color="white">Cheap Data </Heading>
            <Text color="gray.400" mt={2}>Enjoy affordable data plans to surf the Internet, play games online, watch movies and more.</Text>
          </GridItem>
          <GridItem bg="gray.800" p={6} borderRadius="md">
            <Heading as="h4" size="md" color="white">Web Development</Heading>
            <Text color="gray.400" mt={2}>We create beautiful and interactive websites/ Web apps that are mobile friendly in due time at a comfortable cost.</Text>
          </GridItem>
          <GridItem bg="gray.800" p={6} borderRadius="md">
            <Heading as="h4" size="md" color="white">Airtime to cash </Heading>
            <Text color="gray.400" mt={2}>We can help you convert your excess airtime into cash at a convenient charge fee.</Text>
          </GridItem>
          <GridItem bg="gray.800" p={6} borderRadius="md">
            <Heading as="h4" size="md" color="white">UI/UX</Heading>
            <Text color="gray.400" mt={2}>Beautiful and interactive websites & apps that are mobile friendly.</Text>
          </GridItem>
          <GridItem bg="gray.800" p={6} borderRadius="md">
            <Heading as="h4" size="md" color="white">Graphics design</Heading>
            <Text color="gray.400" mt={2}>We can help you craft out your graphics design with our professiinal who have years of experience in the field. </Text>
          </GridItem>
          <GridItem bg="gray.800" p={6} borderRadius="md">
            <Heading as="h4" size="md" color="white">Airtime</Heading>
            <Text color="gray.400" mt={2}>Get airtime with discounts to call your friends and family.</Text>
          </GridItem>
          <GridItem bg="gray.800" p={6} borderRadius="md">
            <Heading as="h4" size="md" color="white">Bulk SMS </Heading>
            <Text color="gray.400" mt={2}>Reach several people with a single message and a customized sender name.</Text>
          </GridItem>
        </Grid>
      </Box>

{/* Testimonial */}

<Box as="section" mx="1em">    
    
  <VStack py={10} px={1} spacing={8}>
    <Text fontSize="3xl" fontWeight="bold" textAlign="center">
      Testimonials
    </Text>
    <Stack
      direction={["column", "row"]}
      spacing={[8, 4]}
      align="center"
      justify="center"
      flexFlow="wrap"
    >
      {testimonials.map((testimonial, index) => (
        <Box
          key={index}
          maxW="sm"
          border="0.1px solid teal"
          borderRadius="lg"
          overflow="hidden"
          bg="white"
          p={6}
          boxShadow="lg"
        >
          <Flex align="center" mb={4}>
            <Avatar size="xl" name={testimonial.name} src={testimonial.image} mr={4} />
            <Box>
              <Text fontWeight="bold" fontSize="xl">
                {testimonial.name}
              </Text>
              <Text color="gray.500">{testimonial.role}</Text>
            </Box>
          </Flex>
          <Text fontSize="sm" color="gray.700">
            {testimonial.quote}
          </Text>

<Flex gap="1" align="center" justify="center" mt="1em">

  <Box><FaStar color="orange" size="1em"  /></Box>
   <Box><FaStar color="orange" size="1em"  /></Box>
   <Box><FaStar color="orange" size="1em"  /></Box>
   <Box><FaStar color="orange" size="1em"  /></Box>
   <Box><FaStar color="orange" size="1em"  /></Box>
  
</Flex>

        </Box>
      ))}
    </Stack>
  </VStack>
      
    </Box>


      {/*Footer*/}

          <Box bg="teal.800" color="white">
            
      {/* Newsletter Subscription Section */}
      <Box bg="teal.200" py={10} px={5}>
        <Flex direction={["column", "row"]} justify="space-between" align="center" maxW="6xl" mx="auto">
          <Stack spacing={3}>
            <Text fontSize="2xl" fontWeight="bold">Subscribe To Our Newsletter</Text>
            <Text>Sign up today to get any offers from us.</Text>
          </Stack>
          <Flex mt={[5, 0]} align="center">
            <Input placeholder="Enter email address" bg="white" border="0" />
            <Button ml={3} bg="teal.400" color="white" _hover={{ bg: "teal.500" }}>
              Get Listed
            </Button>
          </Flex>
        </Flex>
      </Box>


            
      {/* Footer Links Section */}
      <Box py={10} px={5}>
        
        <Flex gap="5" maxW="6xl" mx="auto" justify="space-evenly" direction={["column", "row"]}>
          
          {/*<Stack spacing={3} mb={[8, 0]}>
            <Text fontSize="xl" fontWeight="bold">Mylezic</Text>
            <Text>No need to worry, we'll help you make sense of it all.</Text>
            <Flex>
              <Input placeholder="Your email" bg="white" border="0" />
              <Button ml={3} bg="teal.400" color="white" _hover={{ bg: "teal.500" }}>
                &rarr;
              </Button>
            </Flex>
          </Stack>*/}
          
          <SimpleGrid columns={[1, 2,3]} spacing={8} flex="1">

<Stack spacing={3} mb={[8, 0]}>
            <Text fontSize="xl" fontWeight="bold">Mylezic</Text>
            <Text>No need to worry, we will help you make sense of it all.</Text>
            <Flex>
              <Input placeholder="Your email" bg="white" border="0" />
              <Button ml={3} bg="teal.400" color="white" _hover={{ bg: "teal.500" }}>
                &rarr;
              </Button>
            </Flex>
          </Stack>

            
            <Stack spacing={2}>
              <Text fontSize="lg" fontWeight="bold">Contact Us</Text>
              <Box>
                <Text>Email:</Text>
                <Link href="mailto:support@mylezic.com.ng">support@mylezic.com.ng</Link>
              </Box>
              <Box>
                <Text>Phone:</Text>
                <Link href="tel:+2347014443158">07014443158</Link>
              </Box>
              <Box>
                <Text>Address 1:</Text>
                <Text>Tipper Garage, Off Akala Express, Ibadan</Text>
              </Box>
              <Box>
                <Text>Address 2:</Text>
                <Text>Canaan Street, Egbe, Kogi State</Text>
              </Box>
            </Stack>

            
            
            <Stack spacing={2}>
              <Text fontSize="lg" fontWeight="bold">Services</Text>
              <Link href="/hire">Web development</Link>
              <Link href="/hire">Graphics design</Link>
              <Link href="/airtime_to_cash">Airtime to cash</Link>
              <Link href="/data">Data bundle</Link>
              <Link href="/hire">UI/UX</Link>

     <Link href="/bulkSMS">Bulk SMS</Link>         
            </Stack>
            
            <Stack spacing={2}>
              <Text fontSize="lg" fontWeight="bold">Social Media</Text>
              <Link href="https://x.com/Mylezic?t=rZ-XsKl0de9aDIJL_1LREA&s=09">Twitter</Link>
              <Link href="https://www.facebook.com/profile.php?id=61564236574047">Facebook</Link>
              <Link href="https://www.instagram.com/mylezic">Instagram</Link>
              <Link href="https://linkedin.com/mylezic">LinkedIn</Link>
            </Stack>

            
          </SimpleGrid>
        </Flex>
      </Box>

      {/* Copyright Section */}
      <Box textAlign="center" p={10} bg="teal.900">
        <Text fontSize="sm">© Copyright {new Date().getFullYear()} All rights reserved.</Text>
      </Box>
    </Box>
    
    
    </Box>

    </>
  );
}

export default Home;
