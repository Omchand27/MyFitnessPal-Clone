import { Box, Heading, Image, Text } from "@chakra-ui/react";

const Info3Box = ({ id, title, img, desc }) => {
    // border="1px solid red" 
    
  return (
    <Box justifyContent="center" key={id} w="29%">
      <Box borderRadius="50%" w="27%" m="auto" p="15px" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px">
        <Image src={img} alt={title} m="auto" />
      </Box>
      <Heading as="h4" size="md" mt="9%">{title}</Heading>
      <Text mt="5%" p="5px">{desc}</Text>
    </Box>
  );
};

export default Info3Box;
