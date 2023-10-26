import React from "react";
import "./styles/NavBar.css";
import {
  Button,
  Heading,
  Spacer,
  Flex,
  Box,
  Container,
  Grid,
  SimpleGrid,
  Link,
  Center,
} from "@chakra-ui/react";

function Nav() {
  return (
    <Box boxShadow="md" padding={4}>
      <Container maxW={1400}>
        <SimpleGrid templateColumns="repeat(3, 1fr)">
          <Box>
            <Heading>foreste.</Heading>
          </Box>
          <Flex
            placeItems={"center"}
            color="black"
            fontSize="18px"
            fontWeight="semibold"
            gap={10}
          >
            <Link outline="none" href="">
              Home
            </Link>
            <Link href="">Profiles</Link>
          </Flex>
          <Box>
            <Button mt="5px" size="md" colorScheme="blackAlpha" float="right">
              Sign in
            </Button>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default Nav;
