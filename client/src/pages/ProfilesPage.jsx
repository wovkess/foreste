import React from "react";
import { Text, Flex, Box, Grid, GridItem } from "@chakra-ui/react";
import NavHome from "../components/NavBar";
import colors from "../styles/colors";
import CardPage from "./CardPage";
import { wrap } from "framer-motion";
import Loader from "../components/Loader";
import { useState, useEffect } from "react";
import Cursor from "../components/Cursor";
import Footer from "../components/Footer";



const ProfilesPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const colorPallet = colors();
  const midnight = colorPallet.midnight;

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setIsLoading(false);
      } catch (error) {
        console.error("Error", error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
    
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Cursor />
          <Flex
            width="100%"
            backgroundColor={midnight}
            justify="center"
          >
            <NavHome />
            <Flex justify="center" mt="150px" width="70%" gap="40px" flexWrap="wrap" z-index="-1">
              <CardPage />
              <CardPage />
              <CardPage />
              <CardPage />
              <CardPage />
              <CardPage />
              <CardPage />
              <CardPage />
              <CardPage />
              <CardPage />
              <CardPage />
            </Flex>
            {/* <Footer /> */}
          </Flex>
        </>
      )}
    </>
  );
};

export default ProfilesPage;
