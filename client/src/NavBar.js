import React from 'react'
import './App.css'
import { Tabs,TabIndicator, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

function Nav(){
    return(
        <Tabs position="relative" variant="unstyled">
            <TabList>
            <Tab>One</Tab>
            <Tab>Two</Tab>
            <Tab>Three</Tab>
            </TabList>
            <TabIndicator
            mt="-1.5px"
            height="2px"
            bg="blue.500"
            borderRadius="1px"
            />
            <TabPanels>
            <TabPanel>
            </TabPanel>
            <TabPanel>

            </TabPanel>
            <TabPanel>
            </TabPanel>
            </TabPanels>
        </Tabs>
    );
}
export default Nav;
