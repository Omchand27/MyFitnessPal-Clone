import { Flex, Text, Box, Select, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      mt="5%"
      h="20%"
      space="10px"
      boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;"
    >
      <Box>
        <Flex>
          <Box display="flex" w="100%" justifyContent="center" m="auto">
            <Box _hover={{cursor:"pointer"}} fontWeight="bold" fontSize="lg" mr="2%">
              ABOUT
            </Box>
            <Box _hover={{cursor:"pointer"}} fontWeight="bold" fontSize="lg" mr="2%">
              FOOD
            </Box>
            <Box _hover={{cursor:"pointer"}} fontWeight="bold" fontSize="lg" mr="2%">
              EXERCISE
            </Box>
            <Box _hover={{cursor:"pointer"}} fontWeight="bold" fontSize="lg" mr="2%">
              APPS
            </Box>
            <Box _hover={{cursor:"pointer"}} fontWeight="bold" fontSize="lg" mr="2%">
              COMMUNITY
            </Box>
            <Box _hover={{cursor:"pointer"}} fontWeight="bold" fontSize="lg" mr="2%">
              BLOG
            </Box>
            <Box _hover={{cursor:"pointer"}} fontWeight="bold" fontSize="lg" mr="2%">
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
          <Link pl="5px">Calorie </Link>
          <Link pl="5px">Counter </Link>
          <Link pl="5px">Blog </Link>
          <Link pl="5px">Terms </Link>
          <Link pl="5px">Privacy </Link>
          <Link pl="5px">Contact Us </Link>
          <Link pl="5px">API </Link>
          <Link pl="5px">Jobs </Link>
          <Link pl="5px">Feedback </Link>
          <Link pl="5px">Community Guidelines </Link>
        </Box>
        <Box display="flex" justifyContent="center" m="auto" mt="1%">
          <Link pl="5px">Ad Choices Do Not Sell My Personal Information</Link>
        </Box>
        <Box display="flex" justifyContent="center" m="auto" mt="1%">
          <Text>© 2022 MyFitnessPal, Inc.</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
