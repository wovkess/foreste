import "./styles/App.css";
import * as React from "react";
import {
  GridItem,
  Grid} from "@chakra-ui/react";
import { Box, useMediaQuery } from '@chakra-ui/react'
import { Flex } from "@chakra-ui/react";
import Footer from "./components/Footer"
import CardPage from "./pages/CardPage";
import AppRouter from "./components/AppRouter";
import { Router, Routes, Route, BrowserRouter } from "react-router-dom";


function App() {
  return (
		<BrowserRouter>
			<AppRouter />
		</BrowserRouter>
	) 
  }
export default App;
