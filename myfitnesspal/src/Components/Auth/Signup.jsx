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
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Signup = () => {
  const [signup, setSignup] = useState({});


  const handleChange = (event) => {
    const name = event.target.type;
    const valuess = event.target.value;
    setSignup((values) => ({ ...values, [name]: valuess }));
  };


  return (
    <Box>
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
              <FormControl>
                <Input
                  type="email"
                  placeholder="Email address"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl mt="7%">
                <Input
                  type="password"
                  placeholder="Create a Password"
                  onChange={handleChange}
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack align={"start"} justify={"space-between"}>
                  <Checkbox>Terms & Conditions</Checkbox>
                  <Text textAlign="left">
                    I agree to MyFitnessPal's{" "}
                    <Link color={"blue.400"}> Terms & Conditions </Link>and
                    <Link> Privacy Policy. </Link>
                  </Text>
                </Stack>

                <NavLink to="/Login">
                  <Button
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                    
                  >
                    CONTINUE
                  </Button>
                  <Text>
                    By signing up for MyFitnessPal, you are agreeing to our
                    <Link>Privacy Policy</Link>and<Link>Terms.</Link>
                  </Text>
                </NavLink>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Signup;
