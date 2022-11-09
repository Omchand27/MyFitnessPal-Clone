import {
  Flex,
  Box,
  Heading,
  ButtonGroup,
  Button,
  Spacer,
} from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex minWidth="max-content" alignItems="center" gap="2">
      <Box p="2" ml="9%">
        <Heading color="blue" w="100%"  size="md" >myfitnesspal</Heading>
      </Box>
      <Spacer />
      <Button colorScheme="teal" mr="9%">LOG IN</Button>
    </Flex>
  );
};

export default Navbar;
