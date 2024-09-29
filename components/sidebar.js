import {
  Flex,
  Button,
  IconButton,
  Link as ChakraLink,
  useColorModeValue,
  Spinner
} from "@chakra-ui/react";
import { FaXTwitter, FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";

const Sidebar = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(null); // To track loading state for each link

  const handleClick = (path) => {
    setLoading(path); // Set the clicked link as loading
    router.push(path);
  };

  const links = [
    { href: "/dashboard", label: "Home" },
    { href: "/data", label: "Buy data" },
    { href: "/airtime", label: "Buy Airtime" },
    { href: "/hire", label: "Hire Us" },
    { href: "/airtime_to_cash", label: "Airtime to cash" },
    { href: "/refer", label: "Refer" },
    { href: "/bulkSMS", label: "Bulk SMS" },
    { href: "/fund", label: "Fund Wallet" },
    { href: "/about", label: "About Us" }
  ];

  const activeLinkColor = useColorModeValue("teal.600", "teal.300");

  return (
    <Flex
      minH="100vh"
      flexFlow="column"
      gap="4"
      align="flex-start"
      justify="flex-start"
      bg="white"
      p="6"
      width={{ lg: "250px", xl: "350px" }}
      position="fixed"
      left="0"
      top="0"
      zIndex="10"
      shadow="lg"
      mt="5.5em"
    >
      {links.map((link) => (
        <ChakraLink
          as={Button}
          key={link.href}
          onClick={() => handleClick(link.href)}
          w="full"
          size="lg"
          justifyContent="flex-start"
          bg={router.pathname === link.href ? activeLinkColor : "transparent"}
          color={router.pathname === link.href ? "white" : "black"}
          _hover={{
            bg: router.pathname === link.href ? activeLinkColor : "gray.100"
          }}
        >
          {link.label}
          {loading === link.href && (
            <Spinner ml={3} size="sm" color="white" />
          )}
        </ChakraLink>
      ))}

      <Button w="full" size="lg" colorScheme="red">
        Logout
      </Button>

      <Flex align="center" justify="center" gap="4" mt="4">
        <IconButton size="md" icon={<FaXTwitter />} />
        <IconButton size="md" icon={<FaFacebookF />} />
        <IconButton size="md" icon={<FaInstagram />} />
        <IconButton size="md" icon={<FaLinkedin />} />
      </Flex>
    </Flex>
  );
};

export default Sidebar;
