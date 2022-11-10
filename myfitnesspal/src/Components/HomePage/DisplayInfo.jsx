import { Heading, Box, Text, Image, Button } from "@chakra-ui/react";

const DisplayInfo = () => {
  return (
    //border="1px solid red"
    <Box display="flex" justifyContent="center" mt="5%">
      <Box w="39%">
        <Box h="80%" mt="13%">
          <Heading as="h1" size="4xl">
            Good health starts with what you eat.
          </Heading>
          <Text mt="3%">
            Want to eat more mindfully? Track meals, learn about your habits,
            and reach your goals with MyFitnessPal.
          </Text>
          <Button color="white" colorScheme="blue" size="lg" w="80%" mt="3%">
            START FOR FREE
          </Button>
        </Box>
      </Box>
      <Box>
        <Image src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-slice%402x.e3eec8a8.png&w=1920&q=75" />
      </Box>
    </Box>
  );
};

export default DisplayInfo;
