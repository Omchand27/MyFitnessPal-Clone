import { Heading, Box, Text, Image } from "@chakra-ui/react";
import Login from "../Auth/Login";
import Headings from "./Headings";

const DisplayInfo2 = () => {
  return (
    //border="1px solid red"
    <Box >
      <Box display="flex" justifyContent="center" mt="5%" >
        <Box>
          <Image src="https://www.myfitnesspal.com/_next/image?url=%2Fpages%2Fhome%2Fsecondary-hero-slice%402x.png&w=512&q=75" />
        </Box>
        <Box w="39%" mt="5%">
          <Box h="80%" mt="18%"  >
            <Heading as="h1" size="3xl">
              Log from over 14 million foods.
            </Heading>
            <Text mt="3%">
              See a breakdown of calories and nutrients, compare serving sizes,
              and discover how the food you eat supports your goals.
            </Text>
          </Box>
        </Box>
      </Box>
      <Headings/>
    </Box>
  );
};

export default DisplayInfo2;
