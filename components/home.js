import React, { useState } from "react";
import { useRouter } from "next/router";
import { Box, Container, Grid, GridItem, Heading, Text, Button, Image, Stack, Input, Avatar, HStack, IconButton, useBreakpointValue, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Adeyemi Deborah",
    role: "Entrepreneur",
    image: "/debbie.jpg",
    quote: "A very nice portal. Very fast and easy to use. Customer care is always very helpful!",
  },
  {
    name: "Ayokanmi Ajayi",
    role: "Artiste",
    image: "/kanmi.jpg",
    quote: "I use them regularly. They are very okay. Support is fast and efficient.",
  },
  {
    name: "John Opeyemi",
    role: "Engineer",
    image: "/john.jpg",
    quote: "These guys are excellent professionals. Keep up the great work!",
  },
];

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box>
      {/* Navbar */}
      <Box
        as="nav"
        position="fixed"
        top="0"
        width="100%"
        bg="green.500"
        color="white"
        zIndex="1000"
        py={4}
        boxShadow="md"
      >
        <Container maxW="container.xl" display="flex" justifyContent="space-between" alignItems="center">
          <Heading as="h1" size="lg" onClick={() => router.push("/")}>
            Mylezic
          </Heading>
          {isMobile ? (
            <IconButton
              aria-label="Open menu"
              icon={<HamburgerIcon />}
              onClick={onOpen}
              variant="outline"
              color="white"
            />
          ) : (
            <HStack spacing={8}>
              <Text cursor="pointer" onClick={() => router.push("/")}>Home</Text>
              <Text cursor="pointer" onClick={() => router.push("/data")}>Buy Data</Text>
              <Text cursor="pointer" onClick={() => router.push("/hire-professionals")}>Hire Us</Text>
              <Text cursor="pointer" onClick={() => router.push("/airtime")}>Airtime</Text>
              <Text cursor="pointer" onClick={() => router.push("/bulkSMS")}>Bulk SMS</Text>
            </HStack>
          )}
        </Container>
      </Box>

      {/* Hero Section */}
      <Box mt="6em" py={20} bg="green.50">
        <Container maxW="container.xl" display="flex" justifyContent="space-between" alignItems="center" flexDirection={{ base: "column", md: "row" }}>
          <Stack spacing={6} flex="1">
            <Text fontSize="xl" color="green.600" fontWeight="bold">
              Telecommunications & IT Solutions
            </Text>
            <Heading as="h3" size="lg" maxW="lg">
              We build creative websites, affordable data bundles, Bulk SMS, and more.
            </Heading>
            <Text color="gray.600" maxW="lg">
              Mylezic offers reliable services tailored to your needs. Your satisfaction is always our priority.
            </Text>
            <Button size={{base:"sm"}} colorScheme="green" onClick={() => router.push("/login")}>
              Join Us
            </Button>
          </Stack>
          <Image
            src="/avatar.jpg"
            alt="Person working on laptop"
            boxSize={{ base: "300px", md: "400px" }}
            objectFit="cover"
            borderRadius="full"
            mt={{ base: 6, md: 0 }}
            ml={{ md: 10 }}
          />
        </Container>
      </Box>

      {/* Services Section */}
      <Box py={20} bg="green.50">
        <Container maxW="container.xl">
          <Heading as="h2" size="xl" textAlign="center" mb={10} color="green.600">
            What We Do
          </Heading>
          <Grid templateColumns={{ base: "1fr", sm: "1fr 1fr", lg: "repeat(3, 1fr)" }} gap={6}>
            {[
              { title: "Cheap Data", description: "Affordable data plans for all your internet needs." },
              { title: "Web Development", description: "Beautiful and mobile-friendly websites/web apps." },
              { title: "Airtime to Cash", description: "Convert your excess airtime into cash quickly and easily." },
            ].map((service, index) => (
              <GridItem key={index} bg="white" p={6} borderRadius="md" boxShadow="md">
                <Heading as="h4" size="md" color="green.600">
                  {service.title}
                </Heading>
                <Text color="gray.600" mt={2}>
                  {service.description}
                </Text>
              </GridItem>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box py={20} bg="green.50">
        <Container maxW="container.xl">
          <Heading as="h2" size="xl" textAlign="center" mb={10} color="green.600">
            Testimonials
          </Heading>
          <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8}>
            {testimonials.map((testimonial, index) => (
              <GridItem key={index} bg="white" p={6} borderRadius="md" boxShadow="md">
                <Avatar size="xl" name={testimonial.name} src={testimonial.image} mb={4} />
                <Text fontSize="lg" fontWeight="bold" color="green.600">
                  {testimonial.name}
                </Text>
                <Text color="gray.500">{testimonial.role}</Text>
                <Text fontSize="md" color="gray.700" mt={4}>
                  {testimonial.quote}
                </Text>
                <HStack spacing={1} mt={4}>
                  {[...Array(5)].map((_, idx) => (
                    <FaStar key={idx} color={idx < 5 ? "yellow.400" : "gray"} />
                  ))}
                </HStack>
              </GridItem>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Newsletter Section */}
      <Box py={20} bg="green.600" color="white">
        <Container maxW="container.xl" textAlign="center">
          <Heading as="h3" size="lg" mb={4}>
            Subscribe To Our Newsletter
          </Heading>
          <Text fontSize="lg" mb={6}>
            Sign up today to get the latest offers and updates from us.
          </Text>
          <Input
            placeholder="Enter email address"
            bg="white"
            borderRadius="md"
            size="lg"
            width="50%"
            mb={4}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button colorScheme="green" size="lg" onClick={() => alert("Subscribed!")}>
            Subscribe
          </Button>
        </Container>
      </Box>

      {/* Footer */}
      <Box py={10} bg="green.700" color="white">
        <Container maxW="container.xl" textAlign="center">
          <Text fontSize="sm">
            © {new Date().getFullYear()} Mylezic. All rights reserved.
          </Text>
        </Container>
      </Box>
    </Box>
  );
}
