import "./styles/App.css";
import * as React from "react";
import {
  GridItem,
  Grid} from "@chakra-ui/react";
import {
  Box,
} from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import Nav from "./components/NavBar";
import Footer from "./components/Footer"
import CardPage from "./pages/CardPage";

function App() {
  return (
		<Box>
				<Grid
					templateAreas={`"header"
                      "main"
                      "footer"`}
					gridTemplateRows={'30px 1fr 10px'}
					gridTemplateColumns={'1fr'}
					gap='1'
					color='blackAlpha.800'
					fontWeight='bold'
				>
					<GridItem area={'header'}>
						<Nav />
					</GridItem>
					<GridItem
						mt='70px'
						justifySelf='center'
						className='.main_inf'
						area={'main'}
					>
						<Grid
							gap={10}
							className='grid-container'
						>
							<CardPage />
							<CardPage />
							<CardPage />
							<CardPage />
							<CardPage />
						</Grid>
					</GridItem>
					<GridItem
						h={50}
						alignItems='center'
						placeSelf="center"
						pt='30px'
						paddingBottom={30}
						area={'footer'}
					>
						<Footer />
					</GridItem>
				</Grid>
		</Box>
	)
}
export default App;
