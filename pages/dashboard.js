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
    <Head>
  {/* Title */}
  <title>Dashboard | Mylezic - Manage Your Transactions Effortlessly</title>

  {/* Meta Description */}
  <meta 
    name="description" 
    content="Access your Mylezic dashboard to manage your airtime purchases, view transaction history, and monitor account details easily and securely." 
  />

  {/* Keywords */}
  <meta 
    name="keywords" 
    content="dashboard, mylezic dashboard, manage transactions, account details, transaction history, airtime management" 
  />

  {/* Canonical URL */}
  <link rel="canonical" href="https://mylezic.com.ng/dashboard" />

  {/* Open Graph Tags */}
  <meta property="og:title" content="Dashboard | Mylezic - Manage Your Transactions Effortlessly" />
  <meta 
    property="og:description" 
    content="Manage your transactions, view history, and update your account settings securely in the Mylezic dashboard." 
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://mylezic.com.ng/dashboard" />
  <meta property="og:image" content="/logo.png" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Dashboard | Mylezic - Manage Your Transactions Effortlessly" />
  <meta 
    name="twitter:description" 
    content="Access your personal dashboard to track your airtime purchases and manage your Mylezic account with ease." 
  />
  <meta name="twitter:image" content="/logo.png" />

  {/* Robots Tag (Allow all crawling) */}
  <meta name="robots" content="index, follow" />

  {/* Author */}
  <meta name="author" content="Mylezic" />

  {/* Charset */}
  <meta charSet="UTF-8" />

  {/* Viewport */}
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  {/* Favicon */}
  <link rel="icon" href="/logo.png" />

  {/* Additional SEO Tags */}
  <meta property="og:site_name" content="Mylezic" />
  <meta name="theme-color" content="teal" />
  <link rel="apple-touch-icon" href="/logo.png" />
  <meta name="application-name" content="Mylezic Dashboard" />

  {/* Structured Data for Search Engines */}
  <script type="application/ld+json">
    {`
      {
        "@context": "http://schema.org",
        "@type": "WebApplication",
        "name": "Mylezic Dashboard",
        "description": "Manage your Mylezic transactions, view transaction history, and update account details in the dashboard.",
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
        "url": "https://mylezic.com.ng/dashboard"
      },
        "sameAs": [
    "https://x.com/Mylezic?t=rZ-XsKl0de9aDIJL_1LREA&s=09",
    "https://www.facebook.com/profile.php?id=61564236574047",
    "https://www.instagram.com/mylezic",
    "https://linkedin.com/mylezic"
  ]
    `}
  </script>
</Head>
      
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
