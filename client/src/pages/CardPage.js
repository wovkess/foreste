import React from "react";
import {
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";

function CardPage() {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading fontSize="2xl">Profile name</Heading>
          <Text>Langs</Text>
          <Text color="grey.600" fontSize="2xl">
            Salary: $450
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" borderRadius="8px" colorScheme="blackAlpha">
            Buy now
          </Button>
          <Button variant="ghost" colorScheme="blackAlpha">
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

export default CardPage;
