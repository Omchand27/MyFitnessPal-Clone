import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import Title from "./Title";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const SlidePost = () => {
  let Titles = {
    heading: "Victory Stories",
    desc: "Every day, more than 3,000 members reach their goals with MyFitnessPal. Get inspired for the journey ahead.",
  };

  const SlideData = [
    {
      title: "She was eager to make a change.",
      desc: "Now, when I have friends starting to run and getting frustrated, I tell them to just stick with it, eventually, you get faster.",
      author: "- Lori",
      image:
        "https://www.myfitnesspal.com/_next/image?url=%2Fpages%2Fhome%2Fvictory-story-3.jpg&w=1920&q=75",
    },
    {
      title: "Education helped her lose 30 pounds.",
      desc: "MyFitnessPal gave me a wake up call to the way I was eating and made things clear what I needed to change.",
      author: "- Stephanie",
      image:
        "https://www.myfitnesspal.com/_next/image?url=%2Fpages%2Fhome%2Fvictory-story-1.jpg&w=1920&q=75",
    },
    {
      title: "From fast-food addict to mindful eater.",
      desc: "naturally fell into the concept of mindful eating... it takes 15-20 minutes for the food to hit your stomach, so I started eating slower.",
      author: "- Eric",
      image:
        "https://www.myfitnesspal.com/_next/image?url=%2Fpages%2Fhome%2Fvictory-story-2.jpg&w=1920&q=75",
    },
  ];

  return (
    <Box mt="9%">
      <Title Titles={Titles} />
      <Box w="62%" m="auto" h="80vh" mt="5%" boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px">
      <Carousel infiniteLoop>
        {SlideData.map((ele) => {
          return (
            <Box
              w="100%"
              h="80vh"
              display="flex"
              m="auto" key={ele.title}
            >
              <Box w="50%" m="auto">
                <Image src={ele.image} h="65vh" />
              </Box>
              <Box w="45%" m="auto" h="65vh">
                <Heading mt="5%" textAlign="left">
                  {ele.title}
                </Heading>
                <Heading
                  as="h3"
                  size="md"
                  mt="15%"
                  textAlign="left"
                  lineHeight="30px"
                >
                  {ele.desc}
                </Heading>
                <Text mt="25%" ml="60%">
                  {ele.author}
                </Text>
              </Box>
            </Box>
          );
        })}
      </Carousel>
      </Box>
      <Button mt="5%" colorScheme="blue" size="lg">
        START YOUR JOURNEY TODAY
      </Button>
    </Box>
  );
};

export default SlidePost;
