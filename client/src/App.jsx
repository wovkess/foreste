import "./styles/App.css";
import * as React from "react";
import {
  GridItem,
  Grid} from "@chakra-ui/react";
import { Box, useMediaQuery } from '@chakra-ui/react'
import { Flex } from "@chakra-ui/react";
import Nav from "./components/NavBar";
import Footer from "./components/Footer"
import CardPage from "./pages/CardPage";

function App() {
	const [isSmallerThan600] = useMediaQuery('(max-width: 600px)')
  return (
		<Box>
				<Grid
					templateAreas={`"header"
                      "main"
                      "footer"`}
					gridTemplateRows={'65px 1fr 20px'}
					gridTemplateColumns={'1fr'}
					gap='1'
					color='blackAlpha.800'
					fontWeight='bold'
				>
					<GridItem area={'header'}>
						<Nav />
					</GridItem>
					<GridItem
						justifySelf='center'
						className='.main_inf'
						area={'main'}
					>
						<Grid
							mt="100px"
							gap={10}
							className='grid-container'
						>
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
					<GridItem
						h={50}
						placeSelf="center"
						pt='30px'
						area={'footer'}
					>
						<Footer />
					</GridItem>
				</Grid>
		</Box>
	)
}
export default App;
