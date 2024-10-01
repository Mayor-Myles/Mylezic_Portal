import axios from "axios";
import { userData } from "../states/recoil";
import { useRecoilState } from "recoil";
import { useToast } from "@chakra-ui/react";

const useUpdate = () => {
  const [user, setUser] = useRecoilState(userData);
  const toast = useToast();

  const update= async () => {
    const url = "https://mylezic.com.ng/api/welcome";
    
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

  return update;
};

export default useUpdate;
        
