import "./styles/App.css";
import * as React from "react";
import {
  ChakraProvider,
  CSSReset,
  extendBaseTheme,
  baseTheme,
  GridItem,
  Grid,
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
import Nav from "./NavBar";
import CardPage from "./pages/CardPage";

function App() {
  return (
    <Grid
      templateAreas={`"header header"
                    "nav main"
                    "nav footer"`}
      gridTemplateRows={"50px 1fr 30px"}
      gridTemplateColumns={"150px 1fr"}
      h="200px"
      gap="1"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem area={"header"}>
        <Nav />
      </GridItem>
      <GridItem mt="70px" area={"main"}>
        <Flex gap={10}>
          <CardPage />
          <CardPage />
          <CardPage />
        </Flex>
        <Flex mt={10} gap={10}>
          <CardPage />
          <CardPage />
          <CardPage />
        </Flex>
      </GridItem>
      <GridItem pl="2" area={"footer"}>
        Footer
      </GridItem>
    </Grid>
  );
}
export default App;
