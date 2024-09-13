import {useState,useEffect} from "react";

import {Box,Flex,Image} from "@chakra-ui/react";


const Advert = () => {

  const[src,setSrc] = useState("s3.jpg");

const adverts = [ "s1.jpg","s2.jpg","s3.jpg"];

  useEffect(()=>{

let i = 0;
    
    
    const slider = setInterval(()=>{

      
      if(i > adverts.length - 1){

        i = 0;
      }

      
setSrc(adverts[i])

      i+=1;
      
    },3500)

     
    
  })
  
return(


  <Flex align="center" justify="center" mt="1em">
  
  <Image alt="adverts" src={src} objectFit="contain" h="120px" w="400px" />
  
  </Flex>

  
);
  
}

export default Advert;
