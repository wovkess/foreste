import React from "react";
import {
    Flex, 
} from "@chakra-ui/react"

import { Link } from "react-router-dom";
import "../styles/App.css"


function Footer(){
    return(
        <Flex className="footer_links" marginTop={'auto'} gap={6} mb={'30px'}>
            <Link className="f-link">foreste.&copy; 2024</Link>
            <Link className="f-link">Privacy & Legal</Link>
            <Link className="f-link">News</Link>
            <Link className="f-link">Contacts</Link>
        </Flex>
    );
};


export default Footer;



