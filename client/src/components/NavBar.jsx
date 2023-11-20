import React from "react";
import "../styles/NavBar.css";
import {
  Button,
  Heading,
  Flex,
  Box,
  Link,
  useMediaQuery,
} from "@chakra-ui/react";
function Nav() {
  const [isSmallerThan600] = useMediaQuery("(max-width: 600px)");
  return (
      <Box boxShadow="md" borderRadius={4} padding={4} textAlign="center" paddingLeft={16} paddingRight={16}>{isSmallerThan600 ? (
        <Flex
          width={300}
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Link href="#" textDecoration="none !important"><Heading>foreste.</Heading></Link>
          </Box>
          <Box>
            <Flex
              placeItems={"center"}
              color="#000"
              fontSize="18px"
              fontWeight="semibold"
              gap={2}
  
            >
              <Link 
                href=""
              >
                <svg className="link_icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#000000" d="M19.75 10a.75.75 0 0 0-1.5 0h1.5Zm-14 0a.75.75 0 0 0-1.5 0h1.5Zm14.72 2.53a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM12 3l.53-.53a.75.75 0 0 0-1.06 0L12 3Zm-9.53 8.47a.75.75 0 1 0 1.06 1.06l-1.06-1.06ZM7 21.75h10v-1.5H7v1.5ZM19.75 19v-9h-1.5v9h1.5Zm-14 0v-9h-1.5v9h1.5Zm15.78-7.53l-9-9l-1.06 1.06l9 9l1.06-1.06Zm-10.06-9l-9 9l1.06 1.06l9-9l-1.06-1.06ZM17 21.75A2.75 2.75 0 0 0 19.75 19h-1.5c0 .69-.56 1.25-1.25 1.25v1.5Zm-10-1.5c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 7 21.75v-1.5Z"/>
                </svg>
              </Link>
              <Link 
                href=""
              >
                <svg className="link_icon" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#000000" d="M4 5.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0ZM5.5 3a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5Zm5 3a1 1 0 1 1 2 0a1 1 0 0 1-2 0Zm1-2a2 2 0 1 0 0 4a2 2 0 0 0 0-4Zm-10 6.5A1.5 1.5 0 0 1 3 9h5a1.5 1.5 0 0 1 1.5 1.5v.112a1.38 1.38 0 0 1-.01.137a2.853 2.853 0 0 1-.524 1.342C8.419 12.846 7.379 13.5 5.5 13.5c-1.878 0-2.918-.654-3.467-1.409a2.853 2.853 0 0 1-.523-1.342a1.906 1.906 0 0 1-.01-.137V10.5Zm1 .09v.007l.004.049a1.853 1.853 0 0 0 .338.857c.326.448 1.036.997 2.658.997c1.622 0 2.332-.549 2.658-.997a1.853 1.853 0 0 0 .338-.857a.912.912 0 0 0 .004-.05V10.5A.5.5 0 0 0 8 10H3a.5.5 0 0 0-.5.5v.09Zm9 1.91c-.588 0-1.07-.09-1.46-.238a3.85 3.85 0 0 0 .361-.932c.268.101.624.17 1.099.17c1.119 0 1.578-.382 1.78-.666a1.224 1.224 0 0 0 .218-.56l.002-.028a.25.25 0 0 0-.25-.246h-2.8A2.49 2.49 0 0 0 10 9h3.25c.69 0 1.25.56 1.25 1.25v.017a1.352 1.352 0 0 1-.008.109a2.225 2.225 0 0 1-.398 1.04c-.422.591-1.213 1.084-2.594 1.084Z"/>
                </svg>
              </Link>
              <Link 
                href=""
                
              >
                <svg className="link_icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m17 17l4 4M3 11a8 8 0 1 0 16 0a8 8 0 0 0-16 0Z"/>
                </svg>
              </Link>
              <Button mt="5px" size="sm" colorScheme="blackAlpha">
                Sign in
              </Button>
            </Flex>
          </Box>
        </Flex>) : (<Flex 
          justifyContent="space-between"
          alignItems="center"
          minWidth='max-content'
        >
          <Box>
            <Link href="#" textDecoration="none !important"><Heading>foreste.</Heading></Link>
          </Box>
          <Box>
            <Flex
              placeItems={"center"}
              color="#000"
              fontSize="18px"
              fontWeight="semibold"
              gap={7}
            >
              <Link 
                href=""
              >
                <svg className="link_icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#000000" d="M19.75 10a.75.75 0 0 0-1.5 0h1.5Zm-14 0a.75.75 0 0 0-1.5 0h1.5Zm14.72 2.53a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM12 3l.53-.53a.75.75 0 0 0-1.06 0L12 3Zm-9.53 8.47a.75.75 0 1 0 1.06 1.06l-1.06-1.06ZM7 21.75h10v-1.5H7v1.5ZM19.75 19v-9h-1.5v9h1.5Zm-14 0v-9h-1.5v9h1.5Zm15.78-7.53l-9-9l-1.06 1.06l9 9l1.06-1.06Zm-10.06-9l-9 9l1.06 1.06l9-9l-1.06-1.06ZM17 21.75A2.75 2.75 0 0 0 19.75 19h-1.5c0 .69-.56 1.25-1.25 1.25v1.5Zm-10-1.5c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 7 21.75v-1.5Z"/>
                </svg>
              </Link>
              <Link 
                href=""
              >
                <svg className="link_icon" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#000000" d="M4 5.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0ZM5.5 3a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5Zm5 3a1 1 0 1 1 2 0a1 1 0 0 1-2 0Zm1-2a2 2 0 1 0 0 4a2 2 0 0 0 0-4Zm-10 6.5A1.5 1.5 0 0 1 3 9h5a1.5 1.5 0 0 1 1.5 1.5v.112a1.38 1.38 0 0 1-.01.137a2.853 2.853 0 0 1-.524 1.342C8.419 12.846 7.379 13.5 5.5 13.5c-1.878 0-2.918-.654-3.467-1.409a2.853 2.853 0 0 1-.523-1.342a1.906 1.906 0 0 1-.01-.137V10.5Zm1 .09v.007l.004.049a1.853 1.853 0 0 0 .338.857c.326.448 1.036.997 2.658.997c1.622 0 2.332-.549 2.658-.997a1.853 1.853 0 0 0 .338-.857a.912.912 0 0 0 .004-.05V10.5A.5.5 0 0 0 8 10H3a.5.5 0 0 0-.5.5v.09Zm9 1.91c-.588 0-1.07-.09-1.46-.238a3.85 3.85 0 0 0 .361-.932c.268.101.624.17 1.099.17c1.119 0 1.578-.382 1.78-.666a1.224 1.224 0 0 0 .218-.56l.002-.028a.25.25 0 0 0-.25-.246h-2.8A2.49 2.49 0 0 0 10 9h3.25c.69 0 1.25.56 1.25 1.25v.017a1.352 1.352 0 0 1-.008.109a2.225 2.225 0 0 1-.398 1.04c-.422.591-1.213 1.084-2.594 1.084Z"/>
                </svg>
              </Link>
              <Link 
                href=""
                
              >
                <svg className="link_icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m17 17l4 4M3 11a8 8 0 1 0 16 0a8 8 0 0 0-16 0Z"/>
                </svg>
              </Link>
              <Button mt="5px" size="md" colorScheme="blackAlpha">
                Sign in
              </Button>
            </Flex>
          </Box>
        </Flex>)}
    </Box>
  );
}

export default Nav;
