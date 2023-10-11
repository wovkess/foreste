import './App.css';
import * as React from 'react'
import { ChakraProvider,CSSReset, extendBaseTheme, baseTheme} from '@chakra-ui/react'
import chakraTheme from '@chakra-ui/theme'
import { Button, ButtonGroup, Box, useColorMode, useColorModeValue } from '@chakra-ui/react'
import theme from './theme.js'
import Nav from "./NavBar"


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Nav />
    </ChakraProvider>
  );
}
export default App;
