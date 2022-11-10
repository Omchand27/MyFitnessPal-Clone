import { Box, Image, Heading, Text } from "@chakra-ui/react"
import Info3Box from "./Info3Box"
import Title from "./Title"


const Recipes3 = ()=>{

    let Titles = {heading: "Recipes & Inspiration", desc: "Get nutritionist-approved recipes and motivational workout tips from MyFitnessPal experts."}

    let data = [
        {id: 1, title: "15 Make-Ahead Breakfasts Under 300 Calories", desc: "MyFitnessPal Blog", img: "https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbreakfast-300-calories.d991cc82.png&w=1920&q=75"},
        {id: 2, title: "The Problem With Cheat Days", desc: "MyFitnessPal Blog", img: "https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcheat-days.a49e92b5.jpg&w=1920&q=75"},
        {id: 3, title: "Essential Guide to Getting Moving", desc: "MyFitnessPal Blog", img: "https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgetting-moving.e3e4042a.png&w=1920&q=75"}
    ] 

    return <Box mt="9%">
        <Title Titles={Titles}/>
        <Box display="flex" w="80%" m="auto" mt="3%">
            {data.map((ele)=>{
                return <Box key={ele.id} w="27%" m="auto" alignItems="left" borderRadius="10px" h="45vh" boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px" overflow="hidden">
                <Box>
                  <Image src={ele.img} alt={ele.title} m="auto" />
                </Box>
                <Heading as="h4" size="md" mt="9%">{ele.title}</Heading>
                <Text mt="5%" p="5px" color="blue">{ele.desc}</Text>
              </Box>
            })}
        </Box>
    </Box>

}

export default Recipes3;