import React from "react";
import { Link } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import colors from "../styles/colors";
const ProductsPage = () =>{
    const midnight = colors().midnight;
    
    return(
        <Flex width={'100%'} height={'100vh'} backgroundColor={midnight}>
            <NavBar />

        </Flex>
    )
}
export default ProductsPage; 