import { Flex, Box, Heading, Spacer, Text } from "@chakra-ui/react";

const Navbar2 = () => {
  return (
    <Box>
      <Flex minWidth="max-content" alignItems="center" gap="2">
        <Box p="2" ml="9%">
          <Heading
            as="h1"
            color="blue"
            w="100%"
            size="lg"
            _hover={{ cursor: "pointer" }}
          >
            myfitnesspal
          </Heading>
        </Box>
        <Spacer />
        <Heading as="h4" size="sm" _hover={{ cursor: "pointer"}}>
          LOG IN{" "}
        </Heading>
        <Heading as="h4" size="sm" _hover={{ cursor: "pointer"}} mr="9%">
          {" "}
          | SIGN UP
        </Heading>
      </Flex>
      <Box border="1px solid red" display="flex" bg="blue" h="9vh" mt="2%" justifyContent="center">
        <Spacer />
        <Text mr="1%" fontWeight="bold" p="15px" color="white" _hover={{cursor:"pointer", background:"darkblue"}}>ABOUT</Text>
        <Text mr="1%" fontWeight="bold" p="15px" color="white" _hover={{cursor:"pointer", background:"darkblue"}}>FOOD</Text>
        <Text mr="1%" fontWeight="bold" p="15px" color="white" _hover={{cursor:"pointer", background:"darkblue"}}>EXERCISE</Text>
        <Text mr="1%" fontWeight="bold" p="15px" color="white" _hover={{cursor:"pointer", background:"darkblue"}}>APPS</Text>
        <Text mr="1%" fontWeight="bold" p="15px" color="white" _hover={{cursor:"pointer", background:"darkblue"}}>COMMUNITY</Text>
        <Text mr="1%" fontWeight="bold" p="15px" color="white" _hover={{cursor:"pointer", background:"darkblue"}}>BLOG</Text>
        <Text mr="1%" fontWeight="bold" p="15px" color="white" _hover={{cursor:"pointer", background:"darkblue"}}>PREMIUM</Text>
        <Spacer />
        <Spacer />
        <Spacer />
      </Box>
    </Box>
  );
};

export default Navbar2;
