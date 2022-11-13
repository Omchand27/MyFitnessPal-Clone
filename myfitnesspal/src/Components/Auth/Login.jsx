import {
  Flex,
  Box,
  FormControl,
  Input,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Navbar2 from "../Navbar/Navbar2";
import Footer2 from "../Footer/Footer2";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Login = (dataform) => {
  const [Data, setData] = useState({});

  const handleChange = (event) => {
    const name = event.target.type;
    const value = event.target.value;
    setData((Values) => ({ ...Values, [name]: value }));
  };

  const handleSubmit = (event) => {
    console.log(Data);
  };

  return (
    <Box>
      <Navbar2 />
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6} w="60%">
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack align={"center"}>
              <Heading fontSize={"2xl"}>Member Login</Heading>
            </Stack>

            <Stack spacing={4} mt="10%">
              <FormControl>
                <Input
                  type="email"
                  placeholder="Email address"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Password"
                  onChange={handleChange}
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Link color={"blue.400"}>Forgot password?</Link>
                </Stack>
                <NavLink to="/home">
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  onClick={handleSubmit}
                >
                  LOG IN
                </Button>
                </NavLink>
              </Stack>
            </Stack>
          </Box>
          <Text>
            Not a member yet?{" "}
            <NavLink to="/Signup">
              <Link color="blue.500">Sign up now! </Link>
            </NavLink>
          </Text>
        </Stack>
      </Flex>
      <Footer2 />
    </Box>
  );
};
