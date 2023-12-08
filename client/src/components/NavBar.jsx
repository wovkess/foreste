import React from "react";
import "../styles/NavBar.css";
import { Div, Text, Heading, Flex, Link, useMediaQuery, Button } from '@chakra-ui/react'
function Nav() {
  return (
		<Flex
			justifyContent='space-between'
			alignItems='center'
			boxShadow='md'
			borderRadius={10}
			padding='15px 2%'
			width='100%'
			position='fixed'
			height='65px'
			className="header"
		>
			<Link className="logo" href='#' textDecoration='none !important'>
				<Heading>foreste.</Heading>
			</Link>
			<Flex gap={4} className="nav">
				<Button className='btn-nav'>Profiles</Button>
				<Button className='btn-nav'>Products</Button>
				<Button className='btn-nav'>About</Button>
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
							stroke='#000000'
							stroke-linecap='round'
							stroke-linejoin='round'
							stroke-width='1.5'
							d='m17 17l4 4M3 11a8 8 0 1 0 16 0a8 8 0 0 0-16 0Z'
						/>
					</svg>
				</Link>
				<Link>
					<svg
						className='link_icon'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
					>
						<g fill='none' stroke='#000000' stroke-width='2'>
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
	)
}

export default Nav;
