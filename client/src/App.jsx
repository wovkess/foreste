import "./styles/App.css";
import * as React from "react";
import {
  ChakraProvider,
  CSSReset,
  extendBaseTheme,
  baseTheme,
  GridItem,
  Grid,
  Link,
} from "@chakra-ui/react";
import chakraTheme from "@chakra-ui/theme";
import {
  Button,
  ButtonGroup,
  Box,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { Flex, Spacer, Square, Center, Text } from "@chakra-ui/react";
import theme from "./theme.js";
import Nav from "./components/NavBar";
import Footer from "./components/Footer"
import CardPage from "./pages/CardPage";

function App() {
  return (
    <Flex
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
        <GridItem mt="70px" justifyContent="center" className=".main_inf" area={"main"}>
          <Flex gap={12} flexWrap="wrap"> 
            <CardPage />
            <CardPage />
            <CardPage />
            <CardPage />
            <CardPage />
            <CardPage />
            <CardPage />
          </Flex>
        </GridItem>
        <GridItem h={50} alignItems="center" justify="center" pt="30px" paddingBottom={30} area={"footer"}>
          <Footer />
        </GridItem>
      </Grid>
    </Flex>
  );
}
export default App;
