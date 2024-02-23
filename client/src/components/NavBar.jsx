import React from "react";
import "../styles/App.css";
import "../styles/NavBar.css";
import { Heading, Flex, Button} from '@chakra-ui/react'
import { Link } from "react-router-dom";
import { AuthRoute, HomeRoute, ProfilesRoute, ProductsRoute, AboutRoute } from "../utils/consts";
import colors from "../styles/colors";

function NavBar() {
	const colorPallet = colors();
	const midnight = colorPallet.midnight;
    const lightBlue = colorPallet.lightBlue;
	const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
    
        if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
        });
        }
    };
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
					color={"#fff"}
					className="heading"
				>
				foreste.
				</Heading>
			</Link>
			<Flex
				placeItems={'center'}
				color='#000'
				fontSize='18px'
				fontWeight='semibold'
				gap={5}
				justifyContent='center'
			>
				<div className="inputGroup">
					<Link>
						<svg fill="#000000" className="searchIcon" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
							<path d="M790.588 1468.235c-373.722 0-677.647-303.924-677.647-677.647 0-373.722 303.925-677.647 677.647-677.647 373.723 0 677.647 303.925 677.647 677.647 0 373.723-303.924 677.647-677.647 677.647Zm596.781-160.715c120.396-138.692 193.807-319.285 193.807-516.932C1581.176 354.748 1226.428 0 790.588 0S0 354.748 0 790.588s354.748 790.588 790.588 790.588c197.647 0 378.24-73.411 516.932-193.807l516.028 516.142 79.963-79.963-516.142-516.028Z" fill-rule="evenodd"></path>
						</svg> 
					</Link>
					
					<input type="text" placeholder="Search" className="inputSearch"></input>
				</div>
				<Link className='nav-link' to={ProfilesRoute}>Profiles/></Link>
				<Link className='nav-link' onClick={() => scrollToSection('products')}>Products/></Link>
				<Link className='nav-link' onClick={() => scrollToSection('about')}>About/></Link>
				<Link
					to={AuthRoute}
				>
					<svg
						className='link_icon'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
					>
						<g fill='none' stroke='#fff' stroke-width='2'>
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

export default NavBar;