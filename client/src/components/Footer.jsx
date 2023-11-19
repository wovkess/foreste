import React from "react";
import {
    Flex, 
    Link

} from "@chakra-ui/react"
import "../styles/Footer.css";


function Footer(){
    return(
        <Flex className="footer_links" gap={6}>
            <Link className="f-link">foreste.&copy; 2023</Link>
            <Link className="f-link">Privacy & Legal</Link>
            <Link className="f-link">News</Link>
            <Link className="f-link">Contacts</Link>
        </Flex>
    );
};


export default Footer;