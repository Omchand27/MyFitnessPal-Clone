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

const Login = () => {

    const [Data, setData] = useState({});

const handleChange = (event) =>{
    // console.log(event.target.value)
    const name = event.target.type;
    const value = event.target.value;
    setData(Values =>({...Values, [name] : value}))
}


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
              <FormControl id="email">
                <Input type="email" placeholder="Email address" onChange={handleChange}/>
              </FormControl>
              <FormControl id="password">
                <Input type="password" placeholder="Password" onChange={handleChange}/>
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Link color={"blue.400"}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }} 
                >
                  LOG IN
                </Button>
              </Stack>
            </Stack>
          </Box>
          <Text>
            Not a member yet? <Link color="blue.500">Sign up now! </Link>
          </Text>
        </Stack>
      </Flex>
      <Footer2 />
    </Box>
  );
};

export default Login;
