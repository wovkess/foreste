import React, { useState } from 'react';
import { Flex, Box, Heading, Input, Button, Text, Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import colors from "../styles/colors";
import NavSh from "../components/NavBarShorted"
import '../styles/App.css'
import { RegisterRoute } from "../utils/consts";
import Cursor from '../components/Cursor';



const  AuthPage = () => {
	const colorPallete = colors();
	const {mediumGreen, midnight, lightBlue, white} = colorPallete;
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};
	return (
		<>
			
			<NavSh />
			<Flex
				justify="center"
				align="center"
				height="100vh"
				width="100vw"
				bgColor={midnight}
			>
				<Cursor />

				<Box // форма
					width="350px"
					height="450px"
					boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;"
					borderRadius="8px"
					textAlign="center"
					bgColor={'white'}
					id="cursorBlack"
				>
					<Box
						mt="45px"
					>
						<Heading
							fontSize="35px"
							fontWeight="650"
							color={midnight}
							id="cursorBlack"
						>
							Sign in
						</Heading>
					</Box>
					<Box
						mt="80px"
						id="cursorBlack"

					>
						<Flex
							position={"relative"}
							align={"center"}
							justify={"center"}
							mb="10px"
							id="cursorBlack"
						>
							<svg id="cursorBlack" stroke-width="2" className="input_icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
								<path fill="currentColor" d="M512 512a192 192 0 1 0 0-384a192 192 0 0 0 0 384m0 64a256 256 0 1 1 0-512a256 256 0 0 1 0 512m320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0"/>
							</svg>
							<Input 
								placeholder="email"
								type='email'
								className='email_input'
								paddingLeft={'2.5rem'}
								id="cursorBlack"
							/>
						</Flex>
						<Flex
							position={"relative"}
							align={"center"}
							justify={"center"}
							id="cursorBlack"
						
						>
							<Link 
								className='input_icon'
								onClick={togglePasswordVisibility}
								id="cursorBlack"
							>
								<svg id="cursorBlack" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
								id="cursorBlack"
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
							width="150px"
							colorScheme='teal'
						>Login</Button>
						<Text
							mt="25px"
							fontSize="15px"
							color={midnight}
							id="cursorBlack"
						>
							Don't have an account? <ChakraLink
								color={lightBlue}
							>
							<Link
								to={RegisterRoute}
								id="cursorBlack"
							>
							Register
							</Link>
							</ChakraLink>
						</Text>
					</Box>
				</Box>
			</Flex>
		</>
	)
}

export default AuthPage;