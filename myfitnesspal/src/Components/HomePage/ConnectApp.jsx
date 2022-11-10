import { Box, Image } from "@chakra-ui/react";
import Title from "./Title";

const ConnectApps = () => {
  let Titles = {
    heading: "Connect with over 50 apps.",
    desc: "Easily link your MyFitnessPal account with apps that support your healthier lifestyle. It’s not just about calories. It’s about feeling better, looking better, and living better.",
  };

  return (
    <Box mt="9%">
      <Title Titles={Titles} />
      <Box w="50%" m="auto">
        <Image src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg-apps%402x.85e549ef.png&w=1920&q=75" mt="5%"/>
      </Box>
    </Box>
  );
};

export default ConnectApps;
