import "./styles/App.css";
import * as React from "react";
import {
  // ChakraProvider,
  // CSSReset,
  // extendBaseTheme,
  // baseTheme,
  GridItem,
  Grid,
  // Link,
} from "@chakra-ui/react";
import {
  Box,
} from "@chakra-ui/react";
import { Flex, Spacer, Square, Center, Text, useMediaQuery } from "@chakra-ui/react";
import theme from "./theme.js";
import Nav from "./components/NavBar";
import Footer from "./components/Footer"
import CardPage from "./pages/CardPage";

function App() {
  const [isSmallerThan600] = useMediaQuery("(max-width: 600px)");
  return (
    <Box>{isSmallerThan600 ? ( <Flex
      justifyContent="center"
      flexWrap='wrap' 
    >
      <Grid
        templateAreas={`"header"
                      "main"
                      "footer"`}
        gridTemplateRows={"50px 1fr 30px"}
        gridTemplateColumns={"1fr"}
        gap="1"
        color="blackAlpha.800"
        fontWeight="bold"
      >
        <GridItem area={"header"}>  
          <Nav />
        </GridItem>
        <GridItem mt="70px" justifySelf="center" className=".main_inf" area={"main"}>
          <Grid templateColumns="repeat(1, 300px)" gap={10}>
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
            <CardPage />
          </Grid>
        </GridItem>
        <GridItem h={50} alignItems="center" justify="center" pt="30px" paddingBottom={30} area={"footer"}>
          <Footer />
        </GridItem>
      </Grid>
    </Flex>) : ( <Flex
      justifyContent="center"
      flexWrap='wrap' 
    >
      <Grid
        templateAreas={`"header"
                      "main"
                      "footer"`}
        gridTemplateRows={"50px 1fr 30px"}
        gridTemplateColumns={"1fr"}
        gap="1"
        color="blackAlpha.800"
        fontWeight="bold"
      >
        <GridItem area={"header"}>  
          <Nav />
        </GridItem>
        <GridItem mt="70px" justifySelf="center" className=".main_inf" area={"main"}>
          <Grid templateColumns="repeat(4, 1fr)" gap={10}>
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
            <CardPage />
          </Grid>
        </GridItem>
        <GridItem h={50} alignItems="center" justify="center" pt="30px" paddingBottom={30} area={"footer"}>
          <Footer />
        </GridItem>
      </Grid>
    </Flex>)}</Box>
   
    
  );
}
export default App;
