import { Button, Image, Box, Text } from "@chakra-ui/react";

const GetApps = ({ image, title, desc }) => {
  return (
    <Box display="flex" w="100%">
      <Box>
        <Image src={image} />
      </Box>
      <Box ml="2%">
        <Text>{title}</Text>
        <Text>{desc}</Text>
        <Button>GET</Button>
      </Box>
    </Box>
  );
};

export default GetApps;
