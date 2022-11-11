import { Heading, Box, Text, Image, Button } from "@chakra-ui/react";
import Login from "../Auth/Login";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import DisplayInfo2 from "./DisplayInfo2";

const DisplayInfo = () => {
  return (
    //border="1px solid red"
    <Box>
      <Navbar/>
      <Box display="flex" justifyContent="center" mt="5%">
        <Box w="39%">
          <Box h="80%" mt="13%">
            <Box m="auto" w="88%">
              <Heading as="h1" size="4xl" textAlign="left">
                Good health starts with what you eat.
              </Heading>
              <Text mt="5%" textAlign="left">
                Want to eat more mindfully? Track meals, learn about your
                habits, and reach your goals with MyFitnessPal.
              </Text>
            </Box>
            <Button color="white" colorScheme="blue" size="lg" w="80%" mt="5%">
              START FOR FREE
            </Button>
          </Box>
        </Box>
        <Box>
          <Image src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-slice%402x.e3eec8a8.png&w=1920&q=75" />
        </Box>
      </Box>
      <DisplayInfo2 />
      <Footer/>
    </Box>
  );
};

export default DisplayInfo;
