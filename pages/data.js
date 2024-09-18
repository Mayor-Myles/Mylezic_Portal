import NavbarTop from "../components/topNavbar";
import NavbarBottom from "../components/bottomNavbar";
import Wallet from "../components/wallet";
import {Box, Flex, Text, Grid, IconButton, Button, Image, Input, Modal, ModalContent, ModalFooter, ModalBody, ModalOverlay, ModalHeader, Spinner, useToast} from "@chakra-ui/react";
import {useState, useEffect} from "react";
import Sidebar from "../components/sidebar";
import Head from "next/head";
import {useRecoilState} from "recoil";
import {dataPlansState, csrfState, userData} from "../states/recoil";
import axios from "axios"; // Importing axios

const Data = () => {

  const [network, setNetwork] = useState("mtn");
  const [plan, setPlan] = useRecoilState(dataPlansState);
  const [selected, setSelected] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [planId, setPlanId] = useState(null);
  const [csrf, setCsrf] = useRecoilState(csrfState);
  const [user, setUser] = useRecoilState(userData);
  const [btnLoading, setBtnLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [planName, setPlanName] = useState("");

  const select = (index, planName) => {
    setSelected(index);
    setPlanName(planName);
    setOpenModal(true);
  };

  const toast = useToast();

  if (!plan && !csrf) {
    return (
      <Flex align="center" justify="center" minH="100vh">
        <Spinner size="xl" color="teal" />
      </Flex>
    );
  }

  const submitForm = () => {
    setBtnLoading(true);

    const data = {
      network: network,
      planId: planId,
      phoneNumber: phoneNumber,
      csrf: csrf,
    };

    const fields = Object.values(data).every(Boolean);
    if (!fields) {
      toast.closeAll();
      setBtnLoading(false);

      toast({
        title: "Info",
        description: "Please pick a plan and enter recipient phone number ",
        position: "top",
        isClosable: true,
        status: "info",
        duration: 5000,
      });

      setBtnLoading(false);
      return;
    }

    const url = "https://cbrbakery.com.ng/api/buyData";

    // Using axios for the POST request
    axios.post(url, data)
      .then((res) => {
        setCsrf(res.data.token);
        setBtnLoading(false);

        if (res.data.status === "success") {
          setOpenModal(false);
          setUser(res.data.userData);

          toast({
            title: "Congrats 🎉",
            description: "Your data plan purchase is successful. You will receive an SMS shortly. Thanks for trusting us!!!",
            status: "success",
            duration: 6000,
            isClosable: true,
          });
        } else {
          toast({
            title: "Error",
            description: res.data.message,
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        }
      })
      .catch((error) => {
        toast({
          title: "Error",
          description: "Your request could not be processed. " + error.message,
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
        setBtnLoading(false);
      });
  }; // End of submitForm

  return (
    <>
      <Head>
        {/* SEO tags */}
        <title>Buy Affordable Data Plans | Mylezic - Fast and Reliable Data Service</title>
        <meta name="description" content="Buy affordable data plans with Mylezic. Get fast, reliable, and cost-effective data for all networks. Convenient and secure transactions for all your data needs." />
        <meta name="keywords" content="buy data, affordable data plans, cheap data, fast data service, data for all networks, Mylezic" />
        <link rel="canonical" href="https://mylezic.com.ng/data" />
        <meta property="og:title" content="Buy Affordable Data Plans | Mylezic - Fast and Reliable Data Service" />
        <meta property="og:description" content="Get the best deals on data plans with Mylezic. Affordable and reliable data for all networks with quick, secure transactions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mylezic.com.ng/data" />
        <meta property="og:image" content="/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Buy Affordable Data Plans | Mylezic - Fast and Reliable Data Service" />
        <meta name="twitter:description" content="Buy data at affordable rates with Mylezic. Enjoy fast and reliable service for all your data needs across all networks." />
        <meta name="twitter:image" content="/logo.png" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Mylezic" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/logo.png" />
        <meta property="og:site_name" content="Mylezic" />
        <meta name="theme-color" content="teal" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta name="application-name" content="Mylezic Data Service" />
        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "Service",
              "name": "Data Purchase Service",
              "description": "Mylezic offers affordable and reliable data plans for all networks. Quick, secure transactions to keep you connected with ease.",
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
              "url": "https://mylezic.com.ng/data"
            }
          `}
        </script>
      </Head>

      <NavbarTop />
      <Box display={{ sm: "none", base: "none", md: "none", lg: "flex", xl: "flex" }}>
        <Sidebar />
      </Box>

      <Flex minH="100vh" align="center" justify="center" flexFlow="column" maxW={{ sm: '27em', base: '35em', md: '27em', lg: '25em', xl: '28em', '2xl': '30em' }} mx={{ base: "2em", sm: 'auto', md: "auto" }} gap="6" mt="2.5em">
        <Wallet />

        <Flex align="center" justify="center" gap="4">
          <IconButton onClick={() => setNetwork("mtn")} shadow="lg" border={network == "mtn" && "1px solid teal"}>
            <Image alt="mtn" borderRadius="full" w="30px" h="30px" objectFit="contain" src="mtn.png" />
          </IconButton>

          <IconButton onClick={() => setNetwork("airtel")} shadow="lg" border={network == "airtel" && "1px solid teal"}>
            <Image alt="airtel" borderRadius="full" w="30px" h="30px" objectFit="cover" src="airtel.png" />
          </IconButton>

          <IconButton onClick={() => setNetwork("glo")} shadow="lg" border={network == "glo" && "1px solid teal"}>
            <Image alt="glo" borderRadius="full" w="30px" h="30px" objectFit="cover" src="glo.png" />
          </IconButton>

          <IconButton onClick={() => setNetwork("9mobile")} shadow="lg" border={network == "9mobile" && "1px solid teal"}>
            <Image alt="9mobile" borderRadius="full" w="30px" h="30px" objectFit="cover" src="9mobile.png" />
          </IconButton>
        </Flex>

        <Grid gap="6" templateColumns={{ base: "repeat(3,1fr)" }} mb="5em">
          {plan && plan[network].map((item, index) => (
            <Box h={{ base: "95px", md: "100px" }} w={{ base: "95px", md: "100px" }} key={index} borderRadius="12px" cursor="pointer" border={selected === index ? "2px solid teal" : "2px solid gray"} onClick={() => { select(index, item.planName); setPlanId(item.planId); }} p="2" textAlign="center">
              <Text fontSize="12px" color="gray.500" textTransform="capitalize">{item.planName}</Text>
              <Text fontSize="11px" fontWeight="medium" textTransform="capitalize">₦{item.amount}</Text>
            </Box>
          ))}
        </Grid>

        <Modal isOpen={openModal} onClose={() => setOpenModal(false)} size="sm" motionPreset="slideInBottom" isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader fontSize="lg">Buy {planName}</ModalHeader>
            <ModalBody>
              <Text textAlign="center">Enter Recipient Phone Number</Text>
              <Input mt="2em" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Enter Phone Number" />
            </ModalBody>
            <ModalFooter>
              <Button onClick={submitForm} w="100%" isLoading={btnLoading} loadingText="Processing" colorScheme="teal">Purchase</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>

      <NavbarBottom />
    </>
  );
};

export default Data;
  
