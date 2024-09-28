import React from 'react';
import { Box, Button, Flex, Heading, Text, Image, Stack, IconButton,useToast} from "@chakra-ui/react";
import { FaFacebook, FaWhatsapp, FaInstagram, FaFacebookMessenger, FaEnvelope, FaTwitter } from 'react-icons/fa';
import NavbarTop from "../components/topNavbar";
import NavbarBottom from "../components/bottomNavbar";
import Sidebar from "../components/sidebar";
import Head from "next/head";
import {userData} from "../states/recoil";
import {useRecoilState} from "recoil";






const Refer = () => {


  const [user,setUser] = useRecoilState(userData);
  
  const referralCode = user.referral;

  const toast = useToast();
  

  const copyCode = () => {
    
    const referral = referralCode; // Make sure this is defined

  
    toast.closeAll();
    navigator.clipboard.writeText(" "+referral+" ")
      .then(() => {
        toast({
          description: "Copied to clipboard",
          duration: 2000,
          status: "success",
          position:"top"
        });
      })
      .catch((error) => {
        console.error('Failed to copy text: ', error);
        toast({
          description: "Failed to copy",
          duration: 2000,
          status: "error",
        });
      });
  }

  

  return (

    <>

    <Head>
  {/* Title */}
  <title>Refer and Earn with Mylezic | Earn Rewards for Referrals</title>

  {/* Meta Description */}
  <meta 
    name="description" 
    content="Refer friends to Mylezic and earn rewards for each successful referral. Join our referral program and start earning today!" 
  />

  {/* Keywords */}
  <meta 
    name="keywords" 
    content="refer and earn, referral program, earn rewards, make money, refer friends, Mylezic" 
  />

  {/* Canonical URL */}
  <link rel="canonical" href="https://mylezic.com.ng/refer" />

  {/* Open Graph Tags */}
  <meta property="og:title" content="Refer and Earn with Mylezic | Earn Rewards for Referrals" />
  <meta 
    property="og:description" 
    content="Earn rewards by referring your friends and family to Mylezic. Join our referral program and get rewarded for every successful sign-up." 
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://mylezic.com.ng/refer" />
  <meta property="og:image" content="/logo.png" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Refer and Earn with Mylezic | Earn Rewards for Referrals" />
  <meta 
    name="twitter:description" 
    content="Start earning today with Mylezic’s refer and earn program. Share your referral link and get rewards for every new user." 
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
  <meta name="application-name" content="Mylezic Referral Program" />

  {/* Structured Data for Search Engines */}
  <script type="application/ld+json">
    {`
      {
        "@context": "http://schema.org",
        "@type": "Service",
        "name": "Refer and Earn Program",
        "description": "Mylezic offers a rewarding referral program where you can earn by inviting others to join. Get paid for every successful sign-up through your referral link.",
        "provider": {
          "@type": "Organization",
          "name": "Mylezic",
          "url": "https://mylezic.com.ng"
        },
        "areaServed": {
          "@type": "Place",
          "name": "Global"
        },
        "image": "https://mylezic.com.ng/logo.png",
        "url": "https://mylezic.com.ng/refer"
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

      <NavbarTop/>


<Box display={{sm:"none",base:"none",md:"none",lg:"flex"}}>

  <Sidebar />

  </Box>

      
    <Flex align="center" justify="center" flexDirection="column"    
      p={5}
      maxW={{sm:'27em', base: '35em', md: '27em', lg: '25em', xl: '28em', '2xl':'30em', }} mx={{base:"2em",sm:'auto',md:"auto"}}
      borderRadius="lg" 
      minH="100vh"
    >
      <Flex justifyContent="center" alignItems="center" mb={4} bg="#f5f5f5" borderRadius="full" p="2">
        
        <Image 
          src="avatar.jpg" 
          alt="refer people to mylezic image" 
          boxSize="100px"
          objectFit="cover"
          borderRadius="full"
          mt="2"
        />
      </Flex>
      <Heading size="md" textAlign="center" mb={2}>
        Invite your friends to Earn!
      </Heading>
      <Text textAlign="center" mb={6}>
        Share your code and earn when they hire us for <Text as="span" fontWeight="bold">Website development,graphics design or any other services</Text>. We pay you when they pay us!!!
      </Text>
      <Button onClick={copyCode} colorScheme="teal" variant="outline" width="100%" mb={4}>
      Copy - ({referralCode})
      </Button>
      <Text textAlign="center" mb={2}>OR</Text>
      <Text textAlign="center" mb={2}>Share</Text>
      <Stack direction="row" spacing={4} justify="center">
        <IconButton
          icon={<FaFacebook />}
          aria-label="Share on Facebook"
          colorScheme="facebook"
          onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=https://mylezic.com.ng`, '_blank')}
        />
        <IconButton
          icon={<FaWhatsapp />}
          aria-label="Share on WhatsApp"
          colorScheme="whatsapp"
          onClick={() => window.open(`https://api.whatsapp.com/send?text=Check%20this%20out. Buy cheap data , airtime, send  bulksms with custom sender name. Hire them for website development, graphics design and more.:%20https://mylezic.com.ng/register Use my referralCode to get more discounts.
         My referral code is  **${referralCode}**`, '_blank')}
        />
        <IconButton
          icon={<FaInstagram />}
          aria-label="Share on Instagram"
          colorScheme="pink"
          onClick={() => window.open(`https://www.instagram.com/?url=https://mylezic.com.ng/register`, '_blank')}
        />
        <IconButton
          icon={<FaFacebookMessenger />}
          aria-label="Share on Messenger"
          colorScheme="messenger"
          onClick={() => window.open(`fb-messenger://share?link=https://mylzic.com.ng/register&app_id=YOUR_APP_ID`, '_blank')}
        />
        <IconButton
          icon={<FaEnvelope />}
          aria-label="Share via Email"
          colorScheme="red"
          onClick={() => window.open(`mailto:?subject=${encodeURIComponent('Check this out!')}&body=${encodeURIComponent('Check this out: https://mylzic.com.ng/register')}`)}
        />
        <IconButton
          icon={<FaTwitter />}
          aria-label="Share on Twitter"
          colorScheme="twitter"
          onClick={() => window.open(`https://twitter.com/intent/tweet?url=https://mylezic.com.ng/register&text=Check%20this%20out:`, '_blank')}
        />
      </Stack>

      
    </Flex>
  
      

      
      <NavbarBottom/>
    </>
  );
};

export default Refer;
