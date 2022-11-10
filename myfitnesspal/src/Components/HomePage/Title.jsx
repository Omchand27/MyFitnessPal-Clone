import { Box, Heading, Text } from "@chakra-ui/react";

const Title = ({ Titles }) => {
  return (
    <Box>
      <Box w="40%" m="auto">
        <Heading>{Titles.heading}</Heading>
        <Text mt="2%">{Titles.desc}</Text>
      </Box>
    </Box>
  );
};

export default Title;
