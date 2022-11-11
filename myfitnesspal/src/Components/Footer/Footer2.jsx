import { Flex, Text, Box, Select, Link } from "@chakra-ui/react";

const Footer2 = () => {
  return (
    <Box
      mt="5%"
      h="20%"
      space="10px"
      boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;"
    >
      <Box display="flex" justifyContent="center" m="auto" mt="1%">
        <Link pl="7px" color="blue">
          Calorie{" "}
        </Link>
        <Link pl="7px" color="blue">
          Counter{" "}
        </Link>
        <Link pl="7px" color="blue">
          Blog{" "}
        </Link>
        <Link pl="7px" color="blue">
          Terms{" "}
        </Link>
        <Link pl="7px" color="blue">
          Privacy{" "}
        </Link>
        <Link pl="7px" color="blue">
          Contact Us{" "}
        </Link>
        <Link pl="7px" color="blue">
          API{" "}
        </Link>
        <Link pl="7px" color="blue">
          Jobs{" "}
        </Link>
        <Link pl="7px" color="blue">
          Feedback{" "}
        </Link>
        <Link pl="7px" color="blue">
          Community Guidelines{" "}
        </Link>
        <Link pl="7px" color="blue">
          Ad Choices
        </Link>
        <Link pl="7px" color="blue">
          Do Not Sell My Personal Information
        </Link>
        <Select
          w="10%"
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
      <Box display="flex" justifyContent="center" m="auto" mt="1%">
        <Text>© 2022 MyFitnessPal, Inc.</Text>
      </Box>
    </Box>
  );
};

export default Footer2;
