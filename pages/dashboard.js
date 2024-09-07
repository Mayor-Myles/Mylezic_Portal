import {useEffect} from "react";
import NavbarTop from "../components/topNavbar";
import Wallet from "../components/wallet";
import Menu from "../components/menu";
import Transaction from "../components/transactions";
import NavbarBottom from "../components/bottomNavbar";
import Advert from "../components/adverts";
import {userData} from "../states/recoil";
import {useRecoilState} from "recoil";
import {useRouter} from "next/router";
import {Spinner,Flex} from "@chakra-ui/react";





const Dashboard = () => {


const [user,setUser] = useRecoilState(userData);
    
const router = useRouter();
/*
    useEffect(()=>{
        
if(!user.isLogged){

        router.push("/login");

    
}
    
    },[user])
    

if(!user.isLogged){

    return(

      <Flex align="center" justify="center" minH="100vh">
      
      <Spinner size="xl" color="teal" />
      </Flex> 
    )
}

*/
    
return(
    
<>
    <NavbarTop/>

    
<Flex justifyContent="center" minH="100vh" align="center" direction="column"  maxW={{sm:'27em', base: '35em', md: '27em', lg: '30em', xl: '30em', '2xl':'30em', }} mx={{base:"2em",sm:'auto',md:"auto"}}
>

    <Flex mt="7em"/>
    
  <Wallet/>
  <Menu/>
  <Advert/>
  <Transaction/>

</Flex>
  <NavbarBottom/>
</>
    )
}

export default Dashboard;