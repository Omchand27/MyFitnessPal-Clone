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
  Grid,
} from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";
import Footer2 from "../Footer/Footer2";
import GetApps from "./GetApps";

const Myapps = () => {
  const Featured = [
    {
      image:
        "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_30_1_10_0_45741.png",
      title: "Fitbit",
      desc: "Activity Trackers",
    },
    {
      image:
        "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_120_1_10_0_9523.png",
      title: "Fitbit",
      desc: "Activity Trackers",
    },
    {
      image:
        "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_389_1_10_0_31181.png",
      title: "Fitbit",
      desc: "Activity Trackers",
    },
    {
      image:
        "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_392_1_10_0_97000.png",
      title: "Fitbit",
      desc: "Activity Trackers",
    },
    {
      image:
        "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_229_1_10_0_84885.png",
      title: "Fitbit",
      desc: "Activity Trackers",
    },
    {
      image:
        "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_180_1_10_0_3668.png",
      title: "Fitbit",
      desc: "Activity Trackers",
    },
    {
      image:
        "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_102_1_10_0_44251.png",
      title: "Fitbit",
      desc: "Activity Trackers",
    },
  ];

  const Marketplace = [
    {
      image:
        "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_30_1_10_0_45741.png",
      title: "Fitbit",
      desc: "Activity Trackers",
    },
    {
      image:
        "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_120_1_10_0_9523.png",
      title: "Fitbit",
      desc: "Activity Trackers",
    },
    {
      image:
        "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_389_1_10_0_31181.png",
      title: "Fitbit",
      desc: "Activity Trackers",
    },
    {
      image:
        "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_392_1_10_0_97000.png",
      title: "Fitbit",
      desc: "Activity Trackers",
    },
    {
      image:
        "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_229_1_10_0_84885.png",
      title: "Fitbit",
      desc: "Activity Trackers",
    },
    {
      image:
        "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_180_1_10_0_3668.png",
      title: "Fitbit",
      desc: "Activity Trackers",
    },
    {
      image:
        "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_102_1_10_0_44251.png",
      title: "Fitbit",
      desc: "Activity Trackers",
    },
  ];

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
          <NavLink to="/home">
            <Text
              fontWeight="bold"
              p="15px"
              color="white"
              _hover={{ cursor: "pointer", background: "darkblue" }}
            >
              MYHOME
            </Text>
          </NavLink>
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
            App Gallery
          </Text>
          <Text
            mr="3%"
            fontWeight="bold"
            color="white"
            _hover={{ cursor: "pointer", background: "darkblue" }}
          >
            Mobile
          </Text>
          <Text
            mr="3%"
            fontWeight="bold"
            color="white"
            _hover={{ cursor: "pointer", background: "darkblue" }}
          >
            Tickers
          </Text>
          <Text
            mr="3%"
            fontWeight="bold"
            color="white"
            _hover={{ cursor: "pointer", background: "darkblue" }}
          >
            Badges
          </Text>
          <Text
            mr="3%"
            fontWeight="bold"
            color="white"
            _hover={{ cursor: "pointer", background: "darkblue" }}
          >
            BMR
          </Text>
          <Text
            mr="3%"
            fontWeight="bold"
            color="white"
            _hover={{ cursor: "pointer", background: "darkblue" }}
          >
            BMI
          </Text>
          <Text
            mr="3%"
            fontWeight="bold"
            color="white"
            _hover={{ cursor: "pointer", background: "darkblue" }}
          >
            Steps
          </Text>
          <Spacer />
          <Spacer />
          <Spacer />
        </Box>
        <Box mt="5%" display="flex">
          <Box m="auto" mt="2%" w="60%">
            <Box display="flex" justifyContent="center">
              <Image src="https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_30_2_10_0_90706.png" />
            </Box>
            <Box textAlign="left" mt="7%">
              <Heading size="lg">Featured Apps</Heading>
              <hr />
              <Grid templateColumns="repeat(3, 1fr)" gap={6} mt="3%">
                {Featured.map((ele) => {
                  return (
                    <GetApps
                      title={ele.title}
                      image={ele.image}
                      desc={ele.desc}
                    />
                  );
                })}
              </Grid>
            </Box>
            <Box textAlign="left" mt="9%">
              <Heading size="lg">App Marketplace</Heading>
              <hr />
              <Grid templateColumns="repeat(3, 1fr)" gap={6} mt="3%">
                {Marketplace.map((ele) => {
                  return (
                    <GetApps
                      title={ele.title}
                      image={ele.image}
                      desc={ele.desc}
                    />
                  );
                })}
              </Grid>
            </Box>
          </Box>
          <Box m="auto" mt="2%" w="20%" h="100vh">
            <VStack>
              <Box w="100%" display="flex" justifyContent="left" textAlign="left">
                <Input placeholder="Search" h="5vh" />
                <Button color="white" h="5vh" bg="blue">
                  Search
                </Button>
              </Box>
              <Box textAlign="left" w="100%" >
                <Heading size="md" mt="5%">Cartegories</Heading>
              </Box>
              <Box textAlign="left" w="100%">
                <Box _hover={{ cursor: "pointer", background:"blue", color:"white" }}>
                  <Heading pt="10px" pb="10px" size="sm">All</Heading>
                  <hr />
                </Box>
                <Box _hover={{ cursor: "pointer", background:"blue", color:"white" }}>
                  <Heading pt="10px" pb="10px" size="sm">Activity Trackers</Heading>
                  <hr />
                </Box>
                <Box _hover={{ cursor: "pointer", background:"blue", color:"white" }}>
                  <Heading pt="10px" pb="10px" size="sm">Step Trackers</Heading>
                  <hr />
                </Box>
                <Box _hover={{ cursor: "pointer", background:"blue", color:"white" }}>
                  <Heading pt="10px" pb="10px" size="sm">Scales</Heading>
                  <hr />
                </Box>
                <Box _hover={{ cursor: "pointer", background:"blue", color:"white" }}>
                  <Heading pt="10px" pb="10px" size="sm">Lifestyle</Heading>
                  <hr />
                </Box>
                <Box _hover={{ cursor: "pointer", background:"blue", color:"white" }}>
                  <Heading pt="10px" pb="10px" size="sm">Wearables</Heading>
                  <hr />
                </Box>
                <Box _hover={{ cursor: "pointer", background:"blue", color:"white" }}>
                  <Heading pt="10px" pb="10px" size="sm">Fitness Apps</Heading>
                  <hr />
                </Box>
                <Box _hover={{ cursor: "pointer", background:"blue", color:"white" }}>
                  <Heading pt="10px" pb="10px" size="sm">Exercise Equipment</Heading>
                  <hr />
                </Box>
                <Box _hover={{ cursor: "pointer", background:"blue", color:"white" }}>
                  <Heading pt="10px" pb="10px" size="sm">Fertility</Heading>
                  <hr />
                </Box>
              </Box>
            </VStack>
          </Box>
        </Box>
      </Box>
      <Footer2 />
    </Box>
  );
};

export default Myapps;
