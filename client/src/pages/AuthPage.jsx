import React, { useState } from 'react';
import { Flex, Box, Heading, Input, Button, Text, Link as ChakraLink } from "@chakra-ui/react";

import { Link } from "react-router-dom";
import colors from "../styles/colors";
import NavSh from "../components/NavBarSh"
import '../styles/App.css'
import { RegisterRoute } from "../utils/consts";

const  AuthPage = () => {
	const colorPallete = colors();
	const midnight = colorPallete.midnight;
	const mediumGreen = colorPallete.mediumGreen;
	const lightBlue = colorPallete.lightBlue;
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
							Sign in
						</Heading>
					</Box>
					<Box
						mt="80px"
					>
						<Input 
							placeholder="email"
							className='email_input'
						/>
						<Box>
							<Input
								type={showPassword ? 'text' : 'password'}
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								placeholder='password'
								className='pass_input'
							/>

							<Link className='eye_btn'>
								<svg className='eye_icon' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
										<path d="M3 13c3.6-8 14.4-8 18 0"/>
										<path d="M12 17a3 3 0 1 1 0-6a3 3 0 0 1 0 6"/>
									</g>
								</svg>
							</Link>
						</Box>
        				
						
						
						{/* <Input 
							mt="15px"
							placeholder="password"
							width="80%"
							type="password"
						/> */}
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
						>
							Don't have an account? <ChakraLink
								color={lightBlue}
							>
							<Link
								to={RegisterRoute}
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