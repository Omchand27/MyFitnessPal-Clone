import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const Signup = () => {
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack align={"center"}>
            <Heading fontSize={"2xl"}>
              Almost there! Create your account.
            </Heading>
          </Stack>
          <Stack spacing={4} mt="7%">
            <FormControl id="email">
              <Input type="email" placeholder="Email address" />
            </FormControl>
            <FormControl id="password" mt="7%">
              <Input type="password" placeholder="Create a Password"/>
            </FormControl>
            <Stack spacing={10}>
              <Stack
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Terms & Conditions</Checkbox>
                <Text textAlign="left">I agree to MyFitnessPal's <Link color={"blue.400"}> Terms & Conditions </Link>and<Link> Privacy Policy. </Link></Text>
              </Stack>
              <Text>By signing up for MyFitnessPal, you are agreeing to our<Link>Privacy Policy</Link>and<Link>Terms.</Link></Text>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                CONTINUE
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Signup;
