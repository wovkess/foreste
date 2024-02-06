import React from "react";
import { Flex, Box, Heading, Input, Button, Text, Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import colors from "../styles/colors";
import NavSh from "../components/NavBarSh"
import '../styles/App.css'
import { RegisterRoute } from "../utils/consts";
import { AuthRoute } from "../utils/consts";

const RegisterPage = () => {
	const colorPallete = colors();
	const midnight = colorPallete.midnight;
	const mediumGreen = colorPallete.mediumGreen;
	const lightBlue = colorPallete.lightBlue;
	return(
		<>
		<NavSh />
		<Flex
			justify="center"
			align="center"
			height="100vh"
			width="100vw"
		>
			
			<Box // форма
				width="350px"
				height="450px"
				boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;"
				borderRadius="8px"
				textAlign="center"
			>
				<Box
					mt="45px"
				>
					<Heading
						color={midnight}
						fontSize="35px"
						fontWeight="650"
					>
						Sign up
					</Heading>
				</Box>
				<Box
					mt="80px"
				>
					<Input 
						placeholder="email"
						className='email_input'
					/>
					<Input 
						placeholder="password"
						className='pass_input'
					/>
				</Box>
				
				<Box
					mt="50px"
				>
					<Button
						color="#fff"
						backgroundColor={mediumGreen}
						borderRadius="8px"
						colorScheme='teal'
						width="150px"
					>Sign up</Button>
					<Text
						mt="25px"
						fontSize="15px"
					>
						Do you have an account? <ChakraLink
							color={lightBlue}
						>
						<Link
							to={AuthRoute}
						>
						Login
						</Link>
						</ChakraLink>
						
					</Text>
				</Box>
				
			</Box>
		</Flex>
	</>
	)
}

export default RegisterPage;