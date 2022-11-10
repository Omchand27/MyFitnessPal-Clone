import { Box, Heading, Text } from "@chakra-ui/react";
import Info3Box from "./Info3Box";
import Title from "./Title";
import SlidePost from "./SlidePost";
import Recipes3 from "./Recipes3";
import ConnectApps from "./ConnectApp";


const Headings = () => {
  let data = [
    {
      id: 1,
      image:
        "https://www.myfitnesspal.com/_next/static/media/diary.e6e4c438.svg",
      title: "Learn. Track. Improve.",
      desc: "Keeping a food diary helps you understand your habits and increases your likelihood of hitting your goals.",
    },
    {
      id: 2,
      image:
        "https://www.myfitnesspal.com/_next/static/media/barcode.18277ae4.svg",
      title: "Logging Simplified.",
      desc: "Scan barcodes, save meals and recipes, and use Quick Tools for fast and easy food tracking.",
    },
    {
      id: 3,
      image:
        "https://www.myfitnesspal.com/_next/static/media/shoeblue.28e2684f.svg",
      title: "Stay Motivated.",
      desc: "Join the World’s Largest Fitness Community for advice, tips, and support 24/7.",
    },
  ];

  let Titles = {heading:"The Tools for Your Goals", desc:"Trying to lose weight, tone up, lower your BMI, or invest in your  overall health? We give you the right features to get there."}

  return (
    <Box mt="7%">
      <Title Titles={Titles}/>
      <Box display="flex" mt="5%" justifyContent="center">
        {data.map((ele) => {
          return (
            <Info3Box
              key={ele.id}
              title={ele.title}
              img={ele.image}
              desc={ele.desc}
            />
          );
        })}
      </Box>
        <SlidePost/>
        <Recipes3/>
        <ConnectApps/>
    </Box>
  );
};

export default Headings;
