import React, {useState} from 'react';
import { Flex, Text, Input, Select, Textarea, Button,Box,useToast } from '@chakra-ui/react';
import NavbarTop from '../components/topNavbar';
import NavbarBottom from '../components/bottomNavbar';
//import Advert from '../components/adverts';
import Sidebar from "../components/sidebar";
import Head from "next/head";
import {csrfState,userData} from "../states/recoil";
import {useRecoilState} from "recoil";
import axios from "axios";

const Hire = () => {

const [csrf,setCsrf] = useRecoilState(csrfState);

  const [btnLoading,setBtnLoading] =  useState(false);


  const [user,setUser] = useRecoilState(userData);

const toast = useToast();

  const[formData,setFormData] = useState({

  service:null,
  phoneNumber:null,
  csrf:csrf,
  description:null,
});
  
const updateData = (key,value) => {

    setFormData((prev)=>({...prev,[key]:value}))
  
}

  
import axios from 'axios';
import { toast } from '@chakra-ui/react';

const submitForm = async () => {
  setBtnLoading(true);

  const fields = Object.values(formData).every(Boolean);

  if (!fields) {
    setBtnLoading(false);
    
    toast.closeAll();
    
    toast({
      title: "Oops",
      description: "Please fill all fields!!!",
      status: "info",
      duration: 5000,
      isClosable: true,
      position: "top",
    });

    return false;
  }

  const url = "https://cbrbakery.com.ng/api/hire";

  try {
    const response = await axios.post(url, formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = response.data;

    setCsrf(data.token);
    setBtnLoading(false);

    if (data.status === "success") {
      setUser(data.userData);

      toast.closeAll();
      toast({
        title: "Congrats 🎉",
        description: "Your request is completed. Our staff will contact you with the number you provided shortly.",
        status: "success",
        duration: 6000,
        isClosable: true,
        position: "top",
      });
      
    } else {
      toast.closeAll();
      toast({
        title: "Error",
        description: data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }
  } catch (error) {
    toast.closeAll();
    toast({
      title: "Error",
      description: "Your request could not be processed. " + error.message,
      status: "error",
      duration: 5000,
      isClosable: true,
      position: "top",
    });
  } finally {
    setBtnLoading(false);
  }
};
  
  return (
<>

  <Head>
  {/* Title */}
  <title>Hire Professional Web Developers, Graphics Designers, and UI/UX Designers | Mylezic</title>

  {/* Meta Description */}
  <meta 
    name="description" 
    content="Hire skilled web developers, graphics designers, and UI/UX designers at Mylezic. Get top-quality work from professionals to bring your projects to life." 
  />

  {/* Keywords */}
  <meta 
    name="keywords" 
    content="hire web developer, hire graphics designer, hire UI/UX designer, professional designers, skilled developers, Mylezic" 
  />

  {/* Canonical URL */}
  <link rel="canonical" href="https://mylezic.com.ng/hire" />

  {/* Open Graph Tags */}
  <meta property="og:title" content="Hire Professional Web Developers, Graphics Designers, and UI/UX Designers | Mylezic" />
  <meta 
    property="og:description" 
    content="Find expert web developers, graphics designers, and UI/UX designers at Mylezic. Get high-quality, professional services tailored to your project needs." 
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://mylezic.com.ng/hire" />
  <meta property="og:image" content="/logo.png" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Hire Professional Web Developers, Graphics Designers, and UI/UX Designers | Mylezic" />
  <meta 
    name="twitter:description" 
    content="Looking for expert web developers, graphics designers, or UI/UX designers? Hire top talent at Mylezic for your next project." 
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
  <meta name="application-name" content="Mylezic Hire Service" />

  {/* Structured Data for Search Engines */}
  <script type="application/ld+json">
    {`
      {
        "@context": "http://schema.org",
        "@type": "Service",
        "name": "Hire Web Developers, Graphics Designers, and UI/UX Designers",
        "description": "Mylezic offers professional web developers, graphics designers, and UI/UX designers for hire. Get quality service from experts to handle your projects with precision.",
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
        "url": "https://mylezic.com.ng/hire"
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

    <NavbarTop />


  <Box display={{sm:"none",base:"none",md:"none",lg:"flex"}}>

  <Sidebar />

  </Box>
    
    <Flex direction="column" minH="100vh" align="center" justify="center" gap="7" maxW={{sm:'27em', base: '35em', md: '27em', lg: '25em', xl: '28em', '2xl':'30em', }} mx={{base:"2em",sm:'auto',md:"auto"}}
>      
        
        <Text fontWeight="bold" fontSize="lg">
          Hire Us
        </Text>

        <Input onChange={(e)=>updateData("phoneNumber",e.target.value)} type="tel" placeholder="Active Whatsapp number" size="md" colorScheme="teal" value={formData.phoneNumber} />

        <Select onChange={(e)=>updateData("service",e.target.value)} size="md" colorScheme="teal" placeholder="Choose Service" value={formData.service}>
          <option value="web">Website Development</option>
          <option value="graphics">Graphics Design</option>
          <option value="ui/ux">UI/UX</option>
          <option value="others">Others</option>
        </Select>
      

<Textarea onChange={(e)=>updateData("description",e.target.value)}
          placeholder="Describe what you want us to do for you in details... e.g., Create an event banner for me for a wedding ceremony. The banner should be a simple and modern design. The color scheme should be a light blue and white. etc"
          size="md" h={{base:"13em",lg:"10em"}}
       value={formData.description} />

        <Button onClick={submitForm} isLoading={btnLoading} w="full"  size="md" colorScheme="teal">
          Request
        </Button>
      
      
    </Flex>

<NavbarBottom />
  </>
  );
};

export default Hire;
