import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { useEffect } from "react";
import { useState } from 'react';
import colors from "../styles/colors";
import calmHouse from "../media/calmHouse.jpg" 
import Loader from "../components/Loader";
import IntroVideo from "../components/IntroVideo";
import Cursor from "../components/Cursor";
import ToTopButton from "../components/ToTopButton";

const HomePage = () =>{
    const [isLoading, setIsLoading] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);

    const colorPallete = colors();
    const darknessGreen = colorPallete.darnessGreen;
    const midnight = colorPallete.midnight;
    useEffect(() => {
        // const handleScroll = () => {
        //     setIsScrolled(window.scrollY > 0);
        // }
        // window.addEventListener("scroll", handleScroll);
        const fetchData = async () => {
          try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            setIsLoading(false);
          } catch (error) {
            console.error('Error, not found.', error);
            setIsLoading(false);
          }
        };
        fetchData();
        // return () => {
        //     window.removeEventListener("scroll", handleScroll);
        // };
      }, []);
    return(
        <>

            {isLoading ? (
                <Loader />
            ) : (
            <>
            <Cursor />
            <Box
            >

                <Flex>
                    <NavBar />
                </Flex>
                <Flex
                    justify="center"
                    align="center"
                    className="main"
                    zIndex="-1"
                    id="home"
                >

                    <IntroVideo />
                    <Text
                        color="#fff"
                        zIndex='0'
                        className="welcome_header"
                        fontWeight={"bold"}
                        fontSize={"60px"}
                    >
                        The start of opportunity
                    </Text>
                    <Box>
                        <div class="arrow arrow-first"></div>
                        <div class="arrow arrow-second"></div>
                    </Box>
                </Flex>
                <Flex
                    flexWrap={'wrap'}
                    height={'100vh'}
                    backgroundColor={midnight}
                    justify={'center'}
                    id="about"
                >
                    <Box
                        mt={'7%'}
                    >
                        <Text
                            color={'white'}
                            fontSize={'50px'}
                        ><code>{`<We develop for developers />`}</code>
                        </Text>

                    </Box>
                    
                    {/* <Box
                        
                        mt={'150px'}
                        className="photoHouse"
                    >
                        <Image src={calmHouse} />
                    </Box> */}
                
                    {/* <Flex
                        marginTop={'190vh'}
                    >
                        <Footer />    
                    </Flex> */}
                    
                </Flex>  
                <Flex
                    flexWrap={'wrap'}
                    height={'100vh'}
                    backgroundColor={midnight}
                    justify={'center'}
                    id="products"
                >
                    <Footer />
                    <ToTopButton />
                </Flex>

            </Box>
            </>
            )}
        </>
    )
} 
export default HomePage;