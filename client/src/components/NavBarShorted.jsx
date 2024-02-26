import React, { useEffect } from "react";
import { Heading, Flex, Button } from '@chakra-ui/react'
import { Link } from "react-router-dom";
import { AuthRoute } from "../utils/consts";
import { HomeRoute } from "../utils/consts";
import colors from "../styles/colors";
const NavSh = () => {
	const colorPallet = colors();
	const { midnight, white } = colorPallet;
	useEffect(() => {
		const script = document.createElement('script');
		script.src = 'https://cdn.lordicon.com/lordicon.js';
		script.async = true;
		script.defer = true;
		document.body.appendChild(script);
		return () => {
		  document.body.removeChild(script);
		};
	  }, []);
	return (

	<>
		<Flex
			justifyContent='space-between'
			alignItems='center'
			borderRadius={10}
			padding='15px 3%'
			width='100%'
			position='fixed'
			height='65px'
			id='main-head'
			className='header'
		>
			<Link 
				className='logo'
				textDecoration='none !important'
				to={HomeRoute}
			>
				<Heading
					color={white}
				>
				foreste.
				</Heading>
			</Link>
			<Flex
				placeItems={'center'}
				color='#000'
				fontSize='18px'
				fontWeight='semibold'
				gap={4}
				justifyContent='center'
			>
				<Link
					to={HomeRoute}
					style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
				>
					<lord-icon
						src="https://cdn.lordicon.com/vduvxizq.json"
						trigger="hover"
						colors="primary:#ffffff"
						style={{ width: '30px', height: '30px' }}
					></lord-icon>
				</Link>
			</Flex>
		</Flex>
		
	</>
	)
}

export default NavSh;