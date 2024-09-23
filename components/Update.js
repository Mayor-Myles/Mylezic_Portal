import axios from "axios";
import { userData } from "../states/recoil";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { useToast } from "@chakra-ui/react";

const Update = () => {
  const [user, setUser] = useRecoilState(userData);
  const toast = useToast();

  
    const fetchData = async () => {
      const url = "https://cbrbakery.com.ng/api/welcome";
      
      try {
        const response = await axios.get(url);
        
        if (response.data && response.data.userData) {
          setUser(response.data.userData);
        } else {
          toast({
            title: "Error",
            description: "Page is expired. Please reload the page.",
            status: "error",
            duration: 5000,
            isClosable: true,
            position:'top',
          });
        }
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to fetch data. Please try again later.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    };

    fetchData();
  

  return null;
};

export default Update;
  
