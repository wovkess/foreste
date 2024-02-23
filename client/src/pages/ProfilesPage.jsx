import React from "react";
import { Text, Flex, Box } from "@chakra-ui/react";
import NavHome from "../components/NavBar";
import colors from "../styles/colors";
const ProfilesPage = () =>{
    const colorPallet = colors();
    const midnight = colorPallet.midnight;
    return (
        <Flex width={'100%'} height={'100vh'} backgroundColor={midnight}>
            <NavHome />

        </Flex>
    )
}
export default ProfilesPage;

