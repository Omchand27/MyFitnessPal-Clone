import { Flex, Text, Box, Select } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      h="100px"
      space="10px"
      boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;"
    >
      <Flex>
        <Box display="flex" w="100%" justifyContent="center">
          <Box fontWeight="bold" fontSize="lg" mr="2%">
            ABOUT
          </Box>
          <Box fontWeight="bold" fontSize="lg" mr="2%">
            FOOD
          </Box>
          <Box fontWeight="bold" fontSize="lg" mr="2%">
            EXERCISE
          </Box>
          <Box fontWeight="bold" fontSize="lg" mr="2%">
            APPS
          </Box>
          <Box fontWeight="bold" fontSize="lg" mr="2%">
            COMMUNITY
          </Box>
          <Box fontWeight="bold" fontSize="lg" mr="2%">
            BLOG
          </Box>
          <Box fontWeight="bold" fontSize="lg" mr="2%">
            PREMIUM
          </Box>
        </Box>
        <Box>
          <Select
            variant="outline"
            placeholder="select language"
            color="black"
            bg="white"
            h="4vh"
          >
            <option value="option1">English</option>
            <option value="option2">Hindi</option>
            <option value="option3">French</option>
          </Select>
        </Box>
      </Flex>
      <Box display="flex" w="88%" justifyContent="center">
        <Text color="blue">
          Calorie Counter Blog Terms Privacy Contact Us API Jobs Feedback
          Community Guidelines
        </Text>
      </Box>
      <Box display="flex" w="88%" justifyContent="center">
        <Text color="blue">Ad Choices Do Not Sell My Personal Information</Text>
      </Box>
      <Box display="flex" w="88%" justifyContent="center">
        <Text>© 2022 MyFitnessPal, Inc.</Text>
      </Box>
    </Box>
  );
};

export default Footer;
