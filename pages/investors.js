import React,{useEffect} from "react";

import Login from "../components/investor_login";
import Register from "../components/investor_register";
import Wallet from "../components/investor_wallet";
import Main from "../components/investor_main";

import { useRouter } from "next/router";

import {Spinner,Flex} from "@chakra-ui/react";


export default function Investor() {
  const router = useRouter();
  const { path } = router.query;
  /*
useEffect(()=>{


  if(!path){ 
    
  const timer = setTimeout(()=>{

    router.push("/investors?path=login")
  },5000);


    

    return () => {

      clearTimeout(timer);
    }

  }  
  
},[])
  */
  return (
    <>
      {path === "login" && <Login />}
      {path === "register" && <Register />}
      
      {path === "dashboard" && (
        <>
          <Wallet />
          <Main />
        </>
      )}

      { !path

        && (

      <Flex minH="100vh"  align="center" justify="center">


<Spinner size="xl" color="brown"/>


</Flex>
        )
      }
    </>
  );
}
