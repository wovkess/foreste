import React from "react";
import { useState } from "react";
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
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	
	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};
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
					<Flex
							position={"relative"}
							align={"center"}
							justify={"center"}
							mb="10px"
						>
							<svg  stroke-width="2" className="input_icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
								<path fill="currentColor" d="M512 512a192 192 0 1 0 0-384a192 192 0 0 0 0 384m0 64a256 256 0 1 1 0-512a256 256 0 0 1 0 512m320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0"/>
							</svg>
							<Input 
								placeholder="email"
								type='email'
								className='email_input'
								paddingLeft={'2.5rem'}
							/>
					</Flex>
					<Flex
							position={"relative"}
							align={"center"}
							justify={"center"}
						
						>
							<Link 
								className='input_icon'
								onClick={togglePasswordVisibility}
							>
								<svg stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<path d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" stroke-linejoin="round" stroke-linecap="round"></path>
								</svg>
							</Link>
							<Input 
								paddingLeft={'2.5rem'}
								className="pass_input" 
								placeholder="password"
								type={showPassword ? 'text' : 'password'}
          						value={password}
          						onChange={(e) => setPassword(e.target.value)}
							></Input>
					</Flex>
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