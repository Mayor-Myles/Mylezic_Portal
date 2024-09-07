import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {ChakraProvider,useToast} from "@chakra-ui/react";
import {RecoilRoot,useRecoilState} from "recoil";
import {csrfState,userData,dataPlansState} from "../states/recoil";
import {useEffect} from "react";




function MyApp({ Component, pageProps }: AppProps) {
  return(
    <RecoilRoot>
    <ChakraProvider>
    <InitializeState /> 
  <Component {...pageProps} />
</ChakraProvider>
    </RecoilRoot>
    )
}


function InitializeState(){

const [user,setUser] = useRecoilState(userData);

  const [csrf,setCsrf] = useRecoilState(csrfState);

  const [plan,setPlan] = useRecoilState(dataPlansState);


  const toast = useToast();

  
  useEffect(() => {

const getDataPlans = async () => {

const url = "https://cbrbakery.com.ng/api?action=getDataPlans";
  
  
  const response = await 

    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      //body: JSON.stringify(formData),
    })
      .then(res => {
        if (!res.ok) {
         // setLoading(false);
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then(data => {
        //setCsrf(data.token);
        //setLoading(false);
        if (data.status === "success") {
       
   setPlan(data.dataPlans);
      
        } 
          
      })
      .catch(error => {
        console.log(error)
    
      });
    
  
}


const getToken = async () => {

const url = "https://cbrbakery.com.ng/action=welcome";

  const response = await 
  
fetch(url)
      
      .then(res => {
        if (!res.ok) {
          
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then(data => {
        
        if(data) {
       
   setCsrf(data.token);
          
        } else {
          toast({
            title: "Error",
            description:"Page is expired. Please reload the page.",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        }
      })
      .catch(error => {
        toast({
          title: "Error",
          description: "Your request could not be processed. " + error.message,
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
        
      });
  

  
  
  
}


    const getUserData = async () =>{

        const url = "https://cbrbakery.com.ng/api? action=getUserData";

        const response = await
        fetch(url)

        .then(res => {
          if (!res.ok) {

            throw new Error(res.statusText);
          }
          return res.json();
        })
        .then(data => {

          if(data) {

     setUser(data.userData);

          } else {
            toast({
              title: "Error",
              description:"Page is expired. Please reload the page.",
              status: "error",
              duration: 5000,
              isClosable: true,
            });
          }
        })
        .catch(error => {
          toast({
            title: "Error",
            description: "Your request could not be processed. " + error.message,
            status: "error",
            duration: 5000,
            isClosable: true,
            position: "top",
          });

        });

      }

    
    //Fetch data plan from db
    getDataPlans();

    //getCsrf
    getToken();

    //fetch user Data
    getUserData();

    
    
  },[])
  
  return null;
}

export default MyApp
