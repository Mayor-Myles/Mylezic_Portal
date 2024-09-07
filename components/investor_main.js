
import {Box,Flex,Text,Grid,IconButton,Button,Image,Modal,ModalContent,ModalFooter,ModalBody,ModalOverlay,ModalHeader} from "@chakra-ui/react";
import {useState} from "react";

import { CiPower } from "react-icons/ci";



const Main = () =>{


const [plan,setPlan] = useState(null);
  
const[selected,setSelected] = useState(null);

  const [openModal, setOpenModal]
  = useState(false);
  
  const data = [

    {
      plan:"Beginner",
      price:1000,
      duration:"30 days",
      
    },
    {
      plan:"Amateur",
      price:3000,
      duration:"30 days",
      
    },

    {
      plan:"Regular",
      price:5000,
      duration:"30 days",
      
    },


    {
      plan:"Professional",
      price:7000,
      duration:"30 days",
      
    },

    {
      plan:"Top Star",
      price:10000,
      duration:"30 days",
      
    },


    {
      plan:"Ultimate",
      price:20000,
      duration:"30 days",
      
    },
    
  ]


  const select = (index,plan) => {

  setSelected(index);

    setPlan(plan);
    
    
  }

  
  return(

    <>
        
    <Flex direction="column" gap="4" minH="100vh" bg="wheatsmoke" borderRadius="md" align="center" justify="center" maxW={{sm:'27em', base: '35em', md: '27em', lg: '25em', xl: '28em', '2xl':'30em', }} mx={{base:"2em",sm:'auto',md:"auto"}}
>


      <Flex mt="1em" justify="center">
<Button variant="outline" onClick={()=>setOpenModal(true)}  border="1px solid brown">Read about the Investment here</Button>
      </Flex>
      
  <Grid gap="3" align="center" templateColumns="repeat(3,1fr)">

    {data.map((item,index)=>
  
  
      <Box key={index} onClick={()=>select(index,item.plan)} shadow="md" borderRadius="0.7em"  p="1" align="center" justify="center" bg={selected === index ? "#EFDECD" : "white"}>

        <Image   borderRadius="100%" w="18px" h="18px" src="avatar.jpeg" objectFit="cover" alt="ppic"/>

        <Text fontSize="14px" color={selected===index && "white"} m="1"  fontWeight ="bold">{item.plan}</Text>
     

      <Text color={selected === index ? "white" : "grey"} fontSize="sm" fontWeight="400" mt="2">₦{item.price.toLocaleString()} </Text>


        <Text color="brown">{item.duration}</Text>
      </Box>
  
)}
        
    
  </Grid>


      <Flex align="center" justify="center" gap="5">
        
    <Button w="full" size="md" bg="brown" color="white">
    Invest
    
    </Button>  


        <IconButton color="brown" variant="outline" size="lg" icon={<CiPower size="1em"/>}  />


        </Flex>
      
      <Modal  isOpen={openModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color="purple"> 

  About  Investment Plans         
          </ModalHeader>
          
          <ModalBody>

            <Flex align="center" justify="center" gap="1" flexFlow="column wrap" mx="2em">
              
            <Text fontWeight="300" mb="1em">

Our investment plans are designed to help you make some income without stress at the comfort of your home. The worst that can happen to you is getting back the exact amount you invested. </Text>
              
            <Text fontWeight="bold">How Profit is Shared</Text>
              <Text fontWeight="300" mb="1em">
                
We share the profits among all the investors with respect to the invested amount. This means that the more you invest the higher the profit you get. For example, if we have three(3) investors like Bob,Ben and Bruce who invested 1000,3000 and 6000 respectively. We now want to share 10,000 profit we made for the day with them. We will share it in ratio 1:3:6 respectively. so it Means Bob gets 1/10 x 10,000 = 1000, Ben gets 3/10 x 10,000 = 3000 and Bruce 6/10 x 10,000 = 6000. This profits would be added to their respective invested amount. 
              
            </Text>



              </Flex>
            
          </ModalBody>

          <ModalFooter>
            <Button size="sm" bg='grey' color="white" mr={3} onClick={()=>setOpenModal(false)}>
              Close
            </Button>
            
          </ModalFooter>
        </ModalContent>
      </Modal>
    
  



  </Flex>

    </>
    
  );
  
}



export default Main;