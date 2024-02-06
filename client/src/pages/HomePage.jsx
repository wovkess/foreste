import React from "react";
import { Box, Grid, GridItem, Flex, Button, Text  } from "@chakra-ui/react";
import CardPage from "./CardPage";
import Footer from "../components/Footer";
import IntroVideo from "../Images/welcome.mp4"
import NavHome from "../components/NavHome";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { HomeRoute } from "../utils/consts";

const HomePage = () =>{
    return(
        <Box
            
        >
            <Flex>
                <NavHome />
            </Flex>
            <Flex
                justify="center"
                align="center"
                className="main"
                zIndex="-1"
            >
                <video className="IntroVideo" src={IntroVideo} type="video/mp4" autoPlay muted loop></video>
                <Text
                    color="#fff"
                    zIndex='0'
                    className="welcome_header"
                    fontWeight={"bold"}
                    fontSize={"60px"}
                >
                    Start of opportunity
                </Text>
                <Box>
                    <div class="arrow arrow-first"></div>
                    <div class="arrow arrow-second"></div>
                </Box>
            </Flex>
            <Flex
                flexWrap={'wrap'}
                height={'600px'}
            >
            </Flex>            
        </Box>
    )
} 
export default HomePage;