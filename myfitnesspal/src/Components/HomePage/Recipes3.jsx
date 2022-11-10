import { Box } from "@chakra-ui/react"
import Title from "./Title"


const Recipes3 = ()=>{

    let Titles = {heading: "Recipes & Inspiration", desc: "Get nutritionist-approved recipes and motivational workout tips from MyFitnessPal experts."}

    return <Box mt="9%">
        <Title Titles={Titles}/>
    </Box>

}

export default Recipes3;