import React from "react";
import "../styles/NavBar.css";
import { Heading, Flex, Button } from '@chakra-ui/react'
import { Link } from "react-router-dom";
import { AuthRoute, HomeRoute, ProfilesRoute, ProductsRoute, AboutRoute } from "../utils/consts";
import colors from "../styles/colors";

function MainNav() {
	const colorPallet = colors();
	const midnight = colorPallet.midnight;
    const lightBlue = colorPallet.lightBlue;
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
					color={"#000"}
				>
				foreste.
				</Heading>
			</Link>
			<Flex gap={4} className='nav'>
				<Button 
					className='btn-nav'
				>
					<Link to={ProfilesRoute}>Profiles</Link>
				</Button>
				<Button className='btn-nav'>
					<Link to={ProductsRoute}>Products</Link>
				</Button>
				<Button className='btn-nav'>
					<Link to={AboutRoute}>About</Link>
				</Button>
			</Flex>
			<Flex
				placeItems={'center'}
				color='#000'
				fontSize='18px'
				fontWeight='semibold'
				gap={4}
				justifyContent='center'
			>
				<Link href=''>
					<svg
						className='link_icon'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							fill='none'
							stroke='#000'
							stroke-linecap='round'
							stroke-linejoin='round'
							stroke-width='1.5'
							d='m17 17l4 4M3 11a8 8 0 1 0 16 0a8 8 0 0 0-16 0Z'
						/>
					</svg>
				</Link>
				<Link
					to={AuthRoute}
				>
					<svg
						className='link_icon'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
					>
						<g fill='none' stroke='#000' stroke-width='2'>
							<path
								stroke-linejoin='round'
								d='M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z'
							/>
							<circle cx='12' cy='7' r='3' />
						</g>
					</svg>
				</Link>
			</Flex>
		</Flex>
		
	</>
	)
}

export default MainNav;