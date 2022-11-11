import { Flex, Box, Heading, Spacer, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box>
      <Flex minWidth="max-content" alignItems="center" gap="2">
        <Box p="2" ml="9%">
          <Heading
            color="blue"
            w="100%"
            size="md"
            _hover={{ cursor: "pointer" }}
          >
            myfitnesspal
          </Heading>
        </Box>
        <Spacer />
        <Box mr="9%">
        <Link to="/Login">
          <Heading as="h4" size="sm" _hover={{ cursor: "pointer" }} >LOG IN</Heading>
        </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
