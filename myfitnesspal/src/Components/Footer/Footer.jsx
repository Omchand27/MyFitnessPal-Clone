import { Flex, Text, Box, Select, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      mt="5%"
      h="20%"
      space="10px"
      boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;"
    >
      <Flex>
        <Box display="flex" w="100%" justifyContent="center" m="auto">
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

          <Select
            w="14%"
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
      <Box display="flex" justifyContent="center" m="auto" mt="1%">
        <Link>
          Calorie Counter Blog Terms Privacy ContactUs API Jobs Feedback
          Community Guidelines
        </Link>
      </Box>
      <Box display="flex" justifyContent="center" m="auto" mt="1%">
        <Link>Ad Choices Do Not Sell My Personal Information</Link>
      </Box>
      <Box display="flex" justifyContent="center" m="auto" mt="1%">
        <Text>© 2022 MyFitnessPal, Inc.</Text>
      </Box>
    </Box>
  );
};

export default Footer;
