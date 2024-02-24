import React from "react";
import "../styles/App.css";
import "../styles/NavBar.css";
import { Heading, Flex } from '@chakra-ui/react'
import { Link } from "react-router-dom";
import { AuthRoute, HomeRoute, ProfilesRoute } from "../utils/consts";
import colors from "../styles/colors";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
function NavBar() {
	const colorPallet = colors();
	const midnight = colorPallet.midnight;
    const lightBlue = colorPallet.lightBlue;
	const location = useLocation();
	useEffect(() => { // добавление скролла по странице
		const queryParams = new URLSearchParams(location.search);
		const scrollToSection = queryParams.get("scrollTo");
	
		if (scrollToSection) {
		  const section = document.getElementById(scrollToSection);
		  if (section) {
			section.scrollIntoView({
			  behavior: 'smooth',
			});
		  }
		}
	  }, [location.search]);
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
				to={`${HomeRoute}?scrollTo=home`}
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
				<Link className='nav-link' to={`${HomeRoute}?scrollTo=products`}>Products/></Link>
				<Link className='nav-link' to={`${HomeRoute}?scrollTo=about`}>About/></Link>
				<Link
					to={AuthRoute}
					style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
				>
						<lord-icon
							src="https://cdn.lordicon.com/kthelypq.json"
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

export default NavBar;