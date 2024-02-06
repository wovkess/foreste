import React from "react";
import { Box, Grid, GridItem, Flex  } from "@chakra-ui/react";
import CardPage from "./CardPage";
import Footer from "../components/Footer";
import Nav from "../components/NavBar";
import IntroVideo from "../Images/welcome.mp4"

const HomePage = () =>{
    return(
        <Box>
            <Flex>
                <Nav />
            </Flex>
            <Flex
                justify="center"
                align="center"
                className="main"
                zIndex="-1"
            >
                <video className="IntroVideo" src={IntroVideo} type="video/mp4" autoPlay muted loop></video>
            </Flex>            
        </Box>
    )
} 
export default HomePage;