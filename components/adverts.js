import { useState, useEffect } from "react";
import { Box, Flex, Image } from "@chakra-ui/react";

const Advert = () => {
  const [src, setSrc] = useState("s3.jpg");
  const adverts = ["s1.jpg", "s2.jpg", "s3.jpg"];

  useEffect(() => {
    let i = 0;

    // Set up the interval
    const slider = setInterval(() => {
      if (i >= adverts.length) {
        i = 0; // Reset to the first image when we reach the end
      }

      setSrc(adverts[i]); // Update the image source
      i += 1;
    }, 3500);

    // Cleanup function to clear the interval on component unmount
    return () => {
      clearInterval(slider);
    };
  }); // Empty dependency array ensures this runs once on mount

  return (
    <Flex align="center" justify="center" mt="1em">
      <Image alt="adverts" src={src} objectFit="contain" h="120px" w="400px" />
    </Flex>
  );
};

export default Advert;
    
