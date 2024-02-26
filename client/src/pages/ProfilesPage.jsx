import React from "react";
import { Text, Flex, Box, Grid, GridItem } from "@chakra-ui/react";
import NavHome from "../components/NavBar";
import colors from "../styles/colors";
import CardPage from "./CardPage";
import { wrap } from "framer-motion";
import Loader from "../components/Loader";
import { useState, useEffect } from "react";
import Cursor from "../components/Cursor";

const ProfilesPage = () =>{
    const [isLoading, setIsLoading] = useState(true);
    const colorPallet = colors();
    const midnight = colorPallet.midnight;
    useEffect(() => {
        const fetchData = async () => {
          try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            setIsLoading(false);
          } catch (error) {
            console.error('Error', error);
            setIsLoading(false);
          }
        };
        fetchData();
      }, []);
    
    return (
        <>
            
            <Cursor />
            {isLoading ? (
                <Loader />
            ) : (
              
                <Flex width={'100%'} height={'100vh'} backgroundColor={midnight} justify={'center'}>
                    
                    <NavHome />
                    <Grid templateColumns='repeat(5, 1fr)' gap={50} mt={'5%'}>
                        <GridItem h='fit-content' w={'fit-content'}><CardPage /></GridItem>
                        <GridItem h='fit-content' w={'fit-content'}><CardPage /></GridItem>
                        <GridItem h='fit-content' w={'fit-content'}><CardPage /></GridItem>
                        <GridItem h='fit-content' w={'fit-content'}><CardPage /></GridItem>
                        <GridItem h='fit-content' w={'fit-content'}><CardPage /></GridItem>
                        <GridItem h='fit-content' w={'fit-content'}><CardPage /></GridItem>
                        <GridItem h='fit-content' w={'fit-content'}><CardPage /></GridItem>
                        <GridItem h='fit-content' w={'fit-content'}><CardPage /></GridItem>
                        <GridItem h='fit-content' w={'fit-content'}><CardPage /></GridItem>
                        <GridItem h='fit-content' w={'fit-content'}><CardPage /></GridItem>
                    </Grid>
                </Flex>
            )}
            
                

        </>
    )
}
export default ProfilesPage;

