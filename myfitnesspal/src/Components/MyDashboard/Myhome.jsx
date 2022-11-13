import {
  Flex,
  Box,
  Heading,
  Spacer,
  Text,
  Button,
  VStack,
  Image,
  Input,
} from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";
import Footer2 from "../Footer/Footer2";

const Myhome = () => {
  return (
    <Box>
      <Box>
        <Flex minWidth="max-content" alignItems="center" gap="2">
          <Box p="2" ml="9%">
            <NavLink to="/">
              <Heading
                as="h1"
                color="blue"
                w="100%"
                size="lg"
                _hover={{ cursor: "pointer" }}
              >
                myfitnesspal
              </Heading>
            </NavLink>
          </Box>
          <Spacer />
          <Heading as="h4" size="sm" _hover={{ cursor: "pointer" }}>
            Hi,{" "}
          </Heading>
          <Box mr="9%" display="flex">
            <Heading as="h4" size="sm" _hover={{ cursor: "pointer" }} mr="7%">
              ok@gmail.com
            </Heading>
            <Link to="/">
              <Heading
                as="h4"
                color="blue"
                size="sm"
                _hover={{ cursor: "pointer" }}
              >
                Logout
              </Heading>
            </Link>
          </Box>
        </Flex>
        <Box display="flex" bg="blue" h="9vh" mt="2%" justifyContent="center">
          <Spacer />
          <Text
            fontWeight="bold"
            p="15px"
            color="white"
            _hover={{ cursor: "pointer", background: "darkblue" }}
          >
            MYHOME
          </Text>
          <Text
            fontWeight="bold"
            p="15px"
            color="white"
            _hover={{ cursor: "pointer", background: "darkblue" }}
          >
            FOOD
          </Text>
          <Text
            fontWeight="bold"
            p="15px"
            color="white"
            _hover={{ cursor: "pointer", background: "darkblue" }}
          >
            EXERCISE
          </Text>
          <Text
            fontWeight="bold"
            p="15px"
            color="white"
            _hover={{ cursor: "pointer", background: "darkblue" }}
          >
            REPORTS
          </Text>
          <NavLink to="/apps">
            <Text
              fontWeight="bold"
              p="15px"
              color="white"
              _hover={{ cursor: "pointer", background: "darkblue" }}
            >
              APPS
            </Text>
          </NavLink>
          <Text
            fontWeight="bold"
            p="15px"
            color="white"
            _hover={{ cursor: "pointer", background: "darkblue" }}
          >
            COMMUNITY
          </Text>
          <Text
            fontWeight="bold"
            p="15px"
            color="white"
            _hover={{ cursor: "pointer", background: "darkblue" }}
          >
            BLOG
          </Text>
          <Text
            fontWeight="bold"
            p="15px"
            color="white"
            _hover={{ cursor: "pointer", background: "darkblue" }}
          >
            PREMIUM
          </Text>
          <Spacer />
          <Spacer />
          <Spacer />
        </Box>
        <Box display="flex" bg="darkblue" h="5vh" justifyContent="center">
          <Spacer />
          <Text
            mr="3%"
            fontWeight="bold"
            color="white"
            _hover={{ cursor: "pointer", background: "darkblue" }}
          >
            Home
          </Text>
          <Text
            mr="3%"
            fontWeight="bold"
            color="white"
            _hover={{ cursor: "pointer", background: "darkblue" }}
          >
            Goals
          </Text>
          <Text
            mr="3%"
            fontWeight="bold"
            color="white"
            _hover={{ cursor: "pointer", background: "darkblue" }}
          >
            Check-In
          </Text>
          <Text
            mr="3%"
            fontWeight="bold"
            color="white"
            _hover={{ cursor: "pointer", background: "darkblue" }}
          >
            Mail
          </Text>
          <Text
            mr="3%"
            fontWeight="bold"
            color="white"
            _hover={{ cursor: "pointer", background: "darkblue" }}
          >
            Profile
          </Text>
          <Text
            mr="3%"
            fontWeight="bold"
            color="white"
            _hover={{ cursor: "pointer", background: "darkblue" }}
          >
            My Blog
          </Text>
          <Text
            mr="3%"
            fontWeight="bold"
            color="white"
            _hover={{ cursor: "pointer", background: "darkblue" }}
          >
            Friends
          </Text>
          <Text
            mr="3%"
            fontWeight="bold"
            color="white"
            _hover={{ cursor: "pointer", background: "darkblue" }}
          >
            Settings
          </Text>
          <Spacer />
          <Spacer />
          <Spacer />
        </Box>
      </Box>
      
      <Box mt="5%" display="flex">
        <Box w="45%" ml="10%" h="30vh">
          <Box border="1px solid red">
            <Box
              display="flex"
              border="1px solid blue"
              bg="darkblue"
              color="white"
            >
              <Heading size="sm">Your Daily Summary</Heading>
              <Spacer />
              <Heading size="sm">1 DAY STREAK</Heading>
            </Box>
            <Box textAlign="left" display="flex" mt="3%">
              <Box ml="3%">
                <Heading size="sm">Calories Remaining </Heading>
                <Heading color="green">2160 </Heading>
                <hr />
                <Box display="flex">
                  <Box ml="7%">
                    <Text mt="10%">2160</Text>
                    <Heading size="sm">GOALS</Heading>
                  </Box>
                  <Box ml="15%">
                    <Text mt="10%"> 0 </Text>
                    <Heading size="sm">FOODS</Heading>
                  </Box>
                </Box>
              </Box>

              <Box ml="3%" w="60%" alignItems="center">
                <Button ml="3%" border="1px solid black" mt="6.2%">
                  Add Exercise
                </Button>
                <Button ml="3%" border="1px solid black" mt="6.2%">
                  Add Food
                </Button>
                <hr />
                <Box display="flex">
                  <Box ml="7%">
                    <Text mt="10%">0</Text>
                    <Heading size="sm">EXERCISE</Heading>
                  </Box>
                  <Box ml="15%">
                    <Text mt="10%"> 0 </Text>
                    <Heading size="sm">NET</Heading>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box border="1px solid black" h="20vh" mt="10%" w="100%">
            <Box
              display="flex"
              border="1px solid blue"
              bg="darkblue"
              color="white"
              h="5vh"
            >
              <Heading size="sm">NEWS FEED</Heading>
              <Spacer />
              <Heading size="sm">Latest</Heading>
            </Box>
            <Box mt="5%" display="flex" justifyContent="center">
              <Input placeholder="What's on your mind?" w="80%" />
              <Button
                _hover={{ cursor: "pointer", bg: "blue" }}
                ml="4%"
                bg="blue"
                color="white"
              >
                Share
              </Button>
            </Box>
          </Box>
        </Box>

        <VStack ml="5%" w="30%" textAlign="left">
          <Box w="100%">
            <Heading size="sm">Recent Forum Topics</Heading>
            <Text mb="2%" color="blue">
              View All
            </Text>
            <hr />
            <ul>
              <li style={{ color: "blue" }}>The Jeans Paradox</li>
              <li style={{ color: "blue" }}>
                What Mini Goal is motivating you right now!
              </li>
              <li style={{ color: "blue" }}>
                Just sharing my 21 lbs weight loss
              </li>
              <li style={{ color: "blue" }}>Just keep hiking</li>
              <li style={{ color: "blue" }}>
                Those who have lost a lot of weight - maintenance phases
              </li>
            </ul>
            <Image
              mt="2%"
              src="https://www.swing2app.com/blog/wp-content/uploads/sites/4/2020/07/Thumb_2.jpg"
            />
            <Heading size="sm" mt="5%">
              Recent Forum Topics
            </Heading>
            <Text mb="2%" color="blue">
              View All
            </Text>
            <hr />
            <Heading size="sm" mt="5%" color="blue">
              Why Travel Makes You Hungrier — And How to Combat It
            </Heading>
            <Text>Don’t let travel derail your weight-loss goals.</Text>
            <Text color="blue">Read More</Text>
            <Heading size="sm" mt="5%" color="blue">
              Why Travel Makes You Hungrier — And How to Combat It
            </Heading>
            <Text>Don’t let travel derail your weight-loss goals.</Text>
            <Text color="blue">Read More</Text>
            <Heading size="sm" mt="5%" color="blue">
              Why Travel Makes You Hungrier — And How to Combat It
            </Heading>
            <Text>Don’t let travel derail your weight-loss goals.</Text>
            <Text color="blue">Read More</Text>
          </Box>
        </VStack>
      </Box>
      <Footer2 />
    </Box>
  );
};

export default Myhome;
