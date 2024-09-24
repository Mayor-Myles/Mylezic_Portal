import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, useToast, extendTheme, ColorModeScript, localStorageManager, Box, Flex, Spinner} from "@chakra-ui/react";
import { RecoilRoot, useRecoilState } from "recoil";
import { csrfState, userData, dataPlansState,merchantState,a2cState } from "../states/recoil";
import { useEffect ,useState} from "react";
import axios from 'axios';
import { mode } from '@chakra-ui/theme-tools';
import { useRouter } from "next/router";



function MyApp({ Component, pageProps }: AppProps) {

  const [isMounted, setIsMounted] = useState(false);
  //const[spinner,setSpinner] = useState("on");  
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    // Cleanup event listeners on unmount
    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  

  useEffect(() => {
    // Delay rendering the UI until the color mode has been applied
    const timer = setTimeout(() => {
      setIsMounted(true);
      
    }, 30); // A short delay (50ms) to ensure color mode is applied

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);


  
  if (!isMounted) {

    return(
      <ChakraProvider>
        
      <Flex align="center" minH="100vh" justify="center">
                 
      <Spinner size="xl" color="teal" />
                 
      </Flex>   

        </ChakraProvider>
    );
  }
  
  // Theme configuration
  const theme = extendTheme({
  config: {
    initialColorMode: localStorageManager.get() || "light", // Check local storage or fallback to light
    useSystemColorMode: false,
  },


    styles: {
      global: (props) => ({
        body: {
          bg: mode('white', 'gray.900')(props), // Light mode: white, Dark mode: gray.900
          color: mode('black', 'white')(props), // Light mode: black, Dark mode: white
        },
      }),
    },
  });

  return (
    <RecoilRoot>
      <ChakraProvider theme={theme} colorModeManager={localStorageManager}>
        {/* This ensures color mode is persistent */}
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <InitializeState />
                     {loading &&
                       (

                 <Flex align="center" minH="100vh" justify="center">
                 
                  <Spinner size="xl" color="teal" />
                 
                 </Flex>        
                       ) }
        <Component {...pageProps} />
      </ChakraProvider>
    </RecoilRoot>
  );
}

// Initializes state with CSRF token, user data, etc.
function InitializeState() {
  const [user, setUser] = useRecoilState(userData);
  const [csrf, setCsrf] = useRecoilState(csrfState);
  const [plan, setPlan] = useRecoilState(dataPlansState);
  const [pk,setPk] = useRecoilState(merchantState);
 const[a2c,setA2C] = useRecoilState(a2cState);
  const toast = useToast();

  useEffect(() => {
    const getToken = async () => {
      const url = "https://cbrbakery.com.ng/api/welcome";

      try {
        const response = await axios.get(url);

        if (response.data) {
          console.log(response.data);
          setCsrf(response.data.token);
          setUser(response.data.userData || null);
          setPlan(response.data.dataPlans || null);
          setPk(response.data.pk || null);
           setA2C(respose.data.a2c || null);
        } else {
          toast({
            title: "Error",
            description: "Page is expired. Please reload the page.",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        }
      } catch (error: any) {
        toast({
          title: "Error",
          description: "Your request could not be processed. " + error.message,
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
      }
    };

    getToken();
  }, [setCsrf, setUser, setPlan, toast]);

  return null;
}

export default MyApp;
