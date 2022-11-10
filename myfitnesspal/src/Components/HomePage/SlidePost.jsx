import { Box, Button } from "@chakra-ui/react";
import Title from "./Title";

const SlidePost = () => {
  let Titles = {
    heading: "Victory Stories",
    desc: "Every day, more than 3,000 members reach their goals with MyFitnessPal. Get inspired for the journey ahead.",
  };

  return (
    <Box mt="9%">
      <Title Titles={Titles} />
      <Button mt="5%" colorScheme="blue" size="lg">START YOUR JOURNEY TODAY</Button>
    </Box>
  );
};

export default SlidePost;
