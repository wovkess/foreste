import React, { useState, useRef } from "react";
import "../styles/App.css";
import { Heading, Flex } from '@chakra-ui/react'
import { Link } from "react-router-dom";
import { AuthRoute, HomeRoute, ProfilesRoute } from "../utils/consts";
import colors from "../styles/colors";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
function NavBar() {
	const colorPallet = colors();
	const {midnight, lightBlue } = colorPallet;
	const location = useLocation();
	const [isNavbarVisible, setIsNavbarVisible] = useState(true); // Initial visibility state
  	const prevScrollY = useRef(0); // Store previous scroll position

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			const scrollDirection = currentScrollY > prevScrollY.current ? "down" : "up";

			if (scrollDirection === "down" && currentScrollY > 50) { // Hide on scroll down after 50px 
				setIsNavbarVisible(false);
			} else if (scrollDirection === "up" || currentScrollY <= 50) {
				setIsNavbarVisible(true);
			}

			prevScrollY.current = currentScrollY;
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll); // Cleanup function
	}, []);
	useEffect(() => {
		const scrollToSection = window.location.hash.substring(1);
	
		if (scrollToSection) {
		  const section = document.getElementById(scrollToSection);
		  if (section) {
			section.scrollIntoView({
			  behavior: 'smooth',
			});
		  }
		}
	  }, [window.location.hash]);
	
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
			style={{
			transition: "opacity .3s ease-in-out", 
			opacity: isNavbarVisible ? 1 : 0,
			}}
		>
			<Link 
				className='logo'
			 	textDecoration='none !important'
				to={`${HomeRoute}#home`}
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
				<div className="inputGroup" id="cursorBlack">
					<Link id="cursorBlack">
						<svg id="cursorBlack" fill="#000000" className="searchIcon" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
							<path d="M790.588 1468.235c-373.722 0-677.647-303.924-677.647-677.647 0-373.722 303.925-677.647 677.647-677.647 373.723 0 677.647 303.925 677.647 677.647 0 373.723-303.924 677.647-677.647 677.647Zm596.781-160.715c120.396-138.692 193.807-319.285 193.807-516.932C1581.176 354.748 1226.428 0 790.588 0S0 354.748 0 790.588s354.748 790.588 790.588 790.588c197.647 0 378.24-73.411 516.932-193.807l516.028 516.142 79.963-79.963-516.142-516.028Z" fill-rule="evenodd"></path>
						</svg> 
					</Link>
					
					<input id="cursorBlack" type="text" placeholder="Search" className="inputSearch"></input>
				</div>
				<Link className='nav-link' to={ProfilesRoute}>Profiles/></Link>
				<Link className='nav-link' to={`${HomeRoute}#products`}>Products/></Link>
				<Link className='nav-link' to={`${HomeRoute}#about`}>About/></Link>
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