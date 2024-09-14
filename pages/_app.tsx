import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, useToast } from "@chakra-ui/react";
import { RecoilRoot, useRecoilState } from "recoil";
import { csrfState, userData, dataPlansState } from "../states/recoil";
import { useEffect } from "react";
import axios from 'axios';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ChakraProvider>
        <InitializeState />
        <Component {...pageProps} />
      </ChakraProvider>
    </RecoilRoot>
  )
}

function InitializeState() {
  const [user, setUser] = useRecoilState(userData);
  const [csrf, setCsrf] = useRecoilState(csrfState);
  const [plan, setPlan] = useRecoilState(dataPlansState);
  const toast = useToast();

  useEffect(() => {
    const getToken = async () => {
      const url = "https://cbrbakery.com.ng/api?action=welcome";

      try {
        const response = await axios.get(url);

        if (response.data) {
          console.log(response.data);
          setCsrf(response.data.token);
          setUser(response.data.userData || null);
          setPlan(response.data.dataPlans || null);
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
    }

    getToken();
  }, [setCsrf, setUser, setPlan, toast]);

  return null;
}

export default MyApp;
              
